// src/Auth.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import '../../styles/App.css';

const logo = "/Cartoon.PNG";

function Auth({ onAuthSuccess, isLoginProp }) {
  // States for login/signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  // OTP verification states
  const [awaitingOTP, setAwaitingOTP] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [pendingPassword, setPendingPassword] = useState('');
  const [pendingDisplayName, setPendingDisplayName] = useState('');

  // Forgot password states
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resettingPassword, setResettingPassword] = useState(false);

  // Password recovery
  const [inPasswordRecovery, setInPasswordRecovery] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  // UI messages
  const [error, setError] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof isLoginProp === 'boolean') {
      setIsLogin(isLoginProp);
    }
  }, [isLoginProp]);

  // Detect password recovery link
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setInPasswordRecovery(true);
        setForgotPasswordMode(false);
        setAwaitingOTP(false);
        setError(null);
        setInfoMessage(null);
      }
    });
    const subscription = data?.subscription;
    return () => {
      if (subscription && typeof subscription.unsubscribe === 'function') {
        subscription.unsubscribe();
      }
    };
  }, []);

  // Step 1: Send OTP code
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);
    setLoading(true);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Email must not be empty.');
      setLoading(false);
      return;
    }
    if (!password) {
      setError('Password must not be empty.');
      setLoading(false);
      return;
    }
    if (!isLogin && !displayName.trim()) {
      setError('Display name is required for registration.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // For login: Check if user exists and password is correct first
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password,
        });

        if (loginError) {
          setError(`Login failed: ${loginError.message}`);
          setLoading(false);
          return;
        }

        // If login successful, send OTP for verification
        const { error: otpError } = await supabase.auth.signInWithOtp({
          email: trimmedEmail,
          options: {
            shouldCreateUser: false,
          }
        });

        // Sign out immediately after sending OTP
        await supabase.auth.signOut();

        if (otpError) {
          setError(`Failed to send verification code: ${otpError.message}`);
          setLoading(false);
          return;
        }

        // Store password temporarily for final login after OTP verification
        setPendingPassword(password);
        setAwaitingOTP(true);
        setInfoMessage('✉️ Verification code sent! Check your email.');
        setLoading(false);

      } else {
        // For signup: Send OTP first, then create account after verification
        const { error: otpError } = await supabase.auth.signInWithOtp({
          email: trimmedEmail,
          options: {
            shouldCreateUser: false, // Don't create yet
          }
        });

        if (otpError) {
          setError(`Failed to send verification code: ${otpError.message}`);
          setLoading(false);
          return;
        }

        // Store credentials temporarily
        setPendingPassword(password);
        setPendingDisplayName(displayName.trim());
        setAwaitingOTP(true);
        setInfoMessage('✉️ Verification code sent! Check your email.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Unexpected error occurred. Check console.');
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and complete authentication
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);
    setLoading(true);

    if (!otpCode.trim()) {
      setError('Please enter the verification code.');
      setLoading(false);
      return;
    }

    try {
      // Verify the OTP code
      const { data: otpData, error: otpError } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: otpCode.trim(),
        type: 'email'
      });

      if (otpError) {
        setError(`Invalid or expired code: ${otpError.message}`);
        setLoading(false);
        return;
      }

      // OTP verified successfully
      if (isLogin) {
        // For login: Sign in with password now
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: pendingPassword,
        });

        if (loginError) {
          setError(`Login failed: ${loginError.message}`);
          setLoading(false);
          return;
        }

        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError) {
          console.error('Failed to fetch user data:', userError);
        } else if (userData?.user) {
          data.user = userData.user;
        }

        onAuthSuccess(data, false);

      } else {
        // For signup: Create the account now with verified email
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password: pendingPassword,
          options: {
            data: { display_name: pendingDisplayName },
            emailRedirectTo: window.location.origin,
          },
        });

        if (signUpError) {
          setError(`Sign-up failed: ${signUpError.message}`);
          setLoading(false);
          return;
        }

        if (data?.session) {
          onAuthSuccess(data, true);
        } else {
          setInfoMessage('Account created! Please log in.');
          resetToLogin();
        }
      }

      setLoading(false);

    } catch (err) {
      console.error('Unexpected error during OTP verification:', err);
      setError('Unexpected error occurred. Check console.');
      setLoading(false);
    }
  };

  // Reset to login state
  const resetToLogin = () => {
    setAwaitingOTP(false);
    setOtpCode('');
    setPendingPassword('');
    setPendingDisplayName('');
    setIsLogin(true);
    setEmail('');
    setPassword('');
    setDisplayName('');
    setError(null);
    setInfoMessage(null);
  };

  // Forgot password flow
  const sendResetEmail = async () => {
    setError(null);
    setInfoMessage(null);
    if (!resetEmail.trim()) {
      setError('Please enter your email to reset your password.');
      return;
    }
    setResettingPassword(true);
    
    // Send OTP for password reset
    const { error } = await supabase.auth.signInWithOtp({
      email: resetEmail.trim(),
      options: {
        shouldCreateUser: false,
      }
    });
    
    setResettingPassword(false);
    if (error) {
      setError(`Failed to send reset code: ${error.message}`);
    } else {
      setInfoMessage('✉️ Verification code sent! Check your email.');
      // You could switch to an OTP entry mode here for password reset
    }
  };

  // Update password after recovery
  const updatePassword = async () => {
    setError(null);
    setInfoMessage(null);
    if (!newPassword) {
      setError('Please enter a new password.');
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setError(`Failed to update password: ${error.message}`);
    } else {
      setInfoMessage('Password updated! You may now log in.');
      setInPasswordRecovery(false);
      setNewPassword('');
      resetToLogin();
      setForgotPasswordMode(false);
      setResetEmail('');
    }
  };

  // Password recovery screen
  if (inPasswordRecovery) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h2>Reset Your Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="auth-input"
          />
          <button onClick={updatePassword} className="auth-button">
            Update Password
          </button>
          {error && <div className="auth-message error">{error}</div>}
          {infoMessage && <div className="auth-message success">{infoMessage}</div>}
        </div>
      </div>
    );
  }

  // OTP verification screen
  if (awaitingOTP) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <img src={logo} alt="App Logo" className="auth-logo" />
          <h2 style={{ marginBottom: 20 }}>Enter Verification Code</h2>
          <p style={{ marginBottom: 20, fontSize: 14, color: '#666' }}>
            We sent a 6-digit code to <strong>{email}</strong>
          </p>

          <form onSubmit={handleVerifyOTP} style={{ width: '100%' }}>
            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              className="auth-input"
              maxLength={6}
              style={{ textAlign: 'center', fontSize: 20, letterSpacing: 4 }}
            />
            <button type="submit" disabled={loading} className="auth-button">
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
          </form>

          <p
            onClick={() => {
              setAwaitingOTP(false);
              setOtpCode('');
              setPendingPassword('');
              setPendingDisplayName('');
              setError(null);
              setInfoMessage(null);
            }}
            style={{ color: 'blue', cursor: 'pointer', fontWeight: 'bold', marginTop: 16 }}
          >
            ← Back
          </p>

          {error && <div className="auth-message error">{error}</div>}
          {infoMessage && <div className="auth-message success">{infoMessage}</div>}
        </div>
      </div>
    );
  }

  // Main login/register screen
  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="App Logo" className="auth-logo" />

        {!forgotPasswordMode ? (
          <>
            <h2 style={{ marginBottom: 20 }}>{isLogin ? 'Login' : 'Register'}</h2>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Display Name"
                  value={displayName}
                  required
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="auth-input"
                  style={{ marginTop: 8 }}
                />
              )}
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                style={{ marginTop: 8 }}
              />
              <button type="submit" disabled={loading} className="auth-button">
                {loading ? 'Sending code...' : isLogin ? 'Continue' : 'Create Account'}
              </button>
            </form>

            <p style={{ marginTop: 16 }}>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                  setInfoMessage(null);
                  setDisplayName('');
                }}
                style={{ color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}
              >
                {isLogin ? 'Register' : 'Login'}
              </span>
            </p>

            {isLogin && (
              <p
                onClick={() => {
                  setForgotPasswordMode(true);
                  setError(null);
                  setInfoMessage(null);
                  setResetEmail('');
                }}
                style={{ color: 'blue', cursor: 'pointer', fontWeight: 'bold', marginTop: 10 }}
              >
                Forgot Password?
              </p>
            )}

            {error && <div className="auth-message error">{error}</div>}
            {infoMessage && <div className="auth-message success">{infoMessage}</div>}
          </>
        ) : (
          <>
            <h2 style={{ marginBottom: 20 }}>Reset Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="auth-input"
            />
            <button
              onClick={sendResetEmail}
              disabled={resettingPassword}
              className="auth-button"
              style={{ marginTop: 10 }}
            >
              {resettingPassword ? 'Sending...' : 'Send Reset Code'}
            </button>
            <button
              onClick={() => {
                setForgotPasswordMode(false);
                setError(null);
                setInfoMessage(null);
                setResetEmail('');
              }}
              className="auth-button"
              style={{ marginTop: 10, backgroundColor: '#ccc', color: '#333' }}
            >
              Back
            </button>

            {error && <div className="auth-message error">{error}</div>}
            {infoMessage && <div className="auth-message success">{infoMessage}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
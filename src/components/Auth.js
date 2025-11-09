// src/Auth.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

import '../../styles/App.css';




const logo = "/Cartoon.PNG"

function Auth({ onAuthSuccess, isLoginProp }) {
  // States for login/signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLogin, setIsLogin] = useState(true);

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
        setError(null);
        setInfoMessage(null);
        setEmail('');
        setPassword('');
        setDisplayName('');
        setResetEmail('');
      }
    });
    const subscription = data?.subscription;
    return () => {
      if (subscription && typeof subscription.unsubscribe === 'function') {
        subscription.unsubscribe();
      }
    };
  }, []);

  // Handle login/register
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage(null);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Email must not be empty.');
      return;
    }
    if (!password) {
      setError('Password must not be empty.');
      return;
    }
    if (!isLogin && !displayName.trim()) {
      setError('Display name is required for registration.');
      return;
    }

    try {
      if (isLogin) {
        console.log('🔐 Attempting login...');
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password,
        });

        if (loginError) {
          setError(`Login failed: ${loginError.message}`);
          return;
        }

        if (!data.session) {
          setInfoMessage('No active session received. Check if email confirmation is required.');
          return;
        }

        console.log('✅ Login successful, fetching user data and profile...');
        
        // ✅ FIX: Fetch fresh user data with metadata
        const { data: userData, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          console.error('❌ Failed to fetch user data:', userError);
        } else if (userData?.user) {
          data.user = userData.user;
          console.log('✅ User data loaded:', userData.user.email);
          console.log('📋 User metadata:', userData.user.user_metadata);
        }

        // ✅ NEW: Fetch profile from database immediately
        console.log('📍 Fetching profile for user:', data.user.id);
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .maybeSingle();

        if (profileError) {
          console.error('❌ Profile fetch error:', profileError);
          console.error('❌ Error details:', {
            message: profileError.message,
            code: profileError.code,
            hint: profileError.hint,
          });
          
          // Try to create profile if it doesn't exist
          if (profileError.code === 'PGRST116') {
            console.log('⚠️ Profile not found, creating one...');
            const { data: newProfile, error: createError } = await supabase
              .from('profiles')
              .insert({
                id: data.user.id,
                email: data.user.email,
                full_name: data.user.user_metadata?.full_name || data.user.user_metadata?.display_name || '',
                display_name: data.user.user_metadata?.display_name || '',
                avatar_url: data.user.user_metadata?.avatar_url || '',
                is_premium: data.user.user_metadata?.is_premium || false,
              })
              .select()
              .single();
            
            if (createError) {
              console.error('❌ Failed to create profile:', createError);
            } else {
              console.log('✅ Profile created successfully');
            }
          }
        } else if (profileData) {
          console.log('✅ Profile loaded from database:', {
            email: profileData.email,
            is_premium: profileData.is_premium,
            subscription_status: profileData.subscription_status,
          });
        } else {
          console.log('⚠️ No profile data returned');
        }

        // Call onAuthSuccess with the updated data
        onAuthSuccess(data, false);
      }
      else {
        console.log('📝 Attempting registration...');
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: trimmedEmail,
          password,
          options: { data: { display_name: displayName.trim() } },
        });
        
        if (signUpError) {
          setError(`Sign-up failed: ${signUpError.message}`);
          return;
        }
        
        if (data?.user && !data?.session) {
          setInfoMessage('✉️ Account created! Please check your email for verification.');
          return;
        }
        
        if (data?.session) {
          console.log('✅ Registration successful');
          
          // Profile should be auto-created by database trigger
          // Wait a moment for trigger to complete
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Verify profile was created
          const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .maybeSingle();
          
          if (profileData) {
            console.log('✅ Profile confirmed for new user');
          } else {
            console.log('⚠️ Profile not found for new user, may need manual creation');
          }
          
          onAuthSuccess(data, true);
        }
      }
    } catch (err) {
      console.error('❌ Unexpected error during authentication:', err);
      setError('Unexpected error occurred during authentication. Check console.');
    }
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
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail.trim(), {
      redirectTo: window.location.origin,
    });
    setResettingPassword(false);
    if (error) setError(`Failed to send reset email: ${error.message}`);
    else setInfoMessage('✉️ Password reset email sent! Check your inbox.');
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
      setIsLogin(true);
      setEmail('');
      setPassword('');
      setForgotPasswordMode(false);
      setResetEmail('');
    }
  };

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
              />
              <button type="submit" className="auth-button">
                {isLogin ? 'Login' : 'Register'}
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

            {/* Styled message boxes */}
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
              {resettingPassword ? 'Sending...' : 'Send Reset Email'}
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

            {/* Styled message boxes */}
            {error && <div className="auth-message error">{error}</div>}
            {infoMessage && <div className="auth-message success">{infoMessage}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
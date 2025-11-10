module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = 'https://beegwfvdcxwlxjrffrki.supabase.co'; // Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZWd3ZnZkY3h3bHhqcmZmcmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTkzNDYsImV4cCI6MjA2ODE3NTM0Nn0.Tz3XhM8ZCFUH_sHbdqVDCxBfvZVjKx7jDafQmtlzvo0'; // Replace with your public key
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/si_app copy/src/components/Auth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/Auth.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript)");
;
;
;
;
const logo = "/Cartoon.PNG";
function Auth({ onAuthSuccess, isLoginProp }) {
    // States for login/signup
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Forgot password states
    const [forgotPasswordMode, setForgotPasswordMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetEmail, setResetEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [resettingPassword, setResettingPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Password recovery
    const [inPasswordRecovery, setInPasswordRecovery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // UI messages
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [infoMessage, setInfoMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof isLoginProp === 'boolean') {
            setIsLogin(isLoginProp);
        }
    }, [
        isLoginProp
    ]);
    // Detect password recovery link
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((event)=>{
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
        return ()=>{
            if (subscription && typeof subscription.unsubscribe === 'function') {
                subscription.unsubscribe();
            }
        };
    }, []);
    // Handle login/register
    const handleSubmit = async (e)=>{
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
                const { data, error: loginError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                    email: trimmedEmail,
                    password
                });
                if (loginError) {
                    setError(`Login failed: ${loginError.message}`);
                } else if (!data.session) {
                    setInfoMessage('No active session received. Check if email confirmation is required.');
                } else {
                    // 🩵 Fetch fresh user data including metadata
                    const { data: userData, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (userError) {
                        console.error('Failed to fetch user data:', userError);
                    } else if (userData?.user) {
                        data.user = userData.user; // attach full user with metadata
                    }
                    onAuthSuccess(data, false);
                }
            } else {
                const { data, error: signUpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                    email: trimmedEmail,
                    password,
                    options: {
                        data: {
                            display_name: displayName.trim()
                        }
                    }
                });
                if (signUpError) {
                    setError(`Sign-up failed: ${signUpError.message}`);
                    return;
                }
                if (data?.user && !data?.session) {
                    setInfoMessage('✉️ Account created! Please check your for verification.');
                    return;
                }
                if (data?.session) {
                    onAuthSuccess(data, true);
                }
            }
        } catch (err) {
            console.error('Unexpected error during authentication:', err);
            setError('Unexpected error occurred during authentication. Check console.');
        }
    };
    // Forgot password flow
    const sendResetEmail = async ()=>{
        setError(null);
        setInfoMessage(null);
        if (!resetEmail.trim()) {
            setError('Please enter your email to reset your password.');
            return;
        }
        setResettingPassword(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.resetPasswordForEmail(resetEmail.trim(), {
            redirectTo: window.location.origin
        });
        setResettingPassword(false);
        if (error) setError(`Failed to send reset email: ${error.message}`);
        else setInfoMessage('✉️ Password reset email sent! Check your inbox.');
    };
    // Update password after recovery
    const updatePassword = async ()=>{
        setError(null);
        setInfoMessage(null);
        if (!newPassword) {
            setError('Please enter a new password.');
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
            password: newPassword
        });
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "auth-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "auth-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Reset Your Password"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/Auth.js",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "New Password",
                        value: newPassword,
                        onChange: (e)=>setNewPassword(e.target.value),
                        className: "auth-input"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/Auth.js",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: updatePassword,
                        className: "auth-button",
                        children: "Update Password"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/Auth.js",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-message error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/Auth.js",
                        lineNumber: 183,
                        columnNumber: 21
                    }, this),
                    infoMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-message success",
                        children: infoMessage
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/Auth.js",
                        lineNumber: 184,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/Auth.js",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/si_app copy/src/components/Auth.js",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "auth-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "auth-box",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: logo,
                    alt: "App Logo",
                    className: "auth-logo"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/src/components/Auth.js",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                !forgotPasswordMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 20
                            },
                            children: isLogin ? 'Login' : 'Register'
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            style: {
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Email",
                                    value: email,
                                    required: true,
                                    onChange: (e)=>setEmail(e.target.value),
                                    className: "auth-input"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/Auth.js",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Display Name",
                                    value: displayName,
                                    required: true,
                                    onChange: (e)=>setDisplayName(e.target.value),
                                    className: "auth-input",
                                    style: {
                                        marginTop: 8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/Auth.js",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Password",
                                    value: password,
                                    required: true,
                                    onChange: (e)=>setPassword(e.target.value),
                                    className: "auth-input"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/Auth.js",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "auth-button",
                                    children: isLogin ? 'Login' : 'Register'
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/Auth.js",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: 16
                            },
                            children: [
                                isLogin ? "Don't have an account?" : 'Already have an account?',
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    onClick: ()=>{
                                        setIsLogin(!isLogin);
                                        setError(null);
                                        setInfoMessage(null);
                                        setDisplayName('');
                                    },
                                    style: {
                                        color: 'blue',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                    },
                                    children: isLogin ? 'Register' : 'Login'
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/Auth.js",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this),
                        isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            onClick: ()=>{
                                setForgotPasswordMode(true);
                                setError(null);
                                setInfoMessage(null);
                                setResetEmail('');
                            },
                            style: {
                                color: 'blue',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                marginTop: 10
                            },
                            children: "Forgot Password?"
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 248,
                            columnNumber: 15
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-message error",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 262,
                            columnNumber: 23
                        }, this),
                        infoMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-message success",
                            children: infoMessage
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 263,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 20
                            },
                            children: "Reset Password"
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Enter your email",
                            value: resetEmail,
                            onChange: (e)=>setResetEmail(e.target.value),
                            className: "auth-input"
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: sendResetEmail,
                            disabled: resettingPassword,
                            className: "auth-button",
                            style: {
                                marginTop: 10
                            },
                            children: resettingPassword ? 'Sending...' : 'Send Reset Email'
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setForgotPasswordMode(false);
                                setError(null);
                                setInfoMessage(null);
                                setResetEmail('');
                            },
                            className: "auth-button",
                            style: {
                                marginTop: 10,
                                backgroundColor: '#ccc',
                                color: '#333'
                            },
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-message error",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 297,
                            columnNumber: 23
                        }, this),
                        infoMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-message success",
                            children: infoMessage
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/Auth.js",
                            lineNumber: 298,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/si_app copy/src/components/Auth.js",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/si_app copy/src/components/Auth.js",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Auth;
}),
"[project]/si_app copy/src/components/MembershipCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/MembershipCard.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const logo = "/Cartoon.PNG";
const MembershipCard = ({ name })=>{
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${expanded ? "expanded-card" : "shake-animation glisten"}`,
        style: {
            background: "linear-gradient(145deg, #e5e7eb, #d1d5db)",
            borderRadius: 16,
            width: expanded ? "90vw" : "91%",
            maxWidth: expanded ? "1000px" : "420px",
            aspectRatio: expanded ? "2.2" : "1.6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Segoe UI', sans-serif",
            boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
            padding: "24px 16px",
            boxSizing: "border-box",
            minHeight: 260,
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s ease"
        },
        children: [
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(false),
                style: {
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "transparent",
                    border: "none",
                    fontSize: 20,
                    cursor: "pointer",
                    color: "#333"
                },
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: logo || "/placeholder.svg",
                alt: "Logo",
                style: {
                    height: expanded ? 80 : 120,
                    marginBottom: expanded ? 8 : 12
                }
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: expanded ? 18 : 20,
                    fontWeight: 800,
                    margin: 0,
                    color: "#111",
                    textAlign: "center"
                },
                children: "THE HIGHLIGHTING SI"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: expanded ? 12 : 14,
                    letterSpacing: expanded ? 4 : 6,
                    margin: "4px 0 14px",
                    color: "#111",
                    textAlign: "center"
                },
                children: "EXPERIENCE"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "92%",
                    height: 1,
                    backgroundColor: "#444",
                    margin: "0 auto 14px auto"
                }
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "92%",
                    fontSize: expanded ? 14 : 15,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 auto 8px auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: name || "Your Name"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "EXP 09/30/26"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(true),
                style: {
                    marginTop: 16,
                    padding: "10px 18px",
                    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                },
                children: "Expand"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/MembershipCard.js",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/src/components/MembershipCard.js",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MembershipCard;
}),
"[project]/si_app copy/src/components/BusinessForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript)");
;
;
;
function BusinessForm({ onAddBusiness }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: '',
        tags: '',
        zipCode: '',
        address: '',
        discount: '10'
    });
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoFiles, setPhotoFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    // Sanitize filenames: remove non-ASCII characters
    const sanitizeFilename = (name)=>name.replace(/[^\w\-\.]/g, '_');
    const uploadFile = async (file, pathPrefix)=>{
        const cleanName = sanitizeFilename(file.name);
        const filePath = `${pathPrefix}/${Date.now()}_${cleanName}`;
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('business-assets').upload(filePath, file, {
            upsert: true
        });
        if (uploadError) throw uploadError;
        const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('business-assets').getPublicUrl(filePath);
        return data.publicUrl;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const logoUrl = logoFile ? await uploadFile(logoFile, 'logos') : null;
            const photoUrls = [];
            for (const photo of photoFiles){
                const url = await uploadFile(photo, 'photos');
                photoUrls.push(url);
            }
            // Insert business with discount included
            const { error: insertError, data } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('businesses').insert([
                {
                    name: formData.name.trim(),
                    description: formData.description.trim(),
                    tags: formData.tags.split(',').map((t)=>t.trim()).filter(Boolean),
                    zip_code: formData.zipCode.trim(),
                    address: formData.address.trim(),
                    discount: formData.discount,
                    logo_url: logoUrl,
                    photo_urls: photoUrls,
                    created_at: new Date()
                }
            ]).select();
            if (insertError) {
                setError(insertError.message);
                setLoading(false);
                return;
            }
            if (data && data.length > 0) {
                onAddBusiness(data[0]);
                setFormData({
                    name: '',
                    description: '',
                    tags: '',
                    zipCode: '',
                    address: '',
                    discount: '10'
                });
                setLogoFile(null);
                setPhotoFiles([]);
            } else {
                setError('Unexpected error: no business data returned after insert.');
            }
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };
    const sharedInputStyles = {
        width: '100%',
        padding: '10px 14px',
        borderRadius: 8,
        border: '1px solid #ccc',
        marginBottom: 16,
        fontSize: 16,
        outline: 'none',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        style: {
            maxWidth: 480,
            margin: '20px auto',
            padding: 24,
            backgroundColor: '#f8faff',
            borderRadius: 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#333'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: 'center',
                    color: '#0457b8',
                    marginBottom: 20
                },
                children: "Add Your Business"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Business Name*"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                required: true,
                placeholder: "Enter business name",
                style: sharedInputStyles
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Description*"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "description",
                value: formData.description,
                onChange: handleChange,
                required: true,
                placeholder: "Describe your business",
                rows: 4,
                style: {
                    ...sharedInputStyles,
                    resize: 'vertical'
                }
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Zip Code*"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "zipCode",
                value: formData.zipCode,
                onChange: handleChange,
                required: true,
                placeholder: "e.g. 10314",
                style: sharedInputStyles
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Address* (for Google Maps)"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "address",
                value: formData.address,
                onChange: handleChange,
                required: true,
                placeholder: "123 Main St, Staten Island, NY 10314",
                style: sharedInputStyles
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            formData.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                title: "map-preview",
                width: "100%",
                height: "200",
                style: {
                    border: 0,
                    borderRadius: 8
                },
                loading: "lazy",
                allowFullScreen: true,
                src: `https://www.google.com/maps/embed/v1/place?key=AIzaSyDbunv4FltSPw8q9_jQJoVDrCJ7dPjsVaw&q=${encodeURIComponent(formData.address)}`
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 173,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Tags (comma separated)"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "tags",
                value: formData.tags,
                onChange: handleChange,
                placeholder: "e.g. pizza, italian, family owned",
                style: sharedInputStyles
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Discount Offer*"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "discount",
                value: formData.discount,
                onChange: handleChange,
                style: sharedInputStyles,
                required: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "5",
                        children: "5% Discount"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "10",
                        children: "10% Discount"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "15",
                        children: "15% Discount"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Logo (one image)"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*",
                onChange: (e)=>setLogoFile(e.target.files?.[0] || null),
                style: {
                    marginBottom: 16
                }
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    marginBottom: 6,
                    fontWeight: '600'
                },
                children: "Photos (multiple)"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*",
                multiple: true,
                onChange: (e)=>setPhotoFiles(Array.from(e.target.files || [])),
                style: {
                    marginBottom: 24
                }
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: 'red',
                    textAlign: 'center',
                    marginBottom: 16
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 237,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                style: {
                    width: '100%',
                    padding: '12px 0',
                    backgroundColor: '#007acc',
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: '600',
                    fontSize: 16,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 2px 6px rgba(0, 122, 204, 0.5)',
                    transition: 'background-color 0.3s ease',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                },
                onMouseEnter: (e)=>{
                    if (!loading) e.target.style.backgroundColor = '#005fa3';
                },
                onMouseLeave: (e)=>{
                    if (!loading) e.target.style.backgroundColor = '#007acc';
                },
                children: loading ? 'Submitting...' : 'Submit Business'
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessForm.js",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/src/components/BusinessForm.js",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = BusinessForm;
}),
"[project]/si_app copy/src/components/BusinessProfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function BusinessProfile({ business, onClose, isAdmin, onPhotosUpdate, session, onRatingUpdate }) {
    const [selectedPhoto, setSelectedPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localPhotos, setLocalPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(business.photo_urls || []);
    const [localBusiness, setLocalBusiness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(business);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalPhotos(business.photo_urls || []);
        setLocalBusiness(business);
    }, [
        business.photo_urls,
        business
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Lock background scroll when modal is open
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflowY = 'scroll';
        return ()=>{
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflowY = '';
            window.scrollTo(0, scrollY);
        };
    }, []);
    if (!business) return null;
    const handleRating = async (star)=>{
        console.log("Rating clicked - Session:", session);
        console.log("User:", session?.user);
        // Check if user is authenticated
        const { supabase } = await __turbopack_context__.A("[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript, async loader)");
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        console.log("Current session from getSession:", currentSession);
        if (!session?.user && !currentSession?.user) {
            alert("Please sign in to rate this business.");
            return;
        }
        const userId = session?.user?.id || currentSession?.user?.id;
        try {
            const { supabase } = await __turbopack_context__.A("[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript, async loader)");
            const { error: insertError } = await supabase.from("reviews").insert({
                business_id: business.id,
                user_id: userId,
                rating: star
            });
            if (insertError) throw insertError;
            const { data: allReviews, error: fetchError } = await supabase.from("reviews").select("rating").eq("business_id", business.id);
            if (fetchError) throw fetchError;
            const total = allReviews.length;
            const avg = total > 0 ? allReviews.reduce((a, r)=>a + r.rating, 0) / total : 0;
            const { error: updateError } = await supabase.from("businesses").update({
                rating: avg.toFixed(1),
                review_count: total
            }).eq("id", business.id);
            if (updateError) throw updateError;
            const updatedBusiness = {
                ...localBusiness,
                rating: avg.toFixed(1),
                review_count: total
            };
            setLocalBusiness(updatedBusiness);
            if (onRatingUpdate) {
                onRatingUpdate(updatedBusiness);
            }
        } catch (err) {
            console.error("Rating error:", err);
            alert("Error submitting your rating.");
        }
    };
    const handlePhotoUpload = async (e)=>{
        const files = Array.from(e.target.files);
        if (!files.length || !onPhotosUpdate) return;
        setUploading(true);
        try {
            const newPhotoUrls = await onPhotosUpdate(business.id, files);
            if (newPhotoUrls && newPhotoUrls.length > 0) {
                setLocalPhotos((prev)=>[
                        ...prev,
                        ...newPhotoUrls
                    ]);
            }
        } catch (error) {
            console.error('Error uploading photos:', error);
            alert('Failed to upload photos');
        } finally{
            setUploading(false);
        }
    };
    const handleDeletePhoto = async (photoUrl, index)=>{
        if (!window.confirm('Delete this photo?')) return;
        try {
            const { supabase } = await __turbopack_context__.A("[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript, async loader)");
            const urlParts = photoUrl.split('/business-logos/');
            if (urlParts.length < 2) {
                throw new Error('Invalid photo URL');
            }
            const filePath = urlParts[1].split('?')[0];
            const { error: storageError } = await supabase.storage.from('business-logos').remove([
                filePath
            ]);
            if (storageError) throw storageError;
            const updatedPhotos = localPhotos.filter((_, i)=>i !== index);
            const { error: dbError } = await supabase.from('businesses').update({
                photo_urls: updatedPhotos
            }).eq('id', business.id);
            if (dbError) throw dbError;
            setLocalPhotos(updatedPhotos);
            alert('Photo deleted successfully');
        } catch (error) {
            console.error('Error deleting photo:', error);
            alert('Failed to delete photo');
        }
    };
    const allPhotos = [];
    if (business.logo_url && business.logo_url.trim() !== '' && business.logo_url !== '/placeholder.svg') {
        allPhotos.push({
            url: business.logo_url,
            isLogo: true
        });
    }
    localPhotos.forEach((url)=>{
        allPhotos.push({
            url,
            isLogo: false
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    padding: 20,
                    overflowY: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: 'white',
                        borderRadius: 24,
                        maxWidth: 600,
                        width: '100%',
                        maxHeight: '92vh',
                        overflowY: 'auto',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                        position: 'relative',
                        fontFamily: "'Montserrat', sans-serif"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#4BA3D9',
                                borderRadius: '24px 24px 0 0',
                                padding: '32px 32px 24px',
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    style: {
                                        position: 'absolute',
                                        right: 20,
                                        top: 20,
                                        background: 'rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(10px)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: 36,
                                        height: 36,
                                        fontSize: 24,
                                        fontWeight: '300',
                                        cursor: 'pointer',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.target.style.background = 'rgba(255,255,255,0.3)';
                                        e.target.style.transform = 'scale(1.1)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.target.style.background = 'rgba(255,255,255,0.2)';
                                        e.target.style.transform = 'scale(1)';
                                    },
                                    "aria-label": "Close",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        margin: 0,
                                        color: 'black',
                                        fontSize: 32,
                                        fontWeight: '700',
                                        letterSpacing: '-0.5px',
                                        marginBottom: 16
                                    },
                                    children: business.name ?? 'N/A'
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        marginTop: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 4
                                            },
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>handleRating(star),
                                                    style: {
                                                        color: (localBusiness.rating || 0) >= star ? "#fbbf24" : "rgba(255,255,255,0.4)",
                                                        fontSize: 24,
                                                        cursor: session?.user ? 'pointer' : 'default',
                                                        transition: 'all 0.2s',
                                                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        if (session?.user) {
                                                            e.target.style.transform = 'scale(1.2)';
                                                        }
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.target.style.transform = 'scale(1)';
                                                    },
                                                    children: "★"
                                                }, star, false, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 15,
                                                color: 'white',
                                                fontWeight: '600',
                                                backgroundColor: 'rgba(255,255,255,0.2)',
                                                padding: '4px 12px',
                                                borderRadius: 20,
                                                backdropFilter: 'blur(10px)'
                                            },
                                            children: [
                                                localBusiness.rating || "0.0",
                                                " (",
                                                localBusiness.review_count || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '28px 32px 32px'
                            },
                            children: [
                                allPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 28
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 12,
                                                overflowX: 'auto',
                                                paddingBottom: 8,
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: '#667eea #f1f1f1'
                                            },
                                            children: [
                                                allPhotos.map((photo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'relative',
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: photo.url,
                                                                alt: photo.isLogo ? `${business.name ?? 'Business'} logo` : `Photo ${i}`,
                                                                style: {
                                                                    height: 140,
                                                                    width: 140,
                                                                    objectFit: 'cover',
                                                                    borderRadius: 16,
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                                                                },
                                                                onClick: ()=>setSelectedPhoto(photo.url),
                                                                onMouseEnter: (e)=>{
                                                                    e.target.style.transform = 'scale(1.05) translateY(-4px)';
                                                                    e.target.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.target.style.transform = 'scale(1) translateY(0)';
                                                                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                                lineNumber: 300,
                                                                columnNumber: 23
                                                            }, this),
                                                            isAdmin && !photo.isLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeletePhoto(photo.url, i - 1),
                                                                style: {
                                                                    position: 'absolute',
                                                                    top: 8,
                                                                    right: 8,
                                                                    backgroundColor: 'rgba(239, 68, 68, 0.95)',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '50%',
                                                                    width: 28,
                                                                    height: 28,
                                                                    cursor: 'pointer',
                                                                    fontSize: 16,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontWeight: 'bold',
                                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                                    transition: 'all 0.2s'
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.target.style.backgroundColor = 'rgba(220, 38, 38, 1)';
                                                                    e.target.style.transform = 'scale(1.1)';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.95)';
                                                                    e.target.style.transform = 'scale(1)';
                                                                },
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                                lineNumber: 323,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                        lineNumber: 299,
                                                        columnNumber: 21
                                                    }, this)),
                                                isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                                                        color: 'white',
                                                        borderRadius: 16,
                                                        width: 140,
                                                        height: 140,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: uploading ? 'not-allowed' : 'pointer',
                                                        fontSize: '40px',
                                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                                                        opacity: uploading ? 0.6 : 1,
                                                        flexShrink: 0,
                                                        border: '2px dashed rgba(255,255,255,0.4)',
                                                        transition: 'all 0.3s'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        if (!uploading) {
                                                            e.target.style.transform = 'scale(1.05)';
                                                            e.target.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)';
                                                        }
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.target.style.transform = 'scale(1)';
                                                        e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                                                    },
                                                    children: [
                                                        uploading ? '⏳' : '📷',
                                                        !uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 13,
                                                                marginTop: 8,
                                                                fontWeight: '500'
                                                            },
                                                            children: "Add Photos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                            lineNumber: 391,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            multiple: true,
                                                            disabled: uploading,
                                                            style: {
                                                                display: 'none'
                                                            },
                                                            onChange: handlePhotoUpload
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                            lineNumber: 392,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 360,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                color: '#2563eb',
                                                marginTop: 12,
                                                fontWeight: '500'
                                            },
                                            children: "⏳ Uploading photos..."
                                        }, void 0, false, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                business.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 15,
                                        lineHeight: '1.7em',
                                        marginBottom: 24,
                                        color: '#4b5563'
                                    },
                                    children: business.description
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 12,
                                        marginBottom: 24
                                    },
                                    children: [
                                        business.address && business.address !== 'N/A' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'linear-gradient(to right, #f3f4f6, #ffffff)',
                                                padding: '16px 20px',
                                                borderRadius: 12,
                                                border: '1px solid #e5e7eb'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#9ca3af',
                                                        fontWeight: '600',
                                                        marginBottom: 4
                                                    },
                                                    children: "📍 ADDRESS"
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 15,
                                                        color: '#1f2937',
                                                        fontWeight: '500'
                                                    },
                                                    children: business.address
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: 12
                                            },
                                            children: [
                                                business.zip_code && business.zip_code !== 'N/A' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: 'linear-gradient(to right, #f3f4f6, #ffffff)',
                                                        padding: '16px 20px',
                                                        borderRadius: 12,
                                                        border: '1px solid #e5e7eb'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: '#9ca3af',
                                                                fontWeight: '600',
                                                                marginBottom: 4
                                                            },
                                                            children: "🏷️    ZIP CODE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 15,
                                                                color: '#1f2937',
                                                                fontWeight: '500'
                                                            },
                                                            children: business.zip_code
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                            lineNumber: 457,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                business.phone_number && business.phone_number !== 'N/A' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: 'linear-gradient(to right, #f3f4f6, #ffffff)',
                                                        padding: '16px 20px',
                                                        borderRadius: 12,
                                                        border: '1px solid #e5e7eb'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: '#9ca3af',
                                                                fontWeight: '600',
                                                                marginBottom: 4
                                                            },
                                                            children: "📞  PHONE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 15,
                                                                color: '#1f2937',
                                                                fontWeight: '500'
                                                            },
                                                            children: business.phone_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                            lineNumber: 473,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, this),
                                        business.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: '#4BA3D9',
                                                padding: '16px 20px',
                                                borderRadius: 12,
                                                color: 'white',
                                                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.4)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        fontWeight: '600',
                                                        marginBottom: 4,
                                                        opacity: 0.9
                                                    },
                                                    children: "🎁 DISCOUNT"
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 16,
                                                        fontWeight: '600'
                                                    },
                                                    children: business.discount
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                            lineNumber: 481,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                business.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderRadius: 16,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        title: "business-map",
                                        width: "100%",
                                        height: "280",
                                        style: {
                                            border: 0
                                        },
                                        loading: "lazy",
                                        allowFullScreen: true,
                                        src: `https://www.google.com/maps/embed/v1/place?key=AIzaSyDbunv4FltSPw8q9_jQJoVDrCJ7dPjsVaw&q=${encodeURIComponent(business.address)}`
                                    }, void 0, false, {
                                        fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                        lineNumber: 505,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            selectedPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1100,
                    padding: 20,
                    cursor: 'zoom-out',
                    animation: 'fadeIn 0.2s ease-out'
                },
                onClick: ()=>setSelectedPhoto(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedPhoto(null),
                        style: {
                            position: 'absolute',
                            right: 20,
                            top: 20,
                            background: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            borderRadius: '50%',
                            width: 44,
                            height: 44,
                            fontSize: 28,
                            fontWeight: '300',
                            cursor: 'pointer',
                            color: '#333',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1101,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                            transition: 'all 0.2s'
                        },
                        onMouseEnter: (e)=>{
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.background = 'white';
                        },
                        onMouseLeave: (e)=>{
                            e.target.style.transform = 'scale(1)';
                            e.target.style.background = 'rgba(255,255,255,0.95)';
                        },
                        "aria-label": "Close photo",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                        lineNumber: 546,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: selectedPhoto,
                        alt: "Enlarged view",
                        style: {
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            borderRadius: 16,
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                            cursor: 'default'
                        },
                        onClick: (e)=>e.stopPropagation()
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/BusinessProfile.js",
                lineNumber: 522,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = BusinessProfile;
}),
"[project]/si_app copy/src/components/LandingPage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const logo = "/Cartoon.PNG"; // center logo
function LandingPage({ onLoginClick, onGetStarted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "landing-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/bridge.jpg",
                alt: "Bridge",
                className: "landing-bg"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/LandingPage.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing-overlay"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/LandingPage.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing-topbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "landing-login-btn",
                    onClick: onLoginClick,
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/src/components/LandingPage.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/LandingPage.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "landing-title",
                        style: {
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "-0.5px"
                        },
                        children: "Experience the best of Staten Island — for less!"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/LandingPage.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "landing-subtext",
                        style: {
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 400,
                            lineHeight: "1.6em",
                            color: "black",
                            maxWidth: "600px",
                            margin: "0 auto"
                        },
                        children: "Join HLSI X to get 10% off at top local restaurants, shops and services for just $5 per month."
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/LandingPage.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: logo || "/placeholder.svg",
                        alt: "Logo",
                        className: "landing-logo-center",
                        style: {
                            marginTop: "20px",
                            maxWidth: "160px",
                            height: "auto"
                        }
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/LandingPage.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/LandingPage.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "landing-start-btn",
                        onClick: onGetStarted,
                        children: "Get started →"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/LandingPage.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "landing-tagline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "Because supporting local should feel rewarding."
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/LandingPage.js",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/LandingPage.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/LandingPage.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/src/components/LandingPage.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LandingPage;
}),
"[project]/si_app copy/src/components/StatenIslandMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/StatenIslandMap.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const StatenIslandMap = ({ businesses })=>{
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showList, setShowList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const STATEN_ISLAND_CENTER = {
        lat: 40.5795,
        lng: -74.1502
    };
    const filteredBusinesses = businesses.filter((business)=>business.name.toLowerCase().includes(searchTerm.toLowerCase()) || business.address && business.address.toLowerCase().includes(searchTerm.toLowerCase()));
    // Load Google Maps API
    // Replace the loadGoogleMaps useEffect in StatenIslandMap.jsx with this:
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadGoogleMaps = ()=>{
            // Check if Google Maps is already loaded
            if (window.google && window.google.maps) {
                console.log("Google Maps already loaded");
                setIsLoaded(true);
                return;
            }
            // Check if script is already being loaded
            const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
            if (existingScript) {
                console.log("Google Maps script already exists, waiting for load...");
                existingScript.addEventListener('load', ()=>{
                    setIsLoaded(true);
                });
                return;
            }
            // Load the script only if it doesn't exist
            console.log("Loading Google Maps script...");
            const script = document.createElement("script");
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbunv4FltSPw8q9_jQJoVDrCJ7dPjsVaw&libraries=places";
            script.async = true;
            script.defer = true;
            script.onload = ()=>{
                console.log("Google Maps loaded successfully");
                setIsLoaded(true);
            };
            script.onerror = ()=>{
                console.error("Failed to load Google Maps");
            };
            document.head.appendChild(script);
        };
        loadGoogleMaps();
    }, []);
    // Init map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoaded || !mapRef.current || !window.google) return;
        const mapInstance = new window.google.maps.Map(mapRef.current, {
            center: STATEN_ISLAND_CENTER,
            zoom: 11,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                }
            ]
        });
        setMap(mapInstance);
    }, [
        isLoaded
    ]);
    // Add markers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!map || !businesses?.length || !window.google) return;
        const markers = [];
        markersRef.current = {};
        businesses.forEach(async (business)=>{
            let lat = business.latitude ? Number.parseFloat(business.latitude) : null;
            let lng = business.longitude ? Number.parseFloat(business.longitude) : null;
            if ((!lat || !lng) && business.address) {
                try {
                    const geocoder = new window.google.maps.Geocoder();
                    const result = await new Promise((resolve, reject)=>{
                        geocoder.geocode({
                            address: `${business.address}, Staten Island, NY`
                        }, (results, status)=>{
                            if (status === "OK" && results?.length) resolve(results[0]);
                            else reject(status);
                        });
                    });
                    lat = result.geometry.location.lat();
                    lng = result.geometry.location.lng();
                } catch (error) {
                    console.error("Geocoding failed for:", business.address, error);
                    return;
                }
            }
            if (!lat || !lng) return;
            const marker = new window.google.maps.Marker({
                position: {
                    lat,
                    lng
                },
                map,
                title: business.name,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new window.google.maps.Size(32, 32)
                }
            });
            const infoWindow = new window.google.maps.InfoWindow({
                content: `
          <div style="padding:8px; font-family:sans-serif; min-width:220px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <img
                src="${business.logo_url || "/placeholder.svg"}"
                alt="${business.name}"
                style="width:60px; height:60px; border-radius:8px; object-fit:cover;"
              />
              <div>
                <div style="font-weight:bold; margin-bottom:4px; font-size:15px;">
                  ${business.name}
                </div>
                ${business.address ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}" target="_blank" rel="noopener noreferrer"
                         style="color:#2563eb; text-decoration:underline; font-size:13px;">
                         ${business.address}
                       </a>` : ""}
              </div>
            </div>
          </div>
        `
            });
            marker.addListener("click", ()=>{
                infoWindow.open(map, marker);
            });
            markers.push(marker);
            markersRef.current[business.id] = {
                marker,
                infoWindow
            };
        });
        return ()=>markers.forEach((m)=>m.setMap(null));
    }, [
        map,
        businesses
    ]);
    // Jump to business
    const handleBusinessClick = (biz)=>{
        let lat = biz.latitude ? Number.parseFloat(biz.latitude) : null;
        let lng = biz.longitude ? Number.parseFloat(biz.longitude) : null;
        if (!lat || !lng) {
            const entry = markersRef.current[biz.id];
            if (entry) {
                const pos = entry.marker.getPosition();
                lat = pos.lat();
                lng = pos.lng();
            }
        }
        if (lat && lng) {
            const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
            window.location.href = streetViewUrl;
            return;
        }
        alert("This is a mobile Business.");
    };
    const handleSuggestionSelect = (business)=>{
        setSearchTerm(business.name);
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
        handleBusinessClick(business);
    };
    const handleSearchChange = (e)=>{
        const value = e.target.value;
        setSearchTerm(value);
        setShowSuggestions(value.length > 0);
        setSelectedSuggestionIndex(-1);
    };
    const handleSearchKeyDown = (e)=>{
        if (!showSuggestions || filteredBusinesses.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedSuggestionIndex((prev)=>prev < filteredBusinesses.length - 1 ? prev + 1 : 0);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedSuggestionIndex((prev)=>prev > 0 ? prev - 1 : filteredBusinesses.length - 1);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectedSuggestionIndex >= 0) {
                handleSuggestionSelect(filteredBusinesses[selectedSuggestionIndex]);
            } else if (filteredBusinesses.length > 0) {
                handleSuggestionSelect(filteredBusinesses[0]);
            }
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
            setSelectedSuggestionIndex(-1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100%",
            width: "100%",
            position: "relative"
        },
        className: "jsx-2e45cfcf73377b1b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(135deg, #4ba3d9 0%, #4ba3d9 100%)",
                    padding: "24px 20px",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    zIndex: 1000,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                },
                className: "jsx-2e45cfcf73377b1b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        flexWrap: "wrap",
                        position: "relative"
                    },
                    className: "jsx-2e45cfcf73377b1b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                borderRadius: 16,
                                padding: "14px 18px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                flex: 1,
                                minWidth: "200px",
                                position: "relative",
                                transition: "all 0.3s ease"
                            },
                            className: "jsx-2e45cfcf73377b1b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#6b7280",
                                        marginRight: 12,
                                        fontSize: "1.1rem"
                                    },
                                    className: "jsx-2e45cfcf73377b1b",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search businesses...",
                                    value: searchTerm,
                                    onChange: handleSearchChange,
                                    onKeyDown: handleSearchKeyDown,
                                    onFocus: ()=>searchTerm.length > 0 && setShowSuggestions(true),
                                    onBlur: ()=>setTimeout(()=>setShowSuggestions(false), 200),
                                    style: {
                                        border: "none",
                                        outline: "none",
                                        flex: 1,
                                        fontSize: 15,
                                        fontWeight: "400",
                                        color: "#111827",
                                        background: "transparent"
                                    },
                                    className: "jsx-2e45cfcf73377b1b"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                showSuggestions && filteredBusinesses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        right: 0,
                                        background: "white",
                                        borderRadius: "0 0 12px 12px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                        maxHeight: "300px",
                                        overflowY: "auto",
                                        zIndex: 1001,
                                        marginTop: "2px"
                                    },
                                    className: "jsx-2e45cfcf73377b1b",
                                    children: [
                                        filteredBusinesses.slice(0, 8).map((business, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleSuggestionSelect(business),
                                                style: {
                                                    padding: "12px 14px",
                                                    cursor: "pointer",
                                                    borderBottom: index < Math.min(filteredBusinesses.length, 8) - 1 ? "1px solid #f3f4f6" : "none",
                                                    background: selectedSuggestionIndex === index ? "#f8fafc" : "white",
                                                    transition: "background 0.1s"
                                                },
                                                onMouseEnter: ()=>setSelectedSuggestionIndex(index),
                                                className: "jsx-2e45cfcf73377b1b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: "500",
                                                            fontSize: "14px",
                                                            color: "#1f2937",
                                                            marginBottom: "2px"
                                                        },
                                                        className: "jsx-2e45cfcf73377b1b",
                                                        children: business.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    business.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "12px",
                                                            color: "#6b7280"
                                                        },
                                                        className: "jsx-2e45cfcf73377b1b",
                                                        children: business.address
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                                        lineNumber: 318,
                                                        columnNumber: 42
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, business.id, true, {
                                                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        filteredBusinesses.length > 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "8px 14px",
                                                fontSize: "12px",
                                                color: "#6b7280",
                                                textAlign: "center",
                                                background: "#f9fafb"
                                            },
                                            className: "jsx-2e45cfcf73377b1b",
                                            children: [
                                                "+",
                                                filteredBusinesses.length - 8,
                                                " more results"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                            lineNumber: 251,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowList(!showList),
                            style: {
                                background: showList ? "#3b82f6" : "rgba(255,255,255,0.2)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "black",
                                padding: "10px 16px",
                                borderRadius: 12,
                                cursor: "pointer",
                                fontSize: "15px",
                                fontWeight: "500",
                                transition: "all 0.2s",
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                                boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
                            },
                            onMouseEnter: (e)=>{
                                if (!showList) {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
                                }
                            },
                            onMouseLeave: (e)=>{
                                if (!showList) {
                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                                }
                            },
                            className: "jsx-2e45cfcf73377b1b",
                            children: showList ? "Hide List" : "Show List"
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                            lineNumber: 338,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                    lineNumber: 240,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                style: {
                    height: "100%",
                    width: "100%",
                    paddingTop: "88px"
                },
                className: "jsx-2e45cfcf73377b1b"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                lineNumber: 370,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "88px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f9fafb",
                    color: "#6b7280"
                },
                className: "jsx-2e45cfcf73377b1b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center"
                    },
                    className: "jsx-2e45cfcf73377b1b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 40,
                                height: 40,
                                border: "4px solid #e5e7eb",
                                borderTop: "4px solid #3b82f6",
                                borderRadius: "50%",
                                animation: "spin 1s linear infinite",
                                margin: "0 auto 16px"
                            },
                            className: "jsx-2e45cfcf73377b1b"
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                            lineNumber: 395,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-2e45cfcf73377b1b",
                            children: "Loading Staten Island Map..."
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                            lineNumber: 406,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                    lineNumber: 394,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                lineNumber: 380,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 2000,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: "20px"
                },
                onClick: ()=>setShowList(false),
                className: "jsx-2e45cfcf73377b1b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "white",
                        borderRadius: "16px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        maxHeight: "80vh",
                        width: "90%",
                        maxWidth: "400px",
                        overflow: "hidden",
                        animation: "slideDown 0.3s ease-out"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-2e45cfcf73377b1b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#4ba3d9",
                                color: "white",
                                padding: "20px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            className: "jsx-2e45cfcf73377b1b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: "600",
                                        fontSize: "18px",
                                        color: "black"
                                    },
                                    className: "jsx-2e45cfcf73377b1b",
                                    children: [
                                        filteredBusinesses.length,
                                        "  Businesses"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowList(false),
                                    style: {
                                        background: "rgba(255,255,255,0.2)",
                                        border: "none",
                                        color: "white",
                                        borderRadius: "50%",
                                        width: "32px",
                                        height: "32px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "16px",
                                        transition: "background 0.2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                                    },
                                    className: "jsx-2e45cfcf73377b1b",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                            lineNumber: 442,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "16px",
                                maxHeight: "60vh",
                                overflowY: "auto",
                                WebkitOverflowScrolling: "touch"
                            },
                            className: "jsx-2e45cfcf73377b1b",
                            children: [
                                filteredBusinesses.map((biz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleBusinessClick(biz),
                                        style: {
                                            padding: "16px",
                                            marginBottom: "12px",
                                            borderRadius: "12px",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            border: "1px solid #f3f4f6",
                                            background: "white"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = "#f8fafc";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = "white";
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        },
                                        className: "jsx-2e45cfcf73377b1b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: "600",
                                                    fontSize: "16px",
                                                    marginBottom: "6px",
                                                    color: "#1f2937"
                                                },
                                                className: "jsx-2e45cfcf73377b1b",
                                                children: biz.name
                                            }, void 0, false, {
                                                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            biz.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "14px",
                                                    color: "#6b7280"
                                                },
                                                className: "jsx-2e45cfcf73377b1b",
                                                children: biz.address
                                            }, void 0, false, {
                                                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                                lineNumber: 518,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, biz.id, true, {
                                        fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                        lineNumber: 492,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))),
                                filteredBusinesses.length === 0 && searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "40px 24px",
                                        textAlign: "center",
                                        color: "#6b7280",
                                        fontSize: "16px"
                                    },
                                    className: "jsx-2e45cfcf73377b1b",
                                    children: [
                                        'No businesses found matching "',
                                        searchTerm,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                                    lineNumber: 523,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                            lineNumber: 483,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                    lineNumber: 428,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
                lineNumber: 412,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "24e1c2454854532c",
                children: "@keyframes slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "22cb06f503cd649f",
                children: ".gm-style-iw{padding-top:0!important;top:0!important}.gm-ui-hover-effect{top:4px!important;right:4px!important}.gm-ui-hover-effect>img{width:12px!important;height:12px!important}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/src/components/StatenIslandMap.js",
        lineNumber: 225,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = StatenIslandMap;
}),
"[project]/si_app copy/src/components/ProfileAndPayment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ProfileAndPayment.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function ProfileAndPayment({ session, displayName, editingName, setEditingName, onSaveName, isSaving, saveStatus, onLogout, profile }) {
    const [isLoadingPortal, setIsLoadingPortal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isPremium = profile?.is_premium === true || session?.user?.user_metadata?.is_premium === true;
    const subscriptionStatus = profile?.subscription_status || session?.user?.user_metadata?.subscription_status;
    const cancelAt = profile?.subscription_cancel_at || session?.user?.user_metadata?.subscription_cancel_at;
    const stripeCustomerId = profile?.stripe_customer_id || session?.user?.user_metadata?.stripe_customer_id;
    // ✅ Check if subscription is ending soon
    const isCanceling = subscriptionStatus === 'canceling';
    const handleUpgrade = async ()=>{
        if (!session?.user?.id || !session?.user?.email) {
            alert("Please sign in to upgrade to premium.");
            return;
        }
        try {
            const res = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: session.user.id,
                    email: session.user.email
                })
            });
            if (!res.ok) {
                throw new Error("Failed to create checkout session");
            }
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("No checkout URL received");
            }
        } catch (error) {
            console.error("Error upgrading:", error);
            alert("Error upgrading to premium. Please try again.");
        }
    };
    // ✅ NEW: Open Stripe Customer Portal
    const handleManageSubscription = async ()=>{
        if (!stripeCustomerId) {
            alert("No customer ID found. Please contact support.");
            return;
        }
        setIsLoadingPortal(true);
        try {
            const res = await fetch("/api/create-portal-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    customerId: stripeCustomerId
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to open portal");
            }
            // Redirect to Stripe Customer Portal
            window.location.href = data.url;
        } catch (error) {
            console.error("Error opening portal:", error);
            alert(error.message || "Failed to open subscription portal.");
            setIsLoadingPortal(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "profile-container",
        style: {
            background: '#ffffff',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "profile-title",
                    children: "Account Settings"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "section-title",
                        children: "Display Name"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "display-name-input-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: editingName,
                                onChange: (e)=>setEditingName(e.target.value),
                                placeholder: "Enter your display name",
                                className: "display-name-input"
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onSaveName,
                                disabled: isSaving,
                                className: "save-button",
                                style: {
                                    color: 'black'
                                },
                                children: isSaving ? '...' : 'Save'
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    saveStatus === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "save-status success",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            " Saved successfully"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    saveStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "save-status error",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✗"
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            " Failed to save"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "section-title",
                        children: "Your Highlighting SI Epxerience Membership"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "subscription-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '16px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "subscription-plan",
                                    style: {
                                        fontSize: '16px',
                                        fontWeight: '600'
                                    },
                                    children: isPremium ? "Premium" : "Free Trial"
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '12px',
                                    textAlign: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "subscription-label",
                                    children: "Manage your plan and billing below."
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            isCanceling && cancelAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#fff3cd',
                                    border: '1px solid #ffc107',
                                    borderRadius: '8px',
                                    padding: '12px',
                                    marginTop: '12px',
                                    marginBottom: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: '600',
                                            color: '#856404',
                                            marginBottom: '4px'
                                        },
                                        children: "⚠️ Subscription Ending"
                                    }, void 0, false, {
                                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            color: '#856404'
                                        },
                                        children: [
                                            "Your premium access will end on ",
                                            new Date(cancelAt).toLocaleDateString(),
                                            " at",
                                            ' ',
                                            new Date(cancelAt).toLocaleTimeString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "subscription-description",
                                children: isPremium ? isCanceling ? "You have access to premium features until the end of your billing period" : "You have access to all premium features" : ""
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            !isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleUpgrade,
                                className: "upgrade-button",
                                children: "Upgrade to Full Membership"
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleManageSubscription,
                                disabled: isLoadingPortal,
                                style: {
                                    width: '100%',
                                    padding: '12px 16px',
                                    background: '#4BA3D9',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    cursor: isLoadingPortal ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.2s ease',
                                    marginTop: '12px',
                                    opacity: isLoadingPortal ? 0.6 : 1
                                },
                                onMouseEnter: (e)=>{
                                    if (!isLoadingPortal) {
                                        e.target.style.background = '#3B8FC1';
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (!isLoadingPortal) {
                                        e.target.style.background = '#4BA3D9';
                                    }
                                },
                                children: isLoadingPortal ? 'Opening...' : 'Manage Subscription'
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    !isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "premium-preview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "premium-title",
                                children: "What you Get as a Member"
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "premium-features",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "checkmark",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this),
                                            " 10% off all participating SI Businesses"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "checkmark",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this),
                                            " Access to new perks added each month."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "checkmark",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            " Members only updates and event invites."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "premium-note",
                                        children: "Your $5 per month membership keeps Staten Island saving local and supporting local."
                                    }, void 0, false, {
                                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    console.log('🔘 Sign out button clicked');
                    if (onLogout) {
                        onLogout();
                    } else {
                        console.error('❌ onLogout is undefined!');
                    }
                },
                className: "signout-button",
                children: "Sign Out"
            }, void 0, false, {
                fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/src/components/ProfileAndPayment.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ProfileAndPayment;
}),
"[project]/si_app copy/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$compass$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompassFill$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/react-bootstrap-icons/dist/icons/compass-fill.js [app-ssr] (ecmascript) <export default as CompassFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$geo$2d$alt$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GeoAltFill$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/react-bootstrap-icons/dist/icons/geo-alt-fill.js [app-ssr] (ecmascript) <export default as GeoAltFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$person$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonFill$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/react-bootstrap-icons/dist/icons/person-fill.js [app-ssr] (ecmascript) <export default as PersonFill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$firebase$2f$messaging$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/firebase/messaging/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/@firebase/messaging/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$Auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/Auth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/supabaseClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$MembershipCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/MembershipCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$BusinessForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/BusinessForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$BusinessProfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/BusinessProfile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$LandingPage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/LandingPage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$StatenIslandMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/StatenIslandMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$ProfileAndPayment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/components/ProfileAndPayment.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const logo = "/Cartoon.PNG";
;
;
;
;
;
;
;
;
;
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5NjB_yv61XLqCOazv8WVDooBVDmvQWC8",
    authDomain: "si-app-be948.firebaseapp.com",
    projectId: "si-app-be948",
    storageBucket: "si-app-be948.firebasestorage.app",
    messagingSenderId: "959224695369",
    appId: "1:959224695369:web:96fd41e33c3c60b201cd98",
    measurementId: "G-GK9X2XXJ9P"
};
// OPTIMIZED IMAGE COMPONENT
function OptimizedImage({ src, alt, className, onClick }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src || "/placeholder.svg",
            alt: alt,
            className: className,
            onClick: onClick,
            onLoad: ()=>setIsLoading(false),
            style: {
                opacity: isLoading ? 0.7 : 1,
                transition: "opacity 0.3s ease-in-out",
                backgroundColor: "#f0f0f0"
            }
        }, void 0, false, {
            fileName: "[project]/si_app copy/app/page.js",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/si_app copy/app/page.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
async function compressImage(file) {
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            const img = new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
            img.onload = ()=>{
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                let width = img.width;
                let height = img.height;
                const maxWidth = 1200;
                const maxHeight = 1200;
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob)=>resolve(blob), "image/jpeg", 0.85);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}
const uploadBusinessPhotos = async (businessId, files)=>{
    if (!files || files.length === 0) return [];
    try {
        console.log("Starting photo upload for business ID:", businessId);
        const { data: existingBusiness, error: checkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("businesses").select("id, name, photo_urls").eq("id", businessId).maybeSingle();
        if (!existingBusiness) {
            console.error("Business not found");
            alert("Error: Business not found");
            return [];
        }
        const uploadedUrls = [];
        for(let i = 0; i < files.length; i++){
            const file = files[i];
            console.log(`Compressing photo ${i + 1}/${files.length}...`);
            const compressedBlob = await compressImage(file);
            const compressedFile = new File([
                compressedBlob
            ], file.name, {
                type: "image/jpeg"
            });
            const fileExt = "jpg";
            const fileName = `${businessId}-${Date.now()}-${i}.${fileExt}`;
            const filePath = fileName;
            console.log(`Uploading photo ${i + 1}/${files.length} to business-logos bucket:`, filePath);
            const { error: uploadError, data: uploadData } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("business-logos").upload(filePath, compressedFile, {
                upsert: true,
                cacheControl: "31536000"
            });
            if (uploadError) {
                console.error(`Upload error for photo ${i + 1}:`, uploadError);
                continue;
            }
            console.log(`Upload ${i + 1} successful:`, uploadData);
            const { data: urlData } = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("business-logos").getPublicUrl(filePath);
            if (urlData?.publicUrl) {
                uploadedUrls.push(urlData.publicUrl);
            }
        }
        if (uploadedUrls.length === 0) {
            alert("No photos were uploaded successfully");
            return [];
        }
        const currentPhotos = existingBusiness.photo_urls || [];
        const updatedPhotos = [
            ...currentPhotos,
            ...uploadedUrls
        ];
        const { error: updateError, data: updatedBusiness } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("businesses").update({
            photo_urls: updatedPhotos
        }).eq("id", businessId).select();
        if (updateError) {
            console.error("Database update error:", updateError);
            alert("Failed to update database: " + updateError.message);
            return [];
        }
        console.log("Database updated successfully with new photos");
        alert(`${uploadedUrls.length} photo(s) uploaded successfully!`);
        return uploadedUrls;
    } catch (error) {
        console.error("Error uploading photos:", error);
        alert("Error: " + error.message);
        return [];
    }
};
async function compressAndUploadImage(file) {
    return new Promise((resolve)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            const img = new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
            img.onload = ()=>{
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                let width = img.width;
                let height = img.height;
                const maxWidth = 800;
                const maxHeight = 800;
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob)=>resolve(blob), "image/jpeg", 0.8);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}
function App() {
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [businesses, setBusinesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [justSignedUp, setJustSignedUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBusiness, setSelectedBusiness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLanding, setShowLanding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zipSearch, setZipSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRegister, setShowRegister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldShake, setShouldShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingName, setEditingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userFcmToken, setUserFcmToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedBusinessId, setSelectedBusinessId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mapPanTo, setMapPanTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTag, setNewTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [zipFilter, setZipFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tagFilter, setTagFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isPremium = session?.user?.user_metadata?.is_premium === true || profile?.is_premium === true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (session?.user) {
            console.log('═══════════════════════════════════════');
            console.log('User:', session.user.email);
            console.log('Auth Meta:', session.user.user_metadata);
            console.log('Profile:', profile);
            console.log('isPremium:', isPremium);
            console.log('Nav Items:', navItems.map((n)=>n.label));
            console.log('═══════════════════════════════════════');
        }
    }, [
        session,
        profile,
        isPremium
    ]);
    const [selectedNav, setSelectedNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Highlighted Business");
    const navItems = [
        {
            label: "Highlighted Business",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$compass$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompassFill$3e$__["CompassFill"]
        },
        {
            label: "Map",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$geo$2d$alt$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GeoAltFill$3e$__["GeoAltFill"]
        },
        ...isPremium ? [
            {
                label: "Display My Card",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$person$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonFill$3e$__["PersonFill"]
            }
        ] : [],
        {
            label: "Profile and Payment",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$person$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonFill$3e$__["PersonFill"]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeFirebase = async ()=>{
            try {
                let app;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length === 0) {
                    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
                    console.log("Firebase app initialized");
                } else {
                    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
                    console.log("Firebase app already exists");
                }
                const messaging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessaging"])(app);
                const permission = await Notification.requestPermission();
                if (permission === "granted") {
                    console.log("Notification permission granted");
                    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"])(messaging, {
                        vapidKey: "BOgqakg5aBxNszM1Ji6H4ADnNMtexhho5CWWpijJqNxdyD8MtYGSc7ZX3yRz2ybsVs8YIHKi_NZ0mz8zAQ25lQk"
                    });
                    if (token) {
                        console.log("FCM Token:", token);
                        handleFcmTokenReceived(token);
                    } else {
                        console.log("No FCM token received");
                    }
                } else {
                    console.log("Notification permission denied");
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$firebase$2f$messaging$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onMessage"])(messaging, (payload)=>{
                    console.log("Message received in foreground:", payload);
                    if (payload.notification) {
                        new Notification(payload.notification.title, {
                            body: payload.notification.body,
                            icon: payload.notification.icon
                        });
                    }
                });
            } catch (error) {
                console.error("Error initializing Firebase messaging:", error);
            }
        };
        initializeFirebase();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (session?.user?.email) {
            const adminEmails = [
                "serkankalem99@gmail.com"
            ];
            setIsAdmin(adminEmails.includes(session.user.email.toLowerCase()));
        }
    }, [
        session
    ]);
    const getBusinessImage = (business, size = "small")=>{
        if (business.logo_url && business.logo_url.trim() !== "" && business.logo_url !== "/placeholder.svg" && !business.logo_url.includes("placeholder")) {
            const sizes = {
                small: {
                    width: 200,
                    height: 200,
                    quality: 75
                },
                medium: {
                    width: 300,
                    height: 300,
                    quality: 80
                },
                large: {
                    width: 500,
                    height: 500,
                    quality: 85
                }
            };
            const sizeParams = sizes[size] || sizes.small;
            return `${business.logo_url}?width=${sizeParams.width}&height=${sizeParams.height}&quality=${sizeParams.quality}&format=webp`;
        }
        return "/placeholder.svg";
    };
    const uploadBusinessLogo = async (businessId, file)=>{
        if (!file) return null;
        try {
            console.log("Starting upload for business ID:", businessId);
            console.log("Business ID type:", typeof businessId);
            const { data: existingBusiness, error: checkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("businesses").select("id, name").eq("id", businessId).maybeSingle();
            console.log("Business lookup result:", existingBusiness);
            console.log("Business lookup error:", checkError);
            if (!existingBusiness) {
                console.error("Business not found in database with ID:", businessId);
                alert("Error: Cannot find business in database. ID might be incorrect.");
                return null;
            }
            console.log("Compressing image...");
            const compressedBlob = await compressAndUploadImage(file);
            const compressedFile = new File([
                compressedBlob
            ], file.name, {
                type: "image/jpeg"
            });
            const fileExt = "jpg";
            const fileName = `${businessId}-${Date.now()}.${fileExt}`;
            const filePath = fileName;
            console.log("Uploading to business-logos bucket:", filePath);
            const { error: uploadError, data: uploadData } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("business-logos").upload(filePath, compressedFile, {
                upsert: true,
                cacheControl: "31536000"
            });
            if (uploadError) {
                console.error("Upload error:", uploadError);
                alert("Upload failed: " + uploadError.message);
                return null;
            }
            console.log("Upload successful:", uploadData);
            const { data: urlData } = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("business-logos").getPublicUrl(filePath);
            if (!urlData?.publicUrl) {
                console.error("Failed to get public URL");
                return null;
            }
            console.log("Public URL:", urlData.publicUrl);
            const { error: updateError, data: updatedBusiness } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("businesses").update({
                logo_url: urlData.publicUrl
            }).eq("id", businessId).select();
            if (updateError) {
                console.error("Database update error:", updateError);
                alert("Failed to update database: " + updateError.message);
                return null;
            }
            console.log("Database updated successfully:", updatedBusiness);
            if (!updatedBusiness || updatedBusiness.length === 0) {
                console.error("No business found with ID:", businessId);
                alert("Error: Business not found in database");
                return null;
            }
            alert("Logo uploaded successfully!");
            return urlData.publicUrl;
        } catch (error) {
            console.error("Error uploading logo:", error);
            alert("Error: " + error.message);
            return null;
        }
    };
    const handleLogoUpload = async (businessId, file)=>{
        if (!file) return;
        setBusinesses((prev)=>prev.map((biz)=>biz.id === businessId ? {
                    ...biz,
                    uploading: true
                } : biz));
        const logoUrl = await uploadBusinessLogo(businessId, file);
        if (logoUrl) {
            setBusinesses((prev)=>prev.map((biz)=>biz.id === businessId ? {
                        ...biz,
                        logo_url: logoUrl,
                        uploading: false
                    } : biz));
            await fetchBusinesses();
        } else {
            setBusinesses((prev)=>prev.map((biz)=>biz.id === businessId ? {
                        ...biz,
                        uploading: false
                    } : biz));
        }
    };
    const handleNavClick = (label)=>{
        if (label === "Display My Card") {
            setShouldShake(true);
            setTimeout(()=>setShouldShake(false), 600);
        }
        setSelectedNav(label);
    };
    const handleBusinessSelect = (e)=>{
        const businessId = e.target.value;
        setSelectedBusinessId(businessId);
        const business = businesses.find((biz)=>biz.id === businessId);
        if (business && business.latitude && business.longitude) {
            setMapPanTo({
                lat: Number.parseFloat(business.latitude),
                lng: Number.parseFloat(business.longitude)
            });
        }
    };
    const handleFcmTokenReceived = (token)=>{
        console.log("FCM token received and set:", token);
        setUserFcmToken(token);
    };
    const handleAddBusiness = async (newBusiness)=>{
        setBusinesses((prev)=>[
                newBusiness,
                ...prev
            ]);
        setSelectedNav("Highlighted Business");
        notifyNewBusiness(newBusiness, userFcmToken);
    };
    async function notifyNewBusiness(newBusiness, userFcmToken) {
        if (!userFcmToken) {
            console.warn("No FCM token available for notifications");
            return;
        }
        try {
            console.log("Sending notification with token:", userFcmToken);
            const response = await fetch("/api/send-notification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fcmToken: userFcmToken,
                    title: "New Business Added!",
                    body: `${newBusiness.name} just joined our app!`
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Notification send failed: ${response.status}`, errorText);
                return;
            }
            const data = await response.json();
            console.log("Notification sent successfully:", data);
        } catch (error) {
            console.error("Error sending notification:", error);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setShowSplash(false);
            setShowLanding(true);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, []);
    // ✅ FIXED: Better session and profile loading
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const loadData = async ()=>{
            console.log('📍 Loading initial data...');
            const { data: { session }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (!mounted) return;
            if (sessionError) {
                console.error('❌ Session error:', sessionError);
                return;
            }
            console.log('📍 Session loaded:', session?.user?.email);
            setSession(session);
            if (session?.user) {
                // Use maybeSingle() to handle case where profile doesn't exist yet
                const { data: profileData, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).maybeSingle();
                if (profileError && profileError.code !== 'PGRST116') {
                    console.error('❌ Profile error:', profileError);
                } else if (profileData) {
                    console.log('✅ Profile loaded:', {
                        email: profileData.email,
                        is_premium: profileData.is_premium,
                        subscription_status: profileData.subscription_status
                    });
                    setProfile(profileData);
                } else {
                    console.log('ℹ️ No profile found, user may need to complete signup');
                    // Set a minimal profile object to prevent null errors
                    setProfile({
                        id: session.user.id,
                        email: session.user.email,
                        is_premium: false,
                        subscription_status: null
                    });
                }
            } else {
                setProfile(null);
            }
        };
        loadData();
        const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange(async (event, session)=>{
            console.log('🔔 Auth event:', event);
            if (!mounted) return;
            setSession(session);
            if (session?.user) {
                const { data: profileData } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).maybeSingle();
                if (profileData) {
                    console.log('🔔 Profile updated from auth change');
                    setProfile(profileData);
                } else {
                    // Ensure profile is never null when user exists
                    setProfile({
                        id: session.user.id,
                        email: session.user.email,
                        is_premium: false,
                        subscription_status: null
                    });
                }
            } else {
                setProfile(null);
            }
        });
        const handleVisibilityChange = ()=>{
            if (document.visibilityState === 'visible') {
                console.log('👁️ Page became visible, reloading data...');
                loadData();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return ()=>{
            mounted = false;
            subscription?.unsubscribe();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
    // ✅ SIMPLIFIED: Only poll for premium status changes, not full profile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!session?.user?.id || !profile) return;
        const pollInterval = setInterval(async ()=>{
            try {
                const { data: newProfile, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('is_premium, subscription_status, subscription_cancel_at').eq('id', session.user.id).maybeSingle();
                if (error || !newProfile) return;
                const statusChanged = profile?.subscription_status !== newProfile?.subscription_status;
                const premiumChanged = profile?.is_premium !== newProfile?.is_premium;
                if (statusChanged || premiumChanged) {
                    console.log('🔄 Subscription status changed, updating profile');
                    setProfile((prev)=>({
                            ...prev,
                            ...newProfile
                        }));
                }
            } catch (error) {
                console.error('❌ Polling error:', error);
            }
        }, 5000); // Poll every 5 seconds
        return ()=>clearInterval(pollInterval);
    }, [
        session?.user?.id,
        profile?.subscription_status,
        profile?.is_premium
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if user was redirected from payment success
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('showCard') === 'true' && isPremium) {
            setSelectedNav("Display My Card");
            window.history.replaceState({}, '', '/');
        }
    }, [
        isPremium
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check for navigation parameter
        const urlParams = new URLSearchParams(window.location.search);
        const navParam = urlParams.get('nav');
        if (navParam === 'profile') {
            setSelectedNav('Profile and Payment');
            window.history.replaceState({}, '', '/');
        }
    }, []);
    const fetchBusinesses = async ()=>{
        console.log("Fetching businesses from database...");
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("businesses").select("*").order("created_at", {
            ascending: false
        });
        if (!error && data) {
            console.log("Fetched businesses:", data.length);
            setBusinesses(data);
            preloadImages(data);
        } else if (error) {
            console.error("Error fetching businesses:", error);
        }
    };
    const preloadImages = (businessList)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBusinesses();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profile) {
            setDisplayName(profile.display_name || profile.full_name || "");
            setEditingName(profile.display_name || profile.full_name || "");
            setAvatarUrl(profile.avatar_url || "");
        } else if (session?.user?.user_metadata) {
            setDisplayName(session.user.user_metadata.display_name || "");
            setEditingName(session.user.user_metadata.display_name || "");
            setAvatarUrl(session.user.user_metadata.avatar_url || "");
        }
    }, [
        session,
        profile
    ]);
    const saveName = async ()=>{
        setIsSaving(true);
        setSaveStatus(null);
        try {
            // Update auth metadata
            const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
                data: {
                    display_name: editingName,
                    avatar_url: avatarUrl
                }
            });
            if (authError) throw authError;
            // Update profile table
            const { error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
                display_name: editingName,
                full_name: editingName,
                avatar_url: avatarUrl
            }).eq('id', session.user.id);
            if (profileError) throw profileError;
            setDisplayName(editingName);
            setSession((prev)=>({
                    ...prev,
                    user: authData.user
                }));
            setSaveStatus('success');
        } catch (error) {
            console.error('Save error:', error);
            setSaveStatus('error');
        }
        setIsSaving(false);
    };
    const handleFileUpload = async (e)=>{
        const file = e.target.files[0];
        if (!file || !session?.user?.id) return;
        setUploading(true);
        const fileExt = file.name.split(".").pop();
        const filePath = `avatars/${session.user.id}-${Date.now()}.${fileExt}`;
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("avatars").upload(filePath, file, {
            upsert: true
        });
        if (uploadError) {
            setUploading(false);
            setSaveStatus("error");
            return;
        }
        const { data: urlData } = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("avatars").getPublicUrl(filePath);
        const publicUrl = urlData?.publicUrl || "";
        if (!publicUrl) {
            setUploading(false);
            setSaveStatus("error");
            return;
        }
        const { error: metaErr, data: updated } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
            data: {
                display_name: editingName || displayName,
                avatar_url: publicUrl
            }
        });
        if (!metaErr && updated?.user) {
            setAvatarUrl(publicUrl);
            setSession((prev)=>({
                    ...prev,
                    user: updated.user
                }));
            setSaveStatus("success");
        } else {
            setSaveStatus("error");
        }
        setUploading(false);
    };
    const handleLogout = async ()=>{
        try {
            console.log('🚪 Starting logout process...');
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            if (error) {
                console.error('❌ Supabase signOut error:', error);
            } else {
                console.log('✅ Supabase signOut successful');
            }
            setSession(null);
            setProfile(null);
            setDisplayName("");
            setEditingName("");
            setAvatarUrl("");
            setSelectedNav("Highlighted Business");
            localStorage.clear();
            sessionStorage.clear();
            console.log('🔄 Reloading page...');
            setTimeout(()=>{
                window.location.replace('/');
            }, 100);
        } catch (err) {
            console.error('❌ Logout error:', err);
            window.location.replace('/');
        }
    };
    const refreshUserData = async ()=>{
        if (!session?.user?.id) return;
        try {
            console.log('🔄 Refreshing user data...');
            const { data: newProfile, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).maybeSingle();
            if (profileError && profileError.code !== 'PGRST116') {
                console.error('❌ Profile fetch error:', profileError);
            } else if (newProfile) {
                console.log('✅ Profile refreshed');
                setProfile(newProfile);
            }
            const { data: { session: newSession }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.refreshSession();
            if (sessionError) {
                console.error('❌ Session refresh error:', sessionError);
            } else if (newSession) {
                console.log('✅ Session refreshed');
                setSession(newSession);
            }
        } catch (error) {
            console.error('❌ Error refreshing data:', error);
        }
    };
    if (showSplash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "splash-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sparkle sparkle-1",
                    children: "✦"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 848,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sparkle sparkle-2",
                    children: "✧"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 849,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sparkle sparkle-3",
                    children: "✦"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 850,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "decorative-circle"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 851,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: logo || "/placeholder.svg",
                        alt: "App logo",
                        className: "splash-logo"
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/app/page.js",
                        lineNumber: 853,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 852,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "splash-tagline"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 855,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/si_app copy/app/page.js",
            lineNumber: 847,
            columnNumber: 7
        }, this);
    }
    if (showLanding && !session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$LandingPage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLoginClick: ()=>{
                setShowLanding(false);
                setShowRegister(false);
            },
            onGetStarted: ()=>{
                setShowLanding(false);
                setShowRegister(true);
            }
        }, void 0, false, {
            fileName: "[project]/si_app copy/app/page.js",
            lineNumber: 863,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$Auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onAuthSuccess: (_data, isSignUp)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then(({ data: { session } })=>{
                    setSession(session);
                    if (isSignUp) setJustSignedUp(true);
                });
            },
            isLoginProp: !showRegister
        }, void 0, false, {
            fileName: "[project]/si_app copy/app/page.js",
            lineNumber: 878,
            columnNumber: 7
        }, this);
    }
    if (justSignedUp) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100vw",
                margin: 0,
                padding: 16,
                boxSizing: "border-box"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Welcome to Staten Island!"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 893,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$MembershipCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    email: session.user.email,
                    name: displayName,
                    avatar: avatarUrl,
                    style: {
                        width: "100%",
                        maxWidth: "100%"
                    }
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 894,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setJustSignedUp(false),
                    style: {
                        marginTop: 24,
                        padding: "12px 24px",
                        backgroundColor: "#007acc",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "background 0.3s",
                        width: "100%",
                        maxWidth: 400,
                        display: "block"
                    },
                    onMouseEnter: (e)=>e.target.style.backgroundColor = "#005fa3",
                    onMouseLeave: (e)=>e.target.style.backgroundColor = "#007acc",
                    children: "Continue to App"
                }, void 0, false, {
                    fileName: "[project]/si_app copy/app/page.js",
                    lineNumber: 900,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/si_app copy/app/page.js",
            lineNumber: 892,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `
            }, void 0, false, {
                fileName: "[project]/si_app copy/app/page.js",
                lineNumber: 927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            padding: 0,
                            overflowY: "auto"
                        },
                        children: selectedNav === "Display My Card" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "40px 20px",
                                margin: 0,
                                width: "100vw",
                                minHeight: "calc(100vh - 60px)",
                                backgroundColor: "#ffffff",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                textAlign: "center",
                                boxSizing: "border-box"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$MembershipCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                email: session.user.email,
                                name: displayName,
                                avatar: avatarUrl,
                                shouldShake: shouldShake,
                                style: {
                                    width: "100%",
                                    maxWidth: 400,
                                    margin: "0 auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/app/page.js",
                                lineNumber: 953,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/app/page.js",
                            lineNumber: 938,
                            columnNumber: 13
                        }, this) : selectedNav === "Add Your Business" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$BusinessForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onAddBusiness: handleAddBusiness
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/app/page.js",
                            lineNumber: 962,
                            columnNumber: 13
                        }, this) : selectedNav === "Map" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "100vh",
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flexGrow: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$StatenIslandMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    businesses: businesses
                                }, void 0, false, {
                                    fileName: "[project]/si_app copy/app/page.js",
                                    lineNumber: 966,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/app/page.js",
                                lineNumber: 965,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/app/page.js",
                            lineNumber: 964,
                            columnNumber: 13
                        }, this) : selectedNav === "Profile and Payment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "profile-page-backdrop",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$ProfileAndPayment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                session: session,
                                profile: profile,
                                displayName: displayName,
                                onSaveName: saveName,
                                editingName: editingName,
                                setEditingName: setEditingName,
                                isSaving: isSaving,
                                saveStatus: saveStatus,
                                onLogout: handleLogout
                            }, void 0, false, {
                                fileName: "[project]/si_app copy/app/page.js",
                                lineNumber: 971,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/si_app copy/app/page.js",
                            lineNumber: 970,
                            columnNumber: 13
                        }, this) : selectedNav === "Highlighted Business" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "highlighted-business-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "highlighted-business-header",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    "Hello, ",
                                                    displayName || "Guest",
                                                    "!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/si_app copy/app/page.js",
                                                lineNumber: 987,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/si_app copy/app/page.js",
                                            lineNumber: 986,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "highlighted-search-container",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "🔍"
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/app/page.js",
                                                    lineNumber: 990,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search businesses...",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/app/page.js",
                                                    lineNumber: 991,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/app/page.js",
                                            lineNumber: 989,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/app/page.js",
                                    lineNumber: 985,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "highlighted-filter-bar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "filter-controls-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: sortBy,
                                                    onChange: (e)=>setSortBy(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Sort By"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1002,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "az",
                                                            children: "A → Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1003,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "za",
                                                            children: "Z → A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1004,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "oldest",
                                                            children: "Oldest → Newest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1005,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "newest",
                                                            children: "Newest → Oldest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1006,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "rating",
                                                            children: "Highest Rating"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1007,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/si_app copy/app/page.js",
                                                    lineNumber: 1001,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: zipSearch,
                                                    onChange: (e)=>setZipSearch(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "📍 Search by Zip"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1010,
                                                            columnNumber: 21
                                                        }, this),
                                                        [
                                                            ...new Set(businesses.map((biz)=>biz.zip_code))
                                                        ].map((zip, idx)=>zip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: zip,
                                                                children: zip
                                                            }, idx, false, {
                                                                fileName: "[project]/si_app copy/app/page.js",
                                                                lineNumber: 1014,
                                                                columnNumber: 27
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/si_app copy/app/page.js",
                                                    lineNumber: 1009,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "highlighted-tag-input",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: " 🏷️ Add tag...",
                                                        value: newTag,
                                                        onChange: (e)=>setNewTag(e.target.value),
                                                        onKeyDown: (e)=>{
                                                            if (e.key === "Enter" && newTag.trim()) {
                                                                setTags([
                                                                    ...tags,
                                                                    newTag.trim()
                                                                ]);
                                                                setNewTag("");
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1021,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/si_app copy/app/page.js",
                                                    lineNumber: 1020,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/si_app copy/app/page.js",
                                            lineNumber: 1000,
                                            columnNumber: 17
                                        }, this),
                                        tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "highlighted-tags-list",
                                            children: tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        tag,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setTags(tags.filter((_, i)=>i !== idx)),
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1040,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/si_app copy/app/page.js",
                                                    lineNumber: 1038,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/si_app copy/app/page.js",
                                            lineNumber: 1036,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/si_app copy/app/page.js",
                                    lineNumber: 999,
                                    columnNumber: 15
                                }, this),
                                businesses.filter((biz)=>{
                                    const matchesSearch = (biz.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || (biz.description || "").toLowerCase().includes(searchTerm.toLowerCase());
                                    const matchesTag = tags.length === 0 || Array.isArray(biz.tags) && tags.some((t)=>biz.tags.some((tag)=>tag.toLowerCase() === t.toLowerCase()));
                                    const matchesZip = !zipSearch || biz.zip_code && biz.zip_code.toString().startsWith(zipSearch.trim());
                                    return matchesSearch && matchesTag && matchesZip;
                                }).sort((a, b)=>{
                                    if (sortBy === "az") return a.name.localeCompare(b.name);
                                    if (sortBy === "za") return b.name.localeCompare(a.name);
                                    if (sortBy === "oldest") return a.id - b.id;
                                    if (sortBy === "newest") return b.id - a.id;
                                    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
                                    return 0;
                                }).map((biz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "highlighted-business-card",
                                        onClick: ()=>setSelectedBusiness(biz),
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [
                                                    biz.uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            backgroundColor: "rgba(255,255,255,0.8)",
                                                            borderRadius: "8px",
                                                            zIndex: 10
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: "Uploading..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1094,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1079,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OptimizedImage, {
                                                        src: getBusinessImage(biz),
                                                        alt: biz.name,
                                                        className: "highlighted-business-logo",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setSelectedBusiness(biz);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1097,
                                                        columnNumber: 23
                                                    }, this),
                                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            position: "absolute",
                                                            bottom: -8,
                                                            right: -8,
                                                            backgroundColor: "#1e3a8a",
                                                            color: "white",
                                                            borderRadius: "50%",
                                                            width: 28,
                                                            height: 28,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            cursor: "pointer",
                                                            fontSize: "14px",
                                                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                                                        },
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: [
                                                            "📷",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                style: {
                                                                    display: "none"
                                                                },
                                                                onChange: (e)=>{
                                                                    if (e.target.files?.[0]) {
                                                                        handleLogoUpload(biz.id, e.target.files[0]);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/si_app copy/app/page.js",
                                                                lineNumber: 1127,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1107,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/si_app copy/app/page.js",
                                                lineNumber: 1077,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "highlighted-business-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "highlighted-business-name",
                                                        children: biz.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1142,
                                                        columnNumber: 23
                                                    }, this),
                                                    biz.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "highlighted-business-description",
                                                        children: biz.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1143,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 4
                                                        },
                                                        children: [
                                                            [
                                                                1,
                                                                2,
                                                                3,
                                                                4,
                                                                5
                                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: (biz.rating || 0) >= star ? "#f59e0b" : "#ccc",
                                                                        fontSize: 18,
                                                                        cursor: "default"
                                                                    },
                                                                    children: "★"
                                                                }, star, false, {
                                                                    fileName: "[project]/si_app copy/app/page.js",
                                                                    lineNumber: 1149,
                                                                    columnNumber: 5
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 13,
                                                                    color: "#f59e0b",
                                                                    fontWeight: 500
                                                                },
                                                                children: [
                                                                    biz.rating || " 0.0",
                                                                    " (",
                                                                    biz.review_count || 0,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/si_app copy/app/page.js",
                                                                lineNumber: 1160,
                                                                columnNumber: 3
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1145,
                                                        columnNumber: 21
                                                    }, this),
                                                    Array.isArray(biz.tags) && biz.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "highlighted-business-tags",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "highlighted-tag-pill",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "🏷️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/si_app copy/app/page.js",
                                                                    lineNumber: 1168,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: biz.tags[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/si_app copy/app/page.js",
                                                                    lineNumber: 1169,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/si_app copy/app/page.js",
                                                            lineNumber: 1167,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/si_app copy/app/page.js",
                                                        lineNumber: 1166,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/si_app copy/app/page.js",
                                                lineNumber: 1141,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, biz.id, true, {
                                        fileName: "[project]/si_app copy/app/page.js",
                                        lineNumber: 1071,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/si_app copy/app/page.js",
                            lineNumber: 984,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                            fileName: "[project]/si_app copy/app/page.js",
                            lineNumber: 1178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/app/page.js",
                        lineNumber: 936,
                        columnNumber: 9
                    }, this),
                    selectedBusiness && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$components$2f$BusinessProfile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        business: selectedBusiness,
                        onClose: ()=>setSelectedBusiness(null),
                        isAdmin: isAdmin,
                        onPhotosUpdate: uploadBusinessPhotos
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/app/page.js",
                        lineNumber: 1182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: "flex",
                            justifyContent: "space-around",
                            backgroundColor: "white",
                            padding: "8px 4px",
                            borderTop: "1px solid #ccc",
                            minHeight: "60px"
                        },
                        children: navItems.map(({ label, icon: Icon })=>{
                            const isSelected = selectedNav === label;
                            const shortLabel = label === "Highlighted Business" ? "Businesses " : label === "Display My Card" ? "My Card" : label === "Profile and Payment" ? "Profile" : label;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleNavClick(label),
                                style: {
                                    cursor: "pointer",
                                    padding: "4px 2px",
                                    borderRadius: 6,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: isSelected ? "#4ba3d9" : "#667",
                                    fontWeight: isSelected ? "bold" : "normal",
                                    transition: "color 0.3s",
                                    flex: 1,
                                    maxWidth: "80px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 20,
                                        color: isSelected ? "#4ba3d9" : "#667"
                                    }, void 0, false, {
                                        fileName: "[project]/si_app copy/app/page.js",
                                        lineNumber: 1228,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "10px",
                                            marginTop: 2,
                                            textAlign: "center",
                                            lineHeight: "12px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "100%"
                                        },
                                        children: shortLabel
                                    }, void 0, false, {
                                        fileName: "[project]/si_app copy/app/page.js",
                                        lineNumber: 1229,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/si_app copy/app/page.js",
                                lineNumber: 1210,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/si_app copy/app/page.js",
                        lineNumber: 1189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/app/page.js",
                lineNumber: 935,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/app/page.js",
        lineNumber: 926,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = App;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9da8257d._.js.map
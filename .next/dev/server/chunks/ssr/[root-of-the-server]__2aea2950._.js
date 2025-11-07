module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@supabase/supabase-js", () => require("@supabase/supabase-js"));

module.exports = mod;
}),
"[project]/si_app copy/src/supabaseClient.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)");
;
const supabaseUrl = 'https://beegwfvdcxwlxjrffrki.supabase.co'; // Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZWd3ZnZkY3h3bHhqcmZmcmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTkzNDYsImV4cCI6MjA2ODE3NTM0Nn0.Tz3XhM8ZCFUH_sHbdqVDCxBfvZVjKx7jDafQmtlzvo0'; // Replace with your public key
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/si_app copy/pages/payment-success.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /pages/payment-success.js
__turbopack_context__.s([
    "default",
    ()=>PaymentSuccess
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/src/supabaseClient.js [ssr] (ecmascript)");
;
;
;
;
function PaymentSuccess() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [retryCount, setRetryCount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const MAX_RETRIES = 5;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const refreshSessionAndCheck = async ()=>{
            try {
                console.log(`🔄 Attempt ${retryCount + 1}/${MAX_RETRIES}`);
                // Refresh auth session
                const { data: { session }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.refreshSession();
                if (sessionError) throw sessionError;
                const authPremium = session?.user?.user_metadata?.is_premium === true;
                console.log('📋 Auth premium:', authPremium);
                // ✅ NEW: Also check profile table
                const { data: profile, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$src$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('is_premium').eq('id', session.user.id).single();
                if (profileError) {
                    console.warn('⚠️ Profile check failed:', profileError);
                }
                const profilePremium = profile?.is_premium === true;
                console.log('💾 Profile premium:', profilePremium);
                const isPremium = authPremium || profilePremium;
                if (isPremium) {
                    console.log('═══════════════════════════════════════');
                    console.log('🎉 PREMIUM STATUS CONFIRMED!');
                    console.log('═══════════════════════════════════════');
                    setIsRefreshing(false);
                    setTimeout(()=>{
                        router.push("/?showCard=true");
                    }, 2000);
                } else {
                    console.log('⏳ Not premium yet, retrying...');
                    if (retryCount < MAX_RETRIES) {
                        setTimeout(()=>{
                            setRetryCount((prev)=>prev + 1);
                        }, 3000);
                    } else {
                        console.log('⚠️ Max retries reached');
                        setIsRefreshing(false);
                        setTimeout(()=>{
                            router.push("/?showCard=true");
                        }, 2000);
                    }
                }
            } catch (error) {
                console.error('❌ Error:', error);
                setIsRefreshing(false);
                setTimeout(()=>{
                    router.push("/");
                }, 3000);
            }
        };
        refreshSessionAndCheck();
    }, [
        router,
        retryCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            padding: 40,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: "64px",
                    marginBottom: "20px"
                },
                children: isRefreshing ? "🔄" : "✅"
            }, void 0, false, {
                fileName: "[project]/si_app copy/pages/payment-success.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Payment Successful!"
            }, void 0, false, {
                fileName: "[project]/si_app copy/pages/payment-success.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: isRefreshing ? "Activating your premium features..." : "Premium features unlocked! Redirecting..."
            }, void 0, false, {
                fileName: "[project]/si_app copy/pages/payment-success.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            isRefreshing && retryCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "14px",
                    color: "#666",
                    marginTop: "10px"
                },
                children: [
                    "Checking status... (",
                    retryCount,
                    "/",
                    MAX_RETRIES,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/si_app copy/pages/payment-success.js",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/pages/payment-success.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2aea2950._.js.map
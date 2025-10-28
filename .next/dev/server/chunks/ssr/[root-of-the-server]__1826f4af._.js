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
(()=>{
    const e = new Error("Cannot find module '../supabaseClient'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                console.log('🔄 Refreshing session... Attempt:', retryCount + 1);
                // Refresh the session to get updated user metadata
                const { data: { session }, error } = await supabase.auth.refreshSession();
                if (error) {
                    console.error('Error refreshing session:', error);
                    throw error;
                }
                console.log('Session refreshed:', session?.user?.user_metadata);
                // Check if premium status is updated
                const isPremium = session?.user?.user_metadata?.is_premium;
                if (isPremium) {
                    console.log('✅ Premium status confirmed!');
                    setIsRefreshing(false);
                    // Redirect after 2 seconds
                    setTimeout(()=>{
                        router.push("/");
                    }, 2000);
                } else {
                    console.log('⏳ Premium status not yet updated, retrying...');
                    // If not premium yet and haven't exceeded retries, try again
                    if (retryCount < MAX_RETRIES) {
                        setTimeout(()=>{
                            setRetryCount((prev)=>prev + 1);
                        }, 2000); // Wait 2 seconds before retry
                    } else {
                        console.log('⚠️ Max retries reached, redirecting anyway');
                        setIsRefreshing(false);
                        setTimeout(()=>{
                            router.push("/");
                        }, 2000);
                    }
                }
            } catch (error) {
                console.error('Error in refresh process:', error);
                setIsRefreshing(false);
                // Redirect anyway after error
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
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Payment Successful!"
            }, void 0, false, {
                fileName: "[project]/si_app copy/pages/payment-success.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: isRefreshing ? "Activating your premium features..." : "Premium features unlocked! Redirecting..."
            }, void 0, false, {
                fileName: "[project]/si_app copy/pages/payment-success.js",
                lineNumber: 82,
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
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/si_app copy/pages/payment-success.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1826f4af._.js.map
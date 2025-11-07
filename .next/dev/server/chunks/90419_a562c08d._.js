module.exports = [
"[project]/si_app copy/node_modules/@supabase/node-fetch/lib/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/si_app copy/node_modules/@supabase/node-fetch/lib/index.js [app-route] (ecmascript)");
    });
});
}),
"[project]/si_app copy/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/90419_9d2ef753._.js",
  "server/chunks/[root-of-the-server]__a846f716._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/si_app copy/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)");
    });
});
}),
];
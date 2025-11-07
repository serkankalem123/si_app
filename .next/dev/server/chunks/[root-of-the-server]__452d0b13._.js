module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

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
"[project]/si_app copy/app/api/stripe-webhook/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/stripe-webhook/route.js
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
;
// Read raw body for signature verification
async function getRawBody(request) {
    const chunks = [];
    const reader = request.body.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }
    const buffer = Buffer.concat(chunks.map((chunk)=>Buffer.from(chunk)));
    return buffer.toString('utf8');
}
async function POST(request) {
    try {
        // Dynamic import of Stripe
        const Stripe = (await __turbopack_context__.A("[project]/si_app copy/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript, async loader)")).default;
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2023-10-16'
        });
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
        const body = await request.text();
        const signature = request.headers.get('stripe-signature');
        if (!signature) {
            console.error('No signature found');
            return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No signature'
            }, {
                status: 400
            });
        }
        let event;
        try {
            event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Webhook signature verification failed'
            }, {
                status: 400
            });
        }
        console.log('Webhook event received:', event.type);
        switch(event.type){
            case 'checkout.session.completed':
                {
                    const session = event.data.object;
                    const userId = session.metadata?.userId || session.metadata?.supabase_user_id;
                    console.log('Checkout completed for user:', userId);
                    if (userId) {
                        const { error } = await supabase.auth.admin.updateUserById(userId, {
                            user_metadata: {
                                is_premium: true,
                                stripe_customer_id: session.customer,
                                subscription_id: session.subscription
                            }
                        });
                        if (error) {
                            console.error('Error updating user metadata:', error);
                        } else {
                            console.log('✅ User upgraded to premium:', userId);
                        }
                    }
                    break;
                }
            case 'customer.subscription.updated':
                {
                    const subscription = event.data.object;
                    const userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;
                    console.log('Subscription updated for user:', userId);
                    if (userId) {
                        const isPremium = subscription.status === 'active' || subscription.status === 'trialing';
                        const { error } = await supabase.auth.admin.updateUserById(userId, {
                            user_metadata: {
                                is_premium: isPremium,
                                subscription_status: subscription.status
                            }
                        });
                        if (error) {
                            console.error('Error updating subscription status:', error);
                        } else {
                            console.log('✅ Subscription status updated:', userId, subscription.status);
                        }
                    }
                    break;
                }
            case 'customer.subscription.deleted':
                {
                    const subscription = event.data.object;
                    const userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;
                    console.log('Subscription cancelled for user:', userId);
                    if (userId) {
                        const { error } = await supabase.auth.admin.updateUserById(userId, {
                            user_metadata: {
                                is_premium: false,
                                subscription_status: 'cancelled'
                            }
                        });
                        if (error) {
                            console.error('Error cancelling premium status:', error);
                        } else {
                            console.log('✅ Premium status revoked:', userId);
                        }
                    }
                    break;
                }
            default:
                console.log('Unhandled event type:', event.type);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            received: true
        });
    } catch (err) {
        console.error('Error processing webhook:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Webhook processing failed'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__452d0b13._.js.map
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
"[project]/si_app copy/app/api/create-checkout-session/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/create-checkout-session/route.js
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        // Log environment check
        console.log('=== Stripe Checkout Debug ===');
        console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
        console.log('STRIPE_SECRET_KEY prefix:', process.env.STRIPE_SECRET_KEY?.substring(0, 10));
        // Check if Stripe key exists
        if (!process.env.STRIPE_SECRET_KEY) {
            console.error('❌ STRIPE_SECRET_KEY is missing from environment variables');
            return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Stripe configuration error - missing API key'
            }, {
                status: 500
            });
        }
        // Dynamic import of Stripe to avoid initialization issues
        const Stripe = (await __turbopack_context__.A("[project]/si_app copy/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript, async loader)")).default;
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2023-10-16'
        });
        // Parse and validate request body
        const body = await request.json();
        console.log('Request body:', body);
        const { userId, email } = body;
        if (!userId || !email) {
            console.error('❌ Missing userId or email');
            return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields: userId and email'
            }, {
                status: 400
            });
        }
        // Get origin for redirect URLs
        const origin = request.headers.get('origin') || 'http://localhost:3000';
        console.log('Origin:', origin);
        // Verify price ID exists
        const priceId = process.env.STRIPE_PRICE_ID;
        if (!priceId) {
            console.error('❌ STRIPE_PRICE_ID is missing from environment variables');
            return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Stripe price configuration error'
            }, {
                status: 500
            });
        }
        console.log('Using price ID:', priceId);
        // Create checkout session
        console.log('Creating Stripe checkout session...');
        const session = await stripe.checkout.sessions.create({
            customer_email: email,
            mode: 'subscription',
            payment_method_types: [
                'card'
            ],
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/profile`,
            metadata: {
                userId,
                supabase_user_id: userId
            },
            subscription_data: {
                metadata: {
                    userId,
                    supabase_user_id: userId
                }
            }
        });
        console.log('✅ Checkout session created:', session.id);
        console.log('Checkout URL:', session.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            url: session.url,
            sessionId: session.id
        });
    } catch (err) {
        console.error('❌ Stripe API Error:', err);
        console.error('Error type:', err.type);
        console.error('Error code:', err.code);
        console.error('Error message:', err.message);
        console.error('Full error:', JSON.stringify(err, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message || 'Failed to create checkout session',
            type: err.type,
            code: err.code
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7663f45c._.js.map
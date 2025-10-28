module.exports = [
"[project]/si_app copy/node_modules/stripe/esm/crypto/CryptoProvider.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interface encapsulating the various crypto computations used by the library,
 * allowing pluggable underlying crypto implementations.
 */ __turbopack_context__.s([
    "CryptoProvider",
    ()=>CryptoProvider,
    "CryptoProviderOnlySupportsAsyncError",
    ()=>CryptoProviderOnlySupportsAsyncError
]);
class CryptoProvider {
    /**
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */ computeHMACSignature(payload, secret) {
        throw new Error('computeHMACSignature not implemented.');
    }
    /**
     * Asynchronous version of `computeHMACSignature`. Some implementations may
     * only allow support async signature computation.
     *
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */ computeHMACSignatureAsync(payload, secret) {
        throw new Error('computeHMACSignatureAsync not implemented.');
    }
    /**
     * Computes a SHA-256 hash of the data.
     */ computeSHA256Async(data) {
        throw new Error('computeSHA256 not implemented.');
    }
}
class CryptoProviderOnlySupportsAsyncError extends Error {
}
}),
"[project]/si_app copy/node_modules/stripe/esm/crypto/NodeCryptoProvider.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeCryptoProvider",
    ()=>NodeCryptoProvider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/crypto/CryptoProvider.js [app-route] (ecmascript)");
;
;
class NodeCryptoProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CryptoProvider"] {
    /** @override */ computeHMACSignature(payload, secret) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"]('sha256', secret).update(payload, 'utf8').digest('hex');
    }
    /** @override */ async computeHMACSignatureAsync(payload, secret) {
        const signature = await this.computeHMACSignature(payload, secret);
        return signature;
    }
    /** @override */ async computeSHA256Async(data) {
        return new Uint8Array(await __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"]('sha256').update(data).digest());
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/net/HttpClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Encapsulates the logic for issuing a request to the Stripe API.
 *
 * A custom HTTP client should should implement:
 * 1. A response class which extends HttpClientResponse and wraps around their
 *    own internal representation of a response.
 * 2. A client class which extends HttpClient and implements all methods,
 *    returning their own response class when making requests.
 */ __turbopack_context__.s([
    "HttpClient",
    ()=>HttpClient,
    "HttpClientResponse",
    ()=>HttpClientResponse
]);
class HttpClient {
    /** The client name used for diagnostics. */ getClientName() {
        throw new Error('getClientName not implemented.');
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        throw new Error('makeRequest not implemented.');
    }
    /** Helper to make a consistent timeout error across implementations. */ static makeTimeoutError() {
        const timeoutErr = new TypeError(HttpClient.TIMEOUT_ERROR_CODE);
        timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
        return timeoutErr;
    }
}
// Public API accessible via Stripe.HttpClient
HttpClient.CONNECTION_CLOSED_ERROR_CODES = [
    'ECONNRESET',
    'EPIPE'
];
HttpClient.TIMEOUT_ERROR_CODE = 'ETIMEDOUT';
class HttpClientResponse {
    constructor(statusCode, headers){
        this._statusCode = statusCode;
        this._headers = headers;
    }
    getStatusCode() {
        return this._statusCode;
    }
    getHeaders() {
        return this._headers;
    }
    getRawResponse() {
        throw new Error('getRawResponse not implemented.');
    }
    toStream(streamCompleteCallback) {
        throw new Error('toStream not implemented.');
    }
    toJSON() {
        throw new Error('toJSON not implemented.');
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/net/NodeHttpClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeHttpClient",
    ()=>NodeHttpClient,
    "NodeHttpClientResponse",
    ()=>NodeHttpClientResponse
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/net/HttpClient.js [app-route] (ecmascript)");
;
;
;
// `import * as http_ from 'http'` creates a "Module Namespace Exotic Object"
// which is immune to monkey-patching, whereas http_.default (in an ES Module context)
// will resolve to the same thing as require('http'), which is
// monkey-patchable. We care about this because users in their test
// suites might be using a library like "nock" which relies on the ability
// to monkey-patch and intercept calls to http.request.
const http = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__.default || __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__;
const https = __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__.default || __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__;
const defaultHttpAgent = new http.Agent({
    keepAlive: true
});
const defaultHttpsAgent = new https.Agent({
    keepAlive: true
});
class NodeHttpClient extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"] {
    constructor(agent){
        super();
        this._agent = agent;
    }
    /** @override. */ getClientName() {
        return 'node';
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === 'http';
        let agent = this._agent;
        if (!agent) {
            agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
        }
        const requestPromise = new Promise((resolve, reject)=>{
            const req = (isInsecureConnection ? http : https).request({
                host: host,
                port: port,
                path,
                method,
                agent,
                headers,
                ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5'
            });
            req.setTimeout(timeout, ()=>{
                req.destroy(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError());
            });
            req.on('response', (res)=>{
                resolve(new NodeHttpClientResponse(res));
            });
            req.on('error', (error)=>{
                reject(error);
            });
            req.once('socket', (socket)=>{
                if (socket.connecting) {
                    socket.once(isInsecureConnection ? 'connect' : 'secureConnect', ()=>{
                        // Send payload; we're safe:
                        req.write(requestData);
                        req.end();
                    });
                } else {
                    // we're already connected
                    req.write(requestData);
                    req.end();
                }
            });
        });
        return requestPromise;
    }
}
class NodeHttpClientResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClientResponse"] {
    constructor(res){
        // @ts-ignore
        super(res.statusCode, res.headers || {});
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toStream(streamCompleteCallback) {
        // The raw response is itself the stream, so we just return that. To be
        // backwards compatible, we should invoke the streamCompleteCallback only
        // once the stream has been fully consumed.
        this._res.once('end', ()=>streamCompleteCallback());
        return this._res;
    }
    toJSON() {
        return new Promise((resolve, reject)=>{
            let response = '';
            this._res.setEncoding('utf8');
            this._res.on('data', (chunk)=>{
                response += chunk;
            });
            this._res.once('end', ()=>{
                try {
                    resolve(JSON.parse(response));
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}
}),
"[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/si_app copy/node_modules/object-inspect/util.inspect.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inspect;
}),
"[project]/si_app copy/node_modules/object-inspect/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __turbopack_context__.r("[project]/si_app copy/node_modules/object-inspect/util.inspect.js [app-route] (ecmascript)");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, {
                depth: maxDepth - depth
            });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof globalThis !== 'undefined' && obj === globalThis || ("TURBOPACK compile-time value", "object") !== 'undefined' && obj === /*TURBOPACK member replacement*/ __turbopack_context__.g) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) {
            return tag + '{}';
        }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap['$' + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}
}),
"[project]/si_app copy/node_modules/side-channel-list/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inspect = __turbopack_context__.r("[project]/si_app copy/node_modules/object-inspect/index.js [app-route] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
                // eslint-disable-next-line no-extra-parens
                curr.next = list.next;
                list.next = curr; // eslint-disable-line no-param-reassign
            }
            return curr;
        }
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) {
        return void undefined;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) {
        return false;
    }
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) {
        return listGetNode(objects, key, true);
    }
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
                $o = void undefined;
            }
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) {
                // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    next: void undefined
                };
            }
            // eslint-disable-next-line no-extra-parens
            listSet($o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/si_app copy/node_modules/es-object-atoms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/si_app copy/node_modules/es-errors/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/si_app copy/node_modules/es-errors/eval.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/si_app copy/node_modules/es-errors/range.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/si_app copy/node_modules/es-errors/ref.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/si_app copy/node_modules/es-errors/syntax.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/si_app copy/node_modules/es-errors/uri.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/si_app copy/node_modules/math-intrinsics/abs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/si_app copy/node_modules/math-intrinsics/floor.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/si_app copy/node_modules/math-intrinsics/max.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/si_app copy/node_modules/math-intrinsics/min.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/si_app copy/node_modules/math-intrinsics/pow.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/si_app copy/node_modules/math-intrinsics/round.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/si_app copy/node_modules/math-intrinsics/isNaN.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/si_app copy/node_modules/math-intrinsics/sign.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/isNaN.js [app-route] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/si_app copy/node_modules/gopd/gOPD.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/si_app copy/node_modules/gopd/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/si_app copy/node_modules/gopd/gOPD.js [app-route] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/si_app copy/node_modules/es-define-property/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/si_app copy/node_modules/has-symbols/shams.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/si_app copy/node_modules/has-symbols/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/si_app copy/node_modules/has-symbols/shams.js [app-route] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/si_app copy/node_modules/get-proto/Reflect.getPrototypeOf.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/si_app copy/node_modules/get-proto/Object.getPrototypeOf.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/si_app copy/node_modules/es-object-atoms/index.js [app-route] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/si_app copy/node_modules/function-bind/implementation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/si_app copy/node_modules/function-bind/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/si_app copy/node_modules/function-bind/implementation.js [app-route] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/si_app copy/node_modules/call-bind-apply-helpers/functionCall.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/si_app copy/node_modules/call-bind-apply-helpers/functionApply.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/si_app copy/node_modules/call-bind-apply-helpers/reflectApply.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/si_app copy/node_modules/call-bind-apply-helpers/actualApply.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/si_app copy/node_modules/function-bind/index.js [app-route] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/functionApply.js [app-route] (ecmascript)");
var $call = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/functionCall.js [app-route] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/reflectApply.js [app-route] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/si_app copy/node_modules/call-bind-apply-helpers/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/si_app copy/node_modules/function-bind/index.js [app-route] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)");
var $call = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/functionCall.js [app-route] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/actualApply.js [app-route] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/si_app copy/node_modules/dunder-proto/get.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/index.js [app-route] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/si_app copy/node_modules/gopd/index.js [app-route] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/si_app copy/node_modules/get-proto/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/si_app copy/node_modules/get-proto/Reflect.getPrototypeOf.js [app-route] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/si_app copy/node_modules/get-proto/Object.getPrototypeOf.js [app-route] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/si_app copy/node_modules/dunder-proto/get.js [app-route] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/si_app copy/node_modules/hasown/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/si_app copy/node_modules/function-bind/index.js [app-route] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/si_app copy/node_modules/get-intrinsic/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/si_app copy/node_modules/es-object-atoms/index.js [app-route] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/index.js [app-route] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/eval.js [app-route] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/range.js [app-route] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/ref.js [app-route] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/syntax.js [app-route] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/uri.js [app-route] (ecmascript)");
var abs = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/abs.js [app-route] (ecmascript)");
var floor = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/floor.js [app-route] (ecmascript)");
var max = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/max.js [app-route] (ecmascript)");
var min = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/min.js [app-route] (ecmascript)");
var pow = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/pow.js [app-route] (ecmascript)");
var round = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/round.js [app-route] (ecmascript)");
var sign = __turbopack_context__.r("[project]/si_app copy/node_modules/math-intrinsics/sign.js [app-route] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/si_app copy/node_modules/gopd/index.js [app-route] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/si_app copy/node_modules/es-define-property/index.js [app-route] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/si_app copy/node_modules/has-symbols/index.js [app-route] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/si_app copy/node_modules/get-proto/index.js [app-route] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/si_app copy/node_modules/get-proto/Object.getPrototypeOf.js [app-route] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/si_app copy/node_modules/get-proto/Reflect.getPrototypeOf.js [app-route] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/functionApply.js [app-route] (ecmascript)");
var $call = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/functionCall.js [app-route] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/si_app copy/node_modules/function-bind/index.js [app-route] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/si_app copy/node_modules/hasown/index.js [app-route] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/si_app copy/node_modules/call-bound/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/si_app copy/node_modules/get-intrinsic/index.js [app-route] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bind-apply-helpers/index.js [app-route] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}),
"[project]/si_app copy/node_modules/side-channel-map/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/si_app copy/node_modules/get-intrinsic/index.js [app-route] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bound/index.js [app-route] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/si_app copy/node_modules/object-inspect/index.js [app-route] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) {
                    $m = void undefined;
                }
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) {
                return $mapGet($m, key);
            }
        },
        has: function(key) {
            if ($m) {
                return $mapHas($m, key);
            }
            return false;
        },
        set: function(key, value) {
            if (!$m) {
                // @ts-expect-error TS can't handle narrowing a variable inside a closure
                $m = new $Map();
            }
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};
}),
"[project]/si_app copy/node_modules/side-channel-weakmap/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/si_app copy/node_modules/get-intrinsic/index.js [app-route] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/si_app copy/node_modules/call-bound/index.js [app-route] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/si_app copy/node_modules/object-inspect/index.js [app-route] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/si_app copy/node_modules/side-channel-map/index.js [app-route] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapDelete($wm, key);
                }
            } else if (getSideChannelMap) {
                if ($m) {
                    return $m['delete'](key);
                }
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) {
                    $m = getSideChannelMap();
                }
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;
}),
"[project]/si_app copy/node_modules/side-channel/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $TypeError = __turbopack_context__.r("[project]/si_app copy/node_modules/es-errors/type.js [app-route] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/si_app copy/node_modules/object-inspect/index.js [app-route] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/si_app copy/node_modules/side-channel-list/index.js [app-route] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/si_app copy/node_modules/side-channel-map/index.js [app-route] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/si_app copy/node_modules/side-channel-weakmap/index.js [app-route] (ecmascript)");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) {
                $channelData = makeChannel();
            }
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/si_app copy/node_modules/qs/lib/formats.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};
}),
"[project]/si_app copy/node_modules/qs/lib/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formats = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/formats.js [app-route] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? {
        __proto__: null
    } : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== 'object' && typeof source !== 'function') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== 'object') {
        return [
            target
        ].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }
    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }
    var out = '';
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join('');
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};
}),
"[project]/si_app copy/node_modules/qs/lib/stringify.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getSideChannel = __turbopack_context__.r("[project]/si_app copy/node_modules/side-channel/index.js [app-route] (ecmascript)");
var utils = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/utils.js [app-route] (ecmascript)");
var formats = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/formats.js [app-route] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    filter: void undefined,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void undefined
            }
        ];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + '[]';
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === 'object' && key && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value === null) {
            continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if ('indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = defaults.arrayFormat;
    }
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) {
        return '';
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
            continue;
        }
        pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }
    return joined.length > 0 ? prefix + joined : '';
};
}),
"[project]/si_app copy/node_modules/qs/lib/parse.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/utils.js [app-route] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
    if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
    }
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, 'value');
            });
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(String(val));
        }
        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === 'combine') {
            obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === 'last') {
            obj[key] = val;
        }
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === '[]') {
        var parentKey = chain.slice(0, -1).join('');
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) {
            obj = options.allowEmptyArrays && (leaf === '' || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf);
        } else {
            obj = options.plainObjects ? {
                __proto__: null
            } : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === '') {
                obj = {
                    0: leaf
                };
            } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (decodedRoot !== '__proto__') {
                obj[decodedRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, check strictDepth option for throw, else just add whatever is left
    if (segment) {
        if (options.strictDepth === true) {
            throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
        }
        keys.push('[' + key.slice(segment.index) + ']');
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
        throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
        throw new TypeError('The duplicates option must be either combine, first, or last');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? {
            __proto__: null
        } : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? {
        __proto__: null
    } : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};
}),
"[project]/si_app copy/node_modules/qs/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var stringify = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/stringify.js [app-route] (ecmascript)");
var parse = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/parse.js [app-route] (ecmascript)");
var formats = __turbopack_context__.r("[project]/si_app copy/node_modules/qs/lib/formats.js [app-route] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}),
"[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callbackifyPromiseWithTimeout",
    ()=>callbackifyPromiseWithTimeout,
    "concat",
    ()=>concat,
    "createApiKeyAuthenticator",
    ()=>createApiKeyAuthenticator,
    "determineProcessUserAgentProperties",
    ()=>determineProcessUserAgentProperties,
    "emitWarning",
    ()=>emitWarning,
    "extractUrlParams",
    ()=>extractUrlParams,
    "flattenAndStringify",
    ()=>flattenAndStringify,
    "getAPIMode",
    ()=>getAPIMode,
    "getDataFromArgs",
    ()=>getDataFromArgs,
    "getOptionsFromArgs",
    ()=>getOptionsFromArgs,
    "isObject",
    ()=>isObject,
    "isOptionsHash",
    ()=>isOptionsHash,
    "jsonStringifyRequestData",
    ()=>jsonStringifyRequestData,
    "makeURLInterpolator",
    ()=>makeURLInterpolator,
    "normalizeHeader",
    ()=>normalizeHeader,
    "normalizeHeaders",
    ()=>normalizeHeaders,
    "parseHeadersForFetch",
    ()=>parseHeadersForFetch,
    "parseHttpHeaderAsNumber",
    ()=>parseHttpHeaderAsNumber,
    "parseHttpHeaderAsString",
    ()=>parseHttpHeaderAsString,
    "pascalToCamelCase",
    ()=>pascalToCamelCase,
    "protoExtend",
    ()=>protoExtend,
    "queryStringifyRequestData",
    ()=>queryStringifyRequestData,
    "removeNullish",
    ()=>removeNullish,
    "validateInteger",
    ()=>validateInteger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/qs/lib/index.js [app-route] (ecmascript)");
;
const OPTIONS_KEYS = [
    'apiKey',
    'idempotencyKey',
    'stripeAccount',
    'apiVersion',
    'maxNetworkRetries',
    'timeout',
    'host',
    'authenticator',
    'stripeContext',
    'additionalHeaders',
    'streaming'
];
function isOptionsHash(o) {
    return o && typeof o === 'object' && OPTIONS_KEYS.some((prop)=>Object.prototype.hasOwnProperty.call(o, prop));
}
function queryStringifyRequestData(data, apiMode) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"](data, {
        serializeDate: (d)=>Math.floor(d.getTime() / 1000).toString(),
        arrayFormat: apiMode == 'v2' ? 'repeat' : 'indices'
    })// Don't use strict form encoding by changing the square bracket control
    // characters back to their literals. This is fine by the server, and
    // makes these parameter strings easier to read.
    .replace(/%5B/g, '[').replace(/%5D/g, ']');
}
const makeURLInterpolator = (()=>{
    const rc = {
        '\n': '\\n',
        '"': '\\"',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029'
    };
    return (str)=>{
        const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0)=>rc[$0]);
        return (outputs)=>{
            return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1)=>{
                const output = outputs[$1];
                if (isValidEncodeUriComponentType(output)) return encodeURIComponent(output);
                return '';
            });
        };
    };
})();
function isValidEncodeUriComponentType(value) {
    return [
        'number',
        'string',
        'boolean'
    ].includes(typeof value);
}
function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
        return [];
    }
    return params.map((param)=>param.replace(/[{}]/g, ''));
}
function getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== 'object') {
        return {};
    }
    if (!isOptionsHash(args[0])) {
        return args.shift();
    }
    const argKeys = Object.keys(args[0]);
    const optionKeysInArgs = argKeys.filter((key)=>OPTIONS_KEYS.includes(key));
    // In some cases options may be the provided as the first argument.
    // Here we're detecting a case where there are two distinct arguments
    // (the first being args and the second options) and with known
    // option keys in the first so that we can warn the user about it.
    if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
        emitWarning(`Options found in arguments (${optionKeysInArgs.join(', ')}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
    }
    return {};
}
function getOptionsFromArgs(args) {
    const opts = {
        host: null,
        headers: {},
        settings: {},
        streaming: false
    };
    if (args.length > 0) {
        const arg = args[args.length - 1];
        if (typeof arg === 'string') {
            opts.authenticator = createApiKeyAuthenticator(args.pop());
        } else if (isOptionsHash(arg)) {
            const params = Object.assign({}, args.pop());
            const extraKeys = Object.keys(params).filter((key)=>!OPTIONS_KEYS.includes(key));
            if (extraKeys.length) {
                emitWarning(`Invalid options found (${extraKeys.join(', ')}); ignoring.`);
            }
            if (params.apiKey) {
                opts.authenticator = createApiKeyAuthenticator(params.apiKey);
            }
            if (params.idempotencyKey) {
                opts.headers['Idempotency-Key'] = params.idempotencyKey;
            }
            if (params.stripeAccount) {
                opts.headers['Stripe-Account'] = params.stripeAccount;
            }
            if (params.stripeContext) {
                if (opts.headers['Stripe-Account']) {
                    throw new Error("Can't specify both stripeAccount and stripeContext.");
                }
                opts.headers['Stripe-Context'] = params.stripeContext;
            }
            if (params.apiVersion) {
                opts.headers['Stripe-Version'] = params.apiVersion;
            }
            if (Number.isInteger(params.maxNetworkRetries)) {
                opts.settings.maxNetworkRetries = params.maxNetworkRetries;
            }
            if (Number.isInteger(params.timeout)) {
                opts.settings.timeout = params.timeout;
            }
            if (params.host) {
                opts.host = params.host;
            }
            if (params.authenticator) {
                if (params.apiKey) {
                    throw new Error("Can't specify both apiKey and authenticator.");
                }
                if (typeof params.authenticator !== 'function') {
                    throw new Error('The authenticator must be a function ' + 'receiving a request as the first parameter.');
                }
                opts.authenticator = params.authenticator;
            }
            if (params.additionalHeaders) {
                opts.headers = params.additionalHeaders;
            }
            if (params.streaming) {
                opts.streaming = true;
            }
        }
    }
    return opts;
}
function protoExtend(sub) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const Super = this;
    const Constructor = Object.prototype.hasOwnProperty.call(sub, 'constructor') ? sub.constructor : function(...args) {
        Super.apply(this, args);
    };
    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);
    return Constructor;
}
function removeNullish(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Argument must be an object');
    }
    return Object.keys(obj).reduce((result, key)=>{
        if (obj[key] != null) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}
function normalizeHeaders(obj) {
    if (!(obj && typeof obj === 'object')) {
        return obj;
    }
    return Object.keys(obj).reduce((result, header)=>{
        result[normalizeHeader(header)] = obj[header];
        return result;
    }, {});
}
function normalizeHeader(header) {
    return header.split('-').map((text)=>text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join('-');
}
function callbackifyPromiseWithTimeout(promise, callback) {
    if (callback) {
        // Ensure callback is called outside of promise stack.
        return promise.then((res)=>{
            setTimeout(()=>{
                callback(null, res);
            }, 0);
        }, (err)=>{
            setTimeout(()=>{
                callback(err, null);
            }, 0);
        });
    }
    return promise;
}
function pascalToCamelCase(name) {
    if (name === 'OAuth') {
        return 'oauth';
    } else {
        return name[0].toLowerCase() + name.substring(1);
    }
}
function emitWarning(warning) {
    if (typeof process.emitWarning !== 'function') {
        return console.warn(`Stripe: ${warning}`); /* eslint-disable-line no-console */ 
    }
    return process.emitWarning(warning, 'Stripe');
}
function isObject(obj) {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
}
function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey)=>{
        Object.entries(obj).forEach(([key, value])=>{
            const newKey = prevKey ? `${prevKey}[${key}]` : key;
            if (isObject(value)) {
                if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, 'data')) {
                    // Non-buffer non-file Objects are recursively flattened
                    return step(value, newKey);
                } else {
                    // Buffers and file objects are stored without modification
                    result[newKey] = value;
                }
            } else {
                // Primitives are converted to strings
                result[newKey] = String(value);
            }
        });
    };
    step(data, null);
    return result;
}
function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
        if (defaultVal !== undefined) {
            return defaultVal;
        } else {
            throw new Error(`${name} must be an integer`);
        }
    }
    return n;
}
function determineProcessUserAgentProperties() {
    return typeof process === 'undefined' ? {} : {
        lang_version: process.version,
        platform: process.platform
    };
}
function createApiKeyAuthenticator(apiKey) {
    const authenticator = (request)=>{
        request.headers.Authorization = 'Bearer ' + apiKey;
        return Promise.resolve();
    };
    // For testing
    authenticator._apiKey = apiKey;
    return authenticator;
}
function concat(arrays) {
    const totalLength = arrays.reduce((len, array)=>len + array.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    arrays.forEach((array)=>{
        merged.set(array, offset);
        offset += array.length;
    });
    return merged;
}
/**
 * Replaces Date objects with Unix timestamps
 */ function dateTimeReplacer(key, value) {
    if (this[key] instanceof Date) {
        return Math.floor(this[key].getTime() / 1000).toString();
    }
    return value;
}
function jsonStringifyRequestData(data) {
    return JSON.stringify(data, dateTimeReplacer);
}
function getAPIMode(path) {
    if (!path) {
        return 'v1';
    }
    return path.startsWith('/v2') ? 'v2' : 'v1';
}
function parseHttpHeaderAsString(header) {
    if (Array.isArray(header)) {
        return header.join(', ');
    }
    return String(header);
}
function parseHttpHeaderAsNumber(header) {
    const number = Array.isArray(header) ? header[0] : header;
    return Number(number);
}
function parseHeadersForFetch(headers) {
    return Object.entries(headers).map(([key, value])=>{
        return [
            key,
            parseHttpHeaderAsString(value)
        ];
    });
}
}),
"[project]/si_app copy/node_modules/stripe/esm/net/FetchHttpClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchHttpClient",
    ()=>FetchHttpClient,
    "FetchHttpClientResponse",
    ()=>FetchHttpClientResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/net/HttpClient.js [app-route] (ecmascript)");
;
;
class FetchHttpClient extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"] {
    constructor(fetchFn){
        super();
        // Default to global fetch if available
        if (!fetchFn) {
            if (!globalThis.fetch) {
                throw new Error('fetch() function not provided and is not defined in the global scope. ' + 'You must provide a fetch implementation.');
            }
            fetchFn = globalThis.fetch;
        }
        // Both timeout behaviors differs from Node:
        // - Fetch uses a single timeout for the entire length of the request.
        // - Node is more fine-grained and resets the timeout after each stage of the request.
        if (globalThis.AbortController) {
            // Utilise native AbortController if available
            // AbortController was added in Node v15.0.0, v14.17.0
            this._fetchFn = FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
        } else {
            // Fall back to racing against a timeout promise if not available in the runtime
            // This does not actually cancel the underlying fetch operation or resources
            this._fetchFn = FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
        }
    }
    static makeFetchWithRaceTimeout(fetchFn) {
        return (url, init, timeout)=>{
            let pendingTimeoutId;
            const timeoutPromise = new Promise((_, reject)=>{
                pendingTimeoutId = setTimeout(()=>{
                    pendingTimeoutId = null;
                    reject(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError());
                }, timeout);
            });
            const fetchPromise = fetchFn(url, init);
            return Promise.race([
                fetchPromise,
                timeoutPromise
            ]).finally(()=>{
                if (pendingTimeoutId) {
                    clearTimeout(pendingTimeoutId);
                }
            });
        };
    }
    static makeFetchWithAbortTimeout(fetchFn) {
        return async (url, init, timeout)=>{
            // Use AbortController because AbortSignal.timeout() was added later in Node v17.3.0, v16.14.0
            const abort = new AbortController();
            let timeoutId = setTimeout(()=>{
                timeoutId = null;
                abort.abort(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError());
            }, timeout);
            try {
                return await fetchFn(url, Object.assign(Object.assign({}, init), {
                    signal: abort.signal
                }));
            } catch (err) {
                // Some implementations, like node-fetch, do not respect the reason passed to AbortController.abort()
                // and instead it always throws an AbortError
                // We catch this case to normalise all timeout errors
                if (err.name === 'AbortError') {
                    throw __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError();
                } else {
                    throw err;
                }
            } finally{
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        };
    }
    /** @override. */ getClientName() {
        return 'fetch';
    }
    async makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === 'http';
        const url = new URL(path, `${isInsecureConnection ? 'http' : 'https'}://${host}`);
        url.port = port;
        // For methods which expect payloads, we should always pass a body value
        // even when it is empty. Without this, some JS runtimes (eg. Deno) will
        // inject a second Content-Length header. See https://github.com/stripe/stripe-node/issues/1519
        // for more details.
        const methodHasPayload = method == 'POST' || method == 'PUT' || method == 'PATCH';
        const body = requestData || (methodHasPayload ? '' : undefined);
        const res = await this._fetchFn(url.toString(), {
            method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseHeadersForFetch"])(headers),
            body: body
        }, timeout);
        return new FetchHttpClientResponse(res);
    }
}
class FetchHttpClientResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClientResponse"] {
    constructor(res){
        super(res.status, FetchHttpClientResponse._transformHeadersToObject(res.headers));
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toStream(streamCompleteCallback) {
        // Unfortunately `fetch` does not have event handlers for when the stream is
        // completely read. We therefore invoke the streamCompleteCallback right
        // away. This callback emits a response event with metadata and completes
        // metrics, so it's ok to do this without waiting for the stream to be
        // completely read.
        streamCompleteCallback();
        // Fetch's `body` property is expected to be a readable stream of the body.
        return this._res.body;
    }
    toJSON() {
        return this._res.json();
    }
    static _transformHeadersToObject(headers) {
        // Fetch uses a Headers instance so this must be converted to a barebones
        // JS object to meet the HttpClient interface.
        const headersObj = {};
        for (const entry of headers){
            if (!Array.isArray(entry) || entry.length != 2) {
                throw new Error('Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.');
            }
            headersObj[entry[0]] = entry[1];
        }
        return headersObj;
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/crypto/SubtleCryptoProvider.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubtleCryptoProvider",
    ()=>SubtleCryptoProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/crypto/CryptoProvider.js [app-route] (ecmascript)");
;
class SubtleCryptoProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CryptoProvider"] {
    constructor(subtleCrypto){
        super();
        // If no subtle crypto is interface, default to the global namespace. This
        // is to allow custom interfaces (eg. using the Node webcrypto interface in
        // tests).
        this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */ computeHMACSignature(payload, secret) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CryptoProviderOnlySupportsAsyncError"]('SubtleCryptoProvider cannot be used in a synchronous context.');
    }
    /** @override */ async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder();
        const key = await this.subtleCrypto.importKey('raw', encoder.encode(secret), {
            name: 'HMAC',
            hash: {
                name: 'SHA-256'
            }
        }, false, [
            'sign'
        ]);
        const signatureBuffer = await this.subtleCrypto.sign('hmac', key, encoder.encode(payload));
        // crypto.subtle returns the signature in base64 format. This must be
        // encoded in hex to match the CryptoProvider contract. We map each byte in
        // the buffer to its corresponding hex octet and then combine into a string.
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for(let i = 0; i < signatureBytes.length; i++){
            signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join('');
    }
    /** @override */ async computeSHA256Async(data) {
        return new Uint8Array(await this.subtleCrypto.digest('SHA-256', data));
    }
}
// Cached mapping of byte to hex representation. We do this once to avoid re-
// computing every time we need to convert the result of a signature to hex.
const byteHexMapping = new Array(256);
for(let i = 0; i < byteHexMapping.length; i++){
    byteHexMapping[i] = i.toString(16).padStart(2, '0');
}
}),
"[project]/si_app copy/node_modules/stripe/esm/platform/PlatformFunctions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlatformFunctions",
    ()=>PlatformFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$FetchHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/net/FetchHttpClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$SubtleCryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/crypto/SubtleCryptoProvider.js [app-route] (ecmascript)");
;
;
class PlatformFunctions {
    constructor(){
        this._fetchFn = null;
        this._agent = null;
    }
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */ getUname() {
        throw new Error('getUname not implemented.');
    }
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */ uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
    /**
     * Compares strings in constant time.
     */ secureCompare(a, b) {
        // return early here if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        const len = a.length;
        let result = 0;
        for(let i = 0; i < len; ++i){
            result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return result === 0;
    }
    /**
     * Creates an event emitter.
     */ createEmitter() {
        throw new Error('createEmitter not implemented.');
    }
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */ tryBufferData(data) {
        throw new Error('tryBufferData not implemented.');
    }
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */ createNodeHttpClient(agent) {
        throw new Error('createNodeHttpClient not implemented.');
    }
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */ createFetchHttpClient(fetchFn) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$FetchHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FetchHttpClient"](fetchFn);
    }
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */ createDefaultHttpClient() {
        throw new Error('createDefaultHttpClient not implemented.');
    }
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */ createNodeCryptoProvider() {
        throw new Error('createNodeCryptoProvider not implemented.');
    }
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */ createSubtleCryptoProvider(subtleCrypto) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$SubtleCryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubtleCryptoProvider"](subtleCrypto);
    }
    createDefaultCryptoProvider() {
        throw new Error('createDefaultCryptoProvider not implemented.');
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/Error.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable camelcase */ /* eslint-disable no-warning-comments */ __turbopack_context__.s([
    "StripeAPIError",
    ()=>StripeAPIError,
    "StripeAuthenticationError",
    ()=>StripeAuthenticationError,
    "StripeCardError",
    ()=>StripeCardError,
    "StripeConnectionError",
    ()=>StripeConnectionError,
    "StripeError",
    ()=>StripeError,
    "StripeIdempotencyError",
    ()=>StripeIdempotencyError,
    "StripeInvalidGrantError",
    ()=>StripeInvalidGrantError,
    "StripeInvalidRequestError",
    ()=>StripeInvalidRequestError,
    "StripePermissionError",
    ()=>StripePermissionError,
    "StripeRateLimitError",
    ()=>StripeRateLimitError,
    "StripeSignatureVerificationError",
    ()=>StripeSignatureVerificationError,
    "StripeUnknownError",
    ()=>StripeUnknownError,
    "TemporarySessionExpiredError",
    ()=>TemporarySessionExpiredError,
    "generateV1Error",
    ()=>generateV1Error,
    "generateV2Error",
    ()=>generateV2Error
]);
const generateV1Error = (rawStripeError)=>{
    switch(rawStripeError.type){
        case 'card_error':
            return new StripeCardError(rawStripeError);
        case 'invalid_request_error':
            return new StripeInvalidRequestError(rawStripeError);
        case 'api_error':
            return new StripeAPIError(rawStripeError);
        case 'authentication_error':
            return new StripeAuthenticationError(rawStripeError);
        case 'rate_limit_error':
            return new StripeRateLimitError(rawStripeError);
        case 'idempotency_error':
            return new StripeIdempotencyError(rawStripeError);
        case 'invalid_grant':
            return new StripeInvalidGrantError(rawStripeError);
        default:
            return new StripeUnknownError(rawStripeError);
    }
};
const generateV2Error = (rawStripeError)=>{
    switch(rawStripeError.type){
        // switchCases: The beginning of the section generated from our OpenAPI spec
        case 'temporary_session_expired':
            return new TemporarySessionExpiredError(rawStripeError);
    }
    // Special handling for requests with missing required fields in V2 APIs.
    // invalid_field response in V2 APIs returns the field 'code' instead of 'type'.
    switch(rawStripeError.code){
        case 'invalid_fields':
            return new StripeInvalidRequestError(rawStripeError);
    }
    return generateV1Error(rawStripeError);
};
class StripeError extends Error {
    constructor(raw = {}, type = null){
        var _a;
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.message = (_a = raw.message) !== null && _a !== void 0 ? _a : '';
        this.userMessage = raw.user_message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
    }
}
/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */ StripeError.generate = generateV1Error;
class StripeCardError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeCardError');
    }
}
class StripeInvalidRequestError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeInvalidRequestError');
    }
}
class StripeAPIError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeAPIError');
    }
}
class StripeAuthenticationError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeAuthenticationError');
    }
}
class StripePermissionError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripePermissionError');
    }
}
class StripeRateLimitError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeRateLimitError');
    }
}
class StripeConnectionError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeConnectionError');
    }
}
class StripeSignatureVerificationError extends StripeError {
    constructor(header, payload, raw = {}){
        super(raw, 'StripeSignatureVerificationError');
        this.header = header;
        this.payload = payload;
    }
}
class StripeIdempotencyError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeIdempotencyError');
    }
}
class StripeInvalidGrantError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeInvalidGrantError');
    }
}
class StripeUnknownError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeUnknownError');
    }
}
class TemporarySessionExpiredError extends StripeError {
    constructor(rawStripeError = {}){
        super(rawStripeError, 'TemporarySessionExpiredError');
    }
} // classDefinitions: The end of the section generated from our OpenAPI spec
}),
"[project]/si_app copy/node_modules/stripe/esm/platform/NodePlatformFunctions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodePlatformFunctions",
    ()=>NodePlatformFunctions
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$NodeCryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/crypto/NodeCryptoProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$NodeHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/net/NodeHttpClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$PlatformFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/platform/PlatformFunctions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/Error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
;
;
;
;
;
;
;
;
class StreamProcessingError extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeError"] {
}
class NodePlatformFunctions extends __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$PlatformFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlatformFunctions"] {
    constructor(){
        super();
        this._exec = __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"];
        this._UNAME_CACHE = null;
    }
    /** @override */ uuid4() {
        // available in: v14.17.x+
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"]) {
            return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"]();
        }
        return super.uuid4();
    }
    /**
     * @override
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface by resolving with a null uname
     * if an error is encountered.
     */ getUname() {
        if (!this._UNAME_CACHE) {
            this._UNAME_CACHE = new Promise((resolve, reject)=>{
                try {
                    this._exec('uname -a', (err, uname)=>{
                        if (err) {
                            return resolve(null);
                        }
                        resolve(uname);
                    });
                } catch (e) {
                    resolve(null);
                }
            });
        }
        return this._UNAME_CACHE;
    }
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */ secureCompare(a, b) {
        if (!a || !b) {
            throw new Error('secureCompare must receive two arguments');
        }
        // return early here if buffer lengths are not equal since timingSafeEqual
        // will throw if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
        // otherwise use our own scmp-internal function.
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"]) {
            const textEncoder = new TextEncoder();
            const aEncoded = textEncoder.encode(a);
            const bEncoded = textEncoder.encode(b);
            return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"](aEncoded, bEncoded);
        }
        return super.secureCompare(a, b);
    }
    createEmitter() {
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"]();
    }
    /** @override */ tryBufferData(data) {
        if (!(data.file.data instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"])) {
            return Promise.resolve(data);
        }
        const bufferArray = [];
        return new Promise((resolve, reject)=>{
            data.file.data.on('data', (line)=>{
                bufferArray.push(line);
            }).once('end', ()=>{
                // @ts-ignore
                const bufferData = Object.assign({}, data);
                bufferData.file.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concat"])(bufferArray);
                resolve(bufferData);
            }).on('error', (err)=>{
                reject(new StreamProcessingError({
                    message: 'An error occurred while attempting to process the file for upload.',
                    detail: err
                }));
            });
        });
    }
    /** @override */ createNodeHttpClient(agent) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$NodeHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeHttpClient"](agent);
    }
    /** @override */ createDefaultHttpClient() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$NodeHttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeHttpClient"]();
    }
    /** @override */ createNodeCryptoProvider() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$NodeCryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeCryptoProvider"]();
    }
    /** @override */ createDefaultCryptoProvider() {
        return this.createNodeCryptoProvider();
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/RequestSender.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RequestSender",
    ()=>RequestSender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/Error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/net/HttpClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
;
;
;
const MAX_RETRY_AFTER_WAIT = 60;
class RequestSender {
    constructor(stripe, maxBufferedRequestMetric){
        this._stripe = stripe;
        this._maxBufferedRequestMetric = maxBufferedRequestMetric;
    }
    _normalizeStripeContext(optsContext, clientContext) {
        if (optsContext) {
            return optsContext.toString() || null; // return null for empty strings
        }
        return (clientContext === null || clientContext === void 0 ? void 0 : clientContext.toString()) || null; // return null for empty strings
    }
    _addHeadersDirectlyToObject(obj, headers) {
        // For convenience, make some headers easily accessible on
        // lastResponse.
        // NOTE: Stripe responds with lowercase header names/keys.
        obj.requestId = headers['request-id'];
        obj.stripeAccount = obj.stripeAccount || headers['stripe-account'];
        obj.apiVersion = obj.apiVersion || headers['stripe-version'];
        obj.idempotencyKey = obj.idempotencyKey || headers['idempotency-key'];
    }
    _makeResponseEvent(requestEvent, statusCode, headers) {
        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestEvent.request_start_time;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeNullish"])({
            api_version: headers['stripe-version'],
            account: headers['stripe-account'],
            idempotency_key: headers['idempotency-key'],
            method: requestEvent.method,
            path: requestEvent.path,
            status: statusCode,
            request_id: this._getRequestId(headers),
            elapsed: requestDurationMs,
            request_start_time: requestEvent.request_start_time,
            request_end_time: requestEndTime
        });
    }
    _getRequestId(headers) {
        return headers['request-id'];
    }
    /**
     * Used by methods with spec.streaming === true. For these methods, we do not
     * buffer successful responses into memory or do parse them into stripe
     * objects, we delegate that all of that to the user and pass back the raw
     * http.Response object to the callback.
     *
     * (Unsuccessful responses shouldn't make it here, they should
     * still be buffered/parsed and handled by _jsonResponseHandler -- see
     * makeRequest)
     */ _streamingResponseHandler(requestEvent, usage, callback) {
        return (res)=>{
            const headers = res.getHeaders();
            const streamCompleteCallback = ()=>{
                const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
                this._stripe._emitter.emit('response', responseEvent);
                this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed, usage);
            };
            const stream = res.toStream(streamCompleteCallback);
            // This is here for backwards compatibility, as the stream is a raw
            // HTTP response in Node and the legacy behavior was to mutate this
            // response.
            this._addHeadersDirectlyToObject(stream, headers);
            return callback(null, stream);
        };
    }
    /**
     * Default handler for Stripe responses. Buffers the response into memory,
     * parses the JSON and returns it (i.e. passes it to the callback) if there
     * is no "error" field. Otherwise constructs/passes an appropriate Error.
     */ _jsonResponseHandler(requestEvent, apiMode, usage, callback) {
        return (res)=>{
            const headers = res.getHeaders();
            const requestId = this._getRequestId(headers);
            const statusCode = res.getStatusCode();
            const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
            this._stripe._emitter.emit('response', responseEvent);
            res.toJSON().then((jsonResponse)=>{
                if (jsonResponse.error) {
                    let err;
                    // Convert OAuth error responses into a standard format
                    // so that the rest of the error logic can be shared
                    if (typeof jsonResponse.error === 'string') {
                        jsonResponse.error = {
                            type: jsonResponse.error,
                            message: jsonResponse.error_description
                        };
                    }
                    jsonResponse.error.headers = headers;
                    jsonResponse.error.statusCode = statusCode;
                    jsonResponse.error.requestId = requestId;
                    if (statusCode === 401) {
                        err = new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeAuthenticationError"](jsonResponse.error);
                    } else if (statusCode === 403) {
                        err = new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripePermissionError"](jsonResponse.error);
                    } else if (statusCode === 429) {
                        err = new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeRateLimitError"](jsonResponse.error);
                    } else if (apiMode === 'v2') {
                        err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateV2Error"])(jsonResponse.error);
                    } else {
                        err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateV1Error"])(jsonResponse.error);
                    }
                    throw err;
                }
                return jsonResponse;
            }, (e)=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeAPIError"]({
                    message: 'Invalid JSON received from the Stripe API',
                    exception: e,
                    requestId: headers['request-id']
                });
            }).then((jsonResponse)=>{
                this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);
                // Expose raw response object.
                const rawResponse = res.getRawResponse();
                this._addHeadersDirectlyToObject(rawResponse, headers);
                Object.defineProperty(jsonResponse, 'lastResponse', {
                    enumerable: false,
                    writable: false,
                    value: rawResponse
                });
                callback(null, jsonResponse);
            }, (e)=>callback(e, null));
        };
    }
    static _generateConnectionErrorMessage(requestRetries) {
        return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''}`;
    }
    // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
    static _shouldRetry(res, numRetries, maxRetries, error) {
        if (error && numRetries === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"].CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
            return true;
        }
        // Do not retry if we are out of retries.
        if (numRetries >= maxRetries) {
            return false;
        }
        // Retry on connection error.
        if (!res) {
            return true;
        }
        // The API may ask us not to retry (e.g., if doing so would be a no-op)
        // or advise us to retry (e.g., in cases of lock timeouts); we defer to that.
        if (res.getHeaders()['stripe-should-retry'] === 'false') {
            return false;
        }
        if (res.getHeaders()['stripe-should-retry'] === 'true') {
            return true;
        }
        // Retry on conflict errors.
        if (res.getStatusCode() === 409) {
            return true;
        }
        // Retry on 500, 503, and other internal errors.
        //
        // Note that we expect the stripe-should-retry header to be false
        // in most cases when a 500 is returned, since our idempotency framework
        // would typically replay it anyway.
        if (res.getStatusCode() >= 500) {
            return true;
        }
        return false;
    }
    _getSleepTimeInMS(numRetries, retryAfter = null) {
        const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
        // Apply exponential backoff with initialNetworkRetryDelay on the
        // number of numRetries so far as inputs. Do not allow the number to exceed
        // maxNetworkRetryDelay.
        let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(2, numRetries - 1), maxNetworkRetryDelay);
        // Apply some jitter by randomizing the value in the range of
        // (sleepSeconds / 2) to (sleepSeconds).
        sleepSeconds *= 0.5 * (1 + Math.random());
        // But never sleep less than the base sleep seconds.
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        // And never sleep less than the time the API asks us to wait, assuming it's a reasonable ask.
        if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
            sleepSeconds = Math.max(sleepSeconds, retryAfter);
        }
        return sleepSeconds * 1000;
    }
    // Max retries can be set on a per request basis. Favor those over the global setting
    _getMaxNetworkRetries(settings = {}) {
        return settings.maxNetworkRetries !== undefined && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
    }
    _defaultIdempotencyKey(method, settings, apiMode) {
        // If this is a POST and we allow multiple retries, ensure an idempotency key.
        const maxRetries = this._getMaxNetworkRetries(settings);
        const genKey = ()=>`stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
        // more verbose than it needs to be, but gives clear separation between V1 and V2 behavior
        if (apiMode === 'v2') {
            if (method === 'POST' || method === 'DELETE') {
                return genKey();
            }
        } else if (apiMode === 'v1') {
            if (method === 'POST' && maxRetries > 0) {
                return genKey();
            }
        }
        return null;
    }
    _makeHeaders({ contentType, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings, stripeAccount, stripeContext, apiMode }) {
        const defaultHeaders = {
            Accept: 'application/json',
            'Content-Type': contentType,
            'User-Agent': this._getUserAgentString(apiMode),
            'X-Stripe-Client-User-Agent': clientUserAgent,
            'X-Stripe-Client-Telemetry': this._getTelemetryHeader(),
            'Stripe-Version': apiVersion,
            'Stripe-Account': stripeAccount,
            'Stripe-Context': stripeContext,
            'Idempotency-Key': this._defaultIdempotencyKey(method, userSuppliedSettings, apiMode)
        };
        // As per https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.2:
        //   A user agent SHOULD send a Content-Length in a request message when
        //   no Transfer-Encoding is sent and the request method defines a meaning
        //   for an enclosed payload body.  For example, a Content-Length header
        //   field is normally sent in a POST request even when the value is 0
        //   (indicating an empty payload body).  A user agent SHOULD NOT send a
        //   Content-Length header field when the request message does not contain
        //   a payload body and the method semantics do not anticipate such a
        //   body.
        //
        // These method types are expected to have bodies and so we should always
        // include a Content-Length.
        const methodHasPayload = method == 'POST' || method == 'PUT' || method == 'PATCH';
        // If a content length was specified, we always include it regardless of
        // whether the method semantics anticipate such a body. This keeps us
        // consistent with historical behavior. We do however want to warn on this
        // and fix these cases as they are semantically incorrect.
        if (methodHasPayload || contentLength) {
            if (!methodHasPayload) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emitWarning"])(`${method} method had non-zero contentLength but no payload is expected for this verb`);
            }
            defaultHeaders['Content-Length'] = contentLength;
        }
        return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeNullish"])(defaultHeaders), // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeHeaders"])(userSuppliedHeaders));
    }
    _getUserAgentString(apiMode) {
        const packageVersion = this._stripe.getConstant('PACKAGE_VERSION');
        const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : '';
        return `Stripe/${apiMode} NodeBindings/${packageVersion} ${appInfo}`.trim();
    }
    _getTelemetryHeader() {
        if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
            const metrics = this._stripe._prevRequestMetrics.shift();
            return JSON.stringify({
                last_request_metrics: metrics
            });
        }
    }
    _recordRequestMetrics(requestId, requestDurationMs, usage) {
        if (this._stripe.getTelemetryEnabled() && requestId) {
            if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emitWarning"])('Request metrics buffer is full, dropping telemetry message.');
            } else {
                const m = {
                    request_id: requestId,
                    request_duration_ms: requestDurationMs
                };
                if (usage && usage.length > 0) {
                    m.usage = usage;
                }
                this._stripe._prevRequestMetrics.push(m);
            }
        }
    }
    _rawRequest(method, path, params, options, usage) {
        const requestPromise = new Promise((resolve, reject)=>{
            let opts;
            try {
                const requestMethod = method.toUpperCase();
                if (requestMethod !== 'POST' && params && Object.keys(params).length !== 0) {
                    throw new Error('rawRequest only supports params on POST requests. Please pass null and add your parameters to path.');
                }
                const args = [].slice.call([
                    params,
                    options
                ]);
                // Pull request data and options (headers, auth) from args.
                const dataFromArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDataFromArgs"])(args);
                const data = requestMethod === 'POST' ? Object.assign({}, dataFromArgs) : null;
                const calculatedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOptionsFromArgs"])(args);
                const headers = calculatedOptions.headers;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const authenticator = calculatedOptions.authenticator;
                opts = {
                    requestMethod,
                    requestPath: path,
                    bodyData: data,
                    queryData: {},
                    authenticator,
                    headers,
                    host: calculatedOptions.host,
                    streaming: !!calculatedOptions.streaming,
                    settings: {},
                    // We use this for thin event internals, so we should record the more specific `usage`, when available
                    usage: usage || [
                        'raw_request'
                    ]
                };
            } catch (err) {
                reject(err);
                return;
            }
            function requestCallback(err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            }
            const { headers, settings } = opts;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const authenticator = opts.authenticator;
            this._request(opts.requestMethod, opts.host, path, opts.bodyData, authenticator, {
                headers,
                settings,
                streaming: opts.streaming
            }, opts.usage, requestCallback);
        });
        return requestPromise;
    }
    _request(method, host, path, data, authenticator, options, usage = [], callback, requestDataProcessor = null) {
        var _a;
        let requestData;
        authenticator = (_a = authenticator !== null && authenticator !== void 0 ? authenticator : this._stripe._authenticator) !== null && _a !== void 0 ? _a : null;
        const apiMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAPIMode"])(path);
        const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter)=>{
            return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
        };
        const makeRequest = (apiVersion, headers, numRetries)=>{
            // timeout can be set on a per-request basis. Favor that over the global setting
            const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField('timeout');
            const request = {
                host: host || this._stripe.getApiField('host'),
                port: this._stripe.getApiField('port'),
                path: path,
                method: method,
                headers: Object.assign({}, headers),
                body: requestData,
                protocol: this._stripe.getApiField('protocol')
            };
            authenticator(request).then(()=>{
                const req = this._stripe.getApiField('httpClient').makeRequest(request.host, request.port, request.path, request.method, request.headers, request.body, request.protocol, timeout);
                const requestStartTime = Date.now();
                const requestEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeNullish"])({
                    api_version: apiVersion,
                    account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseHttpHeaderAsString"])(headers['Stripe-Account']),
                    idempotency_key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseHttpHeaderAsString"])(headers['Idempotency-Key']),
                    method,
                    path,
                    request_start_time: requestStartTime
                });
                const requestRetries = numRetries || 0;
                const maxRetries = this._getMaxNetworkRetries(options.settings || {});
                this._stripe._emitter.emit('request', requestEvent);
                req.then((res)=>{
                    if (RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
                        return retryRequest(makeRequest, apiVersion, headers, requestRetries, (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseHttpHeaderAsNumber"])(res.getHeaders()['retry-after']));
                    } else if (options.streaming && res.getStatusCode() < 400) {
                        return this._streamingResponseHandler(requestEvent, usage, callback)(res);
                    } else {
                        return this._jsonResponseHandler(requestEvent, apiMode, usage, callback)(res);
                    }
                }).catch((error)=>{
                    if (RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
                        return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
                    } else {
                        const isTimeoutError = error.code && error.code === __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"].TIMEOUT_ERROR_CODE;
                        return callback(new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeConnectionError"]({
                            message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : RequestSender._generateConnectionErrorMessage(requestRetries),
                            detail: error
                        }));
                    }
                });
            }).catch((e)=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeError"]({
                    message: 'Unable to authenticate the request',
                    exception: e
                });
            });
        };
        const prepareAndMakeRequest = (error, data)=>{
            if (error) {
                return callback(error);
            }
            requestData = data;
            this._stripe.getClientUserAgent((clientUserAgent)=>{
                var _a, _b, _c;
                const apiVersion = this._stripe.getApiField('version');
                const headers = this._makeHeaders({
                    contentType: apiMode == 'v2' ? 'application/json' : 'application/x-www-form-urlencoded',
                    contentLength: requestData.length,
                    apiVersion: apiVersion,
                    clientUserAgent,
                    method,
                    // other callers expect null, but .headers being optional means it's undefined if not supplied. So we normalize to null.
                    userSuppliedHeaders: (_a = options.headers) !== null && _a !== void 0 ? _a : null,
                    userSuppliedSettings: (_b = options.settings) !== null && _b !== void 0 ? _b : {},
                    stripeAccount: (_c = options.stripeAccount) !== null && _c !== void 0 ? _c : this._stripe.getApiField('stripeAccount'),
                    stripeContext: this._normalizeStripeContext(options.stripeContext, this._stripe.getApiField('stripeContext')),
                    apiMode: apiMode
                });
                makeRequest(apiVersion, headers, 0);
            });
        };
        if (requestDataProcessor) {
            requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
        } else {
            let stringifiedData;
            if (apiMode == 'v2') {
                stringifiedData = data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyRequestData"])(data) : '';
            } else {
                stringifiedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryStringifyRequestData"])(data || {}, apiMode);
            }
            prepareAndMakeRequest(null, stringifiedData);
        }
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/autoPagination.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeAutoPaginationMethods",
    ()=>makeAutoPaginationMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
;
class V1Iterator {
    constructor(firstPagePromise, requestArgs, spec, stripeResource){
        this.index = 0;
        this.pagePromise = firstPagePromise;
        this.promiseCache = {
            currentPromise: null
        };
        this.requestArgs = requestArgs;
        this.spec = spec;
        this.stripeResource = stripeResource;
    }
    async iterate(pageResult) {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === 'number')) {
            throw Error('Unexpected: Stripe API response does not have a well-formed `data` array.');
        }
        const reverseIteration = isReverseIteration(this.requestArgs);
        if (this.index < pageResult.data.length) {
            const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
            const value = pageResult.data[idx];
            this.index += 1;
            return {
                value,
                done: false
            };
        } else if (pageResult.has_more) {
            // Reset counter, request next page, and recurse.
            this.index = 0;
            this.pagePromise = this.getNextPage(pageResult);
            const nextPageResult = await this.pagePromise;
            return this.iterate(nextPageResult);
        }
        return {
            done: true,
            value: undefined
        };
    }
    /** @abstract */ getNextPage(_pageResult) {
        throw new Error('Unimplemented');
    }
    async _next() {
        return this.iterate(await this.pagePromise);
    }
    next() {
        /**
         * If a user calls `.next()` multiple times in parallel,
         * return the same result until something has resolved
         * to prevent page-turning race conditions.
         */ if (this.promiseCache.currentPromise) {
            return this.promiseCache.currentPromise;
        }
        const nextPromise = (async ()=>{
            const ret = await this._next();
            this.promiseCache.currentPromise = null;
            return ret;
        })();
        this.promiseCache.currentPromise = nextPromise;
        return nextPromise;
    }
}
class V1ListIterator extends V1Iterator {
    getNextPage(pageResult) {
        const reverseIteration = isReverseIteration(this.requestArgs);
        const lastId = getLastId(pageResult, reverseIteration);
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            [reverseIteration ? 'ending_before' : 'starting_after']: lastId
        });
    }
}
class V1SearchIterator extends V1Iterator {
    getNextPage(pageResult) {
        if (!pageResult.next_page) {
            throw Error('Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.');
        }
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            page: pageResult.next_page
        });
    }
}
class V2ListIterator {
    constructor(firstPagePromise, requestArgs, spec, stripeResource){
        this.currentPageIterator = (async ()=>{
            const page = await firstPagePromise;
            return page.data[Symbol.iterator]();
        })();
        this.nextPageUrl = (async ()=>{
            const page = await firstPagePromise;
            return page.next_page_url || null;
        })();
        this.requestArgs = requestArgs;
        this.spec = spec;
        this.stripeResource = stripeResource;
    }
    async turnPage() {
        const nextPageUrl = await this.nextPageUrl;
        if (!nextPageUrl) return null;
        this.spec.fullPath = nextPageUrl;
        const page = await this.stripeResource._makeRequest([], this.spec, {});
        this.nextPageUrl = Promise.resolve(page.next_page_url);
        this.currentPageIterator = Promise.resolve(page.data[Symbol.iterator]());
        return this.currentPageIterator;
    }
    async next() {
        {
            const result = (await this.currentPageIterator).next();
            if (!result.done) return {
                done: false,
                value: result.value
            };
        }
        const nextPageIterator = await this.turnPage();
        if (!nextPageIterator) {
            return {
                done: true,
                value: undefined
            };
        }
        const result = nextPageIterator.next();
        if (!result.done) return {
            done: false,
            value: result.value
        };
        return {
            done: true,
            value: undefined
        };
    }
}
const makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise)=>{
    const apiMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAPIMode"])(spec.fullPath || spec.path);
    if (apiMode !== 'v2' && spec.methodType === 'search') {
        return makeAutoPaginationMethodsFromIterator(new V1SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (apiMode !== 'v2' && spec.methodType === 'list') {
        return makeAutoPaginationMethodsFromIterator(new V1ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (apiMode === 'v2' && spec.methodType === 'list') {
        return makeAutoPaginationMethodsFromIterator(new V2ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    return null;
};
const makeAutoPaginationMethodsFromIterator = (iterator)=>{
    const autoPagingEach = makeAutoPagingEach((...args)=>iterator.next(...args));
    const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
    const autoPaginationMethods = {
        autoPagingEach,
        autoPagingToArray,
        // Async iterator functions:
        next: ()=>iterator.next(),
        return: ()=>{
            // This is required for `break`.
            return {};
        },
        [getAsyncIteratorSymbol()]: ()=>{
            return autoPaginationMethods;
        }
    };
    return autoPaginationMethods;
};
/**
 * ----------------
 * Private Helpers:
 * ----------------
 */ function getAsyncIteratorSymbol() {
    if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
        return Symbol.asyncIterator;
    }
    // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
    return '@@asyncIterator';
}
function getDoneCallback(args) {
    if (args.length < 2) {
        return null;
    }
    const onDone = args[1];
    if (typeof onDone !== 'function') {
        throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
    }
    return onDone;
}
/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */ function getItemCallback(args) {
    if (args.length === 0) {
        return undefined;
    }
    const onItem = args[0];
    if (typeof onItem !== 'function') {
        throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
    }
    // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
    if (onItem.length === 2) {
        return onItem;
    }
    if (onItem.length > 2) {
        throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
    }
    // This magically handles all three of these usecases (the latter two being functionally identical):
    // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
    // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
    // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
    return function _onItem(item, next) {
        const shouldContinue = onItem(item);
        next(shouldContinue);
    };
}
function getLastId(listResult, reverseIteration) {
    const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
    const lastItem = listResult.data[lastIdx];
    const lastId = lastItem && lastItem.id;
    if (!lastId) {
        throw Error('Unexpected: No `id` found on the last item while auto-paging a list.');
    }
    return lastId;
}
function makeAutoPagingEach(asyncIteratorNext) {
    return function autoPagingEach() {
        const args = [].slice.call(arguments);
        const onItem = getItemCallback(args);
        const onDone = getDoneCallback(args);
        if (args.length > 2) {
            throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
        }
        const autoPagePromise = wrapAsyncIteratorWithCallback(asyncIteratorNext, // @ts-ignore we might need a null check
        onItem);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callbackifyPromiseWithTimeout"])(autoPagePromise, onDone);
    };
}
function makeAutoPagingToArray(autoPagingEach) {
    return function autoPagingToArray(opts, onDone) {
        const limit = opts && opts.limit;
        if (!limit) {
            throw Error('You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.');
        }
        if (limit > 10000) {
            throw Error('You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.');
        }
        const promise = new Promise((resolve, reject)=>{
            const items = [];
            autoPagingEach((item)=>{
                items.push(item);
                if (items.length >= limit) {
                    return false;
                }
            }).then(()=>{
                resolve(items);
            }).catch(reject);
        });
        // @ts-ignore
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callbackifyPromiseWithTimeout"])(promise, onDone);
    };
}
function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
    return new Promise((resolve, reject)=>{
        function handleIteration(iterResult) {
            if (iterResult.done) {
                resolve();
                return;
            }
            const item = iterResult.value;
            return new Promise((next)=>{
                // Bit confusing, perhaps; we pass a `resolve` fn
                // to the user, so they can decide when and if to continue.
                // They can return false, or a promise which resolves to false, to break.
                onItem(item, next);
            }).then((shouldContinue)=>{
                if (shouldContinue === false) {
                    return handleIteration({
                        done: true,
                        value: undefined
                    });
                } else {
                    return asyncIteratorNext().then(handleIteration);
                }
            });
        }
        asyncIteratorNext().then(handleIteration).catch(reject);
    });
}
function isReverseIteration(requestArgs) {
    const args = [].slice.call(requestArgs);
    const dataFromArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDataFromArgs"])(args);
    return !!dataFromArgs.ending_before;
}
}),
"[project]/si_app copy/node_modules/stripe/esm/StripeMethod.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripeMethod",
    ()=>stripeMethod
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$autoPagination$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/autoPagination.js [app-route] (ecmascript)");
;
;
function stripeMethod(spec) {
    if (spec.path !== undefined && spec.fullPath !== undefined) {
        throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
    }
    return function(...args) {
        const callback = typeof args[args.length - 1] == 'function' && args.pop();
        spec.urlParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractUrlParams"])(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ''));
        const requestPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callbackifyPromiseWithTimeout"])(this._makeRequest(args, spec, {}), callback);
        Object.assign(requestPromise, (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$autoPagination$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeAutoPaginationMethods"])(this, args, spec, requestPromise));
        return requestPromise;
    };
}
}),
"[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StripeResource",
    ()=>StripeResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeMethod.js [app-route] (ecmascript)");
;
;
// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoExtend"];
// Expose method-creator
StripeResource.method = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeMethod"];
StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
/**
 * Encapsulates request logic for a Stripe Resource
 */ function StripeResource(stripe, deprecatedUrlData) {
    this._stripe = stripe;
    if (deprecatedUrlData) {
        throw new Error('Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.');
    }
    this.basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeURLInterpolator"])(// @ts-ignore changing type of basePath
    this.basePath || stripe.getApiField('basePath'));
    // @ts-ignore changing type of path
    this.resourcePath = this.path;
    // @ts-ignore changing type of path
    this.path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeURLInterpolator"])(this.path);
    this.initialize(...arguments);
}
StripeResource.prototype = {
    _stripe: null,
    // @ts-ignore the type of path changes in ctor
    path: '',
    resourcePath: '',
    // Methods that don't use the API's default '/v1' path can override it with this setting.
    basePath: null,
    initialize () {},
    // Function to override the default data processor. This allows full control
    // over how a StripeResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,
    // Function to add a validation checks before sending the request, errors should
    // be thrown, and they will be passed to the callback/promise.
    validateRequest: null,
    createFullPath (commandPath, urlData) {
        const urlParts = [
            this.basePath(urlData),
            this.path(urlData)
        ];
        if (typeof commandPath === 'function') {
            const computedCommandPath = commandPath(urlData);
            // If we have no actual command path, we just omit it to avoid adding a
            // trailing slash. This is important for top-level listing requests, which
            // do not have a command path.
            if (computedCommandPath) {
                urlParts.push(computedCommandPath);
            }
        } else {
            urlParts.push(commandPath);
        }
        return this._joinUrlParts(urlParts);
    },
    // Creates a relative resource path with symbols left in (unlike
    // createFullPath which takes some data to replace them with). For example it
    // might produce: /invoices/{id}
    createResourcePathWithSymbols (pathWithSymbols) {
        // If there is no path beyond the resource path, we want to produce just
        // /<resource path> rather than /<resource path>/.
        if (pathWithSymbols) {
            return `/${this._joinUrlParts([
                this.resourcePath,
                pathWithSymbols
            ])}`;
        } else {
            return `/${this.resourcePath}`;
        }
    },
    _joinUrlParts (parts) {
        // Replace any accidentally doubled up slashes. This previously used
        // path.join, which would do this as well. Unfortunately we need to do this
        // as the functions for creating paths are technically part of the public
        // interface and so we need to preserve backwards compatibility.
        return parts.join('/').replace(/\/{2,}/g, '/');
    },
    _getRequestOpts (requestArgs, spec, overrideData) {
        var _a;
        // Extract spec values with defaults.
        const requestMethod = (spec.method || 'GET').toUpperCase();
        const usage = spec.usage || [];
        const urlParams = spec.urlParams || [];
        const encode = spec.encode || ((data)=>data);
        const isUsingFullPath = !!spec.fullPath;
        const commandPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeURLInterpolator"])(isUsingFullPath ? spec.fullPath : spec.path || '');
        // When using fullPath, we ignore the resource path as it should already be
        // fully qualified.
        const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
        // Don't mutate args externally.
        const args = [].slice.call(requestArgs);
        // Generate and validate url params.
        const urlData = urlParams.reduce((urlData, param)=>{
            const arg = args.shift();
            if (typeof arg !== 'string') {
                throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
            }
            urlData[param] = arg;
            return urlData;
        }, {});
        // Pull request data and options (headers, auth) from args.
        const dataFromArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDataFromArgs"])(args);
        const data = encode(Object.assign({}, dataFromArgs, overrideData));
        const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOptionsFromArgs"])(args);
        const host = options.host || spec.host;
        const streaming = !!spec.streaming || !!options.streaming;
        // Validate that there are no more args.
        if (args.filter((x)=>x != null).length) {
            throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
        }
        // When using full path, we can just invoke the URL interpolator directly
        // as we don't need to use the resource to create a full path.
        const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
        const headers = Object.assign(options.headers, spec.headers);
        if (spec.validator) {
            spec.validator(data, {
                headers
            });
        }
        const dataInQuery = spec.method === 'GET' || spec.method === 'DELETE';
        const bodyData = dataInQuery ? null : data;
        const queryData = dataInQuery ? data : {};
        return {
            requestMethod,
            requestPath,
            bodyData,
            queryData,
            authenticator: (_a = options.authenticator) !== null && _a !== void 0 ? _a : null,
            headers,
            host: host !== null && host !== void 0 ? host : null,
            streaming,
            settings: options.settings,
            usage
        };
    },
    _makeRequest (requestArgs, spec, overrideData) {
        return new Promise((resolve, reject)=>{
            var _a;
            let opts;
            try {
                opts = this._getRequestOpts(requestArgs, spec, overrideData);
            } catch (err) {
                reject(err);
                return;
            }
            function requestCallback(err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
                }
            }
            const emptyQuery = Object.keys(opts.queryData).length === 0;
            const path = [
                opts.requestPath,
                emptyQuery ? '' : '?',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryStringifyRequestData"])(opts.queryData, (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAPIMode"])(opts.requestPath))
            ].join('');
            const { headers, settings } = opts;
            this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.authenticator, {
                headers,
                settings,
                streaming: opts.streaming
            }, opts.usage, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
        });
    }
};
;
}),
"[project]/si_app copy/node_modules/stripe/esm/StripeContext.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The StripeContext class provides an immutable container and convenience methods for interacting with the `Stripe-Context` header. All methods return a new instance of StripeContext.
 * You can use it whenever you're initializing a `Stripe` instance or sending `stripeContext` with a request. It's also found in the `EventNotification.context` property.
 */ __turbopack_context__.s([
    "StripeContext",
    ()=>StripeContext
]);
class StripeContext {
    /**
     * Creates a new StripeContext with the given segments.
     */ constructor(segments = []){
        this._segments = [
            ...segments
        ];
    }
    /**
     * Gets a copy of the segments of this Context.
     */ get segments() {
        return [
            ...this._segments
        ];
    }
    /**
     * Creates a new StripeContext with an additional segment appended.
     */ push(segment) {
        if (!segment) {
            throw new Error('Segment cannot be null or undefined');
        }
        return new StripeContext([
            ...this._segments,
            segment
        ]);
    }
    /**
     * Creates a new StripeContext with the last segment removed.
     * If there are no segments, throws an error.
     */ pop() {
        if (this._segments.length === 0) {
            throw new Error('Cannot pop from an empty context');
        }
        return new StripeContext(this._segments.slice(0, -1));
    }
    /**
     * Converts this context to its string representation.
     */ toString() {
        return this._segments.join('/');
    }
    /**
     * Parses a context string into a StripeContext instance.
     */ static parse(contextStr) {
        if (!contextStr) {
            return new StripeContext([]);
        }
        return new StripeContext(contextStr.split('/'));
    }
}
}),
"[project]/si_app copy/node_modules/stripe/esm/Webhooks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWebhooks",
    ()=>createWebhooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/Error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/crypto/CryptoProvider.js [app-route] (ecmascript)");
;
;
function createWebhooks(platformFunctions) {
    const Webhook = {
        DEFAULT_TOLERANCE: 300,
        signature: null,
        constructEvent (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            try {
                if (!this.signature) {
                    throw new Error('ERR: missing signature helper, unable to verify');
                }
                this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
            } catch (e) {
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CryptoProviderOnlySupportsAsyncError"]) {
                    e.message += '\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`';
                }
                throw e;
            }
            const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder('utf8').decode(payload)) : JSON.parse(payload);
            return jsonPayload;
        },
        async constructEventAsync (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            if (!this.signature) {
                throw new Error('ERR: missing signature helper, unable to verify');
            }
            await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
            const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder('utf8').decode(payload)) : JSON.parse(payload);
            return jsonPayload;
        },
        /**
         * Generates a header to be used for webhook mocking
         *
         * @typedef {object} opts
         * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
         * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
         * @property {string} secret - Stripe webhook secret 'whsec_...'
         * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
         * @property {string} signature - Computed webhook signature
         * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
         */ generateTestHeaderString: function(opts) {
            const preparedOpts = prepareOptions(opts);
            const signature = preparedOpts.signature || preparedOpts.cryptoProvider.computeHMACSignature(preparedOpts.payloadString, preparedOpts.secret);
            return preparedOpts.generateHeaderString(signature);
        },
        generateTestHeaderStringAsync: async function(opts) {
            const preparedOpts = prepareOptions(opts);
            const signature = preparedOpts.signature || await preparedOpts.cryptoProvider.computeHMACSignatureAsync(preparedOpts.payloadString, preparedOpts.secret);
            return preparedOpts.generateHeaderString(signature);
        }
    };
    const signature = {
        EXPECTED_SCHEME: 'v1',
        verifyHeader (encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
            const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
            const secretContainsWhitespace = /\s/.test(secret);
            cryptoProvider = cryptoProvider || getCryptoProvider();
            const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
            validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
            return true;
        },
        async verifyHeaderAsync (encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
            const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
            const secretContainsWhitespace = /\s/.test(secret);
            cryptoProvider = cryptoProvider || getCryptoProvider();
            const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
            return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        }
    };
    function makeHMACContent(payload, details) {
        return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
        if (!encodedPayload) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](encodedHeader, encodedPayload, {
                message: 'No webhook payload was provided.'
            });
        }
        const suspectPayloadType = typeof encodedPayload != 'string' && !(encodedPayload instanceof Uint8Array);
        const textDecoder = new TextDecoder('utf8');
        const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
        // Express's type for `Request#headers` is `string | []string`
        // which is because the `set-cookie` header is an array,
        // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
        // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
        if (Array.isArray(encodedHeader)) {
            throw new Error('Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.');
        }
        if (encodedHeader == null || encodedHeader == '') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](encodedHeader, encodedPayload, {
                message: 'No stripe-signature header value was provided.'
            });
        }
        const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
        const details = parseHeader(decodedHeader, expectedScheme);
        if (!details || details.timestamp === -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](decodedHeader, decodedPayload, {
                message: 'Unable to extract timestamp and signatures from header'
            });
        }
        if (!details.signatures.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](decodedHeader, decodedPayload, {
                message: 'No signatures found with expected scheme'
            });
        }
        return {
            decodedPayload,
            decodedHeader,
            details,
            suspectPayloadType
        };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
        const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
        const docsLocation = '\nLearn more about webhook signing and explore webhook integration examples for various frameworks at ' + 'https://docs.stripe.com/webhooks/signature';
        const whitespaceMessage = secretContainsWhitespace ? '\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value' : '';
        if (!signatureFound) {
            if (suspectPayloadType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](header, payload, {
                    message: 'Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.' + 'Payload was provided as a parsed JavaScript object instead. \n' + 'Signature verification is impossible without access to the original signed material. \n' + docsLocation + '\n' + whitespaceMessage
                });
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](header, payload, {
                message: 'No signatures found matching the expected signature for payload.' + ' Are you passing the raw request body you received from Stripe? \n' + ' If a webhook request is being forwarded by a third-party tool,' + ' ensure that the exact request body, including JSON formatting and new line style, is preserved.\n' + docsLocation + '\n' + whitespaceMessage
            });
        }
        const timestampAge = Math.floor((typeof receivedAt === 'number' ? receivedAt : Date.now()) / 1000) - details.timestamp;
        if (tolerance > 0 && timestampAge > tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](header, payload, {
                message: 'Timestamp outside the tolerance zone'
            });
        }
        return true;
    }
    function parseHeader(header, scheme) {
        if (typeof header !== 'string') {
            return null;
        }
        return header.split(',').reduce((accum, item)=>{
            const kv = item.split('=');
            if (kv[0] === 't') {
                accum.timestamp = parseInt(kv[1], 10);
            }
            if (kv[0] === scheme) {
                accum.signatures.push(kv[1]);
            }
            return accum;
        }, {
            timestamp: -1,
            signatures: []
        });
    }
    let webhooksCryptoProviderInstance = null;
    /**
     * Lazily instantiate a CryptoProvider instance. This is a stateless object
     * so a singleton can be used here.
     */ function getCryptoProvider() {
        if (!webhooksCryptoProviderInstance) {
            webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
        }
        return webhooksCryptoProviderInstance;
    }
    function prepareOptions(opts) {
        if (!opts) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeError"]({
                message: 'Options are required'
            });
        }
        const timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
        const scheme = opts.scheme || signature.EXPECTED_SCHEME;
        const cryptoProvider = opts.cryptoProvider || getCryptoProvider();
        const payloadString = `${timestamp}.${opts.payload}`;
        const generateHeaderString = (signature)=>{
            return `t=${timestamp},${scheme}=${signature}`;
        };
        return Object.assign(Object.assign({}, opts), {
            timestamp,
            scheme,
            cryptoProvider,
            payloadString,
            generateHeaderString
        });
    }
    Webhook.signature = signature;
    return Webhook;
}
}),
"[project]/si_app copy/node_modules/stripe/esm/apiVersion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ApiMajorVersion",
    ()=>ApiMajorVersion,
    "ApiVersion",
    ()=>ApiVersion
]);
const ApiVersion = '2025-09-30.clover';
const ApiMajorVersion = 'clover';
}),
"[project]/si_app copy/node_modules/stripe/esm/ResourceNamespace.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
__turbopack_context__.s([
    "resourceNamespace",
    ()=>resourceNamespace
]);
function ResourceNamespace(stripe, resources) {
    for(const name in resources){
        if (!Object.prototype.hasOwnProperty.call(resources, name)) {
            continue;
        }
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
    }
}
function resourceNamespace(namespace, resources) {
    return function(stripe) {
        return new ResourceNamespace(stripe, resources);
    };
}
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/FinancialConnections/Accounts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Accounts",
    ()=>Accounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Accounts = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts',
        methodType: 'list'
    }),
    disconnect: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/disconnect'
    }),
    listOwners: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}/owners',
        methodType: 'list'
    }),
    refresh: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/refresh'
    }),
    subscribe: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/subscribe'
    }),
    unsubscribe: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/unsubscribe'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ActiveEntitlements",
    ()=>ActiveEntitlements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ActiveEntitlements = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/active_entitlements/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/active_entitlements',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/Alerts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Alerts",
    ()=>Alerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Alerts = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/alerts/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/alerts',
        methodType: 'list'
    }),
    activate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/activate'
    }),
    archive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/archive'
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/deactivate'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Authorizations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Authorizations",
    ()=>Authorizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Authorizations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations/{authorization}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations',
        methodType: 'list'
    }),
    approve: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/approve'
    }),
    decline: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/decline'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Authorizations",
    ()=>Authorizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Authorizations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations'
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/capture'
    }),
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/expire'
    }),
    finalizeAmount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount'
    }),
    increment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/increment'
    }),
    respond: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond'
    }),
    reverse: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/reverse'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Calculations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Calculations",
    ()=>Calculations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Calculations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/calculations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/calculations/{calculation}'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/calculations/{calculation}/line_items',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Cardholders.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Cardholders",
    ()=>Cardholders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Cardholders = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders/{cardholder}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders/{cardholder}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Cards.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Cards",
    ()=>Cards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Cards = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards/{card}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards/{card}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Cards",
    ()=>Cards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Cards = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    deliverCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver'
    }),
    failCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail'
    }),
    returnCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return'
    }),
    shipCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship'
    }),
    submitCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/submit'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/BillingPortal/Configurations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Configurations",
    ()=>Configurations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Configurations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations/{configuration}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations/{configuration}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/Configurations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Configurations",
    ()=>Configurations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Configurations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/configurations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/configurations/{configuration}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/configurations/{configuration}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/configurations',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/configurations/{configuration}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ConfirmationTokens",
    ()=>ConfirmationTokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ConfirmationTokens = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/confirmation_tokens'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ConnectionTokens",
    ()=>ConnectionTokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ConnectionTokens = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/connection_tokens'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/CreditBalanceSummary.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CreditBalanceSummary",
    ()=>CreditBalanceSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditBalanceSummary = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/credit_balance_summary'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/CreditBalanceTransactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CreditBalanceTransactions",
    ()=>CreditBalanceTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditBalanceTransactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/credit_balance_transactions/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/credit_balance_transactions',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/CreditGrants.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CreditGrants",
    ()=>CreditGrants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditGrants = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/credit_grants'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/credit_grants/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/credit_grants/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/credit_grants',
        methodType: 'list'
    }),
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/credit_grants/{id}/expire'
    }),
    voidGrant: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/credit_grants/{id}/void'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/CreditReversals.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CreditReversals",
    ()=>CreditReversals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditReversals = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/credit_reversals'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals/{credit_reversal}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Customers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Customers",
    ()=>Customers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Customers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    fundCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/DebitReversals.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "DebitReversals",
    ()=>DebitReversals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const DebitReversals = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/debit_reversals'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/debit_reversals/{debit_reversal}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/debit_reversals',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Disputes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Disputes",
    ()=>Disputes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Disputes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes/{dispute}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes',
        methodType: 'list'
    }),
    submit: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}/submit'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "EarlyFraudWarnings",
    ()=>EarlyFraudWarnings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const EarlyFraudWarnings = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/V2/Core/EventDestinations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "EventDestinations",
    ()=>EventDestinations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const EventDestinations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v2/core/event_destinations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v2/core/event_destinations/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v2/core/event_destinations/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v2/core/event_destinations',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v2/core/event_destinations/{id}'
    }),
    disable: stripeMethod({
        method: 'POST',
        fullPath: '/v2/core/event_destinations/{id}/disable'
    }),
    enable: stripeMethod({
        method: 'POST',
        fullPath: '/v2/core/event_destinations/{id}/enable'
    }),
    ping: stripeMethod({
        method: 'POST',
        fullPath: '/v2/core/event_destinations/{id}/ping'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/V2/Core/Events.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is manually maintained
__turbopack_context__.s([
    "Events",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Events = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve (...args) {
        const transformResponseData = (response)=>{
            return this.addFetchRelatedObjectIfNeeded(response);
        };
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/events/{id}',
            transformResponseData
        }).apply(this, args);
    },
    list (...args) {
        const transformResponseData = (response)=>{
            return Object.assign(Object.assign({}, response), {
                data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this))
            });
        };
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/events',
            methodType: 'list',
            transformResponseData
        }).apply(this, args);
    },
    /**
     * @private
     *
     * For internal use in stripe-node.
     *
     * @param pulledEvent The retrieved event object
     * @returns The retrieved event object with a fetchRelatedObject method,
     * if pulledEvent.related_object is valid (non-null and has a url)
     */ addFetchRelatedObjectIfNeeded (pulledEvent) {
        if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
            return pulledEvent;
        }
        return Object.assign(Object.assign({}, pulledEvent), {
            fetchRelatedObject: ()=>// call stripeMethod with 'this' resource to fetch
                // the related object. 'this' is needed to construct
                // and send the request, but the method spec controls
                // the url endpoint and method, so it doesn't matter
                // that 'this' is an Events resource object here
                stripeMethod({
                    method: 'GET',
                    fullPath: pulledEvent.related_object.url
                }).apply(this, [
                    {
                        stripeContext: pulledEvent.context
                    }
                ])
        });
    }
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Entitlements/Features.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Features",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Features = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/entitlements/features'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/features/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/entitlements/features/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/features',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "FinancialAccounts",
    ()=>FinancialAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const FinancialAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts',
        methodType: 'list'
    }),
    close: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}/close'
    }),
    retrieveFeatures: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}/features'
    }),
    updateFeatures: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}/features'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "InboundTransfers",
    ()=>InboundTransfers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail'
    }),
    returnInboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return'
    }),
    succeed: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/InboundTransfers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "InboundTransfers",
    ()=>InboundTransfers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/Locations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Locations",
    ()=>Locations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Locations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations/{location}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations/{location}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/locations/{location}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "MeterEventAdjustments",
    ()=>MeterEventAdjustments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEventAdjustments = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meter_event_adjustments'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEventAdjustments.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "MeterEventAdjustments",
    ()=>MeterEventAdjustments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEventAdjustments = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v2/billing/meter_event_adjustments'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEventSession.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "MeterEventSession",
    ()=>MeterEventSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEventSession = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v2/billing/meter_event_session'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEventStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "MeterEventStream",
    ()=>MeterEventStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEventStream = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v2/billing/meter_event_stream',
        host: 'meter-events.stripe.com'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/MeterEvents.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "MeterEvents",
    ()=>MeterEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEvents = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meter_events'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEvents.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "MeterEvents",
    ()=>MeterEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEvents = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v2/billing/meter_events'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Billing/Meters.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Meters",
    ()=>Meters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Meters = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/meters/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/meters',
        methodType: 'list'
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters/{id}/deactivate'
    }),
    listEventSummaries: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/meters/{id}/event_summaries',
        methodType: 'list'
    }),
    reactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters/{id}/reactivate'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Climate/Orders.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Orders",
    ()=>Orders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Orders = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/orders/{order}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders/{order}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/orders',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders/{order}/cancel'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "OutboundPayments",
    ()=>OutboundPayments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundPayments = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}'
    }),
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail'
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post'
    }),
    returnOutboundPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/OutboundPayments.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "OutboundPayments",
    ()=>OutboundPayments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundPayments = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_payments'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_payments/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_payments',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_payments/{id}/cancel'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "OutboundTransfers",
    ()=>OutboundTransfers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}'
    }),
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail'
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post'
    }),
    returnOutboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "OutboundTransfers",
    ()=>OutboundTransfers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PersonalizationDesigns",
    ()=>PersonalizationDesigns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PersonalizationDesigns = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/personalization_designs'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/personalization_designs/{personalization_design}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/personalization_designs/{personalization_design}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/personalization_designs',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PersonalizationDesigns",
    ()=>PersonalizationDesigns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PersonalizationDesigns = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    activate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate'
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate'
    }),
    reject: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PhysicalBundles",
    ()=>PhysicalBundles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PhysicalBundles = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/physical_bundles/{physical_bundle}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/physical_bundles',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Climate/Products.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Products",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Products = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/products/{product}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/products',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/Readers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Readers",
    ()=>Readers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Readers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers/{reader}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/readers/{reader}'
    }),
    cancelAction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/cancel_action'
    }),
    collectInputs: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/collect_inputs'
    }),
    collectPaymentMethod: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/collect_payment_method'
    }),
    confirmPaymentIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/confirm_payment_intent'
    }),
    processPaymentIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_payment_intent'
    }),
    processSetupIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_setup_intent'
    }),
    refundPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/refund_payment'
    }),
    setReaderDisplay: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/set_reader_display'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Readers",
    ()=>Readers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Readers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    presentPaymentMethod: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/terminal/readers/{reader}/present_payment_method'
    }),
    succeedInputCollection: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection'
    }),
    timeoutInputCollection: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ReceivedCredits",
    ()=>ReceivedCredits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedCredits = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/received_credits'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ReceivedCredits",
    ()=>ReceivedCredits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedCredits = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_credits/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_credits',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ReceivedDebits",
    ()=>ReceivedDebits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedDebits = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/received_debits'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ReceivedDebits",
    ()=>ReceivedDebits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedDebits = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Refunds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Refunds",
    ()=>Refunds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Refunds = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/refunds/{refund}/expire'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Registrations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Registrations",
    ()=>Registrations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Registrations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/registrations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/registrations/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/registrations/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/registrations',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Reporting/ReportRuns.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ReportRuns",
    ()=>ReportRuns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReportRuns = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/reporting/report_runs'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs/{report_run}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Reporting/ReportTypes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ReportTypes",
    ()=>ReportTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReportTypes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types/{report_type}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Forwarding/Requests.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Requests",
    ()=>Requests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Requests = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/forwarding/requests'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/forwarding/requests/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/forwarding/requests',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ScheduledQueryRuns",
    ()=>ScheduledQueryRuns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ScheduledQueryRuns = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sigma/scheduled_query_runs',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Apps/Secrets.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Secrets",
    ()=>Secrets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Secrets = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets',
        methodType: 'list'
    }),
    deleteWhere: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets/delete'
    }),
    find: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets/find'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/BillingPortal/Sessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Sessions",
    ()=>Sessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sessions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/sessions'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Checkout/Sessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Sessions",
    ()=>Sessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sessions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions/{session}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions',
        methodType: 'list'
    }),
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions/{session}/expire'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}/line_items',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/FinancialConnections/Sessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Sessions",
    ()=>Sessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sessions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/sessions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/sessions/{session}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Settings.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Settings",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Settings = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/settings'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/settings'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Climate/Suppliers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Suppliers",
    ()=>Suppliers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Suppliers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/suppliers/{supplier}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/suppliers',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/TestClocks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "TestClocks",
    ()=>TestClocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TestClocks = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}'
    }),
    advance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Tokens.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Tokens",
    ()=>Tokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Tokens = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/tokens/{token}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/tokens/{token}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/tokens',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/TransactionEntries.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "TransactionEntries",
    ()=>TransactionEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TransactionEntries = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transaction_entries/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transaction_entries',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/FinancialConnections/Transactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Transactions",
    ()=>Transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/transactions/{transaction}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/transactions',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Transactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Transactions",
    ()=>Transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/transactions/{transaction}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/transactions/{transaction}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/transactions',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Transactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Transactions",
    ()=>Transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}'
    }),
    createFromCalculation: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_from_calculation'
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_reversal'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}/line_items',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Transactions",
    ()=>Transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    createForceCapture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/transactions/create_force_capture'
    }),
    createUnlinkedRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/transactions/create_unlinked_refund'
    }),
    refund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/transactions/{transaction}/refund'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/Transactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Transactions",
    ()=>Transactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Radar/ValueListItems.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ValueListItems",
    ()=>ValueListItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ValueListItems = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_list_items'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_list_items/{item}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_list_items',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/radar/value_list_items/{item}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Radar/ValueLists.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ValueLists",
    ()=>ValueLists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ValueLists = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_lists'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_lists/{value_list}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_lists/{value_list}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_lists',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/radar/value_lists/{value_list}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Identity/VerificationReports.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "VerificationReports",
    ()=>VerificationReports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const VerificationReports = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports/{report}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Identity/VerificationSessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "VerificationSessions",
    ()=>VerificationSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const VerificationSessions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions/{session}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/cancel'
    }),
    redact: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/redact'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Accounts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Accounts",
    ()=>Accounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Accounts = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts'
    }),
    retrieve (id, ...args) {
        // No longer allow an api key to be passed as the first string to this function due to ambiguity between
        // old account ids and api keys. To request the account for an api key, send null as the id
        if (typeof id === 'string') {
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/accounts/{id}'
            }).apply(this, [
                id,
                ...args
            ]);
        } else {
            if (id === null || id === undefined) {
                // Remove id as stripeMethod would complain of unexpected argument
                [].shift.apply([
                    id,
                    ...args
                ]);
            }
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/account'
            }).apply(this, [
                id,
                ...args
            ]);
        }
    },
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}'
    }),
    createExternalAccount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts'
    }),
    createLoginLink: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/login_links'
    }),
    createPerson: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons'
    }),
    deleteExternalAccount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}'
    }),
    deletePerson: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/persons/{person}'
    }),
    listCapabilities: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities',
        methodType: 'list'
    }),
    listExternalAccounts: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts',
        methodType: 'list'
    }),
    listPersons: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons',
        methodType: 'list'
    }),
    reject: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/reject'
    }),
    retrieveCurrent: stripeMethod({
        method: 'GET',
        fullPath: '/v1/account'
    }),
    retrieveCapability: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}'
    }),
    retrieveExternalAccount: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}'
    }),
    retrievePerson: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons/{person}'
    }),
    updateCapability: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}'
    }),
    updateExternalAccount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}'
    }),
    updatePerson: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons/{person}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/AccountLinks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "AccountLinks",
    ()=>AccountLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const AccountLinks = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/account_links'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/AccountSessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "AccountSessions",
    ()=>AccountSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const AccountSessions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/account_sessions'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/ApplePayDomains.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ApplePayDomains",
    ()=>ApplePayDomains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ApplePayDomains = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apple_pay/domains'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains/{domain}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/apple_pay/domains/{domain}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/ApplicationFees.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ApplicationFees",
    ()=>ApplicationFees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ApplicationFees = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees',
        methodType: 'list'
    }),
    createRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{id}/refunds'
    }),
    listRefunds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}/refunds',
        methodType: 'list'
    }),
    retrieveRefund: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}'
    }),
    updateRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Balance.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Balance",
    ()=>Balance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Balance = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/BalanceSettings.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "BalanceSettings",
    ()=>BalanceSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const BalanceSettings = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_settings'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/balance_settings'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/BalanceTransactions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "BalanceTransactions",
    ()=>BalanceTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const BalanceTransactions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Charges.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Charges",
    ()=>Charges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Charges = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges/{charge}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges',
        methodType: 'list'
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}/capture'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges/search',
        methodType: 'search'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/ConfirmationTokens.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ConfirmationTokens",
    ()=>ConfirmationTokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ConfirmationTokens = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/confirmation_tokens/{confirmation_token}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/CountrySpecs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CountrySpecs",
    ()=>CountrySpecs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CountrySpecs = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs/{country}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Coupons.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Coupons",
    ()=>Coupons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Coupons = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/coupons'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/coupons/{coupon}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/coupons/{coupon}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/coupons',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/coupons/{coupon}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/CreditNotes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CreditNotes",
    ()=>CreditNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditNotes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes',
        methodType: 'list'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{credit_note}/lines',
        methodType: 'list'
    }),
    listPreviewLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview/lines',
        methodType: 'list'
    }),
    preview: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview'
    }),
    voidCreditNote: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}/void'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/CustomerSessions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "CustomerSessions",
    ()=>CustomerSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CustomerSessions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customer_sessions'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Customers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Customers",
    ()=>Customers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Customers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}'
    }),
    createBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions'
    }),
    createFundingInstructions: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/funding_instructions'
    }),
    createSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources'
    }),
    createTaxId: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/tax_ids'
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/discount'
    }),
    deleteSource: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/sources/{id}'
    }),
    deleteTaxId: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}'
    }),
    listBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions',
        methodType: 'list'
    }),
    listCashBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions',
        methodType: 'list'
    }),
    listPaymentMethods: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods',
        methodType: 'list'
    }),
    listSources: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources',
        methodType: 'list'
    }),
    listTaxIds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids',
        methodType: 'list'
    }),
    retrieveBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}'
    }),
    retrieveCashBalance: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance'
    }),
    retrieveCashBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions/{transaction}'
    }),
    retrievePaymentMethod: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}'
    }),
    retrieveSource: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources/{id}'
    }),
    retrieveTaxId: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/search',
        methodType: 'search'
    }),
    updateBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}'
    }),
    updateCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/cash_balance'
    }),
    updateSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}'
    }),
    verifySource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}/verify'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Disputes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Disputes",
    ()=>Disputes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Disputes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes/{dispute}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes',
        methodType: 'list'
    }),
    close: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}/close'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/EphemeralKeys.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "EphemeralKeys",
    ()=>EphemeralKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const EphemeralKeys = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/ephemeral_keys',
        validator: (data, options)=>{
            if (!options.headers || !options.headers['Stripe-Version']) {
                throw new Error('Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node');
            }
        }
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/ephemeral_keys/{key}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Events.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Events",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Events = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/events/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/events',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/ExchangeRates.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ExchangeRates",
    ()=>ExchangeRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ExchangeRates = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/exchange_rates/{rate_id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/exchange_rates',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/FileLinks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "FileLinks",
    ()=>FileLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const FileLinks = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/file_links'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/file_links/{link}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/file_links/{link}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/file_links',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/multipart.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multipartRequestDataProcessor",
    ()=>multipartRequestDataProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
;
// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (method, data, headers)=>{
    const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
    headers['Content-Type'] = `multipart/form-data; boundary=${segno}`;
    const textEncoder = new TextEncoder();
    let buffer = new Uint8Array(0);
    const endBuffer = textEncoder.encode('\r\n');
    function push(l) {
        const prevBuffer = buffer;
        const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
        buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
        buffer.set(prevBuffer);
        buffer.set(newBuffer, prevBuffer.length);
        buffer.set(endBuffer, buffer.length - 2);
    }
    function q(s) {
        return `"${s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ')}"`;
    }
    const flattenedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenAndStringify"])(data);
    for(const k in flattenedData){
        if (!Object.prototype.hasOwnProperty.call(flattenedData, k)) {
            continue;
        }
        const v = flattenedData[k];
        push(`--${segno}`);
        if (Object.prototype.hasOwnProperty.call(v, 'data')) {
            const typedEntry = v;
            push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || 'blob')}`);
            push(`Content-Type: ${typedEntry.type || 'application/octet-stream'}`);
            push('');
            push(typedEntry.data);
        } else {
            push(`Content-Disposition: form-data; name=${q(k)}`);
            push('');
            push(v);
        }
    }
    push(`--${segno}--`);
    return buffer;
};
function multipartRequestDataProcessor(method, data, headers, callback) {
    data = data || {};
    if (method !== 'POST') {
        return callback(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryStringifyRequestData"])(data));
    }
    this._stripe._platformFunctions.tryBufferData(data).then((bufferedData)=>{
        const buffer = multipartDataGenerator(method, bufferedData, headers);
        return callback(null, buffer);
    }).catch((err)=>callback(err, null));
}
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Files.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Files",
    ()=>Files
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/multipart.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Files = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/files',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        host: 'files.stripe.com'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/files/{file}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/files',
        methodType: 'list'
    }),
    requestDataProcessor: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["multipartRequestDataProcessor"]
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/InvoiceItems.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "InvoiceItems",
    ()=>InvoiceItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InvoiceItems = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems/{invoiceitem}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems/{invoiceitem}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/invoiceitems/{invoiceitem}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/InvoicePayments.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "InvoicePayments",
    ()=>InvoicePayments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InvoicePayments = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_payments/{invoice_payment}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_payments',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "InvoiceRenderingTemplates",
    ()=>InvoiceRenderingTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InvoiceRenderingTemplates = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_rendering_templates/{template}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_rendering_templates',
        methodType: 'list'
    }),
    archive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoice_rendering_templates/{template}/archive'
    }),
    unarchive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoice_rendering_templates/{template}/unarchive'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Invoices.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Invoices",
    ()=>Invoices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Invoices = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/invoices/{invoice}'
    }),
    addLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/add_lines'
    }),
    attachPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/attach_payment'
    }),
    createPreview: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/create_preview'
    }),
    finalizeInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/finalize'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}/lines',
        methodType: 'list'
    }),
    markUncollectible: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/mark_uncollectible'
    }),
    pay: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/pay'
    }),
    removeLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/remove_lines'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/search',
        methodType: 'search'
    }),
    sendInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/send'
    }),
    updateLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/update_lines'
    }),
    updateLineItem: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}'
    }),
    voidInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/void'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Mandates.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Mandates",
    ()=>Mandates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Mandates = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/mandates/{mandate}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/OAuth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAuth",
    ()=>OAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
'use strict';
;
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const oAuthHost = 'connect.stripe.com';
const OAuth = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    basePath: '/',
    authorizeUrl (params, options) {
        params = params || {};
        options = options || {};
        let path = 'oauth/authorize';
        // For Express accounts, the path changes
        if (options.express) {
            path = `express/${path}`;
        }
        if (!params.response_type) {
            params.response_type = 'code';
        }
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
            params.scope = 'read_write';
        }
        return `https://${oAuthHost}/${path}?${(0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryStringifyRequestData"])(params)}`;
    },
    token: stripeMethod({
        method: 'POST',
        path: 'oauth/token',
        host: oAuthHost
    }),
    deauthorize (spec, ...args) {
        if (!spec.client_id) {
            spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
            method: 'POST',
            path: 'oauth/deauthorize',
            host: oAuthHost
        }).apply(this, [
            spec,
            ...args
        ]);
    }
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/PaymentIntents.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PaymentIntents",
    ()=>PaymentIntents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentIntents = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/{intent}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents',
        methodType: 'list'
    }),
    applyCustomerBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/apply_customer_balance'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/cancel'
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/capture'
    }),
    confirm: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/confirm'
    }),
    incrementAuthorization: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/increment_authorization'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/search',
        methodType: 'search'
    }),
    verifyMicrodeposits: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/verify_microdeposits'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/PaymentLinks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PaymentLinks",
    ()=>PaymentLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentLinks = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links/{payment_link}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links',
        methodType: 'list'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}/line_items',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PaymentMethodConfigurations",
    ()=>PaymentMethodConfigurations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentMethodConfigurations = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_configurations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_configurations/{configuration}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_configurations/{configuration}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_configurations',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethodDomains.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PaymentMethodDomains",
    ()=>PaymentMethodDomains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentMethodDomains = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_domains'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_domains/{payment_method_domain}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_domains/{payment_method_domain}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_domains',
        methodType: 'list'
    }),
    validate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_domains/{payment_method_domain}/validate'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethods.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PaymentMethods",
    ()=>PaymentMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentMethods = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods/{payment_method}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods',
        methodType: 'list'
    }),
    attach: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/attach'
    }),
    detach: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/detach'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Payouts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Payouts",
    ()=>Payouts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Payouts = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payouts/{payout}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payouts',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/cancel'
    }),
    reverse: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/reverse'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Plans.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Plans",
    ()=>Plans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Plans = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/plans'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/plans/{plan}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/plans/{plan}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/plans',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/plans/{plan}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Prices.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Prices",
    ()=>Prices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Prices = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/prices'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices/{price}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/prices/{price}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices',
        methodType: 'list'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices/search',
        methodType: 'search'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Products.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Products",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Products = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{id}'
    }),
    createFeature: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products/{product}/features'
    }),
    deleteFeature: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{product}/features/{id}'
    }),
    listFeatures: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{product}/features',
        methodType: 'list'
    }),
    retrieveFeature: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{product}/features/{id}'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/search',
        methodType: 'search'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/PromotionCodes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "PromotionCodes",
    ()=>PromotionCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PromotionCodes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes/{promotion_code}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes/{promotion_code}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Quotes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Quotes",
    ()=>Quotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Quotes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes',
        methodType: 'list'
    }),
    accept: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/accept'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/cancel'
    }),
    finalizeQuote: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/finalize'
    }),
    listComputedUpfrontLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
        methodType: 'list'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/line_items',
        methodType: 'list'
    }),
    pdf: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/pdf',
        host: 'files.stripe.com',
        streaming: true
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Refunds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Refunds",
    ()=>Refunds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Refunds = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/refunds/{refund}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/refunds',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}/cancel'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Reviews.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Reviews",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Reviews = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reviews/{review}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reviews',
        methodType: 'list'
    }),
    approve: stripeMethod({
        method: 'POST',
        fullPath: '/v1/reviews/{review}/approve'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/SetupAttempts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "SetupAttempts",
    ()=>SetupAttempts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SetupAttempts = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/setup_attempts',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/SetupIntents.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "SetupIntents",
    ()=>SetupIntents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SetupIntents = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/setup_intents/{intent}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/setup_intents',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/cancel'
    }),
    confirm: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/confirm'
    }),
    verifyMicrodeposits: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/verify_microdeposits'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/ShippingRates.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "ShippingRates",
    ()=>ShippingRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ShippingRates = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Sources.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Sources",
    ()=>Sources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sources = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}'
    }),
    listSourceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}/source_transactions',
        methodType: 'list'
    }),
    verify: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}/verify'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/SubscriptionItems.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "SubscriptionItems",
    ()=>SubscriptionItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SubscriptionItems = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items/{item}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{item}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscription_items/{item}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/SubscriptionSchedules.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "SubscriptionSchedules",
    ()=>SubscriptionSchedules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SubscriptionSchedules = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules/{schedule}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/cancel'
    }),
    release: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/release'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Subscriptions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Subscriptions",
    ()=>Subscriptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Subscriptions = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}'
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount'
    }),
    migrate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription}/migrate'
    }),
    resume: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription}/resume'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/search',
        methodType: 'search'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TaxCodes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "TaxCodes",
    ()=>TaxCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TaxCodes = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TaxIds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "TaxIds",
    ()=>TaxIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TaxIds = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_ids'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_ids/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_ids',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/tax_ids/{id}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/TaxRates.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "TaxRates",
    ()=>TaxRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TaxRates = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates/{tax_rate}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates/{tax_rate}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates',
        methodType: 'list'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Tokens.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Tokens",
    ()=>Tokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Tokens = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tokens'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tokens/{token}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Topups.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Topups",
    ()=>Topups
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Topups = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups/{topup}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}/cancel'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/Transfers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Transfers",
    ()=>Transfers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transfers = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers',
        methodType: 'list'
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{id}/reversals'
    }),
    listReversals: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{id}/reversals',
        methodType: 'list'
    }),
    retrieveReversal: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}'
    }),
    updateReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources/WebhookEndpoints.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "WebhookEndpoints",
    ()=>WebhookEndpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].method;
const WebhookEndpoints = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/webhook_endpoints'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/webhook_endpoints',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}'
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// File generated from our OpenAPI spec
__turbopack_context__.s([
    "Apps",
    ()=>Apps,
    "Billing",
    ()=>Billing,
    "BillingPortal",
    ()=>BillingPortal,
    "Checkout",
    ()=>Checkout,
    "Climate",
    ()=>Climate,
    "Entitlements",
    ()=>Entitlements,
    "FinancialConnections",
    ()=>FinancialConnections,
    "Forwarding",
    ()=>Forwarding,
    "Identity",
    ()=>Identity,
    "Issuing",
    ()=>Issuing,
    "Radar",
    ()=>Radar,
    "Reporting",
    ()=>Reporting,
    "Sigma",
    ()=>Sigma,
    "Tax",
    ()=>Tax,
    "Terminal",
    ()=>Terminal,
    "TestHelpers",
    ()=>TestHelpers,
    "Treasury",
    ()=>Treasury,
    "V2",
    ()=>V2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/ResourceNamespace.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Accounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/FinancialConnections/Accounts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$ActiveEntitlements$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Alerts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/Alerts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Authorizations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Calculations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Calculations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cardholders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Cardholders.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Cards.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/BillingPortal/Configurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/Configurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$ConfirmationTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$ConnectionTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$CreditBalanceSummary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/CreditBalanceSummary.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$CreditBalanceTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/CreditBalanceTransactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$CreditGrants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/CreditGrants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$CreditReversals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/CreditReversals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Customers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Customers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$DebitReversals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/DebitReversals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Disputes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Disputes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$EarlyFraudWarnings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Core$2f$EventDestinations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/V2/Core/EventDestinations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Core$2f$Events$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/V2/Core/Events.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$Features$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Entitlements/Features.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$FinancialAccounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/InboundTransfers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Locations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/Locations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEventAdjustments.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEventSession$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEventSession.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEventStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEventStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/MeterEvents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/V2/Billing/MeterEvents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Meters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Billing/Meters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Orders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Climate/Orders.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/OutboundPayments.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PhysicalBundles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Products$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Climate/Products.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Terminal/Readers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Refunds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Refunds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Registrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Registrations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportRuns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Reporting/ReportRuns.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Reporting/ReportTypes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Forwarding$2f$Requests$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Forwarding/Requests.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sigma$2f$ScheduledQueryRuns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Apps$2f$Secrets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Apps/Secrets.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/BillingPortal/Sessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Checkout$2f$Sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Checkout/Sessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/FinancialConnections/Sessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Settings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Settings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Suppliers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Climate/Suppliers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$TestClocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/TestClocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Tokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$TransactionEntries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/TransactionEntries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/FinancialConnections/Transactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Issuing/Transactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Tax/Transactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Treasury/Transactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueListItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Radar/ValueListItems.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueLists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Radar/ValueLists.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationReports$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Identity/VerificationReports.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Identity/VerificationSessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Accounts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/AccountLinks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/AccountSessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplePayDomains$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ApplePayDomains.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplicationFees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ApplicationFees.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Balance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Balance.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceSettings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/BalanceSettings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/BalanceTransactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Charges$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Charges.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ConfirmationTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ConfirmationTokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CountrySpecs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/CountrySpecs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Coupons$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Coupons.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CreditNotes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/CreditNotes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CustomerSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/CustomerSessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Customers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Customers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Disputes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Disputes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$EphemeralKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/EphemeralKeys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Events$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Events.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ExchangeRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ExchangeRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FileLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/FileLinks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Files$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Files.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/InvoiceItems.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoicePayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/InvoicePayments.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceRenderingTemplates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Invoices$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Invoices.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Mandates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Mandates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$OAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/OAuth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentIntents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentIntents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentLinks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodConfigurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodDomains$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethodDomains.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethods$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethods.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Payouts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Payouts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Plans$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Plans.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Prices$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Prices.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Products$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Products.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PromotionCodes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PromotionCodes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Quotes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Quotes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Refunds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Refunds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reviews$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Reviews.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SetupAttempts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupIntents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SetupIntents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ShippingRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ShippingRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Sources.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SubscriptionItems.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SubscriptionSchedules.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Subscriptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Subscriptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxCodes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TaxCodes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxIds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TaxIds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TaxRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Tokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Topups$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Topups.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Transfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Transfers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$WebhookEndpoints$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/WebhookEndpoints.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Apps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('apps', {
    Secrets: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Apps$2f$Secrets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Secrets"]
});
const Billing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('billing', {
    Alerts: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Alerts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Alerts"],
    CreditBalanceSummary: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$CreditBalanceSummary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreditBalanceSummary"],
    CreditBalanceTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$CreditBalanceTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreditBalanceTransactions"],
    CreditGrants: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$CreditGrants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreditGrants"],
    MeterEventAdjustments: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeterEventAdjustments"],
    MeterEvents: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeterEvents"],
    Meters: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Meters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Meters"]
});
const BillingPortal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('billingPortal', {
    Configurations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Configurations"],
    Sessions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sessions"]
});
const Checkout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('checkout', {
    Sessions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Checkout$2f$Sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sessions"]
});
const Climate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('climate', {
    Orders: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Orders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Orders"],
    Products: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Products$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Products"],
    Suppliers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Suppliers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Suppliers"]
});
const Entitlements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('entitlements', {
    ActiveEntitlements: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$ActiveEntitlements$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ActiveEntitlements"],
    Features: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$Features$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Features"]
});
const FinancialConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('financialConnections', {
    Accounts: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Accounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Accounts"],
    Sessions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Sessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sessions"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Transactions"]
});
const Forwarding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('forwarding', {
    Requests: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Forwarding$2f$Requests$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Requests"]
});
const Identity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('identity', {
    VerificationReports: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationReports$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VerificationReports"],
    VerificationSessions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VerificationSessions"]
});
const Issuing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('issuing', {
    Authorizations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Authorizations"],
    Cardholders: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cardholders$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cardholders"],
    Cards: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cards"],
    Disputes: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Disputes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disputes"],
    PersonalizationDesigns: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PersonalizationDesigns"],
    PhysicalBundles: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PhysicalBundles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PhysicalBundles"],
    Tokens: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tokens"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Transactions"]
});
const Radar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('radar', {
    EarlyFraudWarnings: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$EarlyFraudWarnings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EarlyFraudWarnings"],
    ValueListItems: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueListItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValueListItems"],
    ValueLists: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueLists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValueLists"]
});
const Reporting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('reporting', {
    ReportRuns: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportRuns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReportRuns"],
    ReportTypes: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReportTypes"]
});
const Sigma = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('sigma', {
    ScheduledQueryRuns: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sigma$2f$ScheduledQueryRuns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ScheduledQueryRuns"]
});
const Tax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('tax', {
    Calculations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Calculations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Calculations"],
    Registrations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Registrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Registrations"],
    Settings: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Settings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Settings"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Transactions"]
});
const Terminal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('terminal', {
    Configurations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Configurations"],
    ConnectionTokens: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$ConnectionTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConnectionTokens"],
    Locations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Locations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Locations"],
    Readers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Readers"]
});
const TestHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('testHelpers', {
    ConfirmationTokens: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$ConfirmationTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConfirmationTokens"],
    Customers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Customers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Customers"],
    Refunds: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Refunds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Refunds"],
    TestClocks: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$TestClocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TestClocks"],
    Issuing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('issuing', {
        Authorizations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Authorizations"],
        Cards: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cards"],
        PersonalizationDesigns: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PersonalizationDesigns"],
        Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Transactions"]
    }),
    Terminal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('terminal', {
        Readers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Readers"]
    }),
    Treasury: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('treasury', {
        InboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InboundTransfers"],
        OutboundPayments: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutboundPayments"],
        OutboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutboundTransfers"],
        ReceivedCredits: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReceivedCredits"],
        ReceivedDebits: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReceivedDebits"]
    })
});
const Treasury = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('treasury', {
    CreditReversals: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$CreditReversals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreditReversals"],
    DebitReversals: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$DebitReversals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DebitReversals"],
    FinancialAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$FinancialAccounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FinancialAccounts"],
    InboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InboundTransfers"],
    OutboundPayments: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutboundPayments"],
    OutboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutboundTransfers"],
    ReceivedCredits: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReceivedCredits"],
    ReceivedDebits: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReceivedDebits"],
    TransactionEntries: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$TransactionEntries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TransactionEntries"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$Transactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Transactions"]
});
const V2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('v2', {
    Billing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('billing', {
        MeterEventAdjustments: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeterEventAdjustments"],
        MeterEventSession: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEventSession$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeterEventSession"],
        MeterEventStream: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEventStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeterEventStream"],
        MeterEvents: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MeterEvents"]
    }),
    Core: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resourceNamespace"])('core', {
        EventDestinations: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Core$2f$EventDestinations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventDestinations"],
        Events: __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$V2$2f$Core$2f$Events$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Events"]
    })
});
}),
"[project]/si_app copy/node_modules/stripe/esm/resources.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Account",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Accounts"],
    "AccountLinks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountLinks"],
    "AccountSessions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccountSessions"],
    "Accounts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Accounts"],
    "ApplePayDomains",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplePayDomains$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApplePayDomains"],
    "ApplicationFees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplicationFees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApplicationFees"],
    "Apps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Apps"],
    "Balance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Balance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Balance"],
    "BalanceSettings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceSettings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BalanceSettings"],
    "BalanceTransactions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BalanceTransactions"],
    "Billing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Billing"],
    "BillingPortal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BillingPortal"],
    "Charges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Charges$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Charges"],
    "Checkout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Checkout"],
    "Climate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Climate"],
    "ConfirmationTokens",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ConfirmationTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConfirmationTokens"],
    "CountrySpecs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CountrySpecs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CountrySpecs"],
    "Coupons",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Coupons$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Coupons"],
    "CreditNotes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CreditNotes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreditNotes"],
    "CustomerSessions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CustomerSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CustomerSessions"],
    "Customers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Customers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Customers"],
    "Disputes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Disputes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disputes"],
    "Entitlements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Entitlements"],
    "EphemeralKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$EphemeralKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralKeys"],
    "Events",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Events$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Events"],
    "ExchangeRates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ExchangeRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExchangeRates"],
    "FileLinks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FileLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileLinks"],
    "Files",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Files$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Files"],
    "FinancialConnections",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FinancialConnections"],
    "Forwarding",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Forwarding"],
    "Identity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Identity"],
    "InvoiceItems",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvoiceItems"],
    "InvoicePayments",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoicePayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvoicePayments"],
    "InvoiceRenderingTemplates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceRenderingTemplates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvoiceRenderingTemplates"],
    "Invoices",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Invoices$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Invoices"],
    "Issuing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Issuing"],
    "Mandates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Mandates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Mandates"],
    "OAuth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$OAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OAuth"],
    "PaymentIntents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentIntents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentIntents"],
    "PaymentLinks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentLinks"],
    "PaymentMethodConfigurations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodConfigurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentMethodConfigurations"],
    "PaymentMethodDomains",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodDomains$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentMethodDomains"],
    "PaymentMethods",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethods$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PaymentMethods"],
    "Payouts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Payouts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Payouts"],
    "Plans",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Plans$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Plans"],
    "Prices",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Prices$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Prices"],
    "Products",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Products$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Products"],
    "PromotionCodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PromotionCodes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PromotionCodes"],
    "Quotes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Quotes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Quotes"],
    "Radar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Radar"],
    "Refunds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Refunds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Refunds"],
    "Reporting",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Reporting"],
    "Reviews",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reviews$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Reviews"],
    "SetupAttempts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SetupAttempts"],
    "SetupIntents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupIntents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SetupIntents"],
    "ShippingRates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ShippingRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ShippingRates"],
    "Sigma",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Sigma"],
    "Sources",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sources"],
    "SubscriptionItems",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionItems"],
    "SubscriptionSchedules",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubscriptionSchedules"],
    "Subscriptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Subscriptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subscriptions"],
    "Tax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tax"],
    "TaxCodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxCodes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaxCodes"],
    "TaxIds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxIds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaxIds"],
    "TaxRates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaxRates"],
    "Terminal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Terminal"],
    "TestHelpers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TestHelpers"],
    "Tokens",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tokens"],
    "Topups",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Topups$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Topups"],
    "Transfers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Transfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Transfers"],
    "Treasury",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Treasury"],
    "V2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["V2"],
    "WebhookEndpoints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$WebhookEndpoints$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WebhookEndpoints"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Accounts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/AccountLinks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/AccountSessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplePayDomains$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ApplePayDomains.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplicationFees$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ApplicationFees.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Balance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Balance.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceSettings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/BalanceSettings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceTransactions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/BalanceTransactions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Charges$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Charges.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ConfirmationTokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ConfirmationTokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CountrySpecs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/CountrySpecs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Coupons$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Coupons.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CreditNotes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/CreditNotes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CustomerSessions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/CustomerSessions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Customers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Customers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Disputes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Disputes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$EphemeralKeys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/EphemeralKeys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Events$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Events.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ExchangeRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ExchangeRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FileLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/FileLinks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Files$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Files.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/InvoiceItems.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoicePayments$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/InvoicePayments.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceRenderingTemplates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Invoices$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Invoices.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Mandates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Mandates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$OAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/OAuth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentIntents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentIntents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentLinks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentLinks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodConfigurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodDomains$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethodDomains.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethods$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PaymentMethods.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Payouts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Payouts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Plans$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Plans.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Prices$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Prices.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Products$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Products.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PromotionCodes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/PromotionCodes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Quotes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Quotes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Refunds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Refunds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reviews$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Reviews.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupAttempts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SetupAttempts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupIntents$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SetupIntents.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ShippingRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/ShippingRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Sources.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionItems$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SubscriptionItems.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionSchedules$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/SubscriptionSchedules.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Subscriptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Subscriptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxCodes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TaxCodes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxIds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TaxIds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxRates$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/TaxRates.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Tokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Topups$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Topups.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Transfers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/Transfers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$WebhookEndpoints$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources/WebhookEndpoints.js [app-route] (ecmascript)");
}),
"[project]/si_app copy/node_modules/stripe/esm/stripe.core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStripe",
    ()=>createStripe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/Error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$RequestSender$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/RequestSender.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeResource.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/StripeContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Webhooks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/Webhooks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$apiVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/apiVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/crypto/CryptoProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/net/HttpClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/resources.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$apiVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiVersion"];
const DEFAULT_TIMEOUT = 80000;
const MAX_NETWORK_RETRY_DELAY_SEC = 5;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const APP_INFO_PROPERTIES = [
    'name',
    'version',
    'url',
    'partner_id'
];
const ALLOWED_CONFIG_PROPERTIES = [
    'authenticator',
    'apiVersion',
    'typescript',
    'maxNetworkRetries',
    'httpAgent',
    'httpClient',
    'timeout',
    'host',
    'port',
    'protocol',
    'telemetry',
    'appInfo',
    'stripeAccount',
    'stripeContext'
];
const defaultRequestSenderFactory = (stripe)=>new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$RequestSender$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestSender"](stripe, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"].MAX_BUFFERED_REQUEST_METRICS);
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe.PACKAGE_VERSION = '19.1.0';
    Stripe.API_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$apiVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiVersion"];
    Stripe.USER_AGENT = Object.assign({
        bindings_version: Stripe.PACKAGE_VERSION,
        lang: 'node',
        publisher: 'stripe',
        uname: null,
        typescript: false
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["determineProcessUserAgentProperties"])());
    Stripe.StripeResource = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeResource"];
    Stripe.StripeContext = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeContext"];
    Stripe.resources = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__;
    Stripe.HttpClient = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClient"];
    Stripe.HttpClientResponse = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpClientResponse"];
    Stripe.CryptoProvider = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CryptoProvider"];
    Stripe.webhooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Webhooks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createWebhooks"])(platformFunctions);
    function Stripe(key, config = {}) {
        if (!(this instanceof Stripe)) {
            return new Stripe(key, config);
        }
        const props = this._getPropsFromConfig(config);
        this._platformFunctions = platformFunctions;
        Object.defineProperty(this, '_emitter', {
            value: this._platformFunctions.createEmitter(),
            enumerable: false,
            configurable: false,
            writable: false
        });
        this.VERSION = Stripe.PACKAGE_VERSION;
        this.on = this._emitter.on.bind(this._emitter);
        this.once = this._emitter.once.bind(this._emitter);
        this.off = this._emitter.removeListener.bind(this._emitter);
        const agent = props.httpAgent || null;
        this._api = {
            host: props.host || DEFAULT_HOST,
            port: props.port || DEFAULT_PORT,
            protocol: props.protocol || 'https',
            basePath: DEFAULT_BASE_PATH,
            version: props.apiVersion || DEFAULT_API_VERSION,
            timeout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateInteger"])('timeout', props.timeout, DEFAULT_TIMEOUT),
            maxNetworkRetries: (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateInteger"])('maxNetworkRetries', props.maxNetworkRetries, 2),
            agent: agent,
            httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
            dev: false,
            stripeAccount: props.stripeAccount || null,
            stripeContext: props.stripeContext || null
        };
        const typescript = props.typescript || false;
        if (typescript !== Stripe.USER_AGENT.typescript) {
            // The mutation here is uncomfortable, but likely fastest;
            // serializing the user agent involves shelling out to the system,
            // and given some users may instantiate the library many times without switching between TS and non-TS,
            // we only want to incur the performance hit when that actually happens.
            Stripe.USER_AGENT.typescript = typescript;
        }
        if (props.appInfo) {
            this._setAppInfo(props.appInfo);
        }
        this._prepResources();
        this._setAuthenticator(key, props.authenticator);
        this.errors = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__;
        this.webhooks = Stripe.webhooks;
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = requestSender(this);
        // Expose StripeResource on the instance too
        // @ts-ignore
        this.StripeResource = Stripe.StripeResource;
    }
    Stripe.errors = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__;
    Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */ Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    /**
     * Create a CryptoProvider which uses the built-in Node crypto libraries for
     * its crypto operations.
     */ Stripe.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    /**
     * Creates a CryptoProvider which uses the Subtle Crypto API from the Web
     * Crypto API spec for its crypto operations.
     *
     * A SubtleCrypto interface can optionally be passed in as a parameter. If none
     * is passed, will default to the default `crypto.subtle` object in the global
     * scope.
     */ Stripe.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
    Stripe.prototype = {
        // Properties are set in the constructor above
        _appInfo: undefined,
        on: null,
        off: null,
        once: null,
        VERSION: null,
        StripeResource: null,
        webhooks: null,
        errors: null,
        _api: null,
        _prevRequestMetrics: null,
        _emitter: null,
        _enableTelemetry: null,
        _requestSender: null,
        _platformFunctions: null,
        rawRequest (method, path, params, options) {
            return this._requestSender._rawRequest(method, path, params, options);
        },
        /**
         * @private
         */ _setAuthenticator (key, authenticator) {
            if (key && authenticator) {
                throw new Error("Can't specify both apiKey and authenticator");
            }
            if (!key && !authenticator) {
                throw new Error('Neither apiKey nor config.authenticator provided');
            }
            this._authenticator = key ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createApiKeyAuthenticator"])(key) : authenticator;
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setAppInfo (info) {
            if (info && typeof info !== 'object') {
                throw new Error('AppInfo must be an object.');
            }
            if (info && !info.name) {
                throw new Error('AppInfo.name is required');
            }
            info = info || {};
            this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop)=>{
                if (typeof info[prop] == 'string') {
                    accum = accum || {};
                    accum[prop] = info[prop];
                }
                return accum;
            }, {});
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setApiField (key, value) {
            this._api[key] = value;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getApiField (key) {
            return this._api[key];
        },
        setClientId (clientId) {
            this._clientId = clientId;
        },
        getClientId () {
            return this._clientId;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getConstant: (c)=>{
            switch(c){
                case 'DEFAULT_HOST':
                    return DEFAULT_HOST;
                case 'DEFAULT_PORT':
                    return DEFAULT_PORT;
                case 'DEFAULT_BASE_PATH':
                    return DEFAULT_BASE_PATH;
                case 'DEFAULT_API_VERSION':
                    return DEFAULT_API_VERSION;
                case 'DEFAULT_TIMEOUT':
                    return DEFAULT_TIMEOUT;
                case 'MAX_NETWORK_RETRY_DELAY_SEC':
                    return MAX_NETWORK_RETRY_DELAY_SEC;
                case 'INITIAL_NETWORK_RETRY_DELAY_SEC':
                    return INITIAL_NETWORK_RETRY_DELAY_SEC;
            }
            return Stripe[c];
        },
        getMaxNetworkRetries () {
            return this.getApiField('maxNetworkRetries');
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setApiNumberField (prop, n, defaultVal) {
            const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateInteger"])(prop, n, defaultVal);
            this._setApiField(prop, val);
        },
        getMaxNetworkRetryDelay () {
            return MAX_NETWORK_RETRY_DELAY_SEC;
        },
        getInitialNetworkRetryDelay () {
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         *
         * Gets a JSON version of a User-Agent and uses a cached version for a slight
         * speed advantage.
         */ getClientUserAgent (cb) {
            return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         *
         * Gets a JSON version of a User-Agent by encoding a seeded object and
         * fetching a uname from the system.
         */ getClientUserAgentSeeded (seed, cb) {
            this._platformFunctions.getUname().then((uname)=>{
                var _a;
                const userAgent = {};
                for(const field in seed){
                    if (!Object.prototype.hasOwnProperty.call(seed, field)) {
                        continue;
                    }
                    userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : 'null');
                }
                // URI-encode in case there are unusual characters in the system's uname.
                userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');
                const client = this.getApiField('httpClient');
                if (client) {
                    userAgent.httplib = encodeURIComponent(client.getClientName());
                }
                if (this._appInfo) {
                    userAgent.application = this._appInfo;
                }
                cb(JSON.stringify(userAgent));
            });
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getAppInfoAsString () {
            if (!this._appInfo) {
                return '';
            }
            let formatted = this._appInfo.name;
            if (this._appInfo.version) {
                formatted += `/${this._appInfo.version}`;
            }
            if (this._appInfo.url) {
                formatted += ` (${this._appInfo.url})`;
            }
            return formatted;
        },
        getTelemetryEnabled () {
            return this._enableTelemetry;
        },
        /**
         * @private
         * This may be removed in the future.
         */ _prepResources () {
            for(const name in __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__){
                if (!Object.prototype.hasOwnProperty.call(__TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, name)) {
                    continue;
                }
                // @ts-ignore
                this[(0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pascalToCamelCase"])(name)] = new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[name](this);
            }
        },
        /**
         * @private
         * This may be removed in the future.
         */ _getPropsFromConfig (config) {
            // If config is null or undefined, just bail early with no props
            if (!config) {
                return {};
            }
            // config can be an object or a string
            const isString = typeof config === 'string';
            const isObject = config === Object(config) && !Array.isArray(config);
            if (!isObject && !isString) {
                throw new Error('Config must either be an object or a string');
            }
            // If config is a string, we assume the old behavior of passing in a string representation of the api version
            if (isString) {
                return {
                    apiVersion: config
                };
            }
            // If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
            const values = Object.keys(config).filter((value)=>!ALLOWED_CONFIG_PROPERTIES.includes(value));
            if (values.length > 0) {
                throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(', ')}`);
            }
            return config;
        },
        parseEventNotification (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            // parses and validates the event payload all in one go
            const eventNotification = this.webhooks.constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt);
            // Parse string context into StripeContext object if present
            if (eventNotification.context) {
                eventNotification.context = __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$StripeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StripeContext"].parse(eventNotification.context);
            }
            eventNotification.fetchEvent = ()=>{
                return this._requestSender._rawRequest('GET', `/v2/core/events/${eventNotification.id}`, undefined, {
                    stripeContext: eventNotification.context
                }, [
                    'fetch_event'
                ]);
            };
            eventNotification.fetchRelatedObject = ()=>{
                if (!eventNotification.related_object) {
                    return Promise.resolve(null);
                }
                return this._requestSender._rawRequest('GET', eventNotification.related_object.url, undefined, {
                    stripeContext: eventNotification.context
                }, [
                    'fetch_related_object'
                ]);
            };
            return eventNotification;
        }
    };
    return Stripe;
}
}),
"[project]/si_app copy/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stripe",
    ()=>Stripe,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$NodePlatformFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/platform/NodePlatformFunctions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/si_app copy/node_modules/stripe/esm/stripe.core.js [app-route] (ecmascript)");
;
;
const Stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createStripe"])(new __TURBOPACK__imported__module__$5b$project$5d2f$si_app__copy$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$NodePlatformFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodePlatformFunctions"]());
const __TURBOPACK__default__export__ = Stripe;
}),
];

//# sourceMappingURL=90419_9d2ef753._.js.map
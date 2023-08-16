let t;
var e,
  r,
  n,
  i,
  o,
  s =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {};
function a(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: u } = Object.prototype,
  { getPrototypeOf: f } = Object,
  l =
    ((e = Object.create(null)),
    (t) => {
      let r = u.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    }),
  c = (t) => ((t = t.toLowerCase()), (e) => l(e) === t),
  h = (t) => (e) => typeof e === t,
  { isArray: p } = Array,
  d = h("undefined"),
  g = c("ArrayBuffer"),
  y = h("string"),
  m = h("function"),
  b = h("number"),
  E = (t) => null !== t && "object" == typeof t,
  w = (t) => {
    if ("object" !== l(t)) return !1;
    let e = f(t);
    return (
      (null === e ||
        e === Object.prototype ||
        null === Object.getPrototypeOf(e)) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  S = c("Date"),
  v = c("File"),
  A = c("Blob"),
  T = c("FileList"),
  O = c("URLSearchParams");
function B(t, e, { allOwnKeys: r = !1 } = {}) {
  let n, i;
  if (null != t) {
    if (("object" != typeof t && (t = [t]), p(t)))
      for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
    else {
      let i;
      let o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
        s = o.length;
      for (n = 0; n < s; n++) (i = o[n]), e.call(null, t[i], i, t);
    }
  }
}
function R(t, e) {
  let r;
  e = e.toLowerCase();
  let n = Object.keys(t),
    i = n.length;
  for (; i-- > 0; ) if (e === (r = n[i]).toLowerCase()) return r;
  return null;
}
const x =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : s,
  P = (t) => !d(t) && t !== x,
  C =
    ((r = "undefined" != typeof Uint8Array && f(Uint8Array)),
    (t) => r && t instanceof r),
  U = c("HTMLFormElement"),
  L = (
    ({ hasOwnProperty: t }) =>
    (e, r) =>
      t.call(e, r)
  )(Object.prototype),
  I = c("RegExp"),
  N = (t, e) => {
    let r = Object.getOwnPropertyDescriptors(t),
      n = {};
    B(r, (r, i) => {
      !1 !== e(r, i, t) && (n[i] = r);
    }),
      Object.defineProperties(t, n);
  },
  j = "abcdefghijklmnopqrstuvwxyz",
  M = "0123456789",
  _ = { DIGIT: M, ALPHA: j, ALPHA_DIGIT: j + j.toUpperCase() + M },
  F = c("AsyncFunction");
var k = {
  isArray: p,
  isArrayBuffer: g,
  isBuffer: function (t) {
    return (
      null !== t &&
      !d(t) &&
      null !== t.constructor &&
      !d(t.constructor) &&
      m(t.constructor.isBuffer) &&
      t.constructor.isBuffer(t)
    );
  },
  isFormData: (t) => {
    let e;
    return (
      t &&
      (("function" == typeof FormData && t instanceof FormData) ||
        (m(t.append) &&
          ("formdata" === (e = l(t)) ||
            ("object" === e &&
              m(t.toString) &&
              "[object FormData]" === t.toString()))))
    );
  },
  isArrayBufferView: function (t) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
      ? ArrayBuffer.isView(t)
      : t && t.buffer && g(t.buffer);
  },
  isString: y,
  isNumber: b,
  isBoolean: (t) => !0 === t || !1 === t,
  isObject: E,
  isPlainObject: w,
  isUndefined: d,
  isDate: S,
  isFile: v,
  isBlob: A,
  isRegExp: I,
  isFunction: m,
  isStream: (t) => E(t) && m(t.pipe),
  isURLSearchParams: O,
  isTypedArray: C,
  isFileList: T,
  forEach: B,
  merge: function t() {
    let { caseless: e } = (P(this) && this) || {},
      r = {},
      n = (n, i) => {
        let o = (e && R(r, i)) || i;
        w(r[o]) && w(n)
          ? (r[o] = t(r[o], n))
          : w(n)
          ? (r[o] = t({}, n))
          : p(n)
          ? (r[o] = n.slice())
          : (r[o] = n);
      };
    for (let t = 0, e = arguments.length; t < e; t++)
      arguments[t] && B(arguments[t], n);
    return r;
  },
  extend: (t, e, r, { allOwnKeys: n } = {}) => (
    B(
      e,
      (e, n) => {
        r && m(e) ? (t[n] = a(e, r)) : (t[n] = e);
      },
      { allOwnKeys: n }
    ),
    t
  ),
  trim: (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
  stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
  inherits: (t, e, r, n) => {
    (t.prototype = Object.create(e.prototype, n)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      r && Object.assign(t.prototype, r);
  },
  toFlatObject: (t, e, r, n) => {
    let i, o, s;
    let a = {};
    if (((e = e || {}), null == t)) return e;
    do {
      for (o = (i = Object.getOwnPropertyNames(t)).length; o-- > 0; )
        (s = i[o]), (!n || n(s, t, e)) && !a[s] && ((e[s] = t[s]), (a[s] = !0));
      t = !1 !== r && f(t);
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e;
  },
  kindOf: l,
  kindOfTest: c,
  endsWith: (t, e, r) => {
    (t = String(t)),
      (void 0 === r || r > t.length) && (r = t.length),
      (r -= e.length);
    let n = t.indexOf(e, r);
    return -1 !== n && n === r;
  },
  toArray: (t) => {
    if (!t) return null;
    if (p(t)) return t;
    let e = t.length;
    if (!b(e)) return null;
    let r = Array(e);
    for (; e-- > 0; ) r[e] = t[e];
    return r;
  },
  forEachEntry: (t, e) => {
    let r;
    let n = t && t[Symbol.iterator],
      i = n.call(t);
    for (; (r = i.next()) && !r.done; ) {
      let n = r.value;
      e.call(t, n[0], n[1]);
    }
  },
  matchAll: (t, e) => {
    let r;
    let n = [];
    for (; null !== (r = t.exec(e)); ) n.push(r);
    return n;
  },
  isHTMLForm: U,
  hasOwnProperty: L,
  hasOwnProp: L,
  reduceDescriptors: N,
  freezeMethods: (t) => {
    N(t, (e, r) => {
      if (m(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
        return !1;
      let n = t[r];
      if (m(n)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  toObjectSet: (t, e) => {
    let r = {};
    return (
      ((t) => {
        t.forEach((t) => {
          r[t] = !0;
        });
      })(p(t) ? t : String(t).split(e)),
      r
    );
  },
  toCamelCase: (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
      return e.toUpperCase() + r;
    }),
  noop: () => {},
  toFiniteNumber: (t, e) => (Number.isFinite((t = +t)) ? t : e),
  findKey: R,
  global: x,
  isContextDefined: P,
  ALPHABET: _,
  generateString: (t = 16, e = _.ALPHA_DIGIT) => {
    let r = "",
      { length: n } = e;
    for (; t--; ) r += e[(Math.random() * n) | 0];
    return r;
  },
  isSpecCompliantForm: function (t) {
    return !!(
      t &&
      m(t.append) &&
      "FormData" === t[Symbol.toStringTag] &&
      t[Symbol.iterator]
    );
  },
  toJSONObject: (t) => {
    let e = Array(10),
      r = (t, n) => {
        if (E(t)) {
          if (e.indexOf(t) >= 0) return;
          if (!("toJSON" in t)) {
            e[n] = t;
            let i = p(t) ? [] : {};
            return (
              B(t, (t, e) => {
                let o = r(t, n + 1);
                d(o) || (i[e] = o);
              }),
              (e[n] = void 0),
              i
            );
          }
        }
        return t;
      };
    return r(t, 0);
  },
  isAsyncFn: F,
  isThenable: (t) => t && (E(t) || m(t)) && m(t.then) && m(t.catch),
};
function D(t, e, r, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    r && (this.config = r),
    n && (this.request = n),
    i && (this.response = i);
}
k.inherits(D, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const H = D.prototype,
  z = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  z[t] = { value: t };
}),
  Object.defineProperties(D, z),
  Object.defineProperty(H, "isAxiosError", { value: !0 }),
  (D.from = (t, e, r, n, i, o) => {
    let s = Object.create(H);
    return (
      k.toFlatObject(
        t,
        s,
        function (t) {
          return t !== Error.prototype;
        },
        (t) => "isAxiosError" !== t
      ),
      D.call(s, t.message, e, r, n, i),
      (s.cause = t),
      (s.name = t.name),
      o && Object.assign(s, o),
      s
    );
  }),
  (n = function (t) {
    for (
      var e, r = t.length, n = r % 3, i = [], o = 0, s = r - n;
      o < s;
      o += 16383
    )
      i.push(
        (function (t, e, r) {
          for (var n, i = [], o = e; o < r; o += 3)
            i.push(
              q[
                ((n =
                  ((t[o] << 16) & 16711680) +
                  ((t[o + 1] << 8) & 65280) +
                  (255 & t[o + 2])) >>
                  18) &
                  63
              ] +
                q[(n >> 12) & 63] +
                q[(n >> 6) & 63] +
                q[63 & n]
            );
          return i.join("");
        })(t, o, o + 16383 > s ? s : o + 16383)
      );
    return (
      1 === n
        ? i.push(q[(e = t[r - 1]) >> 2] + q[(e << 4) & 63] + "==")
        : 2 === n &&
          i.push(
            q[(e = (t[r - 2] << 8) + t[r - 1]) >> 10] +
              q[(e >> 4) & 63] +
              q[(e << 2) & 63] +
              "="
          ),
      i.join("")
    );
  });
for (
  var q = [],
    K = [],
    J = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    V = 0,
    W = G.length;
  V < W;
  ++V
)
  (q[V] = G[V]), (K[G.charCodeAt(V)] = V);
(K["-".charCodeAt(0)] = 62),
  (K["_".charCodeAt(0)] = 63),
  (i = function (t, e, r, n, i) {
    var o,
      s,
      a = 8 * i - n - 1,
      u = (1 << a) - 1,
      f = u >> 1,
      l = -7,
      c = r ? i - 1 : 0,
      h = r ? -1 : 1,
      p = t[e + c];
    for (
      c += h, o = p & ((1 << -l) - 1), p >>= -l, l += a;
      l > 0;
      o = 256 * o + t[e + c], c += h, l -= 8
    );
    for (
      s = o & ((1 << -l) - 1), o >>= -l, l += n;
      l > 0;
      s = 256 * s + t[e + c], c += h, l -= 8
    );
    if (0 === o) o = 1 - f;
    else {
      if (o === u) return s ? NaN : (p ? -1 : 1) * (1 / 0);
      (s += Math.pow(2, n)), (o -= f);
    }
    return (p ? -1 : 1) * s * Math.pow(2, o - n);
  }),
  (o = function (t, e, r, n, i, o) {
    var s,
      a,
      u,
      f = 8 * o - i - 1,
      l = (1 << f) - 1,
      c = l >> 1,
      h = 23 === i ? 5960464477539062e-23 : 0,
      p = n ? 0 : o - 1,
      d = n ? 1 : -1,
      g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
    for (
      isNaN((e = Math.abs(e))) || e === 1 / 0
        ? ((a = isNaN(e) ? 1 : 0), (s = l))
        : ((s = Math.floor(Math.log(e) / Math.LN2)),
          e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
          s + c >= 1 ? (e += h / u) : (e += h * Math.pow(2, 1 - c)),
          e * u >= 2 && (s++, (u /= 2)),
          s + c >= l
            ? ((a = 0), (s = l))
            : s + c >= 1
            ? ((a = (e * u - 1) * Math.pow(2, i)), (s += c))
            : ((a = e * Math.pow(2, c - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      t[r + p] = 255 & a, p += d, a /= 256, i -= 8
    );
    for (
      s = (s << i) | a, f += i;
      f > 0;
      t[r + p] = 255 & s, p += d, s /= 256, f -= 8
    );
    t[r + p - d] |= 128 * g;
  });
const X =
  "function" == typeof Symbol && "function" == typeof Symbol.for
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
function Y(t) {
  if (t > 2147483647)
    throw RangeError('The value "' + t + '" is invalid for option "size"');
  let e = new Uint8Array(t);
  return Object.setPrototypeOf(e, Q.prototype), e;
}
function Q(t, e, r) {
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw TypeError(
        'The "string" argument must be of type string. Received type number'
      );
    return te(t);
  }
  return Z(t, e, r);
}
function Z(t, e, r) {
  if ("string" == typeof t)
    return (function (t, e) {
      if (
        (("string" != typeof e || "" === e) && (e = "utf8"), !Q.isEncoding(e))
      )
        throw TypeError("Unknown encoding: " + e);
      let r = 0 | to(t, e),
        n = Y(r),
        i = n.write(t, e);
      return i !== r && (n = n.slice(0, i)), n;
    })(t, e);
  if (ArrayBuffer.isView(t))
    return (function (t) {
      if (tx(t, Uint8Array)) {
        let e = new Uint8Array(t);
        return tn(e.buffer, e.byteOffset, e.byteLength);
      }
      return tr(t);
    })(t);
  if (null == t)
    throw TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof t
    );
  if (
    tx(t, ArrayBuffer) ||
    (t && tx(t.buffer, ArrayBuffer)) ||
    ("undefined" != typeof SharedArrayBuffer &&
      (tx(t, SharedArrayBuffer) || (t && tx(t.buffer, SharedArrayBuffer))))
  )
    return tn(t, e, r);
  if ("number" == typeof t)
    throw TypeError(
      'The "value" argument must not be of type number. Received type number'
    );
  let n = t.valueOf && t.valueOf();
  if (null != n && n !== t) return Q.from(n, e, r);
  let i = (function (t) {
    var e;
    if (Q.isBuffer(t)) {
      let e = 0 | ti(t.length),
        r = Y(e);
      return 0 === r.length || t.copy(r, 0, 0, e), r;
    }
    return void 0 !== t.length
      ? "number" != typeof t.length || (e = t.length) != e
        ? Y(0)
        : tr(t)
      : "Buffer" === t.type && Array.isArray(t.data)
      ? tr(t.data)
      : void 0;
  })(t);
  if (i) return i;
  if (
    "undefined" != typeof Symbol &&
    null != Symbol.toPrimitive &&
    "function" == typeof t[Symbol.toPrimitive]
  )
    return Q.from(t[Symbol.toPrimitive]("string"), e, r);
  throw TypeError(
    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
      typeof t
  );
}
function tt(t) {
  if ("number" != typeof t)
    throw TypeError('"size" argument must be of type number');
  if (t < 0)
    throw RangeError('The value "' + t + '" is invalid for option "size"');
}
function te(t) {
  return tt(t), Y(t < 0 ? 0 : 0 | ti(t));
}
function tr(t) {
  let e = t.length < 0 ? 0 : 0 | ti(t.length),
    r = Y(e);
  for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
  return r;
}
function tn(t, e, r) {
  let n;
  if (e < 0 || t.byteLength < e)
    throw RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < e + (r || 0))
    throw RangeError('"length" is outside of buffer bounds');
  return (
    Object.setPrototypeOf(
      (n =
        void 0 === e && void 0 === r
          ? new Uint8Array(t)
          : void 0 === r
          ? new Uint8Array(t, e)
          : new Uint8Array(t, e, r)),
      Q.prototype
    ),
    n
  );
}
function ti(t) {
  if (t >= 2147483647)
    throw RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
    );
  return 0 | t;
}
function to(t, e) {
  if (Q.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || tx(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t)
    throw TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
        typeof t
    );
  let r = t.length,
    n = arguments.length > 2 && !0 === arguments[2];
  if (!n && 0 === r) return 0;
  let i = !1;
  for (;;)
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
        return tO(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r;
      case "hex":
        return r >>> 1;
      case "base64":
        return tB(t).length;
      default:
        if (i) return n ? -1 : tO(t).length;
        (e = ("" + e).toLowerCase()), (i = !0);
    }
}
function ts(t, e, r) {
  let i = !1;
  if (
    ((void 0 === e || e < 0) && (e = 0),
    e > this.length ||
      ((void 0 === r || r > this.length) && (r = this.length),
      r <= 0 || (r >>>= 0) <= (e >>>= 0)))
  )
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return (function (t, e, r) {
          let n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          let i = "";
          for (let n = e; n < r; ++n) i += tP[t[n]];
          return i;
        })(this, e, r);
      case "utf8":
      case "utf-8":
        return tl(this, e, r);
      case "ascii":
        return (function (t, e, r) {
          let n = "";
          r = Math.min(t.length, r);
          for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
          return n;
        })(this, e, r);
      case "latin1":
      case "binary":
        return (function (t, e, r) {
          let n = "";
          r = Math.min(t.length, r);
          for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
          return n;
        })(this, e, r);
      case "base64":
        var o, s;
        return (
          (o = e),
          (s = r),
          0 === o && s === this.length ? n(this) : n(this.slice(o, s))
        );
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return (function (t, e, r) {
          let n = t.slice(e, r),
            i = "";
          for (let t = 0; t < n.length - 1; t += 2)
            i += String.fromCharCode(n[t] + 256 * n[t + 1]);
          return i;
        })(this, e, r);
      default:
        if (i) throw TypeError("Unknown encoding: " + t);
        (t = (t + "").toLowerCase()), (i = !0);
    }
}
function ta(t, e, r) {
  let n = t[e];
  (t[e] = t[r]), (t[r] = n);
}
function tu(t, e, r, n, i) {
  var o;
  if (0 === t.length) return -1;
  if (
    ("string" == typeof r
      ? ((n = r), (r = 0))
      : r > 2147483647
      ? (r = 2147483647)
      : r < -2147483648 && (r = -2147483648),
    (o = r = +r) != o && (r = i ? 0 : t.length - 1),
    r < 0 && (r = t.length + r),
    r >= t.length)
  ) {
    if (i) return -1;
    r = t.length - 1;
  } else if (r < 0) {
    if (!i) return -1;
    r = 0;
  }
  if (("string" == typeof e && (e = Q.from(e, n)), Q.isBuffer(e)))
    return 0 === e.length ? -1 : tf(t, e, r, n, i);
  if ("number" == typeof e)
    return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
      ? i
        ? Uint8Array.prototype.indexOf.call(t, e, r)
        : Uint8Array.prototype.lastIndexOf.call(t, e, r)
      : tf(t, [e], r, n, i);
  throw TypeError("val must be string, number or Buffer");
}
function tf(t, e, r, n, i) {
  let o,
    s = 1,
    a = t.length,
    u = e.length;
  if (
    void 0 !== n &&
    ("ucs2" === (n = String(n).toLowerCase()) ||
      "ucs-2" === n ||
      "utf16le" === n ||
      "utf-16le" === n)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (s = 2), (a /= 2), (u /= 2), (r /= 2);
  }
  function f(t, e) {
    return 1 === s ? t[e] : t.readUInt16BE(e * s);
  }
  if (i) {
    let n = -1;
    for (o = r; o < a; o++)
      if (f(t, o) === f(e, -1 === n ? 0 : o - n)) {
        if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
      } else -1 !== n && (o -= o - n), (n = -1);
  } else
    for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
      let r = !0;
      for (let n = 0; n < u; n++)
        if (f(t, o + n) !== f(e, n)) {
          r = !1;
          break;
        }
      if (r) return o;
    }
  return -1;
}
function tl(t, e, r) {
  r = Math.min(t.length, r);
  let n = [],
    i = e;
  for (; i < r; ) {
    let e = t[i],
      o = null,
      s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
    if (i + s <= r) {
      let r, n, a, u;
      switch (s) {
        case 1:
          e < 128 && (o = e);
          break;
        case 2:
          (192 & (r = t[i + 1])) == 128 &&
            (u = ((31 & e) << 6) | (63 & r)) > 127 &&
            (o = u);
          break;
        case 3:
          (r = t[i + 1]),
            (n = t[i + 2]),
            (192 & r) == 128 &&
              (192 & n) == 128 &&
              (u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) > 2047 &&
              (u < 55296 || u > 57343) &&
              (o = u);
          break;
        case 4:
          (r = t[i + 1]),
            (n = t[i + 2]),
            (a = t[i + 3]),
            (192 & r) == 128 &&
              (192 & n) == 128 &&
              (192 & a) == 128 &&
              (u =
                ((15 & e) << 18) |
                ((63 & r) << 12) |
                ((63 & n) << 6) |
                (63 & a)) > 65535 &&
              u < 1114112 &&
              (o = u);
      }
    }
    null === o
      ? ((o = 65533), (s = 1))
      : o > 65535 &&
        ((o -= 65536),
        n.push(((o >>> 10) & 1023) | 55296),
        (o = 56320 | (1023 & o))),
      n.push(o),
      (i += s);
  }
  return (function (t) {
    let e = t.length;
    if (e <= 4096) return String.fromCharCode.apply(String, t);
    let r = "",
      n = 0;
    for (; n < e; )
      r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
    return r;
  })(n);
}
function tc(t, e, r) {
  if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
  if (t + e > r) throw RangeError("Trying to access beyond buffer length");
}
function th(t, e, r, n, i, o) {
  if (!Q.isBuffer(t))
    throw TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
  if (r + n > t.length) throw RangeError("Index out of range");
}
function tp(t, e, r, n, i) {
  tS(e, n, i, t, r, 7);
  let o = Number(e & BigInt(4294967295));
  (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o);
  let s = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[r++] = s),
    (s >>= 8),
    (t[r++] = s),
    (s >>= 8),
    (t[r++] = s),
    (s >>= 8),
    (t[r++] = s),
    r
  );
}
function td(t, e, r, n, i) {
  tS(e, n, i, t, r, 7);
  let o = Number(e & BigInt(4294967295));
  (t[r + 7] = o),
    (o >>= 8),
    (t[r + 6] = o),
    (o >>= 8),
    (t[r + 5] = o),
    (o >>= 8),
    (t[r + 4] = o);
  let s = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[r + 3] = s),
    (s >>= 8),
    (t[r + 2] = s),
    (s >>= 8),
    (t[r + 1] = s),
    (s >>= 8),
    (t[r] = s),
    r + 8
  );
}
function tg(t, e, r, n, i, o) {
  if (r + n > t.length || r < 0) throw RangeError("Index out of range");
}
function ty(t, e, r, n, i) {
  return (
    (e = +e),
    (r >>>= 0),
    i || tg(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
    o(t, e, r, n, 23, 4),
    r + 4
  );
}
function tm(t, e, r, n, i) {
  return (
    (e = +e),
    (r >>>= 0),
    i || tg(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
    o(t, e, r, n, 52, 8),
    r + 8
  );
}
(Q.TYPED_ARRAY_SUPPORT = (function () {
  try {
    let t = new Uint8Array(1),
      e = {
        foo: function () {
          return 42;
        },
      };
    return (
      Object.setPrototypeOf(e, Uint8Array.prototype),
      Object.setPrototypeOf(t, e),
      42 === t.foo()
    );
  } catch (t) {
    return !1;
  }
})()),
  Q.TYPED_ARRAY_SUPPORT ||
    "undefined" == typeof console ||
    "function" != typeof console.error ||
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    ),
  Object.defineProperty(Q.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (Q.isBuffer(this)) return this.buffer;
    },
  }),
  Object.defineProperty(Q.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (Q.isBuffer(this)) return this.byteOffset;
    },
  }),
  (Q.poolSize = 8192),
  (Q.from = function (t, e, r) {
    return Z(t, e, r);
  }),
  Object.setPrototypeOf(Q.prototype, Uint8Array.prototype),
  Object.setPrototypeOf(Q, Uint8Array),
  (Q.alloc = function (t, e, r) {
    return (tt(t), t <= 0)
      ? Y(t)
      : void 0 !== e
      ? "string" == typeof r
        ? Y(t).fill(e, r)
        : Y(t).fill(e)
      : Y(t);
  }),
  (Q.allocUnsafe = function (t) {
    return te(t);
  }),
  (Q.allocUnsafeSlow = function (t) {
    return te(t);
  }),
  (Q.isBuffer = function (t) {
    return null != t && !0 === t._isBuffer && t !== Q.prototype;
  }),
  (Q.compare = function (t, e) {
    if (
      (tx(t, Uint8Array) && (t = Q.from(t, t.offset, t.byteLength)),
      tx(e, Uint8Array) && (e = Q.from(e, e.offset, e.byteLength)),
      !Q.isBuffer(t) || !Q.isBuffer(e))
    )
      throw TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let r = t.length,
      n = e.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (t[i] !== e[i]) {
        (r = t[i]), (n = e[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  }),
  (Q.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (Q.concat = function (t, e) {
    let r;
    if (!Array.isArray(t))
      throw TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return Q.alloc(0);
    if (void 0 === e) for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
    let n = Q.allocUnsafe(e),
      i = 0;
    for (r = 0; r < t.length; ++r) {
      let e = t[r];
      if (tx(e, Uint8Array))
        i + e.length > n.length
          ? (Q.isBuffer(e) || (e = Q.from(e)), e.copy(n, i))
          : Uint8Array.prototype.set.call(n, e, i);
      else if (Q.isBuffer(e)) e.copy(n, i);
      else throw TypeError('"list" argument must be an Array of Buffers');
      i += e.length;
    }
    return n;
  }),
  (Q.byteLength = to),
  (Q.prototype._isBuffer = !0),
  (Q.prototype.swap16 = function () {
    let t = this.length;
    if (t % 2 != 0)
      throw RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) ta(this, e, e + 1);
    return this;
  }),
  (Q.prototype.swap32 = function () {
    let t = this.length;
    if (t % 4 != 0)
      throw RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) ta(this, e, e + 3), ta(this, e + 1, e + 2);
    return this;
  }),
  (Q.prototype.swap64 = function () {
    let t = this.length;
    if (t % 8 != 0)
      throw RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      ta(this, e, e + 7),
        ta(this, e + 1, e + 6),
        ta(this, e + 2, e + 5),
        ta(this, e + 3, e + 4);
    return this;
  }),
  (Q.prototype.toString = function () {
    let t = this.length;
    return 0 === t
      ? ""
      : 0 == arguments.length
      ? tl(this, 0, t)
      : ts.apply(this, arguments);
  }),
  (Q.prototype.toLocaleString = Q.prototype.toString),
  (Q.prototype.equals = function (t) {
    if (!Q.isBuffer(t)) throw TypeError("Argument must be a Buffer");
    return this === t || 0 === Q.compare(this, t);
  }),
  (Q.prototype.inspect = function () {
    let t = "";
    return (
      (t = this.toString("hex", 0, 50)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > 50 && (t += " ... "),
      "<Buffer " + t + ">"
    );
  }),
  X && (Q.prototype[X] = Q.prototype.inspect),
  (Q.prototype.compare = function (t, e, r, n, i) {
    if (
      (tx(t, Uint8Array) && (t = Q.from(t, t.offset, t.byteLength)),
      !Q.isBuffer(t))
    )
      throw TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (void 0 === e && (e = 0),
      void 0 === r && (r = t ? t.length : 0),
      void 0 === n && (n = 0),
      void 0 === i && (i = this.length),
      e < 0 || r > t.length || n < 0 || i > this.length)
    )
      throw RangeError("out of range index");
    if (n >= i && e >= r) return 0;
    if (n >= i) return -1;
    if (e >= r) return 1;
    if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t)) return 0;
    let o = i - n,
      s = r - e,
      a = Math.min(o, s),
      u = this.slice(n, i),
      f = t.slice(e, r);
    for (let t = 0; t < a; ++t)
      if (u[t] !== f[t]) {
        (o = u[t]), (s = f[t]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  }),
  (Q.prototype.includes = function (t, e, r) {
    return -1 !== this.indexOf(t, e, r);
  }),
  (Q.prototype.indexOf = function (t, e, r) {
    return tu(this, t, e, r, !0);
  }),
  (Q.prototype.lastIndexOf = function (t, e, r) {
    return tu(this, t, e, r, !1);
  }),
  (Q.prototype.write = function (t, e, r, n) {
    var i, o, s, a, u, f, l, c;
    if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
    else if (void 0 === r && "string" == typeof e)
      (n = e), (r = this.length), (e = 0);
    else if (isFinite(e))
      (e >>>= 0),
        isFinite(r)
          ? ((r >>>= 0), void 0 === n && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let h = this.length - e;
    if (
      ((void 0 === r || r > h) && (r = h),
      (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
    )
      throw RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let p = !1;
    for (;;)
      switch (n) {
        case "hex":
          return (function (t, e, r, n) {
            let i;
            r = Number(r) || 0;
            let o = t.length - r;
            n ? (n = Number(n)) > o && (n = o) : (n = o);
            let s = e.length;
            for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
              let n = parseInt(e.substr(2 * i, 2), 16);
              if (n != n) break;
              t[r + i] = n;
            }
            return i;
          })(this, t, e, r);
        case "utf8":
        case "utf-8":
          return (i = e), (o = r), tR(tO(t, this.length - i), this, i, o);
        case "ascii":
        case "latin1":
        case "binary":
          return (
            (s = e),
            (a = r),
            tR(
              (function (t) {
                let e = [];
                for (let r = 0; r < t.length; ++r)
                  e.push(255 & t.charCodeAt(r));
                return e;
              })(t),
              this,
              s,
              a
            )
          );
        case "base64":
          return (u = e), (f = r), tR(tB(t), this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return (
            (l = e),
            (c = r),
            tR(
              (function (t, e) {
                let r, n;
                let i = [];
                for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                  (n = (r = t.charCodeAt(o)) >> 8), i.push(r % 256), i.push(n);
                return i;
              })(t, this.length - l),
              this,
              l,
              c
            )
          );
        default:
          if (p) throw TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (p = !0);
      }
  }),
  (Q.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  }),
  (Q.prototype.slice = function (t, e) {
    let r = this.length;
    (t = ~~t),
      (e = void 0 === e ? r : ~~e),
      t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
      e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
      e < t && (e = t);
    let n = this.subarray(t, e);
    return Object.setPrototypeOf(n, Q.prototype), n;
  }),
  (Q.prototype.readUintLE = Q.prototype.readUIntLE =
    function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || tc(t, e, this.length);
      let n = this[t],
        i = 1,
        o = 0;
      for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
      return n;
    }),
  (Q.prototype.readUintBE = Q.prototype.readUIntBE =
    function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || tc(t, e, this.length);
      let n = this[t + --e],
        i = 1;
      for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
      return n;
    }),
  (Q.prototype.readUint8 = Q.prototype.readUInt8 =
    function (t, e) {
      return (t >>>= 0), e || tc(t, 1, this.length), this[t];
    }),
  (Q.prototype.readUint16LE = Q.prototype.readUInt16LE =
    function (t, e) {
      return (
        (t >>>= 0), e || tc(t, 2, this.length), this[t] | (this[t + 1] << 8)
      );
    }),
  (Q.prototype.readUint16BE = Q.prototype.readUInt16BE =
    function (t, e) {
      return (
        (t >>>= 0), e || tc(t, 2, this.length), (this[t] << 8) | this[t + 1]
      );
    }),
  (Q.prototype.readUint32LE = Q.prototype.readUInt32LE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || tc(t, 4, this.length),
        (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
          16777216 * this[t + 3]
      );
    }),
  (Q.prototype.readUint32BE = Q.prototype.readUInt32BE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || tc(t, 4, this.length),
        16777216 * this[t] +
          ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
      );
    }),
  (Q.prototype.readBigUInt64LE = tC(function (t) {
    tv((t >>>= 0), "offset");
    let e = this[t],
      r = this[t + 7];
    (void 0 === e || void 0 === r) && tA(t, this.length - 8);
    let n = e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
      i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  })),
  (Q.prototype.readBigUInt64BE = tC(function (t) {
    tv((t >>>= 0), "offset");
    let e = this[t],
      r = this[t + 7];
    (void 0 === e || void 0 === r) && tA(t, this.length - 8);
    let n = 16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
      i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  })),
  (Q.prototype.readIntLE = function (t, e, r) {
    (t >>>= 0), (e >>>= 0), r || tc(t, e, this.length);
    let n = this[t],
      i = 1,
      o = 0;
    for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
    return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
  }),
  (Q.prototype.readIntBE = function (t, e, r) {
    (t >>>= 0), (e >>>= 0), r || tc(t, e, this.length);
    let n = e,
      i = 1,
      o = this[t + --n];
    for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
    return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
  }),
  (Q.prototype.readInt8 = function (t, e) {
    return ((t >>>= 0), e || tc(t, 1, this.length), 128 & this[t])
      ? -((255 - this[t] + 1) * 1)
      : this[t];
  }),
  (Q.prototype.readInt16LE = function (t, e) {
    (t >>>= 0), e || tc(t, 2, this.length);
    let r = this[t] | (this[t + 1] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (Q.prototype.readInt16BE = function (t, e) {
    (t >>>= 0), e || tc(t, 2, this.length);
    let r = this[t + 1] | (this[t] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (Q.prototype.readInt32LE = function (t, e) {
    return (
      (t >>>= 0),
      e || tc(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (Q.prototype.readInt32BE = function (t, e) {
    return (
      (t >>>= 0),
      e || tc(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (Q.prototype.readBigInt64LE = tC(function (t) {
    tv((t >>>= 0), "offset");
    let e = this[t],
      r = this[t + 7];
    (void 0 === e || void 0 === r) && tA(t, this.length - 8);
    let n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t])
    );
  })),
  (Q.prototype.readBigInt64BE = tC(function (t) {
    tv((t >>>= 0), "offset");
    let e = this[t],
      r = this[t + 7];
    (void 0 === e || void 0 === r) && tA(t, this.length - 8);
    let n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r)
    );
  })),
  (Q.prototype.readFloatLE = function (t, e) {
    return (t >>>= 0), e || tc(t, 4, this.length), i(this, t, !0, 23, 4);
  }),
  (Q.prototype.readFloatBE = function (t, e) {
    return (t >>>= 0), e || tc(t, 4, this.length), i(this, t, !1, 23, 4);
  }),
  (Q.prototype.readDoubleLE = function (t, e) {
    return (t >>>= 0), e || tc(t, 8, this.length), i(this, t, !0, 52, 8);
  }),
  (Q.prototype.readDoubleBE = function (t, e) {
    return (t >>>= 0), e || tc(t, 8, this.length), i(this, t, !1, 52, 8);
  }),
  (Q.prototype.writeUintLE = Q.prototype.writeUIntLE =
    function (t, e, r, n) {
      if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
        let n = Math.pow(2, 8 * r) - 1;
        th(this, t, e, r, n, 0);
      }
      let i = 1,
        o = 0;
      for (this[e] = 255 & t; ++o < r && (i *= 256); )
        this[e + o] = (t / i) & 255;
      return e + r;
    }),
  (Q.prototype.writeUintBE = Q.prototype.writeUIntBE =
    function (t, e, r, n) {
      if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
        let n = Math.pow(2, 8 * r) - 1;
        th(this, t, e, r, n, 0);
      }
      let i = r - 1,
        o = 1;
      for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
        this[e + i] = (t / o) & 255;
      return e + r;
    }),
  (Q.prototype.writeUint8 = Q.prototype.writeUInt8 =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || th(this, t, e, 1, 255, 0),
        (this[e] = 255 & t),
        e + 1
      );
    }),
  (Q.prototype.writeUint16LE = Q.prototype.writeUInt16LE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || th(this, t, e, 2, 65535, 0),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        e + 2
      );
    }),
  (Q.prototype.writeUint16BE = Q.prototype.writeUInt16BE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || th(this, t, e, 2, 65535, 0),
        (this[e] = t >>> 8),
        (this[e + 1] = 255 & t),
        e + 2
      );
    }),
  (Q.prototype.writeUint32LE = Q.prototype.writeUInt32LE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || th(this, t, e, 4, 4294967295, 0),
        (this[e + 3] = t >>> 24),
        (this[e + 2] = t >>> 16),
        (this[e + 1] = t >>> 8),
        (this[e] = 255 & t),
        e + 4
      );
    }),
  (Q.prototype.writeUint32BE = Q.prototype.writeUInt32BE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || th(this, t, e, 4, 4294967295, 0),
        (this[e] = t >>> 24),
        (this[e + 1] = t >>> 16),
        (this[e + 2] = t >>> 8),
        (this[e + 3] = 255 & t),
        e + 4
      );
    }),
  (Q.prototype.writeBigUInt64LE = tC(function (t, e = 0) {
    return tp(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Q.prototype.writeBigUInt64BE = tC(function (t, e = 0) {
    return td(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Q.prototype.writeIntLE = function (t, e, r, n) {
    if (((t = +t), (e >>>= 0), !n)) {
      let n = Math.pow(2, 8 * r - 1);
      th(this, t, e, r, n - 1, -n);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[e] = 255 & t; ++i < r && (o *= 256); )
      t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
        (this[e + i] = (((t / o) >> 0) - s) & 255);
    return e + r;
  }),
  (Q.prototype.writeIntBE = function (t, e, r, n) {
    if (((t = +t), (e >>>= 0), !n)) {
      let n = Math.pow(2, 8 * r - 1);
      th(this, t, e, r, n - 1, -n);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
      t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
        (this[e + i] = (((t / o) >> 0) - s) & 255);
    return e + r;
  }),
  (Q.prototype.writeInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || th(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (Q.prototype.writeInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || th(this, t, e, 2, 32767, -32768),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  }),
  (Q.prototype.writeInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || th(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = 255 & t),
      e + 2
    );
  }),
  (Q.prototype.writeInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || th(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  }),
  (Q.prototype.writeInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || th(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = 255 & t),
      e + 4
    );
  }),
  (Q.prototype.writeBigInt64LE = tC(function (t, e = 0) {
    return tp(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (Q.prototype.writeBigInt64BE = tC(function (t, e = 0) {
    return td(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (Q.prototype.writeFloatLE = function (t, e, r) {
    return ty(this, t, e, !0, r);
  }),
  (Q.prototype.writeFloatBE = function (t, e, r) {
    return ty(this, t, e, !1, r);
  }),
  (Q.prototype.writeDoubleLE = function (t, e, r) {
    return tm(this, t, e, !0, r);
  }),
  (Q.prototype.writeDoubleBE = function (t, e, r) {
    return tm(this, t, e, !1, r);
  }),
  (Q.prototype.copy = function (t, e, r, n) {
    if (!Q.isBuffer(t)) throw TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      n || 0 === n || (n = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      n > 0 && n < r && (n = r),
      n === r || 0 === t.length || 0 === this.length)
    )
      return 0;
    if (e < 0) throw RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
    if (n < 0) throw RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      t.length - e < n - r && (n = t.length - e + r);
    let i = n - r;
    return (
      this === t && "function" == typeof Uint8Array.prototype.copyWithin
        ? this.copyWithin(e, r, n)
        : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
      i
    );
  }),
  (Q.prototype.fill = function (t, e, r, n) {
    let i;
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((n = e), (e = 0), (r = this.length))
          : "string" == typeof r && ((n = r), (r = this.length)),
        void 0 !== n && "string" != typeof n)
      )
        throw TypeError("encoding must be a string");
      if ("string" == typeof n && !Q.isEncoding(n))
        throw TypeError("Unknown encoding: " + n);
      if (1 === t.length) {
        let e = t.charCodeAt(0);
        (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
      }
    } else
      "number" == typeof t
        ? (t &= 255)
        : "boolean" == typeof t && (t = Number(t));
    if (e < 0 || this.length < e || this.length < r)
      throw RangeError("Out of range index");
    if (r <= e) return this;
    if (
      ((e >>>= 0),
      (r = void 0 === r ? this.length : r >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (i = e; i < r; ++i) this[i] = t;
    else {
      let o = Q.isBuffer(t) ? t : Q.from(t, n),
        s = o.length;
      if (0 === s)
        throw TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
    }
    return this;
  });
const tb = {};
function tE(t, e, r) {
  tb[t] = class extends r {
    constructor() {
      super(),
        Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0,
        }),
        (this.name = `${this.name} [${t}]`),
        this.stack,
        delete this.name;
    }
    get code() {
      return t;
    }
    set code(t) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      });
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  };
}
function tw(t) {
  let e = "",
    r = t.length,
    n = "-" === t[0] ? 1 : 0;
  for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
  return `${t.slice(0, r)}${e}`;
}
function tS(t, e, r, n, i, o) {
  if (t > r || t < e) {
    let n;
    let i = "bigint" == typeof e ? "n" : "";
    throw (
      ((n =
        o > 3
          ? 0 === e || e === BigInt(0)
            ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}`
            : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${i}`
          : `>= ${e}${i} and <= ${r}${i}`),
      new tb.ERR_OUT_OF_RANGE("value", n, t))
    );
  }
  tv(i, "offset"),
    (void 0 === n[i] || void 0 === n[i + o]) && tA(i, n.length - (o + 1));
}
function tv(t, e) {
  if ("number" != typeof t) throw new tb.ERR_INVALID_ARG_TYPE(e, "number", t);
}
function tA(t, e, r) {
  if (Math.floor(t) !== t)
    throw (tv(t, r), new tb.ERR_OUT_OF_RANGE(r || "offset", "an integer", t));
  if (e < 0) throw new tb.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new tb.ERR_OUT_OF_RANGE(
    r || "offset",
    `>= ${r ? 1 : 0} and <= ${e}`,
    t
  );
}
tE(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (t) {
    return t
      ? `${t} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  },
  RangeError
),
  tE(
    "ERR_INVALID_ARG_TYPE",
    function (t, e) {
      return `The "${t}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ),
  tE(
    "ERR_OUT_OF_RANGE",
    function (t, e, r) {
      let n = `The value of "${t}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 4294967296
          ? (i = tw(String(r)))
          : "bigint" == typeof r &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = tw(i)),
            (i += "n")),
        (n += ` It must be ${e}. Received ${i}`)
      );
    },
    RangeError
  );
const tT = /[^+/0-9A-Za-z-_]/g;
function tO(t, e) {
  let r;
  e = e || 1 / 0;
  let n = t.length,
    i = null,
    o = [];
  for (let s = 0; s < n; ++s) {
    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
      if (!i) {
        if (r > 56319 || s + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
        continue;
      }
      r = (((i - 55296) << 10) | (r - 56320)) + 65536;
    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
    if (((i = null), r < 128)) {
      if ((e -= 1) < 0) break;
      o.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0) break;
      o.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0) break;
      o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else if (r < 1114112) {
      if ((e -= 4) < 0) break;
      o.push(
        (r >> 18) | 240,
        ((r >> 12) & 63) | 128,
        ((r >> 6) & 63) | 128,
        (63 & r) | 128
      );
    } else throw Error("Invalid code point");
  }
  return o;
}
function tB(t) {
  return (function (t) {
    var e,
      r,
      n = (function (t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      })(t),
      i = n[0],
      o = n[1],
      s = new J(((i + o) * 3) / 4 - o),
      a = 0,
      u = o > 0 ? i - 4 : i;
    for (r = 0; r < u; r += 4)
      (e =
        (K[t.charCodeAt(r)] << 18) |
        (K[t.charCodeAt(r + 1)] << 12) |
        (K[t.charCodeAt(r + 2)] << 6) |
        K[t.charCodeAt(r + 3)]),
        (s[a++] = (e >> 16) & 255),
        (s[a++] = (e >> 8) & 255),
        (s[a++] = 255 & e);
    return (
      2 === o &&
        ((e = (K[t.charCodeAt(r)] << 2) | (K[t.charCodeAt(r + 1)] >> 4)),
        (s[a++] = 255 & e)),
      1 === o &&
        ((e =
          (K[t.charCodeAt(r)] << 10) |
          (K[t.charCodeAt(r + 1)] << 4) |
          (K[t.charCodeAt(r + 2)] >> 2)),
        (s[a++] = (e >> 8) & 255),
        (s[a++] = 255 & e)),
      s
    );
  })(
    (function (t) {
      if ((t = (t = t.split("=")[0]).trim().replace(tT, "")).length < 2)
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t)
  );
}
function tR(t, e, r, n) {
  let i;
  for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
    e[i + r] = t[i];
  return i;
}
function tx(t, e) {
  return (
    t instanceof e ||
    (null != t &&
      null != t.constructor &&
      null != t.constructor.name &&
      t.constructor.name === e.name)
  );
}
const tP = (function () {
  let t = "0123456789abcdef",
    e = Array(256);
  for (let r = 0; r < 16; ++r) {
    let n = 16 * r;
    for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
  }
  return e;
})();
function tC(t) {
  return "undefined" == typeof BigInt ? tU : t;
}
function tU() {
  throw Error("BigInt not supported");
}
function tL(t) {
  return k.isPlainObject(t) || k.isArray(t);
}
function tI(t) {
  return k.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function tN(t, e, r) {
  return t
    ? t
        .concat(e)
        .map(function (t, e) {
          return (t = tI(t)), !r && e ? "[" + t + "]" : t;
        })
        .join(r ? "." : "")
    : e;
}
const tj = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
var tM = function (t, e, r) {
  if (!k.isObject(t)) throw TypeError("target must be an object");
  (e = e || new FormData()),
    (r = k.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (t, e) {
        return !k.isUndefined(e[t]);
      }
    ));
  let n = r.metaTokens,
    i = r.visitor || l,
    o = r.dots,
    s = r.indexes,
    a = r.Blob || ("undefined" != typeof Blob && Blob),
    u = a && k.isSpecCompliantForm(e);
  if (!k.isFunction(i)) throw TypeError("visitor must be a function");
  function f(t) {
    if (null === t) return "";
    if (k.isDate(t)) return t.toISOString();
    if (!u && k.isBlob(t))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(t) || k.isTypedArray(t)
      ? u && "function" == typeof Blob
        ? new Blob([t])
        : Q.from(t)
      : t;
  }
  function l(t, r, i) {
    let a = t;
    if (t && !i && "object" == typeof t) {
      if (k.endsWith(r, "{}"))
        (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
      else {
        var u;
        if (
          (k.isArray(t) && ((u = t), k.isArray(u) && !u.some(tL))) ||
          ((k.isFileList(t) || k.endsWith(r, "[]")) && (a = k.toArray(t)))
        )
          return (
            (r = tI(r)),
            a.forEach(function (t, n) {
              k.isUndefined(t) ||
                null === t ||
                e.append(
                  !0 === s ? tN([r], n, o) : null === s ? r : r + "[]",
                  f(t)
                );
            }),
            !1
          );
      }
    }
    return !!tL(t) || (e.append(tN(i, r, o), f(t)), !1);
  }
  let c = [],
    h = Object.assign(tj, {
      defaultVisitor: l,
      convertValue: f,
      isVisitable: tL,
    });
  if (!k.isObject(t)) throw TypeError("data must be an object");
  return (
    !(function t(r, n) {
      if (!k.isUndefined(r)) {
        if (-1 !== c.indexOf(r))
          throw Error("Circular reference detected in " + n.join("."));
        c.push(r),
          k.forEach(r, function (r, o) {
            let s =
              !(k.isUndefined(r) || null === r) &&
              i.call(e, r, k.isString(o) ? o.trim() : o, n, h);
            !0 === s && t(r, n ? n.concat(o) : [o]);
          }),
          c.pop();
      }
    })(t),
    e
  );
};
function t_(t) {
  let e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\x00",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
    return e[t];
  });
}
function tF(t, e) {
  (this._pairs = []), t && tM(t, this, e);
}
const tk = tF.prototype;
function tD(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function tH(t, e, r) {
  let n;
  if (!e) return t;
  let i = (r && r.encode) || tD,
    o = r && r.serialize;
  if (
    (n = o
      ? o(e, r)
      : k.isURLSearchParams(e)
      ? e.toString()
      : new tF(e, r).toString(i))
  ) {
    let e = t.indexOf("#");
    -1 !== e && (t = t.slice(0, e)),
      (t += (-1 === t.indexOf("?") ? "?" : "&") + n);
  }
  return t;
}
(tk.append = function (t, e) {
  this._pairs.push([t, e]);
}),
  (tk.toString = function (t) {
    let e = t
      ? function (e) {
          return t.call(this, e, t_);
        }
      : t_;
    return this._pairs
      .map(function (t) {
        return e(t[0]) + "=" + e(t[1]);
      }, "")
      .join("&");
  });
var t$ = class {
    constructor() {
      this.handlers = [];
    }
    use(t, e, r) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: e,
          synchronous: !!r && r.synchronous,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      k.forEach(this.handlers, function (e) {
        null !== e && t(e);
      });
    }
  },
  tz = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  tq = "undefined" != typeof URLSearchParams ? URLSearchParams : tF,
  tK = "undefined" != typeof FormData ? FormData : null,
  tJ = "undefined" != typeof Blob ? Blob : null;
const tG =
    ("undefined" == typeof navigator ||
      ("ReactNative" !== (t = navigator.product) &&
        "NativeScript" !== t &&
        "NS" !== t)) &&
    "undefined" != typeof window &&
    "undefined" != typeof document,
  tV =
    "undefined" != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    "function" == typeof self.importScripts;
var tW = {
    classes: { URLSearchParams: tq, FormData: tK, Blob: tJ },
    isStandardBrowserEnv: tG,
    isStandardBrowserWebWorkerEnv: tV,
  },
  tX = function (t) {
    if (k.isFormData(t) && k.isFunction(t.entries)) {
      let e = {};
      return (
        k.forEachEntry(t, (t, r) => {
          !(function t(e, r, n, i) {
            let o = e[i++],
              s = Number.isFinite(+o),
              a = i >= e.length;
            if (((o = !o && k.isArray(n) ? n.length : o), a))
              return k.hasOwnProp(n, o) ? (n[o] = [n[o], r]) : (n[o] = r), !s;
            (n[o] && k.isObject(n[o])) || (n[o] = []);
            let u = t(e, r, n[o], i);
            return (
              u &&
                k.isArray(n[o]) &&
                (n[o] = (function (t) {
                  let e, r;
                  let n = {},
                    i = Object.keys(t),
                    o = i.length;
                  for (e = 0; e < o; e++) n[(r = i[e])] = t[r];
                  return n;
                })(n[o])),
              !s
            );
          })(
            k
              .matchAll(/\w+|\[(\w*)]/g, t)
              .map((t) => ("[]" === t[0] ? "" : t[1] || t[0])),
            r,
            e,
            0
          );
        }),
        e
      );
    }
    return null;
  };
const tY = { "Content-Type": void 0 },
  tQ = {
    transitional: tz,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, e) {
        let r;
        let n = e.getContentType() || "",
          i = n.indexOf("application/json") > -1,
          o = k.isObject(t);
        o && k.isHTMLForm(t) && (t = new FormData(t));
        let s = k.isFormData(t);
        if (s) return i && i ? JSON.stringify(tX(t)) : t;
        if (
          k.isArrayBuffer(t) ||
          k.isBuffer(t) ||
          k.isStream(t) ||
          k.isFile(t) ||
          k.isBlob(t)
        )
          return t;
        if (k.isArrayBufferView(t)) return t.buffer;
        if (k.isURLSearchParams(t))
          return (
            e.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1) {
            var a, u;
            return ((a = t),
            (u = this.formSerializer),
            tM(
              a,
              new tW.classes.URLSearchParams(),
              Object.assign(
                {
                  visitor: function (t, e, r, n) {
                    return tW.isNode && k.isBuffer(t)
                      ? (this.append(e, t.toString("base64")), !1)
                      : n.defaultVisitor.apply(this, arguments);
                  },
                },
                u
              )
            )).toString();
          }
          if ((r = k.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
            let e = this.env && this.env.FormData;
            return tM(
              r ? { "files[]": t } : t,
              e && new e(),
              this.formSerializer
            );
          }
        }
        return o || i
          ? (e.setContentType("application/json", !1),
            (function (t, e, r) {
              if (k.isString(t))
                try {
                  return (0, JSON.parse)(t), k.trim(t);
                } catch (t) {
                  if ("SyntaxError" !== t.name) throw t;
                }
              return (0, JSON.stringify)(t);
            })(t))
          : t;
      },
    ],
    transformResponse: [
      function (t) {
        let e = this.transitional || tQ.transitional,
          r = e && e.forcedJSONParsing,
          n = "json" === this.responseType;
        if (t && k.isString(t) && ((r && !this.responseType) || n)) {
          let r = e && e.silentJSONParsing;
          try {
            return JSON.parse(t);
          } catch (t) {
            if (!r && n) {
              if ("SyntaxError" === t.name)
                throw D.from(t, D.ERR_BAD_RESPONSE, this, null, this.response);
              throw t;
            }
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: tW.classes.FormData, Blob: tW.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
k.forEach(["delete", "get", "head"], function (t) {
  tQ.headers[t] = {};
}),
  k.forEach(["post", "put", "patch"], function (t) {
    tQ.headers[t] = k.merge(tY);
  });
const tZ = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]);
var t0 = (t) => {
  let e, r, n;
  let i = {};
  return (
    t &&
      t.split("\n").forEach(function (t) {
        (n = t.indexOf(":")),
          (e = t.substring(0, n).trim().toLowerCase()),
          (r = t.substring(n + 1).trim()),
          !e ||
            (i[e] && tZ[e]) ||
            ("set-cookie" === e
              ? i[e]
                ? i[e].push(r)
                : (i[e] = [r])
              : (i[e] = i[e] ? i[e] + ", " + r : r));
      }),
    i
  );
};
const t1 = Symbol("internals");
function t2(t) {
  return t && String(t).trim().toLowerCase();
}
function t6(t) {
  return !1 === t || null == t ? t : k.isArray(t) ? t.map(t6) : String(t);
}
const t4 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function t5(t, e, r, n, i) {
  if (k.isFunction(n)) return n.call(this, e, r);
  if ((i && (e = r), k.isString(e))) {
    if (k.isString(n)) return -1 !== e.indexOf(n);
    if (k.isRegExp(n)) return n.test(e);
  }
}
class t8 {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, r) {
    let n = this;
    function i(t, e, r) {
      let i = t2(e);
      if (!i) throw Error("header name must be a non-empty string");
      let o = k.findKey(n, i);
      (o && void 0 !== n[o] && !0 !== r && (void 0 !== r || !1 === n[o])) ||
        (n[o || e] = t6(t));
    }
    let o = (t, e) => k.forEach(t, (t, r) => i(t, r, e));
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? o(t, e)
        : k.isString(t) && (t = t.trim()) && !t4(t)
        ? o(t0(t), e)
        : null != t && i(e, t, r),
      this
    );
  }
  get(t, e) {
    if ((t = t2(t))) {
      let r = k.findKey(this, t);
      if (r) {
        let t = this[r];
        if (!e) return t;
        if (!0 === e)
          return (function (t) {
            let e;
            let r = Object.create(null),
              n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            for (; (e = n.exec(t)); ) r[e[1]] = e[2];
            return r;
          })(t);
        if (k.isFunction(e)) return e.call(this, t, r);
        if (k.isRegExp(e)) return e.exec(t);
        throw TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if ((t = t2(t))) {
      let r = k.findKey(this, t);
      return !!(r && void 0 !== this[r] && (!e || t5(this, this[r], r, e)));
    }
    return !1;
  }
  delete(t, e) {
    let r = this,
      n = !1;
    function i(t) {
      if ((t = t2(t))) {
        let i = k.findKey(r, t);
        i && (!e || t5(r, r[i], i, e)) && (delete r[i], (n = !0));
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    let e = Object.keys(this),
      r = e.length,
      n = !1;
    for (; r--; ) {
      let i = e[r];
      (!t || t5(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
    }
    return n;
  }
  normalize(t) {
    let e = this,
      r = {};
    return (
      k.forEach(this, (n, i) => {
        let o = k.findKey(r, i);
        if (o) {
          (e[o] = t6(n)), delete e[i];
          return;
        }
        let s = t
          ? i
              .trim()
              .toLowerCase()
              .replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r)
          : String(i).trim();
        s !== i && delete e[i], (e[s] = t6(n)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    let e = Object.create(null);
    return (
      k.forEach(this, (r, n) => {
        null != r && !1 !== r && (e[n] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      e
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, e]) => t + ": " + e)
      .join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    let r = new this(t);
    return e.forEach((t) => r.set(t)), r;
  }
  static accessor(t) {
    let e = (this[t1] = this[t1] = { accessors: {} }),
      r = e.accessors,
      n = this.prototype;
    function i(t) {
      let e = t2(t);
      r[e] ||
        (!(function (t, e) {
          let r = k.toCamelCase(" " + e);
          ["get", "set", "has"].forEach((n) => {
            Object.defineProperty(t, n + r, {
              value: function (t, r, i) {
                return this[n].call(this, e, t, r, i);
              },
              configurable: !0,
            });
          });
        })(n, t),
        (r[e] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
function t3(t, e) {
  let r = this || tQ,
    n = e || r,
    i = t8.from(n.headers),
    o = n.data;
  return (
    k.forEach(t, function (t) {
      o = t.call(r, o, i.normalize(), e ? e.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function t7(t) {
  return !!(t && t.__CANCEL__);
}
function t9(t, e, r) {
  D.call(this, null == t ? "canceled" : t, D.ERR_CANCELED, e, r),
    (this.name = "CanceledError");
}
t8.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]),
  k.freezeMethods(t8.prototype),
  k.freezeMethods(t8),
  k.inherits(t9, D, { __CANCEL__: !0 });
var et = tW.isStandardBrowserEnv
  ? {
      write: function (t, e, r, n, i, o) {
        let s = [];
        s.push(t + "=" + encodeURIComponent(e)),
          k.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
          k.isString(n) && s.push("path=" + n),
          k.isString(i) && s.push("domain=" + i),
          !0 === o && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read: function (t) {
        let e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove: function (t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
function ee(t, e) {
  return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    ? e
      ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
      : t
    : e;
}
var er = tW.isStandardBrowserEnv
    ? (function () {
        let t;
        let e = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a");
        function n(t) {
          let n = t;
          return (
            e && (r.setAttribute("href", n), (n = r.href)),
            r.setAttribute("href", n),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, "") : "",
              hash: r.hash ? r.hash.replace(/^#/, "") : "",
              hostname: r.hostname,
              port: r.port,
              pathname:
                "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
            }
          );
        }
        return (
          (t = n(window.location.href)),
          function (e) {
            let r = k.isString(e) ? n(e) : e;
            return r.protocol === t.protocol && r.host === t.host;
          }
        );
      })()
    : function () {
        return !0;
      },
  en = function (t, e) {
    let r;
    t = t || 10;
    let n = Array(t),
      i = Array(t),
      o = 0,
      s = 0;
    return (
      (e = void 0 !== e ? e : 1e3),
      function (a) {
        let u = Date.now(),
          f = i[s];
        r || (r = u), (n[o] = a), (i[o] = u);
        let l = s,
          c = 0;
        for (; l !== o; ) (c += n[l++]), (l %= t);
        if (((o = (o + 1) % t) === s && (s = (s + 1) % t), u - r < e)) return;
        let h = f && u - f;
        return h ? Math.round((1e3 * c) / h) : void 0;
      }
    );
  };
function ei(t, e) {
  let r = 0,
    n = en(50, 250);
  return (i) => {
    let o = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      a = o - r,
      u = n(a),
      f = o <= s;
    r = o;
    let l = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && f ? (s - o) / u : void 0,
      event: i,
    };
    (l[e ? "download" : "upload"] = !0), t(l);
  };
}
const eo = "undefined" != typeof XMLHttpRequest;
var es =
  eo &&
  function (t) {
    return new Promise(function (e, r) {
      let n,
        i = t.data,
        o = t8.from(t.headers).normalize(),
        s = t.responseType;
      function a() {
        t.cancelToken && t.cancelToken.unsubscribe(n),
          t.signal && t.signal.removeEventListener("abort", n);
      }
      k.isFormData(i) &&
        (tW.isStandardBrowserEnv || tW.isStandardBrowserWebWorkerEnv
          ? o.setContentType(!1)
          : o.setContentType("multipart/form-data;", !1));
      let u = new XMLHttpRequest();
      if (t.auth) {
        let e = t.auth.username || "",
          r = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : "";
        o.set("Authorization", "Basic " + btoa(e + ":" + r));
      }
      let f = ee(t.baseURL, t.url);
      function l() {
        if (!u) return;
        let n = t8.from(
            "getAllResponseHeaders" in u && u.getAllResponseHeaders()
          ),
          i = s && "text" !== s && "json" !== s ? u.response : u.responseText,
          o = {
            data: i,
            status: u.status,
            statusText: u.statusText,
            headers: n,
            config: t,
            request: u,
          };
        (function (t, e, r) {
          let n = r.config.validateStatus;
          !r.status || !n || n(r.status)
            ? t(r)
            : e(
                new D(
                  "Request failed with status code " + r.status,
                  [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
                    Math.floor(r.status / 100) - 4
                  ],
                  r.config,
                  r.request,
                  r
                )
              );
        })(
          function (t) {
            e(t), a();
          },
          function (t) {
            r(t), a();
          },
          o
        ),
          (u = null);
      }
      if (
        (u.open(
          t.method.toUpperCase(),
          tH(f, t.params, t.paramsSerializer),
          !0
        ),
        (u.timeout = t.timeout),
        "onloadend" in u
          ? (u.onloadend = l)
          : (u.onreadystatechange = function () {
              u &&
                4 === u.readyState &&
                (0 !== u.status ||
                  (u.responseURL && 0 === u.responseURL.indexOf("file:"))) &&
                setTimeout(l);
            }),
        (u.onabort = function () {
          u && (r(new D("Request aborted", D.ECONNABORTED, t, u)), (u = null));
        }),
        (u.onerror = function () {
          r(new D("Network Error", D.ERR_NETWORK, t, u)), (u = null);
        }),
        (u.ontimeout = function () {
          let e = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded",
            n = t.transitional || tz;
          t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
            r(
              new D(
                e,
                n.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                t,
                u
              )
            ),
            (u = null);
        }),
        tW.isStandardBrowserEnv)
      ) {
        let e =
          (t.withCredentials || er(f)) &&
          t.xsrfCookieName &&
          et.read(t.xsrfCookieName);
        e && o.set(t.xsrfHeaderName, e);
      }
      void 0 === i && o.setContentType(null),
        "setRequestHeader" in u &&
          k.forEach(o.toJSON(), function (t, e) {
            u.setRequestHeader(e, t);
          }),
        k.isUndefined(t.withCredentials) ||
          (u.withCredentials = !!t.withCredentials),
        s && "json" !== s && (u.responseType = t.responseType),
        "function" == typeof t.onDownloadProgress &&
          u.addEventListener("progress", ei(t.onDownloadProgress, !0)),
        "function" == typeof t.onUploadProgress &&
          u.upload &&
          u.upload.addEventListener("progress", ei(t.onUploadProgress)),
        (t.cancelToken || t.signal) &&
          ((n = (e) => {
            u &&
              (r(!e || e.type ? new t9(null, t, u) : e), u.abort(), (u = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(n),
          t.signal &&
            (t.signal.aborted ? n() : t.signal.addEventListener("abort", n)));
      let c = (function (t) {
        let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (e && e[1]) || "";
      })(f);
      if (c && -1 === tW.protocols.indexOf(c)) {
        r(new D("Unsupported protocol " + c + ":", D.ERR_BAD_REQUEST, t));
        return;
      }
      u.send(i || null);
    });
  };
k.forEach({ http: null, xhr: es }, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch (t) {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
var ea = {};
function eu(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new t9(null, t);
}
function ef(t) {
  eu(t),
    (t.headers = t8.from(t.headers)),
    (t.data = t3.call(t, t.transformRequest)),
    -1 !== ["post", "put", "patch"].indexOf(t.method) &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1);
  let e = ea.getAdapter(t.adapter || tQ.adapter);
  return e(t).then(
    function (e) {
      return (
        eu(t),
        (e.data = t3.call(t, t.transformResponse, e)),
        (e.headers = t8.from(e.headers)),
        e
      );
    },
    function (e) {
      return (
        !t7(e) &&
          (eu(t),
          e &&
            e.response &&
            ((e.response.data = t3.call(t, t.transformResponse, e.response)),
            (e.response.headers = t8.from(e.response.headers)))),
        Promise.reject(e)
      );
    }
  );
}
const el = (t) => (t instanceof t8 ? t.toJSON() : t);
function ec(t, e) {
  e = e || {};
  let r = {};
  function n(t, e, r) {
    return k.isPlainObject(t) && k.isPlainObject(e)
      ? k.merge.call({ caseless: r }, t, e)
      : k.isPlainObject(e)
      ? k.merge({}, e)
      : k.isArray(e)
      ? e.slice()
      : e;
  }
  function i(t, e, r) {
    return k.isUndefined(e)
      ? k.isUndefined(t)
        ? void 0
        : n(void 0, t, r)
      : n(t, e, r);
  }
  function o(t, e) {
    if (!k.isUndefined(e)) return n(void 0, e);
  }
  function s(t, e) {
    return k.isUndefined(e)
      ? k.isUndefined(t)
        ? void 0
        : n(void 0, t)
      : n(void 0, e);
  }
  function a(r, i, o) {
    return o in e ? n(r, i) : o in t ? n(void 0, r) : void 0;
  }
  let u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (t, e) => i(el(t), el(e), !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
      let o = u[n] || i,
        s = o(t[n], e[n], n);
      (k.isUndefined(s) && o !== a) || (r[n] = s);
    }),
    r
  );
}
const eh = "1.4.0",
  ep = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    ep[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const ed = {};
ep.transitional = function (t, e, r) {
  function n(t, e) {
    return (
      "[Axios v" +
      eh +
      "] Transitional option '" +
      t +
      "'" +
      e +
      (r ? ". " + r : "")
    );
  }
  return (r, i, o) => {
    if (!1 === t)
      throw new D(
        n(i, " has been removed" + (e ? " in " + e : "")),
        D.ERR_DEPRECATED
      );
    return (
      e &&
        !ed[i] &&
        ((ed[i] = !0),
        console.warn(
          n(
            i,
            " has been deprecated since v" +
              e +
              " and will be removed in the near future"
          )
        )),
      !t || t(r, i, o)
    );
  };
};
var eg = { validators: ep };
const ey = eg.validators;
class em {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new t$(), response: new t$() });
  }
  request(t, e) {
    let r, n, i;
    "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
      (e = ec(this.defaults, e));
    let { transitional: o, paramsSerializer: s, headers: a } = e;
    void 0 !== o &&
      eg.assertOptions(
        o,
        {
          silentJSONParsing: ey.transitional(ey.boolean),
          forcedJSONParsing: ey.transitional(ey.boolean),
          clarifyTimeoutError: ey.transitional(ey.boolean),
        },
        !1
      ),
      null != s &&
        (k.isFunction(s)
          ? (e.paramsSerializer = { serialize: s })
          : eg.assertOptions(
              s,
              { encode: ey.function, serialize: ey.function },
              !0
            )),
      (e.method = (e.method || this.defaults.method || "get").toLowerCase()),
      (r = a && k.merge(a.common, a[e.method])) &&
        k.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (t) => {
            delete a[t];
          }
        ),
      (e.headers = t8.concat(r, a));
    let u = [],
      f = !0;
    this.interceptors.request.forEach(function (t) {
      ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) &&
        ((f = f && t.synchronous), u.unshift(t.fulfilled, t.rejected));
    });
    let l = [];
    this.interceptors.response.forEach(function (t) {
      l.push(t.fulfilled, t.rejected);
    });
    let c = 0;
    if (!f) {
      let t = [ef.bind(this), void 0];
      for (
        t.unshift.apply(t, u),
          t.push.apply(t, l),
          i = t.length,
          n = Promise.resolve(e);
        c < i;

      )
        n = n.then(t[c++], t[c++]);
      return n;
    }
    i = u.length;
    let h = e;
    for (c = 0; c < i; ) {
      let t = u[c++],
        e = u[c++];
      try {
        h = t(h);
      } catch (t) {
        e.call(this, t);
        break;
      }
    }
    try {
      n = ef.call(this, h);
    } catch (t) {
      return Promise.reject(t);
    }
    for (c = 0, i = l.length; c < i; ) n = n.then(l[c++], l[c++]);
    return n;
  }
  getUri(t) {
    t = ec(this.defaults, t);
    let e = ee(t.baseURL, t.url);
    return tH(e, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  em.prototype[t] = function (e, r) {
    return this.request(
      ec(r || {}, { method: t, url: e, data: (r || {}).data })
    );
  };
}),
  k.forEach(["post", "put", "patch"], function (t) {
    function e(e) {
      return function (r, n, i) {
        return this.request(
          ec(i || {}, {
            method: t,
            headers: e ? { "Content-Type": "multipart/form-data" } : {},
            url: r,
            data: n,
          })
        );
      };
    }
    (em.prototype[t] = e()), (em.prototype[t + "Form"] = e(!0));
  });
class eb {
  constructor(t) {
    let e;
    if ("function" != typeof t) throw TypeError("executor must be a function.");
    this.promise = new Promise(function (t) {
      e = t;
    });
    let r = this;
    this.promise.then((t) => {
      if (!r._listeners) return;
      let e = r._listeners.length;
      for (; e-- > 0; ) r._listeners[e](t);
      r._listeners = null;
    }),
      (this.promise.then = (t) => {
        let e;
        let n = new Promise((t) => {
          r.subscribe(t), (e = t);
        }).then(t);
        return (
          (n.cancel = function () {
            r.unsubscribe(e);
          }),
          n
        );
      }),
      t(function (t, n, i) {
        r.reason || ((r.reason = new t9(t, n, i)), e(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    let e = this._listeners.indexOf(t);
    -1 !== e && this._listeners.splice(e, 1);
  }
  static source() {
    let t;
    let e = new eb(function (e) {
      t = e;
    });
    return { token: e, cancel: t };
  }
}
const eE = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(eE).forEach(([t, e]) => {
  eE[e] = t;
});
const ew = (function t(e) {
  let r = new em(e),
    n = a(em.prototype.request, r);
  return (
    k.extend(n, em.prototype, r, { allOwnKeys: !0 }),
    k.extend(n, r, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return t(ec(e, r));
    }),
    n
  );
})(tQ);
(ew.Axios = em),
  (ew.CanceledError = t9),
  (ew.CancelToken = eb),
  (ew.isCancel = t7),
  (ew.VERSION = eh),
  (ew.toFormData = tM),
  (ew.AxiosError = D),
  (ew.Cancel = ew.CanceledError),
  (ew.all = function (t) {
    return Promise.all(t);
  }),
  (ew.spread = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  }),
  (ew.isAxiosError = function (t) {
    return k.isObject(t) && !0 === t.isAxiosError;
  }),
  (ew.mergeConfig = ec),
  (ew.AxiosHeaders = t8),
  (ew.formToJSON = (t) => tX(k.isHTMLForm(t) ? new FormData(t) : t)),
  (ew.HttpStatusCode = eE),
  (ew.default = ew);
const {
  Axios: eS,
  AxiosError: ev,
  CanceledError: eA,
  isCancel: eT,
  CancelToken: eO,
  VERSION: eB,
  all: eR,
  Cancel: ex,
  isAxiosError: eP,
  spread: eC,
  toFormData: eU,
  AxiosHeaders: eL,
  HttpStatusCode: eI,
  formToJSON: eN,
  mergeConfig: ej,
} = ew;
function eM(t) {
  return ew({
    url: "https://64a6ad22096b3f0fcc8043cf.mockapi.io/products",
    method: "GET",
    param: { name: t || void 0 },
  });
}
class e_ {
  constructor(t, e, r, n, i, o, s, a, u) {
    (this.id = t),
      (this.name = e),
      (this.price = r),
      (this.screen = n),
      (this.backCamera = i),
      (this.frontCamera = o),
      (this.img = s),
      (this.desc = a),
      (this.type = u);
  }
}
function eF(t) {
  return document.querySelector(t);
}
function ek(t) {
  let e = t.reduce((t, e, r) => {
    let n = new e_(
      e.id,
      e.name,
      e.price,
      e.screen,
      e.backCamera,
      e.frontCamera,
      e.img,
      e.desc,
      e.type
    );
    return (
      t +
      `
    <tr>
    <td>${r + 1}</td>
    <td>${n.name}</td>
    <td>${n.price}</td>
    <td>${n.desc} <br> Camerasau: ${n.backCamera} <br> Camera trước: ${
        n.frontCamera
      } <br> Kích thước màn hình: ${n.screen} </td>
    <td>
    <img src="${n.img}" width="100px" height="100px"></td>
    <td>${n.type}</td>
    <td>
    <button class="btn btn-primary" data-id="${
      n.id
    }" data-type="xem">Xem</button>
    </td>
    <td>
    <button class="btn btn-primary deletePro" data-id="${
      n.id
    }" data-type="xoa" >Xoá</button>
    </td>
    </tr>`
    );
  }, " ");
  document.getElementById("tblDanhSachSP").innerHTML = e;
}
function eD() {
  eM()
    .then((t) => {
      ek(t.data);
    })
    .catch((t) => {
      console.log(t);
    });
}
async function eH() {
  let t = eG();
  if ((console.log("product"), t)) {
    try {
      await ew({
        url: "https://64a6ad22096b3f0fcc8043cf.mockapi.io/products",
        method: "POST",
        data: t,
      }),
        eD();
    } catch (t) {
      console.log(t);
    }
    $("#myModal").modal("hide");
  }
}
async function e$(t) {
  try {
    await ew({
      url: `https://64a6ad22096b3f0fcc8043cf.mockapi.io/products/${t}`,
      method: "DELETE",
    }),
      eD();
  } catch (t) {
    console.log(t);
  }
}
async function ez(t) {
  eV(),
    $("#myModal").modal("show"),
    (eF(".modal-title").innerHTML = "C\xe2̣p nh\xe2̣t sản ph\xe2̉m"),
    (eF(".modal-footer").innerHTML = `
  <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
    <button class="btn btn-success" id="upDate" data-id="${t}">C\xe2̣p nh\xe2̣t</button>
      `);
  try {
    let e = await (
      await ew({
        url: `https://64a6ad22096b3f0fcc8043cf.mockapi.io/products/${t}`,
        method: "GET",
      })
    ).data;
    (eF("#TenSP").value = e.name),
      (eF("#GiaSP").value = e.price),
      (eF("#ManHinhSP").value = e.screen),
      (eF("#CameraBSP").value = e.backCamera),
      (eF("#CameraASP").value = e.frontCamera),
      (eF("#HinhSP").value = e.img),
      (eF("#ThongtinSP").value = e.desc),
      (eF("#loaiSP").value = e.type);
  } catch (t) {
    console.log(t);
  }
  eF("#upDate").onclick = (t) => {
    eq(t.target.getAttribute("data-id"));
  };
}
async function eq(t) {
  let e = eG();
  if (!e) {
    console.log("vào l\xf4̃i");
    return;
  }
  try {
    await ew({
      url: `https://64a6ad22096b3f0fcc8043cf.mockapi.io/products/${t}`,
      method: "PUT",
      data: e,
    }),
      eD(),
      $("#myModal").modal("hide");
  } catch (t) {
    console.log(t);
  }
}
function eK(t) {
  return !!t.trim();
}
function eJ(t) {
  return !isNaN(t);
}
function eG() {
  let t = !0;
  console.log("Vào l\xf4̃i của validate");
  let e = eF("#TenSP").value,
    r = eF("#GiaSP").value,
    n = eF("#ManHinhSP").value,
    i = eF("#CameraBSP").value,
    o = eF("#CameraASP").value,
    s = eF("#HinhSP").value,
    a = eF("#ThongtinSP").value,
    u = eF("#loaiSP").value;
  return (eK(e)
    ? (eF("#spanName").innerHTML = "")
    : ((t = !1), (eF("#spanName").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(r)
    ? eJ(r)
      ? (eF("#spanPrice").innerHTML = "")
      : ((t = !1), (eF("#spanPrice").innerHTML = "Nh\xe2̣p vào m\xf4̣t s\xf4́"))
    : ((t = !1), (eF("#spanPrice").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(n)
    ? eJ(n)
      ? (eF("#spanScreen").innerHTML = "")
      : ((t = !1), (eF("#spanScreen").innerHTML = "Nh\xe2̣p vào m\xf4̣t s\xf4́"))
    : ((t = !1),
      (eF("#spanScreen").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(i)
    ? eJ(i)
      ? (eF("#spanBSP").innerHTML = "")
      : ((t = !1), (eF("#spanBSP").innerHTML = "Nh\xe2̣p vào m\xf4̣t s\xf4́"))
    : ((t = !1), (eF("#spanBSP").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(o)
    ? eJ(o)
      ? (eF("#spanASP").innerHTML = "")
      : ((t = !1), (eF("#spanASP").innerHTML = "Nh\xe2̣p vào m\xf4̣t s\xf4́"))
    : ((t = !1), (eF("#spanASP").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(s)
    ? (eF("#spanHinh").innerHTML = "")
    : ((t = !1), (eF("#spanHinh").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(a)
    ? (eF("#spanInfor").innerHTML = "")
    : ((t = !1), (eF("#spanInfor").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  eK(u)
    ? (eF("#spanType").innerHTML = "")
    : ((t = !1), (eF("#spanType").innerHTML = "Kh\xf4ng được đ\xeả tr\xf4́ng")),
  t)
    ? {
        name: eF("#TenSP").value,
        price: +eF("#GiaSP").value,
        screen: +eF("#ManHinhSP").value,
        backCamera: +eF("#CameraBSP").value,
        frontCamera: +eF("#CameraASP").value,
        img: eF("#HinhSP").value,
        desc: eF("#ThongtinSP").value,
        type: eF("#loaiSP").value,
      }
    : t;
}
function eV() {
  (eF("#spanName").innerHTML = ""),
    (eF("#spanPrice").innerHTML = ""),
    (eF("#spanScreen").innerHTML = ""),
    (eF("#spanBSP").innerHTML = ""),
    (eF("#spanASP").innerHTML = ""),
    (eF("#spanHinh").innerHTML = ""),
    (eF("#spanInfor").innerHTML = ""),
    (eF("#spanType").innerHTML = ""),
    (eF("#TenSP").value = ""),
    (eF("#GiaSP").value = ""),
    (eF("#ManHinhSP").value = ""),
    (eF("#CameraBSP").value = ""),
    (eF("#CameraASP").value = ""),
    (eF("#HinhSP").value = ""),
    (eF("#ThongtinSP").value = ""),
    (eF("#loaiSP").value = "");
}
eD(),
  (eF("#tblDanhSachSP").onclick = (t) => {
    let e = t.target,
      r = e.getAttribute("data-id"),
      n = e.getAttribute("data-type");
    "xoa" === n ? e$(r) : "xem" === n && ez(r);
  }),
  (eF("#btnThemSP").onclick = () => {
    eV(),
      (eF(".modal-title").innerHTML = "Th\xeam sản ph\xe2̉m "),
      (eF(".modal-footer").innerHTML = `
  <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
    <button class="btn btn-success" id="add">Th\xeam</button>
      `),
      (eF("#add").onclick = eH);
  }),
  (eF("#basic-addon2").onclick = () => {
    let t = eF("#txtSearch").value;
    t = t.trim().toLowerCase();
    try {
      eM().then((e) => {
        let r = e.data.filter((e) => e.name.trim().toLowerCase().includes(t));
        ek(r);
      });
    } catch (t) {
      console.log(t);
    }
  }),
  (eF("#filterByPrice").onchange = (t) => {
    function e(t, e) {
      return t.price - e.price;
    }
    function r(t, e) {
      return e.price - t.price;
    }
    let n = [];
    try {
      eM().then((i) => {
        let o = i.data;
        (n =
          "high" === t.target.value
            ? o.sort(r)
            : "low" === t.target.value
            ? o.sort(e)
            : o),
          ek(n);
      });
    } catch (t) {
      console.log(t);
    }
  });
//# sourceMappingURL=admin.21f8ec1f.js.map

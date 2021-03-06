'use strict';

var babelHelpers = {};
babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers;


var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

/**
 * config module.
 * @module core/config
 */
var catsnakeConfig = {
  defaultName: 'A random catsnake',
  requestsPerSecond: 15
};

/**
 * csModClientid module.
 * @module core/csModClientid
 * @return {string} - Returns a new random, unique clientid
 */

// This function simply generates a random time based client token.
// Clients will use this token to authenticate themselves, so this should be
// saved in the application if you plan to resubscribe to channels after reloading
// the catsnake client
var csModClientid = function csModClientid() {
  var d = new Date().getTime();
  var uuid = 'client-xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};

var msgpack_min = __commonjs(function (module, exports, global) {
!function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : babelHelpers.typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var r;r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, r.msgpack = t();
  }
}(function () {
  return function t(r, e, n) {
    function o(f, u) {
      if (!e[f]) {
        if (!r[f]) {
          var a = "function" == typeof require && require;if (!u && a) return a(f, !0);if (i) return i(f, !0);var s = new Error("Cannot find module '" + f + "'");throw s.code = "MODULE_NOT_FOUND", s;
        }var c = e[f] = { exports: {} };r[f][0].call(c.exports, function (t) {
          var e = r[f][1][t];return o(e ? e : t);
        }, c, c.exports, t, r, e, n);
      }return e[f].exports;
    }for (var i = "function" == typeof require && require, f = 0; f < n.length; f++) {
      o(n[f]);
    }return o;
  }({ 1: [function (t, r, e) {
      e.encode = t("./encode").encode, e.decode = t("./decode").decode, e.Encoder = t("./encoder").Encoder, e.Decoder = t("./decoder").Decoder, e.createCodec = t("./ext").createCodec, e.codec = t("./codec").codec;
    }, { "./codec": 3, "./decode": 6, "./decoder": 7, "./encode": 9, "./encoder": 10, "./ext": 13 }], 2: [function (t, r, e) {
      function n(t, r) {
        for (var e = this, n = r || 0, o = t.length, i = 0; o > i; i++) {
          var f = t.charCodeAt(i);128 > f ? e[n++] = f : 2048 > f ? (e[n++] = 192 | f >> 6, e[n++] = 128 | 63 & f) : (e[n++] = 224 | f >> 12, e[n++] = 128 | f >> 6 & 63, e[n++] = 128 | 63 & f);
        }return n - r;
      }function o(t, r) {
        var e = this,
            n = t - 0 || 0;r || (r = e.length);var o = r - t;o > s && (o = s);for (var i = []; r > n;) {
          for (var f = new Array(o), u = 0; o > u && r > n;) {
            var a = e[n++];a = 128 > a ? a : 224 > a ? (63 & a) << 6 | 63 & e[n++] : (63 & a) << 12 | (63 & e[n++]) << 6 | 63 & e[n++], f[u++] = a;
          }o > u && (f = f.slice(0, u)), i.push(String.fromCharCode.apply("", f));
        }return i.length > 1 ? i.join("") : i.length ? i.shift() : "";
      }function i(t) {
        var r = 0;return Array.prototype.forEach.call(t, function (t) {
          var e = t.charCodeAt(0);r += 128 > e ? 1 : 2048 > e ? 2 : 3;
        }), r;
      }function f(t, r, e, n) {
        var o;e || (e = 0), n || 0 === n || (n = this.length), r || (r = 0);var i = n - e;if (t === this && r > e && n > r) for (o = i - 1; o >= 0; o--) {
          t[o + r] = this[o + e];
        } else for (o = 0; i > o; o++) {
          t[o + r] = this[o + e];
        }return i;
      }function u(t, r) {
        for (var e = 7; e >= 0; e--) {
          this[r + e] = 255 & t, t /= 256;
        }
      }function a(t, r) {
        if (t > 0) return u.call(this, t, r);t++;for (var e = 7; e >= 0; e--) {
          this[r + e] = 255 & -t ^ 255, t /= 256;
        }
      }var s = 8192;e.writeString = n, e.readString = o, e.byteLength = i, e.copy = f, e.writeUint64BE = u, e.writeInt64BE = a;
    }, {}], 3: [function (t, r, e) {
      e.codec = { preset: t("./ext-preset").preset };
    }, { "./ext-preset": 12 }], 4: [function (t, r, e) {
      e.BUFFER_SHORTAGE = new Error("BUFFER_SHORTAGE");
    }, {}], 5: [function (t, r, e) {
      (function (r) {
        function n(t) {
          return this instanceof n ? (this.options = t || i, void (this.codec = this.options.codec || o)) : new n(t);
        }e.DecodeBuffer = n;var o = t("./ext-preset").preset,
            i = {};n.prototype.push = Array.prototype.push, n.prototype.read = Array.prototype.shift, n.prototype.append = function (t) {
          var e = this.offset ? this.buffer.slice(this.offset) : this.buffer;this.buffer = e ? r.concat([e, t]) : t, this.offset = 0;
        };
      }).call(this, t("buffer").Buffer);
    }, { "./ext-preset": 12, buffer: 22 }], 6: [function (t, r, e) {
      function n(t, r) {
        var e = new o(r);return e.append(t), n(e);
      }e.decode = n;var o = t("./decode-buffer").DecodeBuffer,
          n = t("./read-core").decode;
    }, { "./decode-buffer": 5, "./read-core": 15 }], 7: [function (t, r, e) {
      function n(t) {
        return this instanceof n ? void i.call(this, t) : new n(t);
      }e.Decoder = n;var o = t("event-lite"),
          i = t("./decode-buffer").DecodeBuffer,
          f = t("./read-core").decodeAsync;n.prototype = new i(), o.mixin(n.prototype), n.prototype.decode = function (t) {
        t && this.append(t), f(this);
      }, n.prototype.push = function (t) {
        this.emit("data", t);
      }, n.prototype.end = function (t) {
        this.decode(t), this.emit("end");
      };
    }, { "./decode-buffer": 5, "./read-core": 15, "event-lite": 25 }], 8: [function (t, r, e) {
      (function (r) {
        function n(t) {
          return this instanceof n ? (this.options = t || u, void (this.codec = this.options.codec || o)) : new n(t);
        }e.EncodeBuffer = n;var o = t("./ext-preset").preset,
            i = 2048,
            f = 65536,
            u = {};n.prototype.push = function (t) {
          var r = this.buffers || (this.buffers = []);r.push(t);
        }, n.prototype.read = function () {
          this.flush();var t = this.buffers;if (t) {
            var e = t.length > 1 ? r.concat(t) : t[0];return t.length = 0, e;
          }
        }, n.prototype.flush = function () {
          this.start < this.offset && (this.push(this.buffer.slice(this.start, this.offset)), this.start = this.offset);
        }, n.prototype.reserve = function (t) {
          if (!this.buffer) return this.alloc(t);var r = this.buffer.length;this.offset + t < r || (this.offset && this.flush(), this.alloc(Math.max(t, Math.min(2 * r, f))));
        }, n.prototype.alloc = function (t) {
          this.buffer = new r(t > i ? t : i), this.start = 0, this.offset = 0;
        }, n.prototype.send = function (t) {
          var r = this.offset + t.length;this.buffer && r < this.buffer.length ? (t.copy(this.buffer, this.offset), this.offset = r) : (this.flush(), this.push(t));
        };
      }).call(this, t("buffer").Buffer);
    }, { "./ext-preset": 12, buffer: 22 }], 9: [function (t, r, e) {
      function n(t, r) {
        var e = new o(r);return n(e, t), e.read();
      }e.encode = n;var n = t("./write-core").encode,
          o = t("./encode-buffer").EncodeBuffer;
    }, { "./encode-buffer": 8, "./write-core": 18 }], 10: [function (t, r, e) {
      function n(t) {
        return this instanceof n ? void f.call(this, t) : new n(t);
      }e.Encoder = n;var o = t("event-lite"),
          i = t("./write-core").encode,
          f = t("./encode-buffer").EncodeBuffer;n.prototype = new f(), o.mixin(n.prototype), n.prototype.encode = function (t) {
        i(this, t), this.emit("data", this.read());
      }, n.prototype.end = function (t) {
        arguments.length && this.encode(t), this.flush(), this.emit("end");
      };
    }, { "./encode-buffer": 8, "./write-core": 18, "event-lite": 25 }], 11: [function (t, r, e) {
      function n(t, r) {
        return this instanceof n ? (this.buffer = t, void (this.type = r)) : new n(t, r);
      }e.ExtBuffer = n;
    }, {}], 12: [function (t, r, e) {
      (function (r) {
        function n() {
          y.addExtPacker(14, Error, [a, g]), y.addExtPacker(1, EvalError, [a, g]), y.addExtPacker(2, RangeError, [a, g]), y.addExtPacker(3, ReferenceError, [a, g]), y.addExtPacker(4, SyntaxError, [a, g]), y.addExtPacker(5, TypeError, [a, g]), y.addExtPacker(6, URIError, [a, g]), y.addExtUnpacker(14, [v, s(Error)]), y.addExtUnpacker(1, [v, s(EvalError)]), y.addExtUnpacker(2, [v, s(RangeError)]), y.addExtUnpacker(3, [v, s(ReferenceError)]), y.addExtUnpacker(4, [v, s(SyntaxError)]), y.addExtUnpacker(5, [v, s(TypeError)]), y.addExtUnpacker(6, [v, s(URIError)]), y.addExtPacker(10, RegExp, [f, g]), y.addExtPacker(11, Boolean, [i, g]), y.addExtPacker(12, String, [i, g]), y.addExtPacker(13, Date, [Number, g]), y.addExtPacker(15, Number, [i, g]), y.addExtUnpacker(10, [v, u]), y.addExtUnpacker(11, [v, c(Boolean)]), y.addExtUnpacker(12, [v, c(String)]), y.addExtUnpacker(13, [v, c(Date)]), y.addExtUnpacker(15, [v, c(Number)]), "undefined" != typeof Uint8Array && (y.addExtPacker(17, Int8Array, o), y.addExtPacker(18, Uint8Array, o), y.addExtPacker(19, Int16Array, h), y.addExtPacker(20, Uint16Array, h), y.addExtPacker(21, Int32Array, h), y.addExtPacker(22, Uint32Array, h), y.addExtPacker(23, Float32Array, h), y.addExtUnpacker(17, c(Int8Array)), y.addExtUnpacker(18, c(Uint8Array)), y.addExtUnpacker(19, [l, c(Int16Array)]), y.addExtUnpacker(20, [l, c(Uint16Array)]), y.addExtUnpacker(21, [l, c(Int32Array)]), y.addExtUnpacker(22, [l, c(Uint32Array)]), y.addExtUnpacker(23, [l, c(Float32Array)]), "undefined" != typeof Float64Array && (y.addExtPacker(24, Float64Array, h), y.addExtUnpacker(24, [l, c(Float64Array)])), "undefined" != typeof Uint8ClampedArray && (y.addExtPacker(25, Uint8ClampedArray, o), y.addExtUnpacker(25, c(Uint8ClampedArray))), y.addExtPacker(26, ArrayBuffer, p), y.addExtPacker(29, DataView, h), y.addExtUnpacker(26, l), y.addExtUnpacker(29, [l, c(DataView)]));
        }function o(t) {
          return new r(t);
        }function i(t) {
          return t.valueOf();
        }function f(t) {
          t = RegExp.prototype.toString.call(t).split("/"), t.shift();var r = [t.pop()];return r.unshift(t.join("/")), r;
        }function u(t) {
          return RegExp.apply(null, t);
        }function a(t) {
          var r = {};for (var e in E) {
            r[e] = t[e];
          }return r;
        }function s(t) {
          return function (r) {
            var e = new t();for (var n in E) {
              e[n] = r[n];
            }return e;
          };
        }function c(t) {
          return function (r) {
            return new t(r);
          };
        }function h(t) {
          return new r(new Uint8Array(t.buffer));
        }function p(t) {
          return new r(new Uint8Array(t));
        }function l(t) {
          return new Uint8Array(t).buffer;
        }var d = t("./ext").Ext,
            y = e.preset = new d(),
            g = t("./encode").encode,
            v = t("./decode").decode,
            E = { name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1 };n();
      }).call(this, t("buffer").Buffer);
    }, { "./decode": 6, "./encode": 9, "./ext": 13, buffer: 22 }], 13: [function (t, r, e) {
      function n() {
        return this instanceof n ? (this.extPackers = {}, void (this.extUnpackers = [])) : new n();
      }function o() {
        return new n();
      }function i(t) {
        function r(t, r) {
          return r(t);
        }return t = t.slice(), function (e) {
          return t.reduce(r, e);
        };
      }e.Ext = n, e.createCodec = o;var f = t("./ext-buffer").ExtBuffer,
          u = t("./is-array");n.prototype.addExtPacker = function (t, r, e) {
        function n(r) {
          var n = e(r);return new f(n, t);
        }u(e) && (e = i(e));var o = r.name;if (o && "Object" !== o) this.extPackers[o] = n;else {
          var a = this.extEncoderList || (this.extEncoderList = []);a.unshift([r, n]);
        }
      }, n.prototype.addExtUnpacker = function (t, r) {
        this.extUnpackers[t] = u(r) ? i(r) : r;
      }, n.prototype.getExtPacker = function (t) {
        var r = t.constructor,
            e = r && r.name && this.extPackers[r.name];if (e) return e;var n = this.extEncoderList;if (n) for (var o = n.length, i = 0; o > i; i++) {
          var f = n[i];if (r === f[0]) return f[1];
        }
      }, n.prototype.getExtUnpacker = function (t) {
        function r(r) {
          return new f(r, t);
        }return this.extUnpackers[t] || r;
      };
    }, { "./ext-buffer": 11, "./is-array": 14 }], 14: [function (t, r, e) {
      r.exports = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
    }, {}], 15: [function (t, r, e) {
      function n(t) {
        var r = i(t),
            e = f[r];if (!e) throw new Error("Invalid type: " + (r ? "0x" + r.toString(16) : r));return e(t);
      }function o(t) {
        for (; t.offset < t.buffer.length;) {
          var r,
              e = t.offset;try {
            r = n(t);
          } catch (o) {
            if (o !== u) throw o;t.offset = e;break;
          }t.push(r);
        }
      }e.decode = n, e.decodeAsync = o;var i = t("./read-format").format.uint8,
          f = t("./read-token").token,
          u = t("./common").BUFFER_SHORTAGE;
    }, { "./common": 4, "./read-format": 16, "./read-token": 17 }], 16: [function (t, r, e) {
      (function (r) {
        function n(t, r) {
          var e,
              n = {},
              o = new Array(r),
              i = new Array(r);for (e = 0; r > e; e++) {
            o[e] = E(t), i[e] = E(t);
          }for (e = 0; r > e; e++) {
            n[o[e]] = i[e];
          }return n;
        }function o(t, r) {
          for (var e = new Array(r), n = 0; r > n; n++) {
            e[n] = E(t);
          }return e;
        }function i(t, e) {
          var n = t.offset,
              o = t.offset = n + e,
              i = t.buffer;if (o > i.length) throw w;return x || !r.isBuffer(i) ? v.readString.call(i, n, o) : i.toString("utf-8", n, o);
        }function f(t, r) {
          var e = t.offset,
              n = t.offset = e + r;if (n > t.buffer.length) throw w;return y.call(t.buffer, e, n);
        }function u(t, r) {
          var e = t.offset,
              n = t.offset = e + r + 1;if (n > t.buffer.length) throw w;var o = t.buffer[e],
              i = t.codec.getExtUnpacker(o);if (!i) throw new Error("Invalid ext type: " + (o ? "0x" + o.toString(16) : o));var f = y.call(t.buffer, e + 1, n);return i(f);
        }function a(t) {
          var r = t.buffer;if (t.offset >= r.length) throw w;return r[t.offset++];
        }function s(t) {
          var r = t.buffer;if (t.offset + 2 > r.length) throw w;return r[t.offset++] << 8 | r[t.offset++];
        }function c(t, r) {
          return function (e) {
            var n = e.offset,
                o = e.offset = n + t;if (o > e.buffer.length) throw w;return r.call(e.buffer, n, U);
          };
        }function h(t, r) {
          var e = A.call(this, t, r),
              n = A.call(this, t + 4, r);return e ? 4294967296 * e + n : n;
        }function p(t, r) {
          var e = b.call(this, t, r),
              n = A.call(this, t + 4, r);return e ? 4294967296 * e + n : n;
        }function l(t) {
          return this.readFloatBE ? this.readFloatBE(t) : g.read(this, t, !1, 23, 4);
        }function d(t) {
          return this.readDoubleBE ? this.readDoubleBE(t) : g.read(this, t, !1, 52, 8);
        }function y(t, e) {
          var n = this.slice || Array.prototype.slice,
              o = n.call(this, t, e);return r.isBuffer(o) || (o = r(o)), o;
        }e.format = { map: n, array: o, str: i, bin: f, ext: u, uint8: a, uint16: s, uint32: c(4, r.prototype.readUInt32BE), uint64: c(8, h), int8: c(1, r.prototype.readInt8), int16: c(2, r.prototype.readInt16BE), int32: c(4, r.prototype.readInt32BE), int64: c(8, p), float32: c(4, l), float64: c(8, d) };var g = t("ieee754"),
            v = t("./buffer-lite"),
            E = t("./read-core").decode,
            w = t("./common").BUFFER_SHORTAGE,
            b = r.prototype.readInt32BE,
            A = r.prototype.readUInt32BE,
            x = "TYPED_ARRAY_SUPPORT" in r,
            U = !0;
      }).call(this, t("buffer").Buffer);
    }, { "./buffer-lite": 2, "./common": 4, "./read-core": 15, buffer: 22, ieee754: 26 }], 17: [function (t, r, e) {
      function n() {
        var t;for (t = 0; 127 >= t; t++) {
          u[t] = o(t);
        }for (t = 128; 143 >= t; t++) {
          u[t] = f(t - 128, a.map);
        }for (t = 144; 159 >= t; t++) {
          u[t] = f(t - 144, a.array);
        }for (t = 160; 191 >= t; t++) {
          u[t] = f(t - 160, a.str);
        }for (u[192] = o(null), u[193] = null, u[194] = o(!1), u[195] = o(!0), u[196] = i(a.uint8, a.bin), u[197] = i(a.uint16, a.bin), u[198] = i(a.uint32, a.bin), u[199] = i(a.uint8, a.ext), u[200] = i(a.uint16, a.ext), u[201] = i(a.uint32, a.ext), u[202] = a.float32, u[203] = a.float64, u[204] = a.uint8, u[205] = a.uint16, u[206] = a.uint32, u[207] = a.uint64, u[208] = a.int8, u[209] = a.int16, u[210] = a.int32, u[211] = a.int64, u[212] = f(1, a.ext), u[213] = f(2, a.ext), u[214] = f(4, a.ext), u[215] = f(8, a.ext), u[216] = f(16, a.ext), u[217] = i(a.uint8, a.str), u[218] = i(a.uint16, a.str), u[219] = i(a.uint32, a.str), u[220] = i(a.uint16, a.array), u[221] = i(a.uint32, a.array), u[222] = i(a.uint16, a.map), u[223] = i(a.uint32, a.map), t = 224; 255 >= t; t++) {
          u[t] = o(t - 256);
        }
      }function o(t) {
        return function () {
          return t;
        };
      }function i(t, r) {
        return function (e) {
          var n = t(e);return r(e, n);
        };
      }function f(t, r) {
        return function (e) {
          return r(e, t);
        };
      }var u = e.token = new Array(256),
          a = t("./read-format").format;n();
    }, { "./read-format": 16 }], 18: [function (t, r, e) {
      function n(t, r) {
        var e = o[typeof r === "undefined" ? "undefined" : babelHelpers.typeof(r)];if (!e) throw new Error('Unsupported type "' + (typeof r === "undefined" ? "undefined" : babelHelpers.typeof(r)) + '": ' + r);e(t, r);
      }e.encode = n;var o = t("./write-type").type;
    }, { "./write-type": 20 }], 19: [function (t, r, e) {
      (function (r) {
        function n() {
          for (var t = 0; 255 >= t; t++) {
            c[t] = p[t];
          }y ? i() : o();
        }function o() {
          c[196] = f(196), c[197] = u(197), c[198] = a(198), c[199] = f(199), c[200] = u(200), c[201] = a(201), c[202] = s(202, 4, r.prototype.writeFloatBE), c[203] = s(203, 8, r.prototype.writeDoubleBE), c[204] = f(204), c[205] = u(205), c[206] = a(206), c[207] = s(207, 8, h.writeUint64BE), c[208] = f(208), c[209] = u(209), c[210] = a(210), c[211] = s(211, 8, h.writeUint64BE), c[217] = f(217), c[218] = u(218), c[219] = a(219), c[220] = u(220), c[221] = a(221), c[222] = u(222), c[223] = a(223);
        }function i() {
          c[196] = s(196, 1, r.prototype.writeUInt8), c[197] = s(197, 2, r.prototype.writeUInt16BE), c[198] = s(198, 4, r.prototype.writeUInt32BE), c[199] = s(199, 1, r.prototype.writeUInt8), c[200] = s(200, 2, r.prototype.writeUInt16BE), c[201] = s(201, 4, r.prototype.writeUInt32BE), c[202] = s(202, 4, r.prototype.writeFloatBE), c[203] = s(203, 8, r.prototype.writeDoubleBE), c[204] = s(204, 1, r.prototype.writeUInt8), c[205] = s(205, 2, r.prototype.writeUInt16BE), c[206] = s(206, 4, r.prototype.writeUInt32BE), c[207] = s(207, 8, h.writeUint64BE), c[208] = s(208, 1, r.prototype.writeInt8), c[209] = s(209, 2, r.prototype.writeInt16BE), c[210] = s(210, 4, r.prototype.writeInt32BE), c[211] = s(211, 8, h.writeUint64BE), c[217] = s(217, 1, r.prototype.writeUInt8), c[218] = s(218, 2, r.prototype.writeUInt16BE), c[219] = s(219, 4, r.prototype.writeUInt32BE), c[220] = s(220, 2, r.prototype.writeUInt16BE), c[221] = s(221, 4, r.prototype.writeUInt32BE), c[222] = s(222, 2, r.prototype.writeUInt16BE), c[223] = s(223, 4, r.prototype.writeUInt32BE);
        }function f(t) {
          return function (r, e) {
            r.reserve(2);var n = r.buffer,
                o = r.offset;n[o++] = t, n[o++] = e, r.offset = o;
          };
        }function u(t) {
          return function (r, e) {
            r.reserve(3);var n = r.buffer,
                o = r.offset;n[o++] = t, n[o++] = e >>> 8, n[o++] = e, r.offset = o;
          };
        }function a(t) {
          return function (r, e) {
            r.reserve(5);var n = r.buffer,
                o = r.offset;n[o++] = t, n[o++] = e >>> 24, n[o++] = e >>> 16, n[o++] = e >>> 8, n[o++] = e, r.offset = o;
          };
        }function s(t, r, e) {
          return function (n, o) {
            n.reserve(r + 1), n.buffer[n.offset++] = t, e.call(n.buffer, o, n.offset, l), n.offset += r;
          };
        }var c = e.token = new Array(256),
            h = t("./buffer-lite"),
            p = t("./write-uint8").uint8,
            l = !0,
            d = "TYPED_ARRAY_SUPPORT" in r,
            y = d && !r.TYPED_ARRAY_SUPPORT;n();
      }).call(this, t("buffer").Buffer);
    }, { "./buffer-lite": 2, "./write-uint8": 21, buffer: 22 }], 20: [function (t, r, e) {
      (function (r) {
        function n(t, r) {
          var e = r ? 195 : 194;l[e](t, r);
        }function o(t, r) {
          var e,
              n = 0 | r;return r !== n ? (e = 203, void l[e](t, r)) : (e = n >= -32 && 127 >= n ? 255 & n : n >= 0 ? 255 >= n ? 204 : 65535 >= n ? 205 : 206 : n >= -128 ? 208 : n >= -32768 ? 209 : 210, void l[e](t, n));
        }function i(t, r) {
          var e = r.length,
              n = 5 + 3 * e;t.reserve(n);var o = 32 > e ? 1 : 255 >= e ? 2 : 65535 >= e ? 3 : 5,
              i = t.offset + o;e = p.writeString.call(t.buffer, r, i);var f = 32 > e ? 1 : 255 >= e ? 2 : 65535 >= e ? 3 : 5;if (o !== f) {
            var u = t.offset + f,
                a = i + e;v ? p.copy.call(t.buffer, t.buffer, u, i, a) : t.buffer.copy(t.buffer, u, i, a);
          }var s = 1 === f ? 160 + e : 3 >= f ? 215 + f : 219;l[s](t, e), t.offset += e;
        }function f(t, e) {
          if (E(e)) return a(t, e);if (null === e) return u(t, e);if (r.isBuffer(e)) return s(t, e);var n = t.codec.getExtPacker(e);return n && (e = n(e)), e instanceof g ? c(t, e) : void h(t, e);
        }function u(t, r) {
          var e = 192;l[e](t, r);
        }function a(t, r) {
          var e = r.length,
              n = 16 > e ? 144 + e : 65535 >= e ? 220 : 221;l[n](t, e);for (var o = 0; e > o; o++) {
            d(t, r[o]);
          }
        }function s(t, r) {
          var e = r.length,
              n = 255 > e ? 196 : 65535 >= e ? 197 : 198;l[n](t, e), t.send(r);
        }function c(t, r) {
          var e = r.buffer,
              n = e.length,
              o = w[n] || (255 > n ? 199 : 65535 >= n ? 200 : 201);l[o](t, n), y[r.type](t), t.send(e);
        }function h(t, r) {
          var e = Object.keys(r),
              n = e.length,
              o = 16 > n ? 128 + n : 65535 >= n ? 222 : 223;l[o](t, n), e.forEach(function (e) {
            d(t, e), d(t, r[e]);
          });
        }e.type = { "boolean": n, "function": u, number: o, object: f, string: i, symbol: u, undefined: u };var p = t("./buffer-lite"),
            l = t("./write-token").token,
            d = t("./write-core").encode,
            y = t("./write-uint8").uint8,
            g = t("./ext-buffer").ExtBuffer,
            v = "TYPED_ARRAY_SUPPORT" in r,
            E = t("./is-array"),
            w = [];w[1] = 212, w[2] = 213, w[4] = 214, w[8] = 215, w[16] = 216;
      }).call(this, t("buffer").Buffer);
    }, { "./buffer-lite": 2, "./ext-buffer": 11, "./is-array": 14, "./write-core": 18, "./write-token": 19, "./write-uint8": 21, buffer: 22 }], 21: [function (t, r, e) {
      function n(t) {
        return function (r) {
          r.reserve(1), r.buffer[r.offset++] = t;
        };
      }for (var o = e.uint8 = new Array(256), i = 0; 255 >= i; i++) {
        o[i] = n(i);
      }
    }, {}], 22: [function (t, r, e) {
      (function (r) {
        "use strict";
        function n() {
          try {
            var t = new Uint8Array(1);return t.foo = function () {
              return 42;
            }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
          } catch (r) {
            return !1;
          }
        }function o() {
          return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }function i(t) {
          return this instanceof i ? (i.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof t ? f(this, t) : "string" == typeof t ? u(this, t, arguments.length > 1 ? arguments[1] : "utf8") : a(this, t)) : arguments.length > 1 ? new i(t, arguments[1]) : new i(t);
        }function f(t, r) {
          if (t = y(t, 0 > r ? 0 : 0 | g(r)), !i.TYPED_ARRAY_SUPPORT) for (var e = 0; r > e; e++) {
            t[e] = 0;
          }return t;
        }function u(t, r, e) {
          "string" == typeof e && "" !== e || (e = "utf8");var n = 0 | E(r, e);return t = y(t, n), t.write(r, e), t;
        }function a(t, r) {
          if (i.isBuffer(r)) return s(t, r);if (K(r)) return c(t, r);if (null == r) throw new TypeError("must start with number, buffer, array or string");if ("undefined" != typeof ArrayBuffer) {
            if (r.buffer instanceof ArrayBuffer) return h(t, r);if (r instanceof ArrayBuffer) return p(t, r);
          }return r.length ? l(t, r) : d(t, r);
        }function s(t, r) {
          var e = 0 | g(r.length);return t = y(t, e), r.copy(t, 0, 0, e), t;
        }function c(t, r) {
          var e = 0 | g(r.length);t = y(t, e);for (var n = 0; e > n; n += 1) {
            t[n] = 255 & r[n];
          }return t;
        }function h(t, r) {
          var e = 0 | g(r.length);t = y(t, e);for (var n = 0; e > n; n += 1) {
            t[n] = 255 & r[n];
          }return t;
        }function p(t, r) {
          return r.byteLength, i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r), t.__proto__ = i.prototype) : t = h(t, new Uint8Array(r)), t;
        }function l(t, r) {
          var e = 0 | g(r.length);t = y(t, e);for (var n = 0; e > n; n += 1) {
            t[n] = 255 & r[n];
          }return t;
        }function d(t, r) {
          var e,
              n = 0;"Buffer" === r.type && K(r.data) && (e = r.data, n = 0 | g(e.length)), t = y(t, n);for (var o = 0; n > o; o += 1) {
            t[o] = 255 & e[o];
          }return t;
        }function y(t, r) {
          i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r), t.__proto__ = i.prototype) : t.length = r;var e = 0 !== r && r <= i.poolSize >>> 1;return e && (t.parent = Q), t;
        }function g(t) {
          if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");return 0 | t;
        }function v(t, r) {
          if (!(this instanceof v)) return new v(t, r);var e = new i(t, r);return delete e.parent, e;
        }function E(t, r) {
          "string" != typeof t && (t = "" + t);var e = t.length;if (0 === e) return 0;for (var n = !1;;) {
            switch (r) {case "ascii":case "binary":case "raw":case "raws":
                return e;case "utf8":case "utf-8":
                return z(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                return 2 * e;case "hex":
                return e >>> 1;case "base64":
                return V(t).length;default:
                if (n) return z(t).length;r = ("" + r).toLowerCase(), n = !0;}
          }
        }function w(t, r, e) {
          var n = !1;if (r = 0 | r, e = void 0 === e || e === 1 / 0 ? this.length : 0 | e, t || (t = "utf8"), 0 > r && (r = 0), e > this.length && (e = this.length), r >= e) return "";for (;;) {
            switch (t) {case "hex":
                return T(this, r, e);case "utf8":case "utf-8":
                return m(this, r, e);case "ascii":
                return k(this, r, e);case "binary":
                return S(this, r, e);case "base64":
                return B(this, r, e);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                return I(this, r, e);default:
                if (n) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), n = !0;}
          }
        }function b(t, r, e, n) {
          e = Number(e) || 0;var o = t.length - e;n ? (n = Number(n), n > o && (n = o)) : n = o;var i = r.length;if (i % 2 !== 0) throw new Error("Invalid hex string");n > i / 2 && (n = i / 2);for (var f = 0; n > f; f++) {
            var u = parseInt(r.substr(2 * f, 2), 16);if (isNaN(u)) throw new Error("Invalid hex string");t[e + f] = u;
          }return f;
        }function A(t, r, e, n) {
          return X(z(r, t.length - e), t, e, n);
        }function x(t, r, e, n) {
          return X(G(r), t, e, n);
        }function U(t, r, e, n) {
          return x(t, r, e, n);
        }function P(t, r, e, n) {
          return X(V(r), t, e, n);
        }function R(t, r, e, n) {
          return X(H(r, t.length - e), t, e, n);
        }function B(t, r, e) {
          return 0 === r && e === t.length ? J.fromByteArray(t) : J.fromByteArray(t.slice(r, e));
        }function m(t, r, e) {
          e = Math.min(t.length, e);for (var n = [], o = r; e > o;) {
            var i = t[o],
                f = null,
                u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;if (e >= o + u) {
              var a, s, c, h;switch (u) {case 1:
                  128 > i && (f = i);break;case 2:
                  a = t[o + 1], 128 === (192 & a) && (h = (31 & i) << 6 | 63 & a, h > 127 && (f = h));break;case 3:
                  a = t[o + 1], s = t[o + 2], 128 === (192 & a) && 128 === (192 & s) && (h = (15 & i) << 12 | (63 & a) << 6 | 63 & s, h > 2047 && (55296 > h || h > 57343) && (f = h));break;case 4:
                  a = t[o + 1], s = t[o + 2], c = t[o + 3], 128 === (192 & a) && 128 === (192 & s) && 128 === (192 & c) && (h = (15 & i) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & c, h > 65535 && 1114112 > h && (f = h));}
            }null === f ? (f = 65533, u = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), o += u;
          }return _(n);
        }function _(t) {
          var r = t.length;if (W >= r) return String.fromCharCode.apply(String, t);for (var e = "", n = 0; r > n;) {
            e += String.fromCharCode.apply(String, t.slice(n, n += W));
          }return e;
        }function k(t, r, e) {
          var n = "";e = Math.min(t.length, e);for (var o = r; e > o; o++) {
            n += String.fromCharCode(127 & t[o]);
          }return n;
        }function S(t, r, e) {
          var n = "";e = Math.min(t.length, e);for (var o = r; e > o; o++) {
            n += String.fromCharCode(t[o]);
          }return n;
        }function T(t, r, e) {
          var n = t.length;(!r || 0 > r) && (r = 0), (!e || 0 > e || e > n) && (e = n);for (var o = "", i = r; e > i; i++) {
            o += q(t[i]);
          }return o;
        }function I(t, r, e) {
          for (var n = t.slice(r, e), o = "", i = 0; i < n.length; i += 2) {
            o += String.fromCharCode(n[i] + 256 * n[i + 1]);
          }return o;
        }function Y(t, r, e) {
          if (t % 1 !== 0 || 0 > t) throw new RangeError("offset is not uint");if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
        }function D(t, r, e, n, o, f) {
          if (!i.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");if (r > o || f > r) throw new RangeError("value is out of bounds");if (e + n > t.length) throw new RangeError("index out of range");
        }function O(t, r, e, n) {
          0 > r && (r = 65535 + r + 1);for (var o = 0, i = Math.min(t.length - e, 2); i > o; o++) {
            t[e + o] = (r & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
          }
        }function C(t, r, e, n) {
          0 > r && (r = 4294967295 + r + 1);for (var o = 0, i = Math.min(t.length - e, 4); i > o; o++) {
            t[e + o] = r >>> 8 * (n ? o : 3 - o) & 255;
          }
        }function M(t, r, e, n, o, i) {
          if (e + n > t.length) throw new RangeError("index out of range");if (0 > e) throw new RangeError("index out of range");
        }function L(t, r, e, n, o) {
          return o || M(t, r, e, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(t, r, e, n, 23, 4), e + 4;
        }function F(t, r, e, n, o) {
          return o || M(t, r, e, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(t, r, e, n, 52, 8), e + 8;
        }function N(t) {
          if (t = j(t).replace($, ""), t.length < 2) return "";for (; t.length % 4 !== 0;) {
            t += "=";
          }return t;
        }function j(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }function q(t) {
          return 16 > t ? "0" + t.toString(16) : t.toString(16);
        }function z(t, r) {
          r = r || 1 / 0;for (var e, n = t.length, o = null, i = [], f = 0; n > f; f++) {
            if (e = t.charCodeAt(f), e > 55295 && 57344 > e) {
              if (!o) {
                if (e > 56319) {
                  (r -= 3) > -1 && i.push(239, 191, 189);continue;
                }if (f + 1 === n) {
                  (r -= 3) > -1 && i.push(239, 191, 189);continue;
                }o = e;continue;
              }if (56320 > e) {
                (r -= 3) > -1 && i.push(239, 191, 189), o = e;continue;
              }e = (o - 55296 << 10 | e - 56320) + 65536;
            } else o && (r -= 3) > -1 && i.push(239, 191, 189);if (o = null, 128 > e) {
              if ((r -= 1) < 0) break;i.push(e);
            } else if (2048 > e) {
              if ((r -= 2) < 0) break;i.push(e >> 6 | 192, 63 & e | 128);
            } else if (65536 > e) {
              if ((r -= 3) < 0) break;i.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128);
            } else {
              if (!(1114112 > e)) throw new Error("Invalid code point");if ((r -= 4) < 0) break;i.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128);
            }
          }return i;
        }function G(t) {
          for (var r = [], e = 0; e < t.length; e++) {
            r.push(255 & t.charCodeAt(e));
          }return r;
        }function H(t, r) {
          for (var e, n, o, i = [], f = 0; f < t.length && !((r -= 2) < 0); f++) {
            e = t.charCodeAt(f), n = e >> 8, o = e % 256, i.push(o), i.push(n);
          }return i;
        }function V(t) {
          return J.toByteArray(N(t));
        }function X(t, r, e, n) {
          for (var o = 0; n > o && !(o + e >= r.length || o >= t.length); o++) {
            r[o + e] = t[o];
          }return o;
        }var J = t("base64-js"),
            Z = t("ieee754"),
            K = t("isarray");e.Buffer = i, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50, i.poolSize = 8192;var Q = {};i.TYPED_ARRAY_SUPPORT = void 0 !== r.TYPED_ARRAY_SUPPORT ? r.TYPED_ARRAY_SUPPORT : n(), i._augment = function (t) {
          return t.__proto__ = i.prototype, t;
        }, i.TYPED_ARRAY_SUPPORT ? (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, { value: null, configurable: !0 })) : (i.prototype.length = void 0, i.prototype.parent = void 0), i.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }, i.compare = function (t, r) {
          if (!i.isBuffer(t) || !i.isBuffer(r)) throw new TypeError("Arguments must be Buffers");if (t === r) return 0;for (var e = t.length, n = r.length, o = 0, f = Math.min(e, n); f > o && t[o] === r[o];) {
            ++o;
          }return o !== f && (e = t[o], n = r[o]), n > e ? -1 : e > n ? 1 : 0;
        }, i.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "raw":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return !0;default:
              return !1;}
        }, i.concat = function (t, r) {
          if (!K(t)) throw new TypeError("list argument must be an Array of Buffers.");if (0 === t.length) return new i(0);var e;if (void 0 === r) for (r = 0, e = 0; e < t.length; e++) {
            r += t[e].length;
          }var n = new i(r),
              o = 0;for (e = 0; e < t.length; e++) {
            var f = t[e];f.copy(n, o), o += f.length;
          }return n;
        }, i.byteLength = E, i.prototype._isBuffer = !0, i.prototype.toString = function () {
          var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? m(this, 0, t) : w.apply(this, arguments);
        }, i.prototype.equals = function (t) {
          if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t ? !0 : 0 === i.compare(this, t);
        }, i.prototype.inspect = function () {
          var t = "",
              r = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
        }, i.prototype.compare = function (t) {
          if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t ? 0 : i.compare(this, t);
        }, i.prototype.indexOf = function (t, r) {
          function e(t, r, e) {
            for (var n = -1, o = 0; e + o < t.length; o++) {
              if (t[e + o] === r[-1 === n ? 0 : o - n]) {
                if (-1 === n && (n = o), o - n + 1 === r.length) return e + n;
              } else n = -1;
            }return -1;
          }if (r > 2147483647 ? r = 2147483647 : -2147483648 > r && (r = -2147483648), r >>= 0, 0 === this.length) return -1;if (r >= this.length) return -1;if (0 > r && (r = Math.max(this.length + r, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, r);if (i.isBuffer(t)) return e(this, t, r);if ("number" == typeof t) return i.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, r) : e(this, [t], r);throw new TypeError("val must be string, number or Buffer");
        }, i.prototype.write = function (t, r, e, n) {
          if (void 0 === r) n = "utf8", e = this.length, r = 0;else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;else if (isFinite(r)) r = 0 | r, isFinite(e) ? (e = 0 | e, void 0 === n && (n = "utf8")) : (n = e, e = void 0);else {
            var o = n;n = r, r = 0 | e, e = o;
          }var i = this.length - r;if ((void 0 === e || e > i) && (e = i), t.length > 0 && (0 > e || 0 > r) || r > this.length) throw new RangeError("attempt to write outside buffer bounds");n || (n = "utf8");for (var f = !1;;) {
            switch (n) {case "hex":
                return b(this, t, r, e);case "utf8":case "utf-8":
                return A(this, t, r, e);case "ascii":
                return x(this, t, r, e);case "binary":
                return U(this, t, r, e);case "base64":
                return P(this, t, r, e);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                return R(this, t, r, e);default:
                if (f) throw new TypeError("Unknown encoding: " + n);n = ("" + n).toLowerCase(), f = !0;}
          }
        }, i.prototype.toJSON = function () {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };var W = 4096;i.prototype.slice = function (t, r) {
          var e = this.length;t = ~ ~t, r = void 0 === r ? e : ~ ~r, 0 > t ? (t += e, 0 > t && (t = 0)) : t > e && (t = e), 0 > r ? (r += e, 0 > r && (r = 0)) : r > e && (r = e), t > r && (r = t);var n;if (i.TYPED_ARRAY_SUPPORT) n = this.subarray(t, r), n.__proto__ = i.prototype;else {
            var o = r - t;n = new i(o, void 0);for (var f = 0; o > f; f++) {
              n[f] = this[f + t];
            }
          }return n.length && (n.parent = this.parent || this), n;
        }, i.prototype.readUIntLE = function (t, r, e) {
          t = 0 | t, r = 0 | r, e || Y(t, r, this.length);for (var n = this[t], o = 1, i = 0; ++i < r && (o *= 256);) {
            n += this[t + i] * o;
          }return n;
        }, i.prototype.readUIntBE = function (t, r, e) {
          t = 0 | t, r = 0 | r, e || Y(t, r, this.length);for (var n = this[t + --r], o = 1; r > 0 && (o *= 256);) {
            n += this[t + --r] * o;
          }return n;
        }, i.prototype.readUInt8 = function (t, r) {
          return r || Y(t, 1, this.length), this[t];
        }, i.prototype.readUInt16LE = function (t, r) {
          return r || Y(t, 2, this.length), this[t] | this[t + 1] << 8;
        }, i.prototype.readUInt16BE = function (t, r) {
          return r || Y(t, 2, this.length), this[t] << 8 | this[t + 1];
        }, i.prototype.readUInt32LE = function (t, r) {
          return r || Y(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
        }, i.prototype.readUInt32BE = function (t, r) {
          return r || Y(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
        }, i.prototype.readIntLE = function (t, r, e) {
          t = 0 | t, r = 0 | r, e || Y(t, r, this.length);for (var n = this[t], o = 1, i = 0; ++i < r && (o *= 256);) {
            n += this[t + i] * o;
          }return o *= 128, n >= o && (n -= Math.pow(2, 8 * r)), n;
        }, i.prototype.readIntBE = function (t, r, e) {
          t = 0 | t, r = 0 | r, e || Y(t, r, this.length);for (var n = r, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) {
            i += this[t + --n] * o;
          }return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
        }, i.prototype.readInt8 = function (t, r) {
          return r || Y(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }, i.prototype.readInt16LE = function (t, r) {
          r || Y(t, 2, this.length);var e = this[t] | this[t + 1] << 8;return 32768 & e ? 4294901760 | e : e;
        }, i.prototype.readInt16BE = function (t, r) {
          r || Y(t, 2, this.length);var e = this[t + 1] | this[t] << 8;return 32768 & e ? 4294901760 | e : e;
        }, i.prototype.readInt32LE = function (t, r) {
          return r || Y(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
        }, i.prototype.readInt32BE = function (t, r) {
          return r || Y(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
        }, i.prototype.readFloatLE = function (t, r) {
          return r || Y(t, 4, this.length), Z.read(this, t, !0, 23, 4);
        }, i.prototype.readFloatBE = function (t, r) {
          return r || Y(t, 4, this.length), Z.read(this, t, !1, 23, 4);
        }, i.prototype.readDoubleLE = function (t, r) {
          return r || Y(t, 8, this.length), Z.read(this, t, !0, 52, 8);
        }, i.prototype.readDoubleBE = function (t, r) {
          return r || Y(t, 8, this.length), Z.read(this, t, !1, 52, 8);
        }, i.prototype.writeUIntLE = function (t, r, e, n) {
          t = +t, r = 0 | r, e = 0 | e, n || D(this, t, r, e, Math.pow(2, 8 * e), 0);var o = 1,
              i = 0;for (this[r] = 255 & t; ++i < e && (o *= 256);) {
            this[r + i] = t / o & 255;
          }return r + e;
        }, i.prototype.writeUIntBE = function (t, r, e, n) {
          t = +t, r = 0 | r, e = 0 | e, n || D(this, t, r, e, Math.pow(2, 8 * e), 0);var o = e - 1,
              i = 1;for (this[r + o] = 255 & t; --o >= 0 && (i *= 256);) {
            this[r + o] = t / i & 255;
          }return r + e;
        }, i.prototype.writeUInt8 = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1;
        }, i.prototype.writeUInt16LE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : O(this, t, r, !0), r + 2;
        }, i.prototype.writeUInt16BE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : O(this, t, r, !1), r + 2;
        }, i.prototype.writeUInt32LE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : C(this, t, r, !0), r + 4;
        }, i.prototype.writeUInt32BE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : C(this, t, r, !1), r + 4;
        }, i.prototype.writeIntLE = function (t, r, e, n) {
          if (t = +t, r = 0 | r, !n) {
            var o = Math.pow(2, 8 * e - 1);D(this, t, r, e, o - 1, -o);
          }var i = 0,
              f = 1,
              u = 0 > t ? 1 : 0;for (this[r] = 255 & t; ++i < e && (f *= 256);) {
            this[r + i] = (t / f >> 0) - u & 255;
          }return r + e;
        }, i.prototype.writeIntBE = function (t, r, e, n) {
          if (t = +t, r = 0 | r, !n) {
            var o = Math.pow(2, 8 * e - 1);D(this, t, r, e, o - 1, -o);
          }var i = e - 1,
              f = 1,
              u = 0 > t ? 1 : 0;for (this[r + i] = 255 & t; --i >= 0 && (f *= 256);) {
            this[r + i] = (t / f >> 0) - u & 255;
          }return r + e;
        }, i.prototype.writeInt8 = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[r] = 255 & t, r + 1;
        }, i.prototype.writeInt16LE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : O(this, t, r, !0), r + 2;
        }, i.prototype.writeInt16BE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : O(this, t, r, !1), r + 2;
        }, i.prototype.writeInt32LE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : C(this, t, r, !0), r + 4;
        }, i.prototype.writeInt32BE = function (t, r, e) {
          return t = +t, r = 0 | r, e || D(this, t, r, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : C(this, t, r, !1), r + 4;
        }, i.prototype.writeFloatLE = function (t, r, e) {
          return L(this, t, r, !0, e);
        }, i.prototype.writeFloatBE = function (t, r, e) {
          return L(this, t, r, !1, e);
        }, i.prototype.writeDoubleLE = function (t, r, e) {
          return F(this, t, r, !0, e);
        }, i.prototype.writeDoubleBE = function (t, r, e) {
          return F(this, t, r, !1, e);
        }, i.prototype.copy = function (t, r, e, n) {
          if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && e > n && (n = e), n === e) return 0;if (0 === t.length || 0 === this.length) return 0;if (0 > r) throw new RangeError("targetStart out of bounds");if (0 > e || e >= this.length) throw new RangeError("sourceStart out of bounds");if (0 > n) throw new RangeError("sourceEnd out of bounds");n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);var o,
              f = n - e;if (this === t && r > e && n > r) for (o = f - 1; o >= 0; o--) {
            t[o + r] = this[o + e];
          } else if (1e3 > f || !i.TYPED_ARRAY_SUPPORT) for (o = 0; f > o; o++) {
            t[o + r] = this[o + e];
          } else Uint8Array.prototype.set.call(t, this.subarray(e, e + f), r);return f;
        }, i.prototype.fill = function (t, r, e) {
          if (t || (t = 0), r || (r = 0), e || (e = this.length), r > e) throw new RangeError("end < start");if (e !== r && 0 !== this.length) {
            if (0 > r || r >= this.length) throw new RangeError("start out of bounds");if (0 > e || e > this.length) throw new RangeError("end out of bounds");var n;if ("number" == typeof t) for (n = r; e > n; n++) {
              this[n] = t;
            } else {
              var o = z(t.toString()),
                  i = o.length;for (n = r; e > n; n++) {
                this[n] = o[n % i];
              }
            }return this;
          }
        };var $ = /[^+\/0-9A-Za-z-_]/g;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "base64-js": 23, ieee754: 26, isarray: 24 }], 23: [function (t, r, e) {
      !function (t) {
        "use strict";
        function r(t) {
          var r = c[t.charCodeAt(0)];return void 0 !== r ? r : -1;
        }function e(t) {
          function e(t) {
            a[c++] = t;
          }var n, o, i, f, u, a;if (t.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");var s = t.length;u = "=" === t.charAt(s - 2) ? 2 : "=" === t.charAt(s - 1) ? 1 : 0, a = new h(3 * t.length / 4 - u), i = u > 0 ? t.length - 4 : t.length;var c = 0;for (n = 0, o = 0; i > n; n += 4, o += 3) {
            f = r(t.charAt(n)) << 18 | r(t.charAt(n + 1)) << 12 | r(t.charAt(n + 2)) << 6 | r(t.charAt(n + 3)), e((16711680 & f) >> 16), e((65280 & f) >> 8), e(255 & f);
          }return 2 === u ? (f = r(t.charAt(n)) << 2 | r(t.charAt(n + 1)) >> 4, e(255 & f)) : 1 === u && (f = r(t.charAt(n)) << 10 | r(t.charAt(n + 1)) << 4 | r(t.charAt(n + 2)) >> 2, e(f >> 8 & 255), e(255 & f)), a;
        }function n(t) {
          return s[t];
        }function o(t) {
          return n(t >> 18 & 63) + n(t >> 12 & 63) + n(t >> 6 & 63) + n(63 & t);
        }function i(t, r, e) {
          for (var n, i = [], f = r; e > f; f += 3) {
            n = (t[f] << 16) + (t[f + 1] << 8) + t[f + 2], i.push(o(n));
          }return i.join("");
        }function f(t) {
          var r,
              e,
              o,
              f = t.length % 3,
              u = "",
              a = [],
              s = 16383;for (r = 0, o = t.length - f; o > r; r += s) {
            a.push(i(t, r, r + s > o ? o : r + s));
          }switch (f) {case 1:
              e = t[t.length - 1], u += n(e >> 2), u += n(e << 4 & 63), u += "==";break;case 2:
              e = (t[t.length - 2] << 8) + t[t.length - 1], u += n(e >> 10), u += n(e >> 4 & 63), u += n(e << 2 & 63), u += "=";}return a.push(u), a.join("");
        }var u,
            a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = [];for (u = 0; u < a.length; u++) {
          s[u] = a[u];
        }var c = [];for (u = 0; u < a.length; ++u) {
          c[a.charCodeAt(u)] = u;
        }c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63;var h = "undefined" != typeof Uint8Array ? Uint8Array : Array;t.toByteArray = e, t.fromByteArray = f;
      }("undefined" == typeof e ? this.base64js = {} : e);
    }, {}], 24: [function (t, r, e) {
      var n = {}.toString;r.exports = Array.isArray || function (t) {
        return "[object Array]" == n.call(t);
      };
    }, {}], 25: [function (t, r, e) {
      function n() {
        return this instanceof n ? void 0 : new n();
      }!function (t) {
        function e(t) {
          for (var r in s) {
            t[r] = s[r];
          }return t;
        }function n(t, r) {
          return u(this, t).push(r), this;
        }function o(t, r) {
          function e() {
            i.call(n, t, e), r.apply(this, arguments);
          }var n = this;return e.originalListener = r, u(n, t).push(e), n;
        }function i(t, r) {
          function e(t) {
            return t !== r && t.originalListener !== r;
          }var n,
              o = this;if (arguments.length) {
            if (r) {
              if (n = u(o, t, !0)) {
                if (n = n.filter(e), !n.length) return i.call(o, t);o[a][t] = n;
              }
            } else if (n = o[a], n && (delete n[t], !Object.keys(n).length)) return i.call(o);
          } else delete o[a];return o;
        }function f(t, r) {
          function e(t) {
            t.call(i);
          }function n(t) {
            t.call(i, r);
          }function o(t) {
            t.apply(i, s);
          }var i = this,
              f = u(i, t, !0);if (!f) return !1;var a = arguments.length;if (1 === a) f.forEach(e);else if (2 === a) f.forEach(n);else {
            var s = Array.prototype.slice.call(arguments, 1);f.forEach(o);
          }return !!f.length;
        }function u(t, r, e) {
          if (!e || t[a]) {
            var n = t[a] || (t[a] = {});return n[r] || (n[r] = []);
          }
        }"undefined" != typeof r && (r.exports = t);var a = "listeners",
            s = { on: n, once: o, off: i, emit: f };e(t.prototype), t.mixin = e;
      }(n);
    }, {}], 26: [function (t, r, e) {
      e.read = function (t, r, e, n, o) {
        var i,
            f,
            u = 8 * o - n - 1,
            a = (1 << u) - 1,
            s = a >> 1,
            c = -7,
            h = e ? o - 1 : 0,
            p = e ? -1 : 1,
            l = t[r + h];for (h += p, i = l & (1 << -c) - 1, l >>= -c, c += u; c > 0; i = 256 * i + t[r + h], h += p, c -= 8) {}for (f = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; f = 256 * f + t[r + h], h += p, c -= 8) {}if (0 === i) i = 1 - s;else {
          if (i === a) return f ? NaN : (l ? -1 : 1) * (1 / 0);f += Math.pow(2, n), i -= s;
        }return (l ? -1 : 1) * f * Math.pow(2, i - n);
      }, e.write = function (t, r, e, n, o, i) {
        var f,
            u,
            a,
            s = 8 * i - o - 1,
            c = (1 << s) - 1,
            h = c >> 1,
            p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : i - 1,
            d = n ? 1 : -1,
            y = 0 > r || 0 === r && 0 > 1 / r ? 1 : 0;for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, f = c) : (f = Math.floor(Math.log(r) / Math.LN2), r * (a = Math.pow(2, -f)) < 1 && (f--, a *= 2), r += f + h >= 1 ? p / a : p * Math.pow(2, 1 - h), r * a >= 2 && (f++, a /= 2), f + h >= c ? (u = 0, f = c) : f + h >= 1 ? (u = (r * a - 1) * Math.pow(2, o), f += h) : (u = r * Math.pow(2, h - 1) * Math.pow(2, o), f = 0)); o >= 8; t[e + l] = 255 & u, l += d, u /= 256, o -= 8) {}for (f = f << o | u, s += o; s > 0; t[e + l] = 255 & f, l += d, f /= 256, s -= 8) {}t[e + l - d] |= 128 * y;
      };
    }, {}] }, {}, [1])(1);
});
});

var msgpack = (msgpack_min && typeof msgpack_min === 'object' && 'default' in msgpack_min ? msgpack_min['default'] : msgpack_min);

/**
 * csModThrottle module.
 * @module core/csModThrottle
 * @param {object} data - the object to attempt to send
 * @param {object} callback - returns data, if acceptable.
*/

var requests = [];

// Only allow 100 messages per second.
setInterval(function () {
  requests.shift();
}, 1000 / catsnakeConfig.requestsPerSecond);

var csModThrottle = function csModThrottle(data, callback, _this) {
  if (_this.bypassThrottle) {
    callback(data);
  } else {
    if (requests.length < catsnakeConfig.requestsPerSecond) {
      requests.push(Date.now());
      callback(data);
    } else {
      console.warn('You are trying to send over ' + catsnakeConfig.requestsPerSecond + ' messages per second, check that your application is working correctly.');
    }
  }
};

/**
 * csModStringify module.
 * @module core/csModStringify
 * @param {object} data - the object to attempt to stringify
 * @callback {function} callback - Returns a stringified object
*/

// A dead simple try catch for stringifying objects. In the future we'd like this
// to somehow minify the string and make for a smaller payload
var csModStringify = function csModStringify(data, callback, _this) {
  // Client side packet throttling, enforces serverside as well.
  csModThrottle(data, function (throttledData) {
    callback(msgpack.encode(throttledData));
  }, _this);
};

/**
 * csModPublish module.
 * @module core/csModPublish
 * @param {string} channel - the channel to publish to
 * @param {object} data - the object to publish
 * @param {string} privateKey - optional private key for private channels
 * @param {this} _this - this inheratance
*/
var csModPublish = function csModPublish(channel, data, privateKey, _this) {
  // If we're connected, let's go ahead and publish our payload.
  if (_this.connected) {
    // Safely stringify our data before sending it to the server.
    _this.stringify({
      channel: channel,
      privateKey: privateKey,
      payload: data,
      metadata: {
        time: Date.now(),
        client: _this.client,
        commonName: _this.commonName,
        type: 'publish'
      }
    }, function (payload) {
      // Send off the payload to the server signifiying we're using a standard publish method.
      _this.socket.send(payload);
    });
  } else {
    // Crap, Something is wrong and we're not connected yet, let's try again later.
    console.warn('Failed to connect, attempting again in 1 second.');
    setTimeout(function () {
      // call self with the same params that were initially passed.
      _this.publish(channel, data, privateKey);
    }, 500);
  }
};

/**
 * csModInfo module.
 * @module core/csModInfo
 * @param {string} channel - the channel to look at
 * @param {object} data - additional information for request
 * @param {object} opts - additional options for subscriptions
 * @param {this} _this - this inheratance
*/
var csModInfo = function csModInfo(channel, data, opts, _this) {
  // Since options are optional, if there are no options passed, we'll drop in
  // an empty object if options are false or undefined. This will help fix top
  // level null or undefined exceptions.
  var options = opts ? opts : {};
  var privateKey = options.privateKey ? options.privateKey : false;

  // If we're connected, let's go ahead and publish our payload.
  if (_this.connected) {
    // Safely stringify our data before sending it to the server.
    _this.stringify({
      channel: channel,
      privateKey: privateKey,
      payload: data,
      metadata: {
        time: Date.now(),
        client: _this.client,
        commonName: _this.commonName,
        type: 'info'
      }
    }, function (payload) {
      // Send off the payload to the frontend that will request channel info
      _this.socket.send(payload);
    });
  } else {
    // Something is wrong and we're not connected yet, let's try again later.
    console.warn('Failed to connect, attempting again in 1 second.');
    setTimeout(function () {
      // call self with the same params that were initially passed.
      _this.info(channel, data, opts);
    }, 500);
  }
};

/**
 * csModSubscribe module.
 * @module core/csModSubscribe
 * @param {string} channel - the channel to subscribe to
 * @callback {function} callback - new messages are returned here via msg
 * @param {object} opts - additional options for subscriptions
 * @param {this} _this - this inheratance
*/
var csModSubscribe = function csModSubscribe(channel, callback, opts, _this) {
  // Since options are optional, if there are no options passed, we'll drop in
  // an empty object if options are false or undefined. This will help fix top
  // level null or undefined exceptions.
  var options = opts ? opts : {};

  var privateKey = options.privateKey ? options.privateKey : false;

  if (_this.connected) {
    // Safely stringify our data before sending it to the server.
    _this.stringify({
      channel: channel,
      privateKey: privateKey,
      noself: options.noself ? options.noself : false,
      secret: options.accessToken ? options.accessToken : false,
      private: options.private ? options.private : false,
      metadata: {
        time: Date.now(),
        client: _this.client,
        commonName: _this.commonName,
        type: 'subscribe'
      }
    }, function (payload) {
      // Send off the payload to the server letting it know we're subscribing to a channel
      _this.socket.send(payload);

      // Whenever the server has new info it will tell us here.
      _this.socket.onmessage = function (msg) {
        var decodedMsg = msgpack.decode(new Uint8Array(msg.data));
        if (decodedMsg.channel === channel) {
          callback(decodedMsg);
        }
      };

      // When we go to leave be sure to tell the server we're leaving, it would be rude not to.
      window.onbeforeunload = function () {
        _this.stringify({
          channel: channel,
          privateKey: privateKey,
          metadata: {
            time: Date.now(),
            client: _this.client,
            commonName: _this.commonName,
            type: 'unsubscribe'
          }
        }, function (payload) {
          _this.socket.send(payload);
        });
      };
    });
  } else {
    // Crap, Something is wrong and we're not connected yet, let's try again later.
    console.warn('Failed to connect, attempting again in 1 second.');
    setTimeout(function () {
      // call self with the same params that were initially passed.
      _this.subscribe(channel, callback, opts);
    }, 500);
  }
};

/**
 * Deny a client access to a channel
 * @function csModDeny
 * @param {string} channel - the channel in which to deny the client from
 * @param {string} client - the client to deny
 * @param {string} secret - the secret key associated with this channel
 * @param {this} _this - this inheratance
*/
var csModDeny = function csModDeny(channel, client, secret, _this) {
  // If we're connected, let's go ahead and publish our payload.
  if (_this.connected) {
    // Safely stringify our data before sending it to the server.
    _this.stringify({
      channel: channel,
      client: client,
      secret: secret,
      metadata: {
        time: Date.now(),
        client: _this.client,
        commonName: _this.commonName,
        type: 'deny'
      }
    }, function (payload) {
      // Send off the payload to the frontend that will attempt to deny a client
      _this.socket.send(payload);
    });
  } else {
    // Something is wrong and we're not connected yet, let's try again later.
    console.warn('Failed to connect, attempting again in 1 second.');
    setTimeout(function () {
      // call self with the same params that were initially passed.
      _this.info(channel, data, opts);
    }, 500);
  }
};

/**
 * csModHistory module.
 * @module core/csModHistory
 * @param {string} channel - the channel to pull history from
 * @param {number} limit - the ammount of items to pull from history
 * @param {object} opts - options such as privateKeys
 * @param {this} _this - this inheratance
*/
var csModHistory = function csModHistory(channel, limit, opts, _this) {
  // Since options are optional, if there are no options passed, we'll drop in
  // an empty object if options are false or undefined. This will help fix top
  // level null or undefined exceptions.
  var options = opts ? opts : {};
  var privateKey = options.privateKey ? options.privateKey : false;

  // If we're connected, let's go ahead and publish our payload.
  if (_this.connected) {
    // Safely stringify our data before sending it to the server.
    _this.stringify({
      channel: channel,
      privateKey: privateKey,
      limit: limit,
      metadata: {
        time: Date.now(),
        client: _this.client,
        commonName: _this.commonName,
        type: 'history'
      }
    }, function (payload) {
      // Send off the payload to the frontend that will request a batch of history
      _this.socket.send(payload);
    });
  } else {
    // Something is wrong and we're not connected yet, let's try again later.
    console.warn('Failed to connect, attempting again in 1 second.');
    setTimeout(function () {
      // call self with the same params that were initially passed.
      _this.history(channel, limit, opts);
    }, 500);
  }
};

/**
 * Creates a new CatSnake client.
 * @class
 */

var CatSnake = function () {
  /**
   * @constructs CatSnake
   * @param {string} address - the address of the catsnake server
   * @param {object} options - options such as common name and others
   */

  function CatSnake(address, options) {
    var _this = this;

    babelHelpers.classCallCheck(this, CatSnake);

    this.socket = new WebSocket(address);
    this.socket.binaryType = 'arraybuffer';

    this.connected = false;

    // Genrate a unique clientid
    this.client = csModClientid();

    this.commonName = options.commonName ? options.commonName : config.defaultName;

    this.bypassThrottle = options.bypassThrottle ? options.bypassThrottle : false;

    // Fired when the connection is made to the server
    this.socket.onopen = function (event) {
      _this.connected = true;

      // Make sure we tell the server we're leaving.
      window.onbeforeunload = function () {
        _this.socket.close();
      };
    };
  }

  babelHelpers.createClass(CatSnake, [{
    key: 'stringify',
    value: function stringify(data, callback) {
      /**
       * Tries to return a stringified object.
       * @function stringify (internal)
       * @param {object} data - the object to attempt to stringify
       * @callback {string} - Returns a stringified object
      */
      return csModStringify(data, callback, this);
    }

    /**
     * Publishes a message to all subscribers
     * @function publish
     * @param {string} channel - the channel to publish to
     * @param {object} data - the object to publish
     * @param {string} privateKey - optional private key for private channels
    */

  }, {
    key: 'publish',
    value: function publish(channel, data, privateKey) {
      csModPublish(channel, data, privateKey, this);
    }

    /**
     * List channels, get client info.
     * @function info
     * @param {string} channel - the channel to look at
     * @param {object} data - additional information for request
     * @param {object} opts - additional options for subscriptions
     * @param {string} opts.privateKey - private key used for getting info from private channels
    */

  }, {
    key: 'info',
    value: function info(channel, data, opts) {
      csModInfo(channel, data, opts, this);
    }

    /**
     * Get message history from a channel.
     * @function history
     * @param {string} channel - the channel to pull history from
     * @param {number} limit - the ammount of items to pull from history
     * @param {object} opts - options such as privateKeys
     * @param {string} opts.privateKey - private key used for getting history from private channels
    */

  }, {
    key: 'history',
    value: function history(channel, limit, opts) {
      csModHistory(channel, limit, opts, this);
    }

    /**
     * Subscribe to a channel
     * @function subscribe
     * @param {string} channel - the channel to subscribe to
     * @param {function} callback - new messages are returned here via msg
     * @param {object} callback.msg - a new payload published to this channel
     * @param {object} opts - additional options for subscriptions
     * @param {string} opts.privateKey - private key used for subscribing to private channels
     * @param {string} opts.noself - subscribe for everything but ignore your own payloads
     * @param {string} opts.accessToken - used as a key to modify private channels. Not to be confused with privateKey
     * @param {string} opts.private - make this channel private, clients can only connect if granted access
    */

  }, {
    key: 'subscribe',
    value: function subscribe(channel, callback, opts) {
      csModSubscribe(channel, callback, opts, this);
    }

    /**
     * Deny a client access to a channel
     * @function deny
     * @param {string} channel - the channel in which to deny the client from
     * @param {string} client - the client to deny
     * @param {string} secret - the secret key associated with this channel
    */

  }, {
    key: 'deny',
    value: function deny(channel, client, secret) {
      return csModDeny(channel, client, secret, this);
    }

    /**
     * Grant a client access to a channel
     * @function grant
     * @param {string} channel - the channel in which to grant the client access to
     * @param {string} client - the client to grant access
     * @param {string} secret - the secret key associated with this channel
    */

  }, {
    key: 'grant',
    value: function grant(channel, client, secret) {
      return cdModGrant(channel, client, secret, this);
    }
  }]);
  return CatSnake;
}();

import { D as me, G as Sl } from "./chunk-7MML5CJN.mjs";
import {
  B as Ml,
  a as wl,
  p as jn,
  t as pa,
  v as en,
  w as fa,
} from "./chunk-UEJNNABJ.mjs";
import { c as Ge } from "./chunk-A3IIQ6X3.mjs";
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ var ll = "136";
var zh = 0,
  Tl = 1,
  Nh = 2;
var Yc = 1,
  Fh = 2,
  qi = 3,
  Ki = 0,
  Kt = 1,
  vn = 2,
  Zc = 1;
var dn = 0,
  Ji = 1,
  El = 2,
  Al = 3,
  Rl = 4,
  Oh = 5,
  ui = 100,
  Bh = 101,
  Uh = 102,
  Ll = 103,
  Cl = 104,
  Hh = 200,
  Gh = 201,
  Vh = 202,
  kh = 203,
  Qc = 204,
  $c = 205,
  Wh = 206,
  jh = 207,
  qh = 208,
  Xh = 209,
  Jh = 210,
  Yh = 0,
  Zh = 1,
  Qh = 2,
  Za = 3,
  $h = 4,
  Kh = 5,
  tu = 6,
  eu = 7,
  aa = 0,
  nu = 1,
  iu = 2,
  pn = 0,
  ru = 1,
  su = 2,
  au = 3,
  ou = 4,
  lu = 5,
  Kc = 300,
  Lr = 301,
  Cr = 302,
  Qa = 303,
  $a = 304,
  oa = 306,
  cl = 307,
  Ka = 1e3,
  Se = 1001,
  to = 1002,
  te = 1003,
  Pl = 1004;
var Il = 1005;
var ge = 1006,
  cu = 1007;
var la = 1008;
var Ke = 1009,
  hu = 1010,
  uu = 1011,
  tr = 1012,
  du = 1013,
  gs = 1014,
  un = 1015,
  zn = 1016,
  pu = 1017,
  fu = 1018,
  mu = 1019,
  mi = 1020,
  gu = 1021,
  Nn = 1022,
  ae = 1023,
  vu = 1024,
  yu = 1025,
  Fn = 1026,
  yi = 1027,
  xu = 1028,
  _u = 1029,
  bu = 1030,
  wu = 1031,
  Mu = 1032,
  Su = 1033,
  Dl = 33776,
  zl = 33777,
  Nl = 33778,
  Fl = 33779,
  Ol = 35840,
  Bl = 35841,
  Ul = 35842,
  Hl = 35843,
  Tu = 36196,
  Gl = 37492,
  Vl = 37496,
  Eu = 37808,
  Au = 37809,
  Ru = 37810,
  Lu = 37811,
  Cu = 37812,
  Pu = 37813,
  Iu = 37814,
  Du = 37815,
  zu = 37816,
  Nu = 37817,
  Fu = 37818,
  Ou = 37819,
  Bu = 37820,
  Uu = 37821,
  Hu = 36492,
  Gu = 37840,
  Vu = 37841,
  ku = 37842,
  Wu = 37843,
  ju = 37844,
  qu = 37845,
  Xu = 37846,
  Ju = 37847,
  Yu = 37848,
  Zu = 37849,
  Qu = 37850,
  $u = 37851,
  Ku = 37852,
  td = 37853,
  ed = 2200,
  nd = 2201,
  id = 2202,
  vs = 2300,
  ys = 2301,
  ma = 2302,
  di = 2400,
  pi = 2401,
  xs = 2402,
  hl = 2500,
  th = 2501,
  rd = 0;
var Ne = 3e3,
  Pi = 3001,
  sd = 3200,
  ad = 3201,
  Ii = 0,
  od = 1;
var ga = 7680;
var ld = 519,
  er = 35044,
  _s = 35048;
var kl = "300 es",
  tn = class {
    addEventListener(t, e) {
      this._listeners === void 0 && (this._listeners = {});
      let n = this._listeners;
      (n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e));
    }
    hasEventListener(t, e) {
      if (this._listeners === void 0) return !1;
      let n = this._listeners;
      return n[t] !== void 0 && n[t].indexOf(e) !== -1;
    }
    removeEventListener(t, e) {
      if (this._listeners === void 0) return;
      let i = this._listeners[t];
      if (i !== void 0) {
        let r = i.indexOf(e);
        r !== -1 && i.splice(r, 1);
      }
    }
    dispatchEvent(t) {
      if (this._listeners === void 0) return;
      let n = this._listeners[t.type];
      if (n !== void 0) {
        t.target = this;
        let i = n.slice(0);
        for (let r = 0, a = i.length; r < a; r++) i[r].call(this, t);
        t.target = null;
      }
    }
  },
  le = [];
for (let s = 0; s < 256; s++) le[s] = (s < 16 ? "0" : "") + s.toString(16);
var Dr = 1234567,
  gi = Math.PI / 180,
  nr = 180 / Math.PI;
function Ee() {
  let s = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    e = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0;
  return (
    le[255 & s] +
    le[(s >> 8) & 255] +
    le[(s >> 16) & 255] +
    le[(s >> 24) & 255] +
    "-" +
    le[255 & t] +
    le[(t >> 8) & 255] +
    "-" +
    le[((t >> 16) & 15) | 64] +
    le[(t >> 24) & 255] +
    "-" +
    le[(63 & e) | 128] +
    le[(e >> 8) & 255] +
    "-" +
    le[(e >> 16) & 255] +
    le[(e >> 24) & 255] +
    le[255 & n] +
    le[(n >> 8) & 255] +
    le[(n >> 16) & 255] +
    le[(n >> 24) & 255]
  ).toUpperCase();
}
function de(s, t, e) {
  return Math.max(t, Math.min(e, s));
}
function ul(s, t) {
  return ((s % t) + t) % t;
}
function cd(s, t, e, n, i) {
  return n + ((s - t) * (i - n)) / (e - t);
}
function hd(s, t, e) {
  return s !== t ? (e - s) / (t - s) : 0;
}
function Yi(s, t, e) {
  return (1 - e) * s + e * t;
}
function ud(s, t, e, n) {
  return Yi(s, t, 1 - Math.exp(-e * n));
}
function dd(s, t = 1) {
  return t - Math.abs(ul(s, 2 * t) - t);
}
function pd(s, t, e) {
  return s <= t
    ? 0
    : s >= e
      ? 1
      : ((s = (s - t) / (e - t)), s * s * (3 - 2 * s));
}
function fd(s, t, e) {
  return s <= t
    ? 0
    : s >= e
      ? 1
      : ((s = (s - t) / (e - t)), s * s * s * (s * (6 * s - 15) + 10));
}
function md(s, t) {
  return s + Math.floor(Math.random() * (t - s + 1));
}
function gd(s, t) {
  return s + Math.random() * (t - s);
}
function vd(s) {
  return s * (0.5 - Math.random());
}
function yd(s) {
  return (
    s !== void 0 && (Dr = s % 2147483647),
    (Dr = (16807 * Dr) % 2147483647),
    (Dr - 1) / 2147483646
  );
}
function xd(s) {
  return s * gi;
}
function _d(s) {
  return s * nr;
}
function eo(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function bd(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function eh(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function wd(s, t, e, n, i) {
  let r = Math.cos,
    a = Math.sin,
    o = r(e / 2),
    l = a(e / 2),
    c = r((t + n) / 2),
    h = a((t + n) / 2),
    u = r((t - n) / 2),
    d = a((t - n) / 2),
    f = r((n - t) / 2),
    g = a((n - t) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      s.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * f, o * c);
      break;
    case "YXY":
      s.set(l * f, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * f, o * h, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i,
      );
  }
}
var q0 = Object.freeze({
    __proto__: null,
    DEG2RAD: gi,
    RAD2DEG: nr,
    generateUUID: Ee,
    clamp: de,
    euclideanModulo: ul,
    mapLinear: cd,
    inverseLerp: hd,
    lerp: Yi,
    damp: ud,
    pingpong: dd,
    smoothstep: pd,
    smootherstep: fd,
    randInt: md,
    randFloat: gd,
    randFloatSpread: vd,
    seededRandom: yd,
    degToRad: xd,
    radToDeg: _d,
    isPowerOfTwo: eo,
    ceilPowerOfTwo: bd,
    floorPowerOfTwo: eh,
    setQuaternionFromProperEuler: wd,
  }),
  q = class {
    constructor(t = 0, e = 0) {
      ((this.x = t), (this.y = e));
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return ((this.x = t), (this.y = e), this);
    }
    setScalar(t) {
      return ((this.x = t), (this.y = t), this);
    }
    setX(t) {
      return ((this.x = t), this);
    }
    setY(t) {
      return ((this.y = t), this);
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return ((this.x = t.x), (this.y = t.y), this);
    }
    add(t, e) {
      return e !== void 0
        ? (console.warn(
            "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.",
          ),
          this.addVectors(t, e))
        : ((this.x += t.x), (this.y += t.y), this);
    }
    addScalar(t) {
      return ((this.x += t), (this.y += t), this);
    }
    addVectors(t, e) {
      return ((this.x = t.x + e.x), (this.y = t.y + e.y), this);
    }
    addScaledVector(t, e) {
      return ((this.x += t.x * e), (this.y += t.y * e), this);
    }
    sub(t, e) {
      return e !== void 0
        ? (console.warn(
            "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.",
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x), (this.y -= t.y), this);
    }
    subScalar(t) {
      return ((this.x -= t), (this.y -= t), this);
    }
    subVectors(t, e) {
      return ((this.x = t.x - e.x), (this.y = t.y - e.y), this);
    }
    multiply(t) {
      return ((this.x *= t.x), (this.y *= t.y), this);
    }
    multiplyScalar(t) {
      return ((this.x *= t), (this.y *= t), this);
    }
    divide(t) {
      return ((this.x /= t.x), (this.y /= t.y), this);
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      let e = this.x,
        n = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * e + i[3] * n + i[6]),
        (this.y = i[1] * e + i[4] * n + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        this
      );
    }
    clampLength(t, e) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n)),
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        this
      );
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      let e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return ((this.x = t[e]), (this.y = t[e + 1]), this);
    }
    toArray(t = [], e = 0) {
      return ((t[e] = this.x), (t[e + 1] = this.y), t);
    }
    fromBufferAttribute(t, e, n) {
      return (
        n !== void 0 &&
          console.warn(
            "THREE.Vector2: offset has been removed from .fromBufferAttribute().",
          ),
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        this
      );
    }
    rotateAround(t, e) {
      let n = Math.cos(e),
        i = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return (
        (this.x = r * n - a * i + t.x),
        (this.y = r * i + a * n + t.y),
        this
      );
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  };
q.prototype.isVector2 = !0;
var ee = class {
  constructor() {
    ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.",
        ));
  }
  set(t, e, n, i, r, a, o, l, c) {
    let h = this.elements;
    return (
      (h[0] = t),
      (h[1] = i),
      (h[2] = o),
      (h[3] = e),
      (h[4] = r),
      (h[5] = l),
      (h[6] = n),
      (h[7] = a),
      (h[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(t) {
    let e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    let e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    let n = t.elements,
      i = e.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      h = n[4],
      u = n[7],
      d = n[2],
      f = n[5],
      g = n[8],
      v = i[0],
      x = i[3],
      m = i[6],
      p = i[1],
      _ = i[4],
      y = i[7],
      w = i[2],
      A = i[5],
      L = i[8];
    return (
      (r[0] = a * v + o * p + l * w),
      (r[3] = a * x + o * _ + l * A),
      (r[6] = a * m + o * y + l * L),
      (r[1] = c * v + h * p + u * w),
      (r[4] = c * x + h * _ + u * A),
      (r[7] = c * m + h * y + u * L),
      (r[2] = d * v + f * p + g * w),
      (r[5] = d * x + f * _ + g * A),
      (r[8] = d * m + f * y + g * L),
      this
    );
  }
  multiplyScalar(t) {
    let e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    let t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      c = t[7],
      h = t[8];
    return (
      e * a * h - e * o * c - n * r * h + n * o * l + i * r * c - i * a * l
    );
  }
  invert() {
    let t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      c = t[7],
      h = t[8],
      u = h * a - o * c,
      d = o * l - h * r,
      f = c * r - a * l,
      g = e * u + n * d + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let v = 1 / g;
    return (
      (t[0] = u * v),
      (t[1] = (i * c - h * n) * v),
      (t[2] = (o * n - i * a) * v),
      (t[3] = d * v),
      (t[4] = (h * e - i * l) * v),
      (t[5] = (i * r - o * e) * v),
      (t[6] = f * v),
      (t[7] = (n * l - c * e) * v),
      (t[8] = (a * e - n * r) * v),
      this
    );
  }
  transpose() {
    let t,
      e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    let e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, n, i, r, a, o) {
    let l = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + t,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + e,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(t, e) {
    let n = this.elements;
    return (
      (n[0] *= t),
      (n[3] *= t),
      (n[6] *= t),
      (n[1] *= e),
      (n[4] *= e),
      (n[7] *= e),
      this
    );
  }
  rotate(t) {
    let e = Math.cos(t),
      n = Math.sin(t),
      i = this.elements,
      r = i[0],
      a = i[3],
      o = i[6],
      l = i[1],
      c = i[4],
      h = i[7];
    return (
      (i[0] = e * r + n * l),
      (i[3] = e * a + n * c),
      (i[6] = e * o + n * h),
      (i[1] = -n * r + e * l),
      (i[4] = -n * a + e * c),
      (i[7] = -n * o + e * h),
      this
    );
  }
  translate(t, e) {
    let n = this.elements;
    return (
      (n[0] += t * n[2]),
      (n[3] += t * n[5]),
      (n[6] += t * n[8]),
      (n[1] += e * n[2]),
      (n[4] += e * n[5]),
      (n[7] += e * n[8]),
      this
    );
  }
  equals(t) {
    let e = this.elements,
      n = t.elements;
    for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    let n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
ee.prototype.isMatrix3 = !0;
function nh(s) {
  if (s.length === 0) return -1 / 0;
  let t = s[0];
  for (let e = 1, n = s.length; e < n; ++e) s[e] > t && (t = s[e]);
  return t;
}
function ca(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
var qn,
  yn = class {
    static getDataURL(t) {
      if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t;
      else {
        (qn === void 0 && (qn = ca("canvas")),
          (qn.width = t.width),
          (qn.height = t.height));
        let n = qn.getContext("2d");
        (t instanceof ImageData
          ? n.putImageData(t, 0, 0)
          : n.drawImage(t, 0, 0, t.width, t.height),
          (e = qn));
      }
      return e.width > 2048 || e.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            t,
          ),
          e.toDataURL("image/jpeg", 0.6))
        : e.toDataURL("image/png");
    }
  },
  Md = 0,
  ce = class s extends tn {
    constructor(
      t = s.DEFAULT_IMAGE,
      e = s.DEFAULT_MAPPING,
      n = Se,
      i = Se,
      r = ge,
      a = la,
      o = ae,
      l = Ke,
      c = 1,
      h = Ne,
    ) {
      (super(),
        Object.defineProperty(this, "id", { value: Md++ }),
        (this.uuid = Ee()),
        (this.name = ""),
        (this.image = t),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = a),
        (this.anisotropy = c),
        (this.format = o),
        (this.internalFormat = null),
        (this.type = l),
        (this.offset = new q(0, 0)),
        (this.repeat = new q(1, 1)),
        (this.center = new q(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new ee()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = h),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1));
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y,
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.image = t.image),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.encoding = t.encoding),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
      let n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      if (this.image !== void 0) {
        let i = this.image;
        if (
          (i.uuid === void 0 && (i.uuid = Ee()),
          !e && t.images[i.uuid] === void 0)
        ) {
          let r;
          if (Array.isArray(i)) {
            r = [];
            for (let a = 0, o = i.length; a < o; a++)
              i[a].isDataTexture ? r.push(va(i[a].image)) : r.push(va(i[a]));
          } else r = va(i);
          t.images[i.uuid] = { uuid: i.uuid, url: r };
        }
        n.image = i.uuid;
      }
      return (
        JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (this.mapping !== Kc) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case Ka:
            t.x = t.x - Math.floor(t.x);
            break;
          case Se:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case to:
            Math.abs(Math.floor(t.x) % 2) === 1
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
            break;
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case Ka:
            t.y = t.y - Math.floor(t.y);
            break;
          case Se:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case to:
            Math.abs(Math.floor(t.y) % 2) === 1
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
            break;
        }
      return (this.flipY && (t.y = 1 - t.y), t);
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
  };
ce.DEFAULT_IMAGE = void 0;
ce.DEFAULT_MAPPING = Kc;
ce.prototype.isTexture = !0;
function va(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? yn.getDataURL(s)
    : s.data
      ? {
          data: Array.prototype.slice.call(s.data),
          width: s.width,
          height: s.height,
          type: s.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var Ot = class {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    ((this.x = t), (this.y = e), (this.z = n), (this.w = i));
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return ((this.x = t), (this.y = e), (this.z = n), (this.w = i), this);
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), (this.z = t), (this.w = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setZ(t) {
    return ((this.z = t), this);
  }
  setW(t) {
    return ((this.w = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = t.w !== void 0 ? t.w : 1),
      this
    );
  }
  add(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.",
        ),
        this.addVectors(t, e))
      : ((this.x += t.x),
        (this.y += t.y),
        (this.z += t.z),
        (this.w += t.w),
        this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), (this.z += t), (this.w += t), this);
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.",
        ),
        this.subVectors(t, e))
      : ((this.x -= t.x),
        (this.y -= t.y),
        (this.z -= t.z),
        (this.w -= t.w),
        this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this);
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x),
      (this.y *= t.y),
      (this.z *= t.z),
      (this.w *= t.w),
      this
    );
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this);
  }
  applyMatrix4(t) {
    let e = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = t.elements;
    return (
      (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    let e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e,
      n,
      i,
      r,
      l = t.elements,
      c = l[0],
      h = l[4],
      u = l[8],
      d = l[1],
      f = l[5],
      g = l[9],
      v = l[2],
      x = l[6],
      m = l[10];
    if (
      Math.abs(h - d) < 0.01 &&
      Math.abs(u - v) < 0.01 &&
      Math.abs(g - x) < 0.01
    ) {
      if (
        Math.abs(h + d) < 0.1 &&
        Math.abs(u + v) < 0.1 &&
        Math.abs(g + x) < 0.1 &&
        Math.abs(c + f + m - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      e = Math.PI;
      let _ = (c + 1) / 2,
        y = (f + 1) / 2,
        w = (m + 1) / 2,
        A = (h + d) / 4,
        L = (u + v) / 4,
        I = (g + x) / 4;
      return (
        _ > y && _ > w
          ? _ < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(_)), (i = A / n), (r = L / n))
          : y > w
            ? y < 0.01
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(y)), (n = A / i), (r = I / i))
            : w < 0.01
              ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
              : ((r = Math.sqrt(w)), (n = L / r), (i = I / r)),
        this.set(n, i, r, e),
        this
      );
    }
    let p = Math.sqrt(
      (x - g) * (x - g) + (u - v) * (u - v) + (d - h) * (d - h),
    );
    return (
      Math.abs(p) < 0.001 && (p = 1),
      (this.x = (x - g) / p),
      (this.y = (u - v) / p),
      (this.z = (d - h) / p),
      (this.w = Math.acos((c + f + m - 1) / 2)),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      (this.w = Math.max(t.w, Math.min(e.w, this.w))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      (this.w = Math.max(t, Math.min(e, this.w))),
      this
    );
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute().",
        ),
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
};
Ot.prototype.isVector4 = !0;
var ye = class extends tn {
  constructor(t, e, n = {}) {
    (super(),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new Ot(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new Ot(0, 0, t, e)),
      (this.texture = new ce(
        void 0,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding,
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.image = { width: t, height: e, depth: 1 }),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 && n.generateMipmaps),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ge),
      (this.depthBuffer = n.depthBuffer === void 0 || n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer !== void 0 && n.stencilBuffer),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null));
  }
  setTexture(t) {
    ((t.image = { width: this.width, height: this.height, depth: this.depth }),
      (this.texture = t));
  }
  setSize(t, e, n = 1) {
    ((this.width !== t || this.height !== e || this.depth !== n) &&
      ((this.width = t),
      (this.height = e),
      (this.depth = n),
      (this.texture.image.width = t),
      (this.texture.image.height = e),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, t, e),
      this.scissor.set(0, 0, t, e));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.viewport.copy(t.viewport),
      (this.texture = t.texture.clone()),
      (this.texture.image = { ...this.texture.image }),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.depthTexture = t.depthTexture),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
ye.prototype.isWebGLRenderTarget = !0;
var no = class extends ye {
  constructor(t, e, n) {
    super(t, e);
    let i = this.texture;
    this.texture = [];
    for (let r = 0; r < n; r++) this.texture[r] = i.clone();
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      ((this.width = t), (this.height = e), (this.depth = n));
      for (let i = 0, r = this.texture.length; i < r; i++)
        ((this.texture[i].image.width = t),
          (this.texture[i].image.height = e),
          (this.texture[i].image.depth = n));
      this.dispose();
    }
    return (this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this);
  }
  copy(t) {
    (this.dispose(),
      (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.viewport.set(0, 0, this.width, this.height),
      this.scissor.set(0, 0, this.width, this.height),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.depthTexture = t.depthTexture),
      (this.texture.length = 0));
    for (let e = 0, n = t.texture.length; e < n; e++)
      this.texture[e] = t.texture[e].clone();
    return this;
  }
};
no.prototype.isWebGLMultipleRenderTargets = !0;
var ir = class extends ye {
  constructor(t, e, n = {}) {
    (super(t, e, n),
      (this.samples = 4),
      (this.ignoreDepthForMultisampleCopy =
        n.ignoreDepth === void 0 || n.ignoreDepth),
      (this.useRenderToTexture =
        n.useRenderToTexture !== void 0 && n.useRenderToTexture),
      (this.useRenderbuffer = this.useRenderToTexture === !1));
  }
  copy(t) {
    return (
      super.copy.call(this, t),
      (this.samples = t.samples),
      (this.useRenderToTexture = t.useRenderToTexture),
      (this.useRenderbuffer = t.useRenderbuffer),
      this
    );
  }
};
ir.prototype.isWebGLMultisampleRenderTarget = !0;
var oe = class {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    ((this._x = t), (this._y = e), (this._z = n), (this._w = i));
  }
  static slerp(t, e, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.",
      ),
      n.slerpQuaternions(t, e, i)
    );
  }
  static slerpFlat(t, e, n, i, r, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      h = n[i + 2],
      u = n[i + 3],
      d = r[a + 0],
      f = r[a + 1],
      g = r[a + 2],
      v = r[a + 3];
    if (o !== 0)
      if (o !== 1) {
        if (u !== v || l !== d || c !== f || h !== g) {
          let x = 1 - o,
            m = l * d + c * f + h * g + u * v,
            p = m >= 0 ? 1 : -1,
            _ = 1 - m * m;
          if (_ > Number.EPSILON) {
            let w = Math.sqrt(_),
              A = Math.atan2(w, m * p);
            ((x = Math.sin(x * A) / w), (o = Math.sin(o * A) / w));
          }
          let y = o * p;
          if (
            ((l = l * x + d * y),
            (c = c * x + f * y),
            (h = h * x + g * y),
            (u = u * x + v * y),
            x === 1 - o)
          ) {
            let w = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
            ((l *= w), (c *= w), (h *= w), (u *= w));
          }
        }
        ((t[e] = l), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = u));
      } else ((t[e + 0] = d), (t[e + 1] = f), (t[e + 2] = g), (t[e + 3] = v));
    else ((t[e + 0] = l), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = u));
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, a) {
    let o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3],
      u = r[a],
      d = r[a + 1],
      f = r[a + 2],
      g = r[a + 3];
    return (
      (t[e] = o * g + h * u + l * f - c * d),
      (t[e + 1] = l * g + h * d + c * u - o * f),
      (t[e + 2] = c * g + h * f + o * d - l * u),
      (t[e + 3] = h * g - o * u - l * d - c * f),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    ((this._x = t), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(t) {
    ((this._y = t), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(t) {
    ((this._z = t), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(t) {
    ((this._w = t), this._onChangeCallback());
  }
  set(t, e, n, i) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e) {
    if (!(t && t.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.",
      );
    let n = t._x,
      i = t._y,
      r = t._z,
      a = t._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      h = o(i / 2),
      u = o(r / 2),
      d = l(n / 2),
      f = l(i / 2),
      g = l(r / 2);
    switch (a) {
      case "XYZ":
        ((this._x = d * h * u + c * f * g),
          (this._y = c * f * u - d * h * g),
          (this._z = c * h * g + d * f * u),
          (this._w = c * h * u - d * f * g));
        break;
      case "YXZ":
        ((this._x = d * h * u + c * f * g),
          (this._y = c * f * u - d * h * g),
          (this._z = c * h * g - d * f * u),
          (this._w = c * h * u + d * f * g));
        break;
      case "ZXY":
        ((this._x = d * h * u - c * f * g),
          (this._y = c * f * u + d * h * g),
          (this._z = c * h * g + d * f * u),
          (this._w = c * h * u - d * f * g));
        break;
      case "ZYX":
        ((this._x = d * h * u - c * f * g),
          (this._y = c * f * u + d * h * g),
          (this._z = c * h * g - d * f * u),
          (this._w = c * h * u + d * f * g));
        break;
      case "YZX":
        ((this._x = d * h * u + c * f * g),
          (this._y = c * f * u + d * h * g),
          (this._z = c * h * g - d * f * u),
          (this._w = c * h * u - d * f * g));
        break;
      case "XZY":
        ((this._x = d * h * u - c * f * g),
          (this._y = c * f * u - d * h * g),
          (this._z = c * h * g + d * f * u),
          (this._w = c * h * u + d * f * g));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            a,
        );
    }
    return (e !== !1 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(t, e) {
    let n = e / 2,
      i = Math.sin(n);
    return (
      (this._x = t.x * i),
      (this._y = t.y * i),
      (this._z = t.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    let e = t.elements,
      n = e[0],
      i = e[4],
      r = e[8],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[2],
      h = e[6],
      u = e[10],
      d = n + o + u;
    if (d > 0) {
      let f = 0.5 / Math.sqrt(d + 1);
      ((this._w = 0.25 / f),
        (this._x = (h - l) * f),
        (this._y = (r - c) * f),
        (this._z = (a - i) * f));
    } else if (n > o && n > u) {
      let f = 2 * Math.sqrt(1 + n - o - u);
      ((this._w = (h - l) / f),
        (this._x = 0.25 * f),
        (this._y = (i + a) / f),
        (this._z = (r + c) / f));
    } else if (o > u) {
      let f = 2 * Math.sqrt(1 + o - n - u);
      ((this._w = (r - c) / f),
        (this._x = (i + a) / f),
        (this._y = 0.25 * f),
        (this._z = (l + h) / f));
    } else {
      let f = 2 * Math.sqrt(1 + u - n - o);
      ((this._w = (a - i) / f),
        (this._x = (r + c) / f),
        (this._y = (l + h) / f),
        (this._z = 0.25 * f));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(de(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    let n = this.angleTo(t);
    if (n === 0) return this;
    let i = Math.min(1, e / n);
    return (this.slerp(t, i), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let t = this.length();
    return (
      t === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.",
        ),
        this.multiplyQuaternions(t, e))
      : this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    let n = t._x,
      i = t._y,
      r = t._z,
      a = t._w,
      o = e._x,
      l = e._y,
      c = e._z,
      h = e._w;
    return (
      (this._x = n * h + a * o + i * c - r * l),
      (this._y = i * h + a * l + r * o - n * c),
      (this._z = r * h + a * c + n * l - i * o),
      (this._w = a * h - n * o - i * l - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    let n = this._x,
      i = this._y,
      r = this._z,
      a = this._w,
      o = a * t._w + n * t._x + i * t._y + r * t._z;
    if (
      (o < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (o = -o))
        : this.copy(t),
      o >= 1)
    )
      return ((this._w = a), (this._x = n), (this._y = i), (this._z = r), this);
    let l = 1 - o * o;
    if (l <= Number.EPSILON) {
      let f = 1 - e;
      return (
        (this._w = f * a + e * this._w),
        (this._x = f * n + e * this._x),
        (this._y = f * i + e * this._y),
        (this._z = f * r + e * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    let c = Math.sqrt(l),
      h = Math.atan2(c, o),
      u = Math.sin((1 - e) * h) / c,
      d = Math.sin(e * h) / c;
    return (
      (this._w = a * u + this._w * d),
      (this._x = n * u + this._x * d),
      (this._y = i * u + this._y * d),
      (this._z = r * u + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, n) {
    this.copy(t).slerp(e, n);
  }
  random() {
    let t = Math.random(),
      e = Math.sqrt(1 - t),
      n = Math.sqrt(t),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      e * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      e * Math.sin(i),
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this
    );
  }
  _onChange(t) {
    return ((this._onChangeCallback = t), this);
  }
  _onChangeCallback() {}
};
oe.prototype.isQuaternion = !0;
var b = class {
  constructor(t = 0, e = 0, n = 0) {
    ((this.x = t), (this.y = e), (this.z = n));
  }
  set(t, e, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    );
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), (this.z = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setZ(t) {
    return ((this.z = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return ((this.x = t.x), (this.y = t.y), (this.z = t.z), this);
  }
  add(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.",
        ),
        this.addVectors(t, e))
      : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), (this.z += t), this);
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      this
    );
  }
  sub(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.",
        ),
        this.subVectors(t, e))
      : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), (this.z -= t), this);
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      this
    );
  }
  multiply(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.",
        ),
        this.multiplyVectors(t, e))
      : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), (this.z *= t), this);
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x),
      (this.y = t.y * e.y),
      (this.z = t.z * e.z),
      this
    );
  }
  applyEuler(t) {
    return (
      (t && t.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.",
        ),
      this.applyQuaternion(Wl.setFromEuler(t))
    );
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Wl.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    let e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * n + r[6] * i),
      (this.y = r[1] * e + r[4] * n + r[7] * i),
      (this.z = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    let e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements,
      a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(t) {
    let e = this.x,
      n = this.y,
      i = this.z,
      r = t.x,
      a = t.y,
      o = t.z,
      l = t.w,
      c = l * e + a * i - o * n,
      h = l * n + o * e - r * i,
      u = l * i + r * n - a * e,
      d = -r * e - a * n - o * i;
    return (
      (this.x = c * l + d * -r + h * -o - u * -a),
      (this.y = h * l + d * -a + u * -r - c * -o),
      (this.z = u * l + d * -o + c * -a - h * -r),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix,
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld,
    );
  }
  transformDirection(t) {
    let e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[4] * n + r[8] * i),
      (this.y = r[1] * e + r[5] * n + r[9] * i),
      (this.z = r[2] * e + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(t) {
    return ((this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this);
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    );
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    );
  }
  cross(t, e) {
    return e !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.",
        ),
        this.crossVectors(t, e))
      : this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    let n = t.x,
      i = t.y,
      r = t.z,
      a = e.x,
      o = e.y,
      l = e.z;
    return (
      (this.x = i * l - r * o),
      (this.y = r * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(t) {
    let e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    let n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return (ya.copy(this).projectOnVector(t), this.sub(ya));
  }
  reflect(t) {
    return this.sub(ya.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    let e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    let n = this.dot(t) / e;
    return Math.acos(de(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    let e = this.x - t.x,
      n = this.y - t.y,
      i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    let i = Math.sin(e) * t;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)),
      (this.y = n),
      (this.z = t * Math.cos(e)),
      this
    );
  }
  setFromMatrixPosition(t) {
    let e = t.elements;
    return ((this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this);
  }
  setFromMatrixScale(t) {
    let e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      i = this.setFromMatrixColumn(t, 2).length();
    return ((this.x = e), (this.y = n), (this.z = i), this);
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e);
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return ((this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t);
  }
  fromBufferAttribute(t, e, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute().",
        ),
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    let t = 2 * (Math.random() - 0.5),
      e = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - t ** 2);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = n * Math.sin(e)),
      (this.z = t),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
};
b.prototype.isVector3 = !0;
var ya = new b(),
  Wl = new oe(),
  xe = class {
    constructor(
      t = new b(1 / 0, 1 / 0, 1 / 0),
      e = new b(-1 / 0, -1 / 0, -1 / 0),
    ) {
      ((this.min = t), (this.max = e));
    }
    set(t, e) {
      return (this.min.copy(t), this.max.copy(e), this);
    }
    setFromArray(t) {
      let e = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        a = -1 / 0,
        o = -1 / 0;
      for (let l = 0, c = t.length; l < c; l += 3) {
        let h = t[l],
          u = t[l + 1],
          d = t[l + 2];
        (h < e && (e = h),
          u < n && (n = u),
          d < i && (i = d),
          h > r && (r = h),
          u > a && (a = u),
          d > o && (o = d));
      }
      return (this.min.set(e, n, i), this.max.set(r, a, o), this);
    }
    setFromBufferAttribute(t) {
      let e = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        a = -1 / 0,
        o = -1 / 0;
      for (let l = 0, c = t.count; l < c; l++) {
        let h = t.getX(l),
          u = t.getY(l),
          d = t.getZ(l);
        (h < e && (e = h),
          u < n && (n = u),
          d < i && (i = d),
          h > r && (r = h),
          u > a && (a = u),
          d > o && (o = d));
      }
      return (this.min.set(e, n, i), this.max.set(r, a, o), this);
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      let n = Fi.copy(e).multiplyScalar(0.5);
      return (this.min.copy(t).sub(n), this.max.copy(t).add(n), this);
    }
    setFromObject(t) {
      return (this.makeEmpty(), this.expandByObject(t));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (this.min.copy(t.min), this.max.copy(t.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return (this.min.min(t), this.max.max(t), this);
    }
    expandByVector(t) {
      return (this.min.sub(t), this.max.add(t), this);
    }
    expandByScalar(t) {
      return (this.min.addScalar(-t), this.max.addScalar(t), this);
    }
    expandByObject(t) {
      t.updateWorldMatrix(!1, !1);
      let e = t.geometry;
      e !== void 0 &&
        (e.boundingBox === null && e.computeBoundingBox(),
        xa.copy(e.boundingBox),
        xa.applyMatrix4(t.matrixWorld),
        this.union(xa));
      let n = t.children;
      for (let i = 0, r = n.length; i < r; i++) this.expandByObject(n[i]);
      return this;
    }
    containsPoint(t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y ||
        t.z < this.min.z ||
        t.z > this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z),
      );
    }
    intersectsBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y ||
        t.max.z < this.min.z ||
        t.min.z > this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, Fi),
        Fi.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      (this.getCenter(Oi),
        zr.subVectors(this.max, Oi),
        Xn.subVectors(t.a, Oi),
        Jn.subVectors(t.b, Oi),
        Yn.subVectors(t.c, Oi),
        nn.subVectors(Jn, Xn),
        rn.subVectors(Yn, Jn),
        Ln.subVectors(Xn, Yn));
      let e = [
        0,
        -nn.z,
        nn.y,
        0,
        -rn.z,
        rn.y,
        0,
        -Ln.z,
        Ln.y,
        nn.z,
        0,
        -nn.x,
        rn.z,
        0,
        -rn.x,
        Ln.z,
        0,
        -Ln.x,
        -nn.y,
        nn.x,
        0,
        -rn.y,
        rn.x,
        0,
        -Ln.y,
        Ln.x,
        0,
      ];
      return !_a(e, Xn, Jn, Yn, zr) ||
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !_a(e, Xn, Jn, Yn, zr))
        ? !1
        : (Nr.crossVectors(nn, rn),
          (e = [Nr.x, Nr.y, Nr.z]),
          _a(e, Xn, Jn, Yn, zr));
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return Fi.copy(t).clamp(this.min, this.max).sub(t).length();
    }
    getBoundingSphere(t) {
      return (
        this.getCenter(t.center),
        (t.radius = 0.5 * this.getSize(Fi).length()),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return (this.min.min(t.min), this.max.max(t.max), this);
    }
    applyMatrix4(t) {
      return this.isEmpty()
        ? this
        : (Xe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          Xe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          Xe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          Xe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          Xe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          Xe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          Xe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          Xe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(Xe),
          this);
    }
    translate(t) {
      return (this.min.add(t), this.max.add(t), this);
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  };
xe.prototype.isBox3 = !0;
var Xe = [
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
    new b(),
  ],
  Fi = new b(),
  xa = new xe(),
  Xn = new b(),
  Jn = new b(),
  Yn = new b(),
  nn = new b(),
  rn = new b(),
  Ln = new b(),
  Oi = new b(),
  zr = new b(),
  Nr = new b(),
  Cn = new b();
function _a(s, t, e, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Cn.fromArray(s, r);
    let o = i.x * Math.abs(Cn.x) + i.y * Math.abs(Cn.y) + i.z * Math.abs(Cn.z),
      l = t.dot(Cn),
      c = e.dot(Cn),
      h = n.dot(Cn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
var Sd = new xe(),
  jl = new b(),
  Fr = new b(),
  ba = new b(),
  xn = class {
    constructor(t = new b(), e = -1) {
      ((this.center = t), (this.radius = e));
    }
    set(t, e) {
      return (this.center.copy(t), (this.radius = e), this);
    }
    setFromPoints(t, e) {
      let n = this.center;
      e !== void 0 ? n.copy(e) : Sd.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let r = 0, a = t.length; r < a; r++)
        i = Math.max(i, n.distanceToSquared(t[r]));
      return ((this.radius = Math.sqrt(i)), this);
    }
    copy(t) {
      return (this.center.copy(t.center), (this.radius = t.radius), this);
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return (this.center.set(0, 0, 0), (this.radius = -1), this);
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      let e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      let n = this.center.distanceToSquared(t);
      return (
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return this.isEmpty()
        ? (t.makeEmpty(), t)
        : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return (this.center.add(t), this);
    }
    expandByPoint(t) {
      ba.subVectors(t, this.center);
      let e = ba.lengthSq();
      if (e > this.radius * this.radius) {
        let n = Math.sqrt(e),
          i = 0.5 * (n - this.radius);
        (this.center.add(ba.multiplyScalar(i / n)), (this.radius += i));
      }
      return this;
    }
    union(t) {
      return (
        this.center.equals(t.center) === !0
          ? Fr.set(0, 0, 1).multiplyScalar(t.radius)
          : Fr.subVectors(t.center, this.center)
              .normalize()
              .multiplyScalar(t.radius),
        this.expandByPoint(jl.copy(t.center).add(Fr)),
        this.expandByPoint(jl.copy(t.center).sub(Fr)),
        this
      );
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Je = new b(),
  wa = new b(),
  Or = new b(),
  sn = new b(),
  Ma = new b(),
  Br = new b(),
  Sa = new b(),
  _n = class {
    constructor(t = new b(), e = new b(0, 0, -1)) {
      ((this.origin = t), (this.direction = e));
    }
    set(t, e) {
      return (this.origin.copy(t), this.direction.copy(e), this);
    }
    copy(t) {
      return (
        this.origin.copy(t.origin),
        this.direction.copy(t.direction),
        this
      );
    }
    at(t, e) {
      return e.copy(this.direction).multiplyScalar(t).add(this.origin);
    }
    lookAt(t) {
      return (this.direction.copy(t).sub(this.origin).normalize(), this);
    }
    recast(t) {
      return (this.origin.copy(this.at(t, Je)), this);
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      let n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      let e = Je.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (Je.copy(this.direction).multiplyScalar(e).add(this.origin),
          Je.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
      (wa.copy(t).add(e).multiplyScalar(0.5),
        Or.copy(e).sub(t).normalize(),
        sn.copy(this.origin).sub(wa));
      let r = 0.5 * t.distanceTo(e),
        a = -this.direction.dot(Or),
        o = sn.dot(this.direction),
        l = -sn.dot(Or),
        c = sn.lengthSq(),
        h = Math.abs(1 - a * a),
        u,
        d,
        f,
        g;
      if (h > 0)
        if (((u = a * l - o), (d = a * o - l), (g = r * h), u >= 0))
          if (d >= -g)
            if (d <= g) {
              let v = 1 / h;
              ((u *= v),
                (d *= v),
                (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c));
            } else
              ((d = r),
                (u = Math.max(0, -(a * d + o))),
                (f = -u * u + d * (d + 2 * l) + c));
          else
            ((d = -r),
              (u = Math.max(0, -(a * d + o))),
              (f = -u * u + d * (d + 2 * l) + c));
        else
          d <= -g
            ? ((u = Math.max(0, -(-a * r + o))),
              (d = u > 0 ? -r : Math.min(Math.max(-r, -l), r)),
              (f = -u * u + d * (d + 2 * l) + c))
            : d <= g
              ? ((u = 0),
                (d = Math.min(Math.max(-r, -l), r)),
                (f = d * (d + 2 * l) + c))
              : ((u = Math.max(0, -(a * r + o))),
                (d = u > 0 ? r : Math.min(Math.max(-r, -l), r)),
                (f = -u * u + d * (d + 2 * l) + c));
      else
        ((d = a > 0 ? -r : r),
          (u = Math.max(0, -(a * d + o))),
          (f = -u * u + d * (d + 2 * l) + c));
      return (
        n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
        i && i.copy(Or).multiplyScalar(d).add(wa),
        f
      );
    }
    intersectSphere(t, e) {
      Je.subVectors(t.center, this.origin);
      let n = Je.dot(this.direction),
        i = Je.dot(Je) - n * n,
        r = t.radius * t.radius;
      if (i > r) return null;
      let a = Math.sqrt(r - i),
        o = n - a,
        l = n + a;
      return o < 0 && l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      let e = t.normal.dot(this.direction);
      if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      let n = this.distanceToPlane(t);
      return n === null ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      let e = t.distanceToPoint(this.origin);
      return e === 0 ? !0 : t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n,
        i,
        r,
        a,
        o,
        l,
        c = 1 / this.direction.x,
        h = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin;
      return (
        c >= 0
          ? ((n = (t.min.x - d.x) * c), (i = (t.max.x - d.x) * c))
          : ((n = (t.max.x - d.x) * c), (i = (t.min.x - d.x) * c)),
        h >= 0
          ? ((r = (t.min.y - d.y) * h), (a = (t.max.y - d.y) * h))
          : ((r = (t.max.y - d.y) * h), (a = (t.min.y - d.y) * h)),
        n > a ||
        r > i ||
        ((r > n || n !== n) && (n = r),
        (a < i || i !== i) && (i = a),
        u >= 0
          ? ((o = (t.min.z - d.z) * u), (l = (t.max.z - d.z) * u))
          : ((o = (t.max.z - d.z) * u), (l = (t.min.z - d.z) * u)),
        n > l || o > i)
          ? null
          : ((o > n || n !== n) && (n = o),
            (l < i || i !== i) && (i = l),
            i < 0 ? null : this.at(n >= 0 ? n : i, e))
      );
    }
    intersectsBox(t) {
      return this.intersectBox(t, Je) !== null;
    }
    intersectTriangle(t, e, n, i, r) {
      (Ma.subVectors(e, t), Br.subVectors(n, t), Sa.crossVectors(Ma, Br));
      let a = this.direction.dot(Sa),
        o;
      if (a > 0) {
        if (i) return null;
        o = 1;
      } else {
        if (!(a < 0)) return null;
        ((o = -1), (a = -a));
      }
      sn.subVectors(this.origin, t);
      let l = o * this.direction.dot(Br.crossVectors(sn, Br));
      if (l < 0) return null;
      let c = o * this.direction.dot(Ma.cross(sn));
      if (c < 0 || l + c > a) return null;
      let h = -o * sn.dot(Sa);
      return h < 0 ? null : this.at(h / a, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t),
        this.direction.transformDirection(t),
        this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  mt = class s {
    constructor() {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.",
          ));
    }
    set(t, e, n, i, r, a, o, l, c, h, u, d, f, g, v, x) {
      let m = this.elements;
      return (
        (m[0] = t),
        (m[4] = e),
        (m[8] = n),
        (m[12] = i),
        (m[1] = r),
        (m[5] = a),
        (m[9] = o),
        (m[13] = l),
        (m[2] = c),
        (m[6] = h),
        (m[10] = u),
        (m[14] = d),
        (m[3] = f),
        (m[7] = g),
        (m[11] = v),
        (m[15] = x),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new s().fromArray(this.elements);
    }
    copy(t) {
      let e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        (e[9] = n[9]),
        (e[10] = n[10]),
        (e[11] = n[11]),
        (e[12] = n[12]),
        (e[13] = n[13]),
        (e[14] = n[14]),
        (e[15] = n[15]),
        this
      );
    }
    copyPosition(t) {
      let e = this.elements,
        n = t.elements;
      return ((e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this);
    }
    setFromMatrix3(t) {
      let e = t.elements;
      return (
        this.set(
          e[0],
          e[3],
          e[6],
          0,
          e[1],
          e[4],
          e[7],
          0,
          e[2],
          e[5],
          e[8],
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(t, e, n) {
      return (
        this.set(
          t.x,
          e.x,
          n.x,
          0,
          t.y,
          e.y,
          n.y,
          0,
          t.z,
          e.z,
          n.z,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractRotation(t) {
      let e = this.elements,
        n = t.elements,
        i = 1 / Zn.setFromMatrixColumn(t, 0).length(),
        r = 1 / Zn.setFromMatrixColumn(t, 1).length(),
        a = 1 / Zn.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = n[0] * i),
        (e[1] = n[1] * i),
        (e[2] = n[2] * i),
        (e[3] = 0),
        (e[4] = n[4] * r),
        (e[5] = n[5] * r),
        (e[6] = n[6] * r),
        (e[7] = 0),
        (e[8] = n[8] * a),
        (e[9] = n[9] * a),
        (e[10] = n[10] * a),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      (t && t.isEuler) ||
        console.error(
          "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.",
        );
      let e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z,
        a = Math.cos(n),
        o = Math.sin(n),
        l = Math.cos(i),
        c = Math.sin(i),
        h = Math.cos(r),
        u = Math.sin(r);
      if (t.order === "XYZ") {
        let d = a * h,
          f = a * u,
          g = o * h,
          v = o * u;
        ((e[0] = l * h),
          (e[4] = -l * u),
          (e[8] = c),
          (e[1] = f + g * c),
          (e[5] = d - v * c),
          (e[9] = -o * l),
          (e[2] = v - d * c),
          (e[6] = g + f * c),
          (e[10] = a * l));
      } else if (t.order === "YXZ") {
        let d = l * h,
          f = l * u,
          g = c * h,
          v = c * u;
        ((e[0] = d + v * o),
          (e[4] = g * o - f),
          (e[8] = a * c),
          (e[1] = a * u),
          (e[5] = a * h),
          (e[9] = -o),
          (e[2] = f * o - g),
          (e[6] = v + d * o),
          (e[10] = a * l));
      } else if (t.order === "ZXY") {
        let d = l * h,
          f = l * u,
          g = c * h,
          v = c * u;
        ((e[0] = d - v * o),
          (e[4] = -a * u),
          (e[8] = g + f * o),
          (e[1] = f + g * o),
          (e[5] = a * h),
          (e[9] = v - d * o),
          (e[2] = -a * c),
          (e[6] = o),
          (e[10] = a * l));
      } else if (t.order === "ZYX") {
        let d = a * h,
          f = a * u,
          g = o * h,
          v = o * u;
        ((e[0] = l * h),
          (e[4] = g * c - f),
          (e[8] = d * c + v),
          (e[1] = l * u),
          (e[5] = v * c + d),
          (e[9] = f * c - g),
          (e[2] = -c),
          (e[6] = o * l),
          (e[10] = a * l));
      } else if (t.order === "YZX") {
        let d = a * l,
          f = a * c,
          g = o * l,
          v = o * c;
        ((e[0] = l * h),
          (e[4] = v - d * u),
          (e[8] = g * u + f),
          (e[1] = u),
          (e[5] = a * h),
          (e[9] = -o * h),
          (e[2] = -c * h),
          (e[6] = f * u + g),
          (e[10] = d - v * u));
      } else if (t.order === "XZY") {
        let d = a * l,
          f = a * c,
          g = o * l,
          v = o * c;
        ((e[0] = l * h),
          (e[4] = -u),
          (e[8] = c * h),
          (e[1] = d * u + v),
          (e[5] = a * h),
          (e[9] = f * u - g),
          (e[2] = g * u - f),
          (e[6] = o * h),
          (e[10] = v * u + d));
      }
      return (
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(t) {
      return this.compose(Td, t, Ed);
    }
    lookAt(t, e, n) {
      let i = this.elements;
      return (
        we.subVectors(t, e),
        we.lengthSq() === 0 && (we.z = 1),
        we.normalize(),
        an.crossVectors(n, we),
        an.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (we.x += 1e-4) : (we.z += 1e-4),
          we.normalize(),
          an.crossVectors(n, we)),
        an.normalize(),
        Ur.crossVectors(we, an),
        (i[0] = an.x),
        (i[4] = Ur.x),
        (i[8] = we.x),
        (i[1] = an.y),
        (i[5] = Ur.y),
        (i[9] = we.y),
        (i[2] = an.z),
        (i[6] = Ur.z),
        (i[10] = we.z),
        this
      );
    }
    multiply(t, e) {
      return e !== void 0
        ? (console.warn(
            "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.",
          ),
          this.multiplyMatrices(t, e))
        : this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      let n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        o = n[4],
        l = n[8],
        c = n[12],
        h = n[1],
        u = n[5],
        d = n[9],
        f = n[13],
        g = n[2],
        v = n[6],
        x = n[10],
        m = n[14],
        p = n[3],
        _ = n[7],
        y = n[11],
        w = n[15],
        A = i[0],
        L = i[4],
        I = i[8],
        G = i[12],
        O = i[1],
        P = i[5],
        M = i[9],
        E = i[13],
        D = i[2],
        B = i[6],
        z = i[10],
        U = i[14],
        nt = i[3],
        lt = i[7],
        k = i[11],
        W = i[15];
      return (
        (r[0] = a * A + o * O + l * D + c * nt),
        (r[4] = a * L + o * P + l * B + c * lt),
        (r[8] = a * I + o * M + l * z + c * k),
        (r[12] = a * G + o * E + l * U + c * W),
        (r[1] = h * A + u * O + d * D + f * nt),
        (r[5] = h * L + u * P + d * B + f * lt),
        (r[9] = h * I + u * M + d * z + f * k),
        (r[13] = h * G + u * E + d * U + f * W),
        (r[2] = g * A + v * O + x * D + m * nt),
        (r[6] = g * L + v * P + x * B + m * lt),
        (r[10] = g * I + v * M + x * z + m * k),
        (r[14] = g * G + v * E + x * U + m * W),
        (r[3] = p * A + _ * O + y * D + w * nt),
        (r[7] = p * L + _ * P + y * B + w * lt),
        (r[11] = p * I + _ * M + y * z + w * k),
        (r[15] = p * G + _ * E + y * U + w * W),
        this
      );
    }
    multiplyScalar(t) {
      let e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      let t = this.elements,
        e = t[0],
        n = t[4],
        i = t[8],
        r = t[12],
        a = t[1],
        o = t[5],
        l = t[9],
        c = t[13],
        h = t[2],
        u = t[6],
        d = t[10],
        f = t[14],
        g = t[3],
        v = t[7],
        x = t[11],
        m = t[15];
      return (
        g *
          (+r * l * u -
            i * c * u -
            r * o * d +
            n * c * d +
            i * o * f -
            n * l * f) +
        v *
          (+e * l * f -
            e * c * d +
            r * a * d -
            i * a * f +
            i * c * h -
            r * l * h) +
        x *
          (+e * c * u -
            e * o * f -
            r * a * u +
            n * a * f +
            r * o * h -
            n * c * h) +
        m *
          (-i * o * h -
            e * l * u +
            e * o * d +
            i * a * u -
            n * a * d +
            n * l * h)
      );
    }
    transpose() {
      let t = this.elements,
        e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, n) {
      let i = this.elements;
      return (
        t.isVector3
          ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
          : ((i[12] = t), (i[13] = e), (i[14] = n)),
        this
      );
    }
    invert() {
      let t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        l = t[6],
        c = t[7],
        h = t[8],
        u = t[9],
        d = t[10],
        f = t[11],
        g = t[12],
        v = t[13],
        x = t[14],
        m = t[15],
        p =
          u * x * c - v * d * c + v * l * f - o * x * f - u * l * m + o * d * m,
        _ =
          g * d * c - h * x * c - g * l * f + a * x * f + h * l * m - a * d * m,
        y =
          h * v * c - g * u * c + g * o * f - a * v * f - h * o * m + a * u * m,
        w =
          g * u * l - h * v * l - g * o * d + a * v * d + h * o * x - a * u * x,
        A = e * p + n * _ + i * y + r * w;
      if (A === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let L = 1 / A;
      return (
        (t[0] = p * L),
        (t[1] =
          (v * d * r -
            u * x * r -
            v * i * f +
            n * x * f +
            u * i * m -
            n * d * m) *
          L),
        (t[2] =
          (o * x * r -
            v * l * r +
            v * i * c -
            n * x * c -
            o * i * m +
            n * l * m) *
          L),
        (t[3] =
          (u * l * r -
            o * d * r -
            u * i * c +
            n * d * c +
            o * i * f -
            n * l * f) *
          L),
        (t[4] = _ * L),
        (t[5] =
          (h * x * r -
            g * d * r +
            g * i * f -
            e * x * f -
            h * i * m +
            e * d * m) *
          L),
        (t[6] =
          (g * l * r -
            a * x * r -
            g * i * c +
            e * x * c +
            a * i * m -
            e * l * m) *
          L),
        (t[7] =
          (a * d * r -
            h * l * r +
            h * i * c -
            e * d * c -
            a * i * f +
            e * l * f) *
          L),
        (t[8] = y * L),
        (t[9] =
          (g * u * r -
            h * v * r -
            g * n * f +
            e * v * f +
            h * n * m -
            e * u * m) *
          L),
        (t[10] =
          (a * v * r -
            g * o * r +
            g * n * c -
            e * v * c -
            a * n * m +
            e * o * m) *
          L),
        (t[11] =
          (h * o * r -
            a * u * r -
            h * n * c +
            e * u * c +
            a * n * f -
            e * o * f) *
          L),
        (t[12] = w * L),
        (t[13] =
          (h * v * i -
            g * u * i +
            g * n * d -
            e * v * d -
            h * n * x +
            e * u * x) *
          L),
        (t[14] =
          (g * o * i -
            a * v * i -
            g * n * l +
            e * v * l +
            a * n * x -
            e * o * x) *
          L),
        (t[15] =
          (a * u * i -
            h * o * i +
            h * n * l -
            e * u * l -
            a * n * d +
            e * o * d) *
          L),
        this
      );
    }
    scale(t) {
      let e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z;
      return (
        (e[0] *= n),
        (e[4] *= i),
        (e[8] *= r),
        (e[1] *= n),
        (e[5] *= i),
        (e[9] *= r),
        (e[2] *= n),
        (e[6] *= i),
        (e[10] *= r),
        (e[3] *= n),
        (e[7] *= i),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      let t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
      return (this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this);
    }
    makeRotationX(t) {
      let e = Math.cos(t),
        n = Math.sin(t);
      return (this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(t) {
      let e = Math.cos(t),
        n = Math.sin(t);
      return (this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(t) {
      let e = Math.cos(t),
        n = Math.sin(t);
      return (this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(t, e) {
      let n = Math.cos(e),
        i = Math.sin(e),
        r = 1 - n,
        a = t.x,
        o = t.y,
        l = t.z,
        c = r * a,
        h = r * o;
      return (
        this.set(
          c * a + n,
          c * o - i * l,
          c * l + i * o,
          0,
          c * o + i * l,
          h * o + n,
          h * l - i * a,
          0,
          c * l - i * o,
          h * l + i * a,
          r * l * l + n,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    makeScale(t, e, n) {
      return (this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
    }
    makeShear(t, e, n, i, r, a) {
      return (this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this);
    }
    compose(t, e, n) {
      let i = this.elements,
        r = e._x,
        a = e._y,
        o = e._z,
        l = e._w,
        c = r + r,
        h = a + a,
        u = o + o,
        d = r * c,
        f = r * h,
        g = r * u,
        v = a * h,
        x = a * u,
        m = o * u,
        p = l * c,
        _ = l * h,
        y = l * u,
        w = n.x,
        A = n.y,
        L = n.z;
      return (
        (i[0] = (1 - (v + m)) * w),
        (i[1] = (f + y) * w),
        (i[2] = (g - _) * w),
        (i[3] = 0),
        (i[4] = (f - y) * A),
        (i[5] = (1 - (d + m)) * A),
        (i[6] = (x + p) * A),
        (i[7] = 0),
        (i[8] = (g + _) * L),
        (i[9] = (x - p) * L),
        (i[10] = (1 - (d + v)) * L),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        this
      );
    }
    decompose(t, e, n) {
      let i = this.elements,
        r = Zn.set(i[0], i[1], i[2]).length(),
        a = Zn.set(i[4], i[5], i[6]).length(),
        o = Zn.set(i[8], i[9], i[10]).length();
      (this.determinant() < 0 && (r = -r),
        (t.x = i[12]),
        (t.y = i[13]),
        (t.z = i[14]),
        Pe.copy(this));
      let c = 1 / r,
        h = 1 / a,
        u = 1 / o;
      return (
        (Pe.elements[0] *= c),
        (Pe.elements[1] *= c),
        (Pe.elements[2] *= c),
        (Pe.elements[4] *= h),
        (Pe.elements[5] *= h),
        (Pe.elements[6] *= h),
        (Pe.elements[8] *= u),
        (Pe.elements[9] *= u),
        (Pe.elements[10] *= u),
        e.setFromRotationMatrix(Pe),
        (n.x = r),
        (n.y = a),
        (n.z = o),
        this
      );
    }
    makePerspective(t, e, n, i, r, a) {
      a === void 0 &&
        console.warn(
          "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.",
        );
      let o = this.elements,
        l = (2 * r) / (e - t),
        c = (2 * r) / (n - i),
        h = (e + t) / (e - t),
        u = (n + i) / (n - i),
        d = -(a + r) / (a - r),
        f = (-2 * a * r) / (a - r);
      return (
        (o[0] = l),
        (o[4] = 0),
        (o[8] = h),
        (o[12] = 0),
        (o[1] = 0),
        (o[5] = c),
        (o[9] = u),
        (o[13] = 0),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = d),
        (o[14] = f),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = -1),
        (o[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, n, i, r, a) {
      let o = this.elements,
        l = 1 / (e - t),
        c = 1 / (n - i),
        h = 1 / (a - r),
        u = (e + t) * l,
        d = (n + i) * c,
        f = (a + r) * h;
      return (
        (o[0] = 2 * l),
        (o[4] = 0),
        (o[8] = 0),
        (o[12] = -u),
        (o[1] = 0),
        (o[5] = 2 * c),
        (o[9] = 0),
        (o[13] = -d),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = -2 * h),
        (o[14] = -f),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = 0),
        (o[15] = 1),
        this
      );
    }
    equals(t) {
      let e = this.elements,
        n = t.elements;
      for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      let n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        (t[e + 9] = n[9]),
        (t[e + 10] = n[10]),
        (t[e + 11] = n[11]),
        (t[e + 12] = n[12]),
        (t[e + 13] = n[13]),
        (t[e + 14] = n[14]),
        (t[e + 15] = n[15]),
        t
      );
    }
  };
mt.prototype.isMatrix4 = !0;
var Zn = new b(),
  Pe = new mt(),
  Td = new b(0, 0, 0),
  Ed = new b(1, 1, 1),
  an = new b(),
  Ur = new b(),
  we = new b(),
  ql = new mt(),
  Xl = new oe(),
  xi = class s {
    constructor(t = 0, e = 0, n = 0, i = s.DefaultOrder) {
      ((this._x = t), (this._y = e), (this._z = n), (this._order = i));
    }
    get x() {
      return this._x;
    }
    set x(t) {
      ((this._x = t), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(t) {
      ((this._y = t), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(t) {
      ((this._z = t), this._onChangeCallback());
    }
    get order() {
      return this._order;
    }
    set order(t) {
      ((this._order = t), this._onChangeCallback());
    }
    set(t, e, n, i = this._order) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
      let i = t.elements,
        r = i[0],
        a = i[4],
        o = i[8],
        l = i[1],
        c = i[5],
        h = i[9],
        u = i[2],
        d = i[6],
        f = i[10];
      switch (e) {
        case "XYZ":
          ((this._y = Math.asin(de(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-h, f)), (this._z = Math.atan2(-a, r)))
              : ((this._x = Math.atan2(d, c)), (this._z = 0)));
          break;
        case "YXZ":
          ((this._x = Math.asin(-de(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(l, c)))
              : ((this._y = Math.atan2(-u, r)), (this._z = 0)));
          break;
        case "ZXY":
          ((this._x = Math.asin(de(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
              : ((this._y = 0), (this._z = Math.atan2(l, r))));
          break;
        case "ZYX":
          ((this._y = Math.asin(-de(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(l, r)))
              : ((this._x = 0), (this._z = Math.atan2(-a, c))));
          break;
        case "YZX":
          ((this._z = Math.asin(de(l, -1, 1))),
            Math.abs(l) < 0.9999999
              ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, r)))
              : ((this._x = 0), (this._y = Math.atan2(o, f))));
          break;
        case "XZY":
          ((this._z = Math.asin(-de(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, r)))
              : ((this._x = Math.atan2(-h, f)), (this._y = 0)));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              e,
          );
      }
      return ((this._order = e), n === !0 && this._onChangeCallback(), this);
    }
    setFromQuaternion(t, e, n) {
      return (
        ql.makeRotationFromQuaternion(t),
        this.setFromRotationMatrix(ql, e, n)
      );
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return (Xl.setFromEuler(this), this.setFromQuaternion(Xl, t));
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        t[3] !== void 0 && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    toVector3(t) {
      return t
        ? t.set(this._x, this._y, this._z)
        : new b(this._x, this._y, this._z);
    }
    _onChange(t) {
      return ((this._onChangeCallback = t), this);
    }
    _onChangeCallback() {}
  };
xi.prototype.isEuler = !0;
xi.DefaultOrder = "XYZ";
xi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
var bs = class {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = ((1 << t) | 0) >>> 0;
    }
    enable(t) {
      this.mask |= (1 << t) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= (1 << t) | 0;
    }
    disable(t) {
      this.mask &= ~((1 << t) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return (this.mask & t.mask) !== 0;
    }
    isEnabled(t) {
      return (this.mask & ((1 << t) | 0)) !== 0;
    }
  },
  Ad = 0,
  Jl = new b(),
  Qn = new oe(),
  Ye = new mt(),
  Hr = new b(),
  Bi = new b(),
  Rd = new b(),
  Ld = new oe(),
  Yl = new b(1, 0, 0),
  Zl = new b(0, 1, 0),
  Ql = new b(0, 0, 1),
  Cd = { type: "added" },
  $l = { type: "removed" },
  Wt = class s extends tn {
    constructor() {
      (super(),
        Object.defineProperty(this, "id", { value: Ad++ }),
        (this.uuid = Ee()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = s.DefaultUp.clone()));
      let t = new b(),
        e = new xi(),
        n = new oe(),
        i = new b(1, 1, 1);
      function r() {
        n.setFromEuler(e, !1);
      }
      function a() {
        e.setFromQuaternion(n, void 0, !1);
      }
      (e._onChange(r),
        n._onChange(a),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new mt() },
          normalMatrix: { value: new ee() },
        }),
        (this.matrix = new mt()),
        (this.matrixWorld = new mt()),
        (this.matrixAutoUpdate = s.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new bs()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {}));
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale));
    }
    applyQuaternion(t) {
      return (this.quaternion.premultiply(t), this);
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return (Qn.setFromAxisAngle(t, e), this.quaternion.multiply(Qn), this);
    }
    rotateOnWorldAxis(t, e) {
      return (Qn.setFromAxisAngle(t, e), this.quaternion.premultiply(Qn), this);
    }
    rotateX(t) {
      return this.rotateOnAxis(Yl, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(Zl, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(Ql, t);
    }
    translateOnAxis(t, e) {
      return (
        Jl.copy(t).applyQuaternion(this.quaternion),
        this.position.add(Jl.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis(Yl, t);
    }
    translateY(t) {
      return this.translateOnAxis(Zl, t);
    }
    translateZ(t) {
      return this.translateOnAxis(Ql, t);
    }
    localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return t.applyMatrix4(Ye.copy(this.matrixWorld).invert());
    }
    lookAt(t, e, n) {
      t.isVector3 ? Hr.copy(t) : Hr.set(t, e, n);
      let i = this.parent;
      (this.updateWorldMatrix(!0, !1),
        Bi.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? Ye.lookAt(Bi, Hr, this.up)
          : Ye.lookAt(Hr, Bi, this.up),
        this.quaternion.setFromRotationMatrix(Ye),
        i &&
          (Ye.extractRotation(i.matrixWorld),
          Qn.setFromRotationMatrix(Ye),
          this.quaternion.premultiply(Qn.invert())));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return t === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            t,
          ),
          this)
        : (t && t.isObject3D
            ? (t.parent !== null && t.parent.remove(t),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(Cd))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                t,
              ),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      let e = this.children.indexOf(t);
      return (
        e !== -1 &&
          ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent($l)),
        this
      );
    }
    removeFromParent() {
      let t = this.parent;
      return (t !== null && t.remove(this), this);
    }
    clear() {
      for (let t = 0; t < this.children.length; t++) {
        let e = this.children[t];
        ((e.parent = null), e.dispatchEvent($l));
      }
      return ((this.children.length = 0), this);
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        Ye.copy(this.matrixWorld).invert(),
        t.parent !== null &&
          (t.parent.updateWorldMatrix(!0, !1),
          Ye.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(Ye),
        this.add(t),
        t.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        let a = this.children[n].getObjectByProperty(t, e);
        if (a !== void 0) return a;
      }
    }
    getWorldPosition(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Bi, t, Rd),
        t
      );
    }
    getWorldScale(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Bi, Ld, t),
        t
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      let e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      let e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (this.visible === !1) return;
      t(this);
      let e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      let e = this.parent;
      e !== null && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      (this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0));
    }
    updateMatrixWorld(t) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0)));
      let e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
    }
    updateWorldMatrix(t, e) {
      let n = this.parent;
      if (
        (t === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            ),
        e === !0)
      ) {
        let i = this.children;
        for (let r = 0, a = i.length; r < a; r++)
          i[r].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string",
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
        }),
        (n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      let i = {};
      ((i.uuid = this.uuid),
        (i.type = this.type),
        this.name !== "" && (i.name = this.name),
        this.castShadow === !0 && (i.castShadow = !0),
        this.receiveShadow === !0 && (i.receiveShadow = !0),
        this.visible === !1 && (i.visible = !1),
        this.frustumCulled === !1 && (i.frustumCulled = !1),
        this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
        JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null &&
            (i.instanceColor = this.instanceColor.toJSON())));
      function r(o, l) {
        return (o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid);
      }
      if (this.isScene)
        (this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(t).uuid)),
          this.environment &&
            this.environment.isTexture &&
            (i.environment = this.environment.toJSON(t).uuid));
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        let o = this.geometry.parameters;
        if (o !== void 0 && o.shapes !== void 0) {
          let l = o.shapes;
          if (Array.isArray(l))
            for (let c = 0, h = l.length; c < h; c++) {
              let u = l[c];
              r(t.shapes, u);
            }
          else r(t.shapes, l);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      )
        if (Array.isArray(this.material)) {
          let o = [];
          for (let l = 0, c = this.material.length; l < c; l++)
            o.push(r(t.materials, this.material[l]));
          i.material = o;
        } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let o = 0; o < this.children.length; o++)
          i.children.push(this.children[o].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let o = 0; o < this.animations.length; o++) {
          let l = this.animations[o];
          i.animations.push(r(t.animations, l));
        }
      }
      if (e) {
        let o = a(t.geometries),
          l = a(t.materials),
          c = a(t.textures),
          h = a(t.images),
          u = a(t.shapes),
          d = a(t.skeletons),
          f = a(t.animations);
        (o.length > 0 && (n.geometries = o),
          l.length > 0 && (n.materials = l),
          c.length > 0 && (n.textures = c),
          h.length > 0 && (n.images = h),
          u.length > 0 && (n.shapes = u),
          d.length > 0 && (n.skeletons = d),
          f.length > 0 && (n.animations = f));
      }
      return ((n.object = i), n);
      function a(o) {
        let l = [];
        for (let c in o) {
          let h = o[c];
          (delete h.metadata, l.push(h));
        }
        return l;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        e === !0)
      )
        for (let n = 0; n < t.children.length; n++) {
          let i = t.children[n];
          this.add(i.clone());
        }
      return this;
    }
  };
Wt.DefaultUp = new b(0, 1, 0);
Wt.DefaultMatrixAutoUpdate = !0;
Wt.prototype.isObject3D = !0;
var Ie = new b(),
  Ze = new b(),
  Ta = new b(),
  Qe = new b(),
  $n = new b(),
  Kn = new b(),
  Kl = new b(),
  Ea = new b(),
  Aa = new b(),
  Ra = new b(),
  pe = class s {
    constructor(t = new b(), e = new b(), n = new b()) {
      ((this.a = t), (this.b = e), (this.c = n));
    }
    static getNormal(t, e, n, i) {
      (i.subVectors(n, e), Ie.subVectors(t, e), i.cross(Ie));
      let r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
      (Ie.subVectors(i, e), Ze.subVectors(n, e), Ta.subVectors(t, e));
      let a = Ie.dot(Ie),
        o = Ie.dot(Ze),
        l = Ie.dot(Ta),
        c = Ze.dot(Ze),
        h = Ze.dot(Ta),
        u = a * c - o * o;
      if (u === 0) return r.set(-2, -1, -1);
      let d = 1 / u,
        f = (c * l - o * h) * d,
        g = (a * h - o * l) * d;
      return r.set(1 - f - g, g, f);
    }
    static containsPoint(t, e, n, i) {
      return (
        this.getBarycoord(t, e, n, i, Qe),
        Qe.x >= 0 && Qe.y >= 0 && Qe.x + Qe.y <= 1
      );
    }
    static getUV(t, e, n, i, r, a, o, l) {
      return (
        this.getBarycoord(t, e, n, i, Qe),
        l.set(0, 0),
        l.addScaledVector(r, Qe.x),
        l.addScaledVector(a, Qe.y),
        l.addScaledVector(o, Qe.z),
        l
      );
    }
    static isFrontFacing(t, e, n, i) {
      return (
        Ie.subVectors(n, e),
        Ze.subVectors(t, e),
        Ie.cross(Ze).dot(i) < 0
      );
    }
    set(t, e, n) {
      return (this.a.copy(t), this.b.copy(e), this.c.copy(n), this);
    }
    setFromPointsAndIndices(t, e, n, i) {
      return (this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this);
    }
    setFromAttributeAndIndices(t, e, n, i) {
      return (
        this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this);
    }
    getArea() {
      return (
        Ie.subVectors(this.c, this.b),
        Ze.subVectors(this.a, this.b),
        0.5 * Ie.cross(Ze).length()
      );
    }
    getMidpoint(t) {
      return t
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return s.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return s.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getUV(t, e, n, i, r) {
      return s.getUV(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
      return s.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return s.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      let n = this.a,
        i = this.b,
        r = this.c,
        a,
        o;
      ($n.subVectors(i, n), Kn.subVectors(r, n), Ea.subVectors(t, n));
      let l = $n.dot(Ea),
        c = Kn.dot(Ea);
      if (l <= 0 && c <= 0) return e.copy(n);
      Aa.subVectors(t, i);
      let h = $n.dot(Aa),
        u = Kn.dot(Aa);
      if (h >= 0 && u <= h) return e.copy(i);
      let d = l * u - h * c;
      if (d <= 0 && l >= 0 && h <= 0)
        return ((a = l / (l - h)), e.copy(n).addScaledVector($n, a));
      Ra.subVectors(t, r);
      let f = $n.dot(Ra),
        g = Kn.dot(Ra);
      if (g >= 0 && f <= g) return e.copy(r);
      let v = f * c - l * g;
      if (v <= 0 && c >= 0 && g <= 0)
        return ((o = c / (c - g)), e.copy(n).addScaledVector(Kn, o));
      let x = h * g - f * u;
      if (x <= 0 && u - h >= 0 && f - g >= 0)
        return (
          Kl.subVectors(r, i),
          (o = (u - h) / (u - h + (f - g))),
          e.copy(i).addScaledVector(Kl, o)
        );
      let m = 1 / (x + v + d);
      return (
        (a = v * m),
        (o = d * m),
        e.copy(n).addScaledVector($n, a).addScaledVector(Kn, o)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  },
  Pd = 0,
  ne = class extends tn {
    constructor() {
      (super(),
        Object.defineProperty(this, "id", { value: Pd++ }),
        (this.uuid = Ee()),
        (this.name = ""),
        (this.type = "Material"),
        (this.fog = !0),
        (this.blending = Ji),
        (this.side = Ki),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.format = ae),
        (this.transparent = !1),
        (this.blendSrc = Qc),
        (this.blendDst = $c),
        (this.blendEquation = ui),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = Za),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = ld),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = ga),
        (this.stencilZFail = ga),
        (this.stencilZPass = ga),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0));
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      (this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t));
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (t !== void 0)
        for (let e in t) {
          let n = t[e];
          if (n === void 0) {
            console.warn("THREE.Material: '" + e + "' parameter is undefined.");
            continue;
          }
          if (e === "shading") {
            (console.warn(
              "THREE." +
                this.type +
                ": .shading has been removed. Use the boolean .flatShading instead.",
            ),
              (this.flatShading = n === Zc));
            continue;
          }
          let i = this[e];
          i !== void 0
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
                ? i.copy(n)
                : (this[e] = n)
            : console.warn(
                "THREE." +
                  this.type +
                  ": '" +
                  e +
                  "' is not a property of this material.",
              );
        }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      e && (t = { textures: {}, images: {} });
      let n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      ((n.uuid = this.uuid),
        (n.type = this.type),
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          this.emissiveIntensity !== 1 &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapIntensity !== void 0 &&
          (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        this.attenuationDistance !== void 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 &&
          (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== Ji && (n.blending = this.blending),
        this.side !== Ki && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.format !== ae && (n.format = this.format),
        this.transparent === !0 && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        this.rotation && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth &&
          this.linewidth !== 1 &&
          (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaToCoverage === !0 &&
          (n.alphaToCoverage = this.alphaToCoverage),
        this.premultipliedAlpha === !0 &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        this.wireframe === !0 && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" &&
          (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = this.flatShading),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData));
      function i(r) {
        let a = [];
        for (let o in r) {
          let l = r[o];
          (delete l.metadata, a.push(l));
        }
        return a;
      }
      if (e) {
        let r = i(t.textures),
          a = i(t.images);
        (r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a));
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      ((this.name = t.name),
        (this.fog = t.fog),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.format = t.format),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite));
      let e = t.clippingPlanes,
        n = null;
      if (e !== null) {
        let i = e.length;
        n = new Array(i);
        for (let r = 0; r !== i; ++r) n[r] = e[r].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
  };
ne.prototype.isMaterial = !0;
var ih = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  De = { h: 0, s: 0, l: 0 },
  Gr = { h: 0, s: 0, l: 0 };
function La(s, t, e) {
  return (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? s + 6 * (t - s) * e
      : e < 0.5
        ? t
        : e < 2 / 3
          ? s + 6 * (t - s) * (2 / 3 - e)
          : s
  );
}
function Ca(s) {
  return s < 0.04045
    ? 0.0773993808 * s
    : Math.pow(0.9478672986 * s + 0.0521327014, 2.4);
}
function Pa(s) {
  return s < 0.0031308 ? 12.92 * s : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
var dt = class {
  constructor(t, e, n) {
    return e === void 0 && n === void 0 ? this.set(t) : this.setRGB(t, e, n);
  }
  set(t) {
    return (
      t && t.isColor
        ? this.copy(t)
        : typeof t == "number"
          ? this.setHex(t)
          : typeof t == "string" && this.setStyle(t),
      this
    );
  }
  setScalar(t) {
    return ((this.r = t), (this.g = t), (this.b = t), this);
  }
  setHex(t) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (255 & t) / 255),
      this
    );
  }
  setRGB(t, e, n) {
    return ((this.r = t), (this.g = e), (this.b = n), this);
  }
  setHSL(t, e, n) {
    if (((t = ul(t, 1)), (e = de(e, 0, 1)), (n = de(n, 0, 1)), e === 0))
      this.r = this.g = this.b = n;
    else {
      let i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
        r = 2 * n - i;
      ((this.r = La(r, i, t + 1 / 3)),
        (this.g = La(r, i, t)),
        (this.b = La(r, i, t - 1 / 3)));
    }
    return this;
  }
  setStyle(t) {
    function e(i) {
      i !== void 0 &&
        parseFloat(i) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + t + " will be ignored.",
        );
    }
    let n;
    if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
      let i,
        r = n[1],
        a = n[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (
            (i =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(i[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(i[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(i[3], 10)) / 255),
              e(i[4]),
              this
            );
          if (
            (i =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(i[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(i[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(i[3], 10)) / 100),
              e(i[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (i =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a,
              ))
          ) {
            let o = parseFloat(i[1]) / 360,
              l = parseInt(i[2], 10) / 100,
              c = parseInt(i[3], 10) / 100;
            return (e(i[4]), this.setHSL(o, l, c));
          }
          break;
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      let i = n[1],
        r = i.length;
      if (r === 3)
        return (
          (this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255),
          (this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255),
          (this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255),
          this
        );
      if (r === 6)
        return (
          (this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255),
          (this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255),
          (this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255),
          this
        );
    }
    return t && t.length > 0 ? this.setColorName(t) : this;
  }
  setColorName(t) {
    let e = ih[t.toLowerCase()];
    return (
      e !== void 0
        ? this.setHex(e)
        : console.warn("THREE.Color: Unknown color " + t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return ((this.r = t.r), (this.g = t.g), (this.b = t.b), this);
  }
  copySRGBToLinear(t) {
    return ((this.r = Ca(t.r)), (this.g = Ca(t.g)), (this.b = Ca(t.b)), this);
  }
  copyLinearToSRGB(t) {
    return ((this.r = Pa(t.r)), (this.g = Pa(t.g)), (this.b = Pa(t.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex() {
    return (
      ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
    );
  }
  getHexString() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  }
  getHSL(t) {
    let e = this.r,
      n = this.g,
      i = this.b,
      r = Math.max(e, n, i),
      a = Math.min(e, n, i),
      o,
      l,
      c = (a + r) / 2;
    if (a === r) ((o = 0), (l = 0));
    else {
      let h = r - a;
      switch (((l = c <= 0.5 ? h / (r + a) : h / (2 - r - a)), r)) {
        case e:
          o = (n - i) / h + (n < i ? 6 : 0);
          break;
        case n:
          o = (i - e) / h + 2;
          break;
        case i:
          o = (e - n) / h + 4;
          break;
      }
      o /= 6;
    }
    return ((t.h = o), (t.s = l), (t.l = c), t);
  }
  getStyle() {
    return (
      "rgb(" +
      ((255 * this.r) | 0) +
      "," +
      ((255 * this.g) | 0) +
      "," +
      ((255 * this.b) | 0) +
      ")"
    );
  }
  offsetHSL(t, e, n) {
    return (
      this.getHSL(De),
      (De.h += t),
      (De.s += e),
      (De.l += n),
      this.setHSL(De.h, De.s, De.l),
      this
    );
  }
  add(t) {
    return ((this.r += t.r), (this.g += t.g), (this.b += t.b), this);
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r),
      (this.g = t.g + e.g),
      (this.b = t.b + e.b),
      this
    );
  }
  addScalar(t) {
    return ((this.r += t), (this.g += t), (this.b += t), this);
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return ((this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this);
  }
  multiplyScalar(t) {
    return ((this.r *= t), (this.g *= t), (this.b *= t), this);
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    );
  }
  lerpHSL(t, e) {
    (this.getHSL(De), t.getHSL(Gr));
    let n = Yi(De.h, Gr.h, e),
      i = Yi(De.s, Gr.s, e),
      r = Yi(De.l, Gr.l, e);
    return (this.setHSL(n, i, r), this);
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return ((this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t);
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)),
      (this.g = t.getY(e)),
      (this.b = t.getZ(e)),
      t.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
};
dt.NAMES = ih;
dt.prototype.isColor = !0;
dt.prototype.r = 1;
dt.prototype.g = 1;
dt.prototype.b = 1;
var _i = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "MeshBasicMaterial"),
      (this.color = new dt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = aa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      this
    );
  }
};
_i.prototype.isMeshBasicMaterial = !0;
var qt = new b(),
  Vr = new q(),
  $t = class {
    constructor(t, e, n) {
      if (Array.isArray(t))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array.",
        );
      ((this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = t !== void 0 ? t.length / e : 0),
        (this.normalized = n === !0),
        (this.usage = er),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0));
    }
    onUploadCallback() {}
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
    setUsage(t) {
      return ((this.usage = t), this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        this
      );
    }
    copyAt(t, e, n) {
      ((t *= this.itemSize), (n *= e.itemSize));
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    copyArray(t) {
      return (this.array.set(t), this);
    }
    copyColorsArray(t) {
      let e = this.array,
        n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let a = t[i];
        (a === void 0 &&
          (console.warn(
            "THREE.BufferAttribute.copyColorsArray(): color is undefined",
            i,
          ),
          (a = new dt())),
          (e[n++] = a.r),
          (e[n++] = a.g),
          (e[n++] = a.b));
      }
      return this;
    }
    copyVector2sArray(t) {
      let e = this.array,
        n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let a = t[i];
        (a === void 0 &&
          (console.warn(
            "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
            i,
          ),
          (a = new q())),
          (e[n++] = a.x),
          (e[n++] = a.y));
      }
      return this;
    }
    copyVector3sArray(t) {
      let e = this.array,
        n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let a = t[i];
        (a === void 0 &&
          (console.warn(
            "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
            i,
          ),
          (a = new b())),
          (e[n++] = a.x),
          (e[n++] = a.y),
          (e[n++] = a.z));
      }
      return this;
    }
    copyVector4sArray(t) {
      let e = this.array,
        n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let a = t[i];
        (a === void 0 &&
          (console.warn(
            "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
            i,
          ),
          (a = new Ot())),
          (e[n++] = a.x),
          (e[n++] = a.y),
          (e[n++] = a.z),
          (e[n++] = a.w));
      }
      return this;
    }
    applyMatrix3(t) {
      if (this.itemSize === 2)
        for (let e = 0, n = this.count; e < n; e++)
          (Vr.fromBufferAttribute(this, e),
            Vr.applyMatrix3(t),
            this.setXY(e, Vr.x, Vr.y));
      else if (this.itemSize === 3)
        for (let e = 0, n = this.count; e < n; e++)
          (qt.fromBufferAttribute(this, e),
            qt.applyMatrix3(t),
            this.setXYZ(e, qt.x, qt.y, qt.z));
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        ((qt.x = this.getX(e)),
          (qt.y = this.getY(e)),
          (qt.z = this.getZ(e)),
          qt.applyMatrix4(t),
          this.setXYZ(e, qt.x, qt.y, qt.z));
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        ((qt.x = this.getX(e)),
          (qt.y = this.getY(e)),
          (qt.z = this.getZ(e)),
          qt.applyNormalMatrix(t),
          this.setXYZ(e, qt.x, qt.y, qt.z));
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        ((qt.x = this.getX(e)),
          (qt.y = this.getY(e)),
          (qt.z = this.getZ(e)),
          qt.transformDirection(t),
          this.setXYZ(e, qt.x, qt.y, qt.z));
      return this;
    }
    set(t, e = 0) {
      return (this.array.set(t, e), this);
    }
    getX(t) {
      return this.array[t * this.itemSize];
    }
    setX(t, e) {
      return ((this.array[t * this.itemSize] = e), this);
    }
    getY(t) {
      return this.array[t * this.itemSize + 1];
    }
    setY(t, e) {
      return ((this.array[t * this.itemSize + 1] = e), this);
    }
    getZ(t) {
      return this.array[t * this.itemSize + 2];
    }
    setZ(t, e) {
      return ((this.array[t * this.itemSize + 2] = e), this);
    }
    getW(t) {
      return this.array[t * this.itemSize + 3];
    }
    setW(t, e) {
      return ((this.array[t * this.itemSize + 3] = e), this);
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t *= this.itemSize),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t *= this.itemSize),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return ((this.onUploadCallback = t), this);
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized,
      };
      return (
        this.name !== "" && (t.name = this.name),
        this.usage !== er && (t.usage = this.usage),
        (this.updateRange.offset === 0 && this.updateRange.count === -1) ||
          (t.updateRange = this.updateRange),
        t
      );
    }
  };
$t.prototype.isBufferAttribute = !0;
var ws = class extends $t {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
};
var Ms = class extends $t {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n);
    }
  },
  io = class extends $t {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  };
io.prototype.isFloat16BufferAttribute = !0;
var xt = class extends $t {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
};
var Id = 0,
  Te = new mt(),
  Ia = new Wt(),
  ti = new b(),
  Me = new xe(),
  Ui = new xe(),
  ie = new b(),
  Nt = class s extends tn {
    constructor() {
      (super(),
        Object.defineProperty(this, "id", { value: Id++ }),
        (this.uuid = Ee()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {}));
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (nh(t) > 65535 ? Ms : ws)(t, 1))
          : (this.index = t),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return ((this.attributes[t] = e), this);
    }
    deleteAttribute(t) {
      return (delete this.attributes[t], this);
    }
    hasAttribute(t) {
      return this.attributes[t] !== void 0;
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      ((this.drawRange.start = t), (this.drawRange.count = e));
    }
    applyMatrix4(t) {
      let e = this.attributes.position;
      e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
      let n = this.attributes.normal;
      if (n !== void 0) {
        let r = new ee().getNormalMatrix(t);
        (n.applyNormalMatrix(r), (n.needsUpdate = !0));
      }
      let i = this.attributes.tangent;
      return (
        i !== void 0 && (i.transformDirection(t), (i.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(t) {
      return (Te.makeRotationFromQuaternion(t), this.applyMatrix4(Te), this);
    }
    rotateX(t) {
      return (Te.makeRotationX(t), this.applyMatrix4(Te), this);
    }
    rotateY(t) {
      return (Te.makeRotationY(t), this.applyMatrix4(Te), this);
    }
    rotateZ(t) {
      return (Te.makeRotationZ(t), this.applyMatrix4(Te), this);
    }
    translate(t, e, n) {
      return (Te.makeTranslation(t, e, n), this.applyMatrix4(Te), this);
    }
    scale(t, e, n) {
      return (Te.makeScale(t, e, n), this.applyMatrix4(Te), this);
    }
    lookAt(t) {
      return (
        Ia.lookAt(t),
        Ia.updateMatrix(),
        this.applyMatrix4(Ia.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(ti).negate(),
        this.translate(ti.x, ti.y, ti.z),
        this
      );
    }
    setFromPoints(t) {
      let e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        let r = t[n];
        e.push(r.x, r.y, r.z || 0);
      }
      return (this.setAttribute("position", new xt(e, 3)), this);
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new xe());
      let t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        (console.error(
          'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this,
        ),
          this.boundingBox.set(
            new b(-1 / 0, -1 / 0, -1 / 0),
            new b(1 / 0, 1 / 0, 1 / 0),
          ));
      else {
        if (t !== void 0) {
          if ((this.boundingBox.setFromBufferAttribute(t), e))
            for (let n = 0, i = e.length; n < i; n++) {
              let r = e[n];
              (Me.setFromBufferAttribute(r),
                this.morphTargetsRelative
                  ? (ie.addVectors(this.boundingBox.min, Me.min),
                    this.boundingBox.expandByPoint(ie),
                    ie.addVectors(this.boundingBox.max, Me.max),
                    this.boundingBox.expandByPoint(ie))
                  : (this.boundingBox.expandByPoint(Me.min),
                    this.boundingBox.expandByPoint(Me.max)));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) ||
          isNaN(this.boundingBox.min.y) ||
          isNaN(this.boundingBox.min.z)) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
            this,
          );
      }
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new xn());
      let t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        (console.error(
          'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this,
        ),
          this.boundingSphere.set(new b(), 1 / 0));
      else if (t) {
        let n = this.boundingSphere.center;
        if ((Me.setFromBufferAttribute(t), e))
          for (let r = 0, a = e.length; r < a; r++) {
            let o = e[r];
            (Ui.setFromBufferAttribute(o),
              this.morphTargetsRelative
                ? (ie.addVectors(Me.min, Ui.min),
                  Me.expandByPoint(ie),
                  ie.addVectors(Me.max, Ui.max),
                  Me.expandByPoint(ie))
                : (Me.expandByPoint(Ui.min), Me.expandByPoint(Ui.max)));
          }
        Me.getCenter(n);
        let i = 0;
        for (let r = 0, a = t.count; r < a; r++)
          (ie.fromBufferAttribute(t, r),
            (i = Math.max(i, n.distanceToSquared(ie))));
        if (e)
          for (let r = 0, a = e.length; r < a; r++) {
            let o = e[r],
              l = this.morphTargetsRelative;
            for (let c = 0, h = o.count; c < h; c++)
              (ie.fromBufferAttribute(o, c),
                l && (ti.fromBufferAttribute(t, c), ie.add(ti)),
                (i = Math.max(i, n.distanceToSquared(ie))));
          }
        ((this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this,
            ));
      }
    }
    computeTangents() {
      let t = this.index,
        e = this.attributes;
      if (
        t === null ||
        e.position === void 0 ||
        e.normal === void 0 ||
        e.uv === void 0
      ) {
        console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
        );
        return;
      }
      let n = t.array,
        i = e.position.array,
        r = e.normal.array,
        a = e.uv.array,
        o = i.length / 3;
      e.tangent === void 0 &&
        this.setAttribute("tangent", new $t(new Float32Array(4 * o), 4));
      let l = e.tangent.array,
        c = [],
        h = [];
      for (let O = 0; O < o; O++) ((c[O] = new b()), (h[O] = new b()));
      let u = new b(),
        d = new b(),
        f = new b(),
        g = new q(),
        v = new q(),
        x = new q(),
        m = new b(),
        p = new b();
      function _(O, P, M) {
        (u.fromArray(i, 3 * O),
          d.fromArray(i, 3 * P),
          f.fromArray(i, 3 * M),
          g.fromArray(a, 2 * O),
          v.fromArray(a, 2 * P),
          x.fromArray(a, 2 * M),
          d.sub(u),
          f.sub(u),
          v.sub(g),
          x.sub(g));
        let E = 1 / (v.x * x.y - x.x * v.y);
        isFinite(E) &&
          (m
            .copy(d)
            .multiplyScalar(x.y)
            .addScaledVector(f, -v.y)
            .multiplyScalar(E),
          p
            .copy(f)
            .multiplyScalar(v.x)
            .addScaledVector(d, -x.x)
            .multiplyScalar(E),
          c[O].add(m),
          c[P].add(m),
          c[M].add(m),
          h[O].add(p),
          h[P].add(p),
          h[M].add(p));
      }
      let y = this.groups;
      y.length === 0 && (y = [{ start: 0, count: n.length }]);
      for (let O = 0, P = y.length; O < P; ++O) {
        let M = y[O],
          E = M.start,
          D = M.count;
        for (let B = E, z = E + D; B < z; B += 3)
          _(n[B + 0], n[B + 1], n[B + 2]);
      }
      let w = new b(),
        A = new b(),
        L = new b(),
        I = new b();
      function G(O) {
        (L.fromArray(r, 3 * O), I.copy(L));
        let P = c[O];
        (w.copy(P),
          w.sub(L.multiplyScalar(L.dot(P))).normalize(),
          A.crossVectors(I, P));
        let E = A.dot(h[O]) < 0 ? -1 : 1;
        ((l[4 * O] = w.x),
          (l[4 * O + 1] = w.y),
          (l[4 * O + 2] = w.z),
          (l[4 * O + 3] = E));
      }
      for (let O = 0, P = y.length; O < P; ++O) {
        let M = y[O],
          E = M.start,
          D = M.count;
        for (let B = E, z = E + D; B < z; B += 3)
          (G(n[B + 0]), G(n[B + 1]), G(n[B + 2]));
      }
    }
    computeVertexNormals() {
      let t = this.index,
        e = this.getAttribute("position");
      if (e !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0)
          ((n = new $t(new Float32Array(3 * e.count), 3)),
            this.setAttribute("normal", n));
        else for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0);
        let i = new b(),
          r = new b(),
          a = new b(),
          o = new b(),
          l = new b(),
          c = new b(),
          h = new b(),
          u = new b();
        if (t)
          for (let d = 0, f = t.count; d < f; d += 3) {
            let g = t.getX(d + 0),
              v = t.getX(d + 1),
              x = t.getX(d + 2);
            (i.fromBufferAttribute(e, g),
              r.fromBufferAttribute(e, v),
              a.fromBufferAttribute(e, x),
              h.subVectors(a, r),
              u.subVectors(i, r),
              h.cross(u),
              o.fromBufferAttribute(n, g),
              l.fromBufferAttribute(n, v),
              c.fromBufferAttribute(n, x),
              o.add(h),
              l.add(h),
              c.add(h),
              n.setXYZ(g, o.x, o.y, o.z),
              n.setXYZ(v, l.x, l.y, l.z),
              n.setXYZ(x, c.x, c.y, c.z));
          }
        else
          for (let d = 0, f = e.count; d < f; d += 3)
            (i.fromBufferAttribute(e, d + 0),
              r.fromBufferAttribute(e, d + 1),
              a.fromBufferAttribute(e, d + 2),
              h.subVectors(a, r),
              u.subVectors(i, r),
              h.cross(u),
              n.setXYZ(d + 0, h.x, h.y, h.z),
              n.setXYZ(d + 1, h.x, h.y, h.z),
              n.setXYZ(d + 2, h.x, h.y, h.z));
        (this.normalizeNormals(), (n.needsUpdate = !0));
      }
    }
    merge(t, e) {
      if (!(t && t.isBufferGeometry)) {
        console.error(
          "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
          t,
        );
        return;
      }
      e === void 0 &&
        ((e = 0),
        console.warn(
          "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.",
        ));
      let n = this.attributes;
      for (let i in n) {
        if (t.attributes[i] === void 0) continue;
        let a = n[i].array,
          o = t.attributes[i],
          l = o.array,
          c = o.itemSize * e,
          h = Math.min(l.length, a.length - c);
        for (let u = 0, d = c; u < h; u++, d++) a[d] = l[u];
      }
      return this;
    }
    normalizeNormals() {
      let t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        (ie.fromBufferAttribute(t, e),
          ie.normalize(),
          t.setXYZ(e, ie.x, ie.y, ie.z));
    }
    toNonIndexed() {
      function t(o, l) {
        let c = o.array,
          h = o.itemSize,
          u = o.normalized,
          d = new c.constructor(l.length * h),
          f = 0,
          g = 0;
        for (let v = 0, x = l.length; v < x; v++) {
          f = o.isInterleavedBufferAttribute
            ? l[v] * o.data.stride + o.offset
            : l[v] * h;
          for (let m = 0; m < h; m++) d[g++] = c[f++];
        }
        return new $t(d, h, u);
      }
      if (this.index === null)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
          ),
          this
        );
      let e = new s(),
        n = this.index.array,
        i = this.attributes;
      for (let o in i) {
        let l = i[o],
          c = t(l, n);
        e.setAttribute(o, c);
      }
      let r = this.morphAttributes;
      for (let o in r) {
        let l = [],
          c = r[o];
        for (let h = 0, u = c.length; h < u; h++) {
          let d = c[h],
            f = t(d, n);
          l.push(f);
        }
        e.morphAttributes[o] = l;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      let a = this.groups;
      for (let o = 0, l = a.length; o < l; o++) {
        let c = a[o];
        e.addGroup(c.start, c.count, c.materialIndex);
      }
      return e;
    }
    toJSON() {
      let t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type = this.type),
        this.name !== "" && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        this.parameters !== void 0)
      ) {
        let l = this.parameters;
        for (let c in l) l[c] !== void 0 && (t[c] = l[c]);
        return t;
      }
      t.data = { attributes: {} };
      let e = this.index;
      e !== null &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      let n = this.attributes;
      for (let l in n) {
        let c = n[l];
        t.data.attributes[l] = c.toJSON(t.data);
      }
      let i = {},
        r = !1;
      for (let l in this.morphAttributes) {
        let c = this.morphAttributes[l],
          h = [];
        for (let u = 0, d = c.length; u < d; u++) {
          let f = c[u];
          h.push(f.toJSON(t.data));
        }
        h.length > 0 && ((i[l] = h), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = i),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      let a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      let o = this.boundingSphere;
      return (
        o !== null &&
          (t.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius,
          }),
        t
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      ((this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      let e = {};
      this.name = t.name;
      let n = t.index;
      n !== null && this.setIndex(n.clone(e));
      let i = t.attributes;
      for (let c in i) {
        let h = i[c];
        this.setAttribute(c, h.clone(e));
      }
      let r = t.morphAttributes;
      for (let c in r) {
        let h = [],
          u = r[c];
        for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(e));
        this.morphAttributes[c] = h;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      let a = t.groups;
      for (let c = 0, h = a.length; c < h; c++) {
        let u = a[c];
        this.addGroup(u.start, u.count, u.materialIndex);
      }
      let o = t.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      let l = t.boundingSphere;
      return (
        l !== null && (this.boundingSphere = l.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        t.parameters !== void 0 &&
          (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
Nt.prototype.isBufferGeometry = !0;
var tc = new mt(),
  ei = new _n(),
  Da = new xn(),
  on = new b(),
  ln = new b(),
  cn = new b(),
  za = new b(),
  Na = new b(),
  Fa = new b(),
  kr = new b(),
  Wr = new b(),
  jr = new b(),
  qr = new q(),
  Xr = new q(),
  Jr = new q(),
  Oa = new b(),
  Yr = new b(),
  se = class extends Wt {
    constructor(t = new Nt(), e = new _i()) {
      (super(),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets());
    }
    copy(t) {
      return (
        super.copy(t),
        t.morphTargetInfluences !== void 0 &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        t.morphTargetDictionary !== void 0 &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary,
          )),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      let t = this.geometry;
      if (t.isBufferGeometry) {
        let e = t.morphAttributes,
          n = Object.keys(e);
        if (n.length > 0) {
          let i = e[n[0]];
          if (i !== void 0) {
            ((this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {}));
            for (let r = 0, a = i.length; r < a; r++) {
              let o = i[r].name || String(r);
              (this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[o] = r));
            }
          }
        }
      } else {
        let e = t.morphTargets;
        e !== void 0 &&
          e.length > 0 &&
          console.error(
            "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
      }
    }
    raycast(t, e) {
      let n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (
        i === void 0 ||
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Da.copy(n.boundingSphere),
        Da.applyMatrix4(r),
        t.ray.intersectsSphere(Da) === !1) ||
        (tc.copy(r).invert(),
        ei.copy(t.ray).applyMatrix4(tc),
        n.boundingBox !== null && ei.intersectsBox(n.boundingBox) === !1)
      )
        return;
      let a;
      if (n.isBufferGeometry) {
        let o = n.index,
          l = n.attributes.position,
          c = n.morphAttributes.position,
          h = n.morphTargetsRelative,
          u = n.attributes.uv,
          d = n.attributes.uv2,
          f = n.groups,
          g = n.drawRange;
        if (o !== null)
          if (Array.isArray(i))
            for (let v = 0, x = f.length; v < x; v++) {
              let m = f[v],
                p = i[m.materialIndex],
                _ = Math.max(m.start, g.start),
                y = Math.min(
                  o.count,
                  Math.min(m.start + m.count, g.start + g.count),
                );
              for (let w = _, A = y; w < A; w += 3) {
                let L = o.getX(w),
                  I = o.getX(w + 1),
                  G = o.getX(w + 2);
                ((a = Zr(this, p, t, ei, l, c, h, u, d, L, I, G)),
                  a &&
                    ((a.faceIndex = Math.floor(w / 3)),
                    (a.face.materialIndex = m.materialIndex),
                    e.push(a)));
              }
            }
          else {
            let v = Math.max(0, g.start),
              x = Math.min(o.count, g.start + g.count);
            for (let m = v, p = x; m < p; m += 3) {
              let _ = o.getX(m),
                y = o.getX(m + 1),
                w = o.getX(m + 2);
              ((a = Zr(this, i, t, ei, l, c, h, u, d, _, y, w)),
                a && ((a.faceIndex = Math.floor(m / 3)), e.push(a)));
            }
          }
        else if (l !== void 0)
          if (Array.isArray(i))
            for (let v = 0, x = f.length; v < x; v++) {
              let m = f[v],
                p = i[m.materialIndex],
                _ = Math.max(m.start, g.start),
                y = Math.min(
                  l.count,
                  Math.min(m.start + m.count, g.start + g.count),
                );
              for (let w = _, A = y; w < A; w += 3) {
                let L = w,
                  I = w + 1,
                  G = w + 2;
                ((a = Zr(this, p, t, ei, l, c, h, u, d, L, I, G)),
                  a &&
                    ((a.faceIndex = Math.floor(w / 3)),
                    (a.face.materialIndex = m.materialIndex),
                    e.push(a)));
              }
            }
          else {
            let v = Math.max(0, g.start),
              x = Math.min(l.count, g.start + g.count);
            for (let m = v, p = x; m < p; m += 3) {
              let _ = m,
                y = m + 1,
                w = m + 2;
              ((a = Zr(this, i, t, ei, l, c, h, u, d, _, y, w)),
                a && ((a.faceIndex = Math.floor(m / 3)), e.push(a)));
            }
          }
      } else
        n.isGeometry &&
          console.error(
            "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
    }
  };
se.prototype.isMesh = !0;
function Dd(s, t, e, n, i, r, a, o) {
  let l;
  if (
    ((l =
      t.side === Kt
        ? n.intersectTriangle(a, r, i, !0, o)
        : n.intersectTriangle(i, r, a, t.side !== vn, o)),
    l === null)
  )
    return null;
  (Yr.copy(o), Yr.applyMatrix4(s.matrixWorld));
  let c = e.ray.origin.distanceTo(Yr);
  return c < e.near || c > e.far
    ? null
    : { distance: c, point: Yr.clone(), object: s };
}
function Zr(s, t, e, n, i, r, a, o, l, c, h, u) {
  (on.fromBufferAttribute(i, c),
    ln.fromBufferAttribute(i, h),
    cn.fromBufferAttribute(i, u));
  let d = s.morphTargetInfluences;
  if (r && d) {
    (kr.set(0, 0, 0), Wr.set(0, 0, 0), jr.set(0, 0, 0));
    for (let g = 0, v = r.length; g < v; g++) {
      let x = d[g],
        m = r[g];
      x !== 0 &&
        (za.fromBufferAttribute(m, c),
        Na.fromBufferAttribute(m, h),
        Fa.fromBufferAttribute(m, u),
        a
          ? (kr.addScaledVector(za, x),
            Wr.addScaledVector(Na, x),
            jr.addScaledVector(Fa, x))
          : (kr.addScaledVector(za.sub(on), x),
            Wr.addScaledVector(Na.sub(ln), x),
            jr.addScaledVector(Fa.sub(cn), x)));
    }
    (on.add(kr), ln.add(Wr), cn.add(jr));
  }
  s.isSkinnedMesh &&
    (s.boneTransform(c, on), s.boneTransform(h, ln), s.boneTransform(u, cn));
  let f = Dd(s, t, e, n, on, ln, cn, Oa);
  if (f) {
    (o &&
      (qr.fromBufferAttribute(o, c),
      Xr.fromBufferAttribute(o, h),
      Jr.fromBufferAttribute(o, u),
      (f.uv = pe.getUV(Oa, on, ln, cn, qr, Xr, Jr, new q()))),
      l &&
        (qr.fromBufferAttribute(l, c),
        Xr.fromBufferAttribute(l, h),
        Jr.fromBufferAttribute(l, u),
        (f.uv2 = pe.getUV(Oa, on, ln, cn, qr, Xr, Jr, new q()))));
    let g = { a: c, b: h, c: u, normal: new b(), materialIndex: 0 };
    (pe.getNormal(on, ln, cn, g.normal), (f.face = g));
  }
  return f;
}
var On = class s extends Nt {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      }));
    let o = this;
    ((i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a)));
    let l = [],
      c = [],
      h = [],
      u = [],
      d = 0,
      f = 0;
    (g("z", "y", "x", -1, -1, n, e, t, a, r, 0),
      g("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
      g("x", "z", "y", 1, 1, t, n, e, i, a, 2),
      g("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
      g("x", "y", "z", 1, -1, t, e, n, i, r, 4),
      g("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
      this.setIndex(l),
      this.setAttribute("position", new xt(c, 3)),
      this.setAttribute("normal", new xt(h, 3)),
      this.setAttribute("uv", new xt(u, 2)));
    function g(v, x, m, p, _, y, w, A, L, I, G) {
      let O = y / L,
        P = w / I,
        M = y / 2,
        E = w / 2,
        D = A / 2,
        B = L + 1,
        z = I + 1,
        U = 0,
        nt = 0,
        lt = new b();
      for (let k = 0; k < z; k++) {
        let W = k * P - E;
        for (let ct = 0; ct < B; ct++) {
          let at = ct * O - M;
          ((lt[v] = at * p),
            (lt[x] = W * _),
            (lt[m] = D),
            c.push(lt.x, lt.y, lt.z),
            (lt[v] = 0),
            (lt[x] = 0),
            (lt[m] = A > 0 ? 1 : -1),
            h.push(lt.x, lt.y, lt.z),
            u.push(ct / L),
            u.push(1 - k / I),
            (U += 1));
        }
      }
      for (let k = 0; k < I; k++)
        for (let W = 0; W < L; W++) {
          let ct = d + W + B * k,
            at = d + W + B * (k + 1),
            ut = d + (W + 1) + B * (k + 1),
            zt = d + (W + 1) + B * k;
          (l.push(ct, at, zt), l.push(at, ut, zt), (nt += 6));
        }
      (o.addGroup(f, nt, G), (f += nt), (d += U));
    }
  }
  static fromJSON(t) {
    return new s(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments,
    );
  }
};
function bi(s) {
  let t = {};
  for (let e in s) {
    t[e] = {};
    for (let n in s[e]) {
      let i = s[e][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (t[e][n] = i.clone())
        : Array.isArray(i)
          ? (t[e][n] = i.slice())
          : (t[e][n] = i);
    }
  }
  return t;
}
function ue(s) {
  let t = {};
  for (let e = 0; e < s.length; e++) {
    let n = bi(s[e]);
    for (let i in n) t[i] = n[i];
  }
  return t;
}
var zd = { clone: bi, merge: ue },
  Nd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Fd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
  _e = class extends ne {
    constructor(t) {
      (super(),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader = Nd),
        (this.fragmentShader = Fd),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        t !== void 0 &&
          (t.attributes !== void 0 &&
            console.error(
              "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.",
            ),
          this.setValues(t)));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = bi(t.uniforms)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      ((e.glslVersion = this.glslVersion), (e.uniforms = {}));
      for (let i in this.uniforms) {
        let a = this.uniforms[i].value;
        a && a.isTexture
          ? (e.uniforms[i] = { type: "t", value: a.toJSON(t).uuid })
          : a && a.isColor
            ? (e.uniforms[i] = { type: "c", value: a.getHex() })
            : a && a.isVector2
              ? (e.uniforms[i] = { type: "v2", value: a.toArray() })
              : a && a.isVector3
                ? (e.uniforms[i] = { type: "v3", value: a.toArray() })
                : a && a.isVector4
                  ? (e.uniforms[i] = { type: "v4", value: a.toArray() })
                  : a && a.isMatrix3
                    ? (e.uniforms[i] = { type: "m3", value: a.toArray() })
                    : a && a.isMatrix4
                      ? (e.uniforms[i] = { type: "m4", value: a.toArray() })
                      : (e.uniforms[i] = { value: a });
      }
      (Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader));
      let n = {};
      for (let i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
      return (Object.keys(n).length > 0 && (e.extensions = n), e);
    }
  };
_e.prototype.isShaderMaterial = !0;
var wi = class extends Wt {
  constructor() {
    (super(),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new mt()),
      (this.projectionMatrix = new mt()),
      (this.projectionMatrixInverse = new mt()));
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    let e = this.matrixWorld.elements;
    return t.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(t) {
    (super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(t, e) {
    (super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
wi.prototype.isCamera = !0;
var re = class extends wi {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    (super(),
      (this.type = "PerspectiveCamera"),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    let e = (0.5 * this.getFilmHeight()) / t;
    ((this.fov = 2 * nr * Math.atan(e)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    let t = Math.tan(0.5 * gi * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return 2 * nr * Math.atan(Math.tan(0.5 * gi * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(t, e, n, i, r, a) {
    ((this.aspect = t / e),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    let t = this.near,
      e = (t * Math.tan(0.5 * gi * this.fov)) / this.zoom,
      n = 2 * e,
      i = this.aspect * n,
      r = -0.5 * i,
      a = this.view;
    if (this.view !== null && this.view.enabled) {
      let l = a.fullWidth,
        c = a.fullHeight;
      ((r += (a.offsetX * i) / l),
        (e -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c));
    }
    let o = this.filmOffset;
    (o !== 0 && (r += (t * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
};
re.prototype.isPerspectiveCamera = !0;
var ni = 90,
  ii = 1,
  rr = class extends Wt {
    constructor(t, e, n) {
      if (
        (super(), (this.type = "CubeCamera"), n.isWebGLCubeRenderTarget !== !0)
      ) {
        console.error(
          "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.",
        );
        return;
      }
      this.renderTarget = n;
      let i = new re(ni, ii, t, e);
      ((i.layers = this.layers),
        i.up.set(0, -1, 0),
        i.lookAt(new b(1, 0, 0)),
        this.add(i));
      let r = new re(ni, ii, t, e);
      ((r.layers = this.layers),
        r.up.set(0, -1, 0),
        r.lookAt(new b(-1, 0, 0)),
        this.add(r));
      let a = new re(ni, ii, t, e);
      ((a.layers = this.layers),
        a.up.set(0, 0, 1),
        a.lookAt(new b(0, 1, 0)),
        this.add(a));
      let o = new re(ni, ii, t, e);
      ((o.layers = this.layers),
        o.up.set(0, 0, -1),
        o.lookAt(new b(0, -1, 0)),
        this.add(o));
      let l = new re(ni, ii, t, e);
      ((l.layers = this.layers),
        l.up.set(0, -1, 0),
        l.lookAt(new b(0, 0, 1)),
        this.add(l));
      let c = new re(ni, ii, t, e);
      ((c.layers = this.layers),
        c.up.set(0, -1, 0),
        c.lookAt(new b(0, 0, -1)),
        this.add(c));
    }
    update(t, e) {
      this.parent === null && this.updateMatrixWorld();
      let n = this.renderTarget,
        [i, r, a, o, l, c] = this.children,
        h = t.xr.enabled,
        u = t.getRenderTarget();
      t.xr.enabled = !1;
      let d = n.texture.generateMipmaps;
      ((n.texture.generateMipmaps = !1),
        t.setRenderTarget(n, 0),
        t.render(e, i),
        t.setRenderTarget(n, 1),
        t.render(e, r),
        t.setRenderTarget(n, 2),
        t.render(e, a),
        t.setRenderTarget(n, 3),
        t.render(e, o),
        t.setRenderTarget(n, 4),
        t.render(e, l),
        (n.texture.generateMipmaps = d),
        t.setRenderTarget(n, 5),
        t.render(e, c),
        t.setRenderTarget(u),
        (t.xr.enabled = h));
    }
  },
  Mi = class extends ce {
    constructor(t, e, n, i, r, a, o, l, c, h) {
      ((t = t !== void 0 ? t : []),
        (e = e !== void 0 ? e : Lr),
        super(t, e, n, i, r, a, o, l, c, h),
        (this.flipY = !1));
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  };
Mi.prototype.isCubeTexture = !0;
var Ss = class extends ye {
  constructor(t, e, n) {
    (Number.isInteger(e) &&
      (console.warn(
        "THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )",
      ),
      (e = n)),
      super(t, t, e),
      (e = e || {}),
      (this.texture = new Mi(
        void 0,
        e.mapping,
        e.wrapS,
        e.wrapT,
        e.magFilter,
        e.minFilter,
        e.format,
        e.type,
        e.anisotropy,
        e.encoding,
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        e.generateMipmaps !== void 0 && e.generateMipmaps),
      (this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ge),
      (this.texture._needsFlipEnvMap = !1));
  }
  fromEquirectangularTexture(t, e) {
    ((this.texture.type = e.type),
      (this.texture.format = ae),
      (this.texture.encoding = e.encoding),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter));
    let n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new On(5, 5, 5),
      r = new _e({
        name: "CubemapFromEquirect",
        uniforms: bi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Kt,
        blending: dn,
      });
    r.uniforms.tEquirect.value = e;
    let a = new se(i, r),
      o = e.minFilter;
    return (
      e.minFilter === la && (e.minFilter = ge),
      new rr(1, 10, this).update(t, a),
      (e.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(t, e, n, i) {
    let r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) (t.setRenderTarget(this, a), t.clear(e, n, i));
    t.setRenderTarget(r);
  }
};
Ss.prototype.isWebGLCubeRenderTarget = !0;
var Ba = new b(),
  Od = new b(),
  Bd = new ee(),
  ze = class {
    constructor(t = new b(1, 0, 0), e = 0) {
      ((this.normal = t), (this.constant = e));
    }
    set(t, e) {
      return (this.normal.copy(t), (this.constant = e), this);
    }
    setComponents(t, e, n, i) {
      return (this.normal.set(t, e, n), (this.constant = i), this);
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return (this.normal.copy(t), (this.constant = -e.dot(this.normal)), this);
    }
    setFromCoplanarPoints(t, e, n) {
      let i = Ba.subVectors(n, e).cross(Od.subVectors(t, e)).normalize();
      return (this.setFromNormalAndCoplanarPoint(i, t), this);
    }
    copy(t) {
      return (this.normal.copy(t.normal), (this.constant = t.constant), this);
    }
    normalize() {
      let t = 1 / this.normal.length();
      return (this.normal.multiplyScalar(t), (this.constant *= t), this);
    }
    negate() {
      return ((this.constant *= -1), this.normal.negate(), this);
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e
        .copy(this.normal)
        .multiplyScalar(-this.distanceToPoint(t))
        .add(t);
    }
    intersectLine(t, e) {
      let n = t.delta(Ba),
        i = this.normal.dot(n);
      if (i === 0)
        return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
      let r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
    }
    intersectsLine(t) {
      let e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      let n = e || Bd.getNormalMatrix(t),
        i = this.coplanarPoint(Ba).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return ((this.constant = -i.dot(r)), this);
    }
    translate(t) {
      return ((this.constant -= t.dot(this.normal)), this);
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
ze.prototype.isPlane = !0;
var ri = new xn(),
  Qr = new b(),
  Si = class {
    constructor(
      t = new ze(),
      e = new ze(),
      n = new ze(),
      i = new ze(),
      r = new ze(),
      a = new ze(),
    ) {
      this.planes = [t, e, n, i, r, a];
    }
    set(t, e, n, i, r, a) {
      let o = this.planes;
      return (
        o[0].copy(t),
        o[1].copy(e),
        o[2].copy(n),
        o[3].copy(i),
        o[4].copy(r),
        o[5].copy(a),
        this
      );
    }
    copy(t) {
      let e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t) {
      let e = this.planes,
        n = t.elements,
        i = n[0],
        r = n[1],
        a = n[2],
        o = n[3],
        l = n[4],
        c = n[5],
        h = n[6],
        u = n[7],
        d = n[8],
        f = n[9],
        g = n[10],
        v = n[11],
        x = n[12],
        m = n[13],
        p = n[14],
        _ = n[15];
      return (
        e[0].setComponents(o - i, u - l, v - d, _ - x).normalize(),
        e[1].setComponents(o + i, u + l, v + d, _ + x).normalize(),
        e[2].setComponents(o + r, u + c, v + f, _ + m).normalize(),
        e[3].setComponents(o - r, u - c, v - f, _ - m).normalize(),
        e[4].setComponents(o - a, u - h, v - g, _ - p).normalize(),
        e[5].setComponents(o + a, u + h, v + g, _ + p).normalize(),
        this
      );
    }
    intersectsObject(t) {
      let e = t.geometry;
      return (
        e.boundingSphere === null && e.computeBoundingSphere(),
        ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
        this.intersectsSphere(ri)
      );
    }
    intersectsSprite(t) {
      return (
        ri.center.set(0, 0, 0),
        (ri.radius = 0.7071067811865476),
        ri.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(ri)
      );
    }
    intersectsSphere(t) {
      let e = this.planes,
        n = t.center,
        i = -t.radius;
      for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < i) return !1;
      return !0;
    }
    intersectsBox(t) {
      let e = this.planes;
      for (let n = 0; n < 6; n++) {
        let i = e[n];
        if (
          ((Qr.x = i.normal.x > 0 ? t.max.x : t.min.x),
          (Qr.y = i.normal.y > 0 ? t.max.y : t.min.y),
          (Qr.z = i.normal.z > 0 ? t.max.z : t.min.z),
          i.distanceToPoint(Qr) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      let e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
function rh() {
  let s = null,
    t = !1,
    e = null,
    n = null;
  function i(r, a) {
    (e(r, a), (n = s.requestAnimationFrame(i)));
  }
  return {
    start: function () {
      t !== !0 && e !== null && ((n = s.requestAnimationFrame(i)), (t = !0));
    },
    stop: function () {
      (s.cancelAnimationFrame(n), (t = !1));
    },
    setAnimationLoop: function (r) {
      e = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function Ud(s, t) {
  let e = t.isWebGL2,
    n = new WeakMap();
  function i(c, h) {
    let u = c.array,
      d = c.usage,
      f = s.createBuffer();
    (s.bindBuffer(h, f), s.bufferData(h, u, d), c.onUploadCallback());
    let g = 5126;
    return (
      u instanceof Float32Array
        ? (g = 5126)
        : u instanceof Float64Array
          ? console.warn(
              "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.",
            )
          : u instanceof Uint16Array
            ? c.isFloat16BufferAttribute
              ? e
                ? (g = 5131)
                : console.warn(
                    "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.",
                  )
              : (g = 5123)
            : u instanceof Int16Array
              ? (g = 5122)
              : u instanceof Uint32Array
                ? (g = 5125)
                : u instanceof Int32Array
                  ? (g = 5124)
                  : u instanceof Int8Array
                    ? (g = 5120)
                    : (u instanceof Uint8Array ||
                        u instanceof Uint8ClampedArray) &&
                      (g = 5121),
      {
        buffer: f,
        type: g,
        bytesPerElement: u.BYTES_PER_ELEMENT,
        version: c.version,
      }
    );
  }
  function r(c, h, u) {
    let d = h.array,
      f = h.updateRange;
    (s.bindBuffer(u, c),
      f.count === -1
        ? s.bufferSubData(u, 0, d)
        : (e
            ? s.bufferSubData(
                u,
                f.offset * d.BYTES_PER_ELEMENT,
                d,
                f.offset,
                f.count,
              )
            : s.bufferSubData(
                u,
                f.offset * d.BYTES_PER_ELEMENT,
                d.subarray(f.offset, f.offset + f.count),
              ),
          (f.count = -1)));
  }
  function a(c) {
    return (c.isInterleavedBufferAttribute && (c = c.data), n.get(c));
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    let h = n.get(c);
    h && (s.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      let d = n.get(c);
      (!d || d.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    let u = n.get(c);
    u === void 0
      ? n.set(c, i(c, h))
      : u.version < c.version && (r(u.buffer, c, h), (u.version = c.version));
  }
  return { get: a, remove: o, update: l };
}
var Bn = class s extends Nt {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      (super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: n,
          heightSegments: i,
        }));
      let r = t / 2,
        a = e / 2,
        o = Math.floor(n),
        l = Math.floor(i),
        c = o + 1,
        h = l + 1,
        u = t / o,
        d = e / l,
        f = [],
        g = [],
        v = [],
        x = [];
      for (let m = 0; m < h; m++) {
        let p = m * d - a;
        for (let _ = 0; _ < c; _++) {
          let y = _ * u - r;
          (g.push(y, -p, 0), v.push(0, 0, 1), x.push(_ / o), x.push(1 - m / l));
        }
      }
      for (let m = 0; m < l; m++)
        for (let p = 0; p < o; p++) {
          let _ = p + c * m,
            y = p + c * (m + 1),
            w = p + 1 + c * (m + 1),
            A = p + 1 + c * m;
          (f.push(_, y, A), f.push(y, w, A));
        }
      (this.setIndex(f),
        this.setAttribute("position", new xt(g, 3)),
        this.setAttribute("normal", new xt(v, 3)),
        this.setAttribute("uv", new xt(x, 2)));
    }
    static fromJSON(t) {
      return new s(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  Hd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  Gd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Vd = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  kd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Wd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  jd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  qd = "vec3 transformed = vec3( position );",
  Xd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Jd = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  Yd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Zd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Qd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  $d = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Kd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  tp = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  ep = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  np = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  ip = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  rp = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  sp = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  ap = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  op = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  lp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  cp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  hp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  up = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  dp = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  pp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  fp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  mp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  gp = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  vp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  yp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  xp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  _p = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  bp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  wp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
  Mp = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Sp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Tp = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
  Ep = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Ap = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Rp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Lp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  Cp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Pp = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  Ip = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  Dp = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  zp = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Np = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Fp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Op = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Bp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Up = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Hp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Gp = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
  Vp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  kp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Wp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  jp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  qp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Xp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Jp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Yp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Zp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  Qp = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  $p = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Kp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  tf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  ef = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  nf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  rf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  sf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  af = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  of = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  lf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  cf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  hf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  uf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  df = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  pf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  ff = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  mf = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  gf = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  vf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  yf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  xf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
  _f = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  bf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  wf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Mf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Sf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Tf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Ef = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
  Af = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Rf = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Lf = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Cf = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Pf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  If = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Df = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  zf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  Nf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Ff = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Of = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Bf = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Uf = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Hf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Gf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Vf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  kf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Wf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  jf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  qf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Xf = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Jf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Yf = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Zf = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Qf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  $f = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Kf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  tm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
  em = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  nm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  im = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  rm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  sm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  am = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  om = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  lm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  cm = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  um = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  dm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Dt = {
    alphamap_fragment: Hd,
    alphamap_pars_fragment: Gd,
    alphatest_fragment: Vd,
    alphatest_pars_fragment: kd,
    aomap_fragment: Wd,
    aomap_pars_fragment: jd,
    begin_vertex: qd,
    beginnormal_vertex: Xd,
    bsdfs: Jd,
    bumpmap_pars_fragment: Yd,
    clipping_planes_fragment: Zd,
    clipping_planes_pars_fragment: Qd,
    clipping_planes_pars_vertex: $d,
    clipping_planes_vertex: Kd,
    color_fragment: tp,
    color_pars_fragment: ep,
    color_pars_vertex: np,
    color_vertex: ip,
    common: rp,
    cube_uv_reflection_fragment: sp,
    defaultnormal_vertex: ap,
    displacementmap_pars_vertex: op,
    displacementmap_vertex: lp,
    emissivemap_fragment: cp,
    emissivemap_pars_fragment: hp,
    encodings_fragment: up,
    encodings_pars_fragment: dp,
    envmap_fragment: pp,
    envmap_common_pars_fragment: fp,
    envmap_pars_fragment: mp,
    envmap_pars_vertex: gp,
    envmap_physical_pars_fragment: Ap,
    envmap_vertex: vp,
    fog_vertex: yp,
    fog_pars_vertex: xp,
    fog_fragment: _p,
    fog_pars_fragment: bp,
    gradientmap_pars_fragment: wp,
    lightmap_fragment: Mp,
    lightmap_pars_fragment: Sp,
    lights_lambert_vertex: Tp,
    lights_pars_begin: Ep,
    lights_toon_fragment: Rp,
    lights_toon_pars_fragment: Lp,
    lights_phong_fragment: Cp,
    lights_phong_pars_fragment: Pp,
    lights_physical_fragment: Ip,
    lights_physical_pars_fragment: Dp,
    lights_fragment_begin: zp,
    lights_fragment_maps: Np,
    lights_fragment_end: Fp,
    logdepthbuf_fragment: Op,
    logdepthbuf_pars_fragment: Bp,
    logdepthbuf_pars_vertex: Up,
    logdepthbuf_vertex: Hp,
    map_fragment: Gp,
    map_pars_fragment: Vp,
    map_particle_fragment: kp,
    map_particle_pars_fragment: Wp,
    metalnessmap_fragment: jp,
    metalnessmap_pars_fragment: qp,
    morphnormal_vertex: Xp,
    morphtarget_pars_vertex: Jp,
    morphtarget_vertex: Yp,
    normal_fragment_begin: Zp,
    normal_fragment_maps: Qp,
    normal_pars_fragment: $p,
    normal_pars_vertex: Kp,
    normal_vertex: tf,
    normalmap_pars_fragment: ef,
    clearcoat_normal_fragment_begin: nf,
    clearcoat_normal_fragment_maps: rf,
    clearcoat_pars_fragment: sf,
    output_fragment: af,
    packing: of,
    premultiplied_alpha_fragment: lf,
    project_vertex: cf,
    dithering_fragment: hf,
    dithering_pars_fragment: uf,
    roughnessmap_fragment: df,
    roughnessmap_pars_fragment: pf,
    shadowmap_pars_fragment: ff,
    shadowmap_pars_vertex: mf,
    shadowmap_vertex: gf,
    shadowmask_pars_fragment: vf,
    skinbase_vertex: yf,
    skinning_pars_vertex: xf,
    skinning_vertex: _f,
    skinnormal_vertex: bf,
    specularmap_fragment: wf,
    specularmap_pars_fragment: Mf,
    tonemapping_fragment: Sf,
    tonemapping_pars_fragment: Tf,
    transmission_fragment: Ef,
    transmission_pars_fragment: Af,
    uv_pars_fragment: Rf,
    uv_pars_vertex: Lf,
    uv_vertex: Cf,
    uv2_pars_fragment: Pf,
    uv2_pars_vertex: If,
    uv2_vertex: Df,
    worldpos_vertex: zf,
    background_vert: Nf,
    background_frag: Ff,
    cube_vert: Of,
    cube_frag: Bf,
    depth_vert: Uf,
    depth_frag: Hf,
    distanceRGBA_vert: Gf,
    distanceRGBA_frag: Vf,
    equirect_vert: kf,
    equirect_frag: Wf,
    linedashed_vert: jf,
    linedashed_frag: qf,
    meshbasic_vert: Xf,
    meshbasic_frag: Jf,
    meshlambert_vert: Yf,
    meshlambert_frag: Zf,
    meshmatcap_vert: Qf,
    meshmatcap_frag: $f,
    meshnormal_vert: Kf,
    meshnormal_frag: tm,
    meshphong_vert: em,
    meshphong_frag: nm,
    meshphysical_vert: im,
    meshphysical_frag: rm,
    meshtoon_vert: sm,
    meshtoon_frag: am,
    points_vert: om,
    points_frag: lm,
    shadow_vert: cm,
    shadow_frag: hm,
    sprite_vert: um,
    sprite_frag: dm,
  },
  it = {
    common: {
      diffuse: { value: new dt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new ee() },
      uv2Transform: { value: new ee() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new q(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new dt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new dt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new ee() },
    },
    sprite: {
      diffuse: { value: new dt(16777215) },
      opacity: { value: 1 },
      center: { value: new q(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new ee() },
    },
  },
  ke = {
    basic: {
      uniforms: ue([
        it.common,
        it.specularmap,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.fog,
      ]),
      vertexShader: Dt.meshbasic_vert,
      fragmentShader: Dt.meshbasic_frag,
    },
    lambert: {
      uniforms: ue([
        it.common,
        it.specularmap,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.fog,
        it.lights,
        { emissive: { value: new dt(0) } },
      ]),
      vertexShader: Dt.meshlambert_vert,
      fragmentShader: Dt.meshlambert_frag,
    },
    phong: {
      uniforms: ue([
        it.common,
        it.specularmap,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.fog,
        it.lights,
        {
          emissive: { value: new dt(0) },
          specular: { value: new dt(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Dt.meshphong_vert,
      fragmentShader: Dt.meshphong_frag,
    },
    standard: {
      uniforms: ue([
        it.common,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.roughnessmap,
        it.metalnessmap,
        it.fog,
        it.lights,
        {
          emissive: { value: new dt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Dt.meshphysical_vert,
      fragmentShader: Dt.meshphysical_frag,
    },
    toon: {
      uniforms: ue([
        it.common,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.gradientmap,
        it.fog,
        it.lights,
        { emissive: { value: new dt(0) } },
      ]),
      vertexShader: Dt.meshtoon_vert,
      fragmentShader: Dt.meshtoon_frag,
    },
    matcap: {
      uniforms: ue([
        it.common,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Dt.meshmatcap_vert,
      fragmentShader: Dt.meshmatcap_frag,
    },
    points: {
      uniforms: ue([it.points, it.fog]),
      vertexShader: Dt.points_vert,
      fragmentShader: Dt.points_frag,
    },
    dashed: {
      uniforms: ue([
        it.common,
        it.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Dt.linedashed_vert,
      fragmentShader: Dt.linedashed_frag,
    },
    depth: {
      uniforms: ue([it.common, it.displacementmap]),
      vertexShader: Dt.depth_vert,
      fragmentShader: Dt.depth_frag,
    },
    normal: {
      uniforms: ue([
        it.common,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Dt.meshnormal_vert,
      fragmentShader: Dt.meshnormal_frag,
    },
    sprite: {
      uniforms: ue([it.sprite, it.fog]),
      vertexShader: Dt.sprite_vert,
      fragmentShader: Dt.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new ee() }, t2D: { value: null } },
      vertexShader: Dt.background_vert,
      fragmentShader: Dt.background_frag,
    },
    cube: {
      uniforms: ue([it.envmap, { opacity: { value: 1 } }]),
      vertexShader: Dt.cube_vert,
      fragmentShader: Dt.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Dt.equirect_vert,
      fragmentShader: Dt.equirect_frag,
    },
    distanceRGBA: {
      uniforms: ue([
        it.common,
        it.displacementmap,
        {
          referencePosition: { value: new b() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Dt.distanceRGBA_vert,
      fragmentShader: Dt.distanceRGBA_frag,
    },
    shadow: {
      uniforms: ue([
        it.lights,
        it.fog,
        { color: { value: new dt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Dt.shadow_vert,
      fragmentShader: Dt.shadow_frag,
    },
  };
ke.physical = {
  uniforms: ue([
    ke.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new q(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new dt(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 0 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new q() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new dt(0) },
      specularIntensity: { value: 0 },
      specularIntensityMap: { value: null },
      specularColor: { value: new dt(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Dt.meshphysical_vert,
  fragmentShader: Dt.meshphysical_frag,
};
function pm(s, t, e, n, i) {
  let r = new dt(0),
    a = 0,
    o,
    l,
    c = null,
    h = 0,
    u = null;
  function d(g, v) {
    let x = !1,
      m = v.isScene === !0 ? v.background : null;
    m && m.isTexture && (m = t.get(m));
    let p = s.xr,
      _ = p.getSession && p.getSession();
    (_ && _.environmentBlendMode === "additive" && (m = null),
      m === null ? f(r, a) : m && m.isColor && (f(m, 1), (x = !0)),
      (s.autoClear || x) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      m && (m.isCubeTexture || m.mapping === oa)
        ? (l === void 0 &&
            ((l = new se(
              new On(1, 1, 1),
              new _e({
                name: "BackgroundCubeMaterial",
                uniforms: bi(ke.cube.uniforms),
                vertexShader: ke.cube.vertexShader,
                fragmentShader: ke.cube.fragmentShader,
                side: Kt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (y, w, A) {
              this.matrixWorld.copyPosition(A.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(l)),
          (l.material.uniforms.envMap.value = m),
          (l.material.uniforms.flipEnvMap.value =
            m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1),
          (c !== m || h !== m.version || u !== s.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (c = m),
            (h = m.version),
            (u = s.toneMapping)),
          g.unshift(l, l.geometry, l.material, 0, 0, null))
        : m &&
          m.isTexture &&
          (o === void 0 &&
            ((o = new se(
              new Bn(2, 2),
              new _e({
                name: "BackgroundMaterial",
                uniforms: bi(ke.background.uniforms),
                vertexShader: ke.background.vertexShader,
                fragmentShader: ke.background.fragmentShader,
                side: Ki,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            o.geometry.deleteAttribute("normal"),
            Object.defineProperty(o.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(o)),
          (o.material.uniforms.t2D.value = m),
          m.matrixAutoUpdate === !0 && m.updateMatrix(),
          o.material.uniforms.uvTransform.value.copy(m.matrix),
          (c !== m || h !== m.version || u !== s.toneMapping) &&
            ((o.material.needsUpdate = !0),
            (c = m),
            (h = m.version),
            (u = s.toneMapping)),
          g.unshift(o, o.geometry, o.material, 0, 0, null)));
  }
  function f(g, v) {
    e.buffers.color.setClear(g.r, g.g, g.b, v, i);
  }
  return {
    getClearColor: function () {
      return r;
    },
    setClearColor: function (g, v = 1) {
      (r.set(g), (a = v), f(r, a));
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (g) {
      ((a = g), f(r, a));
    },
    render: d,
  };
}
function fm(s, t, e, n) {
  let i = s.getParameter(34921),
    r = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
    a = n.isWebGL2 || r !== null,
    o = {},
    l = v(null),
    c = l;
  function h(E, D, B, z, U) {
    let nt = !1;
    if (a) {
      let lt = g(z, B, D);
      (c !== lt && ((c = lt), d(c.object)), (nt = x(z, U)), nt && m(z, U));
    } else {
      let lt = D.wireframe === !0;
      (c.geometry !== z.id || c.program !== B.id || c.wireframe !== lt) &&
        ((c.geometry = z.id),
        (c.program = B.id),
        (c.wireframe = lt),
        (nt = !0));
    }
    (E.isInstancedMesh === !0 && (nt = !0),
      U !== null && e.update(U, 34963),
      nt &&
        (L(E, D, B, z), U !== null && s.bindBuffer(34963, e.get(U).buffer)));
  }
  function u() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function d(E) {
    return n.isWebGL2 ? s.bindVertexArray(E) : r.bindVertexArrayOES(E);
  }
  function f(E) {
    return n.isWebGL2 ? s.deleteVertexArray(E) : r.deleteVertexArrayOES(E);
  }
  function g(E, D, B) {
    let z = B.wireframe === !0,
      U = o[E.id];
    U === void 0 && ((U = {}), (o[E.id] = U));
    let nt = U[D.id];
    nt === void 0 && ((nt = {}), (U[D.id] = nt));
    let lt = nt[z];
    return (lt === void 0 && ((lt = v(u())), (nt[z] = lt)), lt);
  }
  function v(E) {
    let D = [],
      B = [],
      z = [];
    for (let U = 0; U < i; U++) ((D[U] = 0), (B[U] = 0), (z[U] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: B,
      attributeDivisors: z,
      object: E,
      attributes: {},
      index: null,
    };
  }
  function x(E, D) {
    let B = c.attributes,
      z = E.attributes,
      U = 0;
    for (let nt in z) {
      let lt = B[nt],
        k = z[nt];
      if (lt === void 0 || lt.attribute !== k || lt.data !== k.data) return !0;
      U++;
    }
    return c.attributesNum !== U || c.index !== D;
  }
  function m(E, D) {
    let B = {},
      z = E.attributes,
      U = 0;
    for (let nt in z) {
      let lt = z[nt],
        k = {};
      ((k.attribute = lt), lt.data && (k.data = lt.data), (B[nt] = k), U++);
    }
    ((c.attributes = B), (c.attributesNum = U), (c.index = D));
  }
  function p() {
    let E = c.newAttributes;
    for (let D = 0, B = E.length; D < B; D++) E[D] = 0;
  }
  function _(E) {
    y(E, 0);
  }
  function y(E, D) {
    let B = c.newAttributes,
      z = c.enabledAttributes,
      U = c.attributeDivisors;
    ((B[E] = 1),
      z[E] === 0 && (s.enableVertexAttribArray(E), (z[E] = 1)),
      U[E] !== D &&
        ((n.isWebGL2 ? s : t.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](E, D),
        (U[E] = D)));
  }
  function w() {
    let E = c.newAttributes,
      D = c.enabledAttributes;
    for (let B = 0, z = D.length; B < z; B++)
      D[B] !== E[B] && (s.disableVertexAttribArray(B), (D[B] = 0));
  }
  function A(E, D, B, z, U, nt) {
    n.isWebGL2 !== !0 || (B !== 5124 && B !== 5125)
      ? s.vertexAttribPointer(E, D, B, z, U, nt)
      : s.vertexAttribIPointer(E, D, B, U, nt);
  }
  function L(E, D, B, z) {
    if (
      n.isWebGL2 === !1 &&
      (E.isInstancedMesh || z.isInstancedBufferGeometry) &&
      t.get("ANGLE_instanced_arrays") === null
    )
      return;
    p();
    let U = z.attributes,
      nt = B.getAttributes(),
      lt = D.defaultAttributeValues;
    for (let k in nt) {
      let W = nt[k];
      if (W.location >= 0) {
        let ct = U[k];
        if (
          (ct === void 0 &&
            (k === "instanceMatrix" &&
              E.instanceMatrix &&
              (ct = E.instanceMatrix),
            k === "instanceColor" && E.instanceColor && (ct = E.instanceColor)),
          ct !== void 0)
        ) {
          let at = ct.normalized,
            ut = ct.itemSize,
            zt = e.get(ct);
          if (zt === void 0) continue;
          let J = zt.buffer,
            At = zt.type,
            vt = zt.bytesPerElement;
          if (ct.isInterleavedBufferAttribute) {
            let ft = ct.data,
              gt = ft.stride,
              Bt = ct.offset;
            if (ft && ft.isInstancedInterleavedBuffer) {
              for (let V = 0; V < W.locationSize; V++)
                y(W.location + V, ft.meshPerAttribute);
              E.isInstancedMesh !== !0 &&
                z._maxInstanceCount === void 0 &&
                (z._maxInstanceCount = ft.meshPerAttribute * ft.count);
            } else for (let V = 0; V < W.locationSize; V++) _(W.location + V);
            s.bindBuffer(34962, J);
            for (let V = 0; V < W.locationSize; V++)
              A(
                W.location + V,
                ut / W.locationSize,
                At,
                at,
                gt * vt,
                (Bt + (ut / W.locationSize) * V) * vt,
              );
          } else {
            if (ct.isInstancedBufferAttribute) {
              for (let ft = 0; ft < W.locationSize; ft++)
                y(W.location + ft, ct.meshPerAttribute);
              E.isInstancedMesh !== !0 &&
                z._maxInstanceCount === void 0 &&
                (z._maxInstanceCount = ct.meshPerAttribute * ct.count);
            } else
              for (let ft = 0; ft < W.locationSize; ft++) _(W.location + ft);
            s.bindBuffer(34962, J);
            for (let ft = 0; ft < W.locationSize; ft++)
              A(
                W.location + ft,
                ut / W.locationSize,
                At,
                at,
                ut * vt,
                (ut / W.locationSize) * ft * vt,
              );
          }
        } else if (lt !== void 0) {
          let at = lt[k];
          if (at !== void 0)
            switch (at.length) {
              case 2:
                s.vertexAttrib2fv(W.location, at);
                break;
              case 3:
                s.vertexAttrib3fv(W.location, at);
                break;
              case 4:
                s.vertexAttrib4fv(W.location, at);
                break;
              default:
                s.vertexAttrib1fv(W.location, at);
            }
        }
      }
    }
    w();
  }
  function I() {
    P();
    for (let E in o) {
      let D = o[E];
      for (let B in D) {
        let z = D[B];
        for (let U in z) (f(z[U].object), delete z[U]);
        delete D[B];
      }
      delete o[E];
    }
  }
  function G(E) {
    if (o[E.id] === void 0) return;
    let D = o[E.id];
    for (let B in D) {
      let z = D[B];
      for (let U in z) (f(z[U].object), delete z[U]);
      delete D[B];
    }
    delete o[E.id];
  }
  function O(E) {
    for (let D in o) {
      let B = o[D];
      if (B[E.id] === void 0) continue;
      let z = B[E.id];
      for (let U in z) (f(z[U].object), delete z[U]);
      delete B[E.id];
    }
  }
  function P() {
    (M(), c !== l && ((c = l), d(c.object)));
  }
  function M() {
    ((l.geometry = null), (l.program = null), (l.wireframe = !1));
  }
  return {
    setup: h,
    reset: P,
    resetDefaultState: M,
    dispose: I,
    releaseStatesOfGeometry: G,
    releaseStatesOfProgram: O,
    initAttributes: p,
    enableAttribute: _,
    disableUnusedAttributes: w,
  };
}
function mm(s, t, e, n) {
  let i = n.isWebGL2,
    r;
  function a(c) {
    r = c;
  }
  function o(c, h) {
    (s.drawArrays(r, c, h), e.update(h, r, 1));
  }
  function l(c, h, u) {
    if (u === 0) return;
    let d, f;
    if (i) ((d = s), (f = "drawArraysInstanced"));
    else if (
      ((d = t.get("ANGLE_instanced_arrays")),
      (f = "drawArraysInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.",
      );
      return;
    }
    (d[f](r, c, h, u), e.update(h, r, u));
  }
  ((this.setMode = a), (this.render = o), (this.renderInstances = l));
}
function gm(s, t, e) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      let L = t.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(L) {
    if (L === "highp") {
      if (
        s.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        s.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      L = "mediump";
    }
    return L === "mediump" &&
      s.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      s.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  let a =
      (typeof WebGL2RenderingContext < "u" &&
        s instanceof WebGL2RenderingContext) ||
      (typeof WebGL2ComputeRenderingContext < "u" &&
        s instanceof WebGL2ComputeRenderingContext),
    o = e.precision !== void 0 ? e.precision : "highp",
    l = r(o);
  l !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      l,
      "instead.",
    ),
    (o = l));
  let c = a || t.has("WEBGL_draw_buffers"),
    h = e.logarithmicDepthBuffer === !0,
    u = s.getParameter(34930),
    d = s.getParameter(35660),
    f = s.getParameter(3379),
    g = s.getParameter(34076),
    v = s.getParameter(34921),
    x = s.getParameter(36347),
    m = s.getParameter(36348),
    p = s.getParameter(36349),
    _ = d > 0,
    y = a || t.has("OES_texture_float"),
    w = _ && y,
    A = a ? s.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: f,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: x,
    maxVaryings: m,
    maxFragmentUniforms: p,
    vertexTextures: _,
    floatFragmentTextures: y,
    floatVertexTextures: w,
    maxSamples: A,
  };
}
function vm(s) {
  let t = this,
    e = null,
    n = 0,
    i = !1,
    r = !1,
    a = new ze(),
    o = new ee(),
    l = { value: null, needsUpdate: !1 };
  ((this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, d, f) {
      let g = u.length !== 0 || d || n !== 0 || i;
      return ((i = d), (e = h(u, f, 0)), (n = u.length), g);
    }),
    (this.beginShadows = function () {
      ((r = !0), h(null));
    }),
    (this.endShadows = function () {
      ((r = !1), c());
    }),
    (this.setState = function (u, d, f) {
      let g = u.clippingPlanes,
        v = u.clipIntersection,
        x = u.clipShadows,
        m = s.get(u);
      if (!i || g === null || g.length === 0 || (r && !x)) r ? h(null) : c();
      else {
        let p = r ? 0 : n,
          _ = 4 * p,
          y = m.clippingState || null;
        ((l.value = y), (y = h(g, d, _, f)));
        for (let w = 0; w !== _; ++w) y[w] = e[w];
        ((m.clippingState = y),
          (this.numIntersection = v ? this.numPlanes : 0),
          (this.numPlanes += p));
      }
    }));
  function c() {
    (l.value !== e && ((l.value = e), (l.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0));
  }
  function h(u, d, f, g) {
    let v = u !== null ? u.length : 0,
      x = null;
    if (v !== 0) {
      if (((x = l.value), g !== !0 || x === null)) {
        let m = f + 4 * v,
          p = d.matrixWorldInverse;
        (o.getNormalMatrix(p),
          (x === null || x.length < m) && (x = new Float32Array(m)));
        for (let _ = 0, y = f; _ !== v; ++_, y += 4)
          (a.copy(u[_]).applyMatrix4(p, o),
            a.normal.toArray(x, y),
            (x[y + 3] = a.constant));
      }
      ((l.value = x), (l.needsUpdate = !0));
    }
    return ((t.numPlanes = v), (t.numIntersection = 0), x);
  }
}
function ym(s) {
  let t = new WeakMap();
  function e(a, o) {
    return (o === Qa ? (a.mapping = Lr) : o === $a && (a.mapping = Cr), a);
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      let o = a.mapping;
      if (o === Qa || o === $a) {
        if (t.has(a)) {
          let l = t.get(a).texture;
          return e(l, a.mapping);
        }
        {
          let l = a.image;
          if (l && l.height > 0) {
            let c = s.getRenderTarget(),
              h = new Ss(l.height / 2);
            return (
              h.fromEquirectangularTexture(s, a),
              t.set(a, h),
              s.setRenderTarget(c),
              a.addEventListener("dispose", i),
              e(h.texture, a.mapping)
            );
          }
          return null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let o = a.target;
    o.removeEventListener("dispose", i);
    let l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
var sr = class extends wi {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    (super(),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, n, i, r, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    let t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2,
      r = n - t,
      a = n + t,
      o = i + e,
      l = i - e;
    if (this.view !== null && this.view.enabled) {
      let c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((r += c * this.view.offsetX),
        (a = r + c * this.view.width),
        (o -= h * this.view.offsetY),
        (l = o - h * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
};
sr.prototype.isOrthographicCamera = !0;
var Un = class extends _e {
  constructor(t) {
    (super(t), (this.type = "RawShaderMaterial"));
  }
};
Un.prototype.isRawShaderMaterial = !0;
var vi = 4,
  fn = 8,
  Ve = Math.pow(2, fn),
  sh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ah = fn - vi + 1 + sh.length,
  si = 20,
  Ts = { [Ne]: 0, [Pi]: 1 },
  Ua = new sr(),
  { _lodPlanes: Hi, _sizeLods: ec, _sigmas: $r } = xm(),
  nc = new dt(),
  Ha = null,
  In = (1 + Math.sqrt(5)) / 2,
  ai = 1 / In,
  ic = [
    new b(1, 1, 1),
    new b(-1, 1, 1),
    new b(1, 1, -1),
    new b(-1, 1, -1),
    new b(0, In, ai),
    new b(0, In, -ai),
    new b(ai, 0, In),
    new b(-ai, 0, In),
    new b(In, ai, 0),
    new b(-In, ai, 0),
  ],
  ro = class {
    constructor(t) {
      ((this._renderer = t),
        (this._pingPongRenderTarget = null),
        (this._blurMaterial = _m(si)),
        (this._equirectShader = null),
        (this._cubemapShader = null),
        this._compileMaterial(this._blurMaterial));
    }
    fromScene(t, e = 0, n = 0.1, i = 100) {
      Ha = this._renderer.getRenderTarget();
      let r = this._allocateTargets();
      return (
        this._sceneToCubeUV(t, n, i, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(t) {
      return this._fromTexture(t);
    }
    fromCubemap(t) {
      return this._fromTexture(t);
    }
    compileCubemapShader() {
      this._cubemapShader === null &&
        ((this._cubemapShader = ac()),
        this._compileMaterial(this._cubemapShader));
    }
    compileEquirectangularShader() {
      this._equirectShader === null &&
        ((this._equirectShader = sc()),
        this._compileMaterial(this._equirectShader));
    }
    dispose() {
      (this._blurMaterial.dispose(),
        this._cubemapShader !== null && this._cubemapShader.dispose(),
        this._equirectShader !== null && this._equirectShader.dispose());
      for (let t = 0; t < Hi.length; t++) Hi[t].dispose();
    }
    _cleanup(t) {
      (this._pingPongRenderTarget.dispose(),
        this._renderer.setRenderTarget(Ha),
        (t.scissorTest = !1),
        Kr(t, 0, 0, t.width, t.height));
    }
    _fromTexture(t) {
      Ha = this._renderer.getRenderTarget();
      let e = this._allocateTargets(t);
      return (
        this._textureToCubeUV(t, e),
        this._applyPMREM(e),
        this._cleanup(e),
        e
      );
    }
    _allocateTargets(t) {
      let e = {
          magFilter: ge,
          minFilter: ge,
          generateMipmaps: !1,
          type: zn,
          format: ae,
          encoding: Ne,
          depthBuffer: !1,
        },
        n = rc(e);
      return ((n.depthBuffer = !t), (this._pingPongRenderTarget = rc(e)), n);
    }
    _compileMaterial(t) {
      let e = new se(Hi[0], t);
      this._renderer.compile(e, Ua);
    }
    _sceneToCubeUV(t, e, n, i) {
      let o = new re(90, 1, e, n),
        l = [1, -1, 1, 1, 1, 1],
        c = [1, 1, 1, -1, -1, -1],
        h = this._renderer,
        u = h.autoClear,
        d = h.toneMapping;
      (h.getClearColor(nc), (h.toneMapping = pn), (h.autoClear = !1));
      let f = new _i({
          name: "PMREM.Background",
          side: Kt,
          depthWrite: !1,
          depthTest: !1,
        }),
        g = new se(new On(), f),
        v = !1,
        x = t.background;
      x
        ? x.isColor && (f.color.copy(x), (t.background = null), (v = !0))
        : (f.color.copy(nc), (v = !0));
      for (let m = 0; m < 6; m++) {
        let p = m % 3;
        (p == 0
          ? (o.up.set(0, l[m], 0), o.lookAt(c[m], 0, 0))
          : p == 1
            ? (o.up.set(0, 0, l[m]), o.lookAt(0, c[m], 0))
            : (o.up.set(0, l[m], 0), o.lookAt(0, 0, c[m])),
          Kr(i, p * Ve, m > 2 ? Ve : 0, Ve, Ve),
          h.setRenderTarget(i),
          v && h.render(g, o),
          h.render(t, o));
      }
      (g.geometry.dispose(),
        g.material.dispose(),
        (h.toneMapping = d),
        (h.autoClear = u),
        (t.background = x));
    }
    _setEncoding(t, e) {
      this._renderer.capabilities.isWebGL2 === !0 &&
      e.format === ae &&
      e.type === Ke &&
      e.encoding === Pi
        ? (t.value = Ts[Ne])
        : (t.value = Ts[e.encoding]);
    }
    _textureToCubeUV(t, e) {
      let n = this._renderer,
        i = t.mapping === Lr || t.mapping === Cr;
      i
        ? this._cubemapShader == null && (this._cubemapShader = ac())
        : this._equirectShader == null && (this._equirectShader = sc());
      let r = i ? this._cubemapShader : this._equirectShader,
        a = new se(Hi[0], r),
        o = r.uniforms;
      ((o.envMap.value = t),
        i || o.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
        this._setEncoding(o.inputEncoding, t),
        Kr(e, 0, 0, 3 * Ve, 2 * Ve),
        n.setRenderTarget(e),
        n.render(a, Ua));
    }
    _applyPMREM(t) {
      let e = this._renderer,
        n = e.autoClear;
      e.autoClear = !1;
      for (let i = 1; i < ah; i++) {
        let r = Math.sqrt($r[i] * $r[i] - $r[i - 1] * $r[i - 1]),
          a = ic[(i - 1) % ic.length];
        this._blur(t, i - 1, i, r, a);
      }
      e.autoClear = n;
    }
    _blur(t, e, n, i, r) {
      let a = this._pingPongRenderTarget;
      (this._halfBlur(t, a, e, n, i, "latitudinal", r),
        this._halfBlur(a, t, n, n, i, "longitudinal", r));
    }
    _halfBlur(t, e, n, i, r, a, o) {
      let l = this._renderer,
        c = this._blurMaterial;
      a !== "latitudinal" &&
        a !== "longitudinal" &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!",
        );
      let h = 3,
        u = new se(Hi[i], c),
        d = c.uniforms,
        f = ec[n] - 1,
        g = isFinite(r) ? Math.PI / (2 * f) : (2 * Math.PI) / (2 * si - 1),
        v = r / g,
        x = isFinite(r) ? 1 + Math.floor(h * v) : si;
      x > si &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${si}`,
        );
      let m = [],
        p = 0;
      for (let A = 0; A < si; ++A) {
        let L = A / v,
          I = Math.exp((-L * L) / 2);
        (m.push(I), A == 0 ? (p += I) : A < x && (p += 2 * I));
      }
      for (let A = 0; A < m.length; A++) m[A] = m[A] / p;
      ((d.envMap.value = t.texture),
        (d.samples.value = x),
        (d.weights.value = m),
        (d.latitudinal.value = a === "latitudinal"),
        o && (d.poleAxis.value = o),
        (d.dTheta.value = g),
        (d.mipInt.value = fn - n));
      let _ = ec[i],
        y = 3 * Math.max(0, Ve - 2 * _),
        w = (i === 0 ? 0 : 2 * Ve) + 2 * _ * (i > fn - vi ? i - fn + vi : 0);
      (Kr(e, y, w, 3 * _, 2 * _), l.setRenderTarget(e), l.render(u, Ua));
    }
  };
function xm() {
  let s = [],
    t = [],
    e = [],
    n = fn;
  for (let i = 0; i < ah; i++) {
    let r = Math.pow(2, n);
    t.push(r);
    let a = 1 / r;
    (i > fn - vi ? (a = sh[i - fn + vi - 1]) : i == 0 && (a = 0), e.push(a));
    let o = 1 / (r - 1),
      l = -o / 2,
      c = 1 + o / 2,
      h = [l, l, c, l, c, c, l, l, c, c, l, c],
      u = 6,
      d = 6,
      f = 3,
      g = 2,
      v = 1,
      x = new Float32Array(f * d * u),
      m = new Float32Array(g * d * u),
      p = new Float32Array(v * d * u);
    for (let y = 0; y < u; y++) {
      let w = ((y % 3) * 2) / 3 - 1,
        A = y > 2 ? 0 : -1,
        L = [
          w,
          A,
          0,
          w + 2 / 3,
          A,
          0,
          w + 2 / 3,
          A + 1,
          0,
          w,
          A,
          0,
          w + 2 / 3,
          A + 1,
          0,
          w,
          A + 1,
          0,
        ];
      (x.set(L, f * d * y), m.set(h, g * d * y));
      let I = [y, y, y, y, y, y];
      p.set(I, v * d * y);
    }
    let _ = new Nt();
    (_.setAttribute("position", new $t(x, f)),
      _.setAttribute("uv", new $t(m, g)),
      _.setAttribute("faceIndex", new $t(p, v)),
      s.push(_),
      n > vi && n--);
  }
  return { _lodPlanes: s, _sizeLods: t, _sigmas: e };
}
function rc(s) {
  let t = new ye(3 * Ve, 3 * Ve, s);
  return (
    (t.texture.mapping = oa),
    (t.texture.name = "PMREM.cubeUv"),
    (t.scissorTest = !0),
    t
  );
}
function Kr(s, t, e, n, i) {
  (s.viewport.set(t, e, n, i), s.scissor.set(t, e, n, i));
}
function _m(s) {
  let t = new Float32Array(s),
    e = new b(0, 1, 0);
  return new Un({
    name: "SphericalGaussianBlur",
    defines: { n: s },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: t },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: e },
    },
    vertexShader: dl(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${pl()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function sc() {
  let s = new q(1, 1);
  return new Un({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null },
      texelSize: { value: s },
      inputEncoding: { value: Ts[Ne] },
    },
    vertexShader: dl(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${pl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ac() {
  return new Un({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, inputEncoding: { value: Ts[Ne] } },
    vertexShader: dl(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${pl()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function dl() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function pl() {
  return `

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`;
}
function bm(s) {
  let t = new WeakMap(),
    e = null;
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      let l = o.mapping,
        c = l === Qa || l === $a,
        h = l === Lr || l === Cr;
      if (c || h) {
        if (t.has(o)) return t.get(o).texture;
        {
          let u = o.image;
          if ((c && u && u.height > 0) || (h && u && i(u))) {
            let d = s.getRenderTarget();
            e === null && (e = new ro(s));
            let f = c ? e.fromEquirectangular(o) : e.fromCubemap(o);
            return (
              t.set(o, f),
              s.setRenderTarget(d),
              o.addEventListener("dispose", r),
              f.texture
            );
          }
          return null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0,
      c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    let l = o.target;
    l.removeEventListener("dispose", r);
    let c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    ((t = new WeakMap()), e !== null && (e.dispose(), (e = null)));
  }
  return { get: n, dispose: a };
}
function wm(s) {
  let t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return ((t[n] = i), i);
  }
  return {
    has: function (n) {
      return e(n) !== null;
    },
    init: function (n) {
      (n.isWebGL2
        ? e("EXT_color_buffer_float")
        : (e("WEBGL_depth_texture"),
          e("OES_texture_float"),
          e("OES_texture_half_float"),
          e("OES_texture_half_float_linear"),
          e("OES_standard_derivatives"),
          e("OES_element_index_uint"),
          e("OES_vertex_array_object"),
          e("ANGLE_instanced_arrays")),
        e("OES_texture_float_linear"),
        e("EXT_color_buffer_half_float"),
        e("WEBGL_multisampled_render_to_texture"));
    },
    get: function (n) {
      let i = e(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported.",
          ),
        i
      );
    },
  };
}
function Mm(s, t, e, n) {
  let i = {},
    r = new WeakMap();
  function a(u) {
    let d = u.target;
    d.index !== null && t.remove(d.index);
    for (let g in d.attributes) t.remove(d.attributes[g]);
    (d.removeEventListener("dispose", a), delete i[d.id]);
    let f = r.get(d);
    (f && (t.remove(f), r.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      e.memory.geometries--);
  }
  function o(u, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener("dispose", a),
        (i[d.id] = !0),
        e.memory.geometries++),
      d
    );
  }
  function l(u) {
    let d = u.attributes;
    for (let g in d) t.update(d[g], 34962);
    let f = u.morphAttributes;
    for (let g in f) {
      let v = f[g];
      for (let x = 0, m = v.length; x < m; x++) t.update(v[x], 34962);
    }
  }
  function c(u) {
    let d = [],
      f = u.index,
      g = u.attributes.position,
      v = 0;
    if (f !== null) {
      let p = f.array;
      v = f.version;
      for (let _ = 0, y = p.length; _ < y; _ += 3) {
        let w = p[_ + 0],
          A = p[_ + 1],
          L = p[_ + 2];
        d.push(w, A, A, L, L, w);
      }
    } else {
      let p = g.array;
      v = g.version;
      for (let _ = 0, y = p.length / 3 - 1; _ < y; _ += 3) {
        let w = _ + 0,
          A = _ + 1,
          L = _ + 2;
        d.push(w, A, A, L, L, w);
      }
    }
    let x = new (nh(d) > 65535 ? Ms : ws)(d, 1);
    x.version = v;
    let m = r.get(u);
    (m && t.remove(m), r.set(u, x));
  }
  function h(u) {
    let d = r.get(u);
    if (d) {
      let f = u.index;
      f !== null && d.version < f.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function Sm(s, t, e, n) {
  let i = n.isWebGL2,
    r;
  function a(d) {
    r = d;
  }
  let o, l;
  function c(d) {
    ((o = d.type), (l = d.bytesPerElement));
  }
  function h(d, f) {
    (s.drawElements(r, f, o, d * l), e.update(f, r, 1));
  }
  function u(d, f, g) {
    if (g === 0) return;
    let v, x;
    if (i) ((v = s), (x = "drawElementsInstanced"));
    else if (
      ((v = t.get("ANGLE_instanced_arrays")),
      (x = "drawElementsInstancedANGLE"),
      v === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.",
      );
      return;
    }
    (v[x](r, f, o, d * l, g), e.update(f, r, g));
  }
  ((this.setMode = a),
    (this.setIndex = c),
    (this.render = h),
    (this.renderInstances = u));
}
function Tm(s) {
  let t = { geometries: 0, textures: 0 },
    e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((e.calls++, a)) {
      case 4:
        e.triangles += o * (r / 3);
        break;
      case 1:
        e.lines += o * (r / 2);
        break;
      case 3:
        e.lines += o * (r - 1);
        break;
      case 2:
        e.lines += o * r;
        break;
      case 0:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    (e.frame++,
      (e.calls = 0),
      (e.triangles = 0),
      (e.points = 0),
      (e.lines = 0));
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
var ar = class extends ce {
  constructor(t = null, e = 1, n = 1, i = 1) {
    (super(null),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = te),
      (this.minFilter = te),
      (this.wrapR = Se),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
};
ar.prototype.isDataTexture2DArray = !0;
function Em(s, t) {
  return s[0] - t[0];
}
function Am(s, t) {
  return Math.abs(t[1]) - Math.abs(s[1]);
}
function oc(s, t) {
  let e = 1,
    n = t.isInterleavedBufferAttribute ? t.data.array : t.array;
  (n instanceof Int8Array
    ? (e = 127)
    : n instanceof Int16Array
      ? (e = 32767)
      : n instanceof Int32Array
        ? (e = 2147483647)
        : console.error(
            "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
            n,
          ),
    s.divideScalar(e));
}
function Rm(s, t, e) {
  let n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    a = new b(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, h, u, d) {
    let f = c.morphTargetInfluences;
    if (t.isWebGL2 === !0) {
      let g = h.morphAttributes.position.length,
        v = r.get(h);
      if (v === void 0 || v.count !== g) {
        v !== void 0 && v.texture.dispose();
        let p = h.morphAttributes.normal !== void 0,
          _ = h.morphAttributes.position,
          y = h.morphAttributes.normal || [],
          w = h.attributes.position.count,
          A = p === !0 ? 2 : 1,
          L = w * A,
          I = 1;
        L > t.maxTextureSize &&
          ((I = Math.ceil(L / t.maxTextureSize)), (L = t.maxTextureSize));
        let G = new Float32Array(L * I * 4 * g),
          O = new ar(G, L, I, g);
        ((O.format = ae), (O.type = un), (O.needsUpdate = !0));
        let P = 4 * A;
        for (let M = 0; M < g; M++) {
          let E = _[M],
            D = y[M],
            B = L * I * 4 * M;
          for (let z = 0; z < E.count; z++) {
            (a.fromBufferAttribute(E, z), E.normalized === !0 && oc(a, E));
            let U = z * P;
            ((G[B + U + 0] = a.x),
              (G[B + U + 1] = a.y),
              (G[B + U + 2] = a.z),
              (G[B + U + 3] = 0),
              p === !0 &&
                (a.fromBufferAttribute(D, z),
                D.normalized === !0 && oc(a, D),
                (G[B + U + 4] = a.x),
                (G[B + U + 5] = a.y),
                (G[B + U + 6] = a.z),
                (G[B + U + 7] = 0)));
          }
        }
        ((v = { count: g, texture: O, size: new q(L, I) }), r.set(h, v));
      }
      let x = 0;
      for (let p = 0; p < f.length; p++) x += f[p];
      let m = h.morphTargetsRelative ? 1 : 1 - x;
      (d.getUniforms().setValue(s, "morphTargetBaseInfluence", m),
        d.getUniforms().setValue(s, "morphTargetInfluences", f),
        d.getUniforms().setValue(s, "morphTargetsTexture", v.texture, e),
        d.getUniforms().setValue(s, "morphTargetsTextureSize", v.size));
    } else {
      let g = f === void 0 ? 0 : f.length,
        v = n[h.id];
      if (v === void 0 || v.length !== g) {
        v = [];
        for (let y = 0; y < g; y++) v[y] = [y, 0];
        n[h.id] = v;
      }
      for (let y = 0; y < g; y++) {
        let w = v[y];
        ((w[0] = y), (w[1] = f[y]));
      }
      v.sort(Am);
      for (let y = 0; y < 8; y++)
        y < g && v[y][1]
          ? ((o[y][0] = v[y][0]), (o[y][1] = v[y][1]))
          : ((o[y][0] = Number.MAX_SAFE_INTEGER), (o[y][1] = 0));
      o.sort(Em);
      let x = h.morphAttributes.position,
        m = h.morphAttributes.normal,
        p = 0;
      for (let y = 0; y < 8; y++) {
        let w = o[y],
          A = w[0],
          L = w[1];
        A !== Number.MAX_SAFE_INTEGER && L
          ? (x &&
              h.getAttribute("morphTarget" + y) !== x[A] &&
              h.setAttribute("morphTarget" + y, x[A]),
            m &&
              h.getAttribute("morphNormal" + y) !== m[A] &&
              h.setAttribute("morphNormal" + y, m[A]),
            (i[y] = L),
            (p += L))
          : (x &&
              h.hasAttribute("morphTarget" + y) === !0 &&
              h.deleteAttribute("morphTarget" + y),
            m &&
              h.hasAttribute("morphNormal" + y) === !0 &&
              h.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      let _ = h.morphTargetsRelative ? 1 : 1 - p;
      (d.getUniforms().setValue(s, "morphTargetBaseInfluence", _),
        d.getUniforms().setValue(s, "morphTargetInfluences", i));
    }
  }
  return { update: l };
}
function Lm(s, t, e, n) {
  let i = new WeakMap();
  function r(l) {
    let c = n.render.frame,
      h = l.geometry,
      u = t.get(l, h);
    return (
      i.get(u) !== c && (t.update(u), i.set(u, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        e.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && e.update(l.instanceColor, 34962)),
      u
    );
  }
  function a() {
    i = new WeakMap();
  }
  function o(l) {
    let c = l.target;
    (c.removeEventListener("dispose", o),
      e.remove(c.instanceMatrix),
      c.instanceColor !== null && e.remove(c.instanceColor));
  }
  return { update: r, dispose: a };
}
var Es = class extends ce {
  constructor(t = null, e = 1, n = 1, i = 1) {
    (super(null),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = te),
      (this.minFilter = te),
      (this.wrapR = Se),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
};
Es.prototype.isDataTexture3D = !0;
var oh = new ce(),
  lh = new ar(),
  ch = new Es(),
  hh = new Mi(),
  lc = [],
  cc = [],
  hc = new Float32Array(16),
  uc = new Float32Array(9),
  dc = new Float32Array(4);
function Di(s, t, e) {
  let n = s[0];
  if (n <= 0 || n > 0) return s;
  let i = t * e,
    r = lc[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (lc[i] = r)), t !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) ((o += e), s[a].toArray(r, o));
  }
  return r;
}
function ve(s, t) {
  if (s.length !== t.length) return !1;
  for (let e = 0, n = s.length; e < n; e++) if (s[e] !== t[e]) return !1;
  return !0;
}
function fe(s, t) {
  for (let e = 0, n = t.length; e < n; e++) s[e] = t[e];
}
function ha(s, t) {
  let e = cc[t];
  e === void 0 && ((e = new Int32Array(t)), (cc[t] = e));
  for (let n = 0; n !== t; ++n) e[n] = s.allocateTextureUnit();
  return e;
}
function Cm(s, t) {
  let e = this.cache;
  e[0] !== t && (s.uniform1f(this.addr, t), (e[0] = t));
}
function Pm(s, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (s.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (ve(e, t)) return;
    (s.uniform2fv(this.addr, t), fe(e, t));
  }
}
function Im(s, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (s.uniform3f(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
      (s.uniform3f(this.addr, t.r, t.g, t.b),
      (e[0] = t.r),
      (e[1] = t.g),
      (e[2] = t.b));
  else {
    if (ve(e, t)) return;
    (s.uniform3fv(this.addr, t), fe(e, t));
  }
}
function Dm(s, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (s.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (ve(e, t)) return;
    (s.uniform4fv(this.addr, t), fe(e, t));
  }
}
function zm(s, t) {
  let e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (ve(e, t)) return;
    (s.uniformMatrix2fv(this.addr, !1, t), fe(e, t));
  } else {
    if (ve(e, n)) return;
    (dc.set(n), s.uniformMatrix2fv(this.addr, !1, dc), fe(e, n));
  }
}
function Nm(s, t) {
  let e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (ve(e, t)) return;
    (s.uniformMatrix3fv(this.addr, !1, t), fe(e, t));
  } else {
    if (ve(e, n)) return;
    (uc.set(n), s.uniformMatrix3fv(this.addr, !1, uc), fe(e, n));
  }
}
function Fm(s, t) {
  let e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (ve(e, t)) return;
    (s.uniformMatrix4fv(this.addr, !1, t), fe(e, t));
  } else {
    if (ve(e, n)) return;
    (hc.set(n), s.uniformMatrix4fv(this.addr, !1, hc), fe(e, n));
  }
}
function Om(s, t) {
  let e = this.cache;
  e[0] !== t && (s.uniform1i(this.addr, t), (e[0] = t));
}
function Bm(s, t) {
  let e = this.cache;
  ve(e, t) || (s.uniform2iv(this.addr, t), fe(e, t));
}
function Um(s, t) {
  let e = this.cache;
  ve(e, t) || (s.uniform3iv(this.addr, t), fe(e, t));
}
function Hm(s, t) {
  let e = this.cache;
  ve(e, t) || (s.uniform4iv(this.addr, t), fe(e, t));
}
function Gm(s, t) {
  let e = this.cache;
  e[0] !== t && (s.uniform1ui(this.addr, t), (e[0] = t));
}
function Vm(s, t) {
  let e = this.cache;
  ve(e, t) || (s.uniform2uiv(this.addr, t), fe(e, t));
}
function km(s, t) {
  let e = this.cache;
  ve(e, t) || (s.uniform3uiv(this.addr, t), fe(e, t));
}
function Wm(s, t) {
  let e = this.cache;
  ve(e, t) || (s.uniform4uiv(this.addr, t), fe(e, t));
}
function jm(s, t, e) {
  let n = this.cache,
    i = e.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.safeSetTexture2D(t || oh, i));
}
function qm(s, t, e) {
  let n = this.cache,
    i = e.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture3D(t || ch, i));
}
function Xm(s, t, e) {
  let n = this.cache,
    i = e.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.safeSetTextureCube(t || hh, i));
}
function Jm(s, t, e) {
  let n = this.cache,
    i = e.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture2DArray(t || lh, i));
}
function Ym(s) {
  switch (s) {
    case 5126:
      return Cm;
    case 35664:
      return Pm;
    case 35665:
      return Im;
    case 35666:
      return Dm;
    case 35674:
      return zm;
    case 35675:
      return Nm;
    case 35676:
      return Fm;
    case 5124:
    case 35670:
      return Om;
    case 35667:
    case 35671:
      return Bm;
    case 35668:
    case 35672:
      return Um;
    case 35669:
    case 35673:
      return Hm;
    case 5125:
      return Gm;
    case 36294:
      return Vm;
    case 36295:
      return km;
    case 36296:
      return Wm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jm;
    case 35679:
    case 36299:
    case 36307:
      return qm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Xm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Jm;
  }
}
function Zm(s, t) {
  s.uniform1fv(this.addr, t);
}
function Qm(s, t) {
  let e = Di(t, this.size, 2);
  s.uniform2fv(this.addr, e);
}
function $m(s, t) {
  let e = Di(t, this.size, 3);
  s.uniform3fv(this.addr, e);
}
function Km(s, t) {
  let e = Di(t, this.size, 4);
  s.uniform4fv(this.addr, e);
}
function tg(s, t) {
  let e = Di(t, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, e);
}
function eg(s, t) {
  let e = Di(t, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, e);
}
function ng(s, t) {
  let e = Di(t, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, e);
}
function ig(s, t) {
  s.uniform1iv(this.addr, t);
}
function rg(s, t) {
  s.uniform2iv(this.addr, t);
}
function sg(s, t) {
  s.uniform3iv(this.addr, t);
}
function ag(s, t) {
  s.uniform4iv(this.addr, t);
}
function og(s, t) {
  s.uniform1uiv(this.addr, t);
}
function lg(s, t) {
  s.uniform2uiv(this.addr, t);
}
function cg(s, t) {
  s.uniform3uiv(this.addr, t);
}
function hg(s, t) {
  s.uniform4uiv(this.addr, t);
}
function ug(s, t, e) {
  let n = t.length,
    i = ha(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.safeSetTexture2D(t[r] || oh, i[r]);
}
function dg(s, t, e) {
  let n = t.length,
    i = ha(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.setTexture3D(t[r] || ch, i[r]);
}
function pg(s, t, e) {
  let n = t.length,
    i = ha(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.safeSetTextureCube(t[r] || hh, i[r]);
}
function fg(s, t, e) {
  let n = t.length,
    i = ha(e, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) e.setTexture2DArray(t[r] || lh, i[r]);
}
function mg(s) {
  switch (s) {
    case 5126:
      return Zm;
    case 35664:
      return Qm;
    case 35665:
      return $m;
    case 35666:
      return Km;
    case 35674:
      return tg;
    case 35675:
      return eg;
    case 35676:
      return ng;
    case 5124:
    case 35670:
      return ig;
    case 35667:
    case 35671:
      return rg;
    case 35668:
    case 35672:
      return sg;
    case 35669:
    case 35673:
      return ag;
    case 5125:
      return og;
    case 36294:
      return lg;
    case 36295:
      return cg;
    case 36296:
      return hg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ug;
    case 35679:
    case 36299:
    case 36307:
      return dg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return pg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return fg;
  }
}
function gg(s, t, e) {
  ((this.id = s),
    (this.addr = e),
    (this.cache = []),
    (this.setValue = Ym(t.type)));
}
function uh(s, t, e) {
  ((this.id = s),
    (this.addr = e),
    (this.cache = []),
    (this.size = t.size),
    (this.setValue = mg(t.type)));
}
uh.prototype.updateCache = function (s) {
  let t = this.cache;
  (s instanceof Float32Array &&
    t.length !== s.length &&
    (this.cache = new Float32Array(s.length)),
    fe(t, s));
};
function dh(s) {
  ((this.id = s), (this.seq = []), (this.map = {}));
}
dh.prototype.setValue = function (s, t, e) {
  let n = this.seq;
  for (let i = 0, r = n.length; i !== r; ++i) {
    let a = n[i];
    a.setValue(s, t[a.id], e);
  }
};
var Ga = /(\w+)(\])?(\[|\.)?/g;
function pc(s, t) {
  (s.seq.push(t), (s.map[t.id] = t));
}
function vg(s, t, e) {
  let n = s.name,
    i = n.length;
  for (Ga.lastIndex = 0; ; ) {
    let r = Ga.exec(n),
      a = Ga.lastIndex,
      o = r[1],
      l = r[2] === "]",
      c = r[3];
    if ((l && (o |= 0), c === void 0 || (c === "[" && a + 2 === i))) {
      pc(e, c === void 0 ? new gg(o, s, t) : new uh(o, s, t));
      break;
    }
    {
      let u = e.map[o];
      (u === void 0 && ((u = new dh(o)), pc(e, u)), (e = u));
    }
  }
}
function mn(s, t) {
  ((this.seq = []), (this.map = {}));
  let e = s.getProgramParameter(t, 35718);
  for (let n = 0; n < e; ++n) {
    let i = s.getActiveUniform(t, n),
      r = s.getUniformLocation(t, i.name);
    vg(i, r, this);
  }
}
mn.prototype.setValue = function (s, t, e, n) {
  let i = this.map[t];
  i !== void 0 && i.setValue(s, e, n);
};
mn.prototype.setOptional = function (s, t, e) {
  let n = t[e];
  n !== void 0 && this.setValue(s, e, n);
};
mn.upload = function (s, t, e, n) {
  for (let i = 0, r = t.length; i !== r; ++i) {
    let a = t[i],
      o = e[a.id];
    o.needsUpdate !== !1 && a.setValue(s, o.value, n);
  }
};
mn.seqWithValue = function (s, t) {
  let e = [];
  for (let n = 0, i = s.length; n !== i; ++n) {
    let r = s[n];
    r.id in t && e.push(r);
  }
  return e;
};
function fc(s, t, e) {
  let n = s.createShader(t);
  return (s.shaderSource(n, e), s.compileShader(n), n);
}
var yg = 0;
function xg(s) {
  let t = s.split(`
`);
  for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
  return t.join(`
`);
}
function ph(s) {
  switch (s) {
    case Ne:
      return ["Linear", "( value )"];
    case Pi:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
        ["Linear", "( value )"]
      );
  }
}
function mc(s, t, e) {
  let n = s.getShaderParameter(t, 35713),
    i = s.getShaderInfoLog(t).trim();
  return n && i === ""
    ? ""
    : e.toUpperCase() +
        `

` +
        i +
        `

` +
        xg(s.getShaderSource(t));
}
function Pn(s, t) {
  let e = ph(t);
  return (
    "vec4 " + s + "( vec4 value ) { return " + e[0] + "ToLinear" + e[1] + "; }"
  );
}
function _g(s, t) {
  let e = ph(t);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }";
}
function bg(s, t) {
  let e;
  switch (t) {
    case ru:
      e = "Linear";
      break;
    case su:
      e = "Reinhard";
      break;
    case au:
      e = "OptimizedCineon";
      break;
    case ou:
      e = "ACESFilmic";
      break;
    case lu:
      e = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (e = "Linear"));
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
  );
}
function wg(s) {
  return [
    s.extensionDerivatives ||
    s.envMapCubeUV ||
    s.bumpMap ||
    s.tangentSpaceNormalMap ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Xi).join(`
`);
}
function Mg(s) {
  let t = [];
  for (let e in s) {
    let n = s[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Sg(s, t) {
  let e = {},
    n = s.getProgramParameter(t, 35721);
  for (let i = 0; i < n; i++) {
    let r = s.getActiveAttrib(t, i),
      a = r.name,
      o = 1;
    (r.type === 35674 && (o = 2),
      r.type === 35675 && (o = 3),
      r.type === 35676 && (o = 4),
      (e[a] = {
        type: r.type,
        location: s.getAttribLocation(t, a),
        locationSize: o,
      }));
  }
  return e;
}
function Xi(s) {
  return s !== "";
}
function gc(s, t) {
  return s
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function vc(s, t) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection,
    );
}
var Tg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function so(s) {
  return s.replace(Tg, Eg);
}
function Eg(s, t) {
  let e = Dt[t];
  if (e === void 0) throw new Error("Can not resolve #include <" + t + ">");
  return so(e);
}
var Ag =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  Rg =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function yc(s) {
  return s.replace(Rg, fh).replace(Ag, Lg);
}
function Lg(s, t, e, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.",
    ),
    fh(s, t, e, n)
  );
}
function fh(s, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function xc(s) {
  let t =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (t += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
        ? (t += `
#define MEDIUM_PRECISION`)
        : s.precision === "lowp" &&
          (t += `
#define LOW_PRECISION`),
    t
  );
}
function Cg(s) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === Yc
      ? (t = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === Fh
        ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
        : s.shadowMapType === qi && (t = "SHADOWMAP_TYPE_VSM"),
    t
  );
}
function Pg(s) {
  let t = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Lr:
      case Cr:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case oa:
      case cl:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Ig(s) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Cr:
      case cl:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Dg(s) {
  let t = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case aa:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case nu:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case iu:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function zg(s, t, e, n) {
  let i = s.getContext(),
    r = e.defines,
    a = e.vertexShader,
    o = e.fragmentShader,
    l = Cg(e),
    c = Pg(e),
    h = Ig(e),
    u = Dg(e),
    d = e.isWebGL2 ? "" : wg(e),
    f = Mg(r),
    g = i.createProgram(),
    v,
    x,
    m = e.glslVersion
      ? "#version " +
        e.glslVersion +
        `
`
      : "";
  (e.isRawShaderMaterial
    ? ((v = [f].filter(Xi).join(`
`)),
      v.length > 0 &&
        (v += `
`),
      (x = [d, f].filter(Xi).join(`
`)),
      x.length > 0 &&
        (x += `
`))
    : ((v = [
        xc(e),
        "#define SHADER_NAME " + e.shaderName,
        f,
        e.instancing ? "#define USE_INSTANCING" : "",
        e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        "#define MAX_BONES " + e.maxBones,
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.map ? "#define USE_MAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + h : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMap && e.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        e.normalMap && e.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.displacementMap && e.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        e.vertexTangents ? "#define USE_TANGENT" : "",
        e.vertexColors ? "#define USE_COLOR" : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUvs ? "#define USE_UV" : "",
        e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.skinning ? "#define USE_SKINNING" : "",
        e.useVertexTexture ? "#define BONE_TEXTURE" : "",
        e.morphTargets ? "#define USE_MORPHTARGETS" : "",
        e.morphNormals && e.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        e.morphTargets && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
        e.morphTargets && e.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount
          : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + l : "",
        e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        e.logarithmicDepthBuffer && e.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Xi).join(`
`)),
      (x = [
        d,
        xc(e),
        "#define SHADER_NAME " + e.shaderName,
        f,
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.map ? "#define USE_MAP" : "",
        e.matcap ? "#define USE_MATCAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + c : "",
        e.envMap ? "#define " + h : "",
        e.envMap ? "#define " + u : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMap && e.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        e.normalMap && e.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        e.clearcoat ? "#define USE_CLEARCOAT" : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.alphaTest ? "#define USE_ALPHATEST" : "",
        e.sheen ? "#define USE_SHEEN" : "",
        e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.vertexTangents ? "#define USE_TANGENT" : "",
        e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUvs ? "#define USE_UV" : "",
        e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        e.gradientMap ? "#define USE_GRADIENTMAP" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + l : "",
        e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        e.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        e.logarithmicDepthBuffer && e.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        (e.extensionShaderTextureLOD || e.envMap) &&
        e.rendererExtensionShaderTextureLod
          ? "#define TEXTURE_LOD_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        e.toneMapping !== pn ? "#define TONE_MAPPING" : "",
        e.toneMapping !== pn ? Dt.tonemapping_pars_fragment : "",
        e.toneMapping !== pn ? bg("toneMapping", e.toneMapping) : "",
        e.dithering ? "#define DITHERING" : "",
        e.format === Nn ? "#define OPAQUE" : "",
        Dt.encodings_pars_fragment,
        e.map ? Pn("mapTexelToLinear", e.mapEncoding) : "",
        e.matcap ? Pn("matcapTexelToLinear", e.matcapEncoding) : "",
        e.envMap ? Pn("envMapTexelToLinear", e.envMapEncoding) : "",
        e.emissiveMap
          ? Pn("emissiveMapTexelToLinear", e.emissiveMapEncoding)
          : "",
        e.specularColorMap
          ? Pn("specularColorMapTexelToLinear", e.specularColorMapEncoding)
          : "",
        e.sheenColorMap
          ? Pn("sheenColorMapTexelToLinear", e.sheenColorMapEncoding)
          : "",
        e.lightMap ? Pn("lightMapTexelToLinear", e.lightMapEncoding) : "",
        _g("linearToOutputTexel", e.outputEncoding),
        e.depthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
        `
`,
      ].filter(Xi).join(`
`))),
    (a = so(a)),
    (a = gc(a, e)),
    (a = vc(a, e)),
    (o = so(o)),
    (o = gc(o, e)),
    (o = vc(o, e)),
    (a = yc(a)),
    (o = yc(o)),
    e.isWebGL2 &&
      e.isRawShaderMaterial !== !0 &&
      ((m = `#version 300 es
`),
      (v =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        v),
      (x =
        [
          "#define varying in",
          e.glslVersion === kl
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          e.glslVersion === kl ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        x)));
  let p = m + v + a,
    _ = m + x + o,
    y = fc(i, 35633, p),
    w = fc(i, 35632, _);
  if (
    (i.attachShader(g, y),
    i.attachShader(g, w),
    e.index0AttributeName !== void 0
      ? i.bindAttribLocation(g, 0, e.index0AttributeName)
      : e.morphTargets === !0 && i.bindAttribLocation(g, 0, "position"),
    i.linkProgram(g),
    s.debug.checkShaderErrors)
  ) {
    let I = i.getProgramInfoLog(g).trim(),
      G = i.getShaderInfoLog(y).trim(),
      O = i.getShaderInfoLog(w).trim(),
      P = !0,
      M = !0;
    if (i.getProgramParameter(g, 35714) === !1) {
      P = !1;
      let E = mc(i, y, "vertex"),
        D = mc(i, w, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(g, 35715) +
          `

Program Info Log: ` +
          I +
          `
` +
          E +
          `
` +
          D,
      );
    } else
      I !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", I)
        : (G !== "" && O !== "") || (M = !1);
    M &&
      (this.diagnostics = {
        runnable: P,
        programLog: I,
        vertexShader: { log: G, prefix: v },
        fragmentShader: { log: O, prefix: x },
      });
  }
  (i.deleteShader(y), i.deleteShader(w));
  let A;
  this.getUniforms = function () {
    return (A === void 0 && (A = new mn(i, g)), A);
  };
  let L;
  return (
    (this.getAttributes = function () {
      return (L === void 0 && (L = Sg(i, g)), L);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        i.deleteProgram(g),
        (this.program = void 0));
    }),
    (this.name = e.shaderName),
    (this.id = yg++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = g),
    (this.vertexShader = y),
    (this.fragmentShader = w),
    this
  );
}
var Ng = 0,
  ao = class {
    constructor() {
      ((this.shaderCache = new Map()), (this.materialCache = new Map()));
    }
    update(t) {
      let e = t.vertexShader,
        n = t.fragmentShader,
        i = this._getShaderStage(e),
        r = this._getShaderStage(n),
        a = this._getShaderCacheForMaterial(t);
      return (
        a.has(i) === !1 && (a.add(i), i.usedTimes++),
        a.has(r) === !1 && (a.add(r), r.usedTimes++),
        this
      );
    }
    remove(t) {
      let e = this.materialCache.get(t);
      for (let n of e)
        (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n));
      return (this.materialCache.delete(t), this);
    }
    getVertexShaderID(t) {
      return this._getShaderStage(t.vertexShader).id;
    }
    getFragmentShaderID(t) {
      return this._getShaderStage(t.fragmentShader).id;
    }
    dispose() {
      (this.shaderCache.clear(), this.materialCache.clear());
    }
    _getShaderCacheForMaterial(t) {
      let e = this.materialCache;
      return (e.has(t) === !1 && e.set(t, new Set()), e.get(t));
    }
    _getShaderStage(t) {
      let e = this.shaderCache;
      if (e.has(t) === !1) {
        let n = new oo();
        e.set(t, n);
      }
      return e.get(t);
    }
  },
  oo = class {
    constructor() {
      ((this.id = Ng++), (this.usedTimes = 0));
    }
  };
function Fg(s, t, e, n, i, r, a) {
  let o = new bs(),
    l = new ao(),
    c = [],
    h = i.isWebGL2,
    u = i.logarithmicDepthBuffer,
    d = i.floatVertexTextures,
    f = i.maxVertexUniforms,
    g = i.vertexTextures,
    v = i.precision,
    x = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
  function m(M) {
    let D = M.skeleton.bones;
    if (d) return 1024;
    {
      let z = Math.floor((f - 20) / 4),
        U = Math.min(z, D.length);
      return U < D.length
        ? (console.warn(
            "THREE.WebGLRenderer: Skeleton has " +
              D.length +
              " bones. This GPU supports " +
              U +
              ".",
          ),
          0)
        : U;
    }
  }
  function p(M) {
    let E;
    return (
      M && M.isTexture
        ? (E = M.encoding)
        : M && M.isWebGLRenderTarget
          ? (console.warn(
              "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.",
            ),
            (E = M.texture.encoding))
          : (E = Ne),
      h &&
        M &&
        M.isTexture &&
        M.format === ae &&
        M.type === Ke &&
        M.encoding === Pi &&
        (E = Ne),
      E
    );
  }
  function _(M, E, D, B, z) {
    let U = B.fog,
      nt = M.isMeshStandardMaterial ? B.environment : null,
      lt = (M.isMeshStandardMaterial ? e : t).get(M.envMap || nt),
      k = x[M.type],
      W = z.isSkinnedMesh ? m(z) : 0;
    M.precision !== null &&
      ((v = i.getMaxPrecision(M.precision)),
      v !== M.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          M.precision,
          "not supported, using",
          v,
          "instead.",
        ));
    let ct, at, ut, zt;
    if (k) {
      let gt = ke[k];
      ((ct = gt.vertexShader), (at = gt.fragmentShader));
    } else
      ((ct = M.vertexShader),
        (at = M.fragmentShader),
        l.update(M),
        (ut = l.getVertexShaderID(M)),
        (zt = l.getFragmentShaderID(M)));
    let J = s.getRenderTarget(),
      At = M.alphaTest > 0,
      vt = M.clearcoat > 0;
    return {
      isWebGL2: h,
      shaderID: k,
      shaderName: M.type,
      vertexShader: ct,
      fragmentShader: at,
      defines: M.defines,
      customVertexShaderID: ut,
      customFragmentShaderID: zt,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: v,
      instancing: z.isInstancedMesh === !0,
      instancingColor: z.isInstancedMesh === !0 && z.instanceColor !== null,
      supportsVertexTextures: g,
      outputEncoding: J !== null ? p(J.texture) : s.outputEncoding,
      map: !!M.map,
      mapEncoding: p(M.map),
      matcap: !!M.matcap,
      matcapEncoding: p(M.matcap),
      envMap: !!lt,
      envMapMode: lt && lt.mapping,
      envMapEncoding: p(lt),
      envMapCubeUV: !!lt && (lt.mapping === oa || lt.mapping === cl),
      lightMap: !!M.lightMap,
      lightMapEncoding: p(M.lightMap),
      aoMap: !!M.aoMap,
      emissiveMap: !!M.emissiveMap,
      emissiveMapEncoding: p(M.emissiveMap),
      bumpMap: !!M.bumpMap,
      normalMap: !!M.normalMap,
      objectSpaceNormalMap: M.normalMapType === od,
      tangentSpaceNormalMap: M.normalMapType === Ii,
      clearcoat: vt,
      clearcoatMap: vt && !!M.clearcoatMap,
      clearcoatRoughnessMap: vt && !!M.clearcoatRoughnessMap,
      clearcoatNormalMap: vt && !!M.clearcoatNormalMap,
      displacementMap: !!M.displacementMap,
      roughnessMap: !!M.roughnessMap,
      metalnessMap: !!M.metalnessMap,
      specularMap: !!M.specularMap,
      specularIntensityMap: !!M.specularIntensityMap,
      specularColorMap: !!M.specularColorMap,
      specularColorMapEncoding: p(M.specularColorMap),
      alphaMap: !!M.alphaMap,
      alphaTest: At,
      gradientMap: !!M.gradientMap,
      sheen: M.sheen > 0,
      sheenColorMap: !!M.sheenColorMap,
      sheenColorMapEncoding: p(M.sheenColorMap),
      sheenRoughnessMap: !!M.sheenRoughnessMap,
      transmission: M.transmission > 0,
      transmissionMap: !!M.transmissionMap,
      thicknessMap: !!M.thicknessMap,
      combine: M.combine,
      vertexTangents:
        !!M.normalMap && !!z.geometry && !!z.geometry.attributes.tangent,
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!z.geometry &&
        !!z.geometry.attributes.color &&
        z.geometry.attributes.color.itemSize === 4,
      vertexUvs:
        !!M.map ||
        !!M.bumpMap ||
        !!M.normalMap ||
        !!M.specularMap ||
        !!M.alphaMap ||
        !!M.emissiveMap ||
        !!M.roughnessMap ||
        !!M.metalnessMap ||
        !!M.clearcoatMap ||
        !!M.clearcoatRoughnessMap ||
        !!M.clearcoatNormalMap ||
        !!M.displacementMap ||
        !!M.transmissionMap ||
        !!M.thicknessMap ||
        !!M.specularIntensityMap ||
        !!M.specularColorMap ||
        !!M.sheenColorMap ||
        !!M.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          M.map ||
          M.bumpMap ||
          M.normalMap ||
          M.specularMap ||
          M.alphaMap ||
          M.emissiveMap ||
          M.roughnessMap ||
          M.metalnessMap ||
          M.clearcoatNormalMap ||
          M.transmission > 0 ||
          M.transmissionMap ||
          M.thicknessMap ||
          M.specularIntensityMap ||
          M.specularColorMap ||
          M.sheen > 0 ||
          M.sheenColorMap ||
          M.sheenRoughnessMap
        ) && !!M.displacementMap,
      fog: !!U,
      useFog: M.fog,
      fogExp2: U && U.isFogExp2,
      flatShading: !!M.flatShading,
      sizeAttenuation: M.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: z.isSkinnedMesh === !0 && W > 0,
      maxBones: W,
      useVertexTexture: d,
      morphTargets: !!z.geometry && !!z.geometry.morphAttributes.position,
      morphNormals: !!z.geometry && !!z.geometry.morphAttributes.normal,
      morphTargetsCount:
        !z.geometry || !z.geometry.morphAttributes.position
          ? 0
          : z.geometry.morphAttributes.position.length,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      format: M.format,
      dithering: M.dithering,
      shadowMapEnabled: s.shadowMap.enabled && D.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: M.toneMapped ? s.toneMapping : pn,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === vn,
      flipSided: M.side === Kt,
      depthPacking: M.depthPacking !== void 0 && M.depthPacking,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: M.extensions && M.extensions.derivatives,
      extensionFragDepth: M.extensions && M.extensions.fragDepth,
      extensionDrawBuffers: M.extensions && M.extensions.drawBuffers,
      extensionShaderTextureLOD: M.extensions && M.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
  }
  function y(M) {
    let E = [];
    if (
      (M.shaderID
        ? E.push(M.shaderID)
        : (E.push(M.customVertexShaderID), E.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (let D in M.defines) (E.push(D), E.push(M.defines[D]));
    return (
      M.isRawShaderMaterial === !1 &&
        (w(E, M), A(E, M), E.push(s.outputEncoding)),
      E.push(M.customProgramCacheKey),
      E.join()
    );
  }
  function w(M, E) {
    (M.push(E.precision),
      M.push(E.outputEncoding),
      M.push(E.mapEncoding),
      M.push(E.matcapEncoding),
      M.push(E.envMapMode),
      M.push(E.envMapEncoding),
      M.push(E.lightMapEncoding),
      M.push(E.emissiveMapEncoding),
      M.push(E.combine),
      M.push(E.vertexUvs),
      M.push(E.fogExp2),
      M.push(E.sizeAttenuation),
      M.push(E.maxBones),
      M.push(E.morphTargetsCount),
      M.push(E.numDirLights),
      M.push(E.numPointLights),
      M.push(E.numSpotLights),
      M.push(E.numHemiLights),
      M.push(E.numRectAreaLights),
      M.push(E.numDirLightShadows),
      M.push(E.numPointLightShadows),
      M.push(E.numSpotLightShadows),
      M.push(E.shadowMapType),
      M.push(E.toneMapping),
      M.push(E.numClippingPlanes),
      M.push(E.numClipIntersection),
      M.push(E.format),
      M.push(E.specularColorMapEncoding),
      M.push(E.sheenColorMapEncoding));
  }
  function A(M, E) {
    (o.disableAll(),
      E.isWebGL2 && o.enable(0),
      E.supportsVertexTextures && o.enable(1),
      E.instancing && o.enable(2),
      E.instancingColor && o.enable(3),
      E.map && o.enable(4),
      E.matcap && o.enable(5),
      E.envMap && o.enable(6),
      E.envMapCubeUV && o.enable(7),
      E.lightMap && o.enable(8),
      E.aoMap && o.enable(9),
      E.emissiveMap && o.enable(10),
      E.bumpMap && o.enable(11),
      E.normalMap && o.enable(12),
      E.objectSpaceNormalMap && o.enable(13),
      E.tangentSpaceNormalMap && o.enable(14),
      E.clearcoat && o.enable(15),
      E.clearcoatMap && o.enable(16),
      E.clearcoatRoughnessMap && o.enable(17),
      E.clearcoatNormalMap && o.enable(18),
      E.displacementMap && o.enable(19),
      E.specularMap && o.enable(20),
      E.roughnessMap && o.enable(21),
      E.metalnessMap && o.enable(22),
      E.gradientMap && o.enable(23),
      E.alphaMap && o.enable(24),
      E.alphaTest && o.enable(25),
      E.vertexColors && o.enable(26),
      E.vertexAlphas && o.enable(27),
      E.vertexUvs && o.enable(28),
      E.vertexTangents && o.enable(29),
      E.uvsVertexOnly && o.enable(30),
      E.fog && o.enable(31),
      M.push(o.mask),
      o.disableAll(),
      E.useFog && o.enable(0),
      E.flatShading && o.enable(1),
      E.logarithmicDepthBuffer && o.enable(2),
      E.skinning && o.enable(3),
      E.useVertexTexture && o.enable(4),
      E.morphTargets && o.enable(5),
      E.morphNormals && o.enable(6),
      E.premultipliedAlpha && o.enable(7),
      E.shadowMapEnabled && o.enable(8),
      E.physicallyCorrectLights && o.enable(9),
      E.doubleSided && o.enable(10),
      E.flipSided && o.enable(11),
      E.depthPacking && o.enable(12),
      E.dithering && o.enable(13),
      E.specularIntensityMap && o.enable(14),
      E.specularColorMap && o.enable(15),
      E.transmission && o.enable(16),
      E.transmissionMap && o.enable(17),
      E.thicknessMap && o.enable(18),
      E.sheen && o.enable(19),
      E.sheenColorMap && o.enable(20),
      E.sheenRoughnessMap && o.enable(21),
      M.push(o.mask));
  }
  function L(M) {
    let E = x[M.type],
      D;
    if (E) {
      let B = ke[E];
      D = zd.clone(B.uniforms);
    } else D = M.uniforms;
    return D;
  }
  function I(M, E) {
    let D;
    for (let B = 0, z = c.length; B < z; B++) {
      let U = c[B];
      if (U.cacheKey === E) {
        ((D = U), ++D.usedTimes);
        break;
      }
    }
    return (D === void 0 && ((D = new zg(s, E, M, r)), c.push(D)), D);
  }
  function G(M) {
    if (--M.usedTimes === 0) {
      let E = c.indexOf(M);
      ((c[E] = c[c.length - 1]), c.pop(), M.destroy());
    }
  }
  function O(M) {
    l.remove(M);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: _,
    getProgramCacheKey: y,
    getUniforms: L,
    acquireProgram: I,
    releaseProgram: G,
    releaseShaderCache: O,
    programs: c,
    dispose: P,
  };
}
function Og() {
  let s = new WeakMap();
  function t(r) {
    let a = s.get(r);
    return (a === void 0 && ((a = {}), s.set(r, a)), a);
  }
  function e(r) {
    s.delete(r);
  }
  function n(r, a, o) {
    s.get(r)[a] = o;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: t, remove: e, update: n, dispose: i };
}
function Bg(s, t) {
  return s.groupOrder !== t.groupOrder
    ? s.groupOrder - t.groupOrder
    : s.renderOrder !== t.renderOrder
      ? s.renderOrder - t.renderOrder
      : s.material.id !== t.material.id
        ? s.material.id - t.material.id
        : s.z !== t.z
          ? s.z - t.z
          : s.id - t.id;
}
function _c(s, t) {
  return s.groupOrder !== t.groupOrder
    ? s.groupOrder - t.groupOrder
    : s.renderOrder !== t.renderOrder
      ? s.renderOrder - t.renderOrder
      : s.z !== t.z
        ? t.z - s.z
        : s.id - t.id;
}
function bc() {
  let s = [],
    t = 0,
    e = [],
    n = [],
    i = [];
  function r() {
    ((t = 0), (e.length = 0), (n.length = 0), (i.length = 0));
  }
  function a(u, d, f, g, v, x) {
    let m = s[t];
    return (
      m === void 0
        ? ((m = {
            id: u.id,
            object: u,
            geometry: d,
            material: f,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: v,
            group: x,
          }),
          (s[t] = m))
        : ((m.id = u.id),
          (m.object = u),
          (m.geometry = d),
          (m.material = f),
          (m.groupOrder = g),
          (m.renderOrder = u.renderOrder),
          (m.z = v),
          (m.group = x)),
      t++,
      m
    );
  }
  function o(u, d, f, g, v, x) {
    let m = a(u, d, f, g, v, x);
    f.transmission > 0
      ? n.push(m)
      : f.transparent === !0
        ? i.push(m)
        : e.push(m);
  }
  function l(u, d, f, g, v, x) {
    let m = a(u, d, f, g, v, x);
    f.transmission > 0
      ? n.unshift(m)
      : f.transparent === !0
        ? i.unshift(m)
        : e.unshift(m);
  }
  function c(u, d) {
    (e.length > 1 && e.sort(u || Bg),
      n.length > 1 && n.sort(d || _c),
      i.length > 1 && i.sort(d || _c));
  }
  function h() {
    for (let u = t, d = s.length; u < d; u++) {
      let f = s[u];
      if (f.id === null) break;
      ((f.id = null),
        (f.object = null),
        (f.geometry = null),
        (f.material = null),
        (f.group = null));
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function Ug() {
  let s = new WeakMap();
  function t(n, i) {
    let r;
    return (
      s.has(n) === !1
        ? ((r = new bc()), s.set(n, [r]))
        : i >= s.get(n).length
          ? ((r = new bc()), s.get(n).push(r))
          : (r = s.get(n)[i]),
      r
    );
  }
  function e() {
    s = new WeakMap();
  }
  return { get: t, dispose: e };
}
function Hg() {
  let s = {};
  return {
    get: function (t) {
      if (s[t.id] !== void 0) return s[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = { direction: new b(), color: new dt() };
          break;
        case "SpotLight":
          e = {
            position: new b(),
            direction: new b(),
            color: new dt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          e = { position: new b(), color: new dt(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          e = { direction: new b(), skyColor: new dt(), groundColor: new dt() };
          break;
        case "RectAreaLight":
          e = {
            color: new dt(),
            position: new b(),
            halfWidth: new b(),
            halfHeight: new b(),
          };
          break;
      }
      return ((s[t.id] = e), e);
    },
  };
}
function Gg() {
  let s = {};
  return {
    get: function (t) {
      if (s[t.id] !== void 0) return s[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q(),
          };
          break;
        case "SpotLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q(),
          };
          break;
        case "PointLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((s[t.id] = e), e);
    },
  };
}
var Vg = 0;
function kg(s, t) {
  return (t.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0);
}
function Wg(s, t) {
  let e = new Hg(),
    n = Gg(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let h = 0; h < 9; h++) i.probe.push(new b());
  let r = new b(),
    a = new mt(),
    o = new mt();
  function l(h, u) {
    let d = 0,
      f = 0,
      g = 0;
    for (let G = 0; G < 9; G++) i.probe[G].set(0, 0, 0);
    let v = 0,
      x = 0,
      m = 0,
      p = 0,
      _ = 0,
      y = 0,
      w = 0,
      A = 0;
    h.sort(kg);
    let L = u !== !0 ? Math.PI : 1;
    for (let G = 0, O = h.length; G < O; G++) {
      let P = h[G],
        M = P.color,
        E = P.intensity,
        D = P.distance,
        B = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        ((d += M.r * E * L), (f += M.g * E * L), (g += M.b * E * L));
      else if (P.isLightProbe)
        for (let z = 0; z < 9; z++)
          i.probe[z].addScaledVector(P.sh.coefficients[z], E);
      else if (P.isDirectionalLight) {
        let z = e.get(P);
        if (
          (z.color.copy(P.color).multiplyScalar(P.intensity * L), P.castShadow)
        ) {
          let U = P.shadow,
            nt = n.get(P);
          ((nt.shadowBias = U.bias),
            (nt.shadowNormalBias = U.normalBias),
            (nt.shadowRadius = U.radius),
            (nt.shadowMapSize = U.mapSize),
            (i.directionalShadow[v] = nt),
            (i.directionalShadowMap[v] = B),
            (i.directionalShadowMatrix[v] = P.shadow.matrix),
            y++);
        }
        ((i.directional[v] = z), v++);
      } else if (P.isSpotLight) {
        let z = e.get(P);
        if (
          (z.position.setFromMatrixPosition(P.matrixWorld),
          z.color.copy(M).multiplyScalar(E * L),
          (z.distance = D),
          (z.coneCos = Math.cos(P.angle)),
          (z.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (z.decay = P.decay),
          P.castShadow)
        ) {
          let U = P.shadow,
            nt = n.get(P);
          ((nt.shadowBias = U.bias),
            (nt.shadowNormalBias = U.normalBias),
            (nt.shadowRadius = U.radius),
            (nt.shadowMapSize = U.mapSize),
            (i.spotShadow[m] = nt),
            (i.spotShadowMap[m] = B),
            (i.spotShadowMatrix[m] = P.shadow.matrix),
            A++);
        }
        ((i.spot[m] = z), m++);
      } else if (P.isRectAreaLight) {
        let z = e.get(P);
        (z.color.copy(M).multiplyScalar(E),
          z.halfWidth.set(0.5 * P.width, 0, 0),
          z.halfHeight.set(0, 0.5 * P.height, 0),
          (i.rectArea[p] = z),
          p++);
      } else if (P.isPointLight) {
        let z = e.get(P);
        if (
          (z.color.copy(P.color).multiplyScalar(P.intensity * L),
          (z.distance = P.distance),
          (z.decay = P.decay),
          P.castShadow)
        ) {
          let U = P.shadow,
            nt = n.get(P);
          ((nt.shadowBias = U.bias),
            (nt.shadowNormalBias = U.normalBias),
            (nt.shadowRadius = U.radius),
            (nt.shadowMapSize = U.mapSize),
            (nt.shadowCameraNear = U.camera.near),
            (nt.shadowCameraFar = U.camera.far),
            (i.pointShadow[x] = nt),
            (i.pointShadowMap[x] = B),
            (i.pointShadowMatrix[x] = P.shadow.matrix),
            w++);
        }
        ((i.point[x] = z), x++);
      } else if (P.isHemisphereLight) {
        let z = e.get(P);
        (z.skyColor.copy(P.color).multiplyScalar(E * L),
          z.groundColor.copy(P.groundColor).multiplyScalar(E * L),
          (i.hemi[_] = z),
          _++);
      }
    }
    (p > 0 &&
      (t.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = it.LTC_FLOAT_1), (i.rectAreaLTC2 = it.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
          ? ((i.rectAreaLTC1 = it.LTC_HALF_1), (i.rectAreaLTC2 = it.LTC_HALF_2))
          : console.error(
              "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.",
            )),
      (i.ambient[0] = d),
      (i.ambient[1] = f),
      (i.ambient[2] = g));
    let I = i.hash;
    (I.directionalLength !== v ||
      I.pointLength !== x ||
      I.spotLength !== m ||
      I.rectAreaLength !== p ||
      I.hemiLength !== _ ||
      I.numDirectionalShadows !== y ||
      I.numPointShadows !== w ||
      I.numSpotShadows !== A) &&
      ((i.directional.length = v),
      (i.spot.length = m),
      (i.rectArea.length = p),
      (i.point.length = x),
      (i.hemi.length = _),
      (i.directionalShadow.length = y),
      (i.directionalShadowMap.length = y),
      (i.pointShadow.length = w),
      (i.pointShadowMap.length = w),
      (i.spotShadow.length = A),
      (i.spotShadowMap.length = A),
      (i.directionalShadowMatrix.length = y),
      (i.pointShadowMatrix.length = w),
      (i.spotShadowMatrix.length = A),
      (I.directionalLength = v),
      (I.pointLength = x),
      (I.spotLength = m),
      (I.rectAreaLength = p),
      (I.hemiLength = _),
      (I.numDirectionalShadows = y),
      (I.numPointShadows = w),
      (I.numSpotShadows = A),
      (i.version = Vg++));
  }
  function c(h, u) {
    let d = 0,
      f = 0,
      g = 0,
      v = 0,
      x = 0,
      m = u.matrixWorldInverse;
    for (let p = 0, _ = h.length; p < _; p++) {
      let y = h[p];
      if (y.isDirectionalLight) {
        let w = i.directional[d];
        (w.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          w.direction.sub(r),
          w.direction.transformDirection(m),
          d++);
      } else if (y.isSpotLight) {
        let w = i.spot[g];
        (w.position.setFromMatrixPosition(y.matrixWorld),
          w.position.applyMatrix4(m),
          w.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          w.direction.sub(r),
          w.direction.transformDirection(m),
          g++);
      } else if (y.isRectAreaLight) {
        let w = i.rectArea[v];
        (w.position.setFromMatrixPosition(y.matrixWorld),
          w.position.applyMatrix4(m),
          o.identity(),
          a.copy(y.matrixWorld),
          a.premultiply(m),
          o.extractRotation(a),
          w.halfWidth.set(0.5 * y.width, 0, 0),
          w.halfHeight.set(0, 0.5 * y.height, 0),
          w.halfWidth.applyMatrix4(o),
          w.halfHeight.applyMatrix4(o),
          v++);
      } else if (y.isPointLight) {
        let w = i.point[f];
        (w.position.setFromMatrixPosition(y.matrixWorld),
          w.position.applyMatrix4(m),
          f++);
      } else if (y.isHemisphereLight) {
        let w = i.hemi[x];
        (w.direction.setFromMatrixPosition(y.matrixWorld),
          w.direction.transformDirection(m),
          w.direction.normalize(),
          x++);
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function wc(s, t) {
  let e = new Wg(s, t),
    n = [],
    i = [];
  function r() {
    ((n.length = 0), (i.length = 0));
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l(u) {
    e.setup(n, u);
  }
  function c(u) {
    e.setupView(n, u);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: e },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function jg(s, t) {
  let e = new WeakMap();
  function n(r, a = 0) {
    let o;
    return (
      e.has(r) === !1
        ? ((o = new wc(s, t)), e.set(r, [o]))
        : a >= e.get(r).length
          ? ((o = new wc(s, t)), e.get(r).push(o))
          : (o = e.get(r)[a]),
      o
    );
  }
  function i() {
    e = new WeakMap();
  }
  return { get: n, dispose: i };
}
var or = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = sd),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
};
or.prototype.isMeshDepthMaterial = !0;
var lr = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new b()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.fog = !1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.referencePosition.copy(t.referencePosition),
      (this.nearDistance = t.nearDistance),
      (this.farDistance = t.farDistance),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
};
lr.prototype.isMeshDistanceMaterial = !0;
var qg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Xg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function mh(s, t, e) {
  let n = new Si(),
    i = new q(),
    r = new q(),
    a = new Ot(),
    o = new or({ depthPacking: ad }),
    l = new lr(),
    c = {},
    h = e.maxTextureSize,
    u = { 0: Kt, 1: Ki, 2: vn },
    d = new _e({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new q() },
        radius: { value: 4 },
      },
      vertexShader: qg,
      fragmentShader: Xg,
    }),
    f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  let g = new Nt();
  g.setAttribute(
    "position",
    new $t(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  let v = new se(g, d),
    x = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Yc),
    (this.render = function (y, w, A) {
      if (
        x.enabled === !1 ||
        (x.autoUpdate === !1 && x.needsUpdate === !1) ||
        y.length === 0
      )
        return;
      let L = s.getRenderTarget(),
        I = s.getActiveCubeFace(),
        G = s.getActiveMipmapLevel(),
        O = s.state;
      (O.setBlending(dn),
        O.buffers.color.setClear(1, 1, 1, 1),
        O.buffers.depth.setTest(!0),
        O.setScissorTest(!1));
      for (let P = 0, M = y.length; P < M; P++) {
        let E = y[P],
          D = E.shadow;
        if (D === void 0) {
          console.warn("THREE.WebGLShadowMap:", E, "has no shadow.");
          continue;
        }
        if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
        i.copy(D.mapSize);
        let B = D.getFrameExtents();
        if (
          (i.multiply(B),
          r.copy(D.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((r.x = Math.floor(h / B.x)),
              (i.x = r.x * B.x),
              (D.mapSize.x = r.x)),
            i.y > h &&
              ((r.y = Math.floor(h / B.y)),
              (i.y = r.y * B.y),
              (D.mapSize.y = r.y))),
          D.map === null && !D.isPointLightShadow && this.type === qi)
        ) {
          let U = { minFilter: ge, magFilter: ge, format: ae };
          ((D.map = new ye(i.x, i.y, U)),
            (D.map.texture.name = E.name + ".shadowMap"),
            (D.mapPass = new ye(i.x, i.y, U)),
            D.camera.updateProjectionMatrix());
        }
        if (D.map === null) {
          let U = { minFilter: te, magFilter: te, format: ae };
          ((D.map = new ye(i.x, i.y, U)),
            (D.map.texture.name = E.name + ".shadowMap"),
            D.camera.updateProjectionMatrix());
        }
        (s.setRenderTarget(D.map), s.clear());
        let z = D.getViewportCount();
        for (let U = 0; U < z; U++) {
          let nt = D.getViewport(U);
          (a.set(r.x * nt.x, r.y * nt.y, r.x * nt.z, r.y * nt.w),
            O.viewport(a),
            D.updateMatrices(E, U),
            (n = D.getFrustum()),
            _(w, A, D.camera, E, this.type));
        }
        (D.isPointLightShadow || this.type !== qi || m(D, A),
          (D.needsUpdate = !1));
      }
      ((x.needsUpdate = !1), s.setRenderTarget(L, I, G));
    }));
  function m(y, w) {
    let A = t.update(v);
    (d.defines.VSM_SAMPLES !== y.blurSamples &&
      ((d.defines.VSM_SAMPLES = y.blurSamples),
      (f.defines.VSM_SAMPLES = y.blurSamples),
      (d.needsUpdate = !0),
      (f.needsUpdate = !0)),
      (d.uniforms.shadow_pass.value = y.map.texture),
      (d.uniforms.resolution.value = y.mapSize),
      (d.uniforms.radius.value = y.radius),
      s.setRenderTarget(y.mapPass),
      s.clear(),
      s.renderBufferDirect(w, null, A, d, v, null),
      (f.uniforms.shadow_pass.value = y.mapPass.texture),
      (f.uniforms.resolution.value = y.mapSize),
      (f.uniforms.radius.value = y.radius),
      s.setRenderTarget(y.map),
      s.clear(),
      s.renderBufferDirect(w, null, A, f, v, null));
  }
  function p(y, w, A, L, I, G, O) {
    let P = null,
      M =
        L.isPointLight === !0
          ? y.customDistanceMaterial
          : y.customDepthMaterial;
    if (
      ((P = M !== void 0 ? M : L.isPointLight === !0 ? l : o),
      (s.localClippingEnabled &&
        A.clipShadows === !0 &&
        A.clippingPlanes.length !== 0) ||
        (A.displacementMap && A.displacementScale !== 0) ||
        (A.alphaMap && A.alphaTest > 0))
    ) {
      let E = P.uuid,
        D = A.uuid,
        B = c[E];
      B === void 0 && ((B = {}), (c[E] = B));
      let z = B[D];
      (z === void 0 && ((z = P.clone()), (B[D] = z)), (P = z));
    }
    return (
      (P.visible = A.visible),
      (P.wireframe = A.wireframe),
      (P.side =
        O === qi
          ? A.shadowSide !== null
            ? A.shadowSide
            : A.side
          : A.shadowSide !== null
            ? A.shadowSide
            : u[A.side]),
      (P.alphaMap = A.alphaMap),
      (P.alphaTest = A.alphaTest),
      (P.clipShadows = A.clipShadows),
      (P.clippingPlanes = A.clippingPlanes),
      (P.clipIntersection = A.clipIntersection),
      (P.displacementMap = A.displacementMap),
      (P.displacementScale = A.displacementScale),
      (P.displacementBias = A.displacementBias),
      (P.wireframeLinewidth = A.wireframeLinewidth),
      (P.linewidth = A.linewidth),
      L.isPointLight === !0 &&
        P.isMeshDistanceMaterial === !0 &&
        (P.referencePosition.setFromMatrixPosition(L.matrixWorld),
        (P.nearDistance = I),
        (P.farDistance = G)),
      P
    );
  }
  function _(y, w, A, L, I) {
    if (y.visible === !1) return;
    if (
      y.layers.test(w.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && I === qi)) &&
      (!y.frustumCulled || n.intersectsObject(y))
    ) {
      y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, y.matrixWorld);
      let P = t.update(y),
        M = y.material;
      if (Array.isArray(M)) {
        let E = P.groups;
        for (let D = 0, B = E.length; D < B; D++) {
          let z = E[D],
            U = M[z.materialIndex];
          if (U && U.visible) {
            let nt = p(y, P, U, L, A.near, A.far, I);
            s.renderBufferDirect(A, null, P, nt, y, z);
          }
        }
      } else if (M.visible) {
        let E = p(y, P, M, L, A.near, A.far, I);
        s.renderBufferDirect(A, null, P, E, y, null);
      }
    }
    let O = y.children;
    for (let P = 0, M = O.length; P < M; P++) _(O[P], w, A, L, I);
  }
}
function Jg(s, t, e) {
  let n = e.isWebGL2;
  function i() {
    let C = !1,
      tt = new Ot(),
      $ = null,
      Tt = new Ot(0, 0, 0, 0);
    return {
      setMask: function (pt) {
        $ !== pt && !C && (s.colorMask(pt, pt, pt, pt), ($ = pt));
      },
      setLocked: function (pt) {
        C = pt;
      },
      setClear: function (pt, Lt, ot, Rt, jt) {
        (jt === !0 && ((pt *= Rt), (Lt *= Rt), (ot *= Rt)),
          tt.set(pt, Lt, ot, Rt),
          Tt.equals(tt) === !1 && (s.clearColor(pt, Lt, ot, Rt), Tt.copy(tt)));
      },
      reset: function () {
        ((C = !1), ($ = null), Tt.set(-1, 0, 0, 0));
      },
    };
  }
  function r() {
    let C = !1,
      tt = null,
      $ = null,
      Tt = null;
    return {
      setTest: function (pt) {
        pt ? at(2929) : ut(2929);
      },
      setMask: function (pt) {
        tt !== pt && !C && (s.depthMask(pt), (tt = pt));
      },
      setFunc: function (pt) {
        if ($ !== pt) {
          if (pt)
            switch (pt) {
              case Yh:
                s.depthFunc(512);
                break;
              case Zh:
                s.depthFunc(519);
                break;
              case Qh:
                s.depthFunc(513);
                break;
              case Za:
                s.depthFunc(515);
                break;
              case $h:
                s.depthFunc(514);
                break;
              case Kh:
                s.depthFunc(518);
                break;
              case tu:
                s.depthFunc(516);
                break;
              case eu:
                s.depthFunc(517);
                break;
              default:
                s.depthFunc(515);
            }
          else s.depthFunc(515);
          $ = pt;
        }
      },
      setLocked: function (pt) {
        C = pt;
      },
      setClear: function (pt) {
        Tt !== pt && (s.clearDepth(pt), (Tt = pt));
      },
      reset: function () {
        ((C = !1), (tt = null), ($ = null), (Tt = null));
      },
    };
  }
  function a() {
    let C = !1,
      tt = null,
      $ = null,
      Tt = null,
      pt = null,
      Lt = null,
      ot = null,
      Rt = null,
      jt = null;
    return {
      setTest: function (Vt) {
        C || (Vt ? at(2960) : ut(2960));
      },
      setMask: function (Vt) {
        tt !== Vt && !C && (s.stencilMask(Vt), (tt = Vt));
      },
      setFunc: function (Vt, Fe, Oe) {
        ($ !== Vt || Tt !== Fe || pt !== Oe) &&
          (s.stencilFunc(Vt, Fe, Oe), ($ = Vt), (Tt = Fe), (pt = Oe));
      },
      setOp: function (Vt, Fe, Oe) {
        (Lt !== Vt || ot !== Fe || Rt !== Oe) &&
          (s.stencilOp(Vt, Fe, Oe), (Lt = Vt), (ot = Fe), (Rt = Oe));
      },
      setLocked: function (Vt) {
        C = Vt;
      },
      setClear: function (Vt) {
        jt !== Vt && (s.clearStencil(Vt), (jt = Vt));
      },
      reset: function () {
        ((C = !1),
          (tt = null),
          ($ = null),
          (Tt = null),
          (pt = null),
          (Lt = null),
          (ot = null),
          (Rt = null),
          (jt = null));
      },
    };
  }
  let o = new i(),
    l = new r(),
    c = new a(),
    h = {},
    u = {},
    d = null,
    f = !1,
    g = null,
    v = null,
    x = null,
    m = null,
    p = null,
    _ = null,
    y = null,
    w = !1,
    A = null,
    L = null,
    I = null,
    G = null,
    O = null,
    P = s.getParameter(35661),
    M = !1,
    E = 0,
    D = s.getParameter(7938);
  D.indexOf("WebGL") !== -1
    ? ((E = parseFloat(/^WebGL (\d)/.exec(D)[1])), (M = E >= 1))
    : D.indexOf("OpenGL ES") !== -1 &&
      ((E = parseFloat(/^OpenGL ES (\d)/.exec(D)[1])), (M = E >= 2));
  let B = null,
    z = {},
    U = s.getParameter(3088),
    nt = s.getParameter(2978),
    lt = new Ot().fromArray(U),
    k = new Ot().fromArray(nt);
  function W(C, tt, $) {
    let Tt = new Uint8Array(4),
      pt = s.createTexture();
    (s.bindTexture(C, pt),
      s.texParameteri(C, 10241, 9728),
      s.texParameteri(C, 10240, 9728));
    for (let Lt = 0; Lt < $; Lt++)
      s.texImage2D(tt + Lt, 0, 6408, 1, 1, 0, 6408, 5121, Tt);
    return pt;
  }
  let ct = {};
  ((ct[3553] = W(3553, 3553, 1)),
    (ct[34067] = W(34067, 34069, 6)),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    at(2929),
    l.setFunc(Za),
    Bt(!1),
    V(Tl),
    at(2884),
    ft(dn));
  function at(C) {
    h[C] !== !0 && (s.enable(C), (h[C] = !0));
  }
  function ut(C) {
    h[C] !== !1 && (s.disable(C), (h[C] = !1));
  }
  function zt(C, tt) {
    return u[C] !== tt
      ? (s.bindFramebuffer(C, tt),
        (u[C] = tt),
        n && (C === 36009 && (u[36160] = tt), C === 36160 && (u[36009] = tt)),
        !0)
      : !1;
  }
  function J(C) {
    return d !== C ? (s.useProgram(C), (d = C), !0) : !1;
  }
  let At = { [ui]: 32774, [Bh]: 32778, [Uh]: 32779 };
  if (n) ((At[Ll] = 32775), (At[Cl] = 32776));
  else {
    let C = t.get("EXT_blend_minmax");
    C !== null && ((At[Ll] = C.MIN_EXT), (At[Cl] = C.MAX_EXT));
  }
  let vt = {
    [Hh]: 0,
    [Gh]: 1,
    [Vh]: 768,
    [Qc]: 770,
    [Jh]: 776,
    [qh]: 774,
    [Wh]: 772,
    [kh]: 769,
    [$c]: 771,
    [Xh]: 775,
    [jh]: 773,
  };
  function ft(C, tt, $, Tt, pt, Lt, ot, Rt) {
    if (C !== dn) {
      if ((f === !1 && (at(3042), (f = !0)), C === Oh))
        ((pt = pt || tt),
          (Lt = Lt || $),
          (ot = ot || Tt),
          (tt !== v || pt !== p) &&
            (s.blendEquationSeparate(At[tt], At[pt]), (v = tt), (p = pt)),
          ($ !== x || Tt !== m || Lt !== _ || ot !== y) &&
            (s.blendFuncSeparate(vt[$], vt[Tt], vt[Lt], vt[ot]),
            (x = $),
            (m = Tt),
            (_ = Lt),
            (y = ot)),
          (g = C),
          (w = null));
      else if (C !== g || Rt !== w) {
        if (
          ((v !== ui || p !== ui) &&
            (s.blendEquation(32774), (v = ui), (p = ui)),
          Rt)
        )
          switch (C) {
            case Ji:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case El:
              s.blendFunc(1, 1);
              break;
            case Al:
              s.blendFuncSeparate(0, 0, 769, 771);
              break;
            case Rl:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Ji:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case El:
              s.blendFunc(770, 1);
              break;
            case Al:
              s.blendFunc(0, 769);
              break;
            case Rl:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        ((x = null), (m = null), (_ = null), (y = null), (g = C), (w = Rt));
      }
    } else f === !0 && (ut(3042), (f = !1));
  }
  function gt(C, tt) {
    C.side === vn ? ut(2884) : at(2884);
    let $ = C.side === Kt;
    (tt && ($ = !$),
      Bt($),
      C.blending === Ji && C.transparent === !1
        ? ft(dn)
        : ft(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.premultipliedAlpha,
          ),
      l.setFunc(C.depthFunc),
      l.setTest(C.depthTest),
      l.setMask(C.depthWrite),
      o.setMask(C.colorWrite));
    let Tt = C.stencilWrite;
    (c.setTest(Tt),
      Tt &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      K(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ? at(32926) : ut(32926));
  }
  function Bt(C) {
    A !== C && (C ? s.frontFace(2304) : s.frontFace(2305), (A = C));
  }
  function V(C) {
    (C !== zh
      ? (at(2884),
        C !== L &&
          (C === Tl
            ? s.cullFace(1029)
            : C === Nh
              ? s.cullFace(1028)
              : s.cullFace(1032)))
      : ut(2884),
      (L = C));
  }
  function Q(C) {
    C !== I && (M && s.lineWidth(C), (I = C));
  }
  function K(C, tt, $) {
    C
      ? (at(32823),
        (G !== tt || O !== $) && (s.polygonOffset(tt, $), (G = tt), (O = $)))
      : ut(32823);
  }
  function ht(C) {
    C ? at(3089) : ut(3089);
  }
  function st(C) {
    (C === void 0 && (C = 33984 + P - 1),
      B !== C && (s.activeTexture(C), (B = C)));
  }
  function Mt(C, tt) {
    B === null && st();
    let $ = z[B];
    ($ === void 0 && (($ = { type: void 0, texture: void 0 }), (z[B] = $)),
      ($.type !== C || $.texture !== tt) &&
        (s.bindTexture(C, tt || ct[C]), ($.type = C), ($.texture = tt)));
  }
  function St() {
    let C = z[B];
    C !== void 0 &&
      C.type !== void 0 &&
      (s.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function Ct() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Xt() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function R() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function T() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function X() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Y() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function rt() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _t(C) {
    lt.equals(C) === !1 && (s.scissor(C.x, C.y, C.z, C.w), lt.copy(C));
  }
  function yt(C) {
    k.equals(C) === !1 && (s.viewport(C.x, C.y, C.z, C.w), k.copy(C));
  }
  function et() {
    (s.disable(3042),
      s.disable(2884),
      s.disable(2929),
      s.disable(32823),
      s.disable(3089),
      s.disable(2960),
      s.disable(32926),
      s.blendEquation(32774),
      s.blendFunc(1, 0),
      s.blendFuncSeparate(1, 0, 1, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(513),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(519, 0, 4294967295),
      s.stencilOp(7680, 7680, 7680),
      s.clearStencil(0),
      s.cullFace(1029),
      s.frontFace(2305),
      s.polygonOffset(0, 0),
      s.activeTexture(33984),
      s.bindFramebuffer(36160, null),
      n === !0 &&
        (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (h = {}),
      (B = null),
      (z = {}),
      (u = {}),
      (d = null),
      (f = !1),
      (g = null),
      (v = null),
      (x = null),
      (m = null),
      (p = null),
      (_ = null),
      (y = null),
      (w = !1),
      (A = null),
      (L = null),
      (I = null),
      (G = null),
      (O = null),
      lt.set(0, 0, s.canvas.width, s.canvas.height),
      k.set(0, 0, s.canvas.width, s.canvas.height),
      o.reset(),
      l.reset(),
      c.reset());
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
    enable: at,
    disable: ut,
    bindFramebuffer: zt,
    useProgram: J,
    setBlending: ft,
    setMaterial: gt,
    setFlipSided: Bt,
    setCullFace: V,
    setLineWidth: Q,
    setPolygonOffset: K,
    setScissorTest: ht,
    activeTexture: st,
    bindTexture: Mt,
    unbindTexture: St,
    compressedTexImage2D: Ct,
    texImage2D: rt,
    texImage3D: Z,
    texStorage2D: X,
    texStorage3D: Y,
    texSubImage2D: Xt,
    texSubImage3D: R,
    compressedTexSubImage2D: T,
    scissor: _t,
    viewport: yt,
    reset: et,
  };
}
function Yg(s, t, e, n, i, r, a) {
  let o = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    h = i.maxTextureSize,
    u = i.maxSamples,
    f = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : void 0,
    g = new WeakMap(),
    v,
    x = !1;
  try {
    x =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function m(R, T) {
    return x ? new OffscreenCanvas(R, T) : ca("canvas");
  }
  function p(R, T, X, Y) {
    let rt = 1;
    if (
      ((R.width > Y || R.height > Y) && (rt = Y / Math.max(R.width, R.height)),
      rt < 1 || T === !0)
    ) {
      if (
        (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && R instanceof ImageBitmap)
      ) {
        let Z = T ? eh : Math.floor,
          _t = Z(rt * R.width),
          yt = Z(rt * R.height);
        v === void 0 && (v = m(_t, yt));
        let et = X ? m(_t, yt) : v;
        return (
          (et.width = _t),
          (et.height = yt),
          et.getContext("2d").drawImage(R, 0, 0, _t, yt),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              R.width +
              "x" +
              R.height +
              ") to (" +
              _t +
              "x" +
              yt +
              ").",
          ),
          et
        );
      }
      return (
        "data" in R &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              R.width +
              "x" +
              R.height +
              ").",
          ),
        R
      );
    }
    return R;
  }
  function _(R) {
    return eo(R.width) && eo(R.height);
  }
  function y(R) {
    return (
      !o &&
      (R.wrapS !== Se ||
        R.wrapT !== Se ||
        (R.minFilter !== te && R.minFilter !== ge))
    );
  }
  function w(R, T) {
    return R.generateMipmaps && T && R.minFilter !== te && R.minFilter !== ge;
  }
  function A(R) {
    s.generateMipmap(R);
  }
  function L(R, T, X, Y) {
    if (o === !1) return T;
    if (R !== null) {
      if (s[R] !== void 0) return s[R];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          R +
          "'",
      );
    }
    let rt = T;
    return (
      T === 6403 &&
        (X === 5126 && (rt = 33326),
        X === 5131 && (rt = 33325),
        X === 5121 && (rt = 33321)),
      T === 6407 &&
        (X === 5126 && (rt = 34837),
        X === 5131 && (rt = 34843),
        X === 5121 && (rt = 32849)),
      T === 6408 &&
        (X === 5126 && (rt = 34836),
        X === 5131 && (rt = 34842),
        X === 5121 && (rt = Y === Pi ? 35907 : 32856)),
      (rt !== 33325 && rt !== 33326 && rt !== 34842 && rt !== 34836) ||
        t.get("EXT_color_buffer_float"),
      rt
    );
  }
  function I(R, T, X) {
    return w(R, X) === !0 ||
      (R.isFramebufferTexture && R.minFilter !== te && R.minFilter !== ge)
      ? Math.log2(Math.max(T.width, T.height)) + 1
      : R.mipmaps !== void 0 && R.mipmaps.length > 0
        ? R.mipmaps.length
        : R.isCompressedTexture && Array.isArray(R.image)
          ? T.mipmaps.length
          : 1;
  }
  function G(R) {
    return R === te || R === Pl || R === Il ? 9728 : 9729;
  }
  function O(R) {
    let T = R.target;
    (T.removeEventListener("dispose", O),
      M(T),
      T.isVideoTexture && g.delete(T),
      a.memory.textures--);
  }
  function P(R) {
    let T = R.target;
    (T.removeEventListener("dispose", P), E(T));
  }
  function M(R) {
    let T = n.get(R);
    T.__webglInit !== void 0 &&
      (s.deleteTexture(T.__webglTexture), n.remove(R));
  }
  function E(R) {
    let T = R.texture,
      X = n.get(R),
      Y = n.get(T);
    if (R) {
      if (
        (Y.__webglTexture !== void 0 &&
          (s.deleteTexture(Y.__webglTexture), a.memory.textures--),
        R.depthTexture && R.depthTexture.dispose(),
        R.isWebGLCubeRenderTarget)
      )
        for (let rt = 0; rt < 6; rt++)
          (s.deleteFramebuffer(X.__webglFramebuffer[rt]),
            X.__webglDepthbuffer &&
              s.deleteRenderbuffer(X.__webglDepthbuffer[rt]));
      else
        (s.deleteFramebuffer(X.__webglFramebuffer),
          X.__webglDepthbuffer && s.deleteRenderbuffer(X.__webglDepthbuffer),
          X.__webglMultisampledFramebuffer &&
            s.deleteFramebuffer(X.__webglMultisampledFramebuffer),
          X.__webglColorRenderbuffer &&
            s.deleteRenderbuffer(X.__webglColorRenderbuffer),
          X.__webglDepthRenderbuffer &&
            s.deleteRenderbuffer(X.__webglDepthRenderbuffer));
      if (R.isWebGLMultipleRenderTargets)
        for (let rt = 0, Z = T.length; rt < Z; rt++) {
          let _t = n.get(T[rt]);
          (_t.__webglTexture &&
            (s.deleteTexture(_t.__webglTexture), a.memory.textures--),
            n.remove(T[rt]));
        }
      (n.remove(T), n.remove(R));
    }
  }
  let D = 0;
  function B() {
    D = 0;
  }
  function z() {
    let R = D;
    return (
      R >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            R +
            " texture units while this GPU supports only " +
            l,
        ),
      (D += 1),
      R
    );
  }
  function U(R, T) {
    let X = n.get(R);
    if (
      (R.isVideoTexture && st(R), R.version > 0 && X.__version !== R.version)
    ) {
      let Y = R.image;
      if (Y === void 0)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is undefined",
        );
      else {
        if (Y.complete !== !1) {
          zt(X, R, T);
          return;
        }
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      }
    }
    (e.activeTexture(33984 + T), e.bindTexture(3553, X.__webglTexture));
  }
  function nt(R, T) {
    let X = n.get(R);
    R.version > 0 && X.__version !== R.version
      ? zt(X, R, T)
      : (e.activeTexture(33984 + T), e.bindTexture(35866, X.__webglTexture));
  }
  function lt(R, T) {
    let X = n.get(R);
    R.version > 0 && X.__version !== R.version
      ? zt(X, R, T)
      : (e.activeTexture(33984 + T), e.bindTexture(32879, X.__webglTexture));
  }
  function k(R, T) {
    let X = n.get(R);
    R.version > 0 && X.__version !== R.version
      ? J(X, R, T)
      : (e.activeTexture(33984 + T), e.bindTexture(34067, X.__webglTexture));
  }
  let W = { [Ka]: 10497, [Se]: 33071, [to]: 33648 },
    ct = {
      [te]: 9728,
      [Pl]: 9984,
      [Il]: 9986,
      [ge]: 9729,
      [cu]: 9985,
      [la]: 9987,
    };
  function at(R, T, X) {
    if (
      (X
        ? (s.texParameteri(R, 10242, W[T.wrapS]),
          s.texParameteri(R, 10243, W[T.wrapT]),
          (R !== 32879 && R !== 35866) || s.texParameteri(R, 32882, W[T.wrapR]),
          s.texParameteri(R, 10240, ct[T.magFilter]),
          s.texParameteri(R, 10241, ct[T.minFilter]))
        : (s.texParameteri(R, 10242, 33071),
          s.texParameteri(R, 10243, 33071),
          (R !== 32879 && R !== 35866) || s.texParameteri(R, 32882, 33071),
          (T.wrapS === Se && T.wrapT === Se) ||
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",
            ),
          s.texParameteri(R, 10240, G(T.magFilter)),
          s.texParameteri(R, 10241, G(T.minFilter)),
          T.minFilter !== te &&
            T.minFilter !== ge &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",
            )),
      t.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      let Y = t.get("EXT_texture_filter_anisotropic");
      if (
        (T.type === un && t.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          T.type === zn &&
          t.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (T.anisotropy > 1 || n.get(T).__currentAnisotropy) &&
        (s.texParameterf(
          R,
          Y.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(T.anisotropy, i.getMaxAnisotropy()),
        ),
        (n.get(T).__currentAnisotropy = T.anisotropy));
    }
  }
  function ut(R, T) {
    R.__webglInit === void 0 &&
      ((R.__webglInit = !0),
      T.addEventListener("dispose", O),
      (R.__webglTexture = s.createTexture()),
      a.memory.textures++);
  }
  function zt(R, T, X) {
    let Y = 3553;
    (T.isDataTexture2DArray && (Y = 35866),
      T.isDataTexture3D && (Y = 32879),
      ut(R, T),
      e.activeTexture(33984 + X),
      e.bindTexture(Y, R.__webglTexture),
      s.pixelStorei(37440, T.flipY),
      s.pixelStorei(37441, T.premultiplyAlpha),
      s.pixelStorei(3317, T.unpackAlignment),
      s.pixelStorei(37443, 0));
    let rt = y(T) && _(T.image) === !1,
      Z = p(T.image, rt, !1, h),
      _t = _(Z) || o,
      yt = r.convert(T.format),
      et = r.convert(T.type),
      C = L(T.internalFormat, yt, et, T.encoding);
    at(Y, T, _t);
    let tt,
      $ = T.mipmaps,
      Tt = o && T.isVideoTexture !== !0,
      pt = R.__version === void 0,
      Lt = I(T, Z, _t);
    if (T.isDepthTexture)
      ((C = 6402),
        o
          ? (C =
              T.type === un
                ? 36012
                : T.type === gs
                  ? 33190
                  : T.type === mi
                    ? 35056
                    : 33189)
          : T.type === un &&
            console.error(
              "WebGLRenderer: Floating point depth texture requires WebGL2.",
            ),
        T.format === Fn &&
          C === 6402 &&
          T.type !== tr &&
          T.type !== gs &&
          (console.warn(
            "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.",
          ),
          (T.type = tr),
          (et = r.convert(T.type))),
        T.format === yi &&
          C === 6402 &&
          ((C = 34041),
          T.type !== mi &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.",
            ),
            (T.type = mi),
            (et = r.convert(T.type)))),
        Tt && pt
          ? e.texStorage2D(3553, 1, C, Z.width, Z.height)
          : e.texImage2D(3553, 0, C, Z.width, Z.height, 0, yt, et, null));
    else if (T.isDataTexture)
      if ($.length > 0 && _t) {
        Tt && pt && e.texStorage2D(3553, Lt, C, $[0].width, $[0].height);
        for (let ot = 0, Rt = $.length; ot < Rt; ot++)
          ((tt = $[ot]),
            Tt
              ? e.texSubImage2D(
                  3553,
                  0,
                  0,
                  0,
                  tt.width,
                  tt.height,
                  yt,
                  et,
                  tt.data,
                )
              : e.texImage2D(
                  3553,
                  ot,
                  C,
                  tt.width,
                  tt.height,
                  0,
                  yt,
                  et,
                  tt.data,
                ));
        T.generateMipmaps = !1;
      } else
        Tt
          ? (pt && e.texStorage2D(3553, Lt, C, Z.width, Z.height),
            e.texSubImage2D(3553, 0, 0, 0, Z.width, Z.height, yt, et, Z.data))
          : e.texImage2D(3553, 0, C, Z.width, Z.height, 0, yt, et, Z.data);
    else if (T.isCompressedTexture) {
      Tt && pt && e.texStorage2D(3553, Lt, C, $[0].width, $[0].height);
      for (let ot = 0, Rt = $.length; ot < Rt; ot++)
        ((tt = $[ot]),
          T.format !== ae && T.format !== Nn
            ? yt !== null
              ? Tt
                ? e.compressedTexSubImage2D(
                    3553,
                    ot,
                    0,
                    0,
                    tt.width,
                    tt.height,
                    yt,
                    tt.data,
                  )
                : e.compressedTexImage2D(
                    3553,
                    ot,
                    C,
                    tt.width,
                    tt.height,
                    0,
                    tt.data,
                  )
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                )
            : Tt
              ? e.texSubImage2D(
                  3553,
                  ot,
                  0,
                  0,
                  tt.width,
                  tt.height,
                  yt,
                  et,
                  tt.data,
                )
              : e.texImage2D(
                  3553,
                  ot,
                  C,
                  tt.width,
                  tt.height,
                  0,
                  yt,
                  et,
                  tt.data,
                ));
    } else if (T.isDataTexture2DArray)
      Tt
        ? (pt && e.texStorage3D(35866, Lt, C, Z.width, Z.height, Z.depth),
          e.texSubImage3D(
            35866,
            0,
            0,
            0,
            0,
            Z.width,
            Z.height,
            Z.depth,
            yt,
            et,
            Z.data,
          ))
        : e.texImage3D(
            35866,
            0,
            C,
            Z.width,
            Z.height,
            Z.depth,
            0,
            yt,
            et,
            Z.data,
          );
    else if (T.isDataTexture3D)
      Tt
        ? (pt && e.texStorage3D(32879, Lt, C, Z.width, Z.height, Z.depth),
          e.texSubImage3D(
            32879,
            0,
            0,
            0,
            0,
            Z.width,
            Z.height,
            Z.depth,
            yt,
            et,
            Z.data,
          ))
        : e.texImage3D(
            32879,
            0,
            C,
            Z.width,
            Z.height,
            Z.depth,
            0,
            yt,
            et,
            Z.data,
          );
    else if (T.isFramebufferTexture)
      Tt && pt
        ? e.texStorage2D(3553, Lt, C, Z.width, Z.height)
        : e.texImage2D(3553, 0, C, Z.width, Z.height, 0, yt, et, null);
    else if ($.length > 0 && _t) {
      Tt && pt && e.texStorage2D(3553, Lt, C, $[0].width, $[0].height);
      for (let ot = 0, Rt = $.length; ot < Rt; ot++)
        ((tt = $[ot]),
          Tt
            ? e.texSubImage2D(3553, ot, 0, 0, yt, et, tt)
            : e.texImage2D(3553, ot, C, yt, et, tt));
      T.generateMipmaps = !1;
    } else
      Tt
        ? (pt && e.texStorage2D(3553, Lt, C, Z.width, Z.height),
          e.texSubImage2D(3553, 0, 0, 0, yt, et, Z))
        : e.texImage2D(3553, 0, C, yt, et, Z);
    (w(T, _t) && A(Y), (R.__version = T.version), T.onUpdate && T.onUpdate(T));
  }
  function J(R, T, X) {
    if (T.image.length !== 6) return;
    (ut(R, T),
      e.activeTexture(33984 + X),
      e.bindTexture(34067, R.__webglTexture),
      s.pixelStorei(37440, T.flipY),
      s.pixelStorei(37441, T.premultiplyAlpha),
      s.pixelStorei(3317, T.unpackAlignment),
      s.pixelStorei(37443, 0));
    let Y = T && (T.isCompressedTexture || T.image[0].isCompressedTexture),
      rt = T.image[0] && T.image[0].isDataTexture,
      Z = [];
    for (let ot = 0; ot < 6; ot++)
      Z[ot] =
        Y || rt
          ? rt
            ? T.image[ot].image
            : T.image[ot]
          : p(T.image[ot], !1, !0, c);
    let _t = Z[0],
      yt = _(_t) || o,
      et = r.convert(T.format),
      C = r.convert(T.type),
      tt = L(T.internalFormat, et, C, T.encoding),
      $ = o && T.isVideoTexture !== !0,
      Tt = R.__version === void 0,
      pt = I(T, _t, yt);
    at(34067, T, yt);
    let Lt;
    if (Y) {
      $ && Tt && e.texStorage2D(34067, pt, tt, _t.width, _t.height);
      for (let ot = 0; ot < 6; ot++) {
        Lt = Z[ot].mipmaps;
        for (let Rt = 0; Rt < Lt.length; Rt++) {
          let jt = Lt[Rt];
          T.format !== ae && T.format !== Nn
            ? et !== null
              ? $
                ? e.compressedTexSubImage2D(
                    34069 + ot,
                    Rt,
                    0,
                    0,
                    jt.width,
                    jt.height,
                    et,
                    jt.data,
                  )
                : e.compressedTexImage2D(
                    34069 + ot,
                    Rt,
                    tt,
                    jt.width,
                    jt.height,
                    0,
                    jt.data,
                  )
              : console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                )
            : $
              ? e.texSubImage2D(
                  34069 + ot,
                  Rt,
                  0,
                  0,
                  jt.width,
                  jt.height,
                  et,
                  C,
                  jt.data,
                )
              : e.texImage2D(
                  34069 + ot,
                  Rt,
                  tt,
                  jt.width,
                  jt.height,
                  0,
                  et,
                  C,
                  jt.data,
                );
        }
      }
    } else {
      ((Lt = T.mipmaps),
        $ &&
          Tt &&
          (Lt.length > 0 && pt++,
          e.texStorage2D(34067, pt, tt, Z[0].width, Z[0].height)));
      for (let ot = 0; ot < 6; ot++)
        if (rt) {
          $
            ? e.texSubImage2D(
                34069 + ot,
                0,
                0,
                0,
                Z[ot].width,
                Z[ot].height,
                et,
                C,
                Z[ot].data,
              )
            : e.texImage2D(
                34069 + ot,
                0,
                tt,
                Z[ot].width,
                Z[ot].height,
                0,
                et,
                C,
                Z[ot].data,
              );
          for (let Rt = 0; Rt < Lt.length; Rt++) {
            let Vt = Lt[Rt].image[ot].image;
            $
              ? e.texSubImage2D(
                  34069 + ot,
                  Rt + 1,
                  0,
                  0,
                  Vt.width,
                  Vt.height,
                  et,
                  C,
                  Vt.data,
                )
              : e.texImage2D(
                  34069 + ot,
                  Rt + 1,
                  tt,
                  Vt.width,
                  Vt.height,
                  0,
                  et,
                  C,
                  Vt.data,
                );
          }
        } else {
          $
            ? e.texSubImage2D(34069 + ot, 0, 0, 0, et, C, Z[ot])
            : e.texImage2D(34069 + ot, 0, tt, et, C, Z[ot]);
          for (let Rt = 0; Rt < Lt.length; Rt++) {
            let jt = Lt[Rt];
            $
              ? e.texSubImage2D(34069 + ot, Rt + 1, 0, 0, et, C, jt.image[ot])
              : e.texImage2D(34069 + ot, Rt + 1, tt, et, C, jt.image[ot]);
          }
        }
    }
    (w(T, yt) && A(34067),
      (R.__version = T.version),
      T.onUpdate && T.onUpdate(T));
  }
  function At(R, T, X, Y, rt) {
    let Z = r.convert(X.format),
      _t = r.convert(X.type),
      yt = L(X.internalFormat, Z, _t, X.encoding);
    (n.get(T).__hasExternalTextures ||
      (rt === 32879 || rt === 35866
        ? e.texImage3D(rt, 0, yt, T.width, T.height, T.depth, 0, Z, _t, null)
        : e.texImage2D(rt, 0, yt, T.width, T.height, 0, Z, _t, null)),
      e.bindFramebuffer(36160, R),
      T.useRenderToTexture
        ? f.framebufferTexture2DMultisampleEXT(
            36160,
            Y,
            rt,
            n.get(X).__webglTexture,
            0,
            ht(T),
          )
        : s.framebufferTexture2D(36160, Y, rt, n.get(X).__webglTexture, 0),
      e.bindFramebuffer(36160, null));
  }
  function vt(R, T, X) {
    if ((s.bindRenderbuffer(36161, R), T.depthBuffer && !T.stencilBuffer)) {
      let Y = 33189;
      if (X || T.useRenderToTexture) {
        let rt = T.depthTexture;
        rt &&
          rt.isDepthTexture &&
          (rt.type === un ? (Y = 36012) : rt.type === gs && (Y = 33190));
        let Z = ht(T);
        T.useRenderToTexture
          ? f.renderbufferStorageMultisampleEXT(36161, Z, Y, T.width, T.height)
          : s.renderbufferStorageMultisample(36161, Z, Y, T.width, T.height);
      } else s.renderbufferStorage(36161, Y, T.width, T.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, R);
    } else if (T.depthBuffer && T.stencilBuffer) {
      let Y = ht(T);
      (X && T.useRenderbuffer
        ? s.renderbufferStorageMultisample(36161, Y, 35056, T.width, T.height)
        : T.useRenderToTexture
          ? f.renderbufferStorageMultisampleEXT(
              36161,
              Y,
              35056,
              T.width,
              T.height,
            )
          : s.renderbufferStorage(36161, 34041, T.width, T.height),
        s.framebufferRenderbuffer(36160, 33306, 36161, R));
    } else {
      let Y = T.isWebGLMultipleRenderTargets === !0 ? T.texture[0] : T.texture,
        rt = r.convert(Y.format),
        Z = r.convert(Y.type),
        _t = L(Y.internalFormat, rt, Z, Y.encoding),
        yt = ht(T);
      X && T.useRenderbuffer
        ? s.renderbufferStorageMultisample(36161, yt, _t, T.width, T.height)
        : T.useRenderToTexture
          ? f.renderbufferStorageMultisampleEXT(
              36161,
              yt,
              _t,
              T.width,
              T.height,
            )
          : s.renderbufferStorage(36161, _t, T.width, T.height);
    }
    s.bindRenderbuffer(36161, null);
  }
  function ft(R, T) {
    if (T && T.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (e.bindFramebuffer(36160, R),
      !(T.depthTexture && T.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    ((!n.get(T.depthTexture).__webglTexture ||
      T.depthTexture.image.width !== T.width ||
      T.depthTexture.image.height !== T.height) &&
      ((T.depthTexture.image.width = T.width),
      (T.depthTexture.image.height = T.height),
      (T.depthTexture.needsUpdate = !0)),
      U(T.depthTexture, 0));
    let Y = n.get(T.depthTexture).__webglTexture,
      rt = ht(T);
    if (T.depthTexture.format === Fn)
      T.useRenderToTexture
        ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Y, 0, rt)
        : s.framebufferTexture2D(36160, 36096, 3553, Y, 0);
    else {
      if (T.depthTexture.format !== yi)
        throw new Error("Unknown depthTexture format");
      T.useRenderToTexture
        ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Y, 0, rt)
        : s.framebufferTexture2D(36160, 33306, 3553, Y, 0);
    }
  }
  function gt(R) {
    let T = n.get(R),
      X = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !T.__autoAllocateDepthBuffer) {
      if (X)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      ft(T.__webglFramebuffer, R);
    } else if (X) {
      T.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        (e.bindFramebuffer(36160, T.__webglFramebuffer[Y]),
          (T.__webglDepthbuffer[Y] = s.createRenderbuffer()),
          vt(T.__webglDepthbuffer[Y], R, !1));
    } else
      (e.bindFramebuffer(36160, T.__webglFramebuffer),
        (T.__webglDepthbuffer = s.createRenderbuffer()),
        vt(T.__webglDepthbuffer, R, !1));
    e.bindFramebuffer(36160, null);
  }
  function Bt(R, T, X) {
    let Y = n.get(R);
    (T !== void 0 && At(Y.__webglFramebuffer, R, R.texture, 36064, 3553),
      X !== void 0 && gt(R));
  }
  function V(R) {
    let T = R.texture,
      X = n.get(R),
      Y = n.get(T);
    (R.addEventListener("dispose", P),
      R.isWebGLMultipleRenderTargets !== !0 &&
        (Y.__webglTexture === void 0 && (Y.__webglTexture = s.createTexture()),
        (Y.__version = T.version),
        a.memory.textures++));
    let rt = R.isWebGLCubeRenderTarget === !0,
      Z = R.isWebGLMultipleRenderTargets === !0,
      _t = T.isDataTexture3D || T.isDataTexture2DArray,
      yt = _(R) || o;
    if (
      (o &&
        T.format === Nn &&
        (T.type === un || T.type === zn) &&
        ((T.format = ae),
        console.warn(
          "THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.",
        )),
      rt)
    ) {
      X.__webglFramebuffer = [];
      for (let et = 0; et < 6; et++)
        X.__webglFramebuffer[et] = s.createFramebuffer();
    } else if (((X.__webglFramebuffer = s.createFramebuffer()), Z))
      if (i.drawBuffers) {
        let et = R.texture;
        for (let C = 0, tt = et.length; C < tt; C++) {
          let $ = n.get(et[C]);
          $.__webglTexture === void 0 &&
            (($.__webglTexture = s.createTexture()), a.memory.textures++);
        }
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.",
        );
    else if (R.useRenderbuffer)
      if (o) {
        ((X.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (X.__webglColorRenderbuffer = s.createRenderbuffer()),
          s.bindRenderbuffer(36161, X.__webglColorRenderbuffer));
        let et = r.convert(T.format),
          C = r.convert(T.type),
          tt = L(T.internalFormat, et, C, T.encoding),
          $ = ht(R);
        (s.renderbufferStorageMultisample(36161, $, tt, R.width, R.height),
          e.bindFramebuffer(36160, X.__webglMultisampledFramebuffer),
          s.framebufferRenderbuffer(
            36160,
            36064,
            36161,
            X.__webglColorRenderbuffer,
          ),
          s.bindRenderbuffer(36161, null),
          R.depthBuffer &&
            ((X.__webglDepthRenderbuffer = s.createRenderbuffer()),
            vt(X.__webglDepthRenderbuffer, R, !0)),
          e.bindFramebuffer(36160, null));
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.",
        );
    if (rt) {
      (e.bindTexture(34067, Y.__webglTexture), at(34067, T, yt));
      for (let et = 0; et < 6; et++)
        At(X.__webglFramebuffer[et], R, T, 36064, 34069 + et);
      (w(T, yt) && A(34067), e.unbindTexture());
    } else if (Z) {
      let et = R.texture;
      for (let C = 0, tt = et.length; C < tt; C++) {
        let $ = et[C],
          Tt = n.get($);
        (e.bindTexture(3553, Tt.__webglTexture),
          at(3553, $, yt),
          At(X.__webglFramebuffer, R, $, 36064 + C, 3553),
          w($, yt) && A(3553));
      }
      e.unbindTexture();
    } else {
      let et = 3553;
      (_t &&
        (o
          ? (et = T.isDataTexture3D ? 32879 : 35866)
          : console.warn(
              "THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.",
            )),
        e.bindTexture(et, Y.__webglTexture),
        at(et, T, yt),
        At(X.__webglFramebuffer, R, T, 36064, et),
        w(T, yt) && A(et),
        e.unbindTexture());
    }
    R.depthBuffer && gt(R);
  }
  function Q(R) {
    let T = _(R) || o,
      X = R.isWebGLMultipleRenderTargets === !0 ? R.texture : [R.texture];
    for (let Y = 0, rt = X.length; Y < rt; Y++) {
      let Z = X[Y];
      if (w(Z, T)) {
        let _t = R.isWebGLCubeRenderTarget ? 34067 : 3553,
          yt = n.get(Z).__webglTexture;
        (e.bindTexture(_t, yt), A(_t), e.unbindTexture());
      }
    }
  }
  function K(R) {
    if (R.useRenderbuffer)
      if (o) {
        let T = R.width,
          X = R.height,
          Y = 16384,
          rt = [36064],
          Z = R.stencilBuffer ? 33306 : 36096;
        (R.depthBuffer && rt.push(Z),
          R.ignoreDepthForMultisampleCopy ||
            (R.depthBuffer && (Y |= 256), R.stencilBuffer && (Y |= 1024)));
        let _t = n.get(R);
        (e.bindFramebuffer(36008, _t.__webglMultisampledFramebuffer),
          e.bindFramebuffer(36009, _t.__webglFramebuffer),
          R.ignoreDepthForMultisampleCopy &&
            (s.invalidateFramebuffer(36008, [Z]),
            s.invalidateFramebuffer(36009, [Z])),
          s.blitFramebuffer(0, 0, T, X, 0, 0, T, X, Y, 9728),
          s.invalidateFramebuffer(36008, rt),
          e.bindFramebuffer(36008, null),
          e.bindFramebuffer(36009, _t.__webglMultisampledFramebuffer));
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.",
        );
  }
  function ht(R) {
    return o && (R.useRenderbuffer || R.useRenderToTexture)
      ? Math.min(u, R.samples)
      : 0;
  }
  function st(R) {
    let T = a.render.frame;
    g.get(R) !== T && (g.set(R, T), R.update());
  }
  let Mt = !1,
    St = !1;
  function Ct(R, T) {
    (R &&
      R.isWebGLRenderTarget &&
      (Mt === !1 &&
        (console.warn(
          "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.",
        ),
        (Mt = !0)),
      (R = R.texture)),
      U(R, T));
  }
  function Xt(R, T) {
    (R &&
      R.isWebGLCubeRenderTarget &&
      (St === !1 &&
        (console.warn(
          "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.",
        ),
        (St = !0)),
      (R = R.texture)),
      k(R, T));
  }
  ((this.allocateTextureUnit = z),
    (this.resetTextureUnits = B),
    (this.setTexture2D = U),
    (this.setTexture2DArray = nt),
    (this.setTexture3D = lt),
    (this.setTextureCube = k),
    (this.rebindTextures = Bt),
    (this.setupRenderTarget = V),
    (this.updateRenderTargetMipmap = Q),
    (this.updateMultisampleRenderTarget = K),
    (this.setupDepthRenderbuffer = gt),
    (this.setupFrameBufferTexture = At),
    (this.safeSetTexture2D = Ct),
    (this.safeSetTextureCube = Xt));
}
function Zg(s, t, e) {
  let n = e.isWebGL2;
  function i(r) {
    let a;
    if (r === Ke) return 5121;
    if (r === pu) return 32819;
    if (r === fu) return 32820;
    if (r === mu) return 33635;
    if (r === hu) return 5120;
    if (r === uu) return 5122;
    if (r === tr) return 5123;
    if (r === du) return 5124;
    if (r === gs) return 5125;
    if (r === un) return 5126;
    if (r === zn)
      return n
        ? 5131
        : ((a = t.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (r === gu) return 6406;
    if (r === Nn) return 6407;
    if (r === ae) return 6408;
    if (r === vu) return 6409;
    if (r === yu) return 6410;
    if (r === Fn) return 6402;
    if (r === yi) return 34041;
    if (r === xu) return 6403;
    if (r === _u) return 36244;
    if (r === bu) return 33319;
    if (r === wu) return 33320;
    if (r === Mu) return 36248;
    if (r === Su) return 36249;
    if (r === Dl || r === zl || r === Nl || r === Fl) {
      if (((a = t.get("WEBGL_compressed_texture_s3tc")), a === null))
        return null;
      if (r === Dl) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (r === zl) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (r === Nl) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (r === Fl) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }
    if (r === Ol || r === Bl || r === Ul || r === Hl) {
      if (((a = t.get("WEBGL_compressed_texture_pvrtc")), a === null))
        return null;
      if (r === Ol) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (r === Bl) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (r === Ul) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (r === Hl) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }
    if (r === Tu)
      return (
        (a = t.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (
      (r === Gl || r === Vl) &&
      ((a = t.get("WEBGL_compressed_texture_etc")), a !== null)
    ) {
      if (r === Gl) return a.COMPRESSED_RGB8_ETC2;
      if (r === Vl) return a.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (
      r === Eu ||
      r === Au ||
      r === Ru ||
      r === Lu ||
      r === Cu ||
      r === Pu ||
      r === Iu ||
      r === Du ||
      r === zu ||
      r === Nu ||
      r === Fu ||
      r === Ou ||
      r === Bu ||
      r === Uu ||
      r === Gu ||
      r === Vu ||
      r === ku ||
      r === Wu ||
      r === ju ||
      r === qu ||
      r === Xu ||
      r === Ju ||
      r === Yu ||
      r === Zu ||
      r === Qu ||
      r === $u ||
      r === Ku ||
      r === td
    )
      return (
        (a = t.get("WEBGL_compressed_texture_astc")),
        a !== null ? r : null
      );
    if (r === Hu)
      return (
        (a = t.get("EXT_texture_compression_bptc")),
        a !== null ? r : null
      );
    if (r === mi)
      return n
        ? 34042
        : ((a = t.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: i };
}
var As = class extends re {
  constructor(t = []) {
    (super(), (this.cameras = t));
  }
};
As.prototype.isArrayCamera = !0;
var Dn = class extends Wt {
  constructor() {
    (super(), (this.type = "Group"));
  }
};
Dn.prototype.isGroup = !0;
var Qg = { type: "move" },
  Zi = class {
    constructor() {
      ((this._targetRay = null), (this._grip = null), (this._hand = null));
    }
    getHandSpace() {
      return (
        this._hand === null &&
          ((this._hand = new Dn()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        this._targetRay === null &&
          ((this._targetRay = new Dn()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new b()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new b())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        this._grip === null &&
          ((this._grip = new Dn()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new b()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new b())),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        this._targetRay !== null && this._targetRay.dispatchEvent(t),
        this._grip !== null && this._grip.dispatchEvent(t),
        this._hand !== null && this._hand.dispatchEvent(t),
        this
      );
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: "disconnected", data: t }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let i = null,
        r = null,
        a = null,
        o = this._targetRay,
        l = this._grip,
        c = this._hand;
      if (t && e.session.visibilityState !== "visible-blurred")
        if (
          (o !== null &&
            ((i = e.getPose(t.targetRaySpace, n)),
            i !== null &&
              (o.matrix.fromArray(i.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              i.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(i.linearVelocity))
                : (o.hasLinearVelocity = !1),
              i.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(i.angularVelocity))
                : (o.hasAngularVelocity = !1),
              this.dispatchEvent(Qg))),
          c && t.hand)
        ) {
          a = !0;
          for (let v of t.hand.values()) {
            let x = e.getJointPose(v, n);
            if (c.joints[v.jointName] === void 0) {
              let p = new Dn();
              ((p.matrixAutoUpdate = !1),
                (p.visible = !1),
                (c.joints[v.jointName] = p),
                c.add(p));
            }
            let m = c.joints[v.jointName];
            (x !== null &&
              (m.matrix.fromArray(x.transform.matrix),
              m.matrix.decompose(m.position, m.rotation, m.scale),
              (m.jointRadius = x.radius)),
              (m.visible = x !== null));
          }
          let h = c.joints["index-finger-tip"],
            u = c.joints["thumb-tip"],
            d = h.position.distanceTo(u.position),
            f = 0.02,
            g = 0.005;
          c.inputState.pinching && d > f + g
            ? ((c.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this,
              }))
            : !c.inputState.pinching &&
              d <= f - g &&
              ((c.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this,
              }));
        } else
          l !== null &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            r !== null &&
              (l.matrix.fromArray(r.transform.matrix),
              l.matrix.decompose(l.position, l.rotation, l.scale),
              r.linearVelocity
                ? ((l.hasLinearVelocity = !0),
                  l.linearVelocity.copy(r.linearVelocity))
                : (l.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((l.hasAngularVelocity = !0),
                  l.angularVelocity.copy(r.angularVelocity))
                : (l.hasAngularVelocity = !1)));
      return (
        o !== null && (o.visible = i !== null),
        l !== null && (l.visible = r !== null),
        c !== null && (c.visible = a !== null),
        this
      );
    }
  },
  cr = class extends ce {
    constructor(t, e, n, i, r, a, o, l, c, h) {
      if (((h = h !== void 0 ? h : Fn), h !== Fn && h !== yi))
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
        );
      (n === void 0 && h === Fn && (n = tr),
        n === void 0 && h === yi && (n = mi),
        super(null, i, r, a, o, l, h, n, c),
        (this.image = { width: t, height: e }),
        (this.magFilter = o !== void 0 ? o : te),
        (this.minFilter = l !== void 0 ? l : te),
        (this.flipY = !1),
        (this.generateMipmaps = !1));
    }
  };
cr.prototype.isDepthTexture = !0;
var lo = class extends tn {
  constructor(t, e) {
    super();
    let n = this,
      i = null,
      r = 1,
      a = null,
      o = "local-floor",
      l = t.extensions.has("WEBGL_multisampled_render_to_texture"),
      c = null,
      h = null,
      u = null,
      d = null,
      f = !1,
      g = null,
      v = e.getContextAttributes(),
      x = null,
      m = null,
      p = [],
      _ = new Map(),
      y = new re();
    (y.layers.enable(1), (y.viewport = new Ot()));
    let w = new re();
    (w.layers.enable(2), (w.viewport = new Ot()));
    let A = [y, w],
      L = new As();
    (L.layers.enable(1), L.layers.enable(2));
    let I = null,
      G = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (k) {
        let W = p[k];
        return (
          W === void 0 && ((W = new Zi()), (p[k] = W)),
          W.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (k) {
        let W = p[k];
        return (W === void 0 && ((W = new Zi()), (p[k] = W)), W.getGripSpace());
      }),
      (this.getHand = function (k) {
        let W = p[k];
        return (W === void 0 && ((W = new Zi()), (p[k] = W)), W.getHandSpace());
      }));
    function O(k) {
      let W = _.get(k.inputSource);
      W && W.dispatchEvent({ type: k.type, data: k.inputSource });
    }
    function P() {
      (_.forEach(function (k, W) {
        k.disconnect(W);
      }),
        _.clear(),
        (I = null),
        (G = null),
        t.setRenderTarget(x),
        (d = null),
        (u = null),
        (h = null),
        (i = null),
        (m = null),
        lt.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (k) {
      ((r = k),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (k) {
        ((o = k),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return a;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : d;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (k) {
        if (((i = k), i !== null)) {
          if (
            ((x = t.getRenderTarget()),
            i.addEventListener("select", O),
            i.addEventListener("selectstart", O),
            i.addEventListener("selectend", O),
            i.addEventListener("squeeze", O),
            i.addEventListener("squeezestart", O),
            i.addEventListener("squeezeend", O),
            i.addEventListener("end", P),
            i.addEventListener("inputsourceschange", M),
            v.xrCompatible !== !0 && (await e.makeXRCompatible()),
            i.renderState.layers === void 0 || t.capabilities.isWebGL2 === !1)
          ) {
            let W = {
              antialias: i.renderState.layers !== void 0 || v.antialias,
              alpha: v.alpha,
              depth: v.depth,
              stencil: v.stencil,
              framebufferScaleFactor: r,
            };
            ((d = new XRWebGLLayer(i, e, W)),
              i.updateRenderState({ baseLayer: d }),
              (m = new ye(d.framebufferWidth, d.framebufferHeight, {
                format: ae,
                type: Ke,
                encoding: t.outputEncoding,
              })));
          } else {
            f = v.antialias;
            let W = null,
              ct = null,
              at = null;
            v.depth &&
              ((at = v.stencil ? 35056 : 33190),
              (W = v.stencil ? yi : Fn),
              (ct = v.stencil ? mi : tr));
            let ut = {
              colorFormat: v.alpha || f ? 32856 : 32849,
              depthFormat: at,
              scaleFactor: r,
            };
            ((h = new XRWebGLBinding(i, e)),
              (u = h.createProjectionLayer(ut)),
              i.updateRenderState({ layers: [u] }),
              (m = f
                ? new ir(u.textureWidth, u.textureHeight, {
                    format: ae,
                    type: Ke,
                    depthTexture: new cr(
                      u.textureWidth,
                      u.textureHeight,
                      ct,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      W,
                    ),
                    stencilBuffer: v.stencil,
                    ignoreDepth: u.ignoreDepthValues,
                    useRenderToTexture: l,
                    encoding: t.outputEncoding,
                  })
                : new ye(u.textureWidth, u.textureHeight, {
                    format: v.alpha ? ae : Nn,
                    type: Ke,
                    depthTexture: new cr(
                      u.textureWidth,
                      u.textureHeight,
                      ct,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      W,
                    ),
                    stencilBuffer: v.stencil,
                    ignoreDepth: u.ignoreDepthValues,
                    encoding: t.outputEncoding,
                  })));
          }
          (this.setFoveation(1),
            (a = await i.requestReferenceSpace(o)),
            lt.setContext(i),
            lt.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }));
    function M(k) {
      let W = i.inputSources;
      for (let ct = 0; ct < p.length; ct++) _.set(W[ct], p[ct]);
      for (let ct = 0; ct < k.removed.length; ct++) {
        let at = k.removed[ct],
          ut = _.get(at);
        ut &&
          (ut.dispatchEvent({ type: "disconnected", data: at }), _.delete(at));
      }
      for (let ct = 0; ct < k.added.length; ct++) {
        let at = k.added[ct],
          ut = _.get(at);
        ut && ut.dispatchEvent({ type: "connected", data: at });
      }
    }
    let E = new b(),
      D = new b();
    function B(k, W, ct) {
      (E.setFromMatrixPosition(W.matrixWorld),
        D.setFromMatrixPosition(ct.matrixWorld));
      let at = E.distanceTo(D),
        ut = W.projectionMatrix.elements,
        zt = ct.projectionMatrix.elements,
        J = ut[14] / (ut[10] - 1),
        At = ut[14] / (ut[10] + 1),
        vt = (ut[9] + 1) / ut[5],
        ft = (ut[9] - 1) / ut[5],
        gt = (ut[8] - 1) / ut[0],
        Bt = (zt[8] + 1) / zt[0],
        V = J * gt,
        Q = J * Bt,
        K = at / (-gt + Bt),
        ht = K * -gt;
      (W.matrixWorld.decompose(k.position, k.quaternion, k.scale),
        k.translateX(ht),
        k.translateZ(K),
        k.matrixWorld.compose(k.position, k.quaternion, k.scale),
        k.matrixWorldInverse.copy(k.matrixWorld).invert());
      let st = J + K,
        Mt = At + K,
        St = V - ht,
        Ct = Q + (at - ht),
        Xt = ((vt * At) / Mt) * st,
        R = ((ft * At) / Mt) * st;
      k.projectionMatrix.makePerspective(St, Ct, Xt, R, st, Mt);
    }
    function z(k, W) {
      (W === null
        ? k.matrixWorld.copy(k.matrix)
        : k.matrixWorld.multiplyMatrices(W.matrixWorld, k.matrix),
        k.matrixWorldInverse.copy(k.matrixWorld).invert());
    }
    ((this.updateCamera = function (k) {
      if (i === null) return;
      ((L.near = w.near = y.near = k.near),
        (L.far = w.far = y.far = k.far),
        (I !== L.near || G !== L.far) &&
          (i.updateRenderState({ depthNear: L.near, depthFar: L.far }),
          (I = L.near),
          (G = L.far)));
      let W = k.parent,
        ct = L.cameras;
      z(L, W);
      for (let ut = 0; ut < ct.length; ut++) z(ct[ut], W);
      (L.matrixWorld.decompose(L.position, L.quaternion, L.scale),
        k.position.copy(L.position),
        k.quaternion.copy(L.quaternion),
        k.scale.copy(L.scale),
        k.matrix.copy(L.matrix),
        k.matrixWorld.copy(L.matrixWorld));
      let at = k.children;
      for (let ut = 0, zt = at.length; ut < zt; ut++)
        at[ut].updateMatrixWorld(!0);
      ct.length === 2
        ? B(L, y, w)
        : L.projectionMatrix.copy(y.projectionMatrix);
    }),
      (this.getCamera = function () {
        return L;
      }),
      (this.getFoveation = function () {
        return u !== null
          ? u.fixedFoveation
          : d !== null
            ? d.fixedFoveation
            : void 0;
      }),
      (this.setFoveation = function (k) {
        (u !== null && (u.fixedFoveation = k),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = k));
      }));
    let U = null;
    function nt(k, W) {
      if (((c = W.getViewerPose(a)), (g = W), c !== null)) {
        let at = c.views;
        d !== null &&
          (t.setRenderTargetFramebuffer(m, d.framebuffer),
          t.setRenderTarget(m));
        let ut = !1;
        at.length !== L.cameras.length && ((L.cameras.length = 0), (ut = !0));
        for (let zt = 0; zt < at.length; zt++) {
          let J = at[zt],
            At = null;
          if (d !== null) At = d.getViewport(J);
          else {
            let ft = h.getViewSubImage(u, J);
            ((At = ft.viewport),
              zt === 0 &&
                (t.setRenderTargetTextures(
                  m,
                  ft.colorTexture,
                  u.ignoreDepthValues ? void 0 : ft.depthStencilTexture,
                ),
                t.setRenderTarget(m)));
          }
          let vt = A[zt];
          (vt.matrix.fromArray(J.transform.matrix),
            vt.projectionMatrix.fromArray(J.projectionMatrix),
            vt.viewport.set(At.x, At.y, At.width, At.height),
            zt === 0 && L.matrix.copy(vt.matrix),
            ut === !0 && L.cameras.push(vt));
        }
      }
      let ct = i.inputSources;
      for (let at = 0; at < p.length; at++) {
        let ut = p[at],
          zt = ct[at];
        ut.update(zt, W, a);
      }
      (U && U(k, W), (g = null));
    }
    let lt = new rh();
    (lt.setAnimationLoop(nt),
      (this.setAnimationLoop = function (k) {
        U = k;
      }),
      (this.dispose = function () {}));
  }
};
function $g(s) {
  function t(m, p) {
    (m.fogColor.value.copy(p.color),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density));
  }
  function e(m, p, _, y, w) {
    p.isMeshBasicMaterial
      ? n(m, p)
      : p.isMeshLambertMaterial
        ? (n(m, p), l(m, p))
        : p.isMeshToonMaterial
          ? (n(m, p), h(m, p))
          : p.isMeshPhongMaterial
            ? (n(m, p), c(m, p))
            : p.isMeshStandardMaterial
              ? (n(m, p), p.isMeshPhysicalMaterial ? d(m, p, w) : u(m, p))
              : p.isMeshMatcapMaterial
                ? (n(m, p), f(m, p))
                : p.isMeshDepthMaterial
                  ? (n(m, p), g(m, p))
                  : p.isMeshDistanceMaterial
                    ? (n(m, p), v(m, p))
                    : p.isMeshNormalMaterial
                      ? (n(m, p), x(m, p))
                      : p.isLineBasicMaterial
                        ? (i(m, p), p.isLineDashedMaterial && r(m, p))
                        : p.isPointsMaterial
                          ? a(m, p, _, y)
                          : p.isSpriteMaterial
                            ? o(m, p)
                            : p.isShadowMaterial
                              ? (m.color.value.copy(p.color),
                                (m.opacity.value = p.opacity))
                              : p.isShaderMaterial &&
                                (p.uniformsNeedUpdate = !1);
  }
  function n(m, p) {
    ((m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && (m.map.value = p.map),
      p.alphaMap && (m.alphaMap.value = p.alphaMap),
      p.specularMap && (m.specularMap.value = p.specularMap),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    let _ = s.get(p).envMap;
    (_ &&
      ((m.envMap.value = _),
      (m.flipEnvMap.value =
        _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = p.reflectivity),
      (m.ior.value = p.ior),
      (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap &&
        ((m.lightMap.value = p.lightMap),
        (m.lightMapIntensity.value = p.lightMapIntensity)),
      p.aoMap &&
        ((m.aoMap.value = p.aoMap),
        (m.aoMapIntensity.value = p.aoMapIntensity)));
    let y;
    (p.map
      ? (y = p.map)
      : p.specularMap
        ? (y = p.specularMap)
        : p.displacementMap
          ? (y = p.displacementMap)
          : p.normalMap
            ? (y = p.normalMap)
            : p.bumpMap
              ? (y = p.bumpMap)
              : p.roughnessMap
                ? (y = p.roughnessMap)
                : p.metalnessMap
                  ? (y = p.metalnessMap)
                  : p.alphaMap
                    ? (y = p.alphaMap)
                    : p.emissiveMap
                      ? (y = p.emissiveMap)
                      : p.clearcoatMap
                        ? (y = p.clearcoatMap)
                        : p.clearcoatNormalMap
                          ? (y = p.clearcoatNormalMap)
                          : p.clearcoatRoughnessMap
                            ? (y = p.clearcoatRoughnessMap)
                            : p.specularIntensityMap
                              ? (y = p.specularIntensityMap)
                              : p.specularColorMap
                                ? (y = p.specularColorMap)
                                : p.transmissionMap
                                  ? (y = p.transmissionMap)
                                  : p.thicknessMap
                                    ? (y = p.thicknessMap)
                                    : p.sheenColorMap
                                      ? (y = p.sheenColorMap)
                                      : p.sheenRoughnessMap &&
                                        (y = p.sheenRoughnessMap),
      y !== void 0 &&
        (y.isWebGLRenderTarget && (y = y.texture),
        y.matrixAutoUpdate === !0 && y.updateMatrix(),
        m.uvTransform.value.copy(y.matrix)));
    let w;
    (p.aoMap ? (w = p.aoMap) : p.lightMap && (w = p.lightMap),
      w !== void 0 &&
        (w.isWebGLRenderTarget && (w = w.texture),
        w.matrixAutoUpdate === !0 && w.updateMatrix(),
        m.uv2Transform.value.copy(w.matrix)));
  }
  function i(m, p) {
    (m.diffuse.value.copy(p.color), (m.opacity.value = p.opacity));
  }
  function r(m, p) {
    ((m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale));
  }
  function a(m, p, _, y) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * _),
      (m.scale.value = 0.5 * y),
      p.map && (m.map.value = p.map),
      p.alphaMap && (m.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    let w;
    (p.map ? (w = p.map) : p.alphaMap && (w = p.alphaMap),
      w !== void 0 &&
        (w.matrixAutoUpdate === !0 && w.updateMatrix(),
        m.uvTransform.value.copy(w.matrix)));
  }
  function o(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && (m.map.value = p.map),
      p.alphaMap && (m.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    let _;
    (p.map ? (_ = p.map) : p.alphaMap && (_ = p.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        m.uvTransform.value.copy(_.matrix)));
  }
  function l(m, p) {
    p.emissiveMap && (m.emissiveMap.value = p.emissiveMap);
  }
  function c(m, p) {
    (m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4)),
      p.emissiveMap && (m.emissiveMap.value = p.emissiveMap),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        (m.bumpScale.value = p.bumpScale),
        p.side === Kt && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        m.normalScale.value.copy(p.normalScale),
        p.side === Kt && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)));
  }
  function h(m, p) {
    (p.gradientMap && (m.gradientMap.value = p.gradientMap),
      p.emissiveMap && (m.emissiveMap.value = p.emissiveMap),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        (m.bumpScale.value = p.bumpScale),
        p.side === Kt && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        m.normalScale.value.copy(p.normalScale),
        p.side === Kt && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)));
  }
  function u(m, p) {
    ((m.roughness.value = p.roughness),
      (m.metalness.value = p.metalness),
      p.roughnessMap && (m.roughnessMap.value = p.roughnessMap),
      p.metalnessMap && (m.metalnessMap.value = p.metalnessMap),
      p.emissiveMap && (m.emissiveMap.value = p.emissiveMap),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        (m.bumpScale.value = p.bumpScale),
        p.side === Kt && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        m.normalScale.value.copy(p.normalScale),
        p.side === Kt && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      s.get(p).envMap && (m.envMapIntensity.value = p.envMapIntensity));
  }
  function d(m, p, _) {
    (u(m, p),
      (m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap),
        p.sheenRoughnessMap &&
          (m.sheenRoughnessMap.value = p.sheenRoughnessMap)),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap),
        p.clearcoatRoughnessMap &&
          (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
        p.clearcoatNormalMap &&
          (m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          (m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          p.side === Kt && m.clearcoatNormalScale.value.negate())),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = _.texture),
        m.transmissionSamplerSize.value.set(_.width, _.height),
        p.transmissionMap && (m.transmissionMap.value = p.transmissionMap),
        (m.thickness.value = p.thickness),
        p.thicknessMap && (m.thicknessMap.value = p.thicknessMap),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularIntensityMap &&
        (m.specularIntensityMap.value = p.specularIntensityMap),
      p.specularColorMap && (m.specularColorMap.value = p.specularColorMap));
  }
  function f(m, p) {
    (p.matcap && (m.matcap.value = p.matcap),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        (m.bumpScale.value = p.bumpScale),
        p.side === Kt && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        m.normalScale.value.copy(p.normalScale),
        p.side === Kt && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)));
  }
  function g(m, p) {
    p.displacementMap &&
      ((m.displacementMap.value = p.displacementMap),
      (m.displacementScale.value = p.displacementScale),
      (m.displacementBias.value = p.displacementBias));
  }
  function v(m, p) {
    (p.displacementMap &&
      ((m.displacementMap.value = p.displacementMap),
      (m.displacementScale.value = p.displacementScale),
      (m.displacementBias.value = p.displacementBias)),
      m.referencePosition.value.copy(p.referencePosition),
      (m.nearDistance.value = p.nearDistance),
      (m.farDistance.value = p.farDistance));
  }
  function x(m, p) {
    (p.bumpMap &&
      ((m.bumpMap.value = p.bumpMap),
      (m.bumpScale.value = p.bumpScale),
      p.side === Kt && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        m.normalScale.value.copy(p.normalScale),
        p.side === Kt && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)));
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: e };
}
function Kg() {
  let s = ca("canvas");
  return ((s.style.display = "block"), s);
}
function Gt(s = {}) {
  let t = s.canvas !== void 0 ? s.canvas : Kg(),
    e = s.context !== void 0 ? s.context : null,
    n = s.alpha !== void 0 && s.alpha,
    i = s.depth === void 0 || s.depth,
    r = s.stencil === void 0 || s.stencil,
    a = s.antialias !== void 0 && s.antialias,
    o = s.premultipliedAlpha === void 0 || s.premultipliedAlpha,
    l = s.preserveDrawingBuffer !== void 0 && s.preserveDrawingBuffer,
    c = s.powerPreference !== void 0 ? s.powerPreference : "default",
    h =
      s.failIfMajorPerformanceCaveat !== void 0 &&
      s.failIfMajorPerformanceCaveat,
    u = null,
    d = null,
    f = [],
    g = [];
  ((this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Ne),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = pn),
    (this.toneMappingExposure = 1));
  let v = this,
    x = !1,
    m = 0,
    p = 0,
    _ = null,
    y = -1,
    w = null,
    A = new Ot(),
    L = new Ot(),
    I = null,
    G = t.width,
    O = t.height,
    P = 1,
    M = null,
    E = null,
    D = new Ot(0, 0, G, O),
    B = new Ot(0, 0, G, O),
    z = !1,
    U = [],
    nt = new Si(),
    lt = !1,
    k = !1,
    W = null,
    ct = new mt(),
    at = new b(),
    ut = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function zt() {
    return _ === null ? P : 1;
  }
  let J = e;
  function At(S, N) {
    for (let H = 0; H < S.length; H++) {
      let F = S[H],
        j = t.getContext(F, N);
      if (j !== null) return j;
    }
    return null;
  }
  try {
    let S = {
      alpha: n,
      depth: i,
      stencil: r,
      antialias: a,
      premultipliedAlpha: o,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: h,
    };
    if (
      ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ll}`),
      t.addEventListener("webglcontextlost", Tt, !1),
      t.addEventListener("webglcontextrestored", pt, !1),
      J === null)
    ) {
      let N = ["webgl2", "webgl", "experimental-webgl"];
      if ((v.isWebGL1Renderer === !0 && N.shift(), (J = At(N, S)), J === null))
        throw At(N)
          ? new Error(
              "Error creating WebGL context with your selected attributes.",
            )
          : new Error("Error creating WebGL context.");
    }
    J.getShaderPrecisionFormat === void 0 &&
      (J.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (S) {
    throw (console.error("THREE.WebGLRenderer: " + S.message), S);
  }
  let vt,
    ft,
    gt,
    Bt,
    V,
    Q,
    K,
    ht,
    st,
    Mt,
    St,
    Ct,
    Xt,
    R,
    T,
    X,
    Y,
    rt,
    Z,
    _t,
    yt,
    et,
    C;
  function tt() {
    ((vt = new wm(J)),
      (ft = new gm(J, vt, s)),
      vt.init(ft),
      (et = new Zg(J, vt, ft)),
      (gt = new Jg(J, vt, ft)),
      (U[0] = 1029),
      (Bt = new Tm(J)),
      (V = new Og()),
      (Q = new Yg(J, vt, gt, V, ft, et, Bt)),
      (K = new ym(v)),
      (ht = new bm(v)),
      (st = new Ud(J, ft)),
      (C = new fm(J, vt, st, ft)),
      (Mt = new Mm(J, st, Bt, C)),
      (St = new Lm(J, Mt, st, Bt)),
      (Z = new Rm(J, ft, Q)),
      (X = new vm(V)),
      (Ct = new Fg(v, K, ht, vt, ft, C, X)),
      (Xt = new $g(V)),
      (R = new Ug()),
      (T = new jg(vt, ft)),
      (rt = new pm(v, K, gt, St, o)),
      (Y = new mh(v, St, ft)),
      (_t = new mm(J, vt, Bt, ft)),
      (yt = new Sm(J, vt, Bt, ft)),
      (Bt.programs = Ct.programs),
      (v.capabilities = ft),
      (v.extensions = vt),
      (v.properties = V),
      (v.renderLists = R),
      (v.shadowMap = Y),
      (v.state = gt),
      (v.info = Bt));
  }
  tt();
  let $ = new lo(v, J);
  ((this.xr = $),
    (this.getContext = function () {
      return J;
    }),
    (this.getContextAttributes = function () {
      return J.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      let S = vt.get("WEBGL_lose_context");
      S && S.loseContext();
    }),
    (this.forceContextRestore = function () {
      let S = vt.get("WEBGL_lose_context");
      S && S.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return P;
    }),
    (this.setPixelRatio = function (S) {
      S !== void 0 && ((P = S), this.setSize(G, O, !1));
    }),
    (this.getSize = function (S) {
      return S.set(G, O);
    }),
    (this.setSize = function (S, N, H) {
      $.isPresenting
        ? console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          )
        : ((G = S),
          (O = N),
          (t.width = Math.floor(S * P)),
          (t.height = Math.floor(N * P)),
          H !== !1 && ((t.style.width = S + "px"), (t.style.height = N + "px")),
          this.setViewport(0, 0, S, N));
    }),
    (this.getDrawingBufferSize = function (S) {
      return S.set(G * P, O * P).floor();
    }),
    (this.setDrawingBufferSize = function (S, N, H) {
      ((G = S),
        (O = N),
        (P = H),
        (t.width = Math.floor(S * H)),
        (t.height = Math.floor(N * H)),
        this.setViewport(0, 0, S, N));
    }),
    (this.getCurrentViewport = function (S) {
      return S.copy(A);
    }),
    (this.getViewport = function (S) {
      return S.copy(D);
    }),
    (this.setViewport = function (S, N, H, F) {
      (S.isVector4 ? D.set(S.x, S.y, S.z, S.w) : D.set(S, N, H, F),
        gt.viewport(A.copy(D).multiplyScalar(P).floor()));
    }),
    (this.getScissor = function (S) {
      return S.copy(B);
    }),
    (this.setScissor = function (S, N, H, F) {
      (S.isVector4 ? B.set(S.x, S.y, S.z, S.w) : B.set(S, N, H, F),
        gt.scissor(L.copy(B).multiplyScalar(P).floor()));
    }),
    (this.getScissorTest = function () {
      return z;
    }),
    (this.setScissorTest = function (S) {
      gt.setScissorTest((z = S));
    }),
    (this.setOpaqueSort = function (S) {
      M = S;
    }),
    (this.setTransparentSort = function (S) {
      E = S;
    }),
    (this.getClearColor = function (S) {
      return S.copy(rt.getClearColor());
    }),
    (this.setClearColor = function () {
      rt.setClearColor.apply(rt, arguments);
    }),
    (this.getClearAlpha = function () {
      return rt.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      rt.setClearAlpha.apply(rt, arguments);
    }),
    (this.clear = function (S, N, H) {
      let F = 0;
      ((S === void 0 || S) && (F |= 16384),
        (N === void 0 || N) && (F |= 256),
        (H === void 0 || H) && (F |= 1024),
        J.clear(F));
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      (t.removeEventListener("webglcontextlost", Tt, !1),
        t.removeEventListener("webglcontextrestored", pt, !1),
        R.dispose(),
        T.dispose(),
        V.dispose(),
        K.dispose(),
        ht.dispose(),
        St.dispose(),
        C.dispose(),
        Ct.dispose(),
        $.dispose(),
        $.removeEventListener("sessionstart", Fe),
        $.removeEventListener("sessionend", Oe),
        W && (W.dispose(), (W = null)),
        An.stop());
    }));
  function Tt(S) {
    (S.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (x = !0));
  }
  function pt() {
    (console.log("THREE.WebGLRenderer: Context Restored."), (x = !1));
    let S = Bt.autoReset,
      N = Y.enabled,
      H = Y.autoUpdate,
      F = Y.needsUpdate,
      j = Y.type;
    (tt(),
      (Bt.autoReset = S),
      (Y.enabled = N),
      (Y.autoUpdate = H),
      (Y.needsUpdate = F),
      (Y.type = j));
  }
  function Lt(S) {
    let N = S.target;
    (N.removeEventListener("dispose", Lt), ot(N));
  }
  function ot(S) {
    (Rt(S), V.remove(S));
  }
  function Rt(S) {
    let N = V.get(S).programs;
    N !== void 0 &&
      (N.forEach(function (H) {
        Ct.releaseProgram(H);
      }),
      S.isShaderMaterial && Ct.releaseShaderCache(S));
  }
  ((this.renderBufferDirect = function (S, N, H, F, j, bt) {
    N === null && (N = ut);
    let Et = j.isMesh && j.matrixWorld.determinant() < 0,
      Pt = Lh(S, N, H, F, j);
    gt.setMaterial(F, Et);
    let wt = H.index,
      Ut = H.attributes.position;
    if (wt === null) {
      if (Ut === void 0 || Ut.count === 0) return;
    } else if (wt.count === 0) return;
    let It = 1;
    (F.wireframe === !0 && ((wt = Mt.getWireframeAttribute(H)), (It = 2)),
      C.setup(j, F, Pt, H, wt));
    let Ft,
      Zt = _t;
    wt !== null && ((Ft = st.get(wt)), (Zt = yt), Zt.setIndex(Ft));
    let Rn = wt !== null ? wt.count : Ut.count,
      Wn = H.drawRange.start * It,
      Ht = H.drawRange.count * It,
      Be = bt !== null ? bt.start * It : 0,
      Le = bt !== null ? bt.count * It : 1 / 0,
      Ue = Math.max(Wn, Be),
      Ir = Math.min(Rn, Wn + Ht, Be + Le) - 1,
      He = Math.max(0, Ir - Ue + 1);
    if (He !== 0) {
      if (j.isMesh)
        F.wireframe === !0
          ? (gt.setLineWidth(F.wireframeLinewidth * zt()), Zt.setMode(1))
          : Zt.setMode(4);
      else if (j.isLine) {
        let qe = F.linewidth;
        (qe === void 0 && (qe = 1),
          gt.setLineWidth(qe * zt()),
          j.isLineSegments
            ? Zt.setMode(1)
            : j.isLineLoop
              ? Zt.setMode(2)
              : Zt.setMode(3));
      } else j.isPoints ? Zt.setMode(0) : j.isSprite && Zt.setMode(4);
      if (j.isInstancedMesh) Zt.renderInstances(Ue, He, j.count);
      else if (H.isInstancedBufferGeometry) {
        let qe = Math.min(H.instanceCount, H._maxInstanceCount);
        Zt.renderInstances(Ue, He, qe);
      } else Zt.render(Ue, He);
    }
  }),
    (this.compile = function (S, N) {
      ((d = T.get(S)),
        d.init(),
        g.push(d),
        S.traverseVisible(function (H) {
          H.isLight &&
            H.layers.test(N.layers) &&
            (d.pushLight(H), H.castShadow && d.pushShadow(H));
        }),
        d.setupLights(v.physicallyCorrectLights),
        S.traverse(function (H) {
          let F = H.material;
          if (F)
            if (Array.isArray(F))
              for (let j = 0; j < F.length; j++) {
                let bt = F[j];
                da(bt, S, H);
              }
            else da(F, S, H);
        }),
        g.pop(),
        (d = null));
    }));
  let jt = null;
  function Vt(S) {
    jt && jt(S);
  }
  function Fe() {
    An.stop();
  }
  function Oe() {
    An.start();
  }
  let An = new rh();
  (An.setAnimationLoop(Vt),
    typeof Ge < "u" && An.setContext(Ge),
    (this.setAnimationLoop = function (S) {
      ((jt = S), $.setAnimationLoop(S), S === null ? An.stop() : An.start());
    }),
    $.addEventListener("sessionstart", Fe),
    $.addEventListener("sessionend", Oe),
    (this.render = function (S, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
        );
        return;
      }
      if (x === !0) return;
      (S.autoUpdate === !0 && S.updateMatrixWorld(),
        N.parent === null && N.updateMatrixWorld(),
        $.enabled === !0 &&
          $.isPresenting === !0 &&
          ($.cameraAutoUpdate === !0 && $.updateCamera(N), (N = $.getCamera())),
        S.isScene === !0 && S.onBeforeRender(v, S, N, _),
        (d = T.get(S, g.length)),
        d.init(),
        g.push(d),
        ct.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
        nt.setFromProjectionMatrix(ct),
        (k = this.localClippingEnabled),
        (lt = X.init(this.clippingPlanes, k, N)),
        (u = R.get(S, f.length)),
        u.init(),
        f.push(u),
        xl(S, N, 0, v.sortObjects),
        u.finish(),
        v.sortObjects === !0 && u.sort(M, E),
        lt === !0 && X.beginShadows());
      let H = d.state.shadowsArray;
      if (
        (Y.render(H, S, N),
        lt === !0 && X.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        rt.render(u, S),
        d.setupLights(v.physicallyCorrectLights),
        N.isArrayCamera)
      ) {
        let F = N.cameras;
        for (let j = 0, bt = F.length; j < bt; j++) {
          let Et = F[j];
          _l(u, S, Et, Et.viewport);
        }
      } else _l(u, S, N);
      (_ !== null &&
        (Q.updateMultisampleRenderTarget(_), Q.updateRenderTargetMipmap(_)),
        S.isScene === !0 && S.onAfterRender(v, S, N),
        gt.buffers.depth.setTest(!0),
        gt.buffers.depth.setMask(!0),
        gt.buffers.color.setMask(!0),
        gt.setPolygonOffset(!1),
        C.resetDefaultState(),
        (y = -1),
        (w = null),
        g.pop(),
        (d = g.length > 0 ? g[g.length - 1] : null),
        f.pop(),
        (u = f.length > 0 ? f[f.length - 1] : null));
    }));
  function xl(S, N, H, F) {
    if (S.visible === !1) return;
    if (S.layers.test(N.layers)) {
      if (S.isGroup) H = S.renderOrder;
      else if (S.isLOD) S.autoUpdate === !0 && S.update(N);
      else if (S.isLight) (d.pushLight(S), S.castShadow && d.pushShadow(S));
      else if (S.isSprite) {
        if (!S.frustumCulled || nt.intersectsSprite(S)) {
          F && at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ct);
          let Et = St.update(S),
            Pt = S.material;
          Pt.visible && u.push(S, Et, Pt, H, at.z, null);
        }
      } else if (
        (S.isMesh || S.isLine || S.isPoints) &&
        (S.isSkinnedMesh &&
          S.skeleton.frame !== Bt.render.frame &&
          (S.skeleton.update(), (S.skeleton.frame = Bt.render.frame)),
        !S.frustumCulled || nt.intersectsObject(S))
      ) {
        F && at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ct);
        let Et = St.update(S),
          Pt = S.material;
        if (Array.isArray(Pt)) {
          let wt = Et.groups;
          for (let Ut = 0, It = wt.length; Ut < It; Ut++) {
            let Ft = wt[Ut],
              Zt = Pt[Ft.materialIndex];
            Zt && Zt.visible && u.push(S, Et, Zt, H, at.z, Ft);
          }
        } else Pt.visible && u.push(S, Et, Pt, H, at.z, null);
      }
    }
    let bt = S.children;
    for (let Et = 0, Pt = bt.length; Et < Pt; Et++) xl(bt[Et], N, H, F);
  }
  function _l(S, N, H, F) {
    let j = S.opaque,
      bt = S.transmissive,
      Et = S.transparent;
    (d.setupLightsView(H),
      bt.length > 0 && Ah(j, N, H),
      F && gt.viewport(A.copy(F)),
      j.length > 0 && Pr(j, N, H),
      bt.length > 0 && Pr(bt, N, H),
      Et.length > 0 && Pr(Et, N, H));
  }
  function Ah(S, N, H) {
    if (W === null) {
      let Et = a === !0 && ft.isWebGL2 === !0 ? ir : ye;
      W = new Et(1024, 1024, {
        generateMipmaps: !0,
        type: et.convert(zn) !== null ? zn : Ke,
        minFilter: la,
        magFilter: te,
        wrapS: Se,
        wrapT: Se,
        useRenderToTexture: vt.has("WEBGL_multisampled_render_to_texture"),
      });
    }
    let F = v.getRenderTarget();
    (v.setRenderTarget(W), v.clear());
    let j = v.toneMapping;
    ((v.toneMapping = pn),
      Pr(S, N, H),
      (v.toneMapping = j),
      Q.updateMultisampleRenderTarget(W),
      Q.updateRenderTargetMipmap(W),
      v.setRenderTarget(F));
  }
  function Pr(S, N, H) {
    let F = N.isScene === !0 ? N.overrideMaterial : null;
    for (let j = 0, bt = S.length; j < bt; j++) {
      let Et = S[j],
        Pt = Et.object,
        wt = Et.geometry,
        Ut = F === null ? Et.material : F,
        It = Et.group;
      Pt.layers.test(H.layers) && Rh(Pt, N, H, wt, Ut, It);
    }
  }
  function Rh(S, N, H, F, j, bt) {
    (S.onBeforeRender(v, N, H, F, j, bt),
      S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, S.matrixWorld),
      S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
      j.onBeforeRender(v, N, H, F, S, bt),
      j.transparent === !0 && j.side === vn
        ? ((j.side = Kt),
          (j.needsUpdate = !0),
          v.renderBufferDirect(H, N, F, j, S, bt),
          (j.side = Ki),
          (j.needsUpdate = !0),
          v.renderBufferDirect(H, N, F, j, S, bt),
          (j.side = vn))
        : v.renderBufferDirect(H, N, F, j, S, bt),
      S.onAfterRender(v, N, H, F, j, bt));
  }
  function da(S, N, H) {
    N.isScene !== !0 && (N = ut);
    let F = V.get(S),
      j = d.state.lights,
      bt = d.state.shadowsArray,
      Et = j.state.version,
      Pt = Ct.getParameters(S, j.state, bt, N, H),
      wt = Ct.getProgramCacheKey(Pt),
      Ut = F.programs;
    ((F.environment = S.isMeshStandardMaterial ? N.environment : null),
      (F.fog = N.fog),
      (F.envMap = (S.isMeshStandardMaterial ? ht : K).get(
        S.envMap || F.environment,
      )),
      Ut === void 0 &&
        (S.addEventListener("dispose", Lt),
        (Ut = new Map()),
        (F.programs = Ut)));
    let It = Ut.get(wt);
    if (It !== void 0) {
      if (F.currentProgram === It && F.lightsStateVersion === Et)
        return (bl(S, Pt), It);
    } else
      ((Pt.uniforms = Ct.getUniforms(S)),
        S.onBuild(H, Pt, v),
        S.onBeforeCompile(Pt, v),
        (It = Ct.acquireProgram(Pt, wt)),
        Ut.set(wt, It),
        (F.uniforms = Pt.uniforms));
    let Ft = F.uniforms;
    (((S.isShaderMaterial || S.isRawShaderMaterial) && S.clipping !== !0) ||
      (Ft.clippingPlanes = X.uniform),
      bl(S, Pt),
      (F.needsLights = Ph(S)),
      (F.lightsStateVersion = Et),
      F.needsLights &&
        ((Ft.ambientLightColor.value = j.state.ambient),
        (Ft.lightProbe.value = j.state.probe),
        (Ft.directionalLights.value = j.state.directional),
        (Ft.directionalLightShadows.value = j.state.directionalShadow),
        (Ft.spotLights.value = j.state.spot),
        (Ft.spotLightShadows.value = j.state.spotShadow),
        (Ft.rectAreaLights.value = j.state.rectArea),
        (Ft.ltc_1.value = j.state.rectAreaLTC1),
        (Ft.ltc_2.value = j.state.rectAreaLTC2),
        (Ft.pointLights.value = j.state.point),
        (Ft.pointLightShadows.value = j.state.pointShadow),
        (Ft.hemisphereLights.value = j.state.hemi),
        (Ft.directionalShadowMap.value = j.state.directionalShadowMap),
        (Ft.directionalShadowMatrix.value = j.state.directionalShadowMatrix),
        (Ft.spotShadowMap.value = j.state.spotShadowMap),
        (Ft.spotShadowMatrix.value = j.state.spotShadowMatrix),
        (Ft.pointShadowMap.value = j.state.pointShadowMap),
        (Ft.pointShadowMatrix.value = j.state.pointShadowMatrix)));
    let Zt = It.getUniforms(),
      Rn = mn.seqWithValue(Zt.seq, Ft);
    return ((F.currentProgram = It), (F.uniformsList = Rn), It);
  }
  function bl(S, N) {
    let H = V.get(S);
    ((H.outputEncoding = N.outputEncoding),
      (H.instancing = N.instancing),
      (H.skinning = N.skinning),
      (H.morphTargets = N.morphTargets),
      (H.morphNormals = N.morphNormals),
      (H.morphTargetsCount = N.morphTargetsCount),
      (H.numClippingPlanes = N.numClippingPlanes),
      (H.numIntersection = N.numClipIntersection),
      (H.vertexAlphas = N.vertexAlphas),
      (H.vertexTangents = N.vertexTangents),
      (H.toneMapping = N.toneMapping));
  }
  function Lh(S, N, H, F, j) {
    (N.isScene !== !0 && (N = ut), Q.resetTextureUnits());
    let bt = N.fog,
      Et = F.isMeshStandardMaterial ? N.environment : null,
      Pt = _ === null ? v.outputEncoding : _.texture.encoding,
      wt = (F.isMeshStandardMaterial ? ht : K).get(F.envMap || Et),
      Ut =
        F.vertexColors === !0 &&
        !!H.attributes.color &&
        H.attributes.color.itemSize === 4,
      It = !!F.normalMap && !!H.attributes.tangent,
      Ft = !!H.morphAttributes.position,
      Zt = !!H.morphAttributes.normal,
      Rn = H.morphAttributes.position ? H.morphAttributes.position.length : 0,
      Wn = F.toneMapped ? v.toneMapping : pn,
      Ht = V.get(F),
      Be = d.state.lights;
    if (lt === !0 && (k === !0 || S !== w)) {
      let Ce = S === w && F.id === y;
      X.setState(F, S, Ce);
    }
    let Le = !1;
    F.version === Ht.__version
      ? (Ht.needsLights && Ht.lightsStateVersion !== Be.state.version) ||
        Ht.outputEncoding !== Pt ||
        (j.isInstancedMesh && Ht.instancing === !1)
        ? (Le = !0)
        : j.isInstancedMesh || Ht.instancing !== !0
          ? j.isSkinnedMesh && Ht.skinning === !1
            ? (Le = !0)
            : j.isSkinnedMesh || Ht.skinning !== !0
              ? Ht.envMap !== wt || (F.fog && Ht.fog !== bt)
                ? (Le = !0)
                : Ht.numClippingPlanes === void 0 ||
                    (Ht.numClippingPlanes === X.numPlanes &&
                      Ht.numIntersection === X.numIntersection)
                  ? (Ht.vertexAlphas !== Ut ||
                      Ht.vertexTangents !== It ||
                      Ht.morphTargets !== Ft ||
                      Ht.morphNormals !== Zt ||
                      Ht.toneMapping !== Wn ||
                      (ft.isWebGL2 === !0 && Ht.morphTargetsCount !== Rn)) &&
                    (Le = !0)
                  : (Le = !0)
              : (Le = !0)
          : (Le = !0)
      : ((Le = !0), (Ht.__version = F.version));
    let Ue = Ht.currentProgram;
    Le === !0 && (Ue = da(F, N, j));
    let Ir = !1,
      He = !1,
      qe = !1,
      he = Ue.getUniforms(),
      Ni = Ht.uniforms;
    if (
      (gt.useProgram(Ue.program) && ((Ir = !0), (He = !0), (qe = !0)),
      F.id !== y && ((y = F.id), (He = !0)),
      Ir || w !== S)
    ) {
      if (
        (he.setValue(J, "projectionMatrix", S.projectionMatrix),
        ft.logarithmicDepthBuffer &&
          he.setValue(J, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)),
        w !== S && ((w = S), (He = !0), (qe = !0)),
        F.isShaderMaterial ||
          F.isMeshPhongMaterial ||
          F.isMeshToonMaterial ||
          F.isMeshStandardMaterial ||
          F.envMap)
      ) {
        let Ce = he.map.cameraPosition;
        Ce !== void 0 &&
          Ce.setValue(J, at.setFromMatrixPosition(S.matrixWorld));
      }
      ((F.isMeshPhongMaterial ||
        F.isMeshToonMaterial ||
        F.isMeshLambertMaterial ||
        F.isMeshBasicMaterial ||
        F.isMeshStandardMaterial ||
        F.isShaderMaterial) &&
        he.setValue(J, "isOrthographic", S.isOrthographicCamera === !0),
        (F.isMeshPhongMaterial ||
          F.isMeshToonMaterial ||
          F.isMeshLambertMaterial ||
          F.isMeshBasicMaterial ||
          F.isMeshStandardMaterial ||
          F.isShaderMaterial ||
          F.isShadowMaterial ||
          j.isSkinnedMesh) &&
          he.setValue(J, "viewMatrix", S.matrixWorldInverse));
    }
    if (j.isSkinnedMesh) {
      (he.setOptional(J, j, "bindMatrix"),
        he.setOptional(J, j, "bindMatrixInverse"));
      let Ce = j.skeleton;
      Ce &&
        (ft.floatVertexTextures
          ? (Ce.boneTexture === null && Ce.computeBoneTexture(),
            he.setValue(J, "boneTexture", Ce.boneTexture, Q),
            he.setValue(J, "boneTextureSize", Ce.boneTextureSize))
          : he.setOptional(J, Ce, "boneMatrices"));
    }
    return (
      !H ||
        (H.morphAttributes.position === void 0 &&
          H.morphAttributes.normal === void 0) ||
        Z.update(j, H, F, Ue),
      (He || Ht.receiveShadow !== j.receiveShadow) &&
        ((Ht.receiveShadow = j.receiveShadow),
        he.setValue(J, "receiveShadow", j.receiveShadow)),
      He &&
        (he.setValue(J, "toneMappingExposure", v.toneMappingExposure),
        Ht.needsLights && Ch(Ni, qe),
        bt && F.fog && Xt.refreshFogUniforms(Ni, bt),
        Xt.refreshMaterialUniforms(Ni, F, P, O, W),
        mn.upload(J, Ht.uniformsList, Ni, Q)),
      F.isShaderMaterial &&
        F.uniformsNeedUpdate === !0 &&
        (mn.upload(J, Ht.uniformsList, Ni, Q), (F.uniformsNeedUpdate = !1)),
      F.isSpriteMaterial && he.setValue(J, "center", j.center),
      he.setValue(J, "modelViewMatrix", j.modelViewMatrix),
      he.setValue(J, "normalMatrix", j.normalMatrix),
      he.setValue(J, "modelMatrix", j.matrixWorld),
      Ue
    );
  }
  function Ch(S, N) {
    ((S.ambientLightColor.needsUpdate = N),
      (S.lightProbe.needsUpdate = N),
      (S.directionalLights.needsUpdate = N),
      (S.directionalLightShadows.needsUpdate = N),
      (S.pointLights.needsUpdate = N),
      (S.pointLightShadows.needsUpdate = N),
      (S.spotLights.needsUpdate = N),
      (S.spotLightShadows.needsUpdate = N),
      (S.rectAreaLights.needsUpdate = N),
      (S.hemisphereLights.needsUpdate = N));
  }
  function Ph(S) {
    return (
      S.isMeshLambertMaterial ||
      S.isMeshToonMaterial ||
      S.isMeshPhongMaterial ||
      S.isMeshStandardMaterial ||
      S.isShadowMaterial ||
      (S.isShaderMaterial && S.lights === !0)
    );
  }
  ((this.getActiveCubeFace = function () {
    return m;
  }),
    (this.getActiveMipmapLevel = function () {
      return p;
    }),
    (this.getRenderTarget = function () {
      return _;
    }),
    (this.setRenderTargetTextures = function (S, N, H) {
      ((V.get(S.texture).__webglTexture = N),
        (V.get(S.depthTexture).__webglTexture = H));
      let F = V.get(S);
      ((F.__hasExternalTextures = !0),
        F.__hasExternalTextures &&
          ((F.__autoAllocateDepthBuffer = H === void 0),
          !F.__autoAllocateDepthBuffer &&
            S.useRenderToTexture &&
            (console.warn(
              "render-to-texture extension was disabled because an external texture was provided",
            ),
            (S.useRenderToTexture = !1),
            (S.useRenderbuffer = !0))));
    }),
    (this.setRenderTargetFramebuffer = function (S, N) {
      let H = V.get(S);
      ((H.__webglFramebuffer = N), (H.__useDefaultFramebuffer = N === void 0));
    }),
    (this.setRenderTarget = function (S, N = 0, H = 0) {
      ((_ = S), (m = N), (p = H));
      let F = !0;
      if (S) {
        let wt = V.get(S);
        wt.__useDefaultFramebuffer !== void 0
          ? (gt.bindFramebuffer(36160, null), (F = !1))
          : wt.__webglFramebuffer === void 0
            ? Q.setupRenderTarget(S)
            : wt.__hasExternalTextures &&
              Q.rebindTextures(
                S,
                V.get(S.texture).__webglTexture,
                V.get(S.depthTexture).__webglTexture,
              );
      }
      let j = null,
        bt = !1,
        Et = !1;
      if (S) {
        let wt = S.texture;
        (wt.isDataTexture3D || wt.isDataTexture2DArray) && (Et = !0);
        let Ut = V.get(S).__webglFramebuffer;
        (S.isWebGLCubeRenderTarget
          ? ((j = Ut[N]), (bt = !0))
          : (j = S.useRenderbuffer
              ? V.get(S).__webglMultisampledFramebuffer
              : Ut),
          A.copy(S.viewport),
          L.copy(S.scissor),
          (I = S.scissorTest));
      } else
        (A.copy(D).multiplyScalar(P).floor(),
          L.copy(B).multiplyScalar(P).floor(),
          (I = z));
      if (gt.bindFramebuffer(36160, j) && ft.drawBuffers && F) {
        let wt = !1;
        if (S)
          if (S.isWebGLMultipleRenderTargets) {
            let Ut = S.texture;
            if (U.length !== Ut.length || U[0] !== 36064) {
              for (let It = 0, Ft = Ut.length; It < Ft; It++)
                U[It] = 36064 + It;
              ((U.length = Ut.length), (wt = !0));
            }
          } else
            (U.length !== 1 || U[0] !== 36064) &&
              ((U[0] = 36064), (U.length = 1), (wt = !0));
        else
          (U.length !== 1 || U[0] !== 1029) &&
            ((U[0] = 1029), (U.length = 1), (wt = !0));
        wt &&
          (ft.isWebGL2
            ? J.drawBuffers(U)
            : vt.get("WEBGL_draw_buffers").drawBuffersWEBGL(U));
      }
      if ((gt.viewport(A), gt.scissor(L), gt.setScissorTest(I), bt)) {
        let wt = V.get(S.texture);
        J.framebufferTexture2D(36160, 36064, 34069 + N, wt.__webglTexture, H);
      } else if (Et) {
        let wt = V.get(S.texture),
          Ut = N || 0;
        J.framebufferTextureLayer(36160, 36064, wt.__webglTexture, H || 0, Ut);
      }
      y = -1;
    }),
    (this.readRenderTargetPixels = function (S, N, H, F, j, bt, Et) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
        );
        return;
      }
      let Pt = V.get(S).__webglFramebuffer;
      if ((S.isWebGLCubeRenderTarget && Et !== void 0 && (Pt = Pt[Et]), Pt)) {
        gt.bindFramebuffer(36160, Pt);
        try {
          let wt = S.texture,
            Ut = wt.format,
            It = wt.type;
          if (Ut !== ae && et.convert(Ut) !== J.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
            );
            return;
          }
          let Ft =
            It === zn &&
            (vt.has("EXT_color_buffer_half_float") ||
              (ft.isWebGL2 && vt.has("EXT_color_buffer_float")));
          if (
            It !== Ke &&
            et.convert(It) !== J.getParameter(35738) &&
            !(
              It === un &&
              (ft.isWebGL2 ||
                vt.has("OES_texture_float") ||
                vt.has("WEBGL_color_buffer_float"))
            ) &&
            !Ft
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
            );
            return;
          }
          J.checkFramebufferStatus(36160) === 36053
            ? N >= 0 &&
              N <= S.width - F &&
              H >= 0 &&
              H <= S.height - j &&
              J.readPixels(N, H, F, j, et.convert(Ut), et.convert(It), bt)
            : console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.",
              );
        } finally {
          let wt = _ !== null ? V.get(_).__webglFramebuffer : null;
          gt.bindFramebuffer(36160, wt);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (S, N, H = 0) {
      if (N.isFramebufferTexture !== !0) {
        console.error(
          "THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.",
        );
        return;
      }
      let F = Math.pow(2, -H),
        j = Math.floor(N.image.width * F),
        bt = Math.floor(N.image.height * F);
      (Q.setTexture2D(N, 0),
        J.copyTexSubImage2D(3553, H, 0, 0, S.x, S.y, j, bt),
        gt.unbindTexture());
    }),
    (this.copyTextureToTexture = function (S, N, H, F = 0) {
      let j = N.image.width,
        bt = N.image.height,
        Et = et.convert(H.format),
        Pt = et.convert(H.type);
      (Q.setTexture2D(H, 0),
        J.pixelStorei(37440, H.flipY),
        J.pixelStorei(37441, H.premultiplyAlpha),
        J.pixelStorei(3317, H.unpackAlignment),
        N.isDataTexture
          ? J.texSubImage2D(3553, F, S.x, S.y, j, bt, Et, Pt, N.image.data)
          : N.isCompressedTexture
            ? J.compressedTexSubImage2D(
                3553,
                F,
                S.x,
                S.y,
                N.mipmaps[0].width,
                N.mipmaps[0].height,
                Et,
                N.mipmaps[0].data,
              )
            : J.texSubImage2D(3553, F, S.x, S.y, Et, Pt, N.image),
        F === 0 && H.generateMipmaps && J.generateMipmap(3553),
        gt.unbindTexture());
    }),
    (this.copyTextureToTexture3D = function (S, N, H, F, j = 0) {
      if (v.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.",
        );
        return;
      }
      let bt = S.max.x - S.min.x + 1,
        Et = S.max.y - S.min.y + 1,
        Pt = S.max.z - S.min.z + 1,
        wt = et.convert(F.format),
        Ut = et.convert(F.type),
        It;
      if (F.isDataTexture3D) (Q.setTexture3D(F, 0), (It = 32879));
      else {
        if (!F.isDataTexture2DArray) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.",
          );
          return;
        }
        (Q.setTexture2DArray(F, 0), (It = 35866));
      }
      (J.pixelStorei(37440, F.flipY),
        J.pixelStorei(37441, F.premultiplyAlpha),
        J.pixelStorei(3317, F.unpackAlignment));
      let Ft = J.getParameter(3314),
        Zt = J.getParameter(32878),
        Rn = J.getParameter(3316),
        Wn = J.getParameter(3315),
        Ht = J.getParameter(32877),
        Be = H.isCompressedTexture ? H.mipmaps[0] : H.image;
      (J.pixelStorei(3314, Be.width),
        J.pixelStorei(32878, Be.height),
        J.pixelStorei(3316, S.min.x),
        J.pixelStorei(3315, S.min.y),
        J.pixelStorei(32877, S.min.z),
        H.isDataTexture || H.isDataTexture3D
          ? J.texSubImage3D(It, j, N.x, N.y, N.z, bt, Et, Pt, wt, Ut, Be.data)
          : H.isCompressedTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.",
              ),
              J.compressedTexSubImage3D(
                It,
                j,
                N.x,
                N.y,
                N.z,
                bt,
                Et,
                Pt,
                wt,
                Be.data,
              ))
            : J.texSubImage3D(It, j, N.x, N.y, N.z, bt, Et, Pt, wt, Ut, Be),
        J.pixelStorei(3314, Ft),
        J.pixelStorei(32878, Zt),
        J.pixelStorei(3316, Rn),
        J.pixelStorei(3315, Wn),
        J.pixelStorei(32877, Ht),
        j === 0 && F.generateMipmaps && J.generateMipmap(It),
        gt.unbindTexture());
    }),
    (this.initTexture = function (S) {
      (Q.setTexture2D(S, 0), gt.unbindTexture());
    }),
    (this.resetState = function () {
      ((m = 0), (p = 0), (_ = null), gt.reset(), C.reset());
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this }),
      ));
}
Gt.prototype.isWebGLRenderer = !0;
var co = class extends Gt {};
co.prototype.isWebGL1Renderer = !0;
var ho = class s {
  constructor(t, e = 25e-5) {
    ((this.name = ""), (this.color = new dt(t)), (this.density = e));
  }
  clone() {
    return new s(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density,
    };
  }
};
ho.prototype.isFogExp2 = !0;
var uo = class s {
  constructor(t, e = 1, n = 1e3) {
    ((this.name = ""),
      (this.color = new dt(t)),
      (this.near = e),
      (this.far = n));
  }
  clone() {
    return new s(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
};
uo.prototype.isFog = !0;
var Ti = class extends Wt {
  constructor() {
    (super(),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.background !== null && (this.background = t.background.clone()),
      t.environment !== null && (this.environment = t.environment.clone()),
      t.fog !== null && (this.fog = t.fog.clone()),
      t.overrideMaterial !== null &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.autoUpdate = t.autoUpdate),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return (this.fog !== null && (e.object.fog = this.fog.toJSON()), e);
  }
};
Ti.prototype.isScene = !0;
var Hn = class {
  constructor(t, e) {
    ((this.array = t),
      (this.stride = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.usage = er),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = Ee()));
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return ((this.usage = t), this);
  }
  copy(t) {
    return (
      (this.array = new t.array.constructor(t.array)),
      (this.count = t.count),
      (this.stride = t.stride),
      (this.usage = t.usage),
      this
    );
  }
  copyAt(t, e, n) {
    ((t *= this.stride), (n *= e.stride));
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return (this.array.set(t, e), this);
  }
  clone(t) {
    (t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ee()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer));
    let e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
      n = new this.constructor(e, this.stride);
    return (n.setUsage(this.usage), n);
  }
  onUpload(t) {
    return ((this.onUploadCallback = t), this);
  }
  toJSON(t) {
    return (
      t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ee()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer),
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
};
Hn.prototype.isInterleavedBuffer = !0;
var Qt = new b(),
  hr = class s {
    constructor(t, e, n, i = !1) {
      ((this.name = ""),
        (this.data = t),
        (this.itemSize = e),
        (this.offset = n),
        (this.normalized = i === !0));
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(t) {
      this.data.needsUpdate = t;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.data.count; e < n; e++)
        ((Qt.x = this.getX(e)),
          (Qt.y = this.getY(e)),
          (Qt.z = this.getZ(e)),
          Qt.applyMatrix4(t),
          this.setXYZ(e, Qt.x, Qt.y, Qt.z));
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        ((Qt.x = this.getX(e)),
          (Qt.y = this.getY(e)),
          (Qt.z = this.getZ(e)),
          Qt.applyNormalMatrix(t),
          this.setXYZ(e, Qt.x, Qt.y, Qt.z));
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        ((Qt.x = this.getX(e)),
          (Qt.y = this.getY(e)),
          (Qt.z = this.getZ(e)),
          Qt.transformDirection(t),
          this.setXYZ(e, Qt.x, Qt.y, Qt.z));
      return this;
    }
    setX(t, e) {
      return ((this.data.array[t * this.data.stride + this.offset] = e), this);
    }
    setY(t, e) {
      return (
        (this.data.array[t * this.data.stride + this.offset + 1] = e),
        this
      );
    }
    setZ(t, e) {
      return (
        (this.data.array[t * this.data.stride + this.offset + 2] = e),
        this
      );
    }
    setW(t, e) {
      return (
        (this.data.array[t * this.data.stride + this.offset + 3] = e),
        this
      );
    }
    getX(t) {
      return this.data.array[t * this.data.stride + this.offset];
    }
    getY(t) {
      return this.data.array[t * this.data.stride + this.offset + 1];
    }
    getZ(t) {
      return this.data.array[t * this.data.stride + this.offset + 2];
    }
    getW(t) {
      return this.data.array[t * this.data.stride + this.offset + 3];
    }
    setXY(t, e, n) {
      return (
        (t = t * this.data.stride + this.offset),
        (this.data.array[t + 0] = e),
        (this.data.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t = t * this.data.stride + this.offset),
        (this.data.array[t + 0] = e),
        (this.data.array[t + 1] = n),
        (this.data.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t = t * this.data.stride + this.offset),
        (this.data.array[t + 0] = e),
        (this.data.array[t + 1] = n),
        (this.data.array[t + 2] = i),
        (this.data.array[t + 3] = r),
        this
      );
    }
    clone(t) {
      if (t === void 0) {
        console.log(
          "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.",
        );
        let e = [];
        for (let n = 0; n < this.count; n++) {
          let i = n * this.data.stride + this.offset;
          for (let r = 0; r < this.itemSize; r++)
            e.push(this.data.array[i + r]);
        }
        return new $t(
          new this.array.constructor(e),
          this.itemSize,
          this.normalized,
        );
      }
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new s(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      );
    }
    toJSON(t) {
      if (t === void 0) {
        console.log(
          "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.",
        );
        let e = [];
        for (let n = 0; n < this.count; n++) {
          let i = n * this.data.stride + this.offset;
          for (let r = 0; r < this.itemSize; r++)
            e.push(this.data.array[i + r]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized,
        };
      }
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    }
  };
hr.prototype.isInterleavedBufferAttribute = !0;
var ur = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "SpriteMaterial"),
      (this.color = new dt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.rotation = t.rotation),
      (this.sizeAttenuation = t.sizeAttenuation),
      this
    );
  }
};
ur.prototype.isSpriteMaterial = !0;
var oi,
  Gi = new b(),
  li = new b(),
  ci = new b(),
  hi = new q(),
  Vi = new q(),
  gh = new mt(),
  ts = new b(),
  ki = new b(),
  es = new b(),
  Mc = new q(),
  Va = new q(),
  Sc = new q(),
  po = class extends Wt {
    constructor(t) {
      if ((super(), (this.type = "Sprite"), oi === void 0)) {
        oi = new Nt();
        let e = new Float32Array([
            -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
            0.5, 0, 0, 1,
          ]),
          n = new Hn(e, 5);
        (oi.setIndex([0, 1, 2, 0, 2, 3]),
          oi.setAttribute("position", new hr(n, 3, 0, !1)),
          oi.setAttribute("uv", new hr(n, 2, 3, !1)));
      }
      ((this.geometry = oi),
        (this.material = t !== void 0 ? t : new ur()),
        (this.center = new q(0.5, 0.5)));
    }
    raycast(t, e) {
      (t.camera === null &&
        console.error(
          'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.',
        ),
        li.setFromMatrixScale(this.matrixWorld),
        gh.copy(t.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(
          t.camera.matrixWorldInverse,
          this.matrixWorld,
        ),
        ci.setFromMatrixPosition(this.modelViewMatrix),
        t.camera.isPerspectiveCamera &&
          this.material.sizeAttenuation === !1 &&
          li.multiplyScalar(-ci.z));
      let n = this.material.rotation,
        i,
        r;
      n !== 0 && ((r = Math.cos(n)), (i = Math.sin(n)));
      let a = this.center;
      (ns(ts.set(-0.5, -0.5, 0), ci, a, li, i, r),
        ns(ki.set(0.5, -0.5, 0), ci, a, li, i, r),
        ns(es.set(0.5, 0.5, 0), ci, a, li, i, r),
        Mc.set(0, 0),
        Va.set(1, 0),
        Sc.set(1, 1));
      let o = t.ray.intersectTriangle(ts, ki, es, !1, Gi);
      if (
        o === null &&
        (ns(ki.set(-0.5, 0.5, 0), ci, a, li, i, r),
        Va.set(0, 1),
        (o = t.ray.intersectTriangle(ts, es, ki, !1, Gi)),
        o === null)
      )
        return;
      let l = t.ray.origin.distanceTo(Gi);
      l < t.near ||
        l > t.far ||
        e.push({
          distance: l,
          point: Gi.clone(),
          uv: pe.getUV(Gi, ts, ki, es, Mc, Va, Sc, new q()),
          face: null,
          object: this,
        });
    }
    copy(t) {
      return (
        super.copy(t),
        t.center !== void 0 && this.center.copy(t.center),
        (this.material = t.material),
        this
      );
    }
  };
po.prototype.isSprite = !0;
function ns(s, t, e, n, i, r) {
  (hi.subVectors(s, e).addScalar(0.5).multiply(n),
    i !== void 0
      ? ((Vi.x = r * hi.x - i * hi.y), (Vi.y = i * hi.x + r * hi.y))
      : Vi.copy(hi),
    s.copy(t),
    (s.x += Vi.x),
    (s.y += Vi.y),
    s.applyMatrix4(gh));
}
var X0 = new b(),
  J0 = new b();
var Tc = new b(),
  Ec = new Ot(),
  Ac = new Ot(),
  t0 = new b(),
  Rc = new mt(),
  Rs = class extends se {
    constructor(t, e) {
      (super(t, e),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new mt()),
        (this.bindMatrixInverse = new mt()));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.bindMode = t.bindMode),
        this.bindMatrix.copy(t.bindMatrix),
        this.bindMatrixInverse.copy(t.bindMatrixInverse),
        (this.skeleton = t.skeleton),
        this
      );
    }
    bind(t, e) {
      ((this.skeleton = t),
        e === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (e = this.matrixWorld)),
        this.bindMatrix.copy(e),
        this.bindMatrixInverse.copy(e).invert());
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      let t = new Ot(),
        e = this.geometry.attributes.skinWeight;
      for (let n = 0, i = e.count; n < i; n++) {
        ((t.x = e.getX(n)),
          (t.y = e.getY(n)),
          (t.z = e.getZ(n)),
          (t.w = e.getW(n)));
        let r = 1 / t.manhattanLength();
        (r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0),
          e.setXYZW(n, t.x, t.y, t.z, t.w));
      }
    }
    updateMatrixWorld(t) {
      (super.updateMatrixWorld(t),
        this.bindMode === "attached"
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === "detached"
            ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
            : console.warn(
                "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode,
              ));
    }
    boneTransform(t, e) {
      let n = this.skeleton,
        i = this.geometry;
      (Ec.fromBufferAttribute(i.attributes.skinIndex, t),
        Ac.fromBufferAttribute(i.attributes.skinWeight, t),
        Tc.copy(e).applyMatrix4(this.bindMatrix),
        e.set(0, 0, 0));
      for (let r = 0; r < 4; r++) {
        let a = Ac.getComponent(r);
        if (a !== 0) {
          let o = Ec.getComponent(r);
          (Rc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
            e.addScaledVector(t0.copy(Tc).applyMatrix4(Rc), a));
        }
      }
      return e.applyMatrix4(this.bindMatrixInverse);
    }
  };
Rs.prototype.isSkinnedMesh = !0;
var fo = class extends Wt {
  constructor() {
    (super(), (this.type = "Bone"));
  }
};
fo.prototype.isBone = !0;
var mo = class extends ce {
  constructor(t = null, e = 1, n = 1, i, r, a, o, l, c = te, h = te, u, d) {
    (super(null, a, o, l, c, h, i, r, u, d),
      (this.image = { data: t, width: e, height: n }),
      (this.magFilter = c),
      (this.minFilter = h),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
};
mo.prototype.isDataTexture = !0;
var Y0 = new mt(),
  Z0 = new mt();
var dr = class extends $t {
  constructor(t, e, n, i = 1) {
    (typeof n == "number" &&
      ((i = n),
      (n = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.",
      )),
      super(t, e, n),
      (this.meshPerAttribute = i));
  }
  copy(t) {
    return (super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this);
  }
  toJSON() {
    let t = super.toJSON();
    return (
      (t.meshPerAttribute = this.meshPerAttribute),
      (t.isInstancedBufferAttribute = !0),
      t
    );
  }
};
dr.prototype.isInstancedBufferAttribute = !0;
var Lc = new mt(),
  Cc = new mt(),
  is = [],
  Wi = new se(),
  go = class extends se {
    constructor(t, e, n) {
      (super(t, e),
        (this.instanceMatrix = new dr(new Float32Array(16 * n), 16)),
        (this.instanceColor = null),
        (this.count = n),
        (this.frustumCulled = !1));
    }
    copy(t) {
      return (
        super.copy(t),
        this.instanceMatrix.copy(t.instanceMatrix),
        t.instanceColor !== null &&
          (this.instanceColor = t.instanceColor.clone()),
        (this.count = t.count),
        this
      );
    }
    getColorAt(t, e) {
      e.fromArray(this.instanceColor.array, 3 * t);
    }
    getMatrixAt(t, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t);
    }
    raycast(t, e) {
      let n = this.matrixWorld,
        i = this.count;
      if (
        ((Wi.geometry = this.geometry),
        (Wi.material = this.material),
        Wi.material !== void 0)
      )
        for (let r = 0; r < i; r++) {
          (this.getMatrixAt(r, Lc),
            Cc.multiplyMatrices(n, Lc),
            (Wi.matrixWorld = Cc),
            Wi.raycast(t, is));
          for (let a = 0, o = is.length; a < o; a++) {
            let l = is[a];
            ((l.instanceId = r), (l.object = this), e.push(l));
          }
          is.length = 0;
        }
    }
    setColorAt(t, e) {
      (this.instanceColor === null &&
        (this.instanceColor = new dr(
          new Float32Array(3 * this.instanceMatrix.count),
          3,
        )),
        e.toArray(this.instanceColor.array, 3 * t));
    }
    setMatrixAt(t, e) {
      e.toArray(this.instanceMatrix.array, 16 * t);
    }
    updateMorphTargets() {}
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
go.prototype.isInstancedMesh = !0;
var bn = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "LineBasicMaterial"),
      (this.color = new dt(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.linewidth = t.linewidth),
      (this.linecap = t.linecap),
      (this.linejoin = t.linejoin),
      this
    );
  }
};
bn.prototype.isLineBasicMaterial = !0;
var Pc = new b(),
  Ic = new b(),
  Dc = new mt(),
  ka = new _n(),
  rs = new xn(),
  pr = class extends Wt {
    constructor(t = new Nt(), e = new bn()) {
      (super(),
        (this.type = "Line"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets());
    }
    copy(t) {
      return (
        super.copy(t),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    computeLineDistances() {
      let t = this.geometry;
      if (t.isBufferGeometry)
        if (t.index === null) {
          let e = t.attributes.position,
            n = [0];
          for (let i = 1, r = e.count; i < r; i++)
            (Pc.fromBufferAttribute(e, i - 1),
              Ic.fromBufferAttribute(e, i),
              (n[i] = n[i - 1]),
              (n[i] += Pc.distanceTo(Ic)));
          t.setAttribute("lineDistance", new xt(n, 1));
        } else
          console.warn(
            "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
          );
      else
        t.isGeometry &&
          console.error(
            "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
      return this;
    }
    raycast(t, e) {
      let n = this.geometry,
        i = this.matrixWorld,
        r = t.params.Line.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        rs.copy(n.boundingSphere),
        rs.applyMatrix4(i),
        (rs.radius += r),
        t.ray.intersectsSphere(rs) === !1)
      )
        return;
      (Dc.copy(i).invert(), ka.copy(t.ray).applyMatrix4(Dc));
      let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        l = o * o,
        c = new b(),
        h = new b(),
        u = new b(),
        d = new b(),
        f = this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        let g = n.index,
          x = n.attributes.position;
        if (g !== null) {
          let m = Math.max(0, a.start),
            p = Math.min(g.count, a.start + a.count);
          for (let _ = m, y = p - 1; _ < y; _ += f) {
            let w = g.getX(_),
              A = g.getX(_ + 1);
            if (
              (c.fromBufferAttribute(x, w),
              h.fromBufferAttribute(x, A),
              ka.distanceSqToSegment(c, h, d, u) > l)
            )
              continue;
            d.applyMatrix4(this.matrixWorld);
            let I = t.ray.origin.distanceTo(d);
            I < t.near ||
              I > t.far ||
              e.push({
                distance: I,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: _,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        } else {
          let m = Math.max(0, a.start),
            p = Math.min(x.count, a.start + a.count);
          for (let _ = m, y = p - 1; _ < y; _ += f) {
            if (
              (c.fromBufferAttribute(x, _),
              h.fromBufferAttribute(x, _ + 1),
              ka.distanceSqToSegment(c, h, d, u) > l)
            )
              continue;
            d.applyMatrix4(this.matrixWorld);
            let A = t.ray.origin.distanceTo(d);
            A < t.near ||
              A > t.far ||
              e.push({
                distance: A,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: _,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        }
      } else
        n.isGeometry &&
          console.error(
            "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
    }
    updateMorphTargets() {
      let t = this.geometry;
      if (t.isBufferGeometry) {
        let e = t.morphAttributes,
          n = Object.keys(e);
        if (n.length > 0) {
          let i = e[n[0]];
          if (i !== void 0) {
            ((this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {}));
            for (let r = 0, a = i.length; r < a; r++) {
              let o = i[r].name || String(r);
              (this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[o] = r));
            }
          }
        }
      } else {
        let e = t.morphTargets;
        e !== void 0 &&
          e.length > 0 &&
          console.error(
            "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
      }
    }
  };
pr.prototype.isLine = !0;
var zc = new b(),
  Nc = new b(),
  fr = class extends pr {
    constructor(t, e) {
      (super(t, e), (this.type = "LineSegments"));
    }
    computeLineDistances() {
      let t = this.geometry;
      if (t.isBufferGeometry)
        if (t.index === null) {
          let e = t.attributes.position,
            n = [];
          for (let i = 0, r = e.count; i < r; i += 2)
            (zc.fromBufferAttribute(e, i),
              Nc.fromBufferAttribute(e, i + 1),
              (n[i] = i === 0 ? 0 : n[i - 1]),
              (n[i + 1] = n[i] + zc.distanceTo(Nc)));
          t.setAttribute("lineDistance", new xt(n, 1));
        } else
          console.warn(
            "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
          );
      else
        t.isGeometry &&
          console.error(
            "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
      return this;
    }
  };
fr.prototype.isLineSegments = !0;
var vo = class extends pr {
  constructor(t, e) {
    (super(t, e), (this.type = "LineLoop"));
  }
};
vo.prototype.isLineLoop = !0;
var mr = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "PointsMaterial"),
      (this.color = new dt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      this
    );
  }
};
mr.prototype.isPointsMaterial = !0;
var Fc = new mt(),
  yo = new _n(),
  ss = new xn(),
  as = new b(),
  xo = class extends Wt {
    constructor(t = new Nt(), e = new mr()) {
      (super(),
        (this.type = "Points"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets());
    }
    copy(t) {
      return (
        super.copy(t),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    raycast(t, e) {
      let n = this.geometry,
        i = this.matrixWorld,
        r = t.params.Points.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        ss.copy(n.boundingSphere),
        ss.applyMatrix4(i),
        (ss.radius += r),
        t.ray.intersectsSphere(ss) === !1)
      )
        return;
      (Fc.copy(i).invert(), yo.copy(t.ray).applyMatrix4(Fc));
      let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        l = o * o;
      if (n.isBufferGeometry) {
        let c = n.index,
          u = n.attributes.position;
        if (c !== null) {
          let d = Math.max(0, a.start),
            f = Math.min(c.count, a.start + a.count);
          for (let g = d, v = f; g < v; g++) {
            let x = c.getX(g);
            (as.fromBufferAttribute(u, x), Oc(as, x, l, i, t, e, this));
          }
        } else {
          let d = Math.max(0, a.start),
            f = Math.min(u.count, a.start + a.count);
          for (let g = d, v = f; g < v; g++)
            (as.fromBufferAttribute(u, g), Oc(as, g, l, i, t, e, this));
        }
      } else
        console.error(
          "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.",
        );
    }
    updateMorphTargets() {
      let t = this.geometry;
      if (t.isBufferGeometry) {
        let e = t.morphAttributes,
          n = Object.keys(e);
        if (n.length > 0) {
          let i = e[n[0]];
          if (i !== void 0) {
            ((this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {}));
            for (let r = 0, a = i.length; r < a; r++) {
              let o = i[r].name || String(r);
              (this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[o] = r));
            }
          }
        }
      } else {
        let e = t.morphTargets;
        e !== void 0 &&
          e.length > 0 &&
          console.error(
            "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.",
          );
      }
    }
  };
xo.prototype.isPoints = !0;
function Oc(s, t, e, n, i, r, a) {
  let o = yo.distanceSqToPoint(s);
  if (o < e) {
    let l = new b();
    (yo.closestPointToPoint(s, l), l.applyMatrix4(n));
    let c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: t,
      face: null,
      object: a,
    });
  }
}
var _o = class extends ce {
  constructor(t, e, n, i, r, a, o, l, c) {
    (super(t, e, n, i, r, a, o, l, c),
      (this.format = o !== void 0 ? o : Nn),
      (this.minFilter = a !== void 0 ? a : ge),
      (this.magFilter = r !== void 0 ? r : ge),
      (this.generateMipmaps = !1));
    let h = this;
    function u() {
      ((h.needsUpdate = !0), t.requestVideoFrameCallback(u));
    }
    "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    let t = this.image;
    "requestVideoFrameCallback" in t === !1 &&
      t.readyState >= t.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
};
_o.prototype.isVideoTexture = !0;
var bo = class extends ce {
  constructor(t, e, n) {
    (super({ width: t, height: e }),
      (this.format = n),
      (this.magFilter = te),
      (this.minFilter = te),
      (this.generateMipmaps = !1),
      (this.needsUpdate = !0));
  }
};
bo.prototype.isFramebufferTexture = !0;
var wo = class extends ce {
  constructor(t, e, n, i, r, a, o, l, c, h, u, d) {
    (super(null, a, o, l, c, h, i, r, u, d),
      (this.image = { width: e, height: n }),
      (this.mipmaps = t),
      (this.flipY = !1),
      (this.generateMipmaps = !1));
  }
};
wo.prototype.isCompressedTexture = !0;
var Mo = class extends ce {
  constructor(t, e, n, i, r, a, o, l, c) {
    (super(t, e, n, i, r, a, o, l, c), (this.needsUpdate = !0));
  }
};
Mo.prototype.isCanvasTexture = !0;
var Ls = class s extends Nt {
    constructor(t = 1, e = 8, n = 0, i = 2 * Math.PI) {
      (super(),
        (this.type = "CircleGeometry"),
        (this.parameters = {
          radius: t,
          segments: e,
          thetaStart: n,
          thetaLength: i,
        }),
        (e = Math.max(3, e)));
      let r = [],
        a = [],
        o = [],
        l = [],
        c = new b(),
        h = new q();
      (a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5));
      for (let u = 0, d = 3; u <= e; u++, d += 3) {
        let f = n + (u / e) * i;
        ((c.x = t * Math.cos(f)),
          (c.y = t * Math.sin(f)),
          a.push(c.x, c.y, c.z),
          o.push(0, 0, 1),
          (h.x = (a[d] / t + 1) / 2),
          (h.y = (a[d + 1] / t + 1) / 2),
          l.push(h.x, h.y));
      }
      for (let u = 1; u <= e; u++) r.push(u, u + 1, 0);
      (this.setIndex(r),
        this.setAttribute("position", new xt(a, 3)),
        this.setAttribute("normal", new xt(o, 3)),
        this.setAttribute("uv", new xt(l, 2)));
    }
    static fromJSON(t) {
      return new s(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  gr = class s extends Nt {
    constructor(
      t = 1,
      e = 1,
      n = 1,
      i = 8,
      r = 1,
      a = !1,
      o = 0,
      l = 2 * Math.PI,
    ) {
      (super(),
        (this.type = "CylinderGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: n,
          radialSegments: i,
          heightSegments: r,
          openEnded: a,
          thetaStart: o,
          thetaLength: l,
        }));
      let c = this;
      ((i = Math.floor(i)), (r = Math.floor(r)));
      let h = [],
        u = [],
        d = [],
        f = [],
        g = 0,
        v = [],
        x = n / 2,
        m = 0;
      (p(),
        a === !1 && (t > 0 && _(!0), e > 0 && _(!1)),
        this.setIndex(h),
        this.setAttribute("position", new xt(u, 3)),
        this.setAttribute("normal", new xt(d, 3)),
        this.setAttribute("uv", new xt(f, 2)));
      function p() {
        let y = new b(),
          w = new b(),
          A = 0,
          L = (e - t) / n;
        for (let I = 0; I <= r; I++) {
          let G = [],
            O = I / r,
            P = O * (e - t) + t;
          for (let M = 0; M <= i; M++) {
            let E = M / i,
              D = E * l + o,
              B = Math.sin(D),
              z = Math.cos(D);
            ((w.x = P * B),
              (w.y = -O * n + x),
              (w.z = P * z),
              u.push(w.x, w.y, w.z),
              y.set(B, L, z).normalize(),
              d.push(y.x, y.y, y.z),
              f.push(E, 1 - O),
              G.push(g++));
          }
          v.push(G);
        }
        for (let I = 0; I < i; I++)
          for (let G = 0; G < r; G++) {
            let O = v[G][I],
              P = v[G + 1][I],
              M = v[G + 1][I + 1],
              E = v[G][I + 1];
            (h.push(O, P, E), h.push(P, M, E), (A += 6));
          }
        (c.addGroup(m, A, 0), (m += A));
      }
      function _(y) {
        let w = g,
          A = new q(),
          L = new b(),
          I = 0,
          G = y === !0 ? t : e,
          O = y === !0 ? 1 : -1;
        for (let M = 1; M <= i; M++)
          (u.push(0, x * O, 0), d.push(0, O, 0), f.push(0.5, 0.5), g++);
        let P = g;
        for (let M = 0; M <= i; M++) {
          let D = (M / i) * l + o,
            B = Math.cos(D),
            z = Math.sin(D);
          ((L.x = G * z),
            (L.y = x * O),
            (L.z = G * B),
            u.push(L.x, L.y, L.z),
            d.push(0, O, 0),
            (A.x = 0.5 * B + 0.5),
            (A.y = 0.5 * z * O + 0.5),
            f.push(A.x, A.y),
            g++);
        }
        for (let M = 0; M < i; M++) {
          let E = w + M,
            D = P + M;
          (y === !0 ? h.push(D, D + 1, E) : h.push(D + 1, D, E), (I += 3));
        }
        (c.addGroup(m, I, y === !0 ? 1 : 2), (m += I));
      }
    }
    static fromJSON(t) {
      return new s(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Cs = class s extends gr {
    constructor(t = 1, e = 1, n = 8, i = 1, r = !1, a = 0, o = 2 * Math.PI) {
      (super(0, t, e, n, i, r, a, o),
        (this.type = "ConeGeometry"),
        (this.parameters = {
          radius: t,
          height: e,
          radialSegments: n,
          heightSegments: i,
          openEnded: r,
          thetaStart: a,
          thetaLength: o,
        }));
    }
    static fromJSON(t) {
      return new s(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  wn = class s extends Nt {
    constructor(t = [], e = [], n = 1, i = 0) {
      (super(),
        (this.type = "PolyhedronGeometry"),
        (this.parameters = { vertices: t, indices: e, radius: n, detail: i }));
      let r = [],
        a = [];
      (o(i),
        c(n),
        h(),
        this.setAttribute("position", new xt(r, 3)),
        this.setAttribute("normal", new xt(r.slice(), 3)),
        this.setAttribute("uv", new xt(a, 2)),
        i === 0 ? this.computeVertexNormals() : this.normalizeNormals());
      function o(p) {
        let _ = new b(),
          y = new b(),
          w = new b();
        for (let A = 0; A < e.length; A += 3)
          (f(e[A + 0], _), f(e[A + 1], y), f(e[A + 2], w), l(_, y, w, p));
      }
      function l(p, _, y, w) {
        let A = w + 1,
          L = [];
        for (let I = 0; I <= A; I++) {
          L[I] = [];
          let G = p.clone().lerp(y, I / A),
            O = _.clone().lerp(y, I / A),
            P = A - I;
          for (let M = 0; M <= P; M++)
            L[I][M] = M === 0 && I === A ? G : G.clone().lerp(O, M / P);
        }
        for (let I = 0; I < A; I++)
          for (let G = 0; G < 2 * (A - I) - 1; G++) {
            let O = Math.floor(G / 2);
            G % 2 === 0
              ? (d(L[I][O + 1]), d(L[I + 1][O]), d(L[I][O]))
              : (d(L[I][O + 1]), d(L[I + 1][O + 1]), d(L[I + 1][O]));
          }
      }
      function c(p) {
        let _ = new b();
        for (let y = 0; y < r.length; y += 3)
          ((_.x = r[y + 0]),
            (_.y = r[y + 1]),
            (_.z = r[y + 2]),
            _.normalize().multiplyScalar(p),
            (r[y + 0] = _.x),
            (r[y + 1] = _.y),
            (r[y + 2] = _.z));
      }
      function h() {
        let p = new b();
        for (let _ = 0; _ < r.length; _ += 3) {
          ((p.x = r[_ + 0]), (p.y = r[_ + 1]), (p.z = r[_ + 2]));
          let y = x(p) / 2 / Math.PI + 0.5,
            w = m(p) / Math.PI + 0.5;
          a.push(y, 1 - w);
        }
        (g(), u());
      }
      function u() {
        for (let p = 0; p < a.length; p += 6) {
          let _ = a[p + 0],
            y = a[p + 2],
            w = a[p + 4],
            A = Math.max(_, y, w),
            L = Math.min(_, y, w);
          A > 0.9 &&
            L < 0.1 &&
            (_ < 0.2 && (a[p + 0] += 1),
            y < 0.2 && (a[p + 2] += 1),
            w < 0.2 && (a[p + 4] += 1));
        }
      }
      function d(p) {
        r.push(p.x, p.y, p.z);
      }
      function f(p, _) {
        let y = 3 * p;
        ((_.x = t[y + 0]), (_.y = t[y + 1]), (_.z = t[y + 2]));
      }
      function g() {
        let p = new b(),
          _ = new b(),
          y = new b(),
          w = new b(),
          A = new q(),
          L = new q(),
          I = new q();
        for (let G = 0, O = 0; G < r.length; G += 9, O += 6) {
          (p.set(r[G + 0], r[G + 1], r[G + 2]),
            _.set(r[G + 3], r[G + 4], r[G + 5]),
            y.set(r[G + 6], r[G + 7], r[G + 8]),
            A.set(a[O + 0], a[O + 1]),
            L.set(a[O + 2], a[O + 3]),
            I.set(a[O + 4], a[O + 5]),
            w.copy(p).add(_).add(y).divideScalar(3));
          let P = x(w);
          (v(A, O + 0, p, P), v(L, O + 2, _, P), v(I, O + 4, y, P));
        }
      }
      function v(p, _, y, w) {
        (w < 0 && p.x === 1 && (a[_] = p.x - 1),
          y.x === 0 && y.z === 0 && (a[_] = w / 2 / Math.PI + 0.5));
      }
      function x(p) {
        return Math.atan2(p.z, -p.x);
      }
      function m(p) {
        return Math.atan2(-p.y, Math.sqrt(p.x * p.x + p.z * p.z));
      }
    }
    static fromJSON(t) {
      return new s(t.vertices, t.indices, t.radius, t.details);
    }
  },
  Ps = class s extends wn {
    constructor(t = 1, e = 0) {
      let n = (1 + Math.sqrt(5)) / 2,
        i = 1 / n,
        r = [
          -1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          1,
          1,
          1,
          0,
          -i,
          -n,
          0,
          -i,
          n,
          0,
          i,
          -n,
          0,
          i,
          n,
          -i,
          -n,
          0,
          -i,
          n,
          0,
          i,
          -n,
          0,
          i,
          n,
          0,
          -n,
          0,
          -i,
          n,
          0,
          -i,
          -n,
          0,
          i,
          n,
          0,
          i,
        ],
        a = [
          3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4,
          8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1,
          18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2,
          3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8,
          11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1,
          12, 14, 1, 14, 5, 1, 5, 9,
        ];
      (super(r, a, t, e),
        (this.type = "DodecahedronGeometry"),
        (this.parameters = { radius: t, detail: e }));
    }
    static fromJSON(t) {
      return new s(t.radius, t.detail);
    }
  },
  os = new b(),
  ls = new b(),
  Wa = new b(),
  cs = new pe(),
  So = class extends Nt {
    constructor(t = null, e = 1) {
      if (
        (super(),
        (this.type = "EdgesGeometry"),
        (this.parameters = { geometry: t, thresholdAngle: e }),
        t !== null)
      ) {
        let i = Math.pow(10, 4),
          r = Math.cos(gi * e),
          a = t.getIndex(),
          o = t.getAttribute("position"),
          l = a ? a.count : o.count,
          c = [0, 0, 0],
          h = ["a", "b", "c"],
          u = new Array(3),
          d = {},
          f = [];
        for (let g = 0; g < l; g += 3) {
          a
            ? ((c[0] = a.getX(g)),
              (c[1] = a.getX(g + 1)),
              (c[2] = a.getX(g + 2)))
            : ((c[0] = g), (c[1] = g + 1), (c[2] = g + 2));
          let { a: v, b: x, c: m } = cs;
          if (
            (v.fromBufferAttribute(o, c[0]),
            x.fromBufferAttribute(o, c[1]),
            m.fromBufferAttribute(o, c[2]),
            cs.getNormal(Wa),
            (u[0] = `${Math.round(v.x * i)},${Math.round(v.y * i)},${Math.round(v.z * i)}`),
            (u[1] = `${Math.round(x.x * i)},${Math.round(x.y * i)},${Math.round(x.z * i)}`),
            (u[2] = `${Math.round(m.x * i)},${Math.round(m.y * i)},${Math.round(m.z * i)}`),
            u[0] !== u[1] && u[1] !== u[2] && u[2] !== u[0])
          )
            for (let p = 0; p < 3; p++) {
              let _ = (p + 1) % 3,
                y = u[p],
                w = u[_],
                A = cs[h[p]],
                L = cs[h[_]],
                I = `${y}_${w}`,
                G = `${w}_${y}`;
              G in d && d[G]
                ? (Wa.dot(d[G].normal) <= r &&
                    (f.push(A.x, A.y, A.z), f.push(L.x, L.y, L.z)),
                  (d[G] = null))
                : I in d ||
                  (d[I] = { index0: c[p], index1: c[_], normal: Wa.clone() });
            }
        }
        for (let g in d)
          if (d[g]) {
            let { index0: v, index1: x } = d[g];
            (os.fromBufferAttribute(o, v),
              ls.fromBufferAttribute(o, x),
              f.push(os.x, os.y, os.z),
              f.push(ls.x, ls.y, ls.z));
          }
        this.setAttribute("position", new xt(f, 3));
      }
    }
  },
  be = class {
    constructor() {
      ((this.type = "Curve"), (this.arcLengthDivisions = 200));
    }
    getPoint() {
      return (console.warn("THREE.Curve: .getPoint() not implemented."), null);
    }
    getPointAt(t, e) {
      let n = this.getUtoTmapping(t);
      return this.getPoint(n, e);
    }
    getPoints(t = 5) {
      let e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return e;
    }
    getSpacedPoints(t = 5) {
      let e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
      return e;
    }
    getLength() {
      let t = this.getLengths();
      return t[t.length - 1];
    }
    getLengths(t = this.arcLengthDivisions) {
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === t + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      let e = [],
        n,
        i = this.getPoint(0),
        r = 0;
      e.push(0);
      for (let a = 1; a <= t; a++)
        ((n = this.getPoint(a / t)),
          (r += n.distanceTo(i)),
          e.push(r),
          (i = n));
      return ((this.cacheArcLengths = e), e);
    }
    updateArcLengths() {
      ((this.needsUpdate = !0), this.getLengths());
    }
    getUtoTmapping(t, e) {
      let n = this.getLengths(),
        i = 0,
        r = n.length,
        a;
      a = e || t * n[r - 1];
      let o,
        l = 0,
        c = r - 1;
      for (; l <= c; )
        if (((i = Math.floor(l + (c - l) / 2)), (o = n[i] - a), o < 0))
          l = i + 1;
        else {
          if (!(o > 0)) {
            c = i;
            break;
          }
          c = i - 1;
        }
      if (((i = c), n[i] === a)) return i / (r - 1);
      let h = n[i],
        d = n[i + 1] - h,
        f = (a - h) / d;
      return (i + f) / (r - 1);
    }
    getTangent(t, e) {
      let i = t - 1e-4,
        r = t + 1e-4;
      (i < 0 && (i = 0), r > 1 && (r = 1));
      let a = this.getPoint(i),
        o = this.getPoint(r),
        l = e || (a.isVector2 ? new q() : new b());
      return (l.copy(o).sub(a).normalize(), l);
    }
    getTangentAt(t, e) {
      let n = this.getUtoTmapping(t);
      return this.getTangent(n, e);
    }
    computeFrenetFrames(t, e) {
      let n = new b(),
        i = [],
        r = [],
        a = [],
        o = new b(),
        l = new mt();
      for (let f = 0; f <= t; f++) {
        let g = f / t;
        i[f] = this.getTangentAt(g, new b());
      }
      ((r[0] = new b()), (a[0] = new b()));
      let c = Number.MAX_VALUE,
        h = Math.abs(i[0].x),
        u = Math.abs(i[0].y),
        d = Math.abs(i[0].z);
      (h <= c && ((c = h), n.set(1, 0, 0)),
        u <= c && ((c = u), n.set(0, 1, 0)),
        d <= c && n.set(0, 0, 1),
        o.crossVectors(i[0], n).normalize(),
        r[0].crossVectors(i[0], o),
        a[0].crossVectors(i[0], r[0]));
      for (let f = 1; f <= t; f++) {
        if (
          ((r[f] = r[f - 1].clone()),
          (a[f] = a[f - 1].clone()),
          o.crossVectors(i[f - 1], i[f]),
          o.length() > Number.EPSILON)
        ) {
          o.normalize();
          let g = Math.acos(de(i[f - 1].dot(i[f]), -1, 1));
          r[f].applyMatrix4(l.makeRotationAxis(o, g));
        }
        a[f].crossVectors(i[f], r[f]);
      }
      if (e === !0) {
        let f = Math.acos(de(r[0].dot(r[t]), -1, 1));
        ((f /= t), i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f));
        for (let g = 1; g <= t; g++)
          (r[g].applyMatrix4(l.makeRotationAxis(i[g], f * g)),
            a[g].crossVectors(i[g], r[g]));
      }
      return { tangents: i, normals: r, binormals: a };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return ((this.arcLengthDivisions = t.arcLengthDivisions), this);
    }
    toJSON() {
      let t = {
        metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
      };
      return (
        (t.arcLengthDivisions = this.arcLengthDivisions),
        (t.type = this.type),
        t
      );
    }
    fromJSON(t) {
      return ((this.arcLengthDivisions = t.arcLengthDivisions), this);
    }
  },
  Ei = class extends be {
    constructor(
      t = 0,
      e = 0,
      n = 1,
      i = 1,
      r = 0,
      a = 2 * Math.PI,
      o = !1,
      l = 0,
    ) {
      (super(),
        (this.type = "EllipseCurve"),
        (this.aX = t),
        (this.aY = e),
        (this.xRadius = n),
        (this.yRadius = i),
        (this.aStartAngle = r),
        (this.aEndAngle = a),
        (this.aClockwise = o),
        (this.aRotation = l));
    }
    getPoint(t, e) {
      let n = e || new q(),
        i = 2 * Math.PI,
        r = this.aEndAngle - this.aStartAngle,
        a = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      (r < Number.EPSILON && (r = a ? 0 : i),
        this.aClockwise !== !0 || a || (r === i ? (r = -i) : (r -= i)));
      let o = this.aStartAngle + t * r,
        l = this.aX + this.xRadius * Math.cos(o),
        c = this.aY + this.yRadius * Math.sin(o);
      if (this.aRotation !== 0) {
        let h = Math.cos(this.aRotation),
          u = Math.sin(this.aRotation),
          d = l - this.aX,
          f = c - this.aY;
        ((l = d * h - f * u + this.aX), (c = d * u + f * h + this.aY));
      }
      return n.set(l, c);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.aX = t.aX),
        (this.aY = t.aY),
        (this.xRadius = t.xRadius),
        (this.yRadius = t.yRadius),
        (this.aStartAngle = t.aStartAngle),
        (this.aEndAngle = t.aEndAngle),
        (this.aClockwise = t.aClockwise),
        (this.aRotation = t.aRotation),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.aX = this.aX),
        (t.aY = this.aY),
        (t.xRadius = this.xRadius),
        (t.yRadius = this.yRadius),
        (t.aStartAngle = this.aStartAngle),
        (t.aEndAngle = this.aEndAngle),
        (t.aClockwise = this.aClockwise),
        (t.aRotation = this.aRotation),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        (this.aX = t.aX),
        (this.aY = t.aY),
        (this.xRadius = t.xRadius),
        (this.yRadius = t.yRadius),
        (this.aStartAngle = t.aStartAngle),
        (this.aEndAngle = t.aEndAngle),
        (this.aClockwise = t.aClockwise),
        (this.aRotation = t.aRotation),
        this
      );
    }
  };
Ei.prototype.isEllipseCurve = !0;
var Is = class extends Ei {
  constructor(t, e, n, i, r, a) {
    (super(t, e, n, n, i, r, a), (this.type = "ArcCurve"));
  }
};
Is.prototype.isArcCurve = !0;
function fl() {
  let s = 0,
    t = 0,
    e = 0,
    n = 0;
  function i(r, a, o, l) {
    ((s = r),
      (t = o),
      (e = -3 * r + 3 * a - 2 * o - l),
      (n = 2 * r - 2 * a + o + l));
  }
  return {
    initCatmullRom: function (r, a, o, l, c) {
      i(a, o, c * (o - r), c * (l - a));
    },
    initNonuniformCatmullRom: function (r, a, o, l, c, h, u) {
      let d = (a - r) / c - (o - r) / (c + h) + (o - a) / h,
        f = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
      ((d *= h), (f *= h), i(a, o, d, f));
    },
    calc: function (r) {
      let a = r * r,
        o = a * r;
      return s + t * r + e * a + n * o;
    },
  };
}
var hs = new b(),
  ja = new fl(),
  qa = new fl(),
  Xa = new fl(),
  Ds = class extends be {
    constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
      (super(),
        (this.type = "CatmullRomCurve3"),
        (this.points = t),
        (this.closed = e),
        (this.curveType = n),
        (this.tension = i));
    }
    getPoint(t, e = new b()) {
      let n = e,
        i = this.points,
        r = i.length,
        a = (r - (this.closed ? 0 : 1)) * t,
        o = Math.floor(a),
        l = a - o;
      this.closed
        ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r)
        : l === 0 && o === r - 1 && ((o = r - 2), (l = 1));
      let c, h;
      this.closed || o > 0
        ? (c = i[(o - 1) % r])
        : (hs.subVectors(i[0], i[1]).add(i[0]), (c = hs));
      let u = i[o % r],
        d = i[(o + 1) % r];
      if (
        (this.closed || o + 2 < r
          ? (h = i[(o + 2) % r])
          : (hs.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (h = hs)),
        this.curveType === "centripetal" || this.curveType === "chordal")
      ) {
        let f = this.curveType === "chordal" ? 0.5 : 0.25,
          g = Math.pow(c.distanceToSquared(u), f),
          v = Math.pow(u.distanceToSquared(d), f),
          x = Math.pow(d.distanceToSquared(h), f);
        (v < 1e-4 && (v = 1),
          g < 1e-4 && (g = v),
          x < 1e-4 && (x = v),
          ja.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, g, v, x),
          qa.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, g, v, x),
          Xa.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, g, v, x));
      } else
        this.curveType === "catmullrom" &&
          (ja.initCatmullRom(c.x, u.x, d.x, h.x, this.tension),
          qa.initCatmullRom(c.y, u.y, d.y, h.y, this.tension),
          Xa.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
      return (n.set(ja.calc(l), qa.calc(l), Xa.calc(l)), n);
    }
    copy(t) {
      (super.copy(t), (this.points = []));
      for (let e = 0, n = t.points.length; e < n; e++) {
        let i = t.points[e];
        this.points.push(i.clone());
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        let i = this.points[e];
        t.points.push(i.toArray());
      }
      return (
        (t.closed = this.closed),
        (t.curveType = this.curveType),
        (t.tension = this.tension),
        t
      );
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.points = []));
      for (let e = 0, n = t.points.length; e < n; e++) {
        let i = t.points[e];
        this.points.push(new b().fromArray(i));
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
  };
Ds.prototype.isCatmullRomCurve3 = !0;
function Bc(s, t, e, n, i) {
  let r = 0.5 * (n - t),
    a = 0.5 * (i - e),
    o = s * s,
    l = s * o;
  return (
    (2 * e - 2 * n + r + a) * l + (-3 * e + 3 * n - 2 * r - a) * o + r * s + e
  );
}
function e0(s, t) {
  let e = 1 - s;
  return e * e * t;
}
function n0(s, t) {
  return 2 * (1 - s) * s * t;
}
function i0(s, t) {
  return s * s * t;
}
function Qi(s, t, e, n) {
  return e0(s, t) + n0(s, e) + i0(s, n);
}
function r0(s, t) {
  let e = 1 - s;
  return e * e * e * t;
}
function s0(s, t) {
  let e = 1 - s;
  return 3 * e * e * s * t;
}
function a0(s, t) {
  return 3 * (1 - s) * s * s * t;
}
function o0(s, t) {
  return s * s * s * t;
}
function $i(s, t, e, n, i) {
  return r0(s, t) + s0(s, e) + a0(s, n) + o0(s, i);
}
var vr = class extends be {
  constructor(t = new q(), e = new q(), n = new q(), i = new q()) {
    (super(),
      (this.type = "CubicBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i));
  }
  getPoint(t, e = new q()) {
    let n = e,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return (n.set($i(t, i.x, r.x, a.x, o.x), $i(t, i.y, r.y, a.y, o.y)), n);
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    let t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
};
vr.prototype.isCubicBezierCurve = !0;
var zs = class extends be {
  constructor(t = new b(), e = new b(), n = new b(), i = new b()) {
    (super(),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i));
  }
  getPoint(t, e = new b()) {
    let n = e,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      n.set(
        $i(t, i.x, r.x, a.x, o.x),
        $i(t, i.y, r.y, a.y, o.y),
        $i(t, i.z, r.z, a.z, o.z),
      ),
      n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    let t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
};
zs.prototype.isCubicBezierCurve3 = !0;
var Ai = class extends be {
  constructor(t = new q(), e = new q()) {
    (super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e));
  }
  getPoint(t, e = new q()) {
    let n = e;
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e) {
    let n = e || new q();
    return (n.copy(this.v2).sub(this.v1).normalize(), n);
  }
  copy(t) {
    return (super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this);
  }
  toJSON() {
    let t = super.toJSON();
    return ((t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t);
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
};
Ai.prototype.isLineCurve = !0;
var To = class extends be {
    constructor(t = new b(), e = new b()) {
      (super(),
        (this.type = "LineCurve3"),
        (this.isLineCurve3 = !0),
        (this.v1 = t),
        (this.v2 = e));
    }
    getPoint(t, e = new b()) {
      let n = e;
      return (
        t === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
        n
      );
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    copy(t) {
      return (super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this);
    }
    toJSON() {
      let t = super.toJSON();
      return ((t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t);
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  yr = class extends be {
    constructor(t = new q(), e = new q(), n = new q()) {
      (super(),
        (this.type = "QuadraticBezierCurve"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n));
    }
    getPoint(t, e = new q()) {
      let n = e,
        i = this.v0,
        r = this.v1,
        a = this.v2;
      return (n.set(Qi(t, i.x, r.x, a.x), Qi(t, i.y, r.y, a.y)), n);
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  };
yr.prototype.isQuadraticBezierCurve = !0;
var xr = class extends be {
  constructor(t = new b(), e = new b(), n = new b()) {
    (super(),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n));
  }
  getPoint(t, e = new b()) {
    let n = e,
      i = this.v0,
      r = this.v1,
      a = this.v2;
    return (
      n.set(Qi(t, i.x, r.x, a.x), Qi(t, i.y, r.y, a.y), Qi(t, i.z, r.z, a.z)),
      n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    let t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
};
xr.prototype.isQuadraticBezierCurve3 = !0;
var _r = class extends be {
  constructor(t = []) {
    (super(), (this.type = "SplineCurve"), (this.points = t));
  }
  getPoint(t, e = new q()) {
    let n = e,
      i = this.points,
      r = (i.length - 1) * t,
      a = Math.floor(r),
      o = r - a,
      l = i[a === 0 ? a : a - 1],
      c = i[a],
      h = i[a > i.length - 2 ? i.length - 1 : a + 1],
      u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return (n.set(Bc(o, l.x, c.x, h.x, u.x), Bc(o, l.y, c.y, h.y, u.y)), n);
  }
  copy(t) {
    (super.copy(t), (this.points = []));
    for (let e = 0, n = t.points.length; e < n; e++) {
      let i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      let i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    (super.fromJSON(t), (this.points = []));
    for (let e = 0, n = t.points.length; e < n; e++) {
      let i = t.points[e];
      this.points.push(new q().fromArray(i));
    }
    return this;
  }
};
_r.prototype.isSplineCurve = !0;
var ml = Object.freeze({
    __proto__: null,
    ArcCurve: Is,
    CatmullRomCurve3: Ds,
    CubicBezierCurve: vr,
    CubicBezierCurve3: zs,
    EllipseCurve: Ei,
    LineCurve: Ai,
    LineCurve3: To,
    QuadraticBezierCurve: yr,
    QuadraticBezierCurve3: xr,
    SplineCurve: _r,
  }),
  Eo = class extends be {
    constructor() {
      (super(),
        (this.type = "CurvePath"),
        (this.curves = []),
        (this.autoClose = !1));
    }
    add(t) {
      this.curves.push(t);
    }
    closePath() {
      let t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new Ai(e, t));
    }
    getPoint(t, e) {
      let n = t * this.getLength(),
        i = this.getCurveLengths(),
        r = 0;
      for (; r < i.length; ) {
        if (i[r] >= n) {
          let a = i[r] - n,
            o = this.curves[r],
            l = o.getLength(),
            c = l === 0 ? 0 : 1 - a / l;
          return o.getPointAt(c, e);
        }
        r++;
      }
      return null;
    }
    getLength() {
      let t = this.getCurveLengths();
      return t[t.length - 1];
    }
    updateArcLengths() {
      ((this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths());
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      let t = [],
        e = 0;
      for (let n = 0, i = this.curves.length; n < i; n++)
        ((e += this.curves[n].getLength()), t.push(e));
      return ((this.cacheLengths = t), t);
    }
    getSpacedPoints(t = 40) {
      let e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return (this.autoClose && e.push(e[0]), e);
    }
    getPoints(t = 12) {
      let e = [],
        n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        let a = r[i],
          o =
            a && a.isEllipseCurve
              ? 2 * t
              : a && (a.isLineCurve || a.isLineCurve3)
                ? 1
                : a && a.isSplineCurve
                  ? t * a.points.length
                  : t,
          l = a.getPoints(o);
        for (let c = 0; c < l.length; c++) {
          let h = l[c];
          (!n || !n.equals(h)) && (e.push(h), (n = h));
        }
      }
      return (
        this.autoClose &&
          e.length > 1 &&
          !e[e.length - 1].equals(e[0]) &&
          e.push(e[0]),
        e
      );
    }
    copy(t) {
      (super.copy(t), (this.curves = []));
      for (let e = 0, n = t.curves.length; e < n; e++) {
        let i = t.curves[e];
        this.curves.push(i.clone());
      }
      return ((this.autoClose = t.autoClose), this);
    }
    toJSON() {
      let t = super.toJSON();
      ((t.autoClose = this.autoClose), (t.curves = []));
      for (let e = 0, n = this.curves.length; e < n; e++) {
        let i = this.curves[e];
        t.curves.push(i.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []));
      for (let e = 0, n = t.curves.length; e < n; e++) {
        let i = t.curves[e];
        this.curves.push(new ml[i.type]().fromJSON(i));
      }
      return this;
    }
  },
  br = class extends Eo {
    constructor(t) {
      (super(),
        (this.type = "Path"),
        (this.currentPoint = new q()),
        t && this.setFromPoints(t));
    }
    setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);
      for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
      return this;
    }
    moveTo(t, e) {
      return (this.currentPoint.set(t, e), this);
    }
    lineTo(t, e) {
      let n = new Ai(this.currentPoint.clone(), new q(t, e));
      return (this.curves.push(n), this.currentPoint.set(t, e), this);
    }
    quadraticCurveTo(t, e, n, i) {
      let r = new yr(this.currentPoint.clone(), new q(t, e), new q(n, i));
      return (this.curves.push(r), this.currentPoint.set(n, i), this);
    }
    bezierCurveTo(t, e, n, i, r, a) {
      let o = new vr(
        this.currentPoint.clone(),
        new q(t, e),
        new q(n, i),
        new q(r, a),
      );
      return (this.curves.push(o), this.currentPoint.set(r, a), this);
    }
    splineThru(t) {
      let e = [this.currentPoint.clone()].concat(t),
        n = new _r(e);
      return (
        this.curves.push(n),
        this.currentPoint.copy(t[t.length - 1]),
        this
      );
    }
    arc(t, e, n, i, r, a) {
      let o = this.currentPoint.x,
        l = this.currentPoint.y;
      return (this.absarc(t + o, e + l, n, i, r, a), this);
    }
    absarc(t, e, n, i, r, a) {
      return (this.absellipse(t, e, n, n, i, r, a), this);
    }
    ellipse(t, e, n, i, r, a, o, l) {
      let c = this.currentPoint.x,
        h = this.currentPoint.y;
      return (this.absellipse(t + c, e + h, n, i, r, a, o, l), this);
    }
    absellipse(t, e, n, i, r, a, o, l) {
      let c = new Ei(t, e, n, i, r, a, o, l);
      if (this.curves.length > 0) {
        let u = c.getPoint(0);
        u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
      }
      this.curves.push(c);
      let h = c.getPoint(1);
      return (this.currentPoint.copy(h), this);
    }
    copy(t) {
      return (super.copy(t), this.currentPoint.copy(t.currentPoint), this);
    }
    toJSON() {
      let t = super.toJSON();
      return ((t.currentPoint = this.currentPoint.toArray()), t);
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.currentPoint.fromArray(t.currentPoint),
        this
      );
    }
  },
  Gn = class extends br {
    constructor(t) {
      (super(t), (this.uuid = Ee()), (this.type = "Shape"), (this.holes = []));
    }
    getPointsHoles(t) {
      let e = [];
      for (let n = 0, i = this.holes.length; n < i; n++)
        e[n] = this.holes[n].getPoints(t);
      return e;
    }
    extractPoints(t) {
      return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
    }
    copy(t) {
      (super.copy(t), (this.holes = []));
      for (let e = 0, n = t.holes.length; e < n; e++) {
        let i = t.holes[e];
        this.holes.push(i.clone());
      }
      return this;
    }
    toJSON() {
      let t = super.toJSON();
      ((t.uuid = this.uuid), (t.holes = []));
      for (let e = 0, n = this.holes.length; e < n; e++) {
        let i = this.holes[e];
        t.holes.push(i.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []));
      for (let e = 0, n = t.holes.length; e < n; e++) {
        let i = t.holes[e];
        this.holes.push(new br().fromJSON(i));
      }
      return this;
    }
  },
  l0 = {
    triangulate: function (s, t, e = 2) {
      let n = t && t.length,
        i = n ? t[0] * e : s.length,
        r = vh(s, 0, i, e, !0),
        a = [];
      if (!r || r.next === r.prev) return a;
      let o, l, c, h, u, d, f;
      if ((n && (r = p0(s, t, r, e)), s.length > 80 * e)) {
        ((o = c = s[0]), (l = h = s[1]));
        for (let g = e; g < i; g += e)
          ((u = s[g]),
            (d = s[g + 1]),
            u < o && (o = u),
            d < l && (l = d),
            u > c && (c = u),
            d > h && (h = d));
        ((f = Math.max(c - o, h - l)), (f = f !== 0 ? 1 / f : 0));
      }
      return (wr(r, a, e, o, l, f), a);
    },
  };
function vh(s, t, e, n, i) {
  let r, a;
  if (i === S0(s, t, e, n) > 0)
    for (r = t; r < e; r += n) a = Uc(r, s[r], s[r + 1], a);
  else for (r = e - n; r >= t; r -= n) a = Uc(r, s[r], s[r + 1], a);
  return (a && ua(a, a.next) && (Sr(a), (a = a.next)), a);
}
function Mn(s, t) {
  if (!s) return s;
  t || (t = s);
  let e,
    n = s;
  do
    if (
      ((e = !1), n.steiner || (!ua(n, n.next) && Yt(n.prev, n, n.next) !== 0))
    )
      n = n.next;
    else {
      if ((Sr(n), (n = t = n.prev), n === n.next)) break;
      e = !0;
    }
  while (e || n !== t);
  return t;
}
function wr(s, t, e, n, i, r, a) {
  if (!s) return;
  !a && r && y0(s, n, i, r);
  let o,
    l,
    c = s;
  for (; s.prev !== s.next; )
    if (((o = s.prev), (l = s.next), r ? h0(s, n, i, r) : c0(s)))
      (t.push(o.i / e),
        t.push(s.i / e),
        t.push(l.i / e),
        Sr(s),
        (s = l.next),
        (c = l.next));
    else if (((s = l), s === c)) {
      a
        ? a === 1
          ? ((s = u0(Mn(s), t, e)), wr(s, t, e, n, i, r, 2))
          : a === 2 && d0(s, t, e, n, i, r)
        : wr(Mn(s), t, e, n, i, r, 1);
      break;
    }
}
function c0(s) {
  let t = s.prev,
    e = s,
    n = s.next;
  if (Yt(t, e, n) >= 0) return !1;
  let i = s.next.next;
  for (; i !== s.prev; ) {
    if (
      fi(t.x, t.y, e.x, e.y, n.x, n.y, i.x, i.y) &&
      Yt(i.prev, i, i.next) >= 0
    )
      return !1;
    i = i.next;
  }
  return !0;
}
function h0(s, t, e, n) {
  let i = s.prev,
    r = s,
    a = s.next;
  if (Yt(i, r, a) >= 0) return !1;
  let o = i.x < r.x ? (i.x < a.x ? i.x : a.x) : r.x < a.x ? r.x : a.x,
    l = i.y < r.y ? (i.y < a.y ? i.y : a.y) : r.y < a.y ? r.y : a.y,
    c = i.x > r.x ? (i.x > a.x ? i.x : a.x) : r.x > a.x ? r.x : a.x,
    h = i.y > r.y ? (i.y > a.y ? i.y : a.y) : r.y > a.y ? r.y : a.y,
    u = Ao(o, l, t, e, n),
    d = Ao(c, h, t, e, n),
    f = s.prevZ,
    g = s.nextZ;
  for (; f && f.z >= u && g && g.z <= d; ) {
    if (
      (f !== s.prev &&
        f !== s.next &&
        fi(i.x, i.y, r.x, r.y, a.x, a.y, f.x, f.y) &&
        Yt(f.prev, f, f.next) >= 0) ||
      ((f = f.prevZ),
      g !== s.prev &&
        g !== s.next &&
        fi(i.x, i.y, r.x, r.y, a.x, a.y, g.x, g.y) &&
        Yt(g.prev, g, g.next) >= 0)
    )
      return !1;
    g = g.nextZ;
  }
  for (; f && f.z >= u; ) {
    if (
      f !== s.prev &&
      f !== s.next &&
      fi(i.x, i.y, r.x, r.y, a.x, a.y, f.x, f.y) &&
      Yt(f.prev, f, f.next) >= 0
    )
      return !1;
    f = f.prevZ;
  }
  for (; g && g.z <= d; ) {
    if (
      g !== s.prev &&
      g !== s.next &&
      fi(i.x, i.y, r.x, r.y, a.x, a.y, g.x, g.y) &&
      Yt(g.prev, g, g.next) >= 0
    )
      return !1;
    g = g.nextZ;
  }
  return !0;
}
function u0(s, t, e) {
  let n = s;
  do {
    let i = n.prev,
      r = n.next.next;
    (!ua(i, r) &&
      yh(i, n, n.next, r) &&
      Mr(i, r) &&
      Mr(r, i) &&
      (t.push(i.i / e),
      t.push(n.i / e),
      t.push(r.i / e),
      Sr(n),
      Sr(n.next),
      (n = s = r)),
      (n = n.next));
  } while (n !== s);
  return Mn(n);
}
function d0(s, t, e, n, i, r) {
  let a = s;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && b0(a, o)) {
        let l = xh(a, o);
        ((a = Mn(a, a.next)),
          (l = Mn(l, l.next)),
          wr(a, t, e, n, i, r),
          wr(l, t, e, n, i, r));
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== s);
}
function p0(s, t, e, n) {
  let i = [],
    r,
    a,
    o,
    l,
    c;
  for (r = 0, a = t.length; r < a; r++)
    ((o = t[r] * n),
      (l = r < a - 1 ? t[r + 1] * n : s.length),
      (c = vh(s, o, l, n, !1)),
      c === c.next && (c.steiner = !0),
      i.push(_0(c)));
  for (i.sort(f0), r = 0; r < i.length; r++) (m0(i[r], e), (e = Mn(e, e.next)));
  return e;
}
function f0(s, t) {
  return s.x - t.x;
}
function m0(s, t) {
  if (((t = g0(s, t)), t)) {
    let e = xh(t, s);
    (Mn(t, t.next), Mn(e, e.next));
  }
}
function g0(s, t) {
  let e = t,
    n = s.x,
    i = s.y,
    r,
    a = -1 / 0;
  do {
    if (i <= e.y && i >= e.next.y && e.next.y !== e.y) {
      let d = e.x + ((i - e.y) * (e.next.x - e.x)) / (e.next.y - e.y);
      if (d <= n && d > a) {
        if (((a = d), d === n)) {
          if (i === e.y) return e;
          if (i === e.next.y) return e.next;
        }
        r = e.x < e.next.x ? e : e.next;
      }
    }
    e = e.next;
  } while (e !== t);
  if (!r) return null;
  if (n === a) return r;
  let o = r,
    l = r.x,
    c = r.y,
    h,
    u = 1 / 0;
  e = r;
  do
    (n >= e.x &&
      e.x >= l &&
      n !== e.x &&
      fi(i < c ? n : a, i, l, c, i < c ? a : n, i, e.x, e.y) &&
      ((h = Math.abs(i - e.y) / (n - e.x)),
      Mr(e, s) &&
        (h < u || (h === u && (e.x > r.x || (e.x === r.x && v0(r, e))))) &&
        ((r = e), (u = h))),
      (e = e.next));
  while (e !== o);
  return r;
}
function v0(s, t) {
  return Yt(s.prev, s, t.prev) < 0 && Yt(t.next, s, s.next) < 0;
}
function y0(s, t, e, n) {
  let i = s;
  do
    (i.z === null && (i.z = Ao(i.x, i.y, t, e, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next));
  while (i !== s);
  ((i.prevZ.nextZ = null), (i.prevZ = null), x0(i));
}
function x0(s) {
  let t,
    e,
    n,
    i,
    r,
    a,
    o,
    l,
    c = 1;
  do {
    for (e = s, s = null, r = null, a = 0; e; ) {
      for (a++, n = e, o = 0, t = 0; t < c && (o++, (n = n.nextZ), !!n); t++);
      for (l = c; o > 0 || (l > 0 && n); )
        (o !== 0 && (l === 0 || !n || e.z <= n.z)
          ? ((i = e), (e = e.nextZ), o--)
          : ((i = n), (n = n.nextZ), l--),
          r ? (r.nextZ = i) : (s = i),
          (i.prevZ = r),
          (r = i));
      e = n;
    }
    ((r.nextZ = null), (c *= 2));
  } while (a > 1);
  return s;
}
function Ao(s, t, e, n, i) {
  return (
    (s = 32767 * (s - e) * i),
    (t = 32767 * (t - n) * i),
    (s = 16711935 & (s | (s << 8))),
    (s = 252645135 & (s | (s << 4))),
    (s = 858993459 & (s | (s << 2))),
    (s = 1431655765 & (s | (s << 1))),
    (t = 16711935 & (t | (t << 8))),
    (t = 252645135 & (t | (t << 4))),
    (t = 858993459 & (t | (t << 2))),
    (t = 1431655765 & (t | (t << 1))),
    s | (t << 1)
  );
}
function _0(s) {
  let t = s,
    e = s;
  do ((t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next));
  while (t !== s);
  return e;
}
function fi(s, t, e, n, i, r, a, o) {
  return (
    (i - a) * (t - o) - (s - a) * (r - o) >= 0 &&
    (s - a) * (n - o) - (e - a) * (t - o) >= 0 &&
    (e - a) * (r - o) - (i - a) * (n - o) >= 0
  );
}
function b0(s, t) {
  return (
    s.next.i !== t.i &&
    s.prev.i !== t.i &&
    !w0(s, t) &&
    ((Mr(s, t) &&
      Mr(t, s) &&
      M0(s, t) &&
      (Yt(s.prev, s, t.prev) || Yt(s, t.prev, t))) ||
      (ua(s, t) && Yt(s.prev, s, s.next) > 0 && Yt(t.prev, t, t.next) > 0))
  );
}
function Yt(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function ua(s, t) {
  return s.x === t.x && s.y === t.y;
}
function yh(s, t, e, n) {
  let i = ds(Yt(s, t, e)),
    r = ds(Yt(s, t, n)),
    a = ds(Yt(e, n, s)),
    o = ds(Yt(e, n, t));
  return (
    (i !== r && a !== o) ||
    !(i !== 0 || !us(s, e, t)) ||
    !(r !== 0 || !us(s, n, t)) ||
    !(a !== 0 || !us(e, s, n)) ||
    !(o !== 0 || !us(e, t, n))
  );
}
function us(s, t, e) {
  return (
    t.x <= Math.max(s.x, e.x) &&
    t.x >= Math.min(s.x, e.x) &&
    t.y <= Math.max(s.y, e.y) &&
    t.y >= Math.min(s.y, e.y)
  );
}
function ds(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function w0(s, t) {
  let e = s;
  do {
    if (
      e.i !== s.i &&
      e.next.i !== s.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      yh(e, e.next, s, t)
    )
      return !0;
    e = e.next;
  } while (e !== s);
  return !1;
}
function Mr(s, t) {
  return Yt(s.prev, s, s.next) < 0
    ? Yt(s, t, s.next) >= 0 && Yt(s, s.prev, t) >= 0
    : Yt(s, t, s.prev) < 0 || Yt(s, s.next, t) < 0;
}
function M0(s, t) {
  let e = s,
    n = !1,
    i = (s.x + t.x) / 2,
    r = (s.y + t.y) / 2;
  do
    (e.y > r != e.next.y > r &&
      e.next.y !== e.y &&
      i < ((e.next.x - e.x) * (r - e.y)) / (e.next.y - e.y) + e.x &&
      (n = !n),
      (e = e.next));
  while (e !== s);
  return n;
}
function xh(s, t) {
  let e = new Ro(s.i, s.x, s.y),
    n = new Ro(t.i, t.x, t.y),
    i = s.next,
    r = t.prev;
  return (
    (s.next = t),
    (t.prev = s),
    (e.next = i),
    (i.prev = e),
    (n.next = e),
    (e.prev = n),
    (r.next = n),
    (n.prev = r),
    n
  );
}
function Uc(s, t, e, n) {
  let i = new Ro(s, t, e);
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function Sr(s) {
  ((s.next.prev = s.prev),
    (s.prev.next = s.next),
    s.prevZ && (s.prevZ.nextZ = s.nextZ),
    s.nextZ && (s.nextZ.prevZ = s.prevZ));
}
function Ro(s, t, e) {
  ((this.i = s),
    (this.x = t),
    (this.y = e),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1));
}
function S0(s, t, e, n) {
  let i = 0;
  for (let r = t, a = e - n; r < e; r += n)
    ((i += (s[a] - s[r]) * (s[r + 1] + s[a + 1])), (a = r));
  return i;
}
var gn = class s {
  static area(t) {
    let e = t.length,
      n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++)
      n += t[i].x * t[r].y - t[r].x * t[i].y;
    return 0.5 * n;
  }
  static isClockWise(t) {
    return s.area(t) < 0;
  }
  static triangulateShape(t, e) {
    let n = [],
      i = [],
      r = [];
    (Hc(t), Gc(n, t));
    let a = t.length;
    e.forEach(Hc);
    for (let l = 0; l < e.length; l++)
      (i.push(a), (a += e[l].length), Gc(n, e[l]));
    let o = l0.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3) r.push(o.slice(l, l + 3));
    return r;
  }
};
function Hc(s) {
  let t = s.length;
  t > 2 && s[t - 1].equals(s[0]) && s.pop();
}
function Gc(s, t) {
  for (let e = 0; e < t.length; e++) (s.push(t[e].x), s.push(t[e].y));
}
var Sn = class s extends Nt {
    constructor(
      t = new Gn([
        new q(0.5, 0.5),
        new q(-0.5, 0.5),
        new q(-0.5, -0.5),
        new q(0.5, -0.5),
      ]),
      e = {},
    ) {
      (super(),
        (this.type = "ExtrudeGeometry"),
        (this.parameters = { shapes: t, options: e }),
        (t = Array.isArray(t) ? t : [t]));
      let n = this,
        i = [],
        r = [];
      for (let o = 0, l = t.length; o < l; o++) {
        let c = t[o];
        a(c);
      }
      (this.setAttribute("position", new xt(i, 3)),
        this.setAttribute("uv", new xt(r, 2)),
        this.computeVertexNormals());
      function a(o) {
        let l = [],
          c = e.curveSegments !== void 0 ? e.curveSegments : 12,
          h = e.steps !== void 0 ? e.steps : 1,
          u = e.depth !== void 0 ? e.depth : 1,
          d = e.bevelEnabled === void 0 || e.bevelEnabled,
          f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2,
          g = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1,
          v = e.bevelOffset !== void 0 ? e.bevelOffset : 0,
          x = e.bevelSegments !== void 0 ? e.bevelSegments : 3,
          m = e.extrudePath,
          p = e.UVGenerator !== void 0 ? e.UVGenerator : T0;
        e.amount !== void 0 &&
          (console.warn(
            "THREE.ExtrudeBufferGeometry: amount has been renamed to depth.",
          ),
          (u = e.amount));
        let _,
          y = !1,
          w,
          A,
          L,
          I;
        (m &&
          ((_ = m.getSpacedPoints(h)),
          (y = !0),
          (d = !1),
          (w = m.computeFrenetFrames(h, !1)),
          (A = new b()),
          (L = new b()),
          (I = new b())),
          d || ((x = 0), (f = 0), (g = 0), (v = 0)));
        let G = o.extractPoints(c),
          O = G.shape,
          P = G.holes;
        if (!gn.isClockWise(O)) {
          O = O.reverse();
          for (let V = 0, Q = P.length; V < Q; V++) {
            let K = P[V];
            gn.isClockWise(K) && (P[V] = K.reverse());
          }
        }
        let E = gn.triangulateShape(O, P),
          D = O;
        for (let V = 0, Q = P.length; V < Q; V++) {
          let K = P[V];
          O = O.concat(K);
        }
        function B(V, Q, K) {
          return (
            Q || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            Q.clone().multiplyScalar(K).add(V)
          );
        }
        let z = O.length,
          U = E.length;
        function nt(V, Q, K) {
          let ht,
            st,
            Mt,
            St = V.x - Q.x,
            Ct = V.y - Q.y,
            Xt = K.x - V.x,
            R = K.y - V.y,
            T = St * St + Ct * Ct,
            X = St * R - Ct * Xt;
          if (Math.abs(X) > Number.EPSILON) {
            let Y = Math.sqrt(T),
              rt = Math.sqrt(Xt * Xt + R * R),
              Z = Q.x - Ct / Y,
              _t = Q.y + St / Y,
              yt = K.x - R / rt,
              et = K.y + Xt / rt,
              C = ((yt - Z) * R - (et - _t) * Xt) / (St * R - Ct * Xt);
            ((ht = Z + St * C - V.x), (st = _t + Ct * C - V.y));
            let tt = ht * ht + st * st;
            if (tt <= 2) return new q(ht, st);
            Mt = Math.sqrt(tt / 2);
          } else {
            let Y = !1;
            (St > Number.EPSILON
              ? Xt > Number.EPSILON && (Y = !0)
              : St < -Number.EPSILON
                ? Xt < -Number.EPSILON && (Y = !0)
                : Math.sign(Ct) === Math.sign(R) && (Y = !0),
              Y
                ? ((ht = -Ct), (st = St), (Mt = Math.sqrt(T)))
                : ((ht = St), (st = Ct), (Mt = Math.sqrt(T / 2))));
          }
          return new q(ht / Mt, st / Mt);
        }
        let lt = [];
        for (
          let V = 0, Q = D.length, K = Q - 1, ht = V + 1;
          V < Q;
          V++, K++, ht++
        )
          (K === Q && (K = 0),
            ht === Q && (ht = 0),
            (lt[V] = nt(D[V], D[K], D[ht])));
        let k = [],
          W,
          ct = lt.concat();
        for (let V = 0, Q = P.length; V < Q; V++) {
          let K = P[V];
          W = [];
          for (
            let ht = 0, st = K.length, Mt = st - 1, St = ht + 1;
            ht < st;
            ht++, Mt++, St++
          )
            (Mt === st && (Mt = 0),
              St === st && (St = 0),
              (W[ht] = nt(K[ht], K[Mt], K[St])));
          (k.push(W), (ct = ct.concat(W)));
        }
        for (let V = 0; V < x; V++) {
          let Q = V / x,
            K = f * Math.cos((Q * Math.PI) / 2),
            ht = g * Math.sin((Q * Math.PI) / 2) + v;
          for (let st = 0, Mt = D.length; st < Mt; st++) {
            let St = B(D[st], lt[st], ht);
            At(St.x, St.y, -K);
          }
          for (let st = 0, Mt = P.length; st < Mt; st++) {
            let St = P[st];
            W = k[st];
            for (let Ct = 0, Xt = St.length; Ct < Xt; Ct++) {
              let R = B(St[Ct], W[Ct], ht);
              At(R.x, R.y, -K);
            }
          }
        }
        let at = g + v;
        for (let V = 0; V < z; V++) {
          let Q = d ? B(O[V], ct[V], at) : O[V];
          y
            ? (L.copy(w.normals[0]).multiplyScalar(Q.x),
              A.copy(w.binormals[0]).multiplyScalar(Q.y),
              I.copy(_[0]).add(L).add(A),
              At(I.x, I.y, I.z))
            : At(Q.x, Q.y, 0);
        }
        for (let V = 1; V <= h; V++)
          for (let Q = 0; Q < z; Q++) {
            let K = d ? B(O[Q], ct[Q], at) : O[Q];
            y
              ? (L.copy(w.normals[V]).multiplyScalar(K.x),
                A.copy(w.binormals[V]).multiplyScalar(K.y),
                I.copy(_[V]).add(L).add(A),
                At(I.x, I.y, I.z))
              : At(K.x, K.y, (u / h) * V);
          }
        for (let V = x - 1; V >= 0; V--) {
          let Q = V / x,
            K = f * Math.cos((Q * Math.PI) / 2),
            ht = g * Math.sin((Q * Math.PI) / 2) + v;
          for (let st = 0, Mt = D.length; st < Mt; st++) {
            let St = B(D[st], lt[st], ht);
            At(St.x, St.y, u + K);
          }
          for (let st = 0, Mt = P.length; st < Mt; st++) {
            let St = P[st];
            W = k[st];
            for (let Ct = 0, Xt = St.length; Ct < Xt; Ct++) {
              let R = B(St[Ct], W[Ct], ht);
              y
                ? At(R.x, R.y + _[h - 1].y, _[h - 1].x + K)
                : At(R.x, R.y, u + K);
            }
          }
        }
        (ut(), zt());
        function ut() {
          let V = i.length / 3;
          if (d) {
            let Q = 0,
              K = z * Q;
            for (let ht = 0; ht < U; ht++) {
              let st = E[ht];
              vt(st[2] + K, st[1] + K, st[0] + K);
            }
            ((Q = h + 2 * x), (K = z * Q));
            for (let ht = 0; ht < U; ht++) {
              let st = E[ht];
              vt(st[0] + K, st[1] + K, st[2] + K);
            }
          } else {
            for (let Q = 0; Q < U; Q++) {
              let K = E[Q];
              vt(K[2], K[1], K[0]);
            }
            for (let Q = 0; Q < U; Q++) {
              let K = E[Q];
              vt(K[0] + z * h, K[1] + z * h, K[2] + z * h);
            }
          }
          n.addGroup(V, i.length / 3 - V, 0);
        }
        function zt() {
          let V = i.length / 3,
            Q = 0;
          (J(D, Q), (Q += D.length));
          for (let K = 0, ht = P.length; K < ht; K++) {
            let st = P[K];
            (J(st, Q), (Q += st.length));
          }
          n.addGroup(V, i.length / 3 - V, 1);
        }
        function J(V, Q) {
          let K = V.length;
          for (; --K >= 0; ) {
            let ht = K,
              st = K - 1;
            st < 0 && (st = V.length - 1);
            for (let Mt = 0, St = h + 2 * x; Mt < St; Mt++) {
              let Ct = z * Mt,
                Xt = z * (Mt + 1),
                R = Q + ht + Ct,
                T = Q + st + Ct,
                X = Q + st + Xt,
                Y = Q + ht + Xt;
              ft(R, T, X, Y);
            }
          }
        }
        function At(V, Q, K) {
          (l.push(V), l.push(Q), l.push(K));
        }
        function vt(V, Q, K) {
          (gt(V), gt(Q), gt(K));
          let ht = i.length / 3,
            st = p.generateTopUV(n, i, ht - 3, ht - 2, ht - 1);
          (Bt(st[0]), Bt(st[1]), Bt(st[2]));
        }
        function ft(V, Q, K, ht) {
          (gt(V), gt(Q), gt(ht), gt(Q), gt(K), gt(ht));
          let st = i.length / 3,
            Mt = p.generateSideWallUV(n, i, st - 6, st - 3, st - 2, st - 1);
          (Bt(Mt[0]), Bt(Mt[1]), Bt(Mt[3]), Bt(Mt[1]), Bt(Mt[2]), Bt(Mt[3]));
        }
        function gt(V) {
          (i.push(l[3 * V + 0]), i.push(l[3 * V + 1]), i.push(l[3 * V + 2]));
        }
        function Bt(V) {
          (r.push(V.x), r.push(V.y));
        }
      }
    }
    toJSON() {
      let t = super.toJSON(),
        e = this.parameters.shapes,
        n = this.parameters.options;
      return E0(e, n, t);
    }
    static fromJSON(t, e) {
      let n = [];
      for (let r = 0, a = t.shapes.length; r < a; r++) {
        let o = e[t.shapes[r]];
        n.push(o);
      }
      let i = t.options.extrudePath;
      return (
        i !== void 0 && (t.options.extrudePath = new ml[i.type]().fromJSON(i)),
        new s(n, t.options)
      );
    }
  },
  T0 = {
    generateTopUV: function (s, t, e, n, i) {
      let r = t[3 * e],
        a = t[3 * e + 1],
        o = t[3 * n],
        l = t[3 * n + 1],
        c = t[3 * i],
        h = t[3 * i + 1];
      return [new q(r, a), new q(o, l), new q(c, h)];
    },
    generateSideWallUV: function (s, t, e, n, i, r) {
      let a = t[3 * e],
        o = t[3 * e + 1],
        l = t[3 * e + 2],
        c = t[3 * n],
        h = t[3 * n + 1],
        u = t[3 * n + 2],
        d = t[3 * i],
        f = t[3 * i + 1],
        g = t[3 * i + 2],
        v = t[3 * r],
        x = t[3 * r + 1],
        m = t[3 * r + 2];
      return Math.abs(o - h) < Math.abs(a - c)
        ? [new q(a, 1 - l), new q(c, 1 - u), new q(d, 1 - g), new q(v, 1 - m)]
        : [new q(o, 1 - l), new q(h, 1 - u), new q(f, 1 - g), new q(x, 1 - m)];
    },
  };
function E0(s, t, e) {
  if (((e.shapes = []), Array.isArray(s)))
    for (let n = 0, i = s.length; n < i; n++) {
      let r = s[n];
      e.shapes.push(r.uuid);
    }
  else e.shapes.push(s.uuid);
  return (
    t.extrudePath !== void 0 &&
      (e.options.extrudePath = t.extrudePath.toJSON()),
    e
  );
}
var Ns = class s extends wn {
    constructor(t = 1, e = 0) {
      let n = (1 + Math.sqrt(5)) / 2,
        i = [
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          0,
          0,
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          n,
          0,
          -1,
          n,
          0,
          1,
          -n,
          0,
          -1,
          -n,
          0,
          1,
        ],
        r = [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
          11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
          8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ];
      (super(i, r, t, e),
        (this.type = "IcosahedronGeometry"),
        (this.parameters = { radius: t, detail: e }));
    }
    static fromJSON(t) {
      return new s(t.radius, t.detail);
    }
  },
  Fs = class s extends Nt {
    constructor(
      t = [new q(0, 0.5), new q(0.5, 0), new q(0, -0.5)],
      e = 12,
      n = 0,
      i = 2 * Math.PI,
    ) {
      (super(),
        (this.type = "LatheGeometry"),
        (this.parameters = {
          points: t,
          segments: e,
          phiStart: n,
          phiLength: i,
        }),
        (e = Math.floor(e)),
        (i = de(i, 0, 2 * Math.PI)));
      let r = [],
        a = [],
        o = [],
        l = [],
        c = [],
        h = 1 / e,
        u = new b(),
        d = new q(),
        f = new b(),
        g = new b(),
        v = new b(),
        x = 0,
        m = 0;
      for (let p = 0; p <= t.length - 1; p++)
        switch (p) {
          case 0:
            ((x = t[p + 1].x - t[p].x),
              (m = t[p + 1].y - t[p].y),
              (f.x = 1 * m),
              (f.y = -x),
              (f.z = 0 * m),
              v.copy(f),
              f.normalize(),
              l.push(f.x, f.y, f.z));
            break;
          case t.length - 1:
            l.push(v.x, v.y, v.z);
            break;
          default:
            ((x = t[p + 1].x - t[p].x),
              (m = t[p + 1].y - t[p].y),
              (f.x = 1 * m),
              (f.y = -x),
              (f.z = 0 * m),
              g.copy(f),
              (f.x += v.x),
              (f.y += v.y),
              (f.z += v.z),
              f.normalize(),
              l.push(f.x, f.y, f.z),
              v.copy(g));
        }
      for (let p = 0; p <= e; p++) {
        let _ = n + p * h * i,
          y = Math.sin(_),
          w = Math.cos(_);
        for (let A = 0; A <= t.length - 1; A++) {
          ((u.x = t[A].x * y),
            (u.y = t[A].y),
            (u.z = t[A].x * w),
            a.push(u.x, u.y, u.z),
            (d.x = p / e),
            (d.y = A / (t.length - 1)),
            o.push(d.x, d.y));
          let L = l[3 * A + 0] * y,
            I = l[3 * A + 1],
            G = l[3 * A + 0] * w;
          c.push(L, I, G);
        }
      }
      for (let p = 0; p < e; p++)
        for (let _ = 0; _ < t.length - 1; _++) {
          let y = _ + p * t.length,
            w = y,
            A = y + t.length,
            L = y + t.length + 1,
            I = y + 1;
          (r.push(w, A, I), r.push(A, L, I));
        }
      (this.setIndex(r),
        this.setAttribute("position", new xt(a, 3)),
        this.setAttribute("uv", new xt(o, 2)),
        this.setAttribute("normal", new xt(c, 3)));
    }
    static fromJSON(t) {
      return new s(t.points, t.segments, t.phiStart, t.phiLength);
    }
  },
  Os = class s extends wn {
    constructor(t = 1, e = 0) {
      let n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        i = [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ];
      (super(n, i, t, e),
        (this.type = "OctahedronGeometry"),
        (this.parameters = { radius: t, detail: e }));
    }
    static fromJSON(t) {
      return new s(t.radius, t.detail);
    }
  },
  Bs = class s extends Nt {
    constructor(t = 0.5, e = 1, n = 8, i = 1, r = 0, a = 2 * Math.PI) {
      (super(),
        (this.type = "RingGeometry"),
        (this.parameters = {
          innerRadius: t,
          outerRadius: e,
          thetaSegments: n,
          phiSegments: i,
          thetaStart: r,
          thetaLength: a,
        }),
        (n = Math.max(3, n)),
        (i = Math.max(1, i)));
      let o = [],
        l = [],
        c = [],
        h = [],
        u = t,
        d = (e - t) / i,
        f = new b(),
        g = new q();
      for (let v = 0; v <= i; v++) {
        for (let x = 0; x <= n; x++) {
          let m = r + (x / n) * a;
          ((f.x = u * Math.cos(m)),
            (f.y = u * Math.sin(m)),
            l.push(f.x, f.y, f.z),
            c.push(0, 0, 1),
            (g.x = (f.x / e + 1) / 2),
            (g.y = (f.y / e + 1) / 2),
            h.push(g.x, g.y));
        }
        u += d;
      }
      for (let v = 0; v < i; v++) {
        let x = v * (n + 1);
        for (let m = 0; m < n; m++) {
          let p = m + x,
            _ = p,
            y = p + n + 1,
            w = p + n + 2,
            A = p + 1;
          (o.push(_, y, A), o.push(y, w, A));
        }
      }
      (this.setIndex(o),
        this.setAttribute("position", new xt(l, 3)),
        this.setAttribute("normal", new xt(c, 3)),
        this.setAttribute("uv", new xt(h, 2)));
    }
    static fromJSON(t) {
      return new s(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Tr = class s extends Nt {
    constructor(
      t = new Gn([new q(0, 0.5), new q(-0.5, -0.5), new q(0.5, -0.5)]),
      e = 12,
    ) {
      (super(),
        (this.type = "ShapeGeometry"),
        (this.parameters = { shapes: t, curveSegments: e }));
      let n = [],
        i = [],
        r = [],
        a = [],
        o = 0,
        l = 0;
      if (Array.isArray(t) === !1) c(t);
      else
        for (let h = 0; h < t.length; h++)
          (c(t[h]), this.addGroup(o, l, h), (o += l), (l = 0));
      (this.setIndex(n),
        this.setAttribute("position", new xt(i, 3)),
        this.setAttribute("normal", new xt(r, 3)),
        this.setAttribute("uv", new xt(a, 2)));
      function c(h) {
        let u = i.length / 3,
          d = h.extractPoints(e),
          f = d.shape,
          g = d.holes;
        gn.isClockWise(f) === !1 && (f = f.reverse());
        for (let x = 0, m = g.length; x < m; x++) {
          let p = g[x];
          gn.isClockWise(p) === !0 && (g[x] = p.reverse());
        }
        let v = gn.triangulateShape(f, g);
        for (let x = 0, m = g.length; x < m; x++) {
          let p = g[x];
          f = f.concat(p);
        }
        for (let x = 0, m = f.length; x < m; x++) {
          let p = f[x];
          (i.push(p.x, p.y, 0), r.push(0, 0, 1), a.push(p.x, p.y));
        }
        for (let x = 0, m = v.length; x < m; x++) {
          let p = v[x],
            _ = p[0] + u,
            y = p[1] + u,
            w = p[2] + u;
          (n.push(_, y, w), (l += 3));
        }
      }
    }
    toJSON() {
      let t = super.toJSON(),
        e = this.parameters.shapes;
      return A0(e, t);
    }
    static fromJSON(t, e) {
      let n = [];
      for (let i = 0, r = t.shapes.length; i < r; i++) {
        let a = e[t.shapes[i]];
        n.push(a);
      }
      return new s(n, t.curveSegments);
    }
  };
function A0(s, t) {
  if (((t.shapes = []), Array.isArray(s)))
    for (let e = 0, n = s.length; e < n; e++) {
      let i = s[e];
      t.shapes.push(i.uuid);
    }
  else t.shapes.push(s.uuid);
  return t;
}
var Us = class s extends Nt {
    constructor(
      t = 1,
      e = 32,
      n = 16,
      i = 0,
      r = 2 * Math.PI,
      a = 0,
      o = Math.PI,
    ) {
      (super(),
        (this.type = "SphereGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: n,
          phiStart: i,
          phiLength: r,
          thetaStart: a,
          thetaLength: o,
        }),
        (e = Math.max(3, Math.floor(e))),
        (n = Math.max(2, Math.floor(n))));
      let l = Math.min(a + o, Math.PI),
        c = 0,
        h = [],
        u = new b(),
        d = new b(),
        f = [],
        g = [],
        v = [],
        x = [];
      for (let m = 0; m <= n; m++) {
        let p = [],
          _ = m / n,
          y = 0;
        m == 0 && a == 0
          ? (y = 0.5 / e)
          : m == n && l == Math.PI && (y = -0.5 / e);
        for (let w = 0; w <= e; w++) {
          let A = w / e;
          ((u.x = -t * Math.cos(i + A * r) * Math.sin(a + _ * o)),
            (u.y = t * Math.cos(a + _ * o)),
            (u.z = t * Math.sin(i + A * r) * Math.sin(a + _ * o)),
            g.push(u.x, u.y, u.z),
            d.copy(u).normalize(),
            v.push(d.x, d.y, d.z),
            x.push(A + y, 1 - _),
            p.push(c++));
        }
        h.push(p);
      }
      for (let m = 0; m < n; m++)
        for (let p = 0; p < e; p++) {
          let _ = h[m][p + 1],
            y = h[m][p],
            w = h[m + 1][p],
            A = h[m + 1][p + 1];
          ((m !== 0 || a > 0) && f.push(_, y, A),
            (m !== n - 1 || l < Math.PI) && f.push(y, w, A));
        }
      (this.setIndex(f),
        this.setAttribute("position", new xt(g, 3)),
        this.setAttribute("normal", new xt(v, 3)),
        this.setAttribute("uv", new xt(x, 2)));
    }
    static fromJSON(t) {
      return new s(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Hs = class s extends wn {
    constructor(t = 1, e = 0) {
      let n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
        i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
      (super(n, i, t, e),
        (this.type = "TetrahedronGeometry"),
        (this.parameters = { radius: t, detail: e }));
    }
    static fromJSON(t) {
      return new s(t.radius, t.detail);
    }
  },
  Gs = class s extends Nt {
    constructor(t = 1, e = 0.4, n = 8, i = 6, r = 2 * Math.PI) {
      (super(),
        (this.type = "TorusGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          radialSegments: n,
          tubularSegments: i,
          arc: r,
        }),
        (n = Math.floor(n)),
        (i = Math.floor(i)));
      let a = [],
        o = [],
        l = [],
        c = [],
        h = new b(),
        u = new b(),
        d = new b();
      for (let f = 0; f <= n; f++)
        for (let g = 0; g <= i; g++) {
          let v = (g / i) * r,
            x = (f / n) * Math.PI * 2;
          ((u.x = (t + e * Math.cos(x)) * Math.cos(v)),
            (u.y = (t + e * Math.cos(x)) * Math.sin(v)),
            (u.z = e * Math.sin(x)),
            o.push(u.x, u.y, u.z),
            (h.x = t * Math.cos(v)),
            (h.y = t * Math.sin(v)),
            d.subVectors(u, h).normalize(),
            l.push(d.x, d.y, d.z),
            c.push(g / i),
            c.push(f / n));
        }
      for (let f = 1; f <= n; f++)
        for (let g = 1; g <= i; g++) {
          let v = (i + 1) * f + g - 1,
            x = (i + 1) * (f - 1) + g - 1,
            m = (i + 1) * (f - 1) + g,
            p = (i + 1) * f + g;
          (a.push(v, x, p), a.push(x, m, p));
        }
      (this.setIndex(a),
        this.setAttribute("position", new xt(o, 3)),
        this.setAttribute("normal", new xt(l, 3)),
        this.setAttribute("uv", new xt(c, 2)));
    }
    static fromJSON(t) {
      return new s(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
      );
    }
  },
  Vs = class s extends Nt {
    constructor(t = 1, e = 0.4, n = 64, i = 8, r = 2, a = 3) {
      (super(),
        (this.type = "TorusKnotGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          tubularSegments: n,
          radialSegments: i,
          p: r,
          q: a,
        }),
        (n = Math.floor(n)),
        (i = Math.floor(i)));
      let o = [],
        l = [],
        c = [],
        h = [],
        u = new b(),
        d = new b(),
        f = new b(),
        g = new b(),
        v = new b(),
        x = new b(),
        m = new b();
      for (let _ = 0; _ <= n; ++_) {
        let y = (_ / n) * r * Math.PI * 2;
        (p(y, r, a, t, f),
          p(y + 0.01, r, a, t, g),
          x.subVectors(g, f),
          m.addVectors(g, f),
          v.crossVectors(x, m),
          m.crossVectors(v, x),
          v.normalize(),
          m.normalize());
        for (let w = 0; w <= i; ++w) {
          let A = (w / i) * Math.PI * 2,
            L = -e * Math.cos(A),
            I = e * Math.sin(A);
          ((u.x = f.x + (L * m.x + I * v.x)),
            (u.y = f.y + (L * m.y + I * v.y)),
            (u.z = f.z + (L * m.z + I * v.z)),
            l.push(u.x, u.y, u.z),
            d.subVectors(u, f).normalize(),
            c.push(d.x, d.y, d.z),
            h.push(_ / n),
            h.push(w / i));
        }
      }
      for (let _ = 1; _ <= n; _++)
        for (let y = 1; y <= i; y++) {
          let w = (i + 1) * (_ - 1) + (y - 1),
            A = (i + 1) * _ + (y - 1),
            L = (i + 1) * _ + y,
            I = (i + 1) * (_ - 1) + y;
          (o.push(w, A, I), o.push(A, L, I));
        }
      (this.setIndex(o),
        this.setAttribute("position", new xt(l, 3)),
        this.setAttribute("normal", new xt(c, 3)),
        this.setAttribute("uv", new xt(h, 2)));
      function p(_, y, w, A, L) {
        let I = Math.cos(_),
          G = Math.sin(_),
          O = (w / y) * _,
          P = Math.cos(O);
        ((L.x = A * (2 + P) * 0.5 * I),
          (L.y = A * (2 + P) * G * 0.5),
          (L.z = A * Math.sin(O) * 0.5));
      }
    }
    static fromJSON(t) {
      return new s(
        t.radius,
        t.tube,
        t.tubularSegments,
        t.radialSegments,
        t.p,
        t.q,
      );
    }
  },
  ks = class s extends Nt {
    constructor(
      t = new xr(new b(-1, -1, 0), new b(-1, 1, 0), new b(1, 1, 0)),
      e = 64,
      n = 1,
      i = 8,
      r = !1,
    ) {
      (super(),
        (this.type = "TubeGeometry"),
        (this.parameters = {
          path: t,
          tubularSegments: e,
          radius: n,
          radialSegments: i,
          closed: r,
        }));
      let a = t.computeFrenetFrames(e, r);
      ((this.tangents = a.tangents),
        (this.normals = a.normals),
        (this.binormals = a.binormals));
      let o = new b(),
        l = new b(),
        c = new q(),
        h = new b(),
        u = [],
        d = [],
        f = [],
        g = [];
      (v(),
        this.setIndex(g),
        this.setAttribute("position", new xt(u, 3)),
        this.setAttribute("normal", new xt(d, 3)),
        this.setAttribute("uv", new xt(f, 2)));
      function v() {
        for (let _ = 0; _ < e; _++) x(_);
        (x(r === !1 ? e : 0), p(), m());
      }
      function x(_) {
        h = t.getPointAt(_ / e, h);
        let y = a.normals[_],
          w = a.binormals[_];
        for (let A = 0; A <= i; A++) {
          let L = (A / i) * Math.PI * 2,
            I = Math.sin(L),
            G = -Math.cos(L);
          ((l.x = G * y.x + I * w.x),
            (l.y = G * y.y + I * w.y),
            (l.z = G * y.z + I * w.z),
            l.normalize(),
            d.push(l.x, l.y, l.z),
            (o.x = h.x + n * l.x),
            (o.y = h.y + n * l.y),
            (o.z = h.z + n * l.z),
            u.push(o.x, o.y, o.z));
        }
      }
      function m() {
        for (let _ = 1; _ <= e; _++)
          for (let y = 1; y <= i; y++) {
            let w = (i + 1) * (_ - 1) + (y - 1),
              A = (i + 1) * _ + (y - 1),
              L = (i + 1) * _ + y,
              I = (i + 1) * (_ - 1) + y;
            (g.push(w, A, I), g.push(A, L, I));
          }
      }
      function p() {
        for (let _ = 0; _ <= e; _++)
          for (let y = 0; y <= i; y++)
            ((c.x = _ / e), (c.y = y / i), f.push(c.x, c.y));
      }
    }
    toJSON() {
      let t = super.toJSON();
      return ((t.path = this.parameters.path.toJSON()), t);
    }
    static fromJSON(t) {
      return new s(
        new ml[t.path.type]().fromJSON(t.path),
        t.tubularSegments,
        t.radius,
        t.radialSegments,
        t.closed,
      );
    }
  },
  Lo = class extends Nt {
    constructor(t = null) {
      if (
        (super(),
        (this.type = "WireframeGeometry"),
        (this.parameters = { geometry: t }),
        t !== null)
      ) {
        let e = [],
          n = new Set(),
          i = new b(),
          r = new b();
        if (t.index !== null) {
          let a = t.attributes.position,
            o = t.index,
            l = t.groups;
          l.length === 0 &&
            (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
          for (let c = 0, h = l.length; c < h; ++c) {
            let u = l[c],
              d = u.start,
              f = u.count;
            for (let g = d, v = d + f; g < v; g += 3)
              for (let x = 0; x < 3; x++) {
                let m = o.getX(g + x),
                  p = o.getX(g + ((x + 1) % 3));
                (i.fromBufferAttribute(a, m),
                  r.fromBufferAttribute(a, p),
                  Vc(i, r, n) === !0 &&
                    (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z)));
              }
          }
        } else {
          let a = t.attributes.position;
          for (let o = 0, l = a.count / 3; o < l; o++)
            for (let c = 0; c < 3; c++) {
              let h = 3 * o + c,
                u = 3 * o + ((c + 1) % 3);
              (i.fromBufferAttribute(a, h),
                r.fromBufferAttribute(a, u),
                Vc(i, r, n) === !0 &&
                  (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z)));
            }
        }
        this.setAttribute("position", new xt(e, 3));
      }
    }
  };
function Vc(s, t, e) {
  let n = `${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,
    i = `${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;
  return e.has(n) === !0 || e.has(i) === !0 ? !1 : (e.add(n, i), !0);
}
var Q0 = Object.freeze({
    __proto__: null,
    BoxGeometry: On,
    BoxBufferGeometry: On,
    CircleGeometry: Ls,
    CircleBufferGeometry: Ls,
    ConeGeometry: Cs,
    ConeBufferGeometry: Cs,
    CylinderGeometry: gr,
    CylinderBufferGeometry: gr,
    DodecahedronGeometry: Ps,
    DodecahedronBufferGeometry: Ps,
    EdgesGeometry: So,
    ExtrudeGeometry: Sn,
    ExtrudeBufferGeometry: Sn,
    IcosahedronGeometry: Ns,
    IcosahedronBufferGeometry: Ns,
    LatheGeometry: Fs,
    LatheBufferGeometry: Fs,
    OctahedronGeometry: Os,
    OctahedronBufferGeometry: Os,
    PlaneGeometry: Bn,
    PlaneBufferGeometry: Bn,
    PolyhedronGeometry: wn,
    PolyhedronBufferGeometry: wn,
    RingGeometry: Bs,
    RingBufferGeometry: Bs,
    ShapeGeometry: Tr,
    ShapeBufferGeometry: Tr,
    SphereGeometry: Us,
    SphereBufferGeometry: Us,
    TetrahedronGeometry: Hs,
    TetrahedronBufferGeometry: Hs,
    TorusGeometry: Gs,
    TorusBufferGeometry: Gs,
    TorusKnotGeometry: Vs,
    TorusKnotBufferGeometry: Vs,
    TubeGeometry: ks,
    TubeBufferGeometry: ks,
    WireframeGeometry: Lo,
  }),
  Ws = class extends ne {
    constructor(t) {
      (super(),
        (this.type = "ShadowMaterial"),
        (this.color = new dt(0)),
        (this.transparent = !0),
        this.setValues(t));
    }
    copy(t) {
      return (super.copy(t), this.color.copy(t.color), this);
    }
  };
Ws.prototype.isShadowMaterial = !0;
var Er = class extends ne {
  constructor(t) {
    (super(),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new dt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new dt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ii),
      (this.normalScale = new q(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "" }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.envMapIntensity = t.envMapIntensity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      this
    );
  }
};
Er.prototype.isMeshStandardMaterial = !0;
var js = class extends Er {
  constructor(t) {
    (super(),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new q(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return de((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.sheenColor = new dt(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new dt(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new dt(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._transmission = 0),
      this.setValues(t));
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    (this._sheen > 0 != t > 0 && this.version++, (this._sheen = t));
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    (this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t));
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    (this._transmission > 0 != t > 0 && this.version++,
      (this._transmission = t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = t.clearcoat),
      (this.clearcoatMap = t.clearcoatMap),
      (this.clearcoatRoughness = t.clearcoatRoughness),
      (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = t.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
      (this.ior = t.ior),
      (this.sheen = t.sheen),
      this.sheenColor.copy(t.sheenColor),
      (this.sheenColorMap = t.sheenColorMap),
      (this.sheenRoughness = t.sheenRoughness),
      (this.sheenRoughnessMap = t.sheenRoughnessMap),
      (this.transmission = t.transmission),
      (this.transmissionMap = t.transmissionMap),
      (this.thickness = t.thickness),
      (this.thicknessMap = t.thicknessMap),
      (this.attenuationDistance = t.attenuationDistance),
      this.attenuationColor.copy(t.attenuationColor),
      (this.specularIntensity = t.specularIntensity),
      (this.specularIntensityMap = t.specularIntensityMap),
      this.specularColor.copy(t.specularColor),
      (this.specularColorMap = t.specularColorMap),
      this
    );
  }
};
js.prototype.isMeshPhysicalMaterial = !0;
var qs = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "MeshPhongMaterial"),
      (this.color = new dt(16777215)),
      (this.specular = new dt(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new dt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ii),
      (this.normalScale = new q(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = aa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      this.specular.copy(t.specular),
      (this.shininess = t.shininess),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      this
    );
  }
};
qs.prototype.isMeshPhongMaterial = !0;
var Xs = class extends ne {
  constructor(t) {
    (super(),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new dt(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new dt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ii),
      (this.normalScale = new q(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.gradientMap = t.gradientMap),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.alphaMap = t.alphaMap),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      this
    );
  }
};
Xs.prototype.isMeshToonMaterial = !0;
var Js = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ii),
      (this.normalScale = new q(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.flatShading = !1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.flatShading = t.flatShading),
      this
    );
  }
};
Js.prototype.isMeshNormalMaterial = !0;
var Ys = class extends ne {
  constructor(t) {
    (super(),
      (this.type = "MeshLambertMaterial"),
      (this.color = new dt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new dt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = aa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      this
    );
  }
};
Ys.prototype.isMeshLambertMaterial = !0;
var Zs = class extends ne {
  constructor(t) {
    (super(),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new dt(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ii),
      (this.normalScale = new q(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { MATCAP: "" }),
      this.color.copy(t.color),
      (this.matcap = t.matcap),
      (this.map = t.map),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.alphaMap = t.alphaMap),
      (this.flatShading = t.flatShading),
      this
    );
  }
};
Zs.prototype.isMeshMatcapMaterial = !0;
var Qs = class extends bn {
  constructor(t) {
    (super(),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.scale = t.scale),
      (this.dashSize = t.dashSize),
      (this.gapSize = t.gapSize),
      this
    );
  }
};
Qs.prototype.isLineDashedMaterial = !0;
var $0 = Object.freeze({
    __proto__: null,
    ShadowMaterial: Ws,
    SpriteMaterial: ur,
    RawShaderMaterial: Un,
    ShaderMaterial: _e,
    PointsMaterial: mr,
    MeshPhysicalMaterial: js,
    MeshStandardMaterial: Er,
    MeshPhongMaterial: qs,
    MeshToonMaterial: Xs,
    MeshNormalMaterial: Js,
    MeshLambertMaterial: Ys,
    MeshDepthMaterial: or,
    MeshDistanceMaterial: lr,
    MeshBasicMaterial: _i,
    MeshMatcapMaterial: Zs,
    LineDashedMaterial: Qs,
    LineBasicMaterial: bn,
    Material: ne,
  }),
  Jt = {
    arraySlice: function (s, t, e) {
      return Jt.isTypedArray(s)
        ? new s.constructor(s.subarray(t, e !== void 0 ? e : s.length))
        : s.slice(t, e);
    },
    convertArray: function (s, t, e) {
      return !s || (!e && s.constructor === t)
        ? s
        : typeof t.BYTES_PER_ELEMENT == "number"
          ? new t(s)
          : Array.prototype.slice.call(s);
    },
    isTypedArray: function (s) {
      return ArrayBuffer.isView(s) && !(s instanceof DataView);
    },
    getKeyframeOrder: function (s) {
      function t(i, r) {
        return s[i] - s[r];
      }
      let e = s.length,
        n = new Array(e);
      for (let i = 0; i !== e; ++i) n[i] = i;
      return (n.sort(t), n);
    },
    sortedArray: function (s, t, e) {
      let n = s.length,
        i = new s.constructor(n);
      for (let r = 0, a = 0; a !== n; ++r) {
        let o = e[r] * t;
        for (let l = 0; l !== t; ++l) i[a++] = s[o + l];
      }
      return i;
    },
    flattenJSON: function (s, t, e, n) {
      let i = 1,
        r = s[0];
      for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
      if (r === void 0) return;
      let a = r[n];
      if (a !== void 0)
        if (Array.isArray(a))
          do
            ((a = r[n]),
              a !== void 0 && (t.push(r.time), e.push.apply(e, a)),
              (r = s[i++]));
          while (r !== void 0);
        else if (a.toArray !== void 0)
          do
            ((a = r[n]),
              a !== void 0 && (t.push(r.time), a.toArray(e, e.length)),
              (r = s[i++]));
          while (r !== void 0);
        else
          do
            ((a = r[n]),
              a !== void 0 && (t.push(r.time), e.push(a)),
              (r = s[i++]));
          while (r !== void 0);
    },
    subclip: function (s, t, e, n, i = 30) {
      let r = s.clone();
      r.name = t;
      let a = [];
      for (let l = 0; l < r.tracks.length; ++l) {
        let c = r.tracks[l],
          h = c.getValueSize(),
          u = [],
          d = [];
        for (let f = 0; f < c.times.length; ++f) {
          let g = c.times[f] * i;
          if (!(g < e || g >= n)) {
            u.push(c.times[f]);
            for (let v = 0; v < h; ++v) d.push(c.values[f * h + v]);
          }
        }
        u.length !== 0 &&
          ((c.times = Jt.convertArray(u, c.times.constructor)),
          (c.values = Jt.convertArray(d, c.values.constructor)),
          a.push(c));
      }
      r.tracks = a;
      let o = 1 / 0;
      for (let l = 0; l < r.tracks.length; ++l)
        o > r.tracks[l].times[0] && (o = r.tracks[l].times[0]);
      for (let l = 0; l < r.tracks.length; ++l) r.tracks[l].shift(-1 * o);
      return (r.resetDuration(), r);
    },
    makeClipAdditive: function (s, t = 0, e = s, n = 30) {
      n <= 0 && (n = 30);
      let i = e.tracks.length,
        r = t / n;
      for (let a = 0; a < i; ++a) {
        let o = e.tracks[a],
          l = o.ValueTypeName;
        if (l === "bool" || l === "string") continue;
        let c = s.tracks.find(function (m) {
          return m.name === o.name && m.ValueTypeName === l;
        });
        if (c === void 0) continue;
        let h = 0,
          u = o.getValueSize();
        o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (h = u / 3);
        let d = 0,
          f = c.getValueSize();
        c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (d = f / 3);
        let g = o.times.length - 1,
          v;
        if (r <= o.times[0]) {
          let m = h,
            p = u - h;
          v = Jt.arraySlice(o.values, m, p);
        } else if (r >= o.times[g]) {
          let m = g * u + h,
            p = m + u - h;
          v = Jt.arraySlice(o.values, m, p);
        } else {
          let m = o.createInterpolant(),
            p = h,
            _ = u - h;
          (m.evaluate(r), (v = Jt.arraySlice(m.resultBuffer, p, _)));
        }
        l === "quaternion" &&
          new oe().fromArray(v).normalize().conjugate().toArray(v);
        let x = c.times.length;
        for (let m = 0; m < x; ++m) {
          let p = m * f + d;
          if (l === "quaternion")
            oe.multiplyQuaternionsFlat(c.values, p, v, 0, c.values, p);
          else {
            let _ = f - 2 * d;
            for (let y = 0; y < _; ++y) c.values[p + y] -= v[y];
          }
        }
      }
      return ((s.blendMode = th), s);
    },
  },
  We = class {
    constructor(t, e, n, i) {
      ((this.parameterPositions = t),
        (this._cachedIndex = 0),
        (this.resultBuffer = i !== void 0 ? i : new e.constructor(n)),
        (this.sampleValues = e),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(t) {
      let e = this.parameterPositions,
        n = this._cachedIndex,
        i = e[n],
        r = e[n - 1];
      t: {
        e: {
          let a;
          n: {
            i: if (!(t < i)) {
              for (let o = n + 2; ; ) {
                if (i === void 0) {
                  if (t < r) break i;
                  return (
                    (n = e.length),
                    (this._cachedIndex = n),
                    this.afterEnd_(n - 1, t, r)
                  );
                }
                if (n === o) break;
                if (((r = i), (i = e[++n]), t < i)) break e;
              }
              a = e.length;
              break n;
            }
            if (t >= r) break t;
            {
              let o = e[1];
              t < o && ((n = 2), (r = o));
              for (let l = n - 2; ; ) {
                if (r === void 0)
                  return ((this._cachedIndex = 0), this.beforeStart_(0, t, i));
                if (n === l) break;
                if (((i = r), (r = e[--n - 1]), t >= r)) break e;
              }
              ((a = n), (n = 0));
            }
          }
          for (; n < a; ) {
            let o = (n + a) >>> 1;
            t < e[o] ? (a = o) : (n = o + 1);
          }
          if (((i = e[n]), (r = e[n - 1]), r === void 0))
            return ((this._cachedIndex = 0), this.beforeStart_(0, t, i));
          if (i === void 0)
            return (
              (n = e.length),
              (this._cachedIndex = n),
              this.afterEnd_(n - 1, r, t)
            );
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, r, i));
      }
      return this.interpolate_(n, r, t, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
      let e = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = t * i;
      for (let a = 0; a !== i; ++a) e[a] = n[r + a];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  };
We.prototype.beforeStart_ = We.prototype.copySampleValue_;
We.prototype.afterEnd_ = We.prototype.copySampleValue_;
var Co = class extends We {
    constructor(t, e, n, i) {
      (super(t, e, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: di, endingEnd: di }));
    }
    intervalChanged_(t, e, n) {
      let i = this.parameterPositions,
        r = t - 2,
        a = t + 1,
        o = i[r],
        l = i[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case pi:
            ((r = t), (o = 2 * e - n));
            break;
          case xs:
            ((r = i.length - 2), (o = e + i[r] - i[r + 1]));
            break;
          default:
            ((r = t), (o = n));
        }
      if (l === void 0)
        switch (this.getSettings_().endingEnd) {
          case pi:
            ((a = t), (l = 2 * n - e));
            break;
          case xs:
            ((a = 1), (l = n + i[1] - i[0]));
            break;
          default:
            ((a = t - 1), (l = e));
        }
      let c = 0.5 * (n - e),
        h = this.valueSize;
      ((this._weightPrev = c / (e - o)),
        (this._weightNext = c / (l - n)),
        (this._offsetPrev = r * h),
        (this._offsetNext = a * h));
    }
    interpolate_(t, e, n, i) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        l = t * o,
        c = l - o,
        h = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        g = (n - e) / (i - e),
        v = g * g,
        x = v * g,
        m = -d * x + 2 * d * v - d * g,
        p = (1 + d) * x + (-1.5 - 2 * d) * v + (-0.5 + d) * g + 1,
        _ = (-1 - f) * x + (1.5 + f) * v + 0.5 * g,
        y = f * x - f * v;
      for (let w = 0; w !== o; ++w)
        r[w] = m * a[h + w] + p * a[c + w] + _ * a[l + w] + y * a[u + w];
      return r;
    }
  },
  $s = class extends We {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        l = t * o,
        c = l - o,
        h = (n - e) / (i - e),
        u = 1 - h;
      for (let d = 0; d !== o; ++d) r[d] = a[c + d] * u + a[l + d] * h;
      return r;
    }
  },
  Po = class extends We {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  },
  Ae = class {
    constructor(t, e, n, i) {
      if (t === void 0)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (e === void 0 || e.length === 0)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + t,
        );
      ((this.name = t),
        (this.times = Jt.convertArray(e, this.TimeBufferType)),
        (this.values = Jt.convertArray(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation));
    }
    static toJSON(t) {
      let e = t.constructor,
        n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t);
      else {
        n = {
          name: t.name,
          times: Jt.convertArray(t.times, Array),
          values: Jt.convertArray(t.values, Array),
        };
        let i = t.getInterpolation();
        i !== t.DefaultInterpolation && (n.interpolation = i);
      }
      return ((n.type = t.ValueTypeName), n);
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new Po(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new $s(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new Co(this.times, this.values, this.getValueSize(), t);
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case vs:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case ys:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case ma:
          e = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (e === void 0) {
        let n =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (this.createInterpolant === void 0) {
          if (t === this.DefaultInterpolation) throw new Error(n);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return (console.warn("THREE.KeyframeTrack:", n), this);
      }
      return ((this.createInterpolant = e), this);
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return vs;
        case this.InterpolantFactoryMethodLinear:
          return ys;
        case this.InterpolantFactoryMethodSmooth:
          return ma;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (t !== 0) {
        let e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
      }
      return this;
    }
    scale(t) {
      if (t !== 1) {
        let e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
      }
      return this;
    }
    trim(t, e) {
      let n = this.times,
        i = n.length,
        r = 0,
        a = i - 1;
      for (; r !== i && n[r] < t; ) ++r;
      for (; a !== -1 && n[a] > e; ) --a;
      if ((++a, r !== 0 || a !== i)) {
        r >= a && ((a = Math.max(a, 1)), (r = a - 1));
        let o = this.getValueSize();
        ((this.times = Jt.arraySlice(n, r, a)),
          (this.values = Jt.arraySlice(this.values, r * o, a * o)));
      }
      return this;
    }
    validate() {
      let t = !0,
        e = this.getValueSize();
      e - Math.floor(e) !== 0 &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this,
        ),
        (t = !1));
      let n = this.times,
        i = this.values,
        r = n.length;
      r === 0 &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
      let a = null;
      for (let o = 0; o !== r; o++) {
        let l = n[o];
        if (typeof l == "number" && isNaN(l)) {
          (console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            o,
            l,
          ),
            (t = !1));
          break;
        }
        if (a !== null && a > l) {
          (console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            o,
            l,
            a,
          ),
            (t = !1));
          break;
        }
        a = l;
      }
      if (i !== void 0 && Jt.isTypedArray(i))
        for (let o = 0, l = i.length; o !== l; ++o) {
          let c = i[o];
          if (isNaN(c)) {
            (console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              o,
              c,
            ),
              (t = !1));
            break;
          }
        }
      return t;
    }
    optimize() {
      let t = Jt.arraySlice(this.times),
        e = Jt.arraySlice(this.values),
        n = this.getValueSize(),
        i = this.getInterpolation() === ma,
        r = t.length - 1,
        a = 1;
      for (let o = 1; o < r; ++o) {
        let l = !1,
          c = t[o],
          h = t[o + 1];
        if (c !== h && (o !== 1 || c !== t[0]))
          if (i) l = !0;
          else {
            let u = o * n,
              d = u - n,
              f = u + n;
            for (let g = 0; g !== n; ++g) {
              let v = e[u + g];
              if (v !== e[d + g] || v !== e[f + g]) {
                l = !0;
                break;
              }
            }
          }
        if (l) {
          if (o !== a) {
            t[a] = t[o];
            let u = o * n,
              d = a * n;
            for (let f = 0; f !== n; ++f) e[d + f] = e[u + f];
          }
          ++a;
        }
      }
      if (r > 0) {
        t[a] = t[r];
        for (let o = r * n, l = a * n, c = 0; c !== n; ++c) e[l + c] = e[o + c];
        ++a;
      }
      return (
        a !== t.length
          ? ((this.times = Jt.arraySlice(t, 0, a)),
            (this.values = Jt.arraySlice(e, 0, a * n)))
          : ((this.times = t), (this.values = e)),
        this
      );
    }
    clone() {
      let t = Jt.arraySlice(this.times, 0),
        e = Jt.arraySlice(this.values, 0),
        n = this.constructor,
        i = new n(this.name, t, e);
      return ((i.createInterpolant = this.createInterpolant), i);
    }
  };
Ae.prototype.TimeBufferType = Float32Array;
Ae.prototype.ValueBufferType = Float32Array;
Ae.prototype.DefaultInterpolation = ys;
var Tn = class extends Ae {};
Tn.prototype.ValueTypeName = "bool";
Tn.prototype.ValueBufferType = Array;
Tn.prototype.DefaultInterpolation = vs;
Tn.prototype.InterpolantFactoryMethodLinear = void 0;
Tn.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ks = class extends Ae {};
Ks.prototype.ValueTypeName = "color";
var Ri = class extends Ae {};
Ri.prototype.ValueTypeName = "number";
var Io = class extends We {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        l = (n - e) / (i - e),
        c = t * o;
      for (let h = c + o; c !== h; c += 4)
        oe.slerpFlat(r, 0, a, c - o, a, c, l);
      return r;
    }
  },
  Vn = class extends Ae {
    InterpolantFactoryMethodLinear(t) {
      return new Io(this.times, this.values, this.getValueSize(), t);
    }
  };
Vn.prototype.ValueTypeName = "quaternion";
Vn.prototype.DefaultInterpolation = ys;
Vn.prototype.InterpolantFactoryMethodSmooth = void 0;
var En = class extends Ae {};
En.prototype.ValueTypeName = "string";
En.prototype.ValueBufferType = Array;
En.prototype.DefaultInterpolation = vs;
En.prototype.InterpolantFactoryMethodLinear = void 0;
En.prototype.InterpolantFactoryMethodSmooth = void 0;
var Li = class extends Ae {};
Li.prototype.ValueTypeName = "vector";
var ta = class {
  constructor(t, e = -1, n, i = hl) {
    ((this.name = t),
      (this.tracks = n),
      (this.duration = e),
      (this.blendMode = i),
      (this.uuid = Ee()),
      this.duration < 0 && this.resetDuration());
  }
  static parse(t) {
    let e = [],
      n = t.tracks,
      i = 1 / (t.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) e.push(L0(n[a]).scale(i));
    let r = new this(t.name, t.duration, e, t.blendMode);
    return ((r.uuid = t.uuid), r);
  }
  static toJSON(t) {
    let e = [],
      n = t.tracks,
      i = {
        name: t.name,
        duration: t.duration,
        tracks: e,
        uuid: t.uuid,
        blendMode: t.blendMode,
      };
    for (let r = 0, a = n.length; r !== a; ++r) e.push(Ae.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    let r = e.length,
      a = [];
    for (let o = 0; o < r; o++) {
      let l = [],
        c = [];
      (l.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0));
      let h = Jt.getKeyframeOrder(l);
      ((l = Jt.sortedArray(l, 1, h)),
        (c = Jt.sortedArray(c, 1, h)),
        !i && l[0] === 0 && (l.push(r), c.push(c[0])),
        a.push(
          new Ri(".morphTargetInfluences[" + e[o].name + "]", l, c).scale(
            1 / n,
          ),
        ));
    }
    return new this(t, -1, a);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      let i = t;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    let i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = t.length; o < l; o++) {
      let c = t[o],
        h = c.name.match(r);
      if (h && h.length > 1) {
        let u = h[1],
          d = i[u];
        (d || (i[u] = d = []), d.push(c));
      }
    }
    let a = [];
    for (let o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], e, n));
    return a;
  }
  static parseAnimation(t, e) {
    if (!t)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    let n = function (u, d, f, g, v) {
        if (f.length !== 0) {
          let x = [],
            m = [];
          (Jt.flattenJSON(f, x, m, g),
            x.length !== 0 && v.push(new u(d, x, m)));
        }
      },
      i = [],
      r = t.name || "default",
      a = t.fps || 30,
      o = t.blendMode,
      l = t.length || -1,
      c = t.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      let d = c[u].keys;
      if (d && d.length !== 0)
        if (d[0].morphTargets) {
          let f = {},
            g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let v = 0; v < d[g].morphTargets.length; v++)
                f[d[g].morphTargets[v]] = -1;
          for (let v in f) {
            let x = [],
              m = [];
            for (let p = 0; p !== d[g].morphTargets.length; ++p) {
              let _ = d[g];
              (x.push(_.time), m.push(_.morphTarget === v ? 1 : 0));
            }
            i.push(new Ri(".morphTargetInfluence[" + v + "]", x, m));
          }
          l = f.length * (a || 1);
        } else {
          let f = ".bones[" + e[u].name + "]";
          (n(Li, f + ".position", d, "pos", i),
            n(Vn, f + ".quaternion", d, "rot", i),
            n(Li, f + ".scale", d, "scl", i));
        }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    let t = this.tracks,
      e = 0;
    for (let n = 0, i = t.length; n !== i; ++n) {
      let r = this.tracks[n];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    return ((this.duration = e), this);
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
    return this;
  }
  clone() {
    let t = [];
    for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
};
function R0(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ri;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Li;
    case "color":
      return Ks;
    case "quaternion":
      return Vn;
    case "bool":
    case "boolean":
      return Tn;
    case "string":
      return En;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function L0(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  let t = R0(s.type);
  if (s.times === void 0) {
    let e = [],
      n = [];
    (Jt.flattenJSON(s.keys, e, n, "value"), (s.times = e), (s.values = n));
  }
  return t.parse !== void 0
    ? t.parse(s)
    : new t(s.name, s.times, s.values, s.interpolation);
}
var Ci = {
    enabled: !1,
    files: {},
    add: function (s, t) {
      this.enabled !== !1 && (this.files[s] = t);
    },
    get: function (s) {
      if (this.enabled !== !1) return this.files[s];
    },
    remove: function (s) {
      delete this.files[s];
    },
    clear: function () {
      this.files = {};
    },
  },
  Do = class {
    constructor(t, e, n) {
      let i = this,
        r = !1,
        a = 0,
        o = 0,
        l,
        c = [];
      ((this.onStart = void 0),
        (this.onLoad = t),
        (this.onProgress = e),
        (this.onError = n),
        (this.itemStart = function (h) {
          (o++,
            r === !1 && i.onStart !== void 0 && i.onStart(h, a, o),
            (r = !0));
        }),
        (this.itemEnd = function (h) {
          (a++,
            i.onProgress !== void 0 && i.onProgress(h, a, o),
            a === o && ((r = !1), i.onLoad !== void 0 && i.onLoad()));
        }),
        (this.itemError = function (h) {
          i.onError !== void 0 && i.onError(h);
        }),
        (this.resolveURL = function (h) {
          return l ? l(h) : h;
        }),
        (this.setURLModifier = function (h) {
          return ((l = h), this);
        }),
        (this.addHandler = function (h, u) {
          return (c.push(h, u), this);
        }),
        (this.removeHandler = function (h) {
          let u = c.indexOf(h);
          return (u !== -1 && c.splice(u, 2), this);
        }),
        (this.getHandler = function (h) {
          for (let u = 0, d = c.length; u < d; u += 2) {
            let f = c[u],
              g = c[u + 1];
            if ((f.global && (f.lastIndex = 0), f.test(h))) return g;
          }
          return null;
        }));
    }
  },
  C0 = new Do(),
  je = class {
    constructor(t) {
      ((this.manager = t !== void 0 ? t : C0),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {}));
    }
    load() {}
    loadAsync(t, e) {
      let n = this;
      return new Promise(function (i, r) {
        n.load(t, i, e, r);
      });
    }
    parse() {}
    setCrossOrigin(t) {
      return ((this.crossOrigin = t), this);
    }
    setWithCredentials(t) {
      return ((this.withCredentials = t), this);
    }
    setPath(t) {
      return ((this.path = t), this);
    }
    setResourcePath(t) {
      return ((this.resourcePath = t), this);
    }
    setRequestHeader(t) {
      return ((this.requestHeader = t), this);
    }
  },
  $e = {},
  zo = class extends je {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      (t === void 0 && (t = ""),
        this.path !== void 0 && (t = this.path + t),
        (t = this.manager.resolveURL(t)));
      let r = Ci.get(t);
      if (r !== void 0)
        return (
          this.manager.itemStart(t),
          setTimeout(() => {
            (e && e(r), this.manager.itemEnd(t));
          }, 0),
          r
        );
      if ($e[t] !== void 0) {
        $e[t].push({ onLoad: e, onProgress: n, onError: i });
        return;
      }
      (($e[t] = []), $e[t].push({ onLoad: e, onProgress: n, onError: i }));
      let a = new Request(t, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      });
      (fetch(a)
        .then((o) => {
          if (o.status === 200 || o.status === 0) {
            if (
              (o.status === 0 &&
                console.warn("THREE.FileLoader: HTTP Status 0 received."),
              typeof ReadableStream > "u" || o.body.getReader === void 0)
            )
              return o;
            let l = $e[t],
              c = o.body.getReader(),
              h = o.headers.get("Content-Length"),
              u = h ? parseInt(h) : 0,
              d = u !== 0,
              f = 0,
              g = new ReadableStream({
                start(v) {
                  x();
                  function x() {
                    c.read().then(({ done: m, value: p }) => {
                      if (m) v.close();
                      else {
                        f += p.byteLength;
                        let _ = new ProgressEvent("progress", {
                          lengthComputable: d,
                          loaded: f,
                          total: u,
                        });
                        for (let y = 0, w = l.length; y < w; y++) {
                          let A = l[y];
                          A.onProgress && A.onProgress(_);
                        }
                        (v.enqueue(p), x());
                      }
                    });
                  }
                },
              });
            return new Response(g);
          }
          throw Error(
            `fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`,
          );
        })
        .then((o) => {
          switch (this.responseType) {
            case "arraybuffer":
              return o.arrayBuffer();
            case "blob":
              return o.blob();
            case "document":
              return o
                .text()
                .then((l) => new DOMParser().parseFromString(l, this.mimeType));
            case "json":
              return o.json();
            default:
              return o.text();
          }
        })
        .then((o) => {
          Ci.add(t, o);
          let l = $e[t];
          delete $e[t];
          for (let c = 0, h = l.length; c < h; c++) {
            let u = l[c];
            u.onLoad && u.onLoad(o);
          }
        })
        .catch((o) => {
          let l = $e[t];
          if (l === void 0) throw (this.manager.itemError(t), o);
          delete $e[t];
          for (let c = 0, h = l.length; c < h; c++) {
            let u = l[c];
            u.onError && u.onError(o);
          }
          this.manager.itemError(t);
        })
        .finally(() => {
          this.manager.itemEnd(t);
        }),
        this.manager.itemStart(t));
    }
    setResponseType(t) {
      return ((this.responseType = t), this);
    }
    setMimeType(t) {
      return ((this.mimeType = t), this);
    }
  };
var ea = class extends je {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      (this.path !== void 0 && (t = this.path + t),
        (t = this.manager.resolveURL(t)));
      let r = this,
        a = Ci.get(t);
      if (a !== void 0)
        return (
          r.manager.itemStart(t),
          setTimeout(function () {
            (e && e(a), r.manager.itemEnd(t));
          }, 0),
          a
        );
      let o = ca("img");
      function l() {
        (h(), Ci.add(t, this), e && e(this), r.manager.itemEnd(t));
      }
      function c(u) {
        (h(), i && i(u), r.manager.itemError(t), r.manager.itemEnd(t));
      }
      function h() {
        (o.removeEventListener("load", l, !1),
          o.removeEventListener("error", c, !1));
      }
      return (
        o.addEventListener("load", l, !1),
        o.addEventListener("error", c, !1),
        t.substr(0, 5) !== "data:" &&
          this.crossOrigin !== void 0 &&
          (o.crossOrigin = this.crossOrigin),
        r.manager.itemStart(t),
        (o.src = t),
        o
      );
    }
  },
  No = class extends je {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      let r = new Mi(),
        a = new ea(this.manager);
      (a.setCrossOrigin(this.crossOrigin), a.setPath(this.path));
      let o = 0;
      function l(c) {
        a.load(
          t[c],
          function (h) {
            ((r.images[c] = h),
              o++,
              o === 6 && ((r.needsUpdate = !0), e && e(r)));
          },
          void 0,
          i,
        );
      }
      for (let c = 0; c < t.length; ++c) l(c);
      return r;
    }
  };
var Fo = class extends je {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      let r = new ce(),
        a = new ea(this.manager);
      return (
        a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(
          t,
          function (o) {
            ((r.image = o), (r.needsUpdate = !0), e !== void 0 && e(r));
          },
          n,
          i,
        ),
        r
      );
    }
  },
  Re = class extends Wt {
    constructor(t, e = 1) {
      (super(),
        (this.type = "Light"),
        (this.color = new dt(t)),
        (this.intensity = e));
    }
    dispose() {}
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        this.groundColor !== void 0 &&
          (e.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (e.object.distance = this.distance),
        this.angle !== void 0 && (e.object.angle = this.angle),
        this.decay !== void 0 && (e.object.decay = this.decay),
        this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
        e
      );
    }
  };
Re.prototype.isLight = !0;
var Oo = class extends Re {
  constructor(t, e, n) {
    (super(t, n),
      (this.type = "HemisphereLight"),
      this.position.copy(Wt.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new dt(e)));
  }
  copy(t) {
    return (
      Re.prototype.copy.call(this, t),
      this.groundColor.copy(t.groundColor),
      this
    );
  }
};
Oo.prototype.isHemisphereLight = !0;
var kc = new mt(),
  Wc = new b(),
  jc = new b(),
  Ar = class {
    constructor(t) {
      ((this.camera = t),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new q(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new mt()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Si()),
        (this._frameExtents = new q(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new Ot(0, 0, 1, 1)]));
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t) {
      let e = this.camera,
        n = this.matrix;
      (Wc.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(Wc),
        jc.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(jc),
        e.updateMatrixWorld(),
        kc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(kc),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(e.projectionMatrix),
        n.multiply(e.matrixWorldInverse));
    }
    getViewport(t) {
      return this._viewports[t];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
    }
    copy(t) {
      return (
        (this.camera = t.camera.clone()),
        (this.bias = t.bias),
        (this.radius = t.radius),
        this.mapSize.copy(t.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      let t = {};
      return (
        this.bias !== 0 && (t.bias = this.bias),
        this.normalBias !== 0 && (t.normalBias = this.normalBias),
        this.radius !== 1 && (t.radius = this.radius),
        (this.mapSize.x === 512 && this.mapSize.y === 512) ||
          (t.mapSize = this.mapSize.toArray()),
        (t.camera = this.camera.toJSON(!1).object),
        delete t.camera.matrix,
        t
      );
    }
  },
  na = class extends Ar {
    constructor() {
      (super(new re(50, 1, 0.5, 500)), (this.focus = 1));
    }
    updateMatrices(t) {
      let e = this.camera,
        n = 2 * nr * t.angle * this.focus,
        i = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      ((n !== e.fov || i !== e.aspect || r !== e.far) &&
        ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()),
        super.updateMatrices(t));
    }
    copy(t) {
      return (super.copy(t), (this.focus = t.focus), this);
    }
  };
na.prototype.isSpotLightShadow = !0;
var Bo = class extends Re {
  constructor(t, e, n = 0, i = Math.PI / 3, r = 0, a = 1) {
    (super(t, e),
      (this.type = "SpotLight"),
      this.position.copy(Wt.DefaultUp),
      this.updateMatrix(),
      (this.target = new Wt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.shadow = new na()));
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.distance = t.distance),
      (this.angle = t.angle),
      (this.penumbra = t.penumbra),
      (this.decay = t.decay),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
};
Bo.prototype.isSpotLight = !0;
var qc = new mt(),
  ji = new b(),
  Ja = new b(),
  ia = class extends Ar {
    constructor() {
      (super(new re(90, 1, 0.5, 500)),
        (this._frameExtents = new q(4, 2)),
        (this._viewportCount = 6),
        (this._viewports = [
          new Ot(2, 1, 1, 1),
          new Ot(0, 1, 1, 1),
          new Ot(3, 1, 1, 1),
          new Ot(1, 1, 1, 1),
          new Ot(3, 0, 1, 1),
          new Ot(1, 0, 1, 1),
        ]),
        (this._cubeDirections = [
          new b(1, 0, 0),
          new b(-1, 0, 0),
          new b(0, 0, 1),
          new b(0, 0, -1),
          new b(0, 1, 0),
          new b(0, -1, 0),
        ]),
        (this._cubeUps = [
          new b(0, 1, 0),
          new b(0, 1, 0),
          new b(0, 1, 0),
          new b(0, 1, 0),
          new b(0, 0, 1),
          new b(0, 0, -1),
        ]));
    }
    updateMatrices(t, e = 0) {
      let n = this.camera,
        i = this.matrix,
        r = t.distance || n.far;
      (r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
        ji.setFromMatrixPosition(t.matrixWorld),
        n.position.copy(ji),
        Ja.copy(n.position),
        Ja.add(this._cubeDirections[e]),
        n.up.copy(this._cubeUps[e]),
        n.lookAt(Ja),
        n.updateMatrixWorld(),
        i.makeTranslation(-ji.x, -ji.y, -ji.z),
        qc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(qc));
    }
  };
ia.prototype.isPointLightShadow = !0;
var Uo = class extends Re {
  constructor(t, e, n = 0, i = 1) {
    (super(t, e),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new ia()));
  }
  get power() {
    return 4 * this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.distance = t.distance),
      (this.decay = t.decay),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
};
Uo.prototype.isPointLight = !0;
var ra = class extends Ar {
  constructor() {
    super(new sr(-5, 5, 5, -5, 0.5, 500));
  }
};
ra.prototype.isDirectionalLightShadow = !0;
var Ho = class extends Re {
  constructor(t, e) {
    (super(t, e),
      (this.type = "DirectionalLight"),
      this.position.copy(Wt.DefaultUp),
      this.updateMatrix(),
      (this.target = new Wt()),
      (this.shadow = new ra()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
};
Ho.prototype.isDirectionalLight = !0;
var Go = class extends Re {
  constructor(t, e) {
    (super(t, e), (this.type = "AmbientLight"));
  }
};
Go.prototype.isAmbientLight = !0;
var Vo = class extends Re {
  constructor(t, e, n = 10, i = 10) {
    (super(t, e),
      (this.type = "RectAreaLight"),
      (this.width = n),
      (this.height = i));
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(t) {
    this.intensity = t / (this.width * this.height * Math.PI);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.width = t.width),
      (this.height = t.height),
      this
    );
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return ((e.object.width = this.width), (e.object.height = this.height), e);
  }
};
Vo.prototype.isRectAreaLight = !0;
var sa = class {
  constructor() {
    this.coefficients = [];
    for (let t = 0; t < 9; t++) this.coefficients.push(new b());
  }
  set(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
    return this;
  }
  zero() {
    for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
    return this;
  }
  getAt(t, e) {
    let n = t.x,
      i = t.y,
      r = t.z,
      a = this.coefficients;
    return (
      e.copy(a[0]).multiplyScalar(0.282095),
      e.addScaledVector(a[1], 0.488603 * i),
      e.addScaledVector(a[2], 0.488603 * r),
      e.addScaledVector(a[3], 0.488603 * n),
      e.addScaledVector(a[4], n * i * 1.092548),
      e.addScaledVector(a[5], i * r * 1.092548),
      e.addScaledVector(a[6], 0.315392 * (3 * r * r - 1)),
      e.addScaledVector(a[7], n * r * 1.092548),
      e.addScaledVector(a[8], 0.546274 * (n * n - i * i)),
      e
    );
  }
  getIrradianceAt(t, e) {
    let n = t.x,
      i = t.y,
      r = t.z,
      a = this.coefficients;
    return (
      e.copy(a[0]).multiplyScalar(0.886227),
      e.addScaledVector(a[1], 1.023328 * i),
      e.addScaledVector(a[2], 1.023328 * r),
      e.addScaledVector(a[3], 1.023328 * n),
      e.addScaledVector(a[4], 0.858086 * n * i),
      e.addScaledVector(a[5], 0.858086 * i * r),
      e.addScaledVector(a[6], 0.743125 * r * r - 0.247708),
      e.addScaledVector(a[7], 0.858086 * n * r),
      e.addScaledVector(a[8], 0.429043 * (n * n - i * i)),
      e
    );
  }
  add(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
    return this;
  }
  addScaledSH(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(t.coefficients[n], e);
    return this;
  }
  scale(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
    return this;
  }
  lerp(t, e) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
    return this;
  }
  equals(t) {
    for (let e = 0; e < 9; e++)
      if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
    return !0;
  }
  copy(t) {
    return this.set(t.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, e = 0) {
    let n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
    return this;
  }
  toArray(t = [], e = 0) {
    let n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
    return t;
  }
  static getBasisAt(t, e) {
    let n = t.x,
      i = t.y,
      r = t.z;
    ((e[0] = 0.282095),
      (e[1] = 0.488603 * i),
      (e[2] = 0.488603 * r),
      (e[3] = 0.488603 * n),
      (e[4] = 1.092548 * n * i),
      (e[5] = 1.092548 * i * r),
      (e[6] = 0.315392 * (3 * r * r - 1)),
      (e[7] = 1.092548 * n * r),
      (e[8] = 0.546274 * (n * n - i * i)));
  }
};
sa.prototype.isSphericalHarmonics3 = !0;
var Rr = class extends Re {
  constructor(t = new sa(), e = 1) {
    (super(void 0, e), (this.sh = t));
  }
  copy(t) {
    return (super.copy(t), this.sh.copy(t.sh), this);
  }
  fromJSON(t) {
    return ((this.intensity = t.intensity), this.sh.fromArray(t.sh), this);
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return ((e.object.sh = this.sh.toArray()), e);
  }
};
Rr.prototype.isLightProbe = !0;
var ko = class {
    static decodeText(t) {
      if (typeof TextDecoder < "u") return new TextDecoder().decode(t);
      let e = "";
      for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
      try {
        return decodeURIComponent(escape(e));
      } catch {
        return e;
      }
    }
    static extractUrlBase(t) {
      let e = t.lastIndexOf("/");
      return e === -1 ? "./" : t.substr(0, e + 1);
    }
    static resolveURL(t, e) {
      return typeof t != "string" || t === ""
        ? ""
        : (/^https?:\/\//i.test(e) &&
            /^\//.test(t) &&
            (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
          /^(https?:)?\/\//i.test(t) ||
          /^data:.*,.*$/i.test(t) ||
          /^blob:.*$/i.test(t)
            ? t
            : e + t);
    }
  },
  Wo = class extends Nt {
    constructor() {
      (super(),
        (this.type = "InstancedBufferGeometry"),
        (this.instanceCount = 1 / 0));
    }
    copy(t) {
      return (super.copy(t), (this.instanceCount = t.instanceCount), this);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      let t = super.toJSON(this);
      return (
        (t.instanceCount = this.instanceCount),
        (t.isInstancedBufferGeometry = !0),
        t
      );
    }
  };
Wo.prototype.isInstancedBufferGeometry = !0;
var jo = class extends je {
  constructor(t) {
    (super(t),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported.",
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" }));
  }
  setOptions(t) {
    return ((this.options = t), this);
  }
  load(t, e, n, i) {
    (t === void 0 && (t = ""),
      this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t)));
    let r = this,
      a = Ci.get(t);
    if (a !== void 0)
      return (
        r.manager.itemStart(t),
        setTimeout(function () {
          (e && e(a), r.manager.itemEnd(t));
        }, 0),
        a
      );
    let o = {};
    ((o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      fetch(t, o)
        .then(function (l) {
          return l.blob();
        })
        .then(function (l) {
          return createImageBitmap(
            l,
            Object.assign(r.options, { colorSpaceConversion: "none" }),
          );
        })
        .then(function (l) {
          (Ci.add(t, l), e && e(l), r.manager.itemEnd(t));
        })
        .catch(function (l) {
          (i && i(l), r.manager.itemError(t), r.manager.itemEnd(t));
        }),
      r.manager.itemStart(t));
  }
};
jo.prototype.isImageBitmapLoader = !0;
var ps,
  P0 = {
    getContext: function () {
      return (
        ps === void 0 &&
          (ps = new (Ge.AudioContext || Ge.webkitAudioContext)()),
        ps
      );
    },
    setContext: function (s) {
      ps = s;
    },
  },
  qo = class extends je {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      let r = this,
        a = new zo(this.manager);
      (a.setResponseType("arraybuffer"),
        a.setPath(this.path),
        a.setRequestHeader(this.requestHeader),
        a.setWithCredentials(this.withCredentials),
        a.load(
          t,
          function (o) {
            try {
              let l = o.slice(0);
              P0.getContext().decodeAudioData(l, function (h) {
                e(h);
              });
            } catch (l) {
              (i ? i(l) : console.error(l), r.manager.itemError(t));
            }
          },
          n,
          i,
        ));
    }
  },
  Xo = class extends Rr {
    constructor(t, e, n = 1) {
      super(void 0, n);
      let i = new dt().set(t),
        r = new dt().set(e),
        a = new b(i.r, i.g, i.b),
        o = new b(r.r, r.g, r.b),
        l = Math.sqrt(Math.PI),
        c = l * Math.sqrt(0.75);
      (this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),
        this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c));
    }
  };
Xo.prototype.isHemisphereLightProbe = !0;
var Jo = class extends Rr {
  constructor(t, e = 1) {
    super(void 0, e);
    let n = new dt().set(t);
    this.sh.coefficients[0]
      .set(n.r, n.g, n.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
};
Jo.prototype.isAmbientLightProbe = !0;
var K0 = new mt(),
  tv = new mt(),
  ev = new mt();
var nv = new b(),
  iv = new oe(),
  rv = new b(),
  sv = new b();
var Yo = class extends Wt {
    constructor(t) {
      (super(),
        (this.type = "Audio"),
        (this.listener = t),
        (this.context = t.context),
        (this.gain = this.context.createGain()),
        this.gain.connect(t.getInput()),
        (this.autoplay = !1),
        (this.buffer = null),
        (this.detune = 0),
        (this.loop = !1),
        (this.loopStart = 0),
        (this.loopEnd = 0),
        (this.offset = 0),
        (this.duration = void 0),
        (this.playbackRate = 1),
        (this.isPlaying = !1),
        (this.hasPlaybackControl = !0),
        (this.source = null),
        (this.sourceType = "empty"),
        (this._startedAt = 0),
        (this._progress = 0),
        (this._connected = !1),
        (this.filters = []));
    }
    getOutput() {
      return this.gain;
    }
    setNodeSource(t) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = "audioNode"),
        (this.source = t),
        this.connect(),
        this
      );
    }
    setMediaElementSource(t) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = "mediaNode"),
        (this.source = this.context.createMediaElementSource(t)),
        this.connect(),
        this
      );
    }
    setMediaStreamSource(t) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = "mediaStreamNode"),
        (this.source = this.context.createMediaStreamSource(t)),
        this.connect(),
        this
      );
    }
    setBuffer(t) {
      return (
        (this.buffer = t),
        (this.sourceType = "buffer"),
        this.autoplay && this.play(),
        this
      );
    }
    play(t = 0) {
      if (this.isPlaying === !0) {
        console.warn("THREE.Audio: Audio is already playing.");
        return;
      }
      if (this.hasPlaybackControl === !1) {
        console.warn("THREE.Audio: this Audio has no playback control.");
        return;
      }
      this._startedAt = this.context.currentTime + t;
      let e = this.context.createBufferSource();
      return (
        (e.buffer = this.buffer),
        (e.loop = this.loop),
        (e.loopStart = this.loopStart),
        (e.loopEnd = this.loopEnd),
        (e.onended = this.onEnded.bind(this)),
        e.start(this._startedAt, this._progress + this.offset, this.duration),
        (this.isPlaying = !0),
        (this.source = e),
        this.setDetune(this.detune),
        this.setPlaybackRate(this.playbackRate),
        this.connect()
      );
    }
    pause() {
      if (this.hasPlaybackControl !== !1)
        return (
          this.isPlaying === !0 &&
            ((this._progress +=
              Math.max(this.context.currentTime - this._startedAt, 0) *
              this.playbackRate),
            this.loop === !0 &&
              (this._progress =
                this._progress % (this.duration || this.buffer.duration)),
            this.source.stop(),
            (this.source.onended = null),
            (this.isPlaying = !1)),
          this
        );
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
    stop() {
      if (this.hasPlaybackControl !== !1)
        return (
          (this._progress = 0),
          this.source.stop(),
          (this.source.onended = null),
          (this.isPlaying = !1),
          this
        );
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
    connect() {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++)
          this.filters[t - 1].connect(this.filters[t]);
        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else this.source.connect(this.getOutput());
      return ((this._connected = !0), this);
    }
    disconnect() {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++)
          this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return ((this._connected = !1), this);
    }
    getFilters() {
      return this.filters;
    }
    setFilters(t) {
      return (
        t || (t = []),
        this._connected === !0
          ? (this.disconnect(), (this.filters = t.slice()), this.connect())
          : (this.filters = t.slice()),
        this
      );
    }
    setDetune(t) {
      if (((this.detune = t), this.source.detune !== void 0))
        return (
          this.isPlaying === !0 &&
            this.source.detune.setTargetAtTime(
              this.detune,
              this.context.currentTime,
              0.01,
            ),
          this
        );
    }
    getDetune() {
      return this.detune;
    }
    getFilter() {
      return this.getFilters()[0];
    }
    setFilter(t) {
      return this.setFilters(t ? [t] : []);
    }
    setPlaybackRate(t) {
      if (this.hasPlaybackControl !== !1)
        return (
          (this.playbackRate = t),
          this.isPlaying === !0 &&
            this.source.playbackRate.setTargetAtTime(
              this.playbackRate,
              this.context.currentTime,
              0.01,
            ),
          this
        );
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
    getPlaybackRate() {
      return this.playbackRate;
    }
    onEnded() {
      this.isPlaying = !1;
    }
    getLoop() {
      return this.hasPlaybackControl === !1
        ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
        : this.loop;
    }
    setLoop(t) {
      if (this.hasPlaybackControl !== !1)
        return (
          (this.loop = t),
          this.isPlaying === !0 && (this.source.loop = this.loop),
          this
        );
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
    setLoopStart(t) {
      return ((this.loopStart = t), this);
    }
    setLoopEnd(t) {
      return ((this.loopEnd = t), this);
    }
    getVolume() {
      return this.gain.gain.value;
    }
    setVolume(t) {
      return (
        this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
        this
      );
    }
  },
  av = new b(),
  ov = new oe(),
  lv = new b(),
  cv = new b();
var Zo = class {
    constructor(t, e = 2048) {
      ((this.analyser = t.context.createAnalyser()),
        (this.analyser.fftSize = e),
        (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
        t.getOutput().connect(this.analyser));
    }
    getFrequencyData() {
      return (this.analyser.getByteFrequencyData(this.data), this.data);
    }
    getAverageFrequency() {
      let t = 0,
        e = this.getFrequencyData();
      for (let n = 0; n < e.length; n++) t += e[n];
      return t / e.length;
    }
  },
  Qo = class {
    constructor(t, e, n) {
      ((this.binding = t), (this.valueSize = n));
      let i, r, a;
      switch (e) {
        case "quaternion":
          ((i = this._slerp),
            (r = this._slerpAdditive),
            (a = this._setAdditiveIdentityQuaternion),
            (this.buffer = new Float64Array(6 * n)),
            (this._workIndex = 5));
          break;
        case "string":
        case "bool":
          ((i = this._select),
            (r = this._select),
            (a = this._setAdditiveIdentityOther),
            (this.buffer = new Array(5 * n)));
          break;
        default:
          ((i = this._lerp),
            (r = this._lerpAdditive),
            (a = this._setAdditiveIdentityNumeric),
            (this.buffer = new Float64Array(5 * n)));
      }
      ((this._mixBufferRegion = i),
        (this._mixBufferRegionAdditive = r),
        (this._setIdentity = a),
        (this._origIndex = 3),
        (this._addIndex = 4),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        (this.useCount = 0),
        (this.referenceCount = 0));
    }
    accumulate(t, e) {
      let n = this.buffer,
        i = this.valueSize,
        r = t * i + i,
        a = this.cumulativeWeight;
      if (a === 0) {
        for (let o = 0; o !== i; ++o) n[r + o] = n[o];
        a = e;
      } else {
        a += e;
        let o = e / a;
        this._mixBufferRegion(n, r, 0, o, i);
      }
      this.cumulativeWeight = a;
    }
    accumulateAdditive(t) {
      let e = this.buffer,
        n = this.valueSize,
        i = n * this._addIndex;
      (this.cumulativeWeightAdditive === 0 && this._setIdentity(),
        this._mixBufferRegionAdditive(e, i, 0, t, n),
        (this.cumulativeWeightAdditive += t));
    }
    apply(t) {
      let e = this.valueSize,
        n = this.buffer,
        i = t * e + e,
        r = this.cumulativeWeight,
        a = this.cumulativeWeightAdditive,
        o = this.binding;
      if (
        ((this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        r < 1)
      ) {
        let l = e * this._origIndex;
        this._mixBufferRegion(n, i, l, 1 - r, e);
      }
      a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
      for (let l = e, c = e + e; l !== c; ++l)
        if (n[l] !== n[l + e]) {
          o.setValue(n, i);
          break;
        }
    }
    saveOriginalState() {
      let t = this.binding,
        e = this.buffer,
        n = this.valueSize,
        i = n * this._origIndex;
      t.getValue(e, i);
      for (let r = n, a = i; r !== a; ++r) e[r] = e[i + (r % n)];
      (this._setIdentity(),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0));
    }
    restoreOriginalState() {
      let t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t);
    }
    _setAdditiveIdentityNumeric() {
      let t = this._addIndex * this.valueSize,
        e = t + this.valueSize;
      for (let n = t; n < e; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      (this._setAdditiveIdentityNumeric(),
        (this.buffer[this._addIndex * this.valueSize + 3] = 1));
    }
    _setAdditiveIdentityOther() {
      let t = this._origIndex * this.valueSize,
        e = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++)
        this.buffer[e + n] = this.buffer[t + n];
    }
    _select(t, e, n, i, r) {
      if (i >= 0.5) for (let a = 0; a !== r; ++a) t[e + a] = t[n + a];
    }
    _slerp(t, e, n, i) {
      oe.slerpFlat(t, e, t, e, t, n, i);
    }
    _slerpAdditive(t, e, n, i, r) {
      let a = this._workIndex * r;
      (oe.multiplyQuaternionsFlat(t, a, t, e, t, n),
        oe.slerpFlat(t, e, t, e, t, a, i));
    }
    _lerp(t, e, n, i, r) {
      let a = 1 - i;
      for (let o = 0; o !== r; ++o) {
        let l = e + o;
        t[l] = t[l] * a + t[n + o] * i;
      }
    }
    _lerpAdditive(t, e, n, i, r) {
      for (let a = 0; a !== r; ++a) {
        let o = e + a;
        t[o] = t[o] + t[n + a] * i;
      }
    }
  },
  gl = "\\[\\]\\.:\\/",
  I0 = new RegExp("[" + gl + "]", "g"),
  vl = "[^" + gl + "]",
  D0 = "[^" + gl.replace("\\.", "") + "]",
  z0 = /((?:WC+[\/:])*)/.source.replace("WC", vl),
  N0 = /(WCOD+)?/.source.replace("WCOD", D0),
  F0 = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", vl),
  O0 = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", vl),
  B0 = new RegExp("^" + z0 + N0 + F0 + O0 + "$"),
  U0 = ["material", "materials", "bones"],
  $o = class {
    constructor(t, e, n) {
      let i = n || kt.parseTrackName(e);
      ((this._targetGroup = t), (this._bindings = t.subscribe_(e, i)));
    }
    getValue(t, e) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      i !== void 0 && i.getValue(t, e);
    }
    setValue(t, e) {
      let n = this._bindings;
      for (
        let i = this._targetGroup.nCachedObjects_, r = n.length;
        i !== r;
        ++i
      )
        n[i].setValue(t, e);
    }
    bind() {
      let t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].bind();
    }
    unbind() {
      let t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].unbind();
    }
  },
  kt = class s {
    constructor(t, e, n) {
      ((this.path = e),
        (this.parsedPath = n || s.parseTrackName(e)),
        (this.node = s.findNode(t, this.parsedPath.nodeName) || t),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, e, n) {
      return t && t.isAnimationObjectGroup
        ? new s.Composite(t, e, n)
        : new s(t, e, n);
    }
    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(I0, "");
    }
    static parseTrackName(t) {
      let e = B0.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      let n = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6],
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (i !== void 0 && i !== -1) {
        let r = n.nodeName.substring(i + 1);
        U0.indexOf(r) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + t,
        );
      return n;
    }
    static findNode(t, e) {
      if (
        !e ||
        e === "" ||
        e === "." ||
        e === -1 ||
        e === t.name ||
        e === t.uuid
      )
        return t;
      if (t.skeleton) {
        let n = t.skeleton.getBoneByName(e);
        if (n !== void 0) return n;
      }
      if (t.children) {
        let n = function (r) {
            for (let a = 0; a < r.length; a++) {
              let o = r[a];
              if (o.name === e || o.uuid === e) return o;
              let l = n(o.children);
              if (l) return l;
            }
            return null;
          },
          i = n(t.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
      t[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t, e) {
      let n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
    }
    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
      ((this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      ((this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(t, e) {
      let n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
      let n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      let n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
      ((this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      ((this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
      (this.resolvedProperty.fromArray(t, e),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      (this.resolvedProperty.fromArray(t, e),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(t, e) {
      (this.bind(), this.getValue(t, e));
    }
    _setValue_unbound(t, e) {
      (this.bind(), this.setValue(t, e));
    }
    bind() {
      let t = this.node,
        e = this.parsedPath,
        n = e.objectName,
        i = e.propertyName,
        r = e.propertyIndex;
      if (
        (t ||
          ((t = s.findNode(this.rootNode, e.nodeName) || this.rootNode),
          (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found.",
        );
        return;
      }
      if (n) {
        let c = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t.material) {
              console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this,
              );
              return;
            }
            if (!t.material.materials) {
              console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this,
              );
              return;
            }
            t = t.material.materials;
            break;
          case "bones":
            if (!t.skeleton) {
              console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this,
              );
              return;
            }
            t = t.skeleton.bones;
            for (let h = 0; h < t.length; h++)
              if (t[h].name === c) {
                c = h;
                break;
              }
            break;
          default:
            if (t[n] === void 0) {
              console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this,
              );
              return;
            }
            t = t[n];
        }
        if (c !== void 0) {
          if (t[c] === void 0) {
            console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              t,
            );
            return;
          }
          t = t[c];
        }
      }
      let a = t[i];
      if (a === void 0) {
        let c = e.nodeName;
        console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            c +
            "." +
            i +
            " but it wasn't found.",
          t,
        );
        return;
      }
      let o = this.Versioning.None;
      ((this.targetObject = t),
        t.needsUpdate !== void 0
          ? (o = this.Versioning.NeedsUpdate)
          : t.matrixWorldNeedsUpdate !== void 0 &&
            (o = this.Versioning.MatrixWorldNeedsUpdate));
      let l = this.BindingType.Direct;
      if (r !== void 0) {
        if (i === "morphTargetInfluences") {
          if (!t.geometry) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this,
            );
            return;
          }
          if (!t.geometry.isBufferGeometry) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
              this,
            );
            return;
          }
          if (!t.geometry.morphAttributes) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this,
            );
            return;
          }
          t.morphTargetDictionary[r] !== void 0 &&
            (r = t.morphTargetDictionary[r]);
        }
        ((l = this.BindingType.ArrayElement),
          (this.resolvedProperty = a),
          (this.propertyIndex = r));
      } else
        a.fromArray !== void 0 && a.toArray !== void 0
          ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
          : Array.isArray(a)
            ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
            : (this.propertyName = i);
      ((this.getValue = this.GetterByBindingType[l]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[l][o]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
kt.Composite = $o;
kt.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
kt.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
kt.prototype.GetterByBindingType = [
  kt.prototype._getValue_direct,
  kt.prototype._getValue_array,
  kt.prototype._getValue_arrayElement,
  kt.prototype._getValue_toArray,
];
kt.prototype.SetterByBindingTypeAndVersioning = [
  [
    kt.prototype._setValue_direct,
    kt.prototype._setValue_direct_setNeedsUpdate,
    kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    kt.prototype._setValue_array,
    kt.prototype._setValue_array_setNeedsUpdate,
    kt.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    kt.prototype._setValue_arrayElement,
    kt.prototype._setValue_arrayElement_setNeedsUpdate,
    kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    kt.prototype._setValue_fromArray,
    kt.prototype._setValue_fromArray_setNeedsUpdate,
    kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
var Ko = class {
  constructor() {
    ((this.uuid = Ee()),
      (this._objects = Array.prototype.slice.call(arguments)),
      (this.nCachedObjects_ = 0));
    let t = {};
    this._indicesByUUID = t;
    for (let n = 0, i = arguments.length; n !== i; ++n)
      t[arguments[n].uuid] = n;
    ((this._paths = []),
      (this._parsedPaths = []),
      (this._bindings = []),
      (this._bindingsIndicesByPath = {}));
    let e = this;
    this.stats = {
      objects: {
        get total() {
          return e._objects.length;
        },
        get inUse() {
          return this.total - e.nCachedObjects_;
        },
      },
      get bindingsPerObject() {
        return e._bindings.length;
      },
    };
  }
  add() {
    let t = this._objects,
      e = this._indicesByUUID,
      n = this._paths,
      i = this._parsedPaths,
      r = this._bindings,
      a = r.length,
      o,
      l = t.length,
      c = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      let d = arguments[h],
        f = d.uuid,
        g = e[f];
      if (g === void 0) {
        ((g = l++), (e[f] = g), t.push(d));
        for (let v = 0, x = a; v !== x; ++v) r[v].push(new kt(d, n[v], i[v]));
      } else if (g < c) {
        o = t[g];
        let v = --c,
          x = t[v];
        ((e[x.uuid] = g), (t[g] = x), (e[f] = v), (t[v] = d));
        for (let m = 0, p = a; m !== p; ++m) {
          let _ = r[m],
            y = _[v],
            w = _[g];
          ((_[g] = y), w === void 0 && (w = new kt(d, n[m], i[m])), (_[v] = w));
        }
      } else
        t[g] !== o &&
          console.error(
            "THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.",
          );
    }
    this.nCachedObjects_ = c;
  }
  remove() {
    let t = this._objects,
      e = this._indicesByUUID,
      n = this._bindings,
      i = n.length,
      r = this.nCachedObjects_;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      let l = arguments[a],
        c = l.uuid,
        h = e[c];
      if (h !== void 0 && h >= r) {
        let u = r++,
          d = t[u];
        ((e[d.uuid] = h), (t[h] = d), (e[c] = u), (t[u] = l));
        for (let f = 0, g = i; f !== g; ++f) {
          let v = n[f],
            x = v[u],
            m = v[h];
          ((v[h] = x), (v[u] = m));
        }
      }
    }
    this.nCachedObjects_ = r;
  }
  uncache() {
    let t = this._objects,
      e = this._indicesByUUID,
      n = this._bindings,
      i = n.length,
      r = this.nCachedObjects_,
      a = t.length;
    for (let o = 0, l = arguments.length; o !== l; ++o) {
      let c = arguments[o],
        h = c.uuid,
        u = e[h];
      if (u !== void 0)
        if ((delete e[h], u < r)) {
          let d = --r,
            f = t[d],
            g = --a,
            v = t[g];
          ((e[f.uuid] = u), (t[u] = f), (e[v.uuid] = d), (t[d] = v), t.pop());
          for (let x = 0, m = i; x !== m; ++x) {
            let p = n[x],
              _ = p[d],
              y = p[g];
            ((p[u] = _), (p[d] = y), p.pop());
          }
        } else {
          let d = --a,
            f = t[d];
          (d > 0 && (e[f.uuid] = u), (t[u] = f), t.pop());
          for (let g = 0, v = i; g !== v; ++g) {
            let x = n[g];
            ((x[u] = x[d]), x.pop());
          }
        }
    }
    this.nCachedObjects_ = r;
  }
  subscribe_(t, e) {
    let n = this._bindingsIndicesByPath,
      i = n[t],
      r = this._bindings;
    if (i !== void 0) return r[i];
    let a = this._paths,
      o = this._parsedPaths,
      l = this._objects,
      c = l.length,
      h = this.nCachedObjects_,
      u = new Array(c);
    ((i = r.length), (n[t] = i), a.push(t), o.push(e), r.push(u));
    for (let d = h, f = l.length; d !== f; ++d) {
      let g = l[d];
      u[d] = new kt(g, t, e);
    }
    return u;
  }
  unsubscribe_(t) {
    let e = this._bindingsIndicesByPath,
      n = e[t];
    if (n !== void 0) {
      let i = this._paths,
        r = this._parsedPaths,
        a = this._bindings,
        o = a.length - 1,
        l = a[o],
        c = t[o];
      ((e[c] = n),
        (a[n] = l),
        a.pop(),
        (r[n] = r[o]),
        r.pop(),
        (i[n] = i[o]),
        i.pop());
    }
  }
};
Ko.prototype.isAnimationObjectGroup = !0;
var tl = class {
    constructor(t, e, n = null, i = e.blendMode) {
      ((this._mixer = t),
        (this._clip = e),
        (this._localRoot = n),
        (this.blendMode = i));
      let r = e.tracks,
        a = r.length,
        o = new Array(a),
        l = { endingStart: di, endingEnd: di };
      for (let c = 0; c !== a; ++c) {
        let h = r[c].createInterpolant(null);
        ((o[c] = h), (h.settings = l));
      }
      ((this._interpolantSettings = l),
        (this._interpolants = o),
        (this._propertyBindings = new Array(a)),
        (this._cacheIndex = null),
        (this._byClipCacheIndex = null),
        (this._timeScaleInterpolant = null),
        (this._weightInterpolant = null),
        (this.loop = nd),
        (this._loopCount = -1),
        (this._startTime = null),
        (this.time = 0),
        (this.timeScale = 1),
        (this._effectiveTimeScale = 1),
        (this.weight = 1),
        (this._effectiveWeight = 1),
        (this.repetitions = 1 / 0),
        (this.paused = !1),
        (this.enabled = !0),
        (this.clampWhenFinished = !1),
        (this.zeroSlopeAtStart = !0),
        (this.zeroSlopeAtEnd = !0));
    }
    play() {
      return (this._mixer._activateAction(this), this);
    }
    stop() {
      return (this._mixer._deactivateAction(this), this.reset());
    }
    reset() {
      return (
        (this.paused = !1),
        (this.enabled = !0),
        (this.time = 0),
        (this._loopCount = -1),
        (this._startTime = null),
        this.stopFading().stopWarping()
      );
    }
    isRunning() {
      return (
        this.enabled &&
        !this.paused &&
        this.timeScale !== 0 &&
        this._startTime === null &&
        this._mixer._isActiveAction(this)
      );
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(t) {
      return ((this._startTime = t), this);
    }
    setLoop(t, e) {
      return ((this.loop = t), (this.repetitions = e), this);
    }
    setEffectiveWeight(t) {
      return (
        (this.weight = t),
        (this._effectiveWeight = this.enabled ? t : 0),
        this.stopFading()
      );
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(t) {
      return this._scheduleFading(t, 0, 1);
    }
    fadeOut(t) {
      return this._scheduleFading(t, 1, 0);
    }
    crossFadeFrom(t, e, n) {
      if ((t.fadeOut(e), this.fadeIn(e), n)) {
        let i = this._clip.duration,
          r = t._clip.duration,
          a = r / i,
          o = i / r;
        (t.warp(1, a, e), this.warp(o, 1, e));
      }
      return this;
    }
    crossFadeTo(t, e, n) {
      return t.crossFadeFrom(this, e, n);
    }
    stopFading() {
      let t = this._weightInterpolant;
      return (
        t !== null &&
          ((this._weightInterpolant = null),
          this._mixer._takeBackControlInterpolant(t)),
        this
      );
    }
    setEffectiveTimeScale(t) {
      return (
        (this.timeScale = t),
        (this._effectiveTimeScale = this.paused ? 0 : t),
        this.stopWarping()
      );
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(t) {
      return ((this.timeScale = this._clip.duration / t), this.stopWarping());
    }
    syncWith(t) {
      return (
        (this.time = t.time),
        (this.timeScale = t.timeScale),
        this.stopWarping()
      );
    }
    halt(t) {
      return this.warp(this._effectiveTimeScale, 0, t);
    }
    warp(t, e, n) {
      let i = this._mixer,
        r = i.time,
        a = this.timeScale,
        o = this._timeScaleInterpolant;
      o === null &&
        ((o = i._lendControlInterpolant()), (this._timeScaleInterpolant = o));
      let l = o.parameterPositions,
        c = o.sampleValues;
      return ((l[0] = r), (l[1] = r + n), (c[0] = t / a), (c[1] = e / a), this);
    }
    stopWarping() {
      let t = this._timeScaleInterpolant;
      return (
        t !== null &&
          ((this._timeScaleInterpolant = null),
          this._mixer._takeBackControlInterpolant(t)),
        this
      );
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(t, e, n, i) {
      if (!this.enabled) {
        this._updateWeight(t);
        return;
      }
      let r = this._startTime;
      if (r !== null) {
        let l = (t - r) * n;
        if (l < 0 || n === 0) return;
        ((this._startTime = null), (e = n * l));
      }
      e *= this._updateTimeScale(t);
      let a = this._updateTime(e),
        o = this._updateWeight(t);
      if (o > 0) {
        let l = this._interpolants,
          c = this._propertyBindings;
        switch (this.blendMode) {
          case th:
            for (let h = 0, u = l.length; h !== u; ++h)
              (l[h].evaluate(a), c[h].accumulateAdditive(o));
            break;
          case hl:
          default:
            for (let h = 0, u = l.length; h !== u; ++h)
              (l[h].evaluate(a), c[h].accumulate(i, o));
        }
      }
    }
    _updateWeight(t) {
      let e = 0;
      if (this.enabled) {
        e = this.weight;
        let n = this._weightInterpolant;
        if (n !== null) {
          let i = n.evaluate(t)[0];
          ((e *= i),
            t > n.parameterPositions[1] &&
              (this.stopFading(), i === 0 && (this.enabled = !1)));
        }
      }
      return ((this._effectiveWeight = e), e);
    }
    _updateTimeScale(t) {
      let e = 0;
      if (!this.paused) {
        e = this.timeScale;
        let n = this._timeScaleInterpolant;
        if (n !== null) {
          let i = n.evaluate(t)[0];
          ((e *= i),
            t > n.parameterPositions[1] &&
              (this.stopWarping(),
              e === 0 ? (this.paused = !0) : (this.timeScale = e)));
        }
      }
      return ((this._effectiveTimeScale = e), e);
    }
    _updateTime(t) {
      let e = this._clip.duration,
        n = this.loop,
        i = this.time + t,
        r = this._loopCount,
        a = n === id;
      if (t === 0) return r === -1 ? i : a && (1 & r) === 1 ? e - i : i;
      if (n === ed) {
        r === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
        t: {
          if (i >= e) i = e;
          else {
            if (!(i < 0)) {
              this.time = i;
              break t;
            }
            i = 0;
          }
          (this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t < 0 ? -1 : 1,
            }));
        }
      } else {
        if (
          (r === -1 &&
            (t >= 0
              ? ((r = 0), this._setEndings(!0, this.repetitions === 0, a))
              : this._setEndings(this.repetitions === 0, !0, a)),
          i >= e || i < 0)
        ) {
          let o = Math.floor(i / e);
          ((i -= e * o), (r += Math.abs(o)));
          let l = this.repetitions - r;
          if (l <= 0)
            (this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (i = t > 0 ? e : 0),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: t > 0 ? 1 : -1,
              }));
          else {
            if (l === 1) {
              let c = t < 0;
              this._setEndings(c, !c, a);
            } else this._setEndings(!1, !1, a);
            ((this._loopCount = r),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: o,
              }));
          }
        } else this.time = i;
        if (a && (1 & r) === 1) return e - i;
      }
      return i;
    }
    _setEndings(t, e, n) {
      let i = this._interpolantSettings;
      n
        ? ((i.endingStart = pi), (i.endingEnd = pi))
        : ((i.endingStart = t ? (this.zeroSlopeAtStart ? pi : di) : xs),
          (i.endingEnd = e ? (this.zeroSlopeAtEnd ? pi : di) : xs));
    }
    _scheduleFading(t, e, n) {
      let i = this._mixer,
        r = i.time,
        a = this._weightInterpolant;
      a === null &&
        ((a = i._lendControlInterpolant()), (this._weightInterpolant = a));
      let o = a.parameterPositions,
        l = a.sampleValues;
      return ((o[0] = r), (l[0] = e), (o[1] = r + t), (l[1] = n), this);
    }
  },
  el = class extends tn {
    constructor(t) {
      (super(),
        (this._root = t),
        this._initMemoryManager(),
        (this._accuIndex = 0),
        (this.time = 0),
        (this.timeScale = 1));
    }
    _bindAction(t, e) {
      let n = t._localRoot || this._root,
        i = t._clip.tracks,
        r = i.length,
        a = t._propertyBindings,
        o = t._interpolants,
        l = n.uuid,
        c = this._bindingsByRootAndName,
        h = c[l];
      h === void 0 && ((h = {}), (c[l] = h));
      for (let u = 0; u !== r; ++u) {
        let d = i[u],
          f = d.name,
          g = h[f];
        if (g !== void 0) a[u] = g;
        else {
          if (((g = a[u]), g !== void 0)) {
            g._cacheIndex === null &&
              (++g.referenceCount, this._addInactiveBinding(g, l, f));
            continue;
          }
          let v = e && e._propertyBindings[u].binding.parsedPath;
          ((g = new Qo(kt.create(n, f, v), d.ValueTypeName, d.getValueSize())),
            ++g.referenceCount,
            this._addInactiveBinding(g, l, f),
            (a[u] = g));
        }
        o[u].resultBuffer = g.buffer;
      }
    }
    _activateAction(t) {
      if (!this._isActiveAction(t)) {
        if (t._cacheIndex === null) {
          let n = (t._localRoot || this._root).uuid,
            i = t._clip.uuid,
            r = this._actionsByClip[i];
          (this._bindAction(t, r && r.knownActions[0]),
            this._addInactiveAction(t, i, n));
        }
        let e = t._propertyBindings;
        for (let n = 0, i = e.length; n !== i; ++n) {
          let r = e[n];
          r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
        }
        this._lendAction(t);
      }
    }
    _deactivateAction(t) {
      if (this._isActiveAction(t)) {
        let e = t._propertyBindings;
        for (let n = 0, i = e.length; n !== i; ++n) {
          let r = e[n];
          --r.useCount === 0 &&
            (r.restoreOriginalState(), this._takeBackBinding(r));
        }
        this._takeBackAction(t);
      }
    }
    _initMemoryManager() {
      ((this._actions = []),
        (this._nActiveActions = 0),
        (this._actionsByClip = {}),
        (this._bindings = []),
        (this._nActiveBindings = 0),
        (this._bindingsByRootAndName = {}),
        (this._controlInterpolants = []),
        (this._nActiveControlInterpolants = 0));
      let t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length;
          },
          get inUse() {
            return t._nActiveActions;
          },
        },
        bindings: {
          get total() {
            return t._bindings.length;
          },
          get inUse() {
            return t._nActiveBindings;
          },
        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length;
          },
          get inUse() {
            return t._nActiveControlInterpolants;
          },
        },
      };
    }
    _isActiveAction(t) {
      let e = t._cacheIndex;
      return e !== null && e < this._nActiveActions;
    }
    _addInactiveAction(t, e, n) {
      let i = this._actions,
        r = this._actionsByClip,
        a = r[e];
      if (a === void 0)
        ((a = { knownActions: [t], actionByRoot: {} }),
          (t._byClipCacheIndex = 0),
          (r[e] = a));
      else {
        let o = a.knownActions;
        ((t._byClipCacheIndex = o.length), o.push(t));
      }
      ((t._cacheIndex = i.length), i.push(t), (a.actionByRoot[n] = t));
    }
    _removeInactiveAction(t) {
      let e = this._actions,
        n = e[e.length - 1],
        i = t._cacheIndex;
      ((n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null));
      let r = t._clip.uuid,
        a = this._actionsByClip,
        o = a[r],
        l = o.knownActions,
        c = l[l.length - 1],
        h = t._byClipCacheIndex;
      ((c._byClipCacheIndex = h),
        (l[h] = c),
        l.pop(),
        (t._byClipCacheIndex = null));
      let u = o.actionByRoot,
        d = (t._localRoot || this._root).uuid;
      (delete u[d],
        l.length === 0 && delete a[r],
        this._removeInactiveBindingsForAction(t));
    }
    _removeInactiveBindingsForAction(t) {
      let e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        let r = e[n];
        --r.referenceCount === 0 && this._removeInactiveBinding(r);
      }
    }
    _lendAction(t) {
      let e = this._actions,
        n = t._cacheIndex,
        i = this._nActiveActions++,
        r = e[i];
      ((t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r));
    }
    _takeBackAction(t) {
      let e = this._actions,
        n = t._cacheIndex,
        i = --this._nActiveActions,
        r = e[i];
      ((t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r));
    }
    _addInactiveBinding(t, e, n) {
      let i = this._bindingsByRootAndName,
        r = this._bindings,
        a = i[e];
      (a === void 0 && ((a = {}), (i[e] = a)),
        (a[n] = t),
        (t._cacheIndex = r.length),
        r.push(t));
    }
    _removeInactiveBinding(t) {
      let e = this._bindings,
        n = t.binding,
        i = n.rootNode.uuid,
        r = n.path,
        a = this._bindingsByRootAndName,
        o = a[i],
        l = e[e.length - 1],
        c = t._cacheIndex;
      ((l._cacheIndex = c),
        (e[c] = l),
        e.pop(),
        delete o[r],
        Object.keys(o).length === 0 && delete a[i]);
    }
    _lendBinding(t) {
      let e = this._bindings,
        n = t._cacheIndex,
        i = this._nActiveBindings++,
        r = e[i];
      ((t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r));
    }
    _takeBackBinding(t) {
      let e = this._bindings,
        n = t._cacheIndex,
        i = --this._nActiveBindings,
        r = e[i];
      ((t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r));
    }
    _lendControlInterpolant() {
      let t = this._controlInterpolants,
        e = this._nActiveControlInterpolants++,
        n = t[e];
      return (
        n === void 0 &&
          ((n = new $s(
            new Float32Array(2),
            new Float32Array(2),
            1,
            this._controlInterpolantsResultBuffer,
          )),
          (n.__cacheIndex = e),
          (t[e] = n)),
        n
      );
    }
    _takeBackControlInterpolant(t) {
      let e = this._controlInterpolants,
        n = t.__cacheIndex,
        i = --this._nActiveControlInterpolants,
        r = e[i];
      ((t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r));
    }
    clipAction(t, e, n) {
      let i = e || this._root,
        r = i.uuid,
        a = typeof t == "string" ? ta.findByName(i, t) : t,
        o = a !== null ? a.uuid : t,
        l = this._actionsByClip[o],
        c = null;
      if ((n === void 0 && (n = a !== null ? a.blendMode : hl), l !== void 0)) {
        let u = l.actionByRoot[r];
        if (u !== void 0 && u.blendMode === n) return u;
        ((c = l.knownActions[0]), a === null && (a = c._clip));
      }
      if (a === null) return null;
      let h = new tl(this, a, e, n);
      return (this._bindAction(h, c), this._addInactiveAction(h, o, r), h);
    }
    existingAction(t, e) {
      let n = e || this._root,
        i = n.uuid,
        r = typeof t == "string" ? ta.findByName(n, t) : t,
        a = r ? r.uuid : t,
        o = this._actionsByClip[a];
      return (o !== void 0 && o.actionByRoot[i]) || null;
    }
    stopAllAction() {
      let t = this._actions,
        e = this._nActiveActions;
      for (let n = e - 1; n >= 0; --n) t[n].stop();
      return this;
    }
    update(t) {
      t *= this.timeScale;
      let e = this._actions,
        n = this._nActiveActions,
        i = (this.time += t),
        r = Math.sign(t),
        a = (this._accuIndex ^= 1);
      for (let c = 0; c !== n; ++c) e[c]._update(i, t, r, a);
      let o = this._bindings,
        l = this._nActiveBindings;
      for (let c = 0; c !== l; ++c) o[c].apply(a);
      return this;
    }
    setTime(t) {
      this.time = 0;
      for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
      return this.update(t);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(t) {
      let e = this._actions,
        n = t.uuid,
        i = this._actionsByClip,
        r = i[n];
      if (r !== void 0) {
        let a = r.knownActions;
        for (let o = 0, l = a.length; o !== l; ++o) {
          let c = a[o];
          this._deactivateAction(c);
          let h = c._cacheIndex,
            u = e[e.length - 1];
          ((c._cacheIndex = null),
            (c._byClipCacheIndex = null),
            (u._cacheIndex = h),
            (e[h] = u),
            e.pop(),
            this._removeInactiveBindingsForAction(c));
        }
        delete i[n];
      }
    }
    uncacheRoot(t) {
      let e = t.uuid,
        n = this._actionsByClip;
      for (let a in n) {
        let o = n[a].actionByRoot,
          l = o[e];
        l !== void 0 &&
          (this._deactivateAction(l), this._removeInactiveAction(l));
      }
      let i = this._bindingsByRootAndName,
        r = i[e];
      if (r !== void 0)
        for (let a in r) {
          let o = r[a];
          (o.restoreOriginalState(), this._removeInactiveBinding(o));
        }
    }
    uncacheAction(t, e) {
      let n = this.existingAction(t, e);
      n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  };
el.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
var nl = class s {
    constructor(t) {
      (typeof t == "string" &&
        (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        (t = arguments[1])),
        (this.value = t));
    }
    clone() {
      return new s(
        this.value.clone === void 0 ? this.value : this.value.clone(),
      );
    }
  },
  il = class extends Hn {
    constructor(t, e, n = 1) {
      (super(t, e), (this.meshPerAttribute = n));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.meshPerAttribute = t.meshPerAttribute),
        this
      );
    }
    clone(t) {
      let e = super.clone(t);
      return ((e.meshPerAttribute = this.meshPerAttribute), e);
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.isInstancedInterleavedBuffer = !0),
        (e.meshPerAttribute = this.meshPerAttribute),
        e
      );
    }
  };
il.prototype.isInstancedInterleavedBuffer = !0;
var rl = class {
  constructor(t, e, n, i, r) {
    ((this.buffer = t),
      (this.type = e),
      (this.itemSize = n),
      (this.elementSize = i),
      (this.count = r),
      (this.version = 0));
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setBuffer(t) {
    return ((this.buffer = t), this);
  }
  setType(t, e) {
    return ((this.type = t), (this.elementSize = e), this);
  }
  setItemSize(t) {
    return ((this.itemSize = t), this);
  }
  setCount(t) {
    return ((this.count = t), this);
  }
};
rl.prototype.isGLBufferAttribute = !0;
var Xc = new q(),
  kn = class {
    constructor(t = new q(1 / 0, 1 / 0), e = new q(-1 / 0, -1 / 0)) {
      ((this.min = t), (this.max = e));
    }
    set(t, e) {
      return (this.min.copy(t), this.max.copy(e), this);
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      let n = Xc.copy(e).multiplyScalar(0.5);
      return (this.min.copy(t).sub(n), this.max.copy(t).add(n), this);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (this.min.copy(t.min), this.max.copy(t.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = 1 / 0),
        (this.max.x = this.max.y = -1 / 0),
        this
      );
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return (this.min.min(t), this.max.max(t), this);
    }
    expandByVector(t) {
      return (this.min.sub(t), this.max.add(t), this);
    }
    expandByScalar(t) {
      return (this.min.addScalar(-t), this.max.addScalar(t), this);
    }
    containsPoint(t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
      );
    }
    intersectsBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y
      );
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return Xc.copy(t).clamp(this.min, this.max).sub(t).length();
    }
    intersect(t) {
      return (this.min.max(t.min), this.max.min(t.max), this);
    }
    union(t) {
      return (this.min.min(t.min), this.max.max(t.max), this);
    }
    translate(t) {
      return (this.min.add(t), this.max.add(t), this);
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  };
kn.prototype.isBox2 = !0;
var Jc = new b(),
  fs = new b(),
  sl = class {
    constructor(t = new b(), e = new b()) {
      ((this.start = t), (this.end = e));
    }
    set(t, e) {
      return (this.start.copy(t), this.end.copy(e), this);
    }
    copy(t) {
      return (this.start.copy(t.start), this.end.copy(t.end), this);
    }
    getCenter(t) {
      return t.addVectors(this.start, this.end).multiplyScalar(0.5);
    }
    delta(t) {
      return t.subVectors(this.end, this.start);
    }
    distanceSq() {
      return this.start.distanceToSquared(this.end);
    }
    distance() {
      return this.start.distanceTo(this.end);
    }
    at(t, e) {
      return this.delta(e).multiplyScalar(t).add(this.start);
    }
    closestPointToPointParameter(t, e) {
      (Jc.subVectors(t, this.start), fs.subVectors(this.end, this.start));
      let n = fs.dot(fs),
        r = fs.dot(Jc) / n;
      return (e && (r = de(r, 0, 1)), r);
    }
    closestPointToPoint(t, e, n) {
      let i = this.closestPointToPointParameter(t, e);
      return this.delta(n).multiplyScalar(i).add(this.start);
    }
    applyMatrix4(t) {
      return (this.start.applyMatrix4(t), this.end.applyMatrix4(t), this);
    }
    equals(t) {
      return t.start.equals(this.start) && t.end.equals(this.end);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  hv = new b();
var hn = new b(),
  ms = new mt(),
  Ya = new mt(),
  al = class extends fr {
    constructor(t) {
      let e = _h(t),
        n = new Nt(),
        i = [],
        r = [],
        a = new dt(0, 0, 1),
        o = new dt(0, 1, 0);
      for (let c = 0; c < e.length; c++) {
        let h = e[c];
        h.parent &&
          h.parent.isBone &&
          (i.push(0, 0, 0),
          i.push(0, 0, 0),
          r.push(a.r, a.g, a.b),
          r.push(o.r, o.g, o.b));
      }
      (n.setAttribute("position", new xt(i, 3)),
        n.setAttribute("color", new xt(r, 3)));
      let l = new bn({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0,
      });
      (super(n, l),
        (this.type = "SkeletonHelper"),
        (this.isSkeletonHelper = !0),
        (this.root = t),
        (this.bones = e),
        (this.matrix = t.matrixWorld),
        (this.matrixAutoUpdate = !1));
    }
    updateMatrixWorld(t) {
      let e = this.bones,
        n = this.geometry,
        i = n.getAttribute("position");
      Ya.copy(this.root.matrixWorld).invert();
      for (let r = 0, a = 0; r < e.length; r++) {
        let o = e[r];
        o.parent &&
          o.parent.isBone &&
          (ms.multiplyMatrices(Ya, o.matrixWorld),
          hn.setFromMatrixPosition(ms),
          i.setXYZ(a, hn.x, hn.y, hn.z),
          ms.multiplyMatrices(Ya, o.parent.matrixWorld),
          hn.setFromMatrixPosition(ms),
          i.setXYZ(a + 1, hn.x, hn.y, hn.z),
          (a += 2));
      }
      ((n.getAttribute("position").needsUpdate = !0),
        super.updateMatrixWorld(t));
    }
  };
function _h(s) {
  let t = [];
  s && s.isBone && t.push(s);
  for (let e = 0; e < s.children.length; e++)
    t.push.apply(t, _h(s.children[e]));
  return t;
}
var uv = new b(),
  dv = new dt(),
  pv = new dt();
var ol = class extends fr {
  constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
    ((n = new dt(n)), (i = new dt(i)));
    let r = e / 2,
      a = t / e,
      o = t / 2,
      l = [],
      c = [];
    for (let d = 0, f = 0, g = -o; d <= e; d++, g += a) {
      (l.push(-o, 0, g, o, 0, g), l.push(g, 0, -o, g, 0, o));
      let v = d === r ? n : i;
      (v.toArray(c, f),
        (f += 3),
        v.toArray(c, f),
        (f += 3),
        v.toArray(c, f),
        (f += 3),
        v.toArray(c, f),
        (f += 3));
    }
    let h = new Nt();
    (h.setAttribute("position", new xt(l, 3)),
      h.setAttribute("color", new xt(c, 3)));
    let u = new bn({ vertexColors: !0, toneMapped: !1 });
    (super(h, u), (this.type = "GridHelper"));
  }
};
var fv = new b(),
  mv = new b(),
  gv = new b();
var vv = new b(),
  yv = new wi();
var xv = new xe();
var _v = new b();
var H0 = new Float32Array(1),
  bv = new Int32Array(H0.buffer);
be.create = function (s, t) {
  return (
    console.log("THREE.Curve.create() has been deprecated"),
    (s.prototype = Object.create(be.prototype)),
    (s.prototype.constructor = s),
    (s.prototype.getPoint = t),
    s
  );
};
br.prototype.fromPoints = function (s) {
  return (
    console.warn(
      "THREE.Path: .fromPoints() has been renamed to .setFromPoints().",
    ),
    this.setFromPoints(s)
  );
};
ol.prototype.setColors = function () {
  console.error(
    "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.",
  );
};
al.prototype.update = function () {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
je.prototype.extractUrlBase = function (s) {
  return (
    console.warn(
      "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.",
    ),
    ko.extractUrlBase(s)
  );
};
je.Handlers = {
  add: function () {
    console.error(
      "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.",
    );
  },
  get: function () {
    console.error(
      "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.",
    );
  },
};
kn.prototype.center = function (s) {
  return (
    console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
    this.getCenter(s)
  );
};
kn.prototype.empty = function () {
  return (
    console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
kn.prototype.isIntersectionBox = function (s) {
  return (
    console.warn(
      "THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().",
    ),
    this.intersectsBox(s)
  );
};
kn.prototype.size = function (s) {
  return (
    console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
    this.getSize(s)
  );
};
xe.prototype.center = function (s) {
  return (
    console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
    this.getCenter(s)
  );
};
xe.prototype.empty = function () {
  return (
    console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
xe.prototype.isIntersectionBox = function (s) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().",
    ),
    this.intersectsBox(s)
  );
};
xe.prototype.isIntersectionSphere = function (s) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().",
    ),
    this.intersectsSphere(s)
  );
};
xe.prototype.size = function (s) {
  return (
    console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
    this.getSize(s)
  );
};
xn.prototype.empty = function () {
  return (
    console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
Si.prototype.setFromMatrix = function (s) {
  return (
    console.warn(
      "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().",
    ),
    this.setFromProjectionMatrix(s)
  );
};
sl.prototype.center = function (s) {
  return (
    console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
    this.getCenter(s)
  );
};
ee.prototype.flattenToArrayOffset = function (s, t) {
  return (
    console.warn(
      "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.",
    ),
    this.toArray(s, t)
  );
};
ee.prototype.multiplyVector3 = function (s) {
  return (
    console.warn(
      "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.",
    ),
    s.applyMatrix3(this)
  );
};
ee.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
ee.prototype.applyToBufferAttribute = function (s) {
  return (
    console.warn(
      "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.",
    ),
    s.applyMatrix3(this)
  );
};
ee.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
ee.prototype.getInverse = function (s) {
  return (
    console.warn(
      "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.",
    ),
    this.copy(s).invert()
  );
};
mt.prototype.extractPosition = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().",
    ),
    this.copyPosition(s)
  );
};
mt.prototype.flattenToArrayOffset = function (s, t) {
  return (
    console.warn(
      "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.",
    ),
    this.toArray(s, t)
  );
};
mt.prototype.getPosition = function () {
  return (
    console.warn(
      "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.",
    ),
    new b().setFromMatrixColumn(this, 3)
  );
};
mt.prototype.setRotationFromQuaternion = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().",
    ),
    this.makeRotationFromQuaternion(s)
  );
};
mt.prototype.multiplyToArray = function () {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
mt.prototype.multiplyVector3 = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.",
    ),
    s.applyMatrix4(this)
  );
};
mt.prototype.multiplyVector4 = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.",
    ),
    s.applyMatrix4(this)
  );
};
mt.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
mt.prototype.rotateAxis = function (s) {
  (console.warn(
    "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.",
  ),
    s.transformDirection(this));
};
mt.prototype.crossVector = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.",
    ),
    s.applyMatrix4(this)
  );
};
mt.prototype.translate = function () {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
mt.prototype.rotateX = function () {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
mt.prototype.rotateY = function () {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
mt.prototype.rotateZ = function () {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
mt.prototype.rotateByAxis = function () {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
mt.prototype.applyToBufferAttribute = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.",
    ),
    s.applyMatrix4(this)
  );
};
mt.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
mt.prototype.makeFrustum = function (s, t, e, n, i, r) {
  return (
    console.warn(
      "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.",
    ),
    this.makePerspective(s, t, n, e, i, r)
  );
};
mt.prototype.getInverse = function (s) {
  return (
    console.warn(
      "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.",
    ),
    this.copy(s).invert()
  );
};
ze.prototype.isIntersectionLine = function (s) {
  return (
    console.warn(
      "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().",
    ),
    this.intersectsLine(s)
  );
};
oe.prototype.multiplyVector3 = function (s) {
  return (
    console.warn(
      "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.",
    ),
    s.applyQuaternion(this)
  );
};
oe.prototype.inverse = function () {
  return (
    console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
    this.invert()
  );
};
_n.prototype.isIntersectionBox = function (s) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().",
    ),
    this.intersectsBox(s)
  );
};
_n.prototype.isIntersectionPlane = function (s) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().",
    ),
    this.intersectsPlane(s)
  );
};
_n.prototype.isIntersectionSphere = function (s) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().",
    ),
    this.intersectsSphere(s)
  );
};
pe.prototype.area = function () {
  return (
    console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
    this.getArea()
  );
};
pe.prototype.barycoordFromPoint = function (s, t) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().",
    ),
    this.getBarycoord(s, t)
  );
};
pe.prototype.midpoint = function (s) {
  return (
    console.warn(
      "THREE.Triangle: .midpoint() has been renamed to .getMidpoint().",
    ),
    this.getMidpoint(s)
  );
};
pe.prototypenormal = function (s) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    this.getNormal(s)
  );
};
pe.prototype.plane = function (s) {
  return (
    console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
    this.getPlane(s)
  );
};
pe.barycoordFromPoint = function (s, t, e, n, i) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().",
    ),
    pe.getBarycoord(s, t, e, n, i)
  );
};
pe.normal = function (s, t, e, n) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    pe.getNormal(s, t, e, n)
  );
};
Gn.prototype.extractAllPoints = function (s) {
  return (
    console.warn(
      "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.",
    ),
    this.extractPoints(s)
  );
};
Gn.prototype.extrude = function (s) {
  return (
    console.warn(
      "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.",
    ),
    new Sn(this, s)
  );
};
Gn.prototype.makeGeometry = function (s) {
  return (
    console.warn(
      "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.",
    ),
    new Tr(this, s)
  );
};
q.prototype.fromAttribute = function (s, t, e) {
  return (
    console.warn(
      "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().",
    ),
    this.fromBufferAttribute(s, t, e)
  );
};
q.prototype.distanceToManhattan = function (s) {
  return (
    console.warn(
      "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().",
    ),
    this.manhattanDistanceTo(s)
  );
};
q.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().",
    ),
    this.manhattanLength()
  );
};
b.prototype.setEulerFromRotationMatrix = function () {
  console.error(
    "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.",
  );
};
b.prototype.setEulerFromQuaternion = function () {
  console.error(
    "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.",
  );
};
b.prototype.getPositionFromMatrix = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().",
    ),
    this.setFromMatrixPosition(s)
  );
};
b.prototype.getScaleFromMatrix = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().",
    ),
    this.setFromMatrixScale(s)
  );
};
b.prototype.getColumnFromMatrix = function (s, t) {
  return (
    console.warn(
      "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().",
    ),
    this.setFromMatrixColumn(t, s)
  );
};
b.prototype.applyProjection = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.",
    ),
    this.applyMatrix4(s)
  );
};
b.prototype.fromAttribute = function (s, t, e) {
  return (
    console.warn(
      "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().",
    ),
    this.fromBufferAttribute(s, t, e)
  );
};
b.prototype.distanceToManhattan = function (s) {
  return (
    console.warn(
      "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().",
    ),
    this.manhattanDistanceTo(s)
  );
};
b.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().",
    ),
    this.manhattanLength()
  );
};
Ot.prototype.fromAttribute = function (s, t, e) {
  return (
    console.warn(
      "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().",
    ),
    this.fromBufferAttribute(s, t, e)
  );
};
Ot.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().",
    ),
    this.manhattanLength()
  );
};
Wt.prototype.getChildByName = function (s) {
  return (
    console.warn(
      "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().",
    ),
    this.getObjectByName(s)
  );
};
Wt.prototype.renderDepth = function () {
  console.warn(
    "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.",
  );
};
Wt.prototype.translate = function (s, t) {
  return (
    console.warn(
      "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.",
    ),
    this.translateOnAxis(t, s)
  );
};
Wt.prototype.getWorldRotation = function () {
  console.error(
    "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.",
  );
};
Wt.prototype.applyMatrix = function (s) {
  return (
    console.warn(
      "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().",
    ),
    this.applyMatrix4(s)
  );
};
Object.defineProperties(Wt.prototype, {
  eulerOrder: {
    get: function () {
      return (
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        this.rotation.order
      );
    },
    set: function (s) {
      (console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        (this.rotation.order = s));
    },
  },
  useQuaternion: {
    get: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.",
      );
    },
    set: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.",
      );
    },
  },
});
se.prototype.setDrawMode = function () {
  console.error(
    "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.",
  );
};
Object.defineProperties(se.prototype, {
  drawMode: {
    get: function () {
      return (
        console.error(
          "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.",
        ),
        rd
      );
    },
    set: function () {
      console.error(
        "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.",
      );
    },
  },
});
Rs.prototype.initBones = function () {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
re.prototype.setLens = function (s, t) {
  (console.warn(
    "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.",
  ),
    t !== void 0 && (this.filmGauge = t),
    this.setFocalLength(s));
};
Object.defineProperties(Re.prototype, {
  onlyShadow: {
    set: function () {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    },
  },
  shadowCameraFov: {
    set: function (s) {
      (console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
        (this.shadow.camera.fov = s));
    },
  },
  shadowCameraLeft: {
    set: function (s) {
      (console.warn(
        "THREE.Light: .shadowCameraLeft is now .shadow.camera.left.",
      ),
        (this.shadow.camera.left = s));
    },
  },
  shadowCameraRight: {
    set: function (s) {
      (console.warn(
        "THREE.Light: .shadowCameraRight is now .shadow.camera.right.",
      ),
        (this.shadow.camera.right = s));
    },
  },
  shadowCameraTop: {
    set: function (s) {
      (console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
        (this.shadow.camera.top = s));
    },
  },
  shadowCameraBottom: {
    set: function (s) {
      (console.warn(
        "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.",
      ),
        (this.shadow.camera.bottom = s));
    },
  },
  shadowCameraNear: {
    set: function (s) {
      (console.warn(
        "THREE.Light: .shadowCameraNear is now .shadow.camera.near.",
      ),
        (this.shadow.camera.near = s));
    },
  },
  shadowCameraFar: {
    set: function (s) {
      (console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
        (this.shadow.camera.far = s));
    },
  },
  shadowCameraVisible: {
    set: function () {
      console.warn(
        "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.",
      );
    },
  },
  shadowBias: {
    set: function (s) {
      (console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
        (this.shadow.bias = s));
    },
  },
  shadowDarkness: {
    set: function () {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    },
  },
  shadowMapWidth: {
    set: function (s) {
      (console.warn(
        "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.",
      ),
        (this.shadow.mapSize.width = s));
    },
  },
  shadowMapHeight: {
    set: function (s) {
      (console.warn(
        "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.",
      ),
        (this.shadow.mapSize.height = s));
    },
  },
});
Object.defineProperties($t.prototype, {
  length: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .length has been deprecated. Use .count instead.",
        ),
        this.array.length
      );
    },
  },
  dynamic: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.",
        ),
        this.usage === _s
      );
    },
    set: function () {
      (console.warn(
        "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.",
      ),
        this.setUsage(_s));
    },
  },
});
$t.prototype.setDynamic = function (s) {
  return (
    console.warn(
      "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.",
    ),
    this.setUsage(s === !0 ? _s : er),
    this
  );
};
(($t.prototype.copyIndicesArray = function () {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}),
  ($t.prototype.setArray = function () {
    console.error(
      "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers",
    );
  }));
Nt.prototype.addIndex = function (s) {
  (console.warn(
    "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().",
  ),
    this.setIndex(s));
};
Nt.prototype.addAttribute = function (s, t) {
  return (
    console.warn(
      "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().",
    ),
    !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute)
      ? (console.warn(
          "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).",
        ),
        this.setAttribute(s, new $t(arguments[1], arguments[2])))
      : s === "index"
        ? (console.warn(
            "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.",
          ),
          this.setIndex(t),
          this)
        : this.setAttribute(s, t)
  );
};
Nt.prototype.addDrawCall = function (s, t, e) {
  (e !== void 0 &&
    console.warn(
      "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.",
    ),
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
    this.addGroup(s, t));
};
Nt.prototype.clearDrawCalls = function () {
  (console.warn(
    "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().",
  ),
    this.clearGroups());
};
Nt.prototype.computeOffsets = function () {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
Nt.prototype.removeAttribute = function (s) {
  return (
    console.warn(
      "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().",
    ),
    this.deleteAttribute(s)
  );
};
Nt.prototype.applyMatrix = function (s) {
  return (
    console.warn(
      "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().",
    ),
    this.applyMatrix4(s)
  );
};
Object.defineProperties(Nt.prototype, {
  drawcalls: {
    get: function () {
      return (
        console.error(
          "THREE.BufferGeometry: .drawcalls has been renamed to .groups.",
        ),
        this.groups
      );
    },
  },
  offsets: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferGeometry: .offsets has been renamed to .groups.",
        ),
        this.groups
      );
    },
  },
});
Hn.prototype.setDynamic = function (s) {
  return (
    console.warn(
      "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.",
    ),
    this.setUsage(s === !0 ? _s : er),
    this
  );
};
Hn.prototype.setArray = function () {
  console.error(
    "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers",
  );
};
Sn.prototype.getArrays = function () {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
Sn.prototype.addShapeList = function () {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
Sn.prototype.addShape = function () {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
Ti.prototype.dispose = function () {
  console.error("THREE.Scene: .dispose() has been removed.");
};
nl.prototype.onUpdate = function () {
  return (
    console.warn(
      "THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.",
    ),
    this
  );
};
Object.defineProperties(ne.prototype, {
  wrapAround: {
    get: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
  },
  overdraw: {
    get: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
  },
  wrapRGB: {
    get: function () {
      return (
        console.warn("THREE.Material: .wrapRGB has been removed."),
        new dt()
      );
    },
  },
  shading: {
    get: function () {
      console.error(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead.",
      );
    },
    set: function (s) {
      (console.warn(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead.",
      ),
        (this.flatShading = s === Zc));
    },
  },
  stencilMask: {
    get: function () {
      return (
        console.warn(
          "THREE." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead.",
        ),
        this.stencilFuncMask
      );
    },
    set: function (s) {
      (console.warn(
        "THREE." +
          this.type +
          ": .stencilMask has been removed. Use .stencilFuncMask instead.",
      ),
        (this.stencilFuncMask = s));
    },
  },
  vertexTangents: {
    get: function () {
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed.",
      );
    },
    set: function () {
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed.",
      );
    },
  },
});
Object.defineProperties(_e.prototype, {
  derivatives: {
    get: function () {
      return (
        console.warn(
          "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.",
        ),
        this.extensions.derivatives
      );
    },
    set: function (s) {
      (console.warn(
        "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.",
      ),
        (this.extensions.derivatives = s));
    },
  },
});
Gt.prototype.clearTarget = function (s, t, e, n) {
  (console.warn(
    "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.",
  ),
    this.setRenderTarget(s),
    this.clear(t, e, n));
};
Gt.prototype.animate = function (s) {
  (console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
    this.setAnimationLoop(s));
};
Gt.prototype.getCurrentRenderTarget = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().",
    ),
    this.getRenderTarget()
  );
};
Gt.prototype.getMaxAnisotropy = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().",
    ),
    this.capabilities.getMaxAnisotropy()
  );
};
Gt.prototype.getPrecision = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.",
    ),
    this.capabilities.precision
  );
};
Gt.prototype.resetGLState = function () {
  return (
    console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
    this.state.reset()
  );
};
Gt.prototype.supportsFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).",
    ),
    this.extensions.get("OES_texture_float")
  );
};
Gt.prototype.supportsHalfFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).",
    ),
    this.extensions.get("OES_texture_half_float")
  );
};
Gt.prototype.supportsStandardDerivatives = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).",
    ),
    this.extensions.get("OES_standard_derivatives")
  );
};
Gt.prototype.supportsCompressedTextureS3TC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).",
    ),
    this.extensions.get("WEBGL_compressed_texture_s3tc")
  );
};
Gt.prototype.supportsCompressedTexturePVRTC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).",
    ),
    this.extensions.get("WEBGL_compressed_texture_pvrtc")
  );
};
Gt.prototype.supportsBlendMinMax = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).",
    ),
    this.extensions.get("EXT_blend_minmax")
  );
};
Gt.prototype.supportsVertexTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.",
    ),
    this.capabilities.vertexTextures
  );
};
Gt.prototype.supportsInstancedArrays = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).",
    ),
    this.extensions.get("ANGLE_instanced_arrays")
  );
};
Gt.prototype.enableScissorTest = function (s) {
  (console.warn(
    "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().",
  ),
    this.setScissorTest(s));
};
Gt.prototype.initMaterial = function () {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
Gt.prototype.addPrePlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
Gt.prototype.addPostPlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
Gt.prototype.updateShadowMap = function () {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
Gt.prototype.setFaceCulling = function () {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
Gt.prototype.allocTextureUnit = function () {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
Gt.prototype.setTexture = function () {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
Gt.prototype.setTexture2D = function () {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
Gt.prototype.setTextureCube = function () {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
Gt.prototype.getActiveMipMapLevel = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().",
    ),
    this.getActiveMipmapLevel()
  );
};
Object.defineProperties(Gt.prototype, {
  shadowMapEnabled: {
    get: function () {
      return this.shadowMap.enabled;
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.",
      ),
        (this.shadowMap.enabled = s));
    },
  },
  shadowMapType: {
    get: function () {
      return this.shadowMap.type;
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.",
      ),
        (this.shadowMap.type = s));
    },
  },
  shadowMapCullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.",
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.",
      );
    },
  },
  context: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.",
        ),
        this.getContext()
      );
    },
  },
  vr: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
        this.xr
      );
    },
  },
  gammaInput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.",
        ),
        !1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.",
      );
    },
  },
  gammaOutput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.",
        ),
        !1
      );
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.",
      ),
        (this.outputEncoding = s === !0 ? Pi : Ne));
    },
  },
  toneMappingWhitePoint: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.",
        ),
        1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.",
      );
    },
  },
  gammaFactor: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
        2
      );
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
    },
  },
});
Object.defineProperties(mh.prototype, {
  cullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.",
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.",
      );
    },
  },
  renderReverseSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.",
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.",
      );
    },
  },
  renderSingleSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.",
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.",
      );
    },
  },
});
Object.defineProperties(ye.prototype, {
  wrapS: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        this.texture.wrapS
      );
    },
    set: function (s) {
      (console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        (this.texture.wrapS = s));
    },
  },
  wrapT: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        this.texture.wrapT
      );
    },
    set: function (s) {
      (console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        (this.texture.wrapT = s));
    },
  },
  magFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.",
        ),
        this.texture.magFilter
      );
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.",
      ),
        (this.texture.magFilter = s));
    },
  },
  minFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.",
        ),
        this.texture.minFilter
      );
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.",
      ),
        (this.texture.minFilter = s));
    },
  },
  anisotropy: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.",
        ),
        this.texture.anisotropy
      );
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.",
      ),
        (this.texture.anisotropy = s));
    },
  },
  offset: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset.",
        ),
        this.texture.offset
      );
    },
    set: function (s) {
      (console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
        (this.texture.offset = s));
    },
  },
  repeat: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat.",
        ),
        this.texture.repeat
      );
    },
    set: function (s) {
      (console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
        (this.texture.repeat = s));
    },
  },
  format: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format.",
        ),
        this.texture.format
      );
    },
    set: function (s) {
      (console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
        (this.texture.format = s));
    },
  },
  type: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        this.texture.type
      );
    },
    set: function (s) {
      (console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        (this.texture.type = s));
    },
  },
  generateMipmaps: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.",
        ),
        this.texture.generateMipmaps
      );
    },
    set: function (s) {
      (console.warn(
        "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.",
      ),
        (this.texture.generateMipmaps = s));
    },
  },
});
Yo.prototype.load = function (s) {
  console.warn(
    "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.",
  );
  let t = this;
  return (
    new qo().load(s, function (n) {
      t.setBuffer(n);
    }),
    this
  );
};
Zo.prototype.getData = function () {
  return (
    console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
    this.getFrequencyData()
  );
};
rr.prototype.updateCubeMap = function (s, t) {
  return (
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
    this.update(s, t)
  );
};
rr.prototype.clear = function (s, t, e, n) {
  return (
    console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
    this.renderTarget.clear(s, t, e, n)
  );
};
yn.crossOrigin = void 0;
yn.loadTexture = function (s, t, e, n) {
  console.warn(
    "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.",
  );
  let i = new Fo();
  i.setCrossOrigin(this.crossOrigin);
  let r = i.load(s, e, void 0, n);
  return (t && (r.mapping = t), r);
};
yn.loadTextureCube = function (s, t, e, n) {
  console.warn(
    "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.",
  );
  let i = new No();
  i.setCrossOrigin(this.crossOrigin);
  let r = i.load(s, e, void 0, n);
  return (t && (r.mapping = t), r);
};
yn.loadCompressedTexture = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.",
  );
};
yn.loadCompressedTextureCube = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.",
  );
};
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ll } }),
  );
typeof Ge < "u" &&
  (Ge.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (Ge.__THREE__ = ll));
var bh = -0.4,
  wh = -0.5;
function yl(s) {
  let { raysColor: t } = s,
    e = en(null),
    n = en(null),
    i = en(null),
    r = en(null),
    a = en(null),
    o = en(),
    l = k0(),
    [c, h] = fa(!1),
    u = en(s.animation);
  (jn(() => (h(!0), () => h(!1)), []),
    jn(() => {
      u.current = s.animation;
    }, [s.animation]));
  let [d, f] = pa(() => {
      if (t.mode === "random") {
        let m = Math.random() * 360,
          p = 60 + Math.random() * 40;
        return [Eh(m, p, 50), Eh(m, p, 65)];
      } else
        return [
          [1, 1, 1],
          [1, 1, 1],
        ];
    }, [t]),
    [g, v, x] = pa(() => {
      if (t.mode === "random") return [d, f, 1];
      {
        let m = "",
          p = "";
        switch (t.mode) {
          case "single":
            ((m = t.color), (p = t.color));
            break;
          case "multi":
            ((m = t.color1), (p = t.color2));
            break;
        }
        let [_, y, w, A] = Th(Sh(m, e)),
          [L, I, G, O] = Th(Sh(p, e));
        return [[_, y, w], [L, I, G], Math.max(A, O)];
      }
    }, [t, l, e]);
  return (
    jn(() => {
      h(!0);
      let m = e.current;
      if (!m) return;
      let p = new Ti(),
        _ = new re(75, m.clientWidth / m.clientHeight, 0.1, 1e3);
      _.position.z = 5;
      let y = new Gt({
        preserveDrawingBuffer: !0,
        premultipliedAlpha: !0,
        alpha: !0,
        antialias: !0,
        precision: "highp",
        powerPreference: "high-performance",
      });
      (y.setSize(m.clientWidth, m.clientHeight),
        y.setPixelRatio(1),
        m.appendChild(y.domElement));
      let w = new Bn(1024, 1024),
        A = new _e({
          fragmentShader: j0,
          vertexShader: W0,
          uniforms: {
            u_colors: {
              value: [new Ot(g[0], g[1], g[2], 1), new Ot(v[0], v[1], v[2], 1)],
            },
            u_intensity: { value: zi(s.intensity, 0, 100, 0, 0.5) },
            u_rays: { value: zi(s.rays, 0, 100, 0, 0.3) },
            u_reach: { value: zi(s.reach, 0, 100, 0, 0.5) },
            u_time: { value: Math.random() * 1e4 },
            u_mouse: { value: [0, 0] },
            u_resolution: { value: [m.clientWidth, m.clientHeight] },
            u_rayPos1: {
              value: [(s.position / 100) * m.clientWidth, bh * m.clientHeight],
            },
            u_rayPos2: {
              value: [
                (s.position / 100 + 0.02) * m.clientWidth,
                wh * m.clientHeight,
              ],
            },
          },
          wireframe: !1,
          wireframeLinewidth: 0,
          dithering: !1,
          flatShading: !0,
          side: vn,
        }),
        L = new se(w, A);
      (p.add(L),
        (i.current = p),
        (r.current = _),
        (n.current = y),
        (a.current = L));
      let I = 0,
        G = (O) => {
          let P = u.current;
          P.animate || (I = O);
          let M = O - I;
          ((I = O),
            L.material instanceof _e &&
              P.animate &&
              (L.material.uniforms.u_time.value += (M * P.speed) / 1e3 / 10),
            y.render(p, _),
            (o.current = requestAnimationFrame(G)));
        };
      return (
        (o.current = requestAnimationFrame(G)),
        () => {
          (o.current && cancelAnimationFrame(o.current),
            y.dispose(),
            w.dispose(),
            A.dispose(),
            m.removeChild(y.domElement));
        }
      );
    }, [c]),
    jn(() => {
      if (a.current?.material instanceof _e) {
        let m = a.current.material,
          p = e.current;
        if (!p) return;
        ((m.uniforms.u_colors.value = [
          new Ot(g[0], g[1], g[2], 1),
          new Ot(v[0], v[1], v[2], 1),
        ]),
          (m.uniforms.u_intensity.value = zi(s.intensity, 0, 100, 0, 0.5)),
          (m.uniforms.u_rays.value = zi(s.rays, 0, 100, 0, 0.3)),
          (m.uniforms.u_reach.value = zi(s.reach, 0, 100, 0, 0.5)),
          (m.uniforms.u_rayPos1.value = [
            (s.position / 100) * p.clientWidth,
            bh * p.clientHeight,
          ]),
          (m.uniforms.u_rayPos2.value = [
            (s.position / 100 + 0.02) * p.clientWidth,
            wh * p.clientHeight,
          ]));
      }
    }, [s.intensity, s.rays, s.reach, s.position, g, v]),
    Ml("div", {
      ref: e,
      style: {
        borderRadius: s.radius,
        overflow: "hidden",
        backgroundColor: s.backgroundColor,
        ...s.style,
      },
    })
  );
}
yl.displayName = "Light Rays";
Sl(yl, {
  raysColor: {
    type: me.Object,
    title: "Color",
    controls: {
      mode: {
        type: me.Enum,
        defaultValue: "single",
        options: ["random", "single", "multi"],
        optionTitles: ["Random", "Single", "Multi"],
        displaySegmentedControl: !0,
        segmentedControlDirection: "vertical",
      },
      color: {
        type: me.Color,
        defaultValue: "#FFF",
        hidden: (s) => s.mode !== "single",
      },
      color1: {
        type: me.Color,
        defaultValue: "#FFF",
        hidden: (s) => s.mode !== "multi",
      },
      color2: {
        type: me.Color,
        defaultValue: "#FFCB47",
        hidden: (s) => s.mode !== "multi",
      },
    },
  },
  backgroundColor: {
    type: me.Color,
    defaultValue: "#000",
    optional: !0,
    title: "Background",
  },
  animation: {
    type: me.Object,
    icon: "effect",
    controls: {
      animate: { type: me.Boolean, defaultValue: !0 },
      speed: {
        type: me.Number,
        defaultValue: 10,
        min: 1,
        max: 100,
        step: 1,
        hidden: (s) => !s.animate,
      },
    },
  },
  intensity: { type: me.Number, defaultValue: 50, min: 0, max: 100, step: 1 },
  rays: { type: me.Number, defaultValue: 30, min: 0, max: 100, step: 1 },
  reach: { type: me.Number, defaultValue: 40, min: 0, max: 100, step: 1 },
  position: {
    type: me.Number,
    defaultValue: 80,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
  },
  radius: {
    type: me.BorderRadius,
    defaultValue: "0px",
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var Mh = class extends wl.Component {
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
  constructor(t) {
    (super(t), (this.state = { hasError: !1 }));
  }
};
function Sh(s, t) {
  if (s.startsWith("var(")) {
    let { variableName: e, defaultValue: n } = V0(s),
      i = n || "";
    if (e && typeof document < "u") {
      let r = getComputedStyle(t?.current || document.body);
      return (r && r.getPropertyValue(e).trim()) || i;
    }
    return i;
  } else return s;
}
function V0(s) {
  let e =
    /var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:"[^"]*"|'[^']*'|[^)]+)))?\s*\)/.exec(s);
  if (e) {
    let n = e[1],
      i = e[2] || null;
    return (
      i && ((i = i.replace(/^["']|["']$/g, "")), (i = i.trim())),
      { variableName: n, defaultValue: i }
    );
  }
  return { variableName: "", defaultValue: "" };
}
var Th = (s) => {
  let t = 1,
    e = 1,
    n = 1,
    i = 1;
  if (s && typeof s == "string") {
    if (s.startsWith("rgba(")) {
      let r = s.slice(5, -1).split(",");
      ((t = parseInt(r[0]) / 255),
        (e = parseInt(r[1]) / 255),
        (n = parseInt(r[2]) / 255),
        (i = parseFloat(r[3])));
    } else if (s.startsWith("rgb(")) {
      let r = s.slice(4, -1).split(",");
      ((t = parseInt(r[0]) / 255),
        (e = parseInt(r[1]) / 255),
        (n = parseInt(r[2]) / 255));
    } else if (s.startsWith("#")) {
      let r = s.slice(1);
      r.length === 3
        ? ((t = parseInt(r[0] + r[0], 16) / 255),
          (e = parseInt(r[1] + r[1], 16) / 255),
          (n = parseInt(r[2] + r[2], 16) / 255))
        : r.length === 6
          ? ((t = parseInt(r.slice(0, 2), 16) / 255),
            (e = parseInt(r.slice(2, 4), 16) / 255),
            (n = parseInt(r.slice(4, 6), 16) / 255))
          : r.length === 8 &&
            ((t = parseInt(r.slice(0, 2), 16) / 255),
            (e = parseInt(r.slice(2, 4), 16) / 255),
            (n = parseInt(r.slice(4, 6), 16) / 255),
            (i = parseInt(r.slice(6, 8), 16) / 255));
    }
  }
  return [t, e, n, i];
};
function k0() {
  let [s, t] = fa(!1);
  return (
    jn(() => {
      let e = Ge.matchMedia("(prefers-color-scheme: dark)"),
        n = (i) => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              t(i.matches);
            }, 80);
          });
        };
      return (t(e.matches), e.addListener(n), () => e.removeListener(n));
    }, []),
    s
  );
}
function Eh(s, t, e) {
  ((t /= 100), (e /= 100));
  let n = (1 - Math.abs(2 * e - 1)) * t,
    i = n * (1 - Math.abs(((s / 60) % 2) - 1)),
    r = e - n / 2,
    a = 0,
    o = 0,
    l = 0;
  return (
    s >= 0 && s < 60
      ? ((a = n), (o = i), (l = 0))
      : s >= 60 && s < 120
        ? ((a = i), (o = n), (l = 0))
        : s >= 120 && s < 180
          ? ((a = 0), (o = n), (l = i))
          : s >= 180 && s < 240
            ? ((a = 0), (o = i), (l = n))
            : s >= 240 && s < 300
              ? ((a = i), (o = 0), (l = n))
              : s >= 300 && s < 360 && ((a = n), (o = 0), (l = i)),
    [a + r, o + r, l + r]
  );
}
function zi(s, t, e, n, i) {
  let r = (s - t) / (e - t);
  return n + r * (i - n);
}
var W0 = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  j0 = `
// Uniforms

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float x) { return mod289(((x * 34.0) + 1.0) * x); }
vec2 permute(const in vec2 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec3 permute(const in vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(const in vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

#endif

#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif

#ifndef FNC_QUINTIC
#define FNC_QUINTIC 

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

#endif

#ifndef FNC_PNOISE
#define FNC_PNOISE

float pnoise(in vec2 P, in vec2 rep) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, rep.xyxy); 
    Pi = mod289(Pi);        
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
    vec4 gy = abs(gx) - 0.5 ;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;

    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = quintic(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

float pnoise(in vec3 P, in vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep); 
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = quintic(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

float pnoise(in vec4 P, in vec4 rep) {
    vec4 Pi0 = mod(floor(P), rep); 
    vec4 Pi1 = mod(Pi0 + 1.0, rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec4 Pf0 = fract(P); 
    vec4 Pf1 = Pf0 - 1.0; 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = vec4(Pi0.zzzz);
    vec4 iz1 = vec4(Pi1.zzzz);
    vec4 iw0 = vec4(Pi0.wwww);
    vec4 iw1 = vec4(Pi1.wwww);

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 ixy00 = permute(ixy0 + iw0);
    vec4 ixy01 = permute(ixy0 + iw1);
    vec4 ixy10 = permute(ixy1 + iw0);
    vec4 ixy11 = permute(ixy1 + iw1);

    vec4 gx00 = ixy00 * (1.0 / 7.0);
    vec4 gy00 = floor(gx00) * (1.0 / 7.0);
    vec4 gz00 = floor(gy00) * (1.0 / 6.0);
    gx00 = fract(gx00) - 0.5;
    gy00 = fract(gy00) - 0.5;
    gz00 = fract(gz00) - 0.5;
    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
    vec4 sw00 = step(gw00, vec4(0.0));
    gx00 -= sw00 * (step(0.0, gx00) - 0.5);
    gy00 -= sw00 * (step(0.0, gy00) - 0.5);

    vec4 gx01 = ixy01 * (1.0 / 7.0);
    vec4 gy01 = floor(gx01) * (1.0 / 7.0);
    vec4 gz01 = floor(gy01) * (1.0 / 6.0);
    gx01 = fract(gx01) - 0.5;
    gy01 = fract(gy01) - 0.5;
    gz01 = fract(gz01) - 0.5;
    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
    vec4 sw01 = step(gw01, vec4(0.0));
    gx01 -= sw01 * (step(0.0, gx01) - 0.5);
    gy01 -= sw01 * (step(0.0, gy01) - 0.5);

    vec4 gx10 = ixy10 * (1.0 / 7.0);
    vec4 gy10 = floor(gx10) * (1.0 / 7.0);
    vec4 gz10 = floor(gy10) * (1.0 / 6.0);
    gx10 = fract(gx10) - 0.5;
    gy10 = fract(gy10) - 0.5;
    gz10 = fract(gz10) - 0.5;
    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
    vec4 sw10 = step(gw10, vec4(0.0));
    gx10 -= sw10 * (step(0.0, gx10) - 0.5);
    gy10 -= sw10 * (step(0.0, gy10) - 0.5);

    vec4 gx11 = ixy11 * (1.0 / 7.0);
    vec4 gy11 = floor(gx11) * (1.0 / 7.0);
    vec4 gz11 = floor(gy11) * (1.0 / 6.0);
    gx11 = fract(gx11) - 0.5;
    gy11 = fract(gy11) - 0.5;
    gz11 = fract(gz11) - 0.5;
    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
    vec4 sw11 = step(gw11, vec4(0.0));
    gx11 -= sw11 * (step(0.0, gx11) - 0.5);
    gy11 -= sw11 * (step(0.0, gy11) - 0.5);

    vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
    vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
    vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
    vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
    vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
    vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
    vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
    vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
    vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
    vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
    vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
    vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
    vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
    vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
    vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
    vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
    g0000 *= norm00.x;
    g0100 *= norm00.y;
    g1000 *= norm00.z;
    g1100 *= norm00.w;

    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
    g0001 *= norm01.x;
    g0101 *= norm01.y;
    g1001 *= norm01.z;
    g1101 *= norm01.w;

    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
    g0010 *= norm10.x;
    g0110 *= norm10.y;
    g1010 *= norm10.z;
    g1110 *= norm10.w;

    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
    g0011 *= norm11.x;
    g0111 *= norm11.y;
    g1011 *= norm11.z;
    g1111 *= norm11.w;

    float n0000 = dot(g0000, Pf0);
    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
    float n1111 = dot(g1111, Pf1);

    vec4 fade_xyzw = quintic(Pf0);
    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
    return 2.2 * n_xyzw;
}
#endif

#ifndef SRGB_EPSILON 
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_SRGB2RGB
#define FNC_SRGB2RGB

float srgb2rgb(float channel) {
    return (channel < 0.04045) ? channel * 0.0773993808 : pow((channel + 0.055) * 0.947867298578199, 2.4);
}

vec3 srgb2rgb(vec3 srgb) {
    return vec3(srgb2rgb(srgb.r + SRGB_EPSILON), 
                srgb2rgb(srgb.g + SRGB_EPSILON),
                srgb2rgb(srgb.b + SRGB_EPSILON));
}

vec4 srgb2rgb(vec4 srgb) {
    return vec4(srgb2rgb(srgb.rgb), srgb.a);
}

#endif

#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(x) clamp(x, 0.0, 1.0)
#endif

#ifndef SRGB_EPSILON 
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_RGB2SRGB
#define FNC_RGB2SRGB

float rgb2srgb(float channel) {
    return (channel < 0.0031308) ? channel * 12.92 : 1.055 * pow(channel, 0.4166666666666667) - 0.055;
}

vec3 rgb2srgb(vec3 rgb) {
    return saturate(vec3(rgb2srgb(rgb.r - SRGB_EPSILON), rgb2srgb(rgb.g - SRGB_EPSILON), rgb2srgb(rgb.b - SRGB_EPSILON)));
}

vec4 rgb2srgb(vec4 rgb) {
    return vec4(rgb2srgb(rgb.rgb), rgb.a);
}

#endif

#ifndef FNC_MIXOKLAB
#define FNC_MIXOKLAB
vec3 mixOklab( vec3 colA, vec3 colB, float h ) {

    #ifdef MIXOKLAB_COLORSPACE_SRGB
    colA = srgb2rgb(colA);
    colB = srgb2rgb(colB);
    #endif

    const mat3 kCONEtoLMS = mat3(                
         0.4121656120,  0.2118591070,  0.0883097947,
         0.5362752080,  0.6807189584,  0.2818474174,
         0.0514575653,  0.1074065790,  0.6302613616);
    const mat3 kLMStoCONE = mat3(
         4.0767245293, -1.2681437731, -0.0041119885,
        -3.3072168827,  2.6093323231, -0.7034763098,
         0.2307590544, -0.3411344290,  1.7068625689);

    vec3 lmsA = pow( kCONEtoLMS * colA, vec3(1.0/3.0) );
    vec3 lmsB = pow( kCONEtoLMS * colB, vec3(1.0/3.0) );
    
    vec3 lms = mix( lmsA, lmsB, h );

    vec3 rgb = kLMStoCONE*(lms*lms*lms);

    #ifdef MIXOKLAB_COLORSPACE_SRGB
    return rgb2srgb(rgb);
    #else
    return rgb;
    #endif
}

vec4 mixOklab( vec4 colA, vec4 colB, float h ) {
    return vec4( mixOklab(colA.rgb, colB.rgb, h), mix(colA.a, colB.a, h) );
}
#endif


float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed)
{
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
    
    // Calculate the diagonal length
    float diagonal = length(u_resolution);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        u_reach, 1.0) *
        clamp((diagonal - length(sourceToCoord)) / diagonal, u_reach, 1.0);
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    float speed = u_rays * 10.0;
    
    // Set the parameters of the sun rays
    vec2 rayPos1 = u_rayPos1;
    vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
    float raySeedA1 = 36.2214*speed;
    float raySeedB1 = 21.11349*speed;
    float raySpeed1 = 1.5*speed;
    
    vec2 rayPos2 = u_rayPos2;
    vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
    float raySeedA2 = 22.39910*speed;
    float raySeedB2 = 18.0234*speed;
    float raySpeed2 = 1.1*speed;
    
    // Calculate ray strengths
    float strength1 = rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
    float strength2 = rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);
    
    // Calculate brightness attenuation
    float brightness = 1.0*u_reach - (coord.y / u_resolution.y);
    float attenuation = clamp(brightness + (0.5 + u_intensity), 0.0, 1.0);
    
    // Calculate alpha values while preserving color
    float alpha1 = strength1 * attenuation * u_colors[0].a;
    float alpha2 = strength2 * attenuation * u_colors[1].a;
    
    // Pre-multiply the colors with their alpha values
    vec3 premultColor1 = u_colors[0].rgb * alpha1;
    vec3 premultColor2 = u_colors[1].rgb * alpha2;
    
    // Blend the pre-multiplied colors
    vec3 blendedColor = premultColor1 + premultColor2;
    float blendedAlpha = alpha1 + alpha2 * (1.0 - alpha1);
    
    // Un-premultiply the final color
    vec3 finalRGB = blendedColor / max(blendedAlpha, 0.0001);
    
    gl_FragColor = vec4(finalRGB * blendedAlpha, blendedAlpha);
}
`;
export { yl as a };
//# sourceMappingURL=chunk-JPQXC4RY.mjs.map

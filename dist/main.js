(() => {
  'use strict';
  var n = {
      208: (n, e, t) => {
        t.d(e, { A: () => c });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          n.id,
          ":root {\n  --main-color: #68c174;\n  --main-text-color: #fbfbfb;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  /* color-scheme: dark light; */\n}\n\nbody {\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\nimg {\n  vertical-align: middle;\n  height: auto;\n  font-style: italic;\n  background-repeat: no-repeat;\n  background-size: cover;\n  shape-margin: 0.75rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\np {\n  max-width: 75ch;\n  text-wrap: pretty;\n  font-size: 2rem;\n}\n\ninput {\n  outline: none;\n  border: 1px solid black;\n  border-radius: 10px;\n  width: 100%;\n  padding: 2px 4px;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :has(:target) {\n    scroll-behavior: smooth;\n  }\n}\n#header {\n  text-align: center;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  background-color: var(--main-color);\n  color: var(--main-text-color);\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n",
          '',
        ]);
        const c = i;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (t += n(e)),
                  r && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, r, o, a) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var u = [].concat(n[l]);
                (r && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = a)),
                  t &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = t))
                      : (u[2] = t)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              u = a[l] || 0,
              d = ''.concat(l, ' ').concat(u);
            a[l] = u + 1;
            var p = t(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var h = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: d, updater: h, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), l = 0; l < a.length; l++) {
              var u = t(a[l]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            a = s;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(72),
        e = t.n(n),
        r = t(825),
        o = t.n(r),
        a = t(659),
        i = t.n(a),
        c = t(56),
        s = t.n(c),
        l = t(540),
        u = t.n(l),
        d = t(113),
        p = t.n(d),
        f = t(208),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, 'head')),
        (h.domAPI = o()),
        (h.insertStyleElement = u()),
        e()(f.A, h),
        f.A && f.A.locals && f.A.locals;
      const v = document.querySelector('#player-table-container');
      console.log(v);
      const m = [];
      for (let n = 0; n < 10; n++) {
        let n = [];
        for (let e = 0; e < 10; e++) n.push(0);
        m.push(n);
      }
      console.log(m);
    })();
})();

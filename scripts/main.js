( () => {
  "use strict";
  var e = {
      5739: (e, t, a) => {
          a.d(t, {
              $: () => i
          });
          const i = globalThis.gvar ?? {}
      }
  }
    , t = {};
  function a(i) {
      var o = t[i];
      if (void 0 !== o)
          return o.exports;
      var r = t[i] = {
          exports: {}
      };
      return e[i](r, r.exports, a),
      r.exports
  }
  a.d = (e, t) => {
      for (var i in t)
          a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
              enumerable: !0,
              get: t[i]
          })
  }
  ,
  a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  const i = {
      dispatchEvent: EventTarget.prototype.dispatchEvent,
      stopImmediatePropagation: Event.prototype.stopImmediatePropagation,
      appendChild: Node.prototype.appendChild,
      map: {
          clear: Map.prototype.clear,
          set: Map.prototype.set,
          has: Map.prototype.has,
          get: Map.prototype.get
      },
      array: {
          push: Array.prototype.push,
          includes: Array.prototype.includes
      },
      Map,
      ShadowRoot,
      HTMLMediaElement,
      CustomEvent,
      JSON: {
          parse: JSON.parse,
          stringify: JSON.stringify
      }
  };
  let o;
  a(5739).$;
  let r, c, n, s, l = [], p = [];
  function d(e, t, a) {
      const i = e?.prototype[t];
      i && (e.prototype[t] = function(...e) {
          const t = i.apply(this, e);
          return a(e, this, t),
          t
      }
      )
  }
  function h(e, t, a) {
      t instanceof i.HTMLMediaElement && (i.array.includes.call(l, t) || (i.array.push.call(l, t),
      r.wiggleOn(t)))
  }
  function u(e, t, a) {
      a instanceof i.ShadowRoot && (i.array.includes.call(p, a) || (i.array.push.call(p, a),
      r.wiggleOn(a)))
  }
  function m(e) {
      let t = document.getElementById("movie_player");
      if (t) {
          try {
              t.getAvailablePlaybackRates().push(16)
          } catch (e) {
              return
          }
          s = e => {
              if (n !== e) {
                  n = e;
                  try {
                      c.activateFor(1e3),
                      t.setPlaybackRate(e)
                  } catch (e) {}
              }
          }
          ,
          r?.send({
              type: "YT_REQUEST_RATE"
          }),
          window.removeEventListener("timeupdate", m, {
              capture: !0
          })
      }
  }
  class y {
      active = !1;
      dummyAudio = new Audio;
      ogDesc = {
          playbackRate: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "playbackRate"),
          defaultPlaybackRate: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "defaultPlaybackRate")
      };
      coherence = {
          playbackRate: new Map,
          defaultPlaybackRate: new Map
      };
      constructor() {
          for (let e of ["playbackRate", "defaultPlaybackRate"]) {
              const t = this.ogDesc[e];
              let a = this.coherence[e]
                , o = this;
              try {
                  Object.defineProperty(HTMLMediaElement.prototype, e, {
                      configurable: !0,
                      enumerable: !0,
                      get: function() {
                          return o.ogDesc[e].get.call(this),
                          o.active ? i.map.has.call(a, this) ? i.map.get.call(a, this) : 1 : t.get.call(this)
                      },
                      set: function(r) {
                          !o.active || this instanceof i.HTMLMediaElement || o.ogDesc[e].set.call(this, r);
                          try {
                              let e = t.set.call(o.active ? o.dummyAudio : this, r)
                                , c = t.get.call(o.active ? o.dummyAudio : this);
                              return i.map.set.call(a, this, c),
                              e
                          } catch (e) {
                              throw e
                          }
                      }
                  })
              } catch (e) {}
          }
      }
      activate = () => {
          this.tempTimeout && (clearTimeout(this.tempTimeout),
          delete this.tempTimeout),
          this.active || (this.active = !0,
          i.map.clear.call(this.coherence.playbackRate),
          i.map.clear.call(this.coherence.defaultPlaybackRate),
          l.forEach((e => {
              i.map.set.call(this.coherence.playbackRate, e, this.ogDesc.playbackRate.get.call(e)),
              i.map.set.call(this.coherence.defaultPlaybackRate, e, this.ogDesc.defaultPlaybackRate.get.call(e))
          }
          )))
      }
      ;
      deactivate = () => {
          this.tempTimeout && (clearTimeout(this.tempTimeout),
          delete this.tempTimeout),
          this.active && (this.active = !1)
      }
      ;
      activateFor = e => {
          this.active || (this.activate(),
          this.tempTimeout = setTimeout(this.deactivate, e))
      }
  }
  class v {
      #e = document.createElement("div");
      #t = this.#e.attachShadow({
          mode: "open"
      });
      #a = function() {
          return Math.ceil(1e10 * Math.random()).toString()
      }();
      #i = `GS_SERVER_${this.#a}`;
      #o = `GS_CLIENT_${this.#a}`;
      constructor() {
          this.#e.id = "GS_PARASITE",
          this.#t.addEventListener(this.#o, this.handle, {
              capture: !0
          }),
          document.documentElement.appendChild(this.#e),
          this.#e.dispatchEvent(new CustomEvent("GS_INIT",{
              detail: this.#a
          })),
          this.#e.remove()
      }
      handle = e => {
          let t;
          i.stopImmediatePropagation.call(e);
          try {
              e.detail && (t = i.JSON.parse(e.detail))
          } catch (e) {}
          t && ("SEEK_NETFLIX" === t.type ? function(e) {
              try {
                  (function() {
                      const e = window.netflix.appContext.state.playerApp.getAPI().videoPlayer;
                      return e.getAllPlayerSessionIds().map((t => e.getVideoPlayerBySessionId(t)))
                  }
                  )().forEach((t => t.seek(1e3 * e)))
              } catch (e) {}
          }(t.value) : "GHOST" === t.type ? t.off ? c.deactivate() : c.activate() : "YT_RATE_CHANGE" === t.type && t.value && s?.(t.value))
      }
      ;
      send = e => {
          i.dispatchEvent.call(this.#t, new i.CustomEvent(this.#i,{
              detail: i.JSON.stringify({
                  type: "MSG",
                  data: e
              })
          }))
      }
      ;
      wiggleOn = e => {
          i.appendChild.call(e, this.#e),
          i.dispatchEvent.call(this.#t, new i.CustomEvent(this.#i,{
              detail: i.JSON.stringify({
                  type: "WIGGLE"
              })
          })),
          this.#e.remove()
      }
  }
  !function() {
      if (o = o ?? navigator.userAgent.includes("Firefox/"),
      o) {
          if (window.loadedGsCtx)
              return;
          window.loadedGsCtx = !0,
          function() {
              if (!location.hostname.includes("soundcloud.com"))
                  return;
              const e = AudioContext.prototype.createMediaElementSource;
              AudioContext.prototype.createMediaElementSource = function(...t) {
                  return e.apply(this, [document.createElement("audio")])
              }
          }()
      }
      !function() {
          if (!location.hostname.includes("pan.baidu.com"))
              return;
          let e = navigator.userAgent;
          e = e.replace("Windows NT", "Windоws NT"),
          e = e.replace("Macintosh", "Macintоsh"),
          e = e.replace("Chrome", "Chrоme"),
          e = e.replace("Firefox", "Firefоx"),
          e = e.replace("Edg", "Eԁg"),
          e = e.replace("Safari", "Sаfari");
          const t = Object.getOwnPropertyDescriptor(Navigator.prototype, "userAgent");
          Object.defineProperty(Navigator.prototype, "userAgent", {
              ...t,
              get: function() {
                  return e
              }
          })
      }(),
      c = new y,
      r = new v,
      "www.youtube.com" === location.hostname && window.addEventListener("timeupdate", m, {
          capture: !0
      }),
      d(HTMLMediaElement, "play", h),
      d(HTMLMediaElement, "pause", h),
      d(HTMLMediaElement, "load", h),
      d(Element, "createShadowRoot", u),
      d(Element, "attachShadow", u)
  }()
}
)();






~function () {
  function v(a, d, c) { return function () { c.canScrollPrev() ? a.removeAttribute("disabled") : a.setAttribute("disabled", "disabled"); c.canScrollNext() ? d.removeAttribute("disabled") : d.setAttribute("disabled", "disabled") } } function l(a, d, c) {
    c = void 0 === c ? 0 : c; var e = f.findIndex(function (b) { return b.carouselId === a }); -1 !== e && d && !f[e].intervalId && (f[e].intervalId = setInterval(function () {
      if (!document.hidden) {
        var b = f.findIndex(function (b) { return b.carouselId === a }); -1 !== b && (1 !== f[b].embla.scrollProgress() ? f[b].embla.scrollNext() :
          f[b].embla.scrollTo(0))
      }
    }, 1E3 * c))
  } function m(a, d) {
    return new Promise(function (c, e) {
      var b = a.querySelector(".embla"), t = a.getAttribute("id"), g = b.querySelector(".embla__viewport"), h = b.querySelector(".embla__button--prev"), b = b.querySelector(".embla__button--next"); if (-1 === f.findIndex(function (a) { return a.carouselId === t })) {
        var g = EmblaCarousel(g, d), k = v(h, b, g); h.addEventListener("click", g.scrollPrev, !1); b.addEventListener("click", g.scrollNext, !1); g.on("select", k); g.on("init", k); f.push({
          carouselId: t, embla: g,
          intervalId: null
        }); c(g)
      }
    })
  } function n(a) { var d = {};[].forEach.call(a.attributes, function (a) { if (/^data-/.test(a.name)) { var e = a.name.substr(5).replace(/-(.)/g, function (a, c) { return c.toUpperCase() }); d[e] = w(a.value) } }); return d } function p(a) { var d = f.findIndex(function (c) { return c.carouselId === a }); -1 !== d && ("embla" in f[d] && f[d].embla.destroy(), clearInterval(f[d].intervalId), f.splice(d, 1)) } function w(a) { return "true" === a ? !0 : a } function q(a, d) { var c = {}, e; for (e in d) a[e] || (c[e] = !1); return c } var h = {
    align: "center",
    draggable: !1, skipSnaps: !0, loop: !1, autoPlay: !1, autoPlayInterval: 5
  }, f = [], r = !1, k = void 0, u = "function" == typeof jQuery; u && (k = jQuery); if (document.querySelector("html").classList.contains("is-builder") && u) k(document).on("add.cards", function (a) {
    if (!k(a.target).hasClass("mbr-embla") || r) return Promise.resolve(); var d = a.target.getAttribute("id"); p(d); var c = n(a.target.querySelector(".embla")), e = q(c, h), b = Object.assign(c, e); b.draggable = !1; return m(a.target, b).then(function (a) {
      a.reInit(b); l(d, b.autoPlay, b.autoPlayInterval);
      r = !0; setTimeout(function () { r = !1 }, 0)
    })
  }).on("delete.cards", function (a) { a = a.target.getAttribute("id"); p(a) }).on("changeParameter.cards", function (a, d, c) { if (k(a.target).hasClass("mbr-embla")) { var e = a.target.getAttribute("id"), b = n(a.target.querySelector(".embla")), f = q(b, h), b = Object.assign(b, f); switch (d) { case "loop": h.loop = c ? !0 : !1; break; case "autoplay": h.autoPlay = c; break; case "interval": h.autoPlayInterval = +c }p(e); b.draggable = !1; m(a.target, b); l(e, b.autoPlay, b.autoPlayInterval) } }); else "undefined" === typeof window.initCarouseMultiplePlugin &&
    (window.initCarouseMultiplePlugin = !0, document.querySelectorAll(".mbr-embla").forEach(function (a) { var d = a.getAttribute("id"), c = n(a.querySelector(".embla")), e = q(c, h), b = Object.assign(c, e); m(a, Object.assign(c, e)); l(d, b.autoPlay, +b.autoPlayInterval) }))
}();
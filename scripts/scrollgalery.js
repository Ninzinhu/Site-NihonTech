
(function () {
  function q() {
    var k = document.querySelectorAll(".gallery-wrapper"); k.length && k.forEach(function (m) {
      function k() {
        var b = window.scrollY, a = window.innerHeight, a = m.getBoundingClientRect().top + window.scrollY - a; if (b >= a) {
          var c = v ? new DOMMatrix(v) : null, e = w ? new DOMMatrix(w) : null, d = x ? new DOMMatrix(x) : null; if (c) {
            var q = function () { for (var a = 0; a < n; a++) { var b = r[a].cloneNode(!0); f.appendChild(b) } }, r = f.querySelectorAll(".grid-item"), n = r.length; r.forEach(function (a) { a.querySelector("img").classList.remove("hidden") });
            8 <= n && !f.classList.contains("moving-left") && (c.m41 = -2E3); 8 <= n && !f.classList.contains("moving-left") && 1200 > window.innerWidth && (c.m41 = -900); switch (!0) {
              case 8 > n: q(); case f.classList.contains("moving-right"): translateX1 = c.m41 + .9 * (b - a); break; case f.classList.contains("moving-left"): translateX1 = c.m41 - .9 * (b - a); break; default: 2560 <= window.innerWidth ? translateX1 = c.m41 + .9 * (b - a) : 1440 <= window.innerWidth ? translateX1 = c.m41 + .55 * (b - a) : 1024 <= window.innerWidth ? translateX1 = c.m41 + .45 * (b - a) : 768 <= window.innerWidth ? translateX1 =
                c.m41 + .35 * (b - a) : 320 <= window.innerWidth && (translateX1 = c.m41 + .25 * (b - a))
            }f.style.transform = "translate3d(" + translateX1 + "px, 0, 0)"
          } if (e) {
            var c = function () { for (var a = 0; a < p; a++) { var b = t[a].cloneNode(!0); g.appendChild(b) } }, t = g.querySelectorAll(".grid-item"), p = t.length; t.forEach(function (a) { a.querySelector("img").classList.remove("hidden") }); 8 <= p && g.classList.contains("moving-left") && (e.m41 = -2E3); 8 <= p && !g.classList.contains("moving-left") && 1200 > window.innerWidth && (e.m41 = 0); switch (!0) {
              case 8 > p: c(); case g.classList.contains("moving-right"): translateX2 =
                e.m41 + .9 * (b - a); break; case g.classList.contains("moving-left"): translateX2 = e.m41 - .9 * (b - a); break; default: 2560 <= window.innerWidth ? translateX2 = e.m41 - .9 * (b - a) : 1440 <= window.innerWidth ? translateX2 = e.m41 - .55 * (b - a) : 1024 <= window.innerWidth ? translateX2 = e.m41 - .45 * (b - a) : 768 <= window.innerWidth ? translateX2 = e.m41 - .35 * (b - a) : 320 <= window.innerWidth && (translateX2 = e.m41 - .25 * (b - a))
            }g.style.transform = "translate3d(" + translateX2 + "px, 0, 0)"
          } if (d) {
            var e = function () { for (var a = 0; a < l; a++) { var b = u[a].cloneNode(!0); h.appendChild(b) } },
            u = h.querySelectorAll(".grid-item"), l = u.length; u.forEach(function (a) { a.querySelector("img").classList.remove("hidden") }); 8 <= l && !h.classList.contains("moving-left") && (d.m41 = -2E3); 8 <= l && !h.classList.contains("moving-left") && 1200 > window.innerWidth && (d.m41 = -900); c = d.m41 + .9 * (b - a); 8 > l && e(); h.classList.contains("moving-left") ? h.classList.contains("moving-left") && (8 > l && e(), 2560 <= window.innerWidth ? c = d.m41 - .9 * (b - a) : 1440 <= window.innerWidth ? c = d.m41 - .55 * (b - a) : 1024 <= window.innerWidth ? c = d.m41 - .45 * (b - a) : 768 <= window.innerWidth ?
              c = d.m41 - .35 * (b - a) : 320 <= window.innerWidth && (c = d.m41 - .25 * (b - a))) : 2560 <= window.innerWidth ? c = d.m41 + .9 * (b - a) : 1440 <= window.innerWidth ? c = d.m41 + .55 * (b - a) : 1024 <= window.innerWidth ? c = d.m41 + .45 * (b - a) : 768 <= window.innerWidth ? c = d.m41 + .35 * (b - a) : 320 <= window.innerWidth && (c = d.m41 + .25 * (b - a)); h.style.transform = "translate3d(" + c + "px, 0, 0)"
          }
        }
      } var f = m.querySelector(".grid-container-1"), g = m.querySelector(".grid-container-2"), h = m.querySelector(".grid-container-3"), v = f ? getComputedStyle(f).transform : null, w = g ? getComputedStyle(g).transform :
        null, x = h ? getComputedStyle(h).transform : null; window.addEventListener("DOMContentLoaded", function () { requestAnimationFrame(k) }); window.addEventListener("scroll", function () { requestAnimationFrame(k) })
    })
  } document.querySelector("html").classList.contains("is-builder") || q()
})();
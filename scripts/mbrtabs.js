
function outerFind(a, b) { var d = Array.from(a.querySelectorAll(b)); a.matches(b) && d.splice(0, 0, a); return d }
function updateId(a) {
  0 !== a.querySelectorAll(".nav-tabs").length && outerFind(a, 'section[id^="tabs"], section.tabs, section[id^="extTabs"], section [class*="-tabs"]').forEach(function (b) {
    if ("SECTION" === b.tagName) {
      var d = b.getAttribute("id"), f = b.querySelectorAll(".nav-tabs > .nav-item"); b.querySelectorAll(".tab-pane").forEach(function (a, b) {
        a.setAttribute("id", d + "_tab" + b); 0 === b ? (a.classList.contains("active") || a.classList.add("active"), a.classList.contains("show") || a.classList.add("show")) : (a.classList.remove("active"),
          a.classList.remove("show"))
      }); f.forEach(function (b, e) { var c = b.querySelector("a"); c.setAttribute("href", "#" + d + "_tab" + e); a.getAttribute("data-bs-version") && a.getAttribute("data-bs-version").startsWith("5") && c.setAttribute("data-bs-toggle", "tab"); 0 === e ? (c.classList.contains("active") || c.classList.add("active"), c.classList.contains("show") || c.classList.add("show")) : (c.classList.remove("active"), c.classList.remove("show"), c.removeAttribute("active")) })
    }
  })
} var $, isJQuery = "function" == typeof jQuery;
isJQuery && ($ = jQuery); var isBuilder = document.querySelector("html").classList.contains("is-builder"); if (isBuilder && isJQuery) $(document).on("add.cards", function (a) { updateId(a.target) }); else "undefined" === typeof window.initTabsPlugin && (window.initTabsPlugin = !0, updateId(document.body));
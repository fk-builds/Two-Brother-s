/* ==================================================================
   2BRO'S — EDITIONS template behaviour
   Progressive enhancement only: if this file fails to load, every
   section stays visible and usable. It never touches wording.
   ================================================================== */
(function () {
  var doc = document;
  var html = doc.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var heroes = [].slice.call(doc.querySelectorAll(
    '.hero-copy, .duo .head, .hero2 .copy, .sk-hero .copy, .ct-hero .copy, .pg-hero > .wrap, .pj-hero > .wrap'
  ));

  function allIn() { heroes.forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- reveal on enter ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    html.classList.add('ed-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    heroes.forEach(function (el) { io.observe(el); });
    /* safety net: nothing may ever stay hidden */
    setTimeout(allIn, 5000);
    window.addEventListener('load', function () { setTimeout(allIn, 2600); });
  }

  /* ---------- chapter index rail (continuous home only) ---------- */
  var chapters = [].slice.call(doc.querySelectorAll('.continuous-chapter'));
  var links = [].slice.call(doc.querySelectorAll('nav .links a'));
  if (chapters.length > 1 && links.length && window.innerWidth >= 1180) {
    var roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    var rail = doc.createElement('nav');
    rail.className = 'ed-rail';
    rail.setAttribute('aria-label', 'Chapters');
    links.forEach(function (a, i) {
      var b = doc.createElement('a');
      b.href = a.getAttribute('href');
      b.innerHTML = '<b>' + (roman[i] || i + 1) + '</b><span>' + a.textContent.trim() + '</span>';
      rail.appendChild(b);
    });
    doc.body.appendChild(rail);
    var railLinks = [].slice.call(rail.children);

    if ('IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var idx = chapters.indexOf(e.target);
          railLinks.forEach(function (l, i) { l.classList.toggle('on', i === idx); });
        });
      }, { rootMargin: '-45% 0px -45% 0px' });
      chapters.forEach(function (c) { spy.observe(c); });
    }
    /* the index belongs to the chapter covers: show it only while a cover is on screen */
    var heroesEls = [].slice.call(doc.querySelectorAll('.hero, .pg-hero, .duo, .pj-hero, .hero2'));
    if ('IntersectionObserver' in window && heroesEls.length) {
      var coverSpy = new IntersectionObserver(function (entries) {
        var any = false;
        entries.forEach(function (e) { if (e.isIntersecting) any = true; });
        if (any) { rail.classList.add('on'); }
        else {
          /* only hide when no cover is intersecting at all */
          var visible = heroesEls.some(function (h) {
            var r = h.getBoundingClientRect();
            return r.bottom > 80 && r.top < window.innerHeight - 80;
          });
          if (!visible) rail.classList.remove('on');
        }
      }, { threshold: [0.02, 0.12, 0.4] });
      heroesEls.forEach(function (h) { coverSpy.observe(h); });
    }
  }

  /* ---------- tiny kinematics: title drift + hairline parallax ---------- */
  if (!reduce) {
    var ticking = false;
    var frames = [].slice.call(doc.querySelectorAll('.hero, .pg-hero, .duo, .pj-hero, .hero2'));
    function drift() {
      var vh = window.innerHeight;
      frames.forEach(function (f) {
        var r = f.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));  /* 0 → 1 */
        var img = f.querySelector('.stage img, .bg');
        var copy = f.querySelector('.hero-copy, .duo .head, .hero2 .copy, .wrap');
        if (img) img.style.transform = 'translate3d(0,' + ((p - 0.5) * -34).toFixed(2) + 'px,0) scale(1.06)';
        if (copy && !copy.classList.contains('is-in')) return;
        if (copy) copy.style.setProperty('--ed-drift', ((p - 0.5) * 18).toFixed(2) + 'px');
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(drift); }
    }, { passive: true });
    drift();
  }
})();

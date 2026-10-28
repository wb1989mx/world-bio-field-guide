(function () {
  "use strict";
  var SPECIES = window.SPECIES || [];
  var TOPICS = window.TOPICS || [];
  var $app = null; // 在 init() 中获取（兼容脚本置于 head 的场景）

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escAttr(s) { return esc(s).replace(/"/g, "&quot;"); }
  function speciesById(id) { return SPECIES.find(function (s) { return s.id === id; }); }
  function topicById(id) { return TOPICS.find(function (t) { return t.id === id; }); }

  // ---------- theme ----------
  function getTheme() { return localStorage.getItem("bio-theme") || "light"; }
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("bio-theme", t);
    var b = document.getElementById("themeBtn");
    if (b) b.textContent = t === "dark" ? "☀️ 亮色" : "🌙 暗色";
  }

  // ---------- favorites ----------
  function getFav() { try { return JSON.parse(localStorage.getItem("bio-fav") || "[]"); } catch (e) { return []; } }
  function isFav(id) { return getFav().indexOf(id) !== -1; }
  function toggleFav(id) {
    var f = getFav();
    if (f.indexOf(id) !== -1) f = f.filter(function (x) { return x !== id; });
    else f.push(id);
    localStorage.setItem("bio-fav", JSON.stringify(f));
  }

  // ---------- image render ----------
  function imgHTML(im) {
    if (im.src) return '<img class="ill" src="' + escAttr(im.src) + '" alt="' + escAttr(im.caption || "") + '">';
    return im.svg || "";
  }

  // ---------- card ----------
  function cardHTML(s) {
    var cons = s.conservation && s.conservation.iucn ? '<span class="chip">' + esc(s.conservation.iucn) + "</span>" : "";
    return '<div class="card" data-id="' + esc(s.id) + '">' +
      '<div class="thumb">' + (s.images[0] ? imgHTML(s.images[0]) : "") + "</div>" +
      "<h3>" + esc(s.names.zh) + "</h3>" +
      '<div class="sci">' + esc(s.taxon.species) + "</div>" +
      '<div><span class="chip">' + esc(s.domainLabel) + "</span>" + cons + "</div>" +
      "</div>";
  }
  function gridHTML(list) {
    if (!list.length) return '<div class="empty">未找到匹配物种。</div>';
    return '<div class="grid">' + list.map(cardHTML).join("") + "</div>";
  }

  // ---------- views ----------
  function renderHome() {
    var featured = SPECIES.slice(0, 6).map(cardHTML).join("");
    $app.innerHTML =
      '<div class="hero"><h1>让每一个生命，都被看见、被读懂</h1>' +
      "<p>世界动植物与微生物图文阅读平台 · MVP 原型（离线可用）</p>" +
      '<div class="rand" id="randBtn">🎲 随机发现一个物种</div></div>' +
      '<div class="section-title">专题入口</div>' +
      '<div class="grid">' + TOPICS.map(function (t) {
        return '<div class="card" data-topic="' + t.id + '"><h3>' + esc(t.name) + "</h3>" +
          '<div class="sci">' + esc(t.desc) + "</div></div>";
      }).join("") + "</div>" +
      '<div class="section-title">物种精选</div><div class="grid">' + featured + "</div>";
    document.getElementById("randBtn").addEventListener("click", function () {
      var s = SPECIES[Math.floor(Math.random() * SPECIES.length)];
      location.hash = "#/species/" + s.id;
    });
  }

  var browseDomain = "all";
  function renderBrowse() {
    var chips = [["all", "全部"], ["animal", "动物界"], ["plant", "植物界"], ["microbe", "微生物"]]
      .map(function (c) {
        return '<span class="chip" data-dom="' + c[0] + '" style="cursor:pointer;' +
          (browseDomain === c[0] ? "background:var(--brand);color:#fff;" : "") + '">' + c[1] + "</span>";
      }).join(" ");
    var list = browseDomain === "all" ? SPECIES : SPECIES.filter(function (s) { return s.domain === browseDomain; });
    $app.innerHTML = '<div class="section-title">分类浏览</div>' +
      '<div style="margin:6px 0 14px">' + chips + "</div>" + gridHTML(list);
    Array.prototype.forEach.call($app.querySelectorAll(".chip[data-dom]"), function (el) {
      el.addEventListener("click", function () { browseDomain = el.getAttribute("data-dom"); renderBrowse(); });
    });
  }

  function renderTopics() {
    $app.innerHTML = '<div class="section-title">专题图鉴</div><div class="grid">' +
      TOPICS.map(function (t) {
        var n = t.id === "season" ? SPECIES.filter(function (s) { return s.season; }).length
          : SPECIES.filter(function (s) { return (s.topics || []).indexOf(t.id) !== -1; }).length;
        return '<div class="card" data-topic="' + t.id + '"><h3>' + esc(t.name) + "</h3>" +
          '<div class="sci">' + esc(t.desc) + "</div>" +
          '<div><span class="chip">' + n + " 个物种</span></div></div>";
      }).join("") + "</div>";
  }

  function renderTopic(id) {
    var t = topicById(id);
    if (!t) { $app.innerHTML = '<div class="empty">专题不存在。</div>'; return; }
    if (id === "season") {
      var seasons = [["spring", "春"], ["summer", "夏"], ["autumn", "秋"], ["winter", "冬"]];
      var parts = seasons.map(function (s) {
        var items = SPECIES.filter(function (x) { return x.season === s[0]; });
        return '<div class="section-title">' + s[1] + "季</div>" + (items.length ? gridHTML(items) : '<div class="empty">暂无</div>');
      }).join("");
      $app.innerHTML = '<div class="section-title">' + esc(t.name) + "</div><p class='ill-note'>" + esc(t.desc) + "</p>" + parts;
      return;
    }
    var list = SPECIES.filter(function (s) { return (s.topics || []).indexOf(id) !== -1; });
    $app.innerHTML = '<div class="section-title">' + esc(t.name) + "</div><p class='ill-note'>" + esc(t.desc) + "</p>" +
      (list.length ? gridHTML(list) : '<div class="empty">暂无</div>');
  }

  // ---------- audio narration (Web Speech API) ----------
  var audioState = { utter: null, playing: false, paused: false, speciesId: null };
  var zhVoices = [];
  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    try { zhVoices = window.speechSynthesis.getVoices() || []; } catch (e) { zhVoices = []; }
  }
  if ("speechSynthesis" in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickZhVoice() {
    if (!("speechSynthesis" in window)) return null;
    if (!zhVoices.length) { try { zhVoices = window.speechSynthesis.getVoices() || []; } catch (e) {} }
    for (var i = 0; i < zhVoices.length; i++) {
      if (zhVoices[i].lang && zhVoices[i].lang.toLowerCase().indexOf("zh") === 0) return zhVoices[i];
    }
    return null;
  }
  function buildNarration(s) {
    var parts = [];
    parts.push("欢迎了解" + s.names.zh + "。");
    parts.push("它的学名是" + s.taxon.species + (s.names.en ? ("，英文名" + s.names.en) : "") + "。");
    var feat = [];
    if (s.morphology && s.morphology.summary) feat.push(s.morphology.summary);
    if (s.morphology && s.morphology.key_features && s.morphology.key_features.length) {
      feat.push("主要特征包括：" + s.morphology.key_features.join("、") + "。");
    }
    var eco = s.ecology || {}, habits = [];
    if (eco.habitat) habits.push("栖息于" + eco.habitat);
    if (eco.diet) habits.push("以" + eco.diet + "为食");
    if (eco.behavior) habits.push(eco.behavior);
    if (habits.length) feat.push("它" + habits.join("，") + "。");
    if (s.distribution && s.distribution.length) feat.push("主要分布于" + s.distribution.join("、") + "。");
    if (s.facts && s.facts.length) feat.push("还有一个有趣的冷知识：" + s.facts[0] + "。");
    return parts.concat(feat).join("");
  }
  function setupAudio(s) {
    var player = document.getElementById("audioPlayer");
    var btn = document.getElementById("audioBtn");
    var status = document.getElementById("audioStatus");
    if (!player || !btn || !status) return;
    if (!("speechSynthesis" in window)) { player.style.display = "none"; return; }
    try { window.speechSynthesis.cancel(); } catch (e) {}
    audioState = { utter: null, playing: false, paused: false, speciesId: s.id };
    btn.onclick = function () {
      var synth = window.speechSynthesis;
      if (audioState.playing && !audioState.paused) {
        try { synth.pause(); } catch (e) {}
        audioState.paused = true; btn.textContent = "▶"; btn.classList.remove("playing"); status.textContent = "已暂停"; return;
      }
      if (audioState.paused) {
        try { synth.resume(); } catch (e) {}
        audioState.paused = false; audioState.playing = true;
        btn.textContent = "⏸"; btn.classList.add("playing"); status.textContent = "朗读中…"; return;
      }
      var u = new SpeechSynthesisUtterance(buildNarration(s));
      var v = pickZhVoice();
      if (v) u.voice = v;
      u.lang = "zh-CN"; u.rate = 1.0; u.pitch = 1.0;
      u.onstart = function () { audioState.playing = true; audioState.paused = false; btn.textContent = "⏸"; btn.classList.add("playing"); status.textContent = "朗读中…"; };
      u.onend = function () { audioState.playing = false; audioState.paused = false; btn.textContent = "🔊"; btn.classList.remove("playing"); status.textContent = "播放完毕，可重新播放"; };
      u.onerror = function () { audioState.playing = false; audioState.paused = false; btn.textContent = "🔊"; btn.classList.remove("playing"); status.textContent = "当前环境暂不支持朗读"; };
      audioState.utter = u;
      try { synth.cancel(); synth.speak(u); } catch (e) { status.textContent = "当前环境暂不支持朗读"; }
    };
  }

  function renderDetail(id) {
    var s = speciesById(id);
    if (!s) { $app.innerHTML = '<div class="empty">未找到该物种。</div>'; return; }
    var tax = s.taxon;
    var taxonPathHTML = [tax.kingdom, tax.phylum, tax.class, tax.order, tax.family, tax.genus, tax.species]
      .map(function (t, i) { return (i < 6 ? '<a href="#/browse">' + esc(t) + "</a>" : "<i>" + esc(t) + "</i>"); })
      .join("");

    var firstIm = s.images[0] || null;
    var firstSpotsHTML = firstIm ? (firstIm.hotspots || []).map(function (h) {
      return '<button class="hotspot" style="left:' + (h.x * 100) + "%;top:" + (h.y * 100) +
        '%" data-label="' + escAttr(h.label) + '" data-desc="' + escAttr(h.desc) + '" aria-label="' + escAttr(h.label) + '">+</button>';
    }).join("") : "";
    var annotsHTML = firstIm ? (firstIm.hotspots || []).map(function (h) {
      return "<li><b>" + esc(h.label) + "</b> — " + esc(h.desc) + "</li>";
    }).join("") : "";
    var extraImgsHTML = s.images.slice(1).map(function (im) {
      var spots = (im.hotspots || []).map(function (h) {
        return '<button class="hotspot" style="left:' + (h.x * 100) + "%;top:" + (h.y * 100) +
          '%" data-label="' + escAttr(h.label) + '" data-desc="' + escAttr(h.desc) + '" aria-label="' + escAttr(h.label) + '">+</button>';
      }).join("");
      var annots = (im.hotspots || []).map(function (h) {
        return "<li><b>" + esc(h.label) + "</b> — " + esc(h.desc) + "</li>";
      }).join("");
      return '<div class="ill-box">' + imgHTML(im) + '<div class="hotspots">' + spots + "</div></div>" +
        '<div class="ill-note">' + ((im.hotspots && im.hotspots.length) ? "📍 点击图中橙色圆点查看形态说明 · " : "") + esc(im.caption) + "</div>" +
        (annots ? '<ul class="annots">' + annots + "</ul>" : "");
    }).join("");

    var cons = s.conservation || {};
    var consHTML = [cons.iucn, cons.cites, cons.cn].filter(Boolean)
      .map(function (c) { return '<span class="pill"><b>保护</b> ' + esc(c) + "</span>"; }).join("");
    var distHTML = (s.distribution || []).map(function (d) { return '<span class="chip">' + esc(d) + "</span>"; }).join("");
    var featHTML = (s.morphology.key_features || []).map(function (f) { return '<span class="tag">' + esc(f) + "</span>"; }).join("");
    var factsHTML = (s.facts || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
    var refHTML = (s.references || []).map(function (r) {
      return '<li><a href="' + escAttr(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + "</a></li>";
    }).join("");
    var favOn = isFav(s.id);

    // 同类（同一域：动物界/植物界/微生物）下一个物种，支持连续翻阅；末个循环回首个
    var sameDomain = SPECIES.filter(function (x) { return x.domain === s.domain; });
    var curIdx = -1;
    for (var i = 0; i < sameDomain.length; i++) { if (sameDomain[i].id === s.id) { curIdx = i; break; } }
    var next = (curIdx !== -1 && sameDomain.length > 1) ? sameDomain[(curIdx + 1) % sameDomain.length] : null;
    var nextBtnHTML = next
      ? '<button class="stage-next" id="nextBtn" title="跳到同类下一个物种">下一个 · ' + esc(next.names.zh) + " →</button>"
      : "";

    $app.innerHTML =
      '<div class="breadcrumb"><a href="#/">发现</a> › <a href="#/browse">' + esc(s.domainLabel) + "</a> › <b>" + esc(s.names.zh) + "</b></div>" +
      '<div class="detail">' +
        '<div class="detail-stage">' +
          '<div class="stage-media">' +
            (firstIm ? '<div class="stage-imgwrap">' + imgHTML(firstIm) + '<div class="hotspots">' + firstSpotsHTML + "</div></div>" : '<div class="empty">暂无图片</div>') +
          "</div>" +
          '<div class="stage-side">' +
            '<div class="stage-head">' +
              "<h2>" + esc(s.names.zh) + "</h2>" +
              '<div class="subtitle"><i class="sci">' + esc(s.taxon.species) + "</i> · " + esc(s.names.en) + "</div>" +
              '<div class="meta">' + consHTML + "</div>" +
            "</div>" +
            '<div class="audio-player" id="audioPlayer">' +
              '<button class="audio-btn" id="audioBtn" aria-label="朗读介绍">🔊</button>' +
              '<div class="audio-info">' +
                '<div class="audio-title">语音介绍</div>' +
                '<div class="audio-status" id="audioStatus">点击播放，收听本物种介绍</div>' +
              "</div>" +
            "</div>" +
            '<p class="stage-summary">' + esc(s.morphology.summary) + "</p>" +
            (firstIm ? '<div class="ill-note stage-caption">' + ((firstIm.hotspots && firstIm.hotspots.length) ? "📍 点击图中橙色圆点查看形态说明 · " : "") + esc(firstIm.caption) + "</div>" : "") +
            '<div class="stage-actions">' + nextBtnHTML + "</div>" +
            '<div class="stage-scrollhint">↓ 下滑查看详细介绍</div>' +
          "</div>" +
        "</div>" +
        '<div class="detail-sections">' +
          '<div class="sec"><h3>分类阶元</h3><div class="taxon-path">' + taxonPathHTML + "</div></div>" +
          '<div class="sec"><h3>形态说明</h3><p>' + esc(s.morphology.summary) + '</p><div class="tags-row">' + featHTML + "</div>" +
            (annotsHTML ? '<ul class="annots">' + annotsHTML + "</ul>" : "") + "</div>" +
          (extraImgsHTML ? '<div class="sec"><h3>更多图示</h3>' + extraImgsHTML + "</div>" : "") +
          '<div class="sec"><h3>生态习性</h3><div class="kv">' +
            "<dt>栖息地</dt><dd>" + esc(s.ecology.habitat) + "</dd>" +
            "<dt>食性</dt><dd>" + esc(s.ecology.diet) + "</dd>" +
            "<dt>习性</dt><dd>" + esc(s.ecology.behavior) + "</dd></div></div>" +
          (distHTML ? '<div class="sec"><h3>分布</h3><div>' + distHTML + "</div></div>" : "") +
          '<div class="sec"><h3>冷知识</h3><ul class="facts">' + factsHTML + "</ul></div>" +
          (refHTML ? '<div class="sec"><h3>参考资料</h3><ul class="refs">' + refHTML + "</ul></div>" : "") +
          '<div class="action-bar"><button class="fav-btn ' + (favOn ? "on" : "") + '" id="favBtn">' + (favOn ? "★ 已收藏" : "☆ 收藏") + "</button></div>" +
          '<div class="license-note">' + esc(s.license || "") + "</div>" +
        "</div>" +
      "</div>";

    document.getElementById("favBtn").addEventListener("click", function () { toggleFav(s.id); renderDetail(s.id); });
    var nextBtn = document.getElementById("nextBtn");
    if (nextBtn && next) {
      nextBtn.addEventListener("click", function () { location.hash = "#/species/" + next.id; });
    }
    setupAudio(s);
  }

  function renderFav() {
    var fav = getFav();
    var list = SPECIES.filter(function (s) { return fav.indexOf(s.id) !== -1; });
    $app.innerHTML = '<div class="section-title">我的收藏</div>' +
      (list.length ? gridHTML(list) : '<div class="empty">还没有收藏。在物种详情页点「☆ 收藏」即可。</div>');
  }

  function renderSearch(q) {
    q = q || "";
    var results = q ? (window.BioSearch ? window.BioSearch.search(q) : []) : [];
    $app.innerHTML =
      '<div class="section-title">检索生物</div>' +
      '<div class="search-bar"><input id="searchInput" type="text" placeholder="输入中文名 / 学名 / 俗名 / 特征，如：熊猫、Ginkgo、鞭毛、春季" value="' + escAttr(q) + '"></div>' +
      '<div id="searchResults">' +
      (q ? gridHTML(results) : '<div class="empty">输入关键词开始检索（前端本地索引，离线可用）。</div>') + "</div>";
    var inp = document.getElementById("searchInput");
    inp.addEventListener("input", function () {
      var r = window.BioSearch ? window.BioSearch.search(inp.value) : [];
      document.getElementById("searchResults").innerHTML = inp.value.trim() ? gridHTML(r) : '<div class="empty">输入关键词开始检索。</div>';
    });
    inp.focus();
  }

  // ---------- router ----------
  function setActiveNav(view) {
    Array.prototype.forEach.call(document.querySelectorAll("nav a[data-nav]"), function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === view);
    });
  }
  function render() {
    if ("speechSynthesis" in window) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/");
    var view = parts[0] || "home";
    if (view === "species") { renderDetail(decodeURIComponent(parts[1] || "")); setActiveNav(""); }
    else if (view === "browse") { renderBrowse(); setActiveNav("browse"); }
    else if (view === "topics") { renderTopics(); setActiveNav("topics"); }
    else if (view === "topic") { renderTopic(decodeURIComponent(parts[1] || "")); setActiveNav("topics"); }
    else if (view === "fav") { renderFav(); setActiveNav("fav"); }
    else if (view === "search") { renderSearch(decodeURIComponent(parts[1] || "")); setActiveNav("search"); }
    else { renderHome(); setActiveNav("home"); }
    window.scrollTo(0, 0);
  }

  // ---------- delegated clicks（在 init() 中绑定，见下方） ----------
  function bindDelegatedClicks() {
    $app.addEventListener("click", function (e) {
      var hs = e.target.closest(".hotspot");
      if (hs) { e.stopPropagation(); showPop(hs); return; }
      var tcard = e.target.closest(".card[data-topic]");
      if (tcard) { location.hash = "#/topic/" + tcard.getAttribute("data-topic"); return; }
      var card = e.target.closest(".card[data-id]");
      if (card) { location.hash = "#/species/" + card.getAttribute("data-id"); }
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".hotspot") && !e.target.closest(".hs-pop")) hidePops();
    });
  }
  function hidePops() { Array.prototype.forEach.call(document.querySelectorAll(".hs-pop"), function (p) { p.remove(); }); }
  function showPop(hs) {
    hidePops();
    var pop = document.createElement("div");
    pop.className = "hs-pop";
    pop.innerHTML = "<b>" + esc(hs.dataset.label) + "</b><br>" + esc(hs.dataset.desc);
    document.body.appendChild(pop);
    var r = hs.getBoundingClientRect();
    var top = r.bottom + 6, left = r.left;
    if (left + pop.offsetWidth > window.innerWidth - 8) left = window.innerWidth - pop.offsetWidth - 8;
    if (left < 8) left = 8;
    if (top + pop.offsetHeight > window.innerHeight - 8) top = r.top - pop.offsetHeight - 6;
    pop.style.left = left + "px"; pop.style.top = top + "px";
  }

  // ---------- init ----------
  function init() {
    $app = document.getElementById("app");
    if (!$app) return;

    bindDelegatedClicks();

    document.getElementById("themeBtn").addEventListener("click", function () {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
    setTheme(getTheme());

    var fsBtn = document.getElementById("fsBtn");
    if (fsBtn) {
      fsBtn.addEventListener("click", function () {
        if (!document.fullscreenElement) {
          (document.documentElement.requestFullscreen || function () {}).call(document.documentElement);
        } else {
          (document.exitFullscreen || function () {}).call(document);
        }
      });
    }

    // 导航显式点击绑定：不依赖 hashchange 事件（部分内嵌预览/webview 不派发该事件）
    Array.prototype.forEach.call(document.querySelectorAll("nav a[data-nav]"), function (a) {
      a.addEventListener("click", function () {
        var target = a.getAttribute("href");
        if (target && location.hash !== target) location.hash = target;
        setTimeout(render, 0); // 双保险：hash 可能异步更新
      });
    });

    window.addEventListener("hashchange", render);

    // hashchange 兜底轮询：个别环境（内嵌面板、旧 webview）不派发 hashchange
    var lastHash = location.hash;
    setInterval(function () {
      if (location.hash !== lastHash) { lastHash = location.hash; render(); }
    }, 120);

    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

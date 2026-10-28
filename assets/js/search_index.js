/*
 * 离线检索索引（零依赖，替代 FlexSearch）
 * 说明：因沙箱当前无法访问 CDN，此处自研一个轻量倒排索引，
 *       行为与 FlexSearch 类似（中文按字/词 + 英文按词），完全离线可用。
 *       联网后也可平滑替换为 FlexSearch（API 兼容 search(q)）。
 */
(function () {
  "use strict";

  function tokenize(text) {
    text = (text == null ? "" : String(text)).toLowerCase();
    var toks = [];
    var latin = text.match(/[a-z0-9]+/g) || [];
    for (var i = 0; i < latin.length; i++) toks.push(latin[i]);
    var cn = text.match(/[一-鿿]+/g) || [];
    cn.forEach(function (seg) {
      for (var j = 0; j < seg.length; j++) {
        toks.push(seg[j]);                       // 单字
        if (j < seg.length - 1) toks.push(seg.slice(j, j + 2)); // 二元
      }
    });
    return toks;
  }

  var SPECIES = (typeof window !== "undefined" && window.SPECIES) || [];
  var index = Object.create(null);

  SPECIES.forEach(function (s, idx) {
    var fields = [
      s.names.zh, s.names.en, (s.names.common || []).join(" "), s.taxon.species,
      s.taxon.kingdom, s.taxon.phylum, s.taxon.class, s.taxon.order, s.taxon.family, s.taxon.genus,
      s.morphology.summary, s.morphology.key_features.join(" "),
      s.ecology.habitat, s.ecology.diet, s.facts.join(" "),
      (s.topics || []).join(" "), (s.season || "")
    ];
    tokenize(fields.join(" ")).forEach(function (t) {
      (index[t] || (index[t] = new Set())).add(idx);
    });
  });

  function search(q, limit) {
    q = (q || "").trim();
    if (!q) return [];
    var qt = tokenize(q);
    var score = Object.create(null);
    qt.forEach(function (t, i) {
      if (index[t]) index[t].forEach(function (idx) {
        score[idx] = (score[idx] || 0) + (i === 0 ? 2 : 1);
      });
    });
    return Object.keys(score)
      .map(function (k) { return { idx: +k, score: score[k] }; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit || 50)
      .map(function (r) { return SPECIES[r.idx]; });
  }

  if (typeof window !== "undefined") window.BioSearch = { search: search, tokenize: tokenize };
  if (typeof module !== "undefined" && module.exports) module.exports = { search: search, tokenize: tokenize };
})();

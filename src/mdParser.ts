import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-toc-done-right";
import hljs from "highlight.js";

// 共享的 slugify 函数
const slugify = (s: string) => {
  return encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-+/g, "-")
  );
};

// 初始化 markdown-it
const md: MarkdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  }
});

// 添加标题锚点插件
md.use(anchor, {
  level: [1, 2, 3, 4, 5, 6],
  slugify,
  permalink: anchor.permalink.linkInsideHeader({
    class: "header-anchor",
    symbol: " ",
    placement: "before"
  })
});

// 添加 TOC 插件
md.use(toc, {
  containerClass: "markdown-toc",
  listType: "ul",
  level: [1, 2, 3, 4, 5, 6],
  slugify
});

export default md;

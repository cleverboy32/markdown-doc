
import md from "./mdParser";
import './index.scss';

/** md 转换为 html  toc html 是左侧目录， md html 是文档正文 */
const transformMarkdown = (mdStr: string) => {

  const renderedHtml = md.render("\n${toc}\n" + mdStr);
  const [_, toc, rest] = renderedHtml.match(
    /(<nav class="markdown-toc">[\s\S]*<\/nav>)([\s\S]*)/
  ) || ['', '', ''];
  const tocHtml = toc;
  const mdHtml = `<div class="markdown-body">${rest}</div>`;

  return {
    mdHtml,
    tocHtml
  }
};


export { transformMarkdown }

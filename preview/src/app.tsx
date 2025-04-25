import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownPreview from './preview';
import './app.css';

// 创建根节点
const root = ReactDOM.createRoot(document.getElementById('root')!);

// 渲染 MarkdownPreview 组件到根节点
root.render(
  <React.StrictMode>
    <MarkdownPreview />
  </React.StrictMode>
);

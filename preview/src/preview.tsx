import React from 'react';
import { transformMarkdown } from '../../src/index'
import mdStr from './test.md?raw';


const MarkdownPreview: React.FC = () => {
  const markdownContent = mdStr;
  const { tocHtml, mdHtml } = transformMarkdown(markdownContent);

  return (
    <div className="flex w-full h-full">
      <div dangerouslySetInnerHTML={{ __html: tocHtml }} className='w-[30%] p-10 h-full overflow-y-auto fixed' />
      <div className='p-10 ml-[35%] overflow-y-auto h-full ' dangerouslySetInnerHTML={{ __html: mdHtml }}>
      </div>
    </div>
  );
};

export default MarkdownPreview;

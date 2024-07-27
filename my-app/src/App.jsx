import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  const handleContentChange = (content) => {
    console.log(content);
  };

  return <MarkdownEditor onContentChange={handleContentChange} />;
}
export default App;

import React, { Component } from 'react';
import { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const { onContentChange } = this.props;

    this.editorInstance = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true
    });

    this.editorInstance.addHook('change', () => {
      const content = this.editorInstance.getMarkdown();
      if (onContentChange) {
        onContentChange(content);
      }
    });
  }

  componentWillUnmount() {
    if (this.editorInstance) {
      this.editorInstance.destroy();
    }
  }

  render() {
    return <div ref={this.editorRef} />;
  }
}

export default MarkdownEditor;

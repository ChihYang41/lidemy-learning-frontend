import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import React from "react";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={true}>
      {value}
    </SyntaxHighlighter>
  );
};

const Markdown = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{ code: CodeBlock }}
    linkTarget="_blank"
  />
);

export default Markdown;

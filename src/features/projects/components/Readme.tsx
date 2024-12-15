import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Readme(props: { base64content: string }) {
  const { base64content } = props;
  const content = Buffer.from(base64content, "base64").toString("utf-8");
  return (
    <ReactMarkdown
      className="max-w-[calc(100dvw-6rem)]"
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
}

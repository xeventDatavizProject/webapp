import { marked } from "marked";
import { FC } from "react";
interface MarkdownProps {
  readonly className?: string;
  children: string;
}
const Markdown: FC<MarkdownProps> = ({ children, className }) => {
  return (
    <div
      className={`space-y-4 ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: marked(children.toString(), {
          headerIds: false,
        }),
      }}
    />
  );
};
export default Markdown;

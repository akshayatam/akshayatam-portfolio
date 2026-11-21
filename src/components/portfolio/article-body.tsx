import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ContentBlock } from "@/content/types";
import { CodeBlock } from "./code-block";
import { RichContent } from "./content";

export function ArticleBody({
  markdown,
  blocks,
}: {
  markdown?: string | null | undefined;
  blocks: ContentBlock[];
}) {
  if (!markdown?.trim()) return <RichContent blocks={blocks} />;

  return (
    <div className="prose-custom [&_a]:underline [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-muted [&_:not(pre)>code]:px-1">
      <Markdown
        skipHtml
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ node, children }) {
            const code = node?.children[0];
            if (code?.type !== "element" || code.tagName !== "code") {
              return <pre>{children}</pre>;
            }

            const language = code.properties.className
              ?.toString()
              .match(/^language-([^,\s]+)/)?.[1];
            const snippet = code.children
              .map((child) => (child.type === "text" ? child.value : ""))
              .join("")
              .replace(/\n$/, "");

            return <CodeBlock code={snippet} language={language} />;
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

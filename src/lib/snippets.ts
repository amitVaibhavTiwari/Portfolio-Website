import fs from "fs";
import path from "path";
import matter from "gray-matter";

const snippetsDir = path.join(process.cwd(), "/src/code_snippets/snippets");

export function getAllSnippets() {
  const files = fs.readdirSync(snippetsDir);

  return files.map((file) => {
    const filePath = path.join(snippetsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(/\.md$/, ""),
      ...data,
    };
  });
}

export function getSnippetBySlug(slug: string): Snippet {
  const filePath = path.join(snippetsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const snippets: CodeSnippet[] = [];
  const blocks = content.split(/^##\s+/gm).filter(Boolean);

  for (const block of blocks) {
    const [titleLine, ...rest] = block.trim().split("\n");
    const title = titleLine.trim();

    const descMatch = rest.find((line) => line.startsWith("**Description**:"));
    const description = descMatch
      ? descMatch.replace("**Description**:", "").trim()
      : "";

    const codeBlockMatch = block.match(/```[\s\S]*?```/);
    const code = codeBlockMatch
      ? codeBlockMatch[0]
          .replace(/```[a-z]*\n?/, "")
          .replace(/```$/, "")
          .trim()
      : "";

    if (title && code) {
      snippets.push({ title, description, code });
    }
  }

  return {
    slug,
    metadata: data,
    snippets,
  };
}

export type CodeSnippet = {
  title: string;
  description: string;
  code: string;
};

export type Snippet = {
  slug: string;
  metadata: Record<string, any>;
  snippets: CodeSnippet[];
};

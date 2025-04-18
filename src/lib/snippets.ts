import fs from "fs";
import path from "path";
import matter, { language } from "gray-matter";

const snippetsDir = path.join(process.cwd(), "/src/content/snippets");

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

  return {
    slug,
    content,
    ...data,
  };
}

export type Snippet = {
  slug: string;
  content?: string;
  [key: string]: any;
};

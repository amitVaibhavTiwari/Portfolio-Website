import { getSnippetBySlug, Snippet } from '@/lib/snippets';
import CodeBlock from '@/components/CodeBlock/CodeBlock';

type Params = {
    slug: string;
}

export const metadata = {
    title: "Code Snippets",
};

const page = async ({ params }: { params: Params }) => {
    const { slug } = params;
    const snippet: Snippet = await getSnippetBySlug(slug);
    return (
        <>
            <div className="min-h-screen">
                <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold">{snippet.title}</h2>
                <p className='text-base mt-2 md:mt-1 mb-4'>{snippet.description}</p>
                <div className="prose max-w-none">
                    <CodeBlock
                        language={snippet.language.toLowerCase()}
                        code={snippet?.content || ""}
                    />
                </div>
            </div>
        </>
    );
}

export default page

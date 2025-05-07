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
                <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold">{snippet.metadata.title}</h2>
                <p className='text-base mt-2 md:mt-1 mb-4'>{snippet.metadata.description}</p>
                <div className="prose max-w-none">
                    {
                        snippet.snippets.map((dta) => (
                            <div key={dta.title}>
                                {dta?.title && <h1>{dta.title}</h1>}
                                {dta?.description && <p>{dta.description}</p>}
                                <CodeBlock
                                    language={snippet.metadata.language.toLowerCase()}
                                    code={dta.code || ""}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default page

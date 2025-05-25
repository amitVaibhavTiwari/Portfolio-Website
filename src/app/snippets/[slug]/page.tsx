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
                <h2 className="text-black dark:text-zinc-300 text-[1.7rem] md:text-3xl font-bold">{snippet.metadata.title}</h2>
                <p className='mt-2 md:mt-1'>{snippet.metadata.description}</p>
                <div className="mt-6 flex flex-col gap-12">
                    {
                        snippet.snippets.map((dta) => (
                            <div key={dta.title}>
                                {dta?.title && <h1 className='text-lg mb-1 font-bold text-black dark:text-zinc-300'>{dta.title}</h1>}
                                {dta?.description && <p className='italic mb-3'>{dta.description}</p>}
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

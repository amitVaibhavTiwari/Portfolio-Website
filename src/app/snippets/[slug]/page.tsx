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
                <p className='text-base mt-2 md:mt-1'>{snippet.metadata.description}</p>
                <div className="mt-4">
                    {
                        snippet.snippets.map((dta) => (
                            <div className='mt-6' key={dta.title}>
                                {dta?.title && <h1 className='text-lg font-bold text-black italic dark:text-white'>{dta.title}</h1>}
                                {dta?.description && <p className='text-base italic mb-3'>{dta.description}</p>}
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

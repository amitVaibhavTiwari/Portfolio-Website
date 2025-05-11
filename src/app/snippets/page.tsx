import { getAllSnippets } from '@/lib/snippets';
import Link from 'next/link';
export const metadata = {
    title: "Code Snippets",
};

const page = async () => {
    const snippets = await getAllSnippets();
    return (
        <div className='min-h-screen'>
            <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center">Code Snippets</h2>
            <p className='text-base mt-2 md:mt-1 text-center'>A collection of some useful code snippets and commands which I don't like to google every time so i collected them all here.</p>

            <div className="mt-6 md:mt-8 grid gap-6 md:grid-cols-2 ">
                {snippets.map((snippet: any) => (
                    <Link
                        key={snippet.slug}
                        href={`/snippets/${snippet.slug}`}
                        className="border border-black dark:border-gray-200 rounded-md p-5"
                    >
                        <h2 className="text-xl md:text-[1.3rem] font-bold text-black dark:text-white">{snippet.title}</h2>
                        <p className=" mt-2 italic text-sm">
                            {snippet.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default page


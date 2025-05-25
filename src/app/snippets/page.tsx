import { getAllSnippets } from '@/lib/snippets';
import Link from 'next/link';
export const metadata = {
    title: "Code Snippets",
};

const page = async () => {
    const snippets = await getAllSnippets();
    return (
        <div className='min-h-screen'>
            <h2 className="text-black dark:text-zinc-300 text-[1.8rem] md:text-[2.6rem] font-extrabold text-center">Code Snippets</h2>
            <p className='mt-1 md:mt-3 text-center'>A collection of some useful code snippets and commands which I don't like to google every time so i collected them all here.</p>
            <div className="mt-6 md:mt-8 grid gap-6 md:grid-cols-2 ">
                {snippets.map((snippet: any) => (
                    <Link
                        key={snippet.slug}
                        href={`/snippets/${snippet.slug}`}
                        className=" bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5"
                    >
                        <h2 className="text-xl md:text-[1.4rem] text-center md:text-left font-bold text-black dark:text-zinc-300">{snippet.title}</h2>
                        <p className=" mt-2 italic text-base text-center md:text-left">
                            {snippet.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default page


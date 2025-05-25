import { personalInfo } from '@/portfolio_config';
import { Coiny } from 'next/font/google';

const dancingScript = Coiny({
    subsets: ['latin'],
    weight: ['400'],
});
const Logo = () => {
    return (
        <a href="/" className="select-none flex items-center space-x-2 group">
            <h1 className={`${dancingScript.className} text-black dark:text-white text-[2.2rem] md:text-5xl font-bold transition-transform duration-300 group-hover:-rotate-1`}>
              {personalInfo.logoText}
            </h1>

        </a>
    );
};

export default Logo;

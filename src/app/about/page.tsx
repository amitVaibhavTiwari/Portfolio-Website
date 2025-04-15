
import AboutMe from '@/components/aboutMe/About';
import Education from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import SkillsSection from '@/components/skills/skills';
import Head from 'next/head';

export default function About() {

    return (
        <div className="min-h-screen pt-4">
            <Head>
                <title>About Me - Pouya Saadeghi</title>
            </Head>
            <main className='flex flex-col gap-16 md:gap-24'>
                <AboutMe />
                <SkillsSection />
                <Experience />
                <Education />

            </main>
        </div>
    );
}
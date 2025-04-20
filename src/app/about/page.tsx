
import AboutMe from '@/components/AboutMe/About';
import Certifications from '@/components/Certifications/Certifications';
import Education from '@/components/Education/Education';
import Experience from '@/components/Experience/Experience';
import SkillsSection from '@/components/Skills/skills';


export const metadata = {
    title: "About Me - Amit Vaibhav Tiwari",
};

const page = () => {
    return (
        <div className="min-h-screen pt-4">
            <main className='flex flex-col gap-16 md:gap-20'>
                <AboutMe />
                <SkillsSection />
                <Experience />
                <Education />
                <Certifications />
            </main>
        </div>
    );
}

export default page


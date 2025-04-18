
import AboutMe from '@/components/aboutMe/About';
import Certifications from '@/components/certifications/Certifications';
import Education from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import SkillsSection from '@/components/skills/skills';


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


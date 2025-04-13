import { IconBrandPython } from '@tabler/icons-react';
const SkillsSection = () => {
    const skills = [
        { id: 1, name: 'React', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 2, name: 'Node.js', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 3, name: 'Python', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 4, name: 'Java', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 5, name: 'Git', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 6, name: 'Docker', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 7, name: 'AWS', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 8, name: 'Next.js', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 9, name: 'Tailwind CSS', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 10, name: 'TypeScript', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 11, name: 'React', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 12, name: 'Node.js', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 13, name: 'Python', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 14, name: 'Java', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 15, name: 'Git', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 16, name: 'Docker', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 17, name: 'AWS', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 18, name: 'Next.js', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 19, name: 'Tailwind CSS', icon: <IconBrandPython className="w-12 h-12" /> },
        { id: 20, name: 'TypeScript', icon: <IconBrandPython className="w-12 h-12" /> },
    ];

    return (
        <section className='mb-28'>
            <div className="">
                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="flex flex-col items-center justify-center p-4 group -mb-12"
                        >
                            {/* Skill Icon */}
                            <div className="p-4 rounded-lg border-2 border-transparent group-hover:border-black transition-all duration-300 group-hover:scale-110">
                                {skill.icon}
                            </div>

                            {/* Skill Name (Hidden by default, shown on hover) */}
                            <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
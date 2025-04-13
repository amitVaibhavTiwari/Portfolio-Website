
import SkillsSection from '@/components/skills/skills';
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
    const experiences = [
        {
            id: 1,
            company: 'Tech Corp',
            role: 'Software Engineer',
            duration: 'Jan 2021 - Present',
            points: [
                'Developed and maintained web applications using React, Next.js, and Node.js.',
                'Collaborated with cross-functional teams to deliver high-quality software solutions.',
                'Optimized applications for performance and scalability.',
            ],
        },
        {
            id: 2,
            company: 'Innovate Solutions',
            role: 'Frontend Developer',
            duration: 'Jun 2019 - Dec 2020',
            points: [
                'Built responsive and user-friendly interfaces for various clients.',
                'Implemented modern UI/UX designs using Tailwind CSS and Figma.',
                'Worked on improving website performance and SEO.',
            ],
        },
        {
            id: 3,
            company: 'Startup Inc',
            role: 'Junior Developer',
            duration: 'Jan 2018 - May 2019',
            points: [
                'Assisted in the development of web applications using JavaScript and PHP.',
                'Learned and applied best practices in version control with Git.',
                'Contributed to team projects and code reviews.',
            ],
        },
    ];

    const education = [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Tech',
            duration: 'Aug 2014 - May 2018',
            achievements: [
                'Graduated with Honors (GPA: 3.8/4.0).',
                'Relevant Coursework: Data Structures, Algorithms, Web Development, and Machine Learning.',
                'Participated in coding competitions and hackathons.',
            ],
        },
        {
            id: 2,
            degree: 'High School Diploma',
            institution: 'Tech High School',
            duration: 'Aug 2010 - May 2014',
            achievements: [
                'Graduated as Valedictorian.',
                'Founded the school\'s coding club and organized workshops.',
                'Won first place in the state-level science fair.',
            ],
        },
    ];


    return (
        <div className="min-h-screen">
            <Head>
                <title>About Me - Pouya Saadeghi</title>
            </Head>
            <main className="mx-auto py-12">
                {/* Bio Section */}
                <section className="mb-24 flex flex-col md:flex-row gap-8">
                    {/* Photo */}
                    <div className="md:w-1/3">
                        <div className="bg-black h-64 md:h-96 w-full rounded-lg flex items-center justify-center text-white">
                            <Image src={"/img.jpg"} alt="Pouya Saadeghi" width={300} height={300} />
                        </div>
                    </div>
                    {/* Bio Text */}
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-semibold mb-6">My Story</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            I'm Pouya Saadeghi, a front-end developer and UI designer based in Istanbul since 2016.
                            My journey in tech began with a fascination for creating beautiful, functional interfaces
                            that solve real-world problems. Over the years, I've honed my skills in both design and
                            development, blending creativity with technical expertise.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            I'm the creator of daisyUI, a popular Tailwind CSS component library that's been embraced
                            by over 350,000 projects worldwide. My passion for open-source drives me to build tools
                            that empower other developers while pushing the boundaries of what's possible on the web.
                        </p>
                        <p className="text-lg leading-relaxed">
                            When I'm not coding or designing, you can find me exploring Istanbul's vibrant culture,
                            sketching new UI concepts, or contributing to the tech community. I believe in lifelong
                            learning and am always excited to take on new challenges.
                        </p>
                    </div>
                </section>


                {/* skills */}

                <SkillsSection />

                {/* exp */}
                <section className='mx-auto w-[1000px] mb-24 '>
                    <h2 className="text-3xl font-bold text-center mb-8">What I've Been Doing</h2>
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="flex gap-1 lg:gap-20 flex-col lg:flex-row">
                                {/* Left Side: Duration */}
                                <div className="md:w-1/4 md:pr-8 mb-4 md:mb-0">
                                    <p className="text-sm text-gray-600">{exp.duration}</p>
                                </div>

                                {/* Right Side: Company, Role, and Points */}
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                                    <p className="text-gray-600 font-medium">{exp.company}</p>
                                    <ul className="list-disc list-inside mt-2 space-y-2">
                                        {exp.points.map((point, index) => (
                                            <li key={index} className="text-gray-700">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* edu */}
                <section className="w-[1000px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                    <div className="space-y-8">
                        {education.map((edu) => (
                            <div key={edu.id} className="flex gap-1 lg:gap-20 flex-col lg:flex-row">
                                {/* Left Side: Duration */}
                                <div className="md:w-1/4 md:pr-8 mb-4 md:mb-0">
                                    <p className="text-sm text-gray-600">{edu.duration}</p>
                                </div>

                                {/* Right Side: Degree, Institution, and Achievements */}
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                    <p className="text-gray-600 font-medium">{edu.institution}</p>
                                    <ul className="list-disc list-inside mt-2 space-y-2">
                                        {edu.achievements.map((achievement, index) => (
                                            <li key={index} className="text-gray-700">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
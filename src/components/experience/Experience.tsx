import React from 'react'

const Experience = () => {
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

    return (
        <section className='mx-auto'>
            <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center mb-8">What I've Been Doing</h2>
            <div className="space-y-8 md:space-y-10 lg:space-y-14">
                {experiences.map((exp) => (
                    <div key={exp.id} className="flex gap-2 lg:gap-20 flex-col lg:flex-row">
                        {/* Left Side: Duration */}
                        <div className="lg:w-1/4 lg:pr-8 mb-1 md:mb-0">
                            <p className="text-md italic font-light lg:text-black lg:dark:text-white">{exp.duration}</p>
                        </div>

                        {/* Right Side: Company, Role, and Points */}
                        <div className="-mt-2 lg:w-3/4">
                            <h3 className="text-black dark:text-white text-xl font-bold">{exp.role}</h3>
                            <p className="text-base font-semibold italic dark:text-white">{exp.company}</p>
                            <ul className="list-disc mt-2 space-y-2 text-base">
                                <div className='pl-6 md:pl-0'>
                                    {exp.points.map((point, index) => (
                                        <li key={index} className="">
                                            {point}
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience

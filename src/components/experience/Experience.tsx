const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Brimo Software Solutions',
            role: 'Full Stack Developer',
            duration: 'June 2024 - Present',
            points: [
                'Worked with the tech stack of React, Next.js, Node.js, GraphQl, and PostgreSQL.',
                'Actively contributed to the initial development of a shopify plugin used to retain customers via loyalty rewards.',
                "Developed an admin dashboard in react and MUI to help clients customize their plugnin according to their buisness needs.",
                "Worked extensively with both RESTful and GraphQL APIs for both frontend and backend part.",
            ],
        },

    ];

    return (
        <section className='mx-auto'>
            <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center mb-6">What I've Been Doing</h2>
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

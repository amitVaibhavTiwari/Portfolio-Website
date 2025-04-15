import React from 'react'

const Education = () => {
    const education = [
        {
            id: 1,
            // college: 'DSMNRU Lucknow',
            college: 'Dr. Shakuntala Misra National Rehabilitation University',
            degree: 'B.Tech in Computer Science',
            duration: '2022-2026',
            points: [
                "I was an active member of the college's technology and programming club, TechTranzit, and participated in several events and programming contests.",

            ],
        },
        {
            id: 2,
            college: 'Pioneer Montessori Inter College',
            degree: 'Intermediate',
            duration: '2020-2022',
            points: [
                'I completed my schooling at Pioneer Montessori Inter College in Lucknow, with core subjects including Mathematics, Physics, and Computer Science.',

            ],
        },

    ];

    return (
        <section className='mx-auto'>
            <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center mb-8">What I've Studied</h2>
            <div className="space-y-8 md:space-y-10 lg:space-y-14">
                {education.map((edu) => (
                    <div key={edu.id} className="flex gap-2 lg:gap-20 flex-col lg:flex-row">
                        {/* Left Side: Duration */}
                        <div className="lg:w-1/4 lg:pr-8 mb-1 md:mb-0">
                            <p className="text-md italic font-light lg:text-black lg:dark:text-white">{edu.duration}</p>
                        </div>

                        {/* Right Side: college, degree, and Points */}
                        <div className="-mt-2 lg:w-3/4">
                            <h3 className="text-black dark:text-white text-xl font-bold">{edu.degree}</h3>
                            <p className="text-base font-semibold italic dark:text-white">{edu.college}</p>
                            <ul className="list-disc mt-2 space-y-2 text-base">
                                <div className='pl-6 md:pl-0'>
                                    {edu.points.map((point: string, index) => (
                                        <li key={index}>
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

export default Education

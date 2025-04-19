const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Brimo Software Solutions',
            role: 'Full Stack Developer',
            duration: 'June 2024 - Present',
            points: [
                'Worked with tech stack including React, Next.js, Node.js, GraphQL, and PostgreSQL.',
                'Maintained and enhanced the frontend of enterprise-grade e-commerce web application using Next.js and GraphQL APIs. Resolved critical bugs, improved load times, and optimized the user experience across the platform.',
                "Actively contributed to the initial development of Retainley, an advanced Shopify plug-and-play solution designed to improve customer retention through loyalty rewards and engagement programs. The platform is trusted by major D2C brands such as Zouk, Perfora Care, and Soulfower.",
                "Developed a fully functional admin dashboard using React and Material UI, enabling clients to customize product behavior according to their buisness needs and access various metrics related to orders, revenue, and customer engagement.",
                "Developed key features on both the frontend and backend parts of Retainley. Created RESTful APIs using Node.js and PostgreSQL for functionalities such as referral system, gamified user interactions (spin wheels, scratch cards), cashback programs, coupon rewards, and birthday, anniversary based offers.",
                "Created webhooks for various events on shopify related to customers and orders to work in real time with real time customer data."
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

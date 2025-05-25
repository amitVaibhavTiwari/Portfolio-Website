import { experiences } from "@/portfolio_config";

const Experience = () => {
    // for unemployed people
    if (experiences.length === 0) {
        return null
    }
    return (
        <section className='mx-auto'>
            <h2 className="text-black dark:text-zinc-300 text-[1.7rem] md:text-[2.5rem] font-bold text-center mb-6 md:mb-8">What I've Been Doing</h2>
            <div className="space-y-8 md:space-y-10 lg:space-y-14">
                {experiences.map((exp) => (
                    <div key={exp.id} className="flex gap-2 lg:gap-20 flex-col lg:flex-row">
                        {/* Left Side: Duration */}
                        <div className="lg:w-1/4 lg:pr-8 mb-1 md:mb-0">
                            <p className="text-md italic font-light lg:text-gray-700 lg:dark:text-zinc-300">{exp.duration}</p>
                        </div>

                        {/* Right Side: Company, Role, and Points */}
                        <div className="-mt-2 lg:w-3/4">
                            <h3 className="text-black dark:text-zinc-300 text-xl font-bold">{exp.role}</h3>
                            <p className="font-semibold italic dark:text-zinc-300">{exp.company}</p>
                            <ul className="list-disc mt-2 space-y-2">
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

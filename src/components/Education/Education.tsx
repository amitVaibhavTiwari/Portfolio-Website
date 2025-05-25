import { education } from "@/portfolio_config";
const Education = () => {
    return (
        <section className='mx-auto'>
            <h2 className="text-black dark:text-zinc-300 text-[1.7rem] md:text-[2.5rem] font-bold text-center mb-6 md:mb-8">What I've Studied</h2>
            <div className="space-y-8 md:space-y-10 lg:space-y-14">
                {education.map((edu) => (
                    <div key={edu.id} className="flex gap-2 lg:gap-20 flex-col lg:flex-row">
                        {/* Left Side: Duration */}
                        <div className="lg:w-1/4 lg:pr-8 mb-1 md:mb-0">
                            <p className="text-md italic font-light lg:text-black lg:dark:text-zinc-300">{edu.duration}</p>
                        </div>

                        {/* Right Side: college, degree, and Points */}
                        <div className="-mt-2 lg:w-3/4">
                            <h3 className="text-black dark:text-zinc-300 text-xl font-bold">{edu.degree}</h3>
                            <p className="font-semibold italic dark:text-zinc-300">{edu.college}</p>
                            <ul className="list-disc mt-2 space-y-2">
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

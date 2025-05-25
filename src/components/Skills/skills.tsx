import { skills } from "@/portfolio_config";
export default function SkillsSection() {
    return (
        <section className="text-center">
            <h2 className="text-black dark:text-zinc-300 text-[1.66rem] md:text-[2.5rem] font-bold  mb-6">What I'm skilled with</h2>
            <div className="flex flex-col gap-4">
                {skills.map((skill) => {
                    return (<div key={skill.key} className="flex flex-col gap-1  bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl py-5 px-2">
                        <h1 className="text-lg font-semibold text-black dark:text-zinc-300 mr-2 md:text-xl">{skill.key}</h1>
                        <p className="italic">{skill.value} </p>
                    </div>

                    );
                })}
            </div>
        </section>
    );
}
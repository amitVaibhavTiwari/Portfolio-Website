const skillsArr = [
    {
        key: "Frontend", value: "React, Next.js, Redux Toolkit, Tailwind CSS, SCSS, Material UI, Bootstrap, Figma, HTML5, CSS3"

    }, {
        key: "Backend", value: "Node.js, Express.js, GraphQL, REST APIs"
    },
    {
        key: "Database", value: "PostgreSQL, MongoDB, MySQL, SQLite",
    }
    , {
        key: "Languages", value: "Javascript, TypeScript, Python, SQL, Java"
    }
    , {
        key: "Tools and Technologies", value: "Git, GitHub, Docker, Postman, Jira, Firebase"
    }
]

export default function SkillsSection() {
    return (
        <section className="text-center">
            <h2 className="text-black dark:text-white text-[1.66rem] md:text-3xl font-bold  mb-6">What I'm skilled with</h2>

            {/* <div className="flex flex-wrap items-baseline"> */}
            <div className="flex flex-col gap-4">
                {skillsArr.map((skill) => {
                    return (<div key={skill.key} className="flex flex-col gap-1">
                        <h1 className="text-lg font-semibold text-black dark:text-white mr-2 md:text-xl">{skill.key}</h1>
                        <p className="italic">{skill.value} </p>
                    </div>

                    );
                })}
            </div>


            {/* </div> */}
        </section>
    );
}
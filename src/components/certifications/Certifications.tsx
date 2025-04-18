const Certificates = [
    {
        id: 1,
        title: "Problem Solving - HackerRank",
        date: "April 2025",
        link: "https://www.hackerrank.com/certificates/b4f59117a44d",
    },

]
const Certifications = () => {
    return (
        <div>
            <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center mb-6">Certifications I've got</h2>
            <ul className="list-disc space-y-2 text-base pl-6 md:pl-0">
                {Certificates.map((cert) => (
                    <li key={cert.id}>
                        <div className="flex flex-col md:flex-row justify-between ">
                            <a className="hover:underline font-semibold text-black dark:text-white " href={cert.link} >{cert.title}</a>
                            <p className="italic">Issued on: {cert.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Certifications

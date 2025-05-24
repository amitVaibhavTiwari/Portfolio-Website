import { certificates } from "@/portfolio_config"
const Certifications = () => {
    // if someone don't have any certifications
    if (certificates.length === 0) {
        return null;
    }
    return (
        <div>
            <h2 className="text-black dark:text-white text-[1.7rem] md:text-[2.5rem] font-bold text-center mb-6 md:mb-8">Certifications I've got</h2>
            <ul className="list-disc space-y-2 text-base pl-6 md:pl-0">
                {certificates.map((cert) => (
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

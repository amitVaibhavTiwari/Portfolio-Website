import { personalInfo } from "@/portfolio_config"

const AboutMe = () => {
    return (
        <section className="flex flex-col md:flex-row gap-8">
            {/* <div className="md:w-1/3">
                <div className="bg-black h-96 ">
                    <Image src='/amit_img_sq.png' alt="Amit" width={300} height={300} />
                </div>
            </div> */}
            {/* add md:w-2/3  class to below div when uncommenting above */}
            <div className=" text-base text-center">
                <h2 className="text-black dark:text-white text-[1.8rem] md:text-[2.6rem] md:mb-8 font-extrabold text-center mb-4">A Little bit about me</h2>
                <div className="flex flex-col gap-4">
                    {
                        personalInfo.detailedBio.map((bio) => {
                            return <p className="leading-relaxed" key={bio}>{bio}</p>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutMe

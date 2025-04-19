const AboutMe = () => {
    return (
        <section className="flex flex-col md:flex-row gap-8">
            {/* <div className="md:w-1/3">
                <div className="bg-black h-96 ">
                    <Image src='/amit_img_sq.png' alt="Pouya Saadeghi" width={300} height={300} />
                </div>
            </div> */}
            {/* add md:w-2/3  class to below div when uncommenting above */}
            <div className=" text-base text-center">
                <h2 className="text-black dark:text-white text-[1.7rem] md:text-3xl font-bold text-center mb-4">A Little bit about me</h2>
                <p className="leading-relaxed mb-4">
                    I'm Amit, a Full Stack Engineer who build things for the web. I have hands-on experience with
                    technologies like React, Next.js, Node.js, Express.js, PostgreSQL, GraphQL,  Docker,  and many more.
                </p>
                <p className="leading-relaxed mb-4">
                    I've built and maintained large scale applications and have worked with a wide range of technologies across the stack. I'm also a big fan of automating everyting around me and love to explore new technologies.
                </p>
                <p className="leading-relaxed">
                    When I'm not writing code or hunting down bugs, you'll probably find me playing basketball, scrolling memes, or catching up on anime.
                </p>
            </div>
        </section>
    )
}

export default AboutMe

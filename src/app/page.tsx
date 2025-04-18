'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <motion.div
      className='text-center'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image width={300} height={300} alt="Amit" className='rounded-full block mx-auto' src='/amit_img_sq.png' />
      </motion.div>

      <motion.h2
        className='font-extrabold mt-6 text-3xl md:text-[2.35rem] text-black dark:text-white'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Amit Vaibhav Tiwari
      </motion.h2>

      <motion.p
        className='mt-1 md:mt-4 text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        A Developer from the city of Nawabs, writing code mainly in Javascript (I mean Typescript) and Python. I've experience building and maintaining large scale projects form scratch contributing across the stack—frontend, backend, and deployment. Worked with technologies like React, Nextjs, Node.js, Express.js, PostgreSQL, GraphQL ,Docker and many more.
      </motion.p>

      <motion.h1
        className='mt-8 md:mt-10 font-bold text-xl md:text-[1.56rem] text-center text-zinc-900 dark:text-white'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        You can find me on other platforms too!
      </motion.h1>

      <motion.p
        className='text-base mt-3 md:mt-1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Feel free to reach out for collaborations or just a friendly hello.
      </motion.p>

      <motion.ul
        className='list-disc list-inside mt-4 text-left text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className='flex flex-col gap-1 mx-auto w-fit'>
          <li><a className='hover:underline' target='_blank' href={"https://in.linkedin.com/in/amit-vaibhav-tiwari-23967b306"}>Linkedin</a></li>
          <li><a target='_blank' className='hover:underline' href={"https://x.com/dev_avt"}>X</a></li>
          <li><a className='hover:underline' href={"mailto:amitvaibhavtiwari@gmail.com"}>Mail</a></li>
          <li><a className='hover:underline' target="_blank" href={"https://github.com/amitVaibhavTiwari"}>GitHub</a></li>
          <li><a className='hover:underline' target="_blank" href={"https://www.instagram.com/awesome_avt"}>Instagram</a> (I rarely open)</li>
        </div>
      </motion.ul>
    </motion.div>
  )
}

export default page

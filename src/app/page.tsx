'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { personalInfo } from '@/portfolio_config'

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
        <Image width={330} height={330} alt={personalInfo.name} className='rounded-full block mx-auto  shadow-black shadow-sm border-[1px] dark:border-none' src={personalInfo.imageUrl} />
      </motion.div>

      <motion.h2
        className='font-bold md:font-extrabold mt-6  text-[1.8rem] md:text-[2.8rem] text-black dark:text-white'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {personalInfo.name}
      </motion.h2>

      <motion.p
        className='mt-1 md:mt-2 text-base mb-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {personalInfo.shortBio}
      </motion.p>


      <Link className='font-semibold underline dark:text-white' href='/about'>Find more about me</Link>

      <motion.h1
        className='mt-8 md:mt-10 font-extrabold text-xl md:text-[1.56rem] text-center text-black dark:text-white'
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
        <div className='flex flex-col gap-2 mx-auto w-fit font-normal'>
          {
            personalInfo.socials.map((social) => {
              return <li key={social.id}><a className='hover:underline' target='_blank' href={social.link}>{social.name}</a></li>
            })
          }
        </div>
      </motion.ul>
    </motion.div>
  )
}

export default page

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-center'>
      <Image width={300} height={300} alt="Amit" className='rounded-full block mx-auto' src='/amit_img_sq.png'></Image>
      <h2 className='font-extrabold mt-6 text-3xl md:text-[2.35rem] text-black dark:text-white'>Amit Vaibhav Tiwari</h2>
      <p className='mt-1 md:mt-4 text-base'>A Developer from the city of Nawabs, writing code mainly in Javascript (I mean Typescript) and Python. I've experince building and maintaining large scale projects form scratch contributing across the stack—frontend, backend, and deployment. Worked with technologies like React, Nextjs, Node.js, Express.js, PostgreSQL, GraphQL ,Docker and many more.
      </p>
      <h1 className='mt-8 md:mt-10 font-bold text-xl md:text-[1.56rem] text-center text-zinc-900 dark:text-white'>You can find me on other platforms too!</h1>
      <p className='text-base mt-3 md:mt-1'>Feel free to reach out for collaborations or just a friendly hello.</p>
      <ul className='list-disc list-inside mt-4 text-left text-base'>
        <div className='flex flex-col gap-1 mx-auto w-fit'>
          <li><Link className='hover:underline' href={"/"}>Linkedin</Link></li>
          <li><Link className='hover:underline' href={"/"}>X</Link></li>
          <li><Link className='hover:underline' href={"/"}>Mail</Link></li>
          <li><Link className='hover:underline' href={"/"}>GitHub</Link></li>
          <li ><Link className='hover:underline' href={"/"}>Instagram</Link> (I rarely open)</li>
        </div>
      </ul>
    </div>
  )
}

export default page

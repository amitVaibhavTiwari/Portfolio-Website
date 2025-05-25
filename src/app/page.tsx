import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/portfolio_config'

const page = () => {
  return (
    <div
      className='text-center'
    >
      <Image width={300} height={300} alt={personalInfo.name} className='rounded-full block mx-auto  shadow-black shadow-sm border-[1px] dark:border-none' src={personalInfo.imageUrl} />
      <h2
        className='font-bold md:font-extrabold mt-6  text-[1.8rem] md:text-[2.8rem] text-black dark:text-zinc-300'
      >
        {personalInfo.name}
      </h2>

      <p
        className='mt-1 md:mt-5 mb-5'
      >
        {personalInfo.shortBio}
      </p>


      <Link className='font-semibold underline dark:text-zinc-300' href='/about'>Find more about me</Link>

      <h1
        className='mt-8 md:mt-10 font-extrabold text-xl md:text-[1.56rem] text-center text-black dark:text-zinc-300'
      >
        You can find me on other platforms too!
      </h1>

      <p
        className='mt-3 md:mt-1'
      >
        Feel free to reach out for collaborations or just a friendly hello.
      </p>

      <ul
        className='list-disc list-inside mt-4 text-left underline'
      >
        <div className='flex flex-col gap-2 mx-auto w-fit font-normal'>
          {
            personalInfo.socials.map((social) => {
              return <li key={social.id}><a className='hover:underline' target='_blank' href={social.link}>{social.name}</a></li>
            })
          }
        </div>
      </ul>
    </div>
  )
}

export default page

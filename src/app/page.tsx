import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-center'>
      <Image width={300} height={300} alt="Amit" className='rounded-full block mx-auto' src='/amit_img_sq.png'></Image>
      <h2 className='font-extrabold mt-6 text-3xl md:text-[2.35rem] text-black dark:text-white'>Amit Vaibhav Tiwari</h2>
      <p className='mt-1 md:mt-4 text-base'>lom ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, architecto beatae consequatur aut laborum fuga autem illo similique corporis ipsum.
        <br /> Atque, magni. Odio necessitatibus tempora optio expedita quas nobis ea rerum sint quibusdam earum. Atque, magni. Odio necessitatibus tempora optio expedita quas nobis ea rerum sint quibusdam earum.
      </p>
      <h1 className='mt-8 md:mt-10 font-bold text-xl md:text-[1.56rem] text-center text-zinc-900 dark:text-white'>You can find me on other platforms too!</h1>
      <p className='text-base mt-3 md:mt-1'>Feel free to reach out for collaborations or just a friendly hello.</p>
      <ul className='list-disc list-inside mt-4 text-left text-base'>
        <div className='flex flex-col gap-1 mx-auto w-fit'>
          <li><Link className='hover:underline' href={"/"}>Linkedin</Link></li>
          <li><Link className='hover:underline' href={"/"}>GitHub</Link></li>
          <li ><Link className='hover:underline' href={"/"}>Instagram</Link> (I rarely open)</li>
          <li><Link className='hover:underline' href={"/"}>Mail</Link></li>
          <li><Link className='hover:underline' href={"/"}>Medium</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default page

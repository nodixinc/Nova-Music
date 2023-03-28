import Link from 'next/link'
import React from 'react'
import play from '../icons/icons8-customer-30.png'
import Image from 'next/image'
import home from '../icons/home-page.png'
import cat from '../icons/circle.png'
import album from '../icons/album.png'


export default function menu(){
    
  return (
    <section className='fixed h-full w-1/4 bg-white-900 shadow-xl'>
        <div className='center py-40 px-10'>
        <Link href='/home'>
            <section className='flex items-start cursor-pointer  hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov rounded-full pt-3 px-4'>
           
            <Image height={34} width={34} src={home} alt='play'>
            
            </Image>
            <h2 className='mb-4 text-xl font-medium text-black px-6'>
                Home
            </h2>
            
            </section>
            </Link>
            <section className='flex items-start   bg-hov hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov rounded-full pt-3 px-4'>
             
            <Image height={34} width={34} src={cat} alt='play'>
            
            </Image>
            <h2 className='mb-4 text-xl font-medium text-black px-6'>
                Category
            </h2>
            
            </section>
            <Link href='/artist'>
            <section className='flex items-start cursor-pointer hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov rounded-full pt-3 px-4'>
              
            <Image  src={play} alt='play'>
            
            </Image>
            <h2 className='mb-4 text-xl font-medium text-black px-7'>
                Artist
            </h2>
           
            </section>
            </Link>
            <Link href='/album'>
            <section className='flex items-start cursor-pointer hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov rounded-full pt-3 px-4'>
               
            <Image height={34} width={34} src={album} alt='play'>
            
            </Image>
            <h2 className='mb-4 text-xl font-medium text-black px-6'>
                Album
            </h2>
            
            </section>
            </Link>
            <ul className='flex flex-col text-sm text-white'>
                {/* {users?.map(user=>{
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                })} */}
            </ul>
        </div>
    </section>
  )
}

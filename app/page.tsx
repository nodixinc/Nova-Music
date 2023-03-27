import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import nova from '../public/nova.jpg'
import hd from '../public/hd.png'
import Link from 'next/link'
import apple from '../public/apple.png'
import playstore from '../public/playstore.png'


export const metadata={
  title:'Welcome | Nova Music'
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <main className={styles.fu}>
    <section className='lg:grid grid-cols-2 gap-10 md:flex'><span>
      <Image className={styles.img} src={nova} alt='nova'/>
      
      <h6 className={styles.hi}>Everyday <br/>Things are </h6>
      <h6 className={styles.ho}>Colorful</h6>
      <h6 className={styles.po}>Once you realize you should enjoy the small things, life changes to being boring to extremely colorful.</h6>
      
      <Image className={styles.im} src={hd} alt='yo'/>
      <section className='grid grid-cols-2 gap-6'>
      <button className={styles.btn} >
      <Link className={styles.btns} href='#'>Join the hub</Link>
      </button> 
      <section className='grid grid-cols-2 gap-0 py-1 '>
        <div className='w-11 h-11 shrink-0 grow-0 rounded-full border-2 border-black py-2 items-center flex justify-center'>
      <Image height={24} width={24} src={playstore} alt='playstore'/>
      </div>
      <div className='w-11 h-11 shrink-0 grow-0 rounded-full border-2 border-black py-2 items-center flex justify-center'>
      <Image height={24} width={24}  src={apple} alt='apple'/>
      </div>
      </section>

      </section>
      
      </span>
      <Image height={440} width={440} className='full object-cover items-end hidden lg:block' src={hd} alt='yo'/>
      </section>
     
    </main>
    </>
  )
}

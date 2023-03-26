import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import nova from '../public/nova.jpg'
import hd from '../public/hd.png'
import Link from 'next/link'


export const metadata={
  title:'nova music'
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <main className={styles.fu}>
       
      <Image className={styles.img} src={nova} alt='nova'/>
      <section className='lg:grid grid-cols-2 gap-10 md:flex'><span>
      <h6 className={styles.hi}>Everyday <br/>Things are </h6>
      {/* <h6 className={styles.hu}>Everyday <br/>Things are </h6> */}
      <h6 className={styles.ho}>Colorful</h6>
      <h6 className={styles.po}>Once you realize you should enjoy the small things, life changes to<br className='md:visible'></br> being boring to extremely colorful.</h6>
      
      <Image className={styles.im} src={hd} alt='yo'/>
      <button className={styles.btn} >
      <Link className={styles.btns} href='#'>Join the hub</Link>
      </button> 
      
      </span>
      <Image className='full object-cover w-96 flex justify-left items-left hidden lg:block' src={hd} alt='yo'/>
      </section>
     
    </main>
    </>
  )
}

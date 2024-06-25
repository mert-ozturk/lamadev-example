import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
 

const Blog = () => {
  return (
    <div className={styles.container}>
       <Link href="/blog/testId" className={styles.container}>
       <div>
          <Image 
          src="https://images.pexels.com/photos/25751435/pexels-photo-25751435/free-photo-of-kent-sehir-restoran-insanlar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={400}
          height={250}
          className={styles.image}
          />
       </div>
       <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
       </div>
       </Link>
    </div>
  )
}

export default Blog

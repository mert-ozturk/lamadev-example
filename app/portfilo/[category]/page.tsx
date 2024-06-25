import React from 'react'
import styles from '../[category]/page.module.css'
import Image from 'next/image'
import {items} from './data'
import Button from '@/components/Button/Button'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle} > {params.category} </h1>
      <div className={styles.item}>
        <div className={styles.content}> 
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
       
        <Button text="See More" url="#" />
        </div>
      
      <div className={styles.imgContainer}>
        <Image 
        className={styles.imgContainer}
        src="https://images.pexels.com/photos/25751435/pexels-photo-25751435/free-photo-of-kent-sehir-restoran-insanlar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        fill
        alt=''
        />
      </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}> 
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
       
        <Button text="See More" url="#" />
        </div>
      
      <div className={styles.imgContainer}>
        <Image 
        className={styles.imgContainer}
        src="https://images.pexels.com/photos/25751435/pexels-photo-25751435/free-photo-of-kent-sehir-restoran-insanlar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        fill
        alt=''
        />
      </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}> 
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
       
        <Button text="See More" url="#" />
        </div>
      
      <div className={styles.imgContainer}>
        <Image 
        className={styles.imgContainer}
        src="https://images.pexels.com/photos/25751435/pexels-photo-25751435/free-photo-of-kent-sehir-restoran-insanlar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        fill
        alt=''
        />
      </div>
      </div>
    </div>

  )
}

export default Category

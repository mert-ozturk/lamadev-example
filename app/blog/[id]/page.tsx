import React from 'react'
import styles from '../[id]/page.module.css'
import Image from 'next/image'


const SingleBlog = () => {
  return (
    <div className={styles.container}>
     <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit  amet consectetur
        </h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus tincidunt turpis at accumsan. Fusce posuere, quam eu auctor malesuada, leo orci congue ligula, non elementum tellus mauris ac nisl. Nullam quis nunc tempor, porttitor enim eu, molestie dolor. Integer vitae sem eu nibh tempus eleifend. Nam pharetra, dui quis elementum accumsan, eros lorem tincidunt odio, ac efficitur ligula quam ac tellus. Vivamus pretium risus ut felis commodo, id lobortis massa imperdiet. Sed iaculis laoreet eros in viverra. Duis in euismod massa. Sed in elementum massa. Cras sollicitudin, velit sed mattis bibendum, purus nisl volutpat tortor, aliquet vehicula ipsum eros sed lectus. Morbi faucibus non nisi in varius. Maecenas tincidunt tortor in finibus scelerisque. Sed imperdiet libero leo, ac dignissim justo ullamcorper et. Duis fringilla bibendum nunc quis tempor.
        </p>
        <div className={styles.author}>
        <Image 
          src="https://images.pexels.com/photos/25751435/pexels-photo-25751435/free-photo-of-kent-sehir-restoran-insanlar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={40}
          height={40}
          className={styles.avatar}
        />
        <span className={styles.username}>John Doe</span>
        </div>
      </div>
     </div>
    </div>
  )
}

export default SingleBlog

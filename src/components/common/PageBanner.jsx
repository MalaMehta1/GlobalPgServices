import React from 'react'

const PageBanner = ({title}) => {
  

  return (
    <section className='page-banner' data-reveal="fade-up">
        <div className='img-wrap'>
        <img src="../images/banner/banner3.jpeg" alt="" />
        </div>
       <h2 className='banner-title'>
        {title}
       </h2>
    </section>
  )
}

export default PageBanner
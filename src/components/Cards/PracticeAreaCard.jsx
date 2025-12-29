import React from 'react'

const PracticeAreaCard = ({ titleTxt, imgSrc,subTitleTxt,rent }) => {
  return (
    <div className='card practiceArea-card' data-reveal-item="fade-up">
      <div className='card-thumbnail'>
        <a href="/practicearea">
          <img src={imgSrc} className='card-img' alt="" />
        </a>
      </div>
      <div className='card-footer'>
        <h2 className='card-title'> <a href="/practicearea" className='card-title-link'>{titleTxt}</a></h2>
        <h2 className='card-title'> <a href="/practicearea" className='card-title-link'>{subTitleTxt}</a></h2>
        <h2 className='card-title'> <a href="/practicearea" className='card-title-link'>{rent}</a></h2>
      </div>
    </div>
  )
}

export default PracticeAreaCard
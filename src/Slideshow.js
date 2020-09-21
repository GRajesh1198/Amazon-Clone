import { Carousel } from 'react-bootstrap'
import React from 'react'
const slideImages=[
    'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/Diwali-Wave1/teaser/Header/PC-Topbanner_eng_02._CB452696737_.jpg',
    'https://www.katiedidwhat.com/wp-content/uploads/2018/07/benefits-of-an-amazon-prime-membership.png'

]

function Slideshow(){
    return(
     <div className='slideshow'>
        <Carousel>
        <Carousel.Item>
            <img className="slideshow__image" src={slideImages[0]} alt="FirstSlide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="slideshow__image" src={slideImages[1]} alt="ThirdSlide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="slideshow__image" src={slideImages[2]} alt="SecondSlide"/>
        </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default Slideshow
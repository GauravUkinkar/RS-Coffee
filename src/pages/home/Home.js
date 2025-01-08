import React from 'react'
import Hero from '../../componant/hero/Hero'
import Home_about from '../../componant/home-about/Home_about'
import Home_third_section from '../../componant/home-thirdsection/Home_third_section'
import Home_product from '../../componant/home-product/Home_product'
import Home_gallery from '../../componant/home-gallery/Home_gallery'


const Home = () => {
  return (
    <>
   <Hero />
   <Home_about />
   <Home_third_section />
   <Home_product title="Our Product" />
   <Home_gallery />
    </>
  )
}

export default Home

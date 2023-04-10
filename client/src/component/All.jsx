import React from 'react'
import Hero from '../component/Hero'
import Analytics from '../component/Analytics'
import NewsLetter from '../component/NewsLetter'
import Cart from '../component/Cart'

export const All = () => {
  return (
    <div>
        <Hero/>
        <Analytics/>
        <NewsLetter/>
        <Cart/>
    </div>
  )
}
export default All
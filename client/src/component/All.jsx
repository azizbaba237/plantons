import React from 'react'
import Analytics from '../component/Analytics'
import NewsLetter from '../component/NewsLetter'
import Cart from '../component/Cart'
import Header from './Header'

export const All = () => {
  return (
    <div>
        <Header/>
        <Analytics/>
        <NewsLetter/>
        <Cart/>
    </div>
  )
}
export default All
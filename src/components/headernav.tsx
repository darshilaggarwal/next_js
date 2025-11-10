import React from 'react'
import Link from 'next/link'

const Headernav= () => {
  return (
    <div className='flex p-5 space-x-3.5 w-full h-20 bg-lime-600 items-center justify-between'>
        <Link className='font-extrabold text-3xl ' href="/">HOME</Link>
        <div className='space-x-3.5 text-xl'>
        <Link href="/about">about</Link>
        <Link href="/products">products</Link>
        <Link href="/services">services</Link>
        <Link href="/cart">cart</Link>
        </div>
        
        
    </div>
  )
}

export default Headernav
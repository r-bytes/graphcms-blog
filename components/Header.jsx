import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services';

// const categories = [
//   { name: 'React', slug: 'react' },
//   { name: 'Web Development', slug: 'web-dev' }
// ]



const Header = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories))
       // .then(data => console.log(data));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-400 py-8 border-gray-500">
        
        <div className="md:float-left block">          
          <Link href="/">
            <span className="transition duration-700 cursor-pointer font-bold text-4xl text-gray-400 hover:text-cyan-700 inline-block">
              Off-Comfort
            </span>
          </Link>
        </div>
        
        <div className="hidden md:float-left md:contents">
          { categories.map( (category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-gray-400 ml-4 font-semibold cursor-pointer transition duration-700 hover:text-cyan-700">
                {category.name}
              </span>
            </Link>
          )) }
        </div>
        
      </div>
    </div>
  )
}

export default Header
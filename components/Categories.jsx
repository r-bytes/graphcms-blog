import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories))
    // .then(data => console.log(data));
  }, []);
  return (
    <div className='bg-neutral-800 bg-opacity-50 shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-neutral-600 border-b pb-4 text-gray-400'>
        Categories
      </h3>
        {categories.map((category) => (
          // console.log(category)
          <Link key={category.slug} href={`/category/${category.slug}`} className="transition duration-700 hover:text-cyan-700">
            <span className="transition duration-700 cursor-pointer block pb-3 mb-3 hover:text-cyan-700 text-gray-400">
             {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories
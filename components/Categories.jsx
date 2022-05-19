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
    <div className='bg-white bg-opacity-80 shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold'>
        Categories
      </h3>
        {categories.map((category) => (
          // console.log(category)
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3">
             {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories
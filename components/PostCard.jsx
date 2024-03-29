import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';

const PostCard = ({post}) => {
  // console.log(post.createdAt);
  return (
    <div className="bg-neutral-800 bg-opacity-50 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      
      {/* image */}
      <div className="relative overflow-hidden mb-6">
        <Image
          unoptimized
          src={post.featuredImage.url}
          alt={post.title}
          height="750px"
          width="1000px"
          className="object-fit absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      {/* title */}
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-cyan-700 text-3xl font-semibold object-fit text-gray-400">
        <Link href={`/post/${post.slug}`} className="hover:bg-cyan-900 inline-block bg-cyan-900">
          {post.title}
        </Link>
      </h1>
      
      <div className="flex items-center mb-8 w-full justify-center">
        {/* pfp author */}
        <div className="hidden md:flex items-center lg:mb-0 lg:w-auto mr-6">
          <img 
            src={post.author.photo.url}
            alt={post.author.name} 
            height='30px'
            width='30px'
            className='align-middle rounded-full'
          />
          <p className='inline align-middle text-gray-400 ml-2 text-lg'>{post.author.name}</p>
        </div>
        
        {/* date */}
        <div className="font-medium text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        
      {/* text content */}
      </div>
        <p className='text-center text-gray-400 font-normal px-4 lg:px-20 mb-8'>
          {post.excerpt}
        </p>

        {/* continue reading */}
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:translate-y-1 hover:bg-cyan-700 inline-block bg-cyan-900 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
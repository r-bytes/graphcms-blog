import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ( { slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])
  

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if(!comment || !name || !email){
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem("name", name)
      window.localStorage.setItem("email", email)
    } else {
      window.localStorage.removeItem("name", name)
      window.localStorage.removeItem("email", email)
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccesMessage(true);
        setTimeout(() => {
          setShowSuccesMessage(false)
        }, 3000);
      })
  }

  return (
    <div className="bg-neutral-800 bg-opacity-50 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 border-neutral-500 text-gray-400"> Leave a reply </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-zinc-800 bg-zinc-800 text-gray-300"
          placeholder="comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-zinc-800 bg-zinc-800 text-gray-300"
          placeholder="name"
          name="name"
        />
        <input type="text" ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-zinc-800 bg-zinc-800 text-gray-300"
          placeholder="email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="container">
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
          />
          <label className="text-gray-500 cursor-pointer text-xs ml-2" htmlFor='storeData'> Save my e-mail and name for the next time I comment</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500"> All fields are required </p>}
      <div className="mt-8">
        <button 
          type='button'
          onClick={handleCommentSubmission}
          className="transition duration-500 transform hover:translate-y-1 hover:bg-cyan-700 inline-block bg-cyan-900 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
          >
          Post Comment
        </button>
        {showSuccesMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500"> Comment submitted for review </span>}
      </div>
    </div>
  )
}

export default CommentsForm
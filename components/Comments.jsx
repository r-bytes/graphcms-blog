import React, {useState, useEffect} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [])
  
  return (
    <>
      {comments.length > 0 && (
        <div className="bg-neutral-800 bg-opacity-50 shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-gray-500">
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="border-b border-gray-500 mb-4 pb-4">
              <p className="mb-4 text-gray-400">
                <span className="font-semibold"> {comment.name} </span>
                {' '}
                on
                {' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="white-space-pre-line text-gray-400 w-full"> {parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
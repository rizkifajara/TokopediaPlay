"use client"

import React, { useEffect, useState } from 'react'

type Props = {}

function CommentsScroll({videoId}: any) {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const [data, setData]:any = useState(null)
  const [isLoading, setLoading] = useState(true)

  const fetchUrl = process.env.NEXT_PUBLIC_BASE_API+'/comments/'+videoId

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Create a new comment object
    const newComment = {
      username,
      post: comment,
    };

    console.log(newComment)

    try {
      // Send a POST request to your API endpoint
      const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log('Comment submitted successfully');
      } else {
        // Handle error response (e.g., show an error message)
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }

    // Reset form fields
    setUsername('');
    setComment('');
  };
  
  return (
    <div className="w-1/4 bg-[#ffffff] overflow-y-scroll p-4 relative border-solid border-2 border-[#BFCAD8]">
      
      {/* Comment Section */}
      <div className="mb-4">
        <h2 className="text-gray-600 text-xl font-semibold mb-2">Comments</h2>
        {/* Comment List (Sample) */}
        {data && data.data.map((comment: any) => (
          <div key={comment._id} className="bg-[#01AC0F] p-2 mb-2 rounded flex-row">
            <p className="text-white text-lg font-bold mx-1">{comment.username}</p>
            <p className="text-white mx-1">{comment.post}</p>
            <p className='text-gray-300 text-sm text-right mx-1'>{comment.createdAt} </p>
          </div>
        ))}
      </div>

      

      {/* Comment Form */}
      <form className="flex-row items-end justify-end" onSubmit={handleSubmit}>
        <h2 className="text-gray-600 text-lg mb-1 mx-2">Add a Comment</h2>
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-2 rounded-3xl border mb-1 mx-1 text-gray-500" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea 
          placeholder="Write your comment..." 
          className="w-full p-2 rounded-3xl border mb-1 mx-1 text-gray-500" 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="bg-[#06A95B] text-41B649 px-4 py-2 rounded mx-1">Post Comment</button>
      </form>
      
    </div>
  )
}

export default CommentsScroll
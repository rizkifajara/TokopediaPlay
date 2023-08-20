import React from 'react'

type Props = {}

function VideoPlayer({data}: any) {
  return (
    <div className="w-1/2 flex-row items-center justify-center">

      <p className='text-5xl text-center text-black mt-5 mb-10 font-bold'>{data?.title}</p>

      <iframe src={data?.url} className="w-full h-96" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

    </div>
  )
}

export default VideoPlayer
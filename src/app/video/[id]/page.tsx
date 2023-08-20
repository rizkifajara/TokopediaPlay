import CommentsScroll from '@/components/CommentsScroll';
import Navbar from '@/components/Navbar';
import ProductsScroll from '@/components/ProductsScroll';
import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image'

export default async function Video({ params }: any) {
  const video = await getVideo(params.id)
  const products = await getProducts(params.id)
  const comments = await getComments(params.id)
  return (
    <>
    <div className="flex  h-screen bg-white font-sans">
      

      <ProductsScroll data={products.data}/>

      <VideoPlayer data={video.data}/>
      
      <CommentsScroll data={comments.data} videoId={params.id}/>
      
    </div>
    </>
  );
}

async function getVideo(slug: any) {
  
  const res = await fetch(process.env.BASE_API+'/video/'+slug, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getProducts(slug: any) {
  const res = await fetch(process.env.BASE_API+'/products/'+slug, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

async function getComments(slug: any) {
  const res = await fetch(process.env.BASE_API+'/comments/'+slug, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

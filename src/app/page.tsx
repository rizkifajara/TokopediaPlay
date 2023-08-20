import CommentsScroll from '@/components/CommentsScroll';
import Navbar from '@/components/Navbar';
import ProductsScroll from '@/components/ProductsScroll';
import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image'

export default async function Home() {
  // const items = [
  //   { id: 1, imageSrc: 'http://i3.ytimg.com/vi/HjNVymiHLNo/hqdefault.jpg', link: '/item1' },
  //   { id: 2, imageSrc: 'http://i3.ytimg.com/vi/Uk2vMFIl26o/hqdefault.jpg', link: '/item2' },
  //   { id: 3, imageSrc: 'http://i3.ytimg.com/vi/Jz2jprGz4Ag/hqdefault.jpg', link: '/item3' },
  //   // Add more items as needed
  // ];
  const data = await getData()
  console.log(data.data[0].thumbnailUrl)
  const items = data.data
  return (
    <div className="bg-white p-4 font-sans">
      <p className='text-5xl text-center text-black mt-5 mb-10 font-bold'>Explore</p>
      <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items && items.map((item: any) => (
          <a key={item._id} href={'/video/'+item._id} className="block bg-[#41B649] text-white p-4 rounded-xl shadow">
            <img src={item.thumbnailUrl} alt={`Item ${item._id}`} className="max-w-full h-auto rounded-lg my-1" />
            <p className='text-white text-center text-lg my-1 font-semibold'>{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );

  async function getData() {
    const res = await fetch(process.env.BASE_API+'/home', { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
}

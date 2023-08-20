import Link from 'next/link'
import React from 'react'

type Props = {}

function ProductsScroll({data}: any) {
  return (
    <>
    
    <div className="w-1/4 bg-[#ffffff] p-4 overflow-y-scroll border-solid border-2 border-[#BFCAD8]">
      {/* Clickable Images (Sample) */}
      <div className="mb-4">
        
        {data && data.map((product: any) => (
            <Link href={"/product/"+product._id}>
                <img key={product._id} src={product.url} alt={product.title} className="cursor-pointer" />
            </Link>
        ))}
      </div>
      {/* Add more content as needed */}
    </div>
    </>
  )
}

export default ProductsScroll
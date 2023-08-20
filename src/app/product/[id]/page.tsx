

export default async function Product({params}: any) {
  const product = await getProduct(params.id)

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto p-8">
        {/* Product Image */}
        <div className="mb-4">
          <img src={product?.data.url} alt="Product" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
        
        {/* Product Name */}
        <h1 className="text-3xl font-bold mb-2 text-black">{product?.data.title}</h1>
        
        {/* Product Description */}
        <p className="text-gray-600 mb-4">
          {product?.data.description}
        </p>
        
        {/* Product Price */}
        <p className="text-xl text-black font-semibold">{convertToRupiah(product?.data.price)}</p>
      </div>
    </div>
  
  );
}

function convertToRupiah(price: any) {
	
  var	number_string = price.toString(),
    sisa 	= number_string.length % 3,
    rupiah 	= number_string.substr(0, sisa),
    ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
      
  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  return "Rp"+rupiah
}

async function getProduct(slug: any) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API+'/products/get/'+slug, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

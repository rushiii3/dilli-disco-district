import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const products = [
    {
      id: "1",
      image: "/1.png",
    },
    {
      id: "2",
      image: "/2.png",
    },
    {
      id: "3",
      image: "/8.png",
    },
    {
      id: "4",
      image: "/9.png",
    },
    {
      id: "5",
      image: "/8.png",
    },
    {
      id: "6",
      image: "/8.png",
    },
    {
      id: "7",
      image: "/8.png",
    },
    {
      id: "8",
      image: "/8.png",
    },
    {
      id: "9",
      image: "/8.png",
    },
    {
      id: "10",
      image: "/8.png",
    },
  ]
  return (
    <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4 max-w-full md:gap-2 md:p-8 py-16 mx-auto bg-gray-300">
    {products.map((product) => (
      <Link key={product.id} href={`/product/${product.id}`} className="group">
        <div className="relative aspect-[1/2] w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`Product ${product.id}`}
            fill
            className="object-cover"
          />
        </div>
      </Link>
    ))}
  </div>
  )
}

export default page
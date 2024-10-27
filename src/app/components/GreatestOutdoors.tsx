import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
type Props={
    img:string;
    title:string;
    description:string;
    buttonText:string
}
const GreatestOutdoors = ({img,title,description,buttonText}:Props) => {
  return (
 <div className='relative my-14 container'>
       <div className='relative h-96 min-w-[300px]'>
      <Image src={img} alt={title} fill  className='rounded-2xl object-cover -z-10'/>
      
    </div>
    <div className='absolute top-32 left-12 '>
<h3 className='text-4xl mb-3 w-64 '>{title}</h3>
<p>{description}</p>
<div className='mt-5'>
<Link  className=' text-sm px-4 py-2 mt-5 rounded-lg hover:bg-gray-800 text-white bg-gray-900' href={"/"} >
    {buttonText}
</Link>
</div>

    </div>
 </div>
  )
}

export default GreatestOutdoors;

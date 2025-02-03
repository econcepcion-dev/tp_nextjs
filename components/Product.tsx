import Image from 'next/image'
import React from 'react'
import fs from 'fs';
import path from 'path';

const publicDirectory = path.join(process.cwd(), 'public', 'images'); // Adjust the path if your images are in a subfolder

function getImages() {
  const imageFiles = fs.readdirSync(publicDirectory);
  return imageFiles.filter(file => file.match(/.(jpg|jpeg|png|gif|svg)$/i)); // Filter for image files
}

const Product = () => {
  const imagesMulti = getImages();
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here to serve you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Products</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Tropic Roast coffee. Bringing you the freshest, most delicious coffee you can buy.</p>
        </div>
      </div>
       
      <div className="flexCenter max-container relative w-full">                                                        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {imagesMulti.map((image, index) => (
               <div key={index}>
                    <Image
                    src={`/images/${image}`} // Assuming your images are in the public/images folder
                    alt={image}
                    width={200}
                    height={150}/>
                </div>
             ))}
        </div>

      </div>
    </section>
  )
}

export default Product
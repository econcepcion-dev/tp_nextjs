import Image from 'next/image'

const Contact = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here to listen to you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Contacts</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Phone: 806.224.5527 |  Email: TropicRoast@gmail.com  </p>
          
        </div>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        </div>
      </div>
       
                                                            
    </section>
  )
}

export default Contact
import { useState } from 'react';

function Body() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <div 
          className="max-w-[1920px] mt-8 w-full h-[442px] bg-cover bg-center flex justify-center items-center" 
          style={{ backgroundImage: 'url(https://us.vaio.com/cdn/shop/files/trans-person-working-office-with-colleagues_1.png?v=1718627347&width=1500)' }}
        >
          <div className="w-[85%] h-[61%] text-white">
            <h1 className='text-5xl font-bold'>Vaio Business Alliance</h1>
            <h2 className='text-4xl font-medium'>We Help Businesses Thrive</h2>
            <div className="mt-8 border w-52 h-14 flex items-center justify-center rounded-lg">
              <button className='text-white'>Become a partner</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-32 ">
        <h1 className='font-semibold text-6xl'>Categories</h1>
      </div>
      <div className="w-full flex justify-center gap-[578px]">
        <div className="text-center">
          <img className='h-[411px]' src="https://us.vaio.com/cdn/shop/files/Remove-bg.ai_1714723414908.png?v=1714723499&width=750" alt="VAIO SX Series" />
          <h1 className='font-bold text-4xl'>VAIO SX Series</h1>
          <p className='text-2xl mt-2 text-gray-500'>Our flagship notebook Made in Japan</p>
        </div>
        <div className="text-center">
          <img className='h-[411px]' src="https://us.vaio.com/cdn/shop/files/Remove-bg.ai_1714723886380.png?v=1714723917" alt="VAIO F Series" />
          <h1 className='font-bold text-4xl'>VAIO F Series</h1>
          <p className='text-2xl mt-2 text-gray-500'>Portable Performance and Reliability</p>
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <iframe 
          width="1620" 
          height="520" // Adjusted height for a shorter video
          src="https://www.youtube.com/embed/qsjgjHvPQ2o" 
          title="YouTube video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Body;

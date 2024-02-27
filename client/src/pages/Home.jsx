import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const Home = () => {
  const [foundingMembers, setFoundingMembers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/foundingMember')
      .then((res) => res.json())
      .then((data) => {
        setFoundingMembers(data);
      });
  }, [foundingMembers]);
  const screenHeight = window.innerHeight;
  const carouselHeight = (2 * screenHeight) / 3;
  return (
    <div>
      <div className='w-11/12 mt-24 h-4/6 mr-auto ml-auto'>
        <Carousel className='h-3/6'>
          <div className='w-full' style={{ height: `${carouselHeight}px` }}>
            <img className='w-full h-full' src={img1} alt="Image 1" />
          </div>
          <div style={{ height: `${carouselHeight}px` }}>
            <img className='w-full h-full' src={img2} alt="Image 2" />
          </div>
          <div style={{ height: `${carouselHeight}px` }}>
            <img className='w-full h-full' src={img3} alt="Image 3" />
          </div>
        </Carousel>
      </div>
      <div className='mx-10 my-10'>

        <div className='lg:flex lg:justify-between items-center px-3 gap-x-8'>
          <div className='lg:flex lg:flex-col lg:gap-10 lg:w-1/2'>
            <p className='font-bold text-teal-900 text-2xl'>About Library</p>
            <p>The "Bandarban Library" is a renowned establishment nestled in the heart of Bandarban, dedicated to enriching the community with its extensive collection of books, primarily focusing on Islamic literature. Serving as a hub for knowledge seekers and enthusiasts, the library offers a diverse range of Islamic books, covering various aspects of faith, spirituality, history, jurisprudence, and literature.</p>
          </div>
          <div className='lg:w-1/2'>
            <img className='w-full rounded' src={img2} alt="Image 2" />
          </div>
        </div>
      </div>
      <div className='mx-10 my-10'>
        <h1 className='font-bold text-2xl text-teal-900 mb-10'>Location</h1>
        <div>
          <iframe className='mr-auto ml-auto w-5/6' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3694.152155191536!2d92.21631067405389!3d22.196323179761418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDExJzQ2LjgiTiA5MsKwMTMnMDguMCJF!5e0!3m2!1sen!2sbd!4v1709048937253!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className='px-28'>
          <div><span className='font-semibold'>Place Types: </span>Library</div>
          <div><span className='font-semibold'>Address: </span>Mosjid Rd, Bandarban, Bangladesh</div>
          <div><span className='font-semibold'>Coordinate: </span>22.1963232, 92.2188856</div>
          <div><span className='font-semibold'>Phone: </span></div>
          <div><span className='font-semibold'>Email: </span></div>
        </div>
      </div>
      <div className='mx-10 my-10'>
        <h1 className='font-bold text-2xl text-teal-900 mb-10'>Founding Members</h1>
        <div className='flex flex-wrap justify-around'>
        {foundingMembers.map((data) => (
          
            <div className='w-1/4 flex mx-3 my-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-slate-200 rounded-md'>
              <div className='w-20 p-2'>
                <img className='rounded-full' src="https://i.ibb.co/zFBgWy1/images.png" />
              </div>
              <div>
                <div>Name: {data.name}</div>
                <div>Email: {data.email}</div>
                <div>ContactNo: {data.contactNo}</div>
              </div>
          </div>
          
        ))}
        </div>
      </div>
      <div className='mx-10 my-10'>
        <h1 className='font-bold text-2xl text-teal-900 mb-10'>Developer Team</h1>
        <div className='flex flex-wrap justify-around'>
        <div className='w-1/4 flex mx-3 my-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-slate-200 rounded-md'>
              <div className='w-20 p-2'>
                <img className='rounded-full' src="https://i.ibb.co/zFBgWy1/images.png" />
              </div>
              <div>
                <div>Name: Rishaad Methun</div>
                <div>Email: nrmethun@gmail.com</div>
                <div>ContactNo: 01879467077</div>
              </div>
          </div>
          <div className='w-1/4 flex mx-3 my-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-slate-200 rounded-md'>
              <div className='w-20 p-2'>
                <img className='rounded-full' src="https://i.ibb.co/zFBgWy1/images.png" />
              </div>
              <div>
                <div>Name: Seaum Ahmed Tazim</div>
                <div>Email: jucse28.381@gmail.com</div>
                <div>ContactNo: 01750838631</div>
              </div>
          </div>
          <div className='w-1/4 flex mx-3 my-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-slate-200 rounded-md'>
              <div className='w-20 p-2'>
                <img className='rounded-full' src="https://i.ibb.co/zFBgWy1/images.png" />
              </div>
              <div>
                <div>Name: Md. Parvej Hoque Palash</div>
                <div>Email: jucse28.378@gmail.com</div>
                <div>ContactNo: 01841763871</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

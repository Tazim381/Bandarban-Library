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
      <div className='px-3 py-3'>

        <div className='lg:flex lg:justify-between items-center px-3 gap-x-8'>
          <div className='lg:flex lg:flex-col lg:gap-10 lg:w-1/2'>
            <p className='font-bold text-teal-900 text-2xl'>About Library</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi neque perspiciatis, nobis perferendis maxime quas blanditiis repellat fugit! Quasi illum possimus animi doloribus maxime, reiciendis, ex placeat error assumenda, ratione vero dolores sequi odio quis laudantium earum aspernatur magnam deserunt mollitia at ipsum expedita eveniet omnis! Pariatur provident ut velit placeat adipisci, officia quae, laborum, voluptates quasi!</p>
          </div>
          <div className='lg:w-1/2'>
            <img className='w-full rounded' src={img2} alt="Image 2" />
          </div>
        </div>
      </div>
      <div className='px-3 py-3'>
        <h1 className='font-bold text-2xl text-teal-900 mb-10'>Founding Members</h1>
        <div className='flex flex-wrap justify-around'>
        {foundingMembers.map((data) => (
          
            <div className='w-1/4 flex mx-3 my-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-slate-200 rounded-md'>
              <div className='w-24'>
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
      <div className='px-3 py-3'>
        <h1 className='font-bold text-2xl text-teal-900 mb-10'>Location</h1>
        <div>
          <iframe className='mr-auto ml-auto w-5/6' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14776.767949604222!2d92.217806!3d22.194809!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDExJzQxLjMiTiA5MsKwMTMnMDQuMSJF!5e0!3m2!1sen!2sus!4v1700305433263!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className='px-28'>
          <div><span className='font-semibold'>Place Types: </span>Premise, Library</div>
          <div><span className='font-semibold'>Address: </span>Kalectorate School Rd, Bandarban, Bangladesh</div>
          <div><span className='font-semibold'>Coordinate: </span>22.1948091, 92.2178061</div>
          <div><span className='font-semibold'>Phone: </span></div>
          <div><span className='font-semibold'>Email: </span></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

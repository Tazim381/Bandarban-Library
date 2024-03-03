import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';


const AddBooks = () => {
  const navigate = useNavigate();
  const [statusCode, setStatusCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.bookName.value

    axios.post(`http://localhost:5000/api/book/checkExistance`,{
      bookName: form.bookName.value
    })
    .then(response => {
        const data = response.data;
        console.log(data.statusCode)
        setStatusCode(data.statusCode); 
    })
    .catch(error => {
        console.error("Error fetching book data:", error);
        // Handle network or server errors
    });
  
      axios.post(`http://localhost:5000/api/book/addBook`, {
        bookName: form.bookName.value,
        authorName: form.authorName.value,
        category: form.category.value,
        publishedYear: form.publishedYear.value,
        bookLanguage: form.bookLanguage.value,
        entryLanguage: form.entryLanguage.value,
      })
        .then((response) => {
          if (response.status === 201) {
            alert("Book Added");
            form.reset();
            navigate("/addBooks");
          } else {
            alert("Book not Added!");
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <div className=" bg-slate-100 pb-16 mt-16 overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
        <form className="p-8 " onSubmit={handleSubmit}>
          <div className=' content-center text-2xl font-bold mb-4 md:mb-6 text-gray-800'>Book Information Form</div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="bookName">
                Book Name
              </label>
              <input type="text" name="bookName" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Name" required />
            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="authorName">
                Author Name
              </label>
              <input type="text" name="authorName" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Author Name" required />
            </div>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="publishedYear">
                Published Year
              </label>
              <input type="text" name="publishedYear" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Published Year" required />
            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
            <label class="block text-gray-700 text-sm mb-2" for="bookLanguage">
                Book Category
              </label>
              <select name="category" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" required>
                <option value="" disabled>Select Book Language</option>
                <option value="কোরান  KORAN">কোরান  KORAN</option>
                <option value="তাফসীর TAFSIR">তাফসীর TAFSIR</option>
                <option value="হাদিস HADITH">হাদিস HADITH</option>
                <option value="তাসাউফ">তাসাউফ </option>
                <option value="হাকীকত">হাকীকত</option>
                <option value="ফিকহ FIQH">ফিকহ FIQH</option>
                <option value="তুলনামূলক ধর্ম  COMPERATIVE RELIGION">তুলনামূলক ধর্ম  COMPERATIVE RELIGION</option>
                <option value="সীরাত">সীরাত</option>
                <option value="জীবনী BIOGRAPHY">জীবনী BIOGRAPHY</option>
                <option value="ইসলামিয়াত ISLAMIC STUDIES">ইসলামিয়াত ISLAMIC STUDIES</option>
                <option value="বিজ্ঞান SCIENCE">বিজ্ঞান SCIENCE</option>
                <option value="অর্থনীতি ECONOMICS">অর্থনীতি ECONOMICS</option>
                <option value="আইন JURISPRUDENCE">আইন JURISPRUDENCE</option>
                <option value="ইতিহাস ISLAMIC HISTORY">ইতিহাস ISLAMIC HISTORY</option>
                <option value="সমাজ বিজ্ঞান SOCIAL SCIENCE">সমাজ বিজ্ঞান SOCIAL SCIENCES</option>
                <option value="পৌরনীতি POLITICAL SCIENCE">পৌরনীতি POLITICAL SCIENCE</option>
                <option value="ইসলামী সাহিত্য  ISLAMIC LETERATURE">ইসলামী সাহিত্য  ISLAMIC LETERATURE</option>
                <option value="শিক্ষা EDUCATION">শিক্ষা EDUCATION </option>
                <option value="তাবলীগ TABLIG">তাবলীগ TABLIG </option>
                <option value="কিশোর সাহিত্য  CHILD LITERATURE">কিশোর সাহিত্য  CHILD LITERATURE</option>
                <option value="দর্শন">দর্শন</option>
              </select>
            </div>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="bookLanguage">
                Book Language
              </label>
              <select name="bookLanguage" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" required>
                <option value="" disabled>Select Book Language</option>
                <option value="bangla">Bangla</option>
                <option value="english">English</option>
              </select>
            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="entryLanguage">
                Entry Language
              </label>
              <select name="entryLanguage" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" required>
                <option value="" disabled>Select Book Language</option>
                <option value="bangla">Bangla</option>
                <option value="english">English</option>
              </select>
            </div>
          </div>

          <button type="submit" className="border-gray-50 bg-gradient-to-b from-green-700 to-green-900 font-medium px-2 py-1 md:px-4 md:py-2 text-white w-1/5 rounded">Add Book</button>
        </form>
      </div>
    </div>
  )
}

export default AddBooks
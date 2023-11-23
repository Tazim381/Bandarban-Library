import axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'


const UpdateBooks = () => {
  const navigate = useNavigate();
  const data=useLoaderData();
  const {id} = useParams()
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    axios.put(`http://localhost:5000/api/book/updateBook/${id}`, {
      bookName: form.bookName.value,
      authorName: form.authorName.value,
      category: form.category.value,
      publishedYear: form.publishedYear.value,
      image: form.image.value,
      bookLanguage: form.bookLanguage.value,
      entryLanguage: form.entryLanguage.value
    })
      .then((response) => {
        if (response.status == 200) {
          alert("New Book Updated");
          navigate("/allBooks");
        }
        else {
          alert("Book not Updated!");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className=" bg-slate-100 pb-16 mt-16 overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
        <form className="p-8 " onSubmit={handleSubmit}>
          <div className=' content-center text-2xl font-bold mb-4 md:mb-6 text-gray-800'>Update Book Information</div>
          <div className='flex justify-between'>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="bookName">
        Book Name
      </label>
            <input defaultValue={data.bookName} type="text" name="bookName" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded py-1 md:py-2 focus:outline-none w-full" placeholder="Book Name" required />
          </div>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="authorName">
        Author Name
      </label>
            <input defaultValue={data.authorName} type="text" name="authorName" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded py-1 md:py-2 focus:outline-none w-full" placeholder="Author Name" required />
          </div>
          </div>
          <div className='flex justify-between'>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="publishedYear">
          Published Year
      </label>
            <input defaultValue={data.publishedYear} type="text" name="publishedYear" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded py-1 md:py-2 focus:outline-none w-full" placeholder="Published Year" required />
          </div>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="bookCategory">
          Book Category
      </label>
            <input defaultValue={data.category} type="text" name="category" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded py-1 md:py-2 focus:outline-none w-full" placeholder="Book Category" required />
          </div>
          </div>
          <div className='flex justify-between'>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="bookLanguage">
          Book Language
      </label>
            <select name="bookLanguage" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded pl-2 py-1 md:py-2 focus:outline-none w-full" required>
              <option value="" disabled>Select Book Language</option>
              <option value="bangla">Bangla</option>
              <option value="english">English</option>
            </select>
          </div>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="entryLanguage">
          Entry Language
      </label>
          <select name="entryLanguage" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded pl-2 py-1 md:py-2 focus:outline-none w-full" required>
              <option value="" disabled>Select Book Language</option>
              <option value="bangla">Bangla</option>
              <option value="english">English</option>
            </select>
          </div>
          </div>
          <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
          <label class="block text-gray-700 text-sm mb-2" for="image">
          Image URL
      </label>
            <input defaultValue={data.image} type="text" name="image" className="border-slate-300 hover:border-slate-500 pl-2 border-2 rounded py-1 md:py-2 focus:outline-none w-full" placeholder="Image URL" required />
          </div>
          <button type="submit" className="border-gray-50 bg-gradient-to-b from-cyan-700 to-cyan-900 font-medium px-2 py-1 md:px-1 md:py-2 text-white w-1/4 rounded">Update Book</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBooks
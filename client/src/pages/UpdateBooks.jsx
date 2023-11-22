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
          navigate("/");
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
    <div className=" bg-teal-100 pb-16 overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
        <form className="p-8 " onSubmit={handleSubmit}>
          <div className=' content-center text-3xl font-bold mb-4 md:mb-6 text-gray-800'>Update Book Information</div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input defaultValue={data.bookName} type="text" name="bookName" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Book Name" required />
          </div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input defaultValue={data.authorName} type="text" name="authorName" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Author Name" required />
          </div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input defaultValue={data.publishedYear} type="text" name="publishedYear" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Published Year" required />
          </div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input defaultValue={data.category} type="text" name="category" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Book Category" required />
          </div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <select name="bookLanguage" className="bg-gray-200 rounded pl-2 py-1 md:py-2 focus:outline-none w-full" required>
              <option value="" disabled>Select Book Language</option>
              <option value="bangla">Bangla</option>
              <option value="english">English</option>
            </select>
          </div>

          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input defaultValue={data.image} type="text" name="image" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Image URL" required />
          </div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
          <select name="entryLanguage" className="bg-gray-200 rounded pl-2 py-1 md:py-2 focus:outline-none w-full" required>
              <option value="" disabled>Select Book Language</option>
              <option value="bangla">Bangla</option>
              <option value="english">English</option>
            </select>
          </div>
          <button type="submit" className="border-gray-50 bg-gradient-to-b from-cyan-700 to-cyan-900 font-medium px-2 py-1 md:px-1 md:py-2 text-white w-1/4 rounded">Update Book</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBooks
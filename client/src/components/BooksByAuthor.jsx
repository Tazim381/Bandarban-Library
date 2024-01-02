import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BooksByAuthor = ({ authorBooks }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Number of Books by Author',
        font: {
            size: '18xl',
          },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Authors',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Books',
        },
      },
    },
  };

  const authors = Object.keys(authorBooks);
  const bookCounts = Object.values(authorBooks);

  const data = {
    labels: authors,
    datasets: [
      {
        label: 'Total Number of Books',
        data: bookCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return(
    <div className='w-full'>
        <Bar options={options} data={data} />
    </div>
  );
};

export default BooksByAuthor;

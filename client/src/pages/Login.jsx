import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      try {
        const response = await axios.post('http://localhost:5000/api/admin/login', {
          email: form.email.value,
          password: form.password.value,
        });
        console.log(response);
        localStorage.setItem('set-token-for-user', response.data);
        const result = await swal({
          title: 'Good job!',
          text: 'Login successful!',
          icon: 'success',
          buttons: true,
          dangerMode: false,
        });
  
        // Check if the user clicked "OK"
        if (result) {
          form.reset();
          navigate('/');
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
        alert('Email or password wrong');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="bg-teal-100 h-screen overflow-hidden flex items-center justify-center pb-16">
      <div className="bg-white lg:w-5/12 md:6/12 rounded-xl border-green-900">
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input
              type="text"
              name="email"
              className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full"
              placeholder="Email"
              required
             // onInvalid={(e) => e.target.setCustomValidity('Please fill in this field')}
             // onChange={(e) => e.target.setCustomValidity('')}
            />
          </div>
          <div className="flex items-center text-lg mb-4 md:mb-6">
            <input
              type="password"
              name="password"
              className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full"
              placeholder="Password"
              required
             // onInvalid={(e) => e.target.setCustomValidity('Please fill in this field')}
             // onChange={(e) => e.target.setCustomValidity('')}
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="border-gray-50 bg-gradient-to-b from-cyan-700 to-cyan-900 font-medium p-1 md:p-2 text-white w-1/5 rounded"
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-right">
            <p>
              Don't have an account ?{' '}
              <Link to="/register" className="text-xl font-bold">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

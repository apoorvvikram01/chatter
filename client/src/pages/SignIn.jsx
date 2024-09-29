import React,{useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import {Spinner,Alert} from 'flowbite-react'

const SignIn = () => {
  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const hostAddress = import.meta.env.VITE_FRONTEND_HOST

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id] : e.target.value.trim()});
  }
  const handleSubmit =async (e)=>{
    e.preventDefault()
if( !email || !password){
  return setErrorMessage ("Please fill all the fields")
}
try {
  setLoading(true)
  setErrorMessage(null)
  const res = await fetch(`${hostAddress}/api/sign-in`,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  })
  const data = await res.json();
  if(data.success === false) {
    setLoading(false)
    return setErrorMessage(data.message)
  }
  if(res.ok){
    navigate('/start')
  }
} catch (error) {
  setLoading(false)
  setErrorMessage(error.message)
}
setLoading(false)
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white  p-10 items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Chatter</h1>
          <p className="text-lg">Login to start chatting.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
              />
            </div>

            <button 
            disabled={loading}
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              {loading? (
              <>
              <Spinner size='sm' />
              <span className="pl-3">Loading...</span>
              </>
             ) : "Sign Up "
            }
            </button>

            <div className="flex items-center justify-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button className="w-full p-3 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 transition">
              <FaGoogle className="mr-2" />
              Sign In with Google
            </button>
          </form>

          <p className="mt-4">
            New user?{' '}
            <NavLink to="/sign-up" className="text-blue-600 hover:underline">
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
      {
      errorMessage &&(
        <Alert className="mt-5" color='failure'>
        {errorMessage}
        </Alert>
      )
    }
    </div>
  );
};

export default SignIn;

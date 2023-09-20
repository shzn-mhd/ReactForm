import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function MyFormComponent() {
  const handleSubmit = (values) => {
    
   
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='App h-screen bg-black flex flex-col justify-center items-center '> 
        
            <p className='text-3xl text-blue-600 font-serif'>DoNext</p>
            <p className='text-2xl text-white text-yellow-600 font-bold font-mono'>Join With Our Team</p>
              
              <div className='p-4 mb-4'> 
              <label className='relative'>
                <input type='text' className='h-10 w-56 px-6 text-1xl bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transiton duration-200' />
                <span className='text-1xl text-white text-opacity-80 absolute left-0 top-1 mx-4 px-2 transition duration-200 input-text'>User Name</span>
              </label>
              <ErrorMessage className='text-1xl text-red-600' name="name" component="div" />
              </div>

              <div className='p-4 mb-4' >
              <label className='relative'>
                <input type='email' className='h-10 w-56 px-6 text-1xl bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transiton duration-200' />
                <span className='text-1xl text-white text-opacity-80 absolute left-0 top-1 mx-4 px-2 transition duration-200 input-text'>Email</span>
              </label>
              <ErrorMessage className=' text-1xl text-red-600' name="email" component="div" />
              </div>

              <div className='p-4 mb-4'>
              <label className='relative'>
                <input type='password' className='h-10 w-56 px-6 text-1xl bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transiton duration-200' />
                <span className='text-1xl text-white text-opacity-80 absolute left-0 top-1 mx-4 px-2 transition duration-200 input-text'>Password</span>
              </label>
              <ErrorMessage className='text-1xl text-red-600' name="password" component="div" />
            </div>
          
            <p>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"' type="submit">Submit</button>
            </p> 
            
        </div>
          
      </Form>
    </Formik>
  );
}

function App() {
  return (
    <div>
      <MyFormComponent/>
    </div>
  );
}

export default App;

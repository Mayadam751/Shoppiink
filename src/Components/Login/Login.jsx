import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function Login() {
  function login(values) {
    console.log(values);
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: login,
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-200 to-pink-200">
        <div className="bg-white px-20 py-32 m-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
              <input
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="bg-red-500 text-white p-4 rounded mt-2">
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
              <input
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5"
                required
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="bg-red-500 text-white p-4 rounded mt-2">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </div>

            <button type="submit" className="text-white bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

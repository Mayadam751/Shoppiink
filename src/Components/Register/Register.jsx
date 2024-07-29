import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Register() {
  function register(values) {
    console.log(values);
  }

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Min length must be greater than 3 characters')
      .max(20, 'Max length must be less than 20 characters')
      .required('Name is required'),
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,'Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      ),
    rePassword: Yup.string()
      .required('Re-password is required')
      .oneOf([Yup.ref('password')], "Passwords must match")
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema,
    onSubmit: register
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-200 to-pink-200">
        <div className="bg-white  rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Register Now</h2>
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5"
                placeholder="Name"
                required
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="bg-red-500 text-white p-4 rounded mt-2">
                  <p>{formik.errors.name}</p>
                </div>
              ) : null}
            </div>

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

            <div className="mb-5">
              <label htmlFor="rePassword"  className="block mb-2 text-sm font-medium text-gray-900">Re-enter Password</label>
              <input
              onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                type="password"
                id="rePassword"
                name="rePassword"
                placeholder="Repassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5"
                required
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="bg-red-500 text-white p-4 rounded mt-2">
                  <p>{formik.errors.rePassword}</p>
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="text-white bg-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

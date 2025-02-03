import React from "react";
import { useState, useEffect } from "react";
import WideButton from "../components/WideButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../features/auth/authThunk";

function Signin() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/')
    };
  }, [user, navigate]);

  const handleEmail = (value) => {
    console.log(value);
    setEmail(value)
  }
  const handlePassword = (value) => {
    console.log(value);
    setPassword(value)
  }
  const onSubmit = (data) => {
    let email = data.email
    let password = data.password
    dispatch(signin({ email, password }))
  }
  return (
    <section className="flex flex-col-reverse lg:flex-row overflow-y-hidden bg-orange-100 min-h-screen">
      <img src="src/assets/images/illco2.jpg" alt="" className="lg:w-5/9 lg:aspect-[16/9] object-cover rounded-t-3xl lg:rounded-r-3xl shadow-[3px_0px_10px_0px_rgba(51,51,51,.5)]" />
      <div className="flex flex-1 gap-3 justify-center items-center flex-col !p-8 sm:!p-16 md:!p-32">
        <h1 className="text-4xl font-Karla self-start">SIGN IN</h1>

        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="w-full ">

          <input
            type='email'
            id='userEmail'
            name='userEmail'
            placeholder='Email'
            onChange={(e) => handleEmail(e.target.value)}
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="!mt-3 w-full border-2 border-black !py-3 !px-6 bg-transparent rounded-sm outline-none placeholder:text-gray-600 placeholder:font-Outfit font-Outfit"
          />
          {errors.email && <p className="font-Outfit text-red-600">Invalid input or empty.</p>}

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={(e) => handlePassword(e.target.value)}
            {...register('password', {
              required: true,
              minLength: 8,
            })}
            className="!mt-3 w-full border-2 border-black !py-3 !px-6 bg-transparent rounded-sm outline-none placeholder:text-gray-600 placeholder:font-Outfit font-Outfit"
          />
          {errors.password && <p className="font-Outfit text-red-600">Password must be 8 characters.</p>}

          <span className="h-2"></span>
          <WideButton value={'Signup'} color={'bg-stone-600'} textColor={'text-white'} hoverColor={'hover:bg-stone-700'} activeColor={'active:bg-stone-800'} />
        </form>

        <div className="flex flex-col items-end self-end font-Outfit">
          <Link to={"/signup"} className="text-right hover:text-gray-950 active:text-gray-800">Don't have an Account? Create one</Link><br />
          <Link to={"https://goo.gl/eEeXsY"} className="text-right hover:text-gray-950 active:text-gray-800">Read our terms and conditions</Link>
        </div>
      </div>
    </section>
  )
}

export default Signin;

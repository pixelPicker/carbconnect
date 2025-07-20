import SideImage from '@/assets/images/illco2.jpg'
import { useState,  useRef } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import authClient from '@/api/auth/authClient'
import { LoadingState } from '@/components/LoadingState'
import { ErrorMessage } from '@/components/ErrorMessage'

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
})

const inputClass =
  'mt-3 w-full border-2 border-stone-600 py-3 px-6 bg-transparent rounded-sm outline-none placeholder:text-brown-300 placeholder:font-Outfit font-Outfit'

function RouteComponent() {
  return <Signup />
}

function Signup() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formResponseError, setFormResponseError] = useState<string | null>(
    null,
  )

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
    })
  }

  if (formSubmitted) {
    return <LoadingState message="Form Submitted. Wait while we are loading" />
  }

  return (
    <section className="flex flex-col-reverse lg:flex-row overflow-y-hidden bg-orange-100 min-h-screen">
      <img
        src={SideImage}
        loading="lazy"
        alt=""
        className="lg:w-5/9 lg:aspect-[16/9] object-cover rounded-t-3xl lg:rounded-r-3xl shadow-[3px_0px_10px_0px_rgba(51,51,51,.5)]"
      />
      <div className="flex flex-1 gap-3 justify-center items-center flex-col p-8 sm:p-16 md:p-32">
        <h1 className="text-4xl w-[350px] font-Bricolage ">SIGN UP</h1>

        <SignupForm
          setFormResponseError={setFormResponseError}
          setFormSubmitted={setFormSubmitted}
        />

        <div className="flex flex-col items-end text-right w-[350px] font-Outfit">
          <Link
            to="/auth/signin"
            className="text-right hover:text-gray-950 active:text-gray-800"
          >
            Already have an Account? Signin
          </Link>
          <br />
        </div>
        {formResponseError && <ErrorMessage message={formResponseError} />}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-3 max-w-[350px] w-full text-white py-3 px-6 rounded-sm font-Outfit bg-stone-600 hover:bg-stone-700 transition-all duration-800 active:bg-stone-200"
        >
          Continue with Google
        </button>
        <a
          href="https://goo.gl/eEeXsY"
          className="text-right hover:text-gray-950 mt-10 font-Outfit text-sm underline active:text-gray-800"
        >
          Read our terms and conditions
        </a>
      </div>
    </section>
  )
}

function SignupForm({
  setFormSubmitted,
  setFormResponseError,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  setFormResponseError: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!usernameRef.current || !emailRef.current || !passwordRef.current) {
      return
    }
    setFormSubmitted(true)
    try {
      const res = await authClient.signUp.email({
        email: emailRef.current.value,
        name: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      if (res.error) {
        throw new Error(res.error.message)
      }
      navigate({ to: '/dashboard' })
    } catch (error) {
      const err = error as Error
      setFormResponseError(err.message)
    } finally {
      setFormSubmitted(false)
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-[350px] w-full grid mt-6 gap-4"
    >
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Choose a username*"
        ref={usernameRef}
        minLength={3}
        maxLength={30}
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email*"
        ref={emailRef}
        required
        className={inputClass}
      />
      <input
        type="password"
        name="password"
        id="password"
        minLength={8}
        maxLength={100}
        placeholder="Create a password*"
        ref={passwordRef}
        required
        className={inputClass}
      />
      <button
        type="submit"
        className="bg-stone-600 mt-3 font-Outfit p-3 text-center text-white w-full rounded-sm hover:bg-stone-700 transition-all duration-300 active:bg-stone-800"
      >
        Signup
      </button>
    </form>
  )
}

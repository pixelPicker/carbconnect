import SideImage from '@/assets/images/illco2.jpg'
import authClient from '@/api/auth/authClient'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/auth/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Signin />
}

const inputClass =
  'mt-3 w-full border-2 border-stone-600 py-3 px-6 bg-transparent rounded-sm outline-none placeholder:text-brown-300 placeholder:font-Outfit font-Outfit'

function Signin() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formResponseError, setFormResponseError] = useState<string | null>(
    null,
  )

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
    })
  }

  return (
    <section className="flex flex-col-reverse lg:flex-row overflow-y-hidden bg-orange-100 min-h-screen">
      <img
        src={SideImage}
        alt=""
        className="lg:w-5/9 lg:aspect-[16/9] object-cover rounded-t-3xl lg:rounded-r-3xl shadow-[3px_0px_10px_0px_rgba(51,51,51,.5)]"
      />
      <div className="flex flex-1 gap-3 justify-center items-center flex-col p-8 sm:p-16 md:p-32">
        <h1 className="text-4xl w-[350px] font-Bricolage ">SIGN IN</h1>

        <SigninForm
          setFormResponseError={setFormResponseError}
          setFormSubmitted={setFormSubmitted}
        />

        <div className="flex flex-col items-end text-right w-[350px] font-Outfit">
          <Link
            to="/auth/signup"
            className="text-right hover:text-gray-950 active:text-gray-800"
          >
            Don't have an acount? Signup
          </Link>
          <br />
        </div>
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

function SigninForm({
  setFormSubmitted,
  setFormResponseError,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  setFormResponseError: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRef.current || !passwordRef.current) {
      return
    }
    setFormSubmitted(true)
    try {
      const res = await authClient.signIn.email({
        email: emailRef.current.value,
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
        placeholder="Create a password*"
        ref={passwordRef}
        minLength={8}
        maxLength={100}
        required
        className={inputClass}
      />
      <button
        type="submit"
        className="bg-stone-600 mt-3 font-Outfit p-3 text-center text-white w-full rounded-sm hover:bg-stone-700 transition-all duration-300 active:bg-stone-800"
      >
        Signin
      </button>
    </form>
  )
}

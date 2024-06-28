import { useRef, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from '../axiosConfig'

function Login() {
  const navigate = useNavigate()
  const emailDom = useRef();
  const passwordDom = useRef();
  const [show, setshow] = useState(false);
  const [login, setlogin] = useState(true);
	const [animate, setanimate] = useState(false);

	async function loginToggle() {
		setTimeout(
			() => {
				setanimate((animate) => !animate);
			},
			500,

			setlogin((login) => !login)
		);
	}

  function handlePassword() {
		if (!show) {
			setshow(true);
		} else {
			setshow(false);
		}
	}

  async function handleSubmit(e) {
    e.preventDefault()

    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (!emailValue || !passwordValue) {
      alert('please provide all required information');
      return;
    }

    try {
      const {data} = await axios.post('/users/login', {
        email: emailValue,
        password: passwordValue,
      })
      alert('login successful')

      localStorage.setItem('token', data.token);
      navigate('/questions')
      console.log(data)
    } catch (error) {
      alert(error?.response?.data?.msg)
      console.log(error.response.data)
      navigate('/')
    }
    }

  return (
    <>
	<div className="flex justify-around bg-slate-50 bg-[url('https://forum.ibrodev.com/bg-svg-f.svg')]  bg-no-repeat bg-cover pb-5 ">
	        <div className="w-1/3 mt-10 mb-5 ml-20 text-center bg-white border border-gray-200 rounded-md scroll-smooth">
			
				<div className="w-full px-5">
					<div className="px-5 text-2xl text-center">
						Login to your account
					</div>

					<div className="p-1">
						<span>Don’t have an account? </span>

						<div
							onClick={loginToggle}
							className="text-red-400 hover:cursor-pointer touch-pan-right"
						>
							Create a new account
						</div>
					</div>
					<form onSubmit={handleSubmit} className="px-4 pt-6 pb-4 mb-4 rounded ">
						<div className="mb-4">
							
							<input
								className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="email"
								ref={emailDom}
							/>
						</div>
						<div className="flex justify-between mb-6">
							<input
								className="inline-flex w-full px-3 py-2 mb-5 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:bg-green-50 "
								id="password"
								type={show ? "text" : "password"}
								placeholder="password"
								ref={passwordDom}
							/>

							<p
								onClick={handlePassword}
								className="absolute py-2 pl-10 text-xs italic text-black ml-60 hover:cursor-pointer"
							>
								{show ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
										/>
									</svg>
								)}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Sign In
							</button>
							<a
								className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
								href="#"
							>
								Forgot Password?
							</a>
						</div>
					</form>
				</div>
			</div>
			<div className="w-1/2 mt-10 ">
				<h3 className="text-xl text-orange-500">About</h3>
				<h1 className="text-4xl text-blue-950">Evangadi Networks</h1>
				<br />
				<p className="pb-4 text-lg">
					No matter what stage of life you are in, whether you’re just starting
					elementary school or being promoted to CEO of a Fortune 500 company,
					you have much to offer to those who are trying to follow in your
					footsteps.
				</p>
				<p className="pb-4 text-lg">
					At Evangadi Forum, we believe in the power of collaboration,
					inspiration, and growth. We've created a space where like-minded
					individuals come together to share experiences, ideas, and support one
					another on our unique journeys.
				</p>

				<p className="text-lg v">
					Wheather you are willing to share your knowledge or you are just
					looking to meet mentors of your own, please start by joining the
					network here.
				</p>

				<div className="mt-5">
					<a
						href="#"
						className="inline-block px-8 py-2 mt-4 mr-10 text-lg leading-none text-white bg-orange-400 border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-orange-700 lg:mt-0"
					>
						HOW IT WORKS
					</a>
				</div>
			</div>
			</div>
    </>
  )
}

export default Login

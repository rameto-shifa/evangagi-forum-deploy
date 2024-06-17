import React from "react";
import Auth from "./Auth";
import { AnimatePresence } from "framer-motion";

function LandingPage() {
	// const [login, setlogin] = useState(true);
	return (
		<div className="flex justify-around bg-slate-50 bg-[url('https://forum.ibrodev.com/bg-svg-f.svg')]  bg-no-repeat bg-cover pb-5 ">
			{/* {login ? (
				<LoginPage toggle={setlogin} />
			) : (
				<RegisterPage toggle={setlogin} />
			)} */}
			<AnimatePresence>{<Auth />}</AnimatePresence>

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
	);
}

export default LandingPage;

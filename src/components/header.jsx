import React, { useState } from "react";
import Darkbutton from "./darkbutton";

function Header({ darkMode, toggleDarkMode }) {
	return (
		<header className="pt-10 px-4 md:px-8 pb-0 flex justify-between items-start relative flex-col md:flex-row ">
			<div className="flex flex-col gap-2 items-start">
				<h1 className="font-semibold text-6xl uppercase text-black dark:text-white m:w-full">
					IMPUESBOX
					<br />
					DESDE LA{" "}
					<span className="bg-clip-text font-semibold text-transparent bg-gradient-to-bl from-[#0f770f] to-gray-950">
						XBOX STORE
					</span>
				</h1>
				<h2 className="text-[0.95rem] text-[#6d6d6d] break-words w-fit md:w-[70ch]">
					Sitio web que muestra las ofertas y juegos de Xbox en Argentina,
					ofreciendo una amplia gama de juegos y productos, junto con detalles
					completos sobre precios, descuentos y los impuestos locales
					aplicables.
				</h2>
			</div>
			<div className="flex-shrink-0 md:flex-row items-center md:w-fit flex flex-col gap-3 w-full">
				{/* <a href="https://github.com/lucaspausin" target="_blank">
					<img
						src="/images/git.png"
						alt=""
						className="h-[2rem] w-[2rem] dark:invert hover:opacity-80 transition-all ease-in-out "
					/>
				</a>
				<a href="https://www.linkedin.com/in/pausinlucas/" target="_blank">
					<img
						src="/images/linke.png"
						alt=""
						className="h-[2rem] w-[2rem] dark:invert hover:opacity-80 transition-all ease-in-out"
					/>
				</a>
				<Darkbutton darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
			</div>
		</header>
	);
}

export default Header;

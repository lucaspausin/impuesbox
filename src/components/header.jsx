import React from "react";
import { Github, Linkedin } from "lucide-react";

function Header() {
	return (
		<header className="pt-6 md:pt-8 px-8 md:px-10 lg:px-12 pb-0 flex justify-between relative flex-col">
			<div className="flex flex-shrink-0 items-center justify-end gap-4 w-full">
				<a href="https://github.com/lucaspausin/impuesbox" target="_blank">
					<Github strokeWidth={1.25} className="w-6 h-6" />
				</a>
				<a href="https://www.linkedin.com/in/pausinlucas/" target="_blank">
					<Linkedin strokeWidth={1.25} className="w-6 h-6" />
				</a>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center w-full pt-12 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl">
					Impuesbox,
					<br />
					Desde la{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-bl from-[#0f770f] to-gray-950">
						xbox store
					</span>
				</h1>
				<h2 className="text-[1rem] text-[#6d6d6d] break-words w-fit md:w-[70ch]">
					Sitio web que muestra las ofertas y juegos de Xbox en Argentina,
					ofreciendo una amplia gama de juegos y productos, junto con detalles
					completos sobre precios, descuentos y los impuestos locales
					aplicables.
				</h2>
			</div>
		</header>
	);
}

export default Header;

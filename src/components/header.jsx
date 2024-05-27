import React from "react";

function Header() {
	return (
		<header className="pt-6 md:pt-8 px-6 md:px-8 pb-0 flex justify-between items-start relative flex-col text-center">
			<div className="flex flex-shrink-0 items-center justify-end gap-2 w-full">
				<a href="https://github.com/lucaspausin/impuesbox" target="_blank">
					<img
						src="/images/git.avif"
						alt="repositorio-de-github-para-proyecto-desplegado"
						className="h-[2.35rem] w-[2.35rem]"
					/>
				</a>
				<a href="https://www.linkedin.com/in/pausinlucas/" target="_blank">
					<img
						src="/images/linkedin.avif"
						alt="mi-perfil-de-linkedin"
						className="h-[2.35rem] w-[2.35rem] invert"
					/>
				</a>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center w-full pt-12">
				<h1 className="font-semibold text-4xl md:text-7xl ">
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

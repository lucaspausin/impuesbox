import React from "react";

function Card({ title, price, imgsrc, originalprice, discount, href }) {
	return (
		<article className="flex flex-col justify-between items-start gap-2 bg-gray-50 shadow-xl h-[25rem] relative p-6 border border-gray-200">
			<div className="flex flex-col w-full gap-2 ">
				<img
					loading="eager"
					src={imgsrc || "/images/xbox-game-default.avif"}
					alt="imagen-de-juego-de-xbox"
					className="h-24 w-24 rounded-full contrast-150"
				/>
				<div className="flex flex-col items-start justify-center gap-2 w-full pt-3">
					{discount && (
						<p className="text-[1rem] py-0 px-1 right-6 top-6 absolute border border-yellow-500 text-yellow-500 ">
							<span className="bg-clip-text text-transparent bg-gradient-to-t from-yellow-600 to-yellow-800">
								{discount}
							</span>
						</p>
					)}
					<a
						href={href}
						className="text-xl md:text-2xl text-black  line-clamp-2 font-medium"
						target="_blank"
					>
						{title}
					</a>
					<img
						loading="eager"
						src={imgsrc || "/images/xbox-game-default.avif"}
						alt="imagen-de-juego-de-xbox"
						className="absolute top-5 left-0 rounded-full contrast-150 z-10 blur-2xl opacity-10 h-36 w-36"
					/>
					<div className="flex flex-col gap-1 w-full">
						{parseFloat(price) === 0 ? (
							<p className="text-lg md:text-xl text-[#126215] truncate">
								GRATIS
							</p>
						) : (
							<div className="drop-shadow-2xl">
								{parseFloat(originalprice) > 0 ? (
									<div className="flex justify-between items-center">
										<p className="text-lg md:text-xl line-through text-[#6d6d6d]">
											${originalprice}
										</p>
									</div>
								) : null}
								<p className="text-lg md:text-xl text-[#126215]  truncate">
									${price}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<p className="text-[0.9rem] text-[#6d6d6d]">
				*Incluye el +60% de impuestos.
			</p>
		</article>
	);
}

export default Card;

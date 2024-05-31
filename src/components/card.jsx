import React from "react";

function Card({ title, price, imgsrc, originalprice, discount, href }) {
	return (
		<article className="flex flex-col justify-between items-start gap-2 bg-gray-50 shadow-lg h-[25rem] relative p-6 border border-gray-200">
			<div className="flex flex-col w-full gap-2 ">
				<img
					src={imgsrc || "/images/xbox-game-default.avif"}
					loading="lazy"
					alt="imagen-de-juego-de-xbox"
					className="h-24 w-24 md:h-32 md:w-32 object-cover rounded-full contrast-150 drop-shadow-2xl border border-gray-300"
				/>
				<div className="flex flex-col items-start justify-center gap-2 w-full pt-3">
					{discount && (
						<p className="text-[1rem] px-[0.3rem] right-5 top-5 absolute border border-yellow-500 text-yellow-500 rounded-sm ">
							<span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 to-yellow-700">
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
					<div className="flex flex-col gap-1 w-full">
						{parseFloat(price) === 0 ? (
							<p className="text-lg md:text-xl text-[#126215]  truncate">
								GRATIS
							</p>
						) : (
							<div className="drop-shadow-2xl">
								{parseFloat(originalprice) > 0 ? (
									<div className="flex justify-between items-center">
										<p className="text-base md:text-lg line-through text-[#6d6d6d]">
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
			<p className="text-sm text-[#6d6d6d]">
				*Incluye el +60% de impuestos.
			</p>
		</article>
	);
}

export default Card;

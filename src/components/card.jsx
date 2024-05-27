import React from "react";

function Card({ title, price, imgsrc, originalprice, discount, href }) {
	return (
		<article className="flex flex-col justify-between items-start gap-2 bg-gray-50 shadow-lg h-[25rem] relative p-3 border border-gray-200">
			<div className="flex flex-col w-full gap-2 ">
				<img
					src={
						imgsrc
							? imgsrc
							: "https://i.pinimg.com/564x/68/0e/10/680e10ff9c6d1ff01ba023f6678acd3f.jpg"
					}
					loading="lazy"
					alt="Imagen de juego de Xbox"
					className="h-36 w-36 object-cover rounded-full contrast-125 drop-shadow-2xl shadow-inner border-2 border-gray-200"
				/>
				<div className="flex flex-col items-start justify-center gap-2 w-full pt-3">
					<p className="text-[0.95rem] px-[0.25rem] right-3 top-3 md:absolute bg-yellow-300 rounded-sm text-yellow-950 font-semibold">
						{discount}
					</p>
					<a
						href={href}
						className="text-2xl text-zinc-700 font-bold text-start line-clamp-2 "
						target="_blank"
					>
						{title}
					</a>
					<div className="flex flex-col gap-1 w-full">
						{parseFloat(price) === 0 ? (
							<p className="text-xl text-[#0f770f] font-bold drop-shadow-xl truncate">
								GRATIS
							</p>
						) : (
							<div className="drop-shadow-2xl">
								{parseFloat(originalprice) > 0 ? (
									<div className="flex justify-between items-center">
										<p className="text-[0.95rem] font-medium line-through text-[#6d6d6d]  ">
											${originalprice}
										</p>
									</div>
								) : null}
								<p className="text-[1.30rem] text-[#0f770f] font-semibold truncate">
									${price}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<p className="text-[0.75rem] font-medium text-zinc-700">
				*Impuestos incluidos
			</p>
		</article>
	);
}

export default Card;

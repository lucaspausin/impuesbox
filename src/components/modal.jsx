// import React, { useState, useEffect } from "react";

// const Modal = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const openModal = () => {
// 		setIsOpen(true);
// 	};

// 	const closeModal = () => {
// 		setIsOpen(false);
// 	};

// 	useEffect(() => {
// 		const handleClickOutside = (event) => {
// 			const modalContent = document.querySelector(".modal-content");
// 			if (modalContent && !modalContent.contains(event.target)) {
// 				setIsOpen(false);
// 			}
// 		};

// 		document.addEventListener("mousedown", handleClickOutside);

// 		return () => {
// 			document.removeEventListener("mousedown", handleClickOutside);
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<button onClick={openModal}>
// 				<img
// 					src="https://cdn.icon-icons.com/icons2/1238/PNG/512/questionmark_83826.png"
// 					alt=""
// 					className="h-4 w-4 rounded-full self-start"
// 				/>
// 			</button>

// 			{isOpen && (
// 				<>
// 					<div className="fixed opacity-80 bg-gray-50 inset-0 z-40 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
// 					<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
// 						<div className="bg-gray-50 modal-content text-black p-8 flex flex-col gap-8 max-w-2xl text-wrap text-center items-center shadow-lg h-full md:h-fit justify-center">
// 							<p className="text-xl">
// 								A veces, al filtrar por juegos para PC, aparecen algunos que son
// 								'Play Anywhere' o 'Cloud Gaming'. Aunque la tienda los incluya,
// 								no siempre son compatibles con PC. Revisa la descripción del
// 								juego en la tienda de Xbox para asegurarte de que sea compatible
// 								con PC. Por ejemplo, podrías ver algo así:
// 							</p>
// 							<div className="flex flex-col items-start gap-4 border border-gray-50 p-8 bg-black text-white drop-shadow-2xl pointer-events-none select-none">
// 								<p className="text-lg">Se puede jugar en</p>
// 								<div className="flex gap-2 flex-col items-start md:flex-row md:items-center">
// 									<div className="p-2 border border-red-700">
// 										<p className="px-6 py-2 rounded-full bg-zinc-700 ">PC</p>
// 									</div>
// 									<p className="px-6 py-2 rounded-full bg-zinc-700">XBOX One</p>
// 									<p className="px-6 py-2 rounded-full bg-zinc-700">
// 										XBOX Series X`S
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 						<button
// 							onClick={closeModal}
// 							className=" absolute top-5 right-6 z-50"
// 						>
// 							<img
// 								src="/images/x.svg"
// 								alt=""
// 								className="w-7 h-7 object-cover"
// 							/>
// 						</button>
// 					</div>
// 				</>
// 			)}
// 		</>
// 	);
// };

// export default Modal;

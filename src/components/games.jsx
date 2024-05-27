import React, { useState, useEffect } from "react";
import Card from "./card";
import { AnimatePresence, motion } from "framer-motion";

const GameDisplay = ({ datos, search, platform }) => {
	const [visibleGames, setVisibleGames] = useState(20);
	const [showScrollButton, setShowScrollButton] = useState(false);

	const filteredGames = datos
		.filter(
			(item) =>
				(platform === "PC" && item.platform === "PC") ||
				(platform === "Console" && item.platform === "Console")
		)
		.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

	const visibleGamesData = filteredGames.slice(0, visibleGames);

	const handleScroll = () => {
		if (
			window.innerHeight + window.scrollY >=
			document.documentElement.scrollHeight - 10
		) {
			setVisibleGames((prevVisibleGames) =>
				Math.min(prevVisibleGames + 20, filteredGames.length)
			);
		}
	};

	const handleScrollTopVisibility = () => {
		if (window.scrollY > 800) {
			setShowScrollButton(true);
		} else {
			setShowScrollButton(false);
		}
	};

	const handleScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setShowScrollButton(true);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("scroll", handleScrollTopVisibility);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("scroll", handleScrollTopVisibility);
		};
	}, [filteredGames.length]);

	return (
		<main>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 px-6 md:px-8  md:pb-8 gap-8 justify-between relative">
				{filteredGames.length === 0 ? (
					<p className="col-span-full text-lg font-Oswald text-black py-3">
						¡Hmm, parece que no tenemos este juego en la colección por el
						momento! No te preocupes, ¡puede que aparezca más adelante!
					</p>
				) : (
					visibleGamesData.map((game, index) => {
						const originalPrice = game.price
							? parseFloat(game.price.replace(/[^\d,]/g, "").replace(",", "."))
							: 0;

						const finalPrice = originalPrice * 1.6;
						const formattedFinalPrice = finalPrice.toLocaleString("es-ES", {
							style: "currency",
							currency: "ARS",
						});

						const originalPrice2 = game.oldPrice
							? parseFloat(
									game.oldPrice.replace(/[^\d,]/g, "").replace(",", ".")
							  )
							: 0;
						const finalPrice2 = originalPrice2 * 1.6;
						const formattedFinalPrice2 = finalPrice2.toLocaleString("es-ES", {
							style: "currency",
							currency: "ARS",
						});

						return (
							<Card
								key={index}
								title={game.title}
								price={formattedFinalPrice}
								imgsrc={game.imgUrl}
								discount={game.discountPercentage}
								originalprice={formattedFinalPrice2}
								href={game.url}
							/>
						);
					})
				)}
			</section>
			<AnimatePresence>
				{showScrollButton && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 20 }}
						exit={{ opacity: 0, y: 0 }}
						transition={{ duration: 0.1 }}
						className="fixed bottom-2 right-0"
					>
						<button onClick={handleScrollTop} className="">
							<img
								src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_up_48px-512.png"
								alt=""
								className="bg-transparent h-16 w-15"
							/>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
};

export default GameDisplay;

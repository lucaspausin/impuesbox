import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Games from "./components/games";
import Filter from "./components/filter";
import OrderBy from "./components/orderBy";
import Platform from "./components/platform";

function App() {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("deals");
	const [orderBy, setOrderBy] = useState("priceDesc");
	const [sheetData, setSheetData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [platform, setPlatform] = useState("PC");

	const [darkMode, setDarkMode] = useState(() => {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return false;
		}
		return false;
	});

	useEffect(() => {
		if (darkMode) {
			document.querySelector("html").classList.add("dark");
		} else {
			document.querySelector("html").classList.remove("dark");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	const handlePlatformChange = (event) => {
		setPlatform(event.target.value);
	};

	useEffect(() => {
		readGoogleSheet();
	}, []);

	const readGoogleSheet = () => {
		setIsLoading(true);

		axios
			.get(
				`https://gsx2json.com/api?id=${
					import.meta.env.VITE_SCRAPPED_XBOXGAMES_API_ID
				}&columns=false&sheet=master&api_key=${
					import.meta.env.VITE_GOOGLE_API_KEY
				}`
			)
			.then((response) => {
				const data = response.data;
				if (data && data.rows) {
					const rowsWithFormattedData = data.rows.map((row) => {
						const title = row.title.toString();
						const price = row.price.toString();
						const oldPrice = row.oldPrice.toString();
						const discountPercentage =
							row.discountPercentage === 0 ? null : row.discountPercentage;

						return {
							...row,
							title,
							price,
							oldPrice,
							discountPercentage,
						};
					});
					setSheetData(rowsWithFormattedData);
				} else {
					console.error("Data format is not as expected:", data);
				}
			})
			.catch((error) => {
				console.error("Error fetching data from Google Sheet:", error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleOrderByChange = (newOrder) => {
		if (newOrder !== orderBy && filter !== "free") {
			setOrderBy(newOrder);
		}
	};

	const handleFilterChange = (newFilter) => {
		if (newFilter !== filter) {
			setFilter(newFilter);
			if (newFilter === "free") {
				setOrderBy("priceDesc");
			}
			setSearch("");
			document.getElementById("searchInput").value = "";
		}
	};

	const filteredAndSortedGames = sheetData
		.filter((game) => {
			if (
				(search === "" ||
					game.title.toLowerCase().includes(search.toLowerCase())) &&
				((filter === "free" && game.gameType === "Free") ||
					(filter === "deals" && game.gameType === "Offer") ||
					(filter === "all" && game.gameType === "All"))
			) {
				if (filter === "all" && game.gameType === "free") {
					return false;
				}
				return true;
			} else if (search !== "") {
				return game.title.toLowerCase().includes(search.toLowerCase());
			} else {
				return false;
			}
		})
		.sort((a, b) => {
			const originalPriceA = parseFloat(
				a.price.replace(/[^\d,]/g, "").replace(",", ".")
			);
			const originalPriceB = parseFloat(
				b.price.replace(/[^\d,]/g, "").replace(",", ".")
			);

			if (orderBy === "priceAsc") {
				return originalPriceA - originalPriceB;
			} else if (orderBy === "priceDesc") {
				return originalPriceB - originalPriceA;
			} else {
				return 0;
			}
		});

	return (
		<>
			<div className="absolute inset-0 -z-40 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			{isLoading ? (
				<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 dark:invert mx-auto ">
					<img
						src="/images/xboxicon.webp"
						alt=""
						className="h-[2.5rem] w-[2.5rem] loading-icon"
					/>
				</div>
			) : (
				<>
					<Header
						platform={platform}
						handlePlatformChange={handlePlatformChange}
						darkMode={darkMode}
						toggleDarkMode={toggleDarkMode}
					/>
					<section className="w-full px-4 md:px-8 leading-6 flex items-start justify-between md:items-start flex-col lg:flex-col gap-6 lg:gap-4">
						<Form setSearch={setSearch} />
						<article className="flex flex-col lg:flex-row lg:w-full justify-between w-full gap-1 text-[1rem]">
							<Filter filter={filter} handleFilterChange={handleFilterChange} />
							<div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
								<Platform
									platform={platform}
									handlePlatformChange={handlePlatformChange}
								/>
								<OrderBy
									orderBy={orderBy}
									handleOrderByChange={handleOrderByChange}
									filter={filter}
								/>
							</div>
						</article>
					</section>
					<Games
						datos={filteredAndSortedGames}
						search={search}
						platform={platform}
					/>
				</>
			)}
		</>
	);
}

export default App;

import React, { useState } from "react";

const SearchForm = ({ setSearch }) => {
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
		}
	};

	return (
		<form className="relative flex w-full lg:max-w-xs xl:max-w-sm items-center justify-between shadow-lg border border-gray-200">
			<svg
				className="absolute left-3 block h-5 w-5  text-[#4f4f4f]"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="11" cy="11" r="8" className=""></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
			</svg>
			<input
				name="search"
				id="searchInput"
				className="h-14 w-full rounded-md py-8 text-[0.95rem] pl-12 bg-gray-50 placeholder:text-[#6d6d6d] text-gray-700 outline-none"
				placeholder="Busca tu juego favorito aquí…"
				onChange={(e) => setSearch(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
		</form>
	);
};

export default SearchForm;

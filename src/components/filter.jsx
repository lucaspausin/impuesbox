import React from "react";

const filter = ({ filter, handleFilterChange }) => {
	return (
		<fieldset className="flex items-center gap-1 lg:justify-normal justify-between whitespace-nowrap">
			<span className="font-semibold dark:text-white text-black">
				Filtrar por :
			</span>
			<div className="flex items-center gap-[0.3rem]">
				<button
					type="button"
					className={`text-[#6d6d6d]  transition-all ease-in-out ${
						filter === "all"
							? "dark:focus:text-white dark:text-white text-black focus:text-black"
							: ""
					}`}
					onClick={() => handleFilterChange("all")}
				>
					Todos
				</button>
				<p className="text-[#888888]">|</p>
				<button
					type="button"
					className={`text-[#6d6d6d]  transition-all ease-in-out  ${
						filter === "free"
							? "dark:focus:text-white dark:text-white text-black focus:text-black"
							: ""
					}`}
					onClick={() => handleFilterChange("free")}
				>
					Gratis
				</button>
				<p className="text-[#888888]">|</p>
				<button
					type="button"
					className={`text-[#6d6d6d]  transition-all ease-in-out ${
						filter === "deals"
							? "dark:focus:text-white dark:text-white text-black focus:text-black"
							: ""
					}`}
					onClick={() => handleFilterChange("deals")}
				>
					Ofertas
				</button>
			</div>
		</fieldset>
	);
};

export default filter;

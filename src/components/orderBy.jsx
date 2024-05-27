import React from "react";

const orderBy = ({ orderBy, handleOrderByChange, filter }) => {
	return (
		<fieldset className="flex gap-1 lg:justify-normal items-center justify-between whitespace-nowrap">
			<span className="font-semibold dark:text-white text-black truncate">
				Ordenar por :
			</span>
			<div className="flex items-center gap-[0.3rem]">
				<button
					type="button"
					className={`text-[#6d6d6d] transition-all ease-in-out ${
						filter === "free"
							? "text-[#888888] cursor-not-allowed"
							: orderBy === "priceAsc"
							? "dark:focus:text-white dark:text-white text-black "
							: ""
					}`}
					onClick={() => handleOrderByChange("priceAsc")}
					disabled={filter === "free"}
				>
					Precio, asc
				</button>
				<p className="text-[#888888]">-</p>
				<button
					type="button"
					className={`text-[#6d6d6d] transition-all ease-in-out ${
						filter === "free"
							? "text-[#888888] cursor-not-allowed"
							: orderBy === "priceDesc"
							? "dark:focus:text-white dark:text-white text-black "
							: ""
					}`}
					onClick={() => handleOrderByChange("priceDesc")}
					disabled={filter === "free"}
				>
					Precio, desc
				</button>
			</div>
		</fieldset>
	);
};

export default orderBy;

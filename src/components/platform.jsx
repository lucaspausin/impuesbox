import React from "react";

const Platform = ({ platform, handlePlatformChange }) => {
	return (
		<fieldset className="flex gap-1 lg:justify-normal items-center justify-between whitespace-nowrap relative">
			<span className="font-semibold  text-black">Plataforma :</span>
			<div className="flex items-center gap-[0.3rem]">
				<button
					type="button"
					className={`text-[#6d6d6d] ${
						platform === "PC" ? " text-black" : "text-[#6d6d6d]"
					}`}
					onClick={() => handlePlatformChange({ target: { value: "PC" } })}
				>
					PC
				</button>
				<p className="text-[#888888]">-</p>
				<button
					type="button"
					className={`text-[#6d6d6d] ${
						platform === "Console" ? " text-black" : "text-[#6d6d6d]"
					}`}
					onClick={() => handlePlatformChange({ target: { value: "Console" } })}
				>
					Consola
				</button>

			</div>
		</fieldset>
	);
};

export default Platform;

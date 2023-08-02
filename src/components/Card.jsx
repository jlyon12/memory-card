function Card({ dexNum, name, imgURL }) {
	return (
		<div className=" relative p-4 flex flex-col justify-between items-center border-2 bg-slate-600 text-white rounded-lg shadow hover:shadow-lg hover:shadow-blue-400 transform hover:scale-105">
			<p className="absolute top-2 right-3 font-bold text-lg">{dexNum}</p>
			<img src={imgURL} alt={name} />
			<p className="tracking-wide text-xs md:text-lg font-bold uppercase">
				{name}
			</p>
		</div>
	);
}

export default Card;

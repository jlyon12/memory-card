function Header({ currentScore }) {
	return (
		<header className="flex justify-between items-center bg-gray-900 text-white p-4">
			<h1 className="font-bold text-xl">Memory Game</h1>
			<div className="flex flex-col items-end space-x-2">
				<p>
					Current Score: <span className="font-bold">{currentScore}</span>
				</p>
				<p>
					High Score: <span className="font-bold">10</span>
				</p>
			</div>
		</header>
	);
}
export default Header;

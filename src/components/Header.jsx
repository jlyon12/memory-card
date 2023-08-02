import PokeBall from "../assets/images/pokeball.svg";
function Header({ currentScore, highScore, roundNumber, gameDifficulty }) {
	return (
		<header className="flex justify-between items-center bg-gray-900 text-white p-4">
			<div className="flex gap-4">
				<img className="w-8" src={PokeBall} alt="PokeBall" />
				<h1 className="font-bold text-xl">Pokemon Guesser</h1>
			</div>
			{gameDifficulty && (
				<p>
					Difficulty:{" "}
					<span className="font-bold uppercase">{gameDifficulty}</span>
				</p>
			)}
		</header>
	);
}
export default Header;

import { useState, useEffect } from "react";
import Card from "./Card";

function Game({
	currentScore,
	setCurrentScore,
	highScore,
	setHighScore,
	gameDifficulty,
	roundNumber,
	setRoundNumber,
}) {
	const [allPokemon, setAllPokemon] = useState([]);
	const [gameCards, setGameCards] = useState([]);
	const [numberOfCards, setNumberOfCards] = useState(); //
	const [clickedCards, setClickedCards] = useState([]);

	useEffect(() => {
		switch (gameDifficulty) {
			case "easy":
				numberOfCards === undefined && setNumberOfCards(2);
				break;
			case "medium":
				numberOfCards === undefined && setNumberOfCards(4);
				break;
			case "hard":
				numberOfCards === undefined && setNumberOfCards(6);
				break;
			case "trainer":
				numberOfCards === undefined && setNumberOfCards(151);
				break;
		}
		setGameCards(
			[...allPokemon]
				.sort(() => Math.random() > 0.5, -1, +1)
				.slice(0, numberOfCards)
		);
	}, [allPokemon, gameDifficulty, numberOfCards]);

	useEffect(() => {
		async function fetchPokemon() {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151}");
			const data = await res.json();
			const keyedPokemon = [];
			data.results.forEach((pokemon) => {
				keyedPokemon.push({
					dexNum: data.results.indexOf(pokemon) + 1,
					name: pokemon.name,
				});
			});
			setAllPokemon(keyedPokemon);
		}

		fetchPokemon();
	}, []);

	function startNewRound() {
		setClickedCards([]);

		switch (gameDifficulty) {
			case "easy":
				setNumberOfCards((prev) => prev + 1);
				break;
			case "medium":
				setNumberOfCards((prev) => prev + 2);
				break;
			case "hard":
				setNumberOfCards((prev) => prev + 3);
				break;
			case "trainer":
				setNumberOfCards(151);
				break;
		}
		setRoundNumber(roundNumber + 1);
	}
	function handleCardClick(e) {
		const { dexnum } = e.target.closest("div").dataset;

		if (!clickedCards.includes(Number(dexnum))) {
			setClickedCards([...clickedCards, Number(dexnum)]);
			setCurrentScore((currentScore) => currentScore + 1);
			const shuffledCards = [...gameCards];
			setGameCards(shuffledCards.sort(() => Math.random() > 0.5, -1, +1));
		} else {
			setCurrentScore(0);
			setClickedCards([]);
			setNumberOfCards();
			setRoundNumber(1);
		}
	}
	return (
		<main className=" bg-slate-800 flex flex-col p-8 ">
			{numberOfCards === clickedCards.length && startNewRound()}
			{currentScore >= highScore && setHighScore(currentScore)}
			<div className="flex flex-col items-center gap-4 place-self-center text-white text-xl">
				<p>
					Round: <span className="font-bold">{roundNumber}</span>
				</p>
				<div className="flex gap-4">
					<p>
						Current Score: <span className="font-bold">{currentScore}</span>
					</p>
					<p>
						High Score: <span className="font-bold">{highScore}</span>
					</p>
				</div>
			</div>
			<section className="p-8 grid gap-6 grid-cols-fluid place-content-center my-auto ">
				{gameCards.map((pokemon) => (
					<Card
						key={pokemon.name}
						handleClick={handleCardClick}
						name={pokemon.name}
						dexNum={pokemon.dexNum}
						imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNum}.png`}
					/>
				))}
			</section>
		</main>
	);
}
export default Game;

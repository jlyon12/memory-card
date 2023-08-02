import { useState, useEffect } from "react";
import Card from "./Card";

function Game({
	setCurrentScore,
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
		<main className=" bg-slate-800 p-8 grid gap-6 grid-cols-3 md:grid-cols-4  lg:grid-cols-6 place-content-center ">
			{numberOfCards === clickedCards.length && startNewRound()}
			{gameCards.map((pokemon) => (
				<Card
					key={pokemon.name}
					handleClick={handleCardClick}
					name={pokemon.name}
					dexNum={pokemon.dexNum}
					imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNum}.png`}
				/>
			))}
		</main>
	);
}
export default Game;

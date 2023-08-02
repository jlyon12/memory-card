import { useState, useEffect } from "react";
import Card from "./Card";

function Game({ setCurrentScore }) {
	const [allPokemon, setAllPokemon] = useState([]);
	const [gameCards, setGameCards] = useState([]);
	const numberOfCards = 10;

	const [clickedCards, setClickedCards] = useState([]);
	useEffect(() => {
		setGameCards(
			[...allPokemon]
				.sort(() => Math.random() > 0.5, -1, +1)
				.slice(0, numberOfCards)
		);
	}, [allPokemon]);

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

	function handleCardClick(e) {
		const { dexnum } = e.target.closest("div").dataset;

		if (!clickedCards.includes(Number(dexnum))) {
			setClickedCards([...clickedCards, Number(dexnum)]);
			setCurrentScore((currentScore) => currentScore + 1);
		} else {
			setCurrentScore(0);
			setClickedCards([]);
		}
	}
	return (
		<main className=" bg-slate-800 p-8 grid gap-6 grid-cols-3 md:grid-cols-4  lg:grid-cols-6 place-content-center ">
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

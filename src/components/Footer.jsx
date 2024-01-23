import GitHubIcon from "../assets/images/github-mark-white.svg";

function Footer() {
	return (
		<footer className="flex gap-4 justify-center items-center p-4 bg-slate-800">
			<a
				className="  transform hover:scale-105 hover:rotate-12"
				href="https://github.com/jlyon12/memory-card"
			>
				<img className="w-8" src={GitHubIcon} alt="gitHub Icon" />
			</a>
		</footer>
	);
}

export default Footer;

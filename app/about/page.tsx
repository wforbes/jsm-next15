import Link from "next/link";

const About = () => {
	return (
		<>
			<h1 className="text-3xl">About</h1>
			<Link href="/" className="underline">Back to Home</Link>
		</>
	);
}

export default About
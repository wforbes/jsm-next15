import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | JSM - Next15",
	description: "The About page of JSM - Next15",
};

const AboutPage = () => {

	//throw new Error("Not implemented"); // for testing error boundary

	return (
		<>
			<h1 className="text-3xl">About</h1>
			<Link href="/" className="underline">Back to Home</Link>
		</>
	);
}

export default AboutPage
import Hello from "@/app/components/hello";

export default function Home() {
	console.log("What am I? - Server Component!");
	return (
		<>
			<h1 className="text-3xl">Welcome to Next.js 15!</h1>
			<Hello />
		</>
	);
}

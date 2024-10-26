import Link from "next/link";

const AnalyticsDashboard = () => {
	return (
		<>
			<h1 className="text-3xl">Analytics Dashboard</h1>
			<Link href="/dashboard" className="underline">Back to Dashboard</Link>
		</>
	);
}

export default AnalyticsDashboard

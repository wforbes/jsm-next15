import Link from "next/link";

const Dashboard = () => {
	return (
		<>
			<h1 className="text-3xl">Dashboard</h1>
			<Link href="/dashboard/users" className="underline">Users</Link>
			<br />
			<Link href="/dashboard/analytics" className="underline">Analytics</Link>
			<br />
			<Link href="/" className="underline">Back to Home</Link>
		</>
	);
}

export default Dashboard
import Link from "next/link";

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: object;
	},
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	}
}

const UsersDashboard = async () => {
	const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
	
	return (
		<>
			<h1 className="text-3xl">Users Dashboard</h1>
			<ul>
				{users && users.map((user: User) => (
					<li key={user.id}>
						<Link href={`/dashboard/users/${user.id}`} className="underline">{user.name}</Link>
					</li>
				))}
			</ul>
			<br />
			<Link href="/dashboard" className="underline">Back to Dashboard</Link>
		</>
	);
}

export default UsersDashboard
import Link from "next/link";
import { User } from "@/app/dashboard/users/page";

const UserDetailsPage = async ({ params }: { params: { id: number } }) => {
	const { id } = await params;
	const user: User = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

	return (
		<>
			<h1 className="text-3xl">User Details Page</h1>
			<p>User ID: {user.id}</p>
			<p>User Name: {user.name}</p>
			<p>User Username: {user.username}</p>
			<p>User Email: {user.email}</p>
			<p>User Phone: {user.phone}</p>
			<p>User Website: {user.website}</p>
			<p>User Company Name: {user.company.name}</p>
			<p>User Company Catch Phrase: {user.company.catchPhrase}</p>
			<p>User Company BS: {user.company.bs}</p>

			<Link href="/dashboard/users" className="underline">Back to Users</Link>
		</>
	);
}

export default UserDetailsPage
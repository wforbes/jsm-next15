import books from '@/app/api/db';

export async function GET() {
	return Response.json(books);
}

export async function POST(request: Request) {
	const body = await request.json();
	// get the last id and add 1 to it
	const id = books[books.length - 1].id + 1;
	body.id = id;
	books.push(body);
	return Response.json(books);
}


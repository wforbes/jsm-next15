import books from '@/app/api/db';

type Params = { id: string }

// Wasted alot of time on the error thrown here:
// "Error: Route "/books/[id]" used `params.id`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"
// I expect that this is a bug with Next.js 15, as I see recent PR related to Pages that deal with a similar params issue.
// I'm bummed.
export async function GET(_: Request, { params }: { params: Promise<Params> }) {
	const p = await params;
	const id = p?.id;
	const book = books.find((book) => book.id === +id);
	return Response.json(book);
}

export async function PUT(request: Request, context: { params: { id: string } }) {
	const id = +context.params.id;
	const book = await request.json();
	const index = books.findIndex((book) => book.id === id);
	books[index] = book;
	return Response.json(books);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
	const p = await params;
	const id = p?.id;
	const index = books.findIndex((book) => book.id === +id);
	books.splice(index, 1);
	return Response.json(books)
}

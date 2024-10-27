import books from '@/app/api/db';

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
	console.log('DELETE', books);
	return Response.json(books);
}

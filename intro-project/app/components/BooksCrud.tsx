'use client';

import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Book = {
	id: number | null;
	name: string;
	author: string;
}

const BooksCrud = () => {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch('http://localhost:3000/api/books');
			const books = await response.json();
			setBooks(books);
		}
		fetchBooks();
	}, []);

	const handleSubmit = async (formData: FormData) => {
		const book = {
			name: formData.get('name') as string,
			author: formData.get('author') as string,
		}
		const response = await fetch('http://localhost:3000/api/books', {
			method: 'POST',
			body: JSON.stringify(book),
		});
		const data = await response.json();
		setBooks(data);
	}

	const handleDelete = async (id: number) => {
		const response = await fetch(`http://localhost:3000/api/books/${id}`, { method: 'DELETE' });
		const data = await response.json();
		console.log('DELETE', data);
		setBooks(data);
	}

	return (
		<div>
			{books.map((book: Book) => <div
				key={book.id}>
				<Link href={`/books/${book.id}?title=${book.name}`}>{book.name} &nbsp; ({book.author}, {book.id}) &nbsp;</Link>
				<button className="bg-red-500 text-white p-2 rounded-md" onClick={() => handleDelete(book.id as number)}>Delete</button>
			</div>
			)}
			<br />
			<br />
			<form action={handleSubmit} className="flex flex-col ml-3 w-[30%]">
				<input type="text" name="name" placeholder="Name" className="mb-2 p-2 rounded-md text-black" />
				<input type="text" name="author" placeholder="Author" className="mb-2 p-2 rounded-md text-black" />
				<button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add Book</button>
			</form>
			<br />
			<Link href="/" className="underline">Go back to Home</Link>
		</div>
	)
}

export default BooksCrud
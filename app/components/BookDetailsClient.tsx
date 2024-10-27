'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Book = {
	id: number;
	name: string;
	author: string;
}

const BookDetailsClient = ({ id }: { id: string }) => {
	const [book, setBook] = useState<Book | null>(null);
	useEffect(() => {
		const fetchBook = async () => {
			const response = await fetch(`http://localhost:3000/api/books/${id}`);
			const book = await response.json();
			setBook(book);
		}
		fetchBook();
	}, [id]);

  return (
	<div>
		<h1>Book Details</h1>
		{book && <div>{book.name} by {book.author}</div>}
		{!book && <div>Loading...</div>}
			<br />
			<Link href="/books">Back to Books</Link>
		</div>
	)
}

export default BookDetailsClient
import { Metadata } from 'next';
import BooksCrud from '@/app/components/BooksCrud';

export const metadata: Metadata = {
	title: "Books | JSM - Next15",
	description: "The Books page of JSM - Next15",
};

export default function BooksPage() {
	return (
		<BooksCrud />
	)
}
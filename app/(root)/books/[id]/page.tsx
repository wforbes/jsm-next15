import BookDetailsClient from '@/app/components/BookDetailsClient';

export const generateMetadata = async ({ searchParams }: { searchParams: { title: string } }) => {
	const sp = await searchParams;
	return {
		title: `${sp.title} | Book Details Page`,
		description: `Book Details Page for ${sp.title}`,
	}
}

const BookDetails = ({ params }: { params: { id: string, title: string } }) => {
	return (<BookDetailsClient id={params.id} />)
}

export default BookDetails
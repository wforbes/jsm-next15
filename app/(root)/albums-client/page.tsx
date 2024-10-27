import AlbumsClient from '@/app/components/AlbumsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Albums | JSM - Next15",
	description: "The Albums page of JSM - Next15",
};

const AlbumsClientPage = () => {
	return <AlbumsClient />
}

export default AlbumsClientPage
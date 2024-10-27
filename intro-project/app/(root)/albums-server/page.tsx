import AlbumCardGrid from '@/app/components/AlbumCardGrid';
import { Suspense } from 'react';
import { Metadata } from 'next';

export type Album = {
	id: number;
	title: string;
	photo: string | null;
}

export const metadata: Metadata = {
	title: "Albums | JSM - Next15",
	description: "The Albums page of JSM - Next15",
};

async function AlbumsServerPage() {
	return (
		<>
			<div className="flex flex-col items-center justify-center mx-[30%]">
				<h1 className="text-2xl font-bold mb-4">Albums Page</h1>
				<p className="text-gray-500 mb-4">Demonstrating client-side data fetching</p>
				<br />
				<Suspense fallback={<div>Loading Albums...</div>}>
					<AlbumCardGrid />
				</Suspense>
			</div>
		</>
	)
}

export default AlbumsServerPage
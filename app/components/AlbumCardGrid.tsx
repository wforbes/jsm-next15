import React from 'react'
import { Album } from '@/app/(root)/albums-server/page';
import AlbumCardImage from './AlbumCardImage';

export const revalidate = 3600; // ISR example 1: revalidate at most every hour

const AlbumCardGrid = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/albums');
	if (!response.ok) throw new Error('Failed to fetch albums');
	const albums = await response.json();

	const photoResponse = await fetch('https://api.pexels.com/v1/curated?per_page=80&page=1', {
		headers: { Authorization: '9YEeCzDCy9ci6EstoAPfXxMJKN55KgJTvrNtkRuQE54OGx200cwNHtC7' },
		next: { revalidate: 3600 } // ISR example 2: revalidate at most every hour
	});
	if (!photoResponse.ok) throw new Error('Failed to fetch photos');
	const data = await photoResponse.json();

	albums.forEach((album: Album) => {
		album.photo = data?.photos?.[album.id]?.src?.small ?? null;
	});

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
			{albums.map((album: Album) => (
				<div key={album.id} className="bg-white shadow-md rounded-lg p-4 transition hover:scale-105 hover:shadow-xl border-2 border-gray-200 flex flex-col items-center justify-center">
					<AlbumCardImage album={album} />
					<div className="text-lg font-bold text-black mb-2">{album.title}</div>
					<div className="text-sm text-gray-500">Album ID: {album.id}</div>
				</div>
			))}
		</div>
	)
}

export default AlbumCardGrid
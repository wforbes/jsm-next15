'use client'

import { useEffect, useState } from 'react'

type Album = {
	id: number;
	title: string;
}

const AlbumsClientPage = () => {
	const [albums, setAlbums] = useState<Album[]>([]);

	useEffect(() => {
		const fetchAlbums = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/albums');
				const data = await response.json();
				setAlbums(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchAlbums();
	}, []);

	useEffect(() => {
		console.log(albums);
	}, [albums]);

	return (
		<>
			<div className="flex flex-col items-center justify-center mx-[30%]">
				<h1 className="text-2xl font-bold mb-4">Albums Page</h1>
				<p className="text-gray-500 mb-4">Demonstrating client-side data fetching</p>
				<br />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
					{albums.map(album => (
						<div key={album.id} className="bg-white shadow-md rounded-lg p-4 transition hover:scale-105 hover:shadow-xl border-2 border-gray-200">
							<div className="text-lg font-bold text-black mb-2">{album.title}</div>
							<div className="text-sm text-gray-500">Album ID: {album.id}</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default AlbumsClientPage
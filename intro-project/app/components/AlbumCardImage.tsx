import Image from 'next/image';
import { Album } from '@/app/(root)/albums-server/page';
type AlbumImageProps = {
	album: Album;
}

export default function AlbumCardImage({ album }: AlbumImageProps) {
	return <Image src={album.photo ?? '/missing-album.jpg'} alt={album.title} className="h-auto w-auto" width={100} height={100} />;
}
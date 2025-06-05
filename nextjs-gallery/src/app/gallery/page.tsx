import Image from "next/image";
import Link from "next/link";
import { PhotoType } from "../types/Photo";

const getPhotos = async (): Promise<PhotoType[]> => {
    const response = await fetch('http://localhost:3000/api/photos')

    return response.json();
}

export default async function Gallery() {
    const photos = await getPhotos();

    return <>
        <h1 className="text-center text-xl h-15 leading-15 items-center">Gallery</h1>
        <div className="grid grid-cols-7 gap-4 px-4">
            {
                photos.map(photo => (
                    <Link key={photo.id}
                        href={`gallery/${photo.id}`}
                    >
                        <Image 
                            src={photo.thumbnailUrl} 
                            alt={photo.title} 
                            width={300}
                            height={300}
                        />
                    </Link>
                ))
            }
        </div>
    </>;
}

import Image from "next/image"
import { PhotoType } from "../../types/Photo";

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({params}: Props) => {
    const {id} = await params
    const res = await fetch(`http://localhost:3000/api/photos/${id}`)
    const photo: PhotoType = await res.json();

    return <>
        <h1 className="text-center py-5">Title: {photo.title}</h1>
        <div className="flex justify-center items-center">
            <Image 
                src={photo.url} 
                alt={photo.title} 
                width={600}
                height={600}
            />
        </div>
    </>
}

export default page;
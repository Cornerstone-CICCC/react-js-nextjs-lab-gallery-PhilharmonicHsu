import Image from "next/image"
import Link from "next/link"
import { PhotoType } from "../../../types/Photo";


type Props = {
  params: Promise<{ id: string }>
}

const page =  async ({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/photos/${id}`)
  const photo: PhotoType = await res.json()

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black p-3 w-1/3">
        <div className="flex justify-center items-center">
            <Image
                src={photo.url} 
                alt={photo.title} 
                width={600}
                height={600}
            />
        </div>
        <div>
            <Link href="/gallery">Close</Link>
        </div>
      </div>
    </div>
  )
}

export default page
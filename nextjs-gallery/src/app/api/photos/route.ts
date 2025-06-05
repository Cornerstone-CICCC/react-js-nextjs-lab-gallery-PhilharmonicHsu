import { NextResponse } from "next/server";

export async function GET(
  _: Request,
) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=100`)
  const photos = await response.json()

  if (!photos) return NextResponse.json({
    error: "Photos not found!"
  }, {
    status: 404
  })

  const formattedPhoto = photos.map(photo => {
    const color = photo.url.split('/').pop()

    photo.url = `https://placehold.co/1000x1000/${color}/FFF`
    photo.thumbnailUrl = `https://placehold.co/300x300/${color}/FFF`

    return photo;
  })

  return NextResponse.json(formattedPhoto)
}
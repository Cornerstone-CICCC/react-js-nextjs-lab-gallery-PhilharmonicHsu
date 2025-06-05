import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params } : { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json();

    if (!photo) return NextResponse.json({
        error: "Photo not found!"
    }, {
        status: 404
    })

    const color = photo.url.split('/').pop()

    photo.url = `https://placehold.co/1000x1000/${color}/FFF`
    photo.thumbnailUrl = `https://placehold.co/300x300/${color}/FFF`

    return NextResponse.json(photo)
}
import Image from 'next/image';
import { use } from 'react';
async function getPosts() {
  let places = await fetch('https://amrtago.vercel.app/place/find/Place');
  return places.json();
}

export async function generateStaticParams() {
  const places = await use(getPosts());

  return places.map((place) => ({ id: place._id }));
}

export default async function Place({ params }) {
  const [place] = await use(getPosts(params.id));
  return (
    <div>
      <div>{place.placeId}</div>
      <Image
        src={`https://skydigitmm.com/gotripapi/${place?.images[0]?.pathimages}`}
        alt={rest.placeId}
        sizes="100vh"
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '15px',
        }}
      />
    </div>
  );
}

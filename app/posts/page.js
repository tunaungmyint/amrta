// import Image from 'next/image';
import { use } from 'react';

async function getPosts() {
  let posts = await fetch('https://amrtago.vercel.app/place/find/Rest');
  return posts.json();
}
export default function Page() {
  let posts = use(getPosts());
  console.log(posts);
  return (
    <main>
      <h3>Posts from dummyjson.com</h3>
      <ul>
        {posts.slice(1, 5).map((post) => (
          <li key={post.placeId}>
            <h4>{post.placeType}</h4>

            <h5>{post.remark}</h5>
            <h5>
              {post?.images.map((i) => (
                <div key={i._id}>
                  {/* <Image
                    src={`https://skydigitmm.com/gotripapi/${i?.pathimages}`}
                    alt={i.description}
                    width={200}
                    height={150}
                  /> */}
                  <h5>{`https://skydigitmm.com/gotripapi/${i?.pathimages}`}</h5>
                  <h5>{i?.description}</h5>
                </div>
              ))}
            </h5>
            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
}

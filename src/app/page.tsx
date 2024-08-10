import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/dba791d4-db3b-46f3-ae7f-df64ebcd25e1-r97g75.jpg",
  "https://utfs.io/f/9f3031c1-fdcc-4f34-8e99-b22f876b7933-jt5u4q.jpg",
  "https://utfs.io/f/614092f4-0ca0-41bb-ad11-d06a88c3a1d8-xnsun8.jpg"
]

const mockImages = mockUrls.map((url, index) => ({id: index + 1, url}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-1/4 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}

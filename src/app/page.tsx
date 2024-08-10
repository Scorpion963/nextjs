import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/dba791d4-db3b-46f3-ae7f-df64ebcd25e1-r97g75.jpg",
  "https://utfs.io/f/9f3031c1-fdcc-4f34-8e99-b22f876b7933-jt5u4q.jpg",
  "https://utfs.io/f/614092f4-0ca0-41bb-ad11-d06a88c3a1d8-xnsun8.jpg"
]

const mockImages = mockUrls.map((url, index) => ({id: index + 1, url}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-1/4 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}

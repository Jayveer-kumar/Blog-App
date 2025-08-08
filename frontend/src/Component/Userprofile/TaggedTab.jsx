export default function TaggedTab() {
  const posts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1581332411731-daccdb5f2fa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      badge: "UI",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1753899548245-8af1fce6c24f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      badge: "UI",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1535408190508-be4c21946da6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      badge: "BR",
    },
  ];
  return (
    <div>
      <div className="pt-2 grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="relative">
            <img src={post.img} alt="post" className="rounded-xl shadow-lg" />
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              {post.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

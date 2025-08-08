export default function ProfilePosts() {
  const posts = [
    { id: 1, img: "https://images.unsplash.com/photo-1754430543609-aae159c530ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", badge: "UI" },
    { id: 2, img: "https://images.unsplash.com/photo-1754415267107-8a1f75a6a366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", badge: "UI" },
    { id: 3, img: "https://plus.unsplash.com/premium_photo-1754339271148-4a0add0da699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D", badge: "BR" },
    // Add more mock data
  ];

  return (
    <div  className="user-profile-posts-container">
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

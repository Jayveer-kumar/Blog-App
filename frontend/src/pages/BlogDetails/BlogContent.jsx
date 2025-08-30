import "./BlogContent.css";

export default function BlogContent({ blocks , onImageClick  }) {
  return (
    <div className="blog-content">
      {blocks.map((block) => {
        if (block.type === "header") {
          const Tag = `h${block.data.level}`; // dynamic h1, h2, h3
          return <Tag key={block.id}>{block.data.text}</Tag>;
        }

        if (block.type === "paragraph") {
          return <p key={block.id}>{block.data.text}</p>;
        }

        if (block.type === "image") {
          return (
            <div key={block.id} className="blog-image" onClick={() => onImageClick(block.data.file.url)} >
              <img src={block.data.file.url} alt={block.data.caption || "Blog image"} />
              {block.data.caption && <span>{block.data.caption}</span>}
            </div>
          );
        }

        return null; // unknown type
      })}
    </div>
  );
}


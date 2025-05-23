import { Post as PostType } from '../types/Post';

interface Props {
  post: PostType;
  isNew?: boolean;
}

const Post: React.FC<Props> = ({ post, isNew }) => {
  const isHighlighted = post.author === 'Diane';

  return (
    <div style={{ backgroundColor: isHighlighted ? '#e0f7fa' : 'white', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{post.title} {isNew && <span style={{ color: 'red' }}>New!</span>}</h2>
      <p><strong>{post.author}</strong> — {post.date}</p>
      <p>{post.content.slice(0, 50)}...</p>
    </div>
  );
};

export default Post;

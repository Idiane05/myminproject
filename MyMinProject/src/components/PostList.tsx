import Post from './Post';
import { Post as PostType } from '../types/Post';
import styles from '../styles/PostList.module.css';

const posts: PostType[] = [
  {
    id: 1,
    title: 'Understanding Props in React',
    author: 'Diane',
    content: 'Props are how components talk to each other...',
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 2,
    title: 'CSS Modules in React',
    author: 'Alex',
    content: 'Using CSS modules helps you avoid class name collisions...',
    date: '2024-05-10',
  },
];

const PostList: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={styles.postList}>
      {posts.map(post => (
        <Post key={post.id} post={post} isNew={post.date === today} />
      ))}
    </div>
  );
};

export default React.memo(PostList);

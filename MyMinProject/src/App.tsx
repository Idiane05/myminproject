import Header from './components/Header';
import PostList from './components/PostList';
import withLogger from './hoc/withLogger';

const PostListWithLogger = withLogger(PostList);

function App() {
  return (
    <div>
      <Header />
      <PostListWithLogger />
    </div>
  );
}

export default App;

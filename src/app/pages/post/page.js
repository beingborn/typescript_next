import Post from '../../components/Post.tsx';

const PostPage = () => {
    return (
        <div>
            Post 페이지
            <Post author="장미쉘" body="ReactIsAweSome" />
            <Post author="장미쉘2" body="ReactIsAweSome2" />
            <Post author="장미쉘2" body="ReactIsAweSome3" />
        </div>
    );
};

export default PostPage;

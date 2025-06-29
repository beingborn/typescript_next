import styles from './Post.module.css';
import clsx from 'clsx';

interface PostProps {
    author: string;
    body: string;
}

const Post = ({ author, body }: PostProps) => {
    return (
        <div className={clsx(styles.post, `bg-blue-50 my-4 p-4 rounded-lg shadow-md rounded-lg`)}>
            <p className="text-xs font-bold">{author}</p>
            <p className="text whitespace-pre-wrap text-xl mt-1">{body}</p>
        </div>
    );
};

export default Post;

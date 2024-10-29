import Layout from '../components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
	const [Posts, setPosts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:8000/posts').then(res => {
			console.log(res.data);
			setPosts(res.data);
		});
	}, []);
	return (
		<Layout title='Post'>
			{Posts.map(post => {
				return (
					<h3 key={post.id}>
						<Link to={`/detail/${post.slug}`}>{post.title}</Link>
					</h3>
				);
			})}
		</Layout>
	);
}

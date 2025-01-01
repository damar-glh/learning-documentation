import postsData from "../../posts.json";
import Article from "../components/Article.jsx";
import Search from "../components/Search.jsx";
import {useState} from "react";

export default function Index() {
    const [posts, setPosts] = useState(postsData);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((post) => {
            return post.title.toLowerCase().includes(value.toLowerCase());
        });
        setPosts(filteredPosts);
    }

    return (
        <>
            <Search onSearchChange={onSearchChange}/>
            <div className="card">
                {posts.map((props, index) => (
                    <Article {...props} key={index}/>
                ))}
            </div>
        </>
    );
}
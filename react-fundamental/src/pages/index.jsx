import { useMemo, useState } from 'react';
import rawPosts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';

function HomePage(){
    const [search,setSearch] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const posts = useMemo(() => {
        return rawPosts.filter(({title}) => title.includes(search))
    }, [search])

    return (
        <>
            <h1>Simple Blog</h1>
            <Search handleSearch={handleSearch} />
            <small>Data yang anda cari adalah {search}</small>
            {posts.length === 0 ? (
                <div>
                    <h2>Postingan yang anda cari tidak ada</h2>
                </div>
            ) : posts.map((post) => (
                <Article key={post.id} {...post} />
            ))}
        </>
    )
}

export default HomePage;
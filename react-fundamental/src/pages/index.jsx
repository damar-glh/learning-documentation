import { useMemo, useState } from 'react';
import rawPosts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';

function HomePage(){
    const [search,setSearch] = useState("");
    const [totalPost, setTotalPost] = useState(0);

    const posts = useMemo(() => {
        const filteredPosts = rawPosts.filter(({title}) => title.includes(search));
        setTotalPost(filteredPosts.length);
        return filteredPosts;
    }, [search])

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    return (
        <>
            <h1>Simple Blog</h1>
            <Search handleSearch={handleSearch} totalPost={totalPost} />
            <small>Ditemukan {totalPost} Data yang anda cari yaitu {search} sebagai berikut : </small>
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
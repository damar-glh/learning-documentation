import { useState } from 'react';
import posts from '../posts.json'
import Article from '../components/Article'

function HomePage(){
    const [search, setSearch] = useState("")

    const changeSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
            <h1>Simple Blog</h1>
            <div className="">Cari Artikel : <input type="text" onChange={changeSearch} />{" "}</div>
            <small>Data yang anda cari adalah {search}</small>
            {posts.map(({id, title, tags, date}) => (
                <Article key={id} {...{id, title, tags, date}} />
            ))}
        </>
    )
}

export default HomePage;
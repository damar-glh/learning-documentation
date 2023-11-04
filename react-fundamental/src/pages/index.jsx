import posts from '../posts.json'
import Article from '../components/Article'

function HomePage(){
    return (
        <>
            <h1>Simple Blog</h1>
            {posts.map((blog) => (
                <Article key={blog.id} id={blog.id} title={blog.title} tags={blog.tags} date={blog.date} />
            ))}
        </>
    )
}

export default HomePage;
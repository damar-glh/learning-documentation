export default function Article(props) {
    return (
        <div className="card-post">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <div className="container">
                <p>{props.tags.join(", ")}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}
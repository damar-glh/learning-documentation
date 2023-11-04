
function Article (props) {
    return (
        <>
            <h1>{props.id}</h1>
            <div>{props.title}</div>
            <small>Tags:{props.tags}</small>
            <br />
            <small>Date:{props.date}</small>
        </>
    )
}

export default Article
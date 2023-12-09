const ArticleStatus = ({isNew}) => {
    return isNew && <span>-- New Article</span>
}

const NewArticle = () => {
    return <span>-- New Article</span>
}

function Article (props) {
    return (
        <>
            <h1>{props.id}</h1>
            <div>{props.title}</div>
            <small>Tags:{props.tags}</small>
            <br />
            <small>Date:{props.date}</small>
            <ArticleStatus isNew={props.isNew}/>
            {props.isNew && <NewArticle />}
        </>
    )
}

export default Article
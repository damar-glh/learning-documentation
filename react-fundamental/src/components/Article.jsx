
function Article () {
    const name = "Damaraaa.";
    const titles = ["Tutorial ReactJS", "Tutorial Next", "Tutorial NodeJS"];

    return (
        <>
            <div>{name}</div>
            <div>
                {titles.map((title) => {
                    return (
                        <>
                            <div>{title}</div>
                            <div>{title}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Article
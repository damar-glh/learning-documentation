import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
import React, {Suspense} from "react";
import Loading from "../Components/LoaderPage";

const LazyWrap = (Component) => {
    return (props) => (
        <Suspense fallback={<Loading/>}>
            <Component {...props}/>
        </Suspense>
    );
}

export default LazyWrap;
import Header from "../../Pages/Header/Header.jsx";
import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}
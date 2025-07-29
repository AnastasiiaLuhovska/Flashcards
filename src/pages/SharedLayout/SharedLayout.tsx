import Header from "../../Components/Header/Header.tsx";
import {Outlet} from "react-router";

const SharedLayout = () => {
    return (
        <div className='container'>
            <Header/>
            <Outlet/>
        </div>
    );
};


export default SharedLayout;
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/others/Home';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
        </>
    );
};

export default AllRoutes;
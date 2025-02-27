import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FirebaseProvider from '../FirebaseProvider/FirebaseProvider';

const Root = () => {
    return (
        <div >
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <FirebaseProvider text={"hello"}></FirebaseProvider>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer className='max-w-6xl mt-10 w-full'></Footer>
            </div>
        </div>
    );
};

export default Root;
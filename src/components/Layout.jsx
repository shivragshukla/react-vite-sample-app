import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './styles.css'

function Layout() {
    return (
        <div className="container">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout

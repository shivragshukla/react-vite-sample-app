import Home from '../pages/Home';
import Footer from './Footer';
import Header from './Header';
import './styles.css'

function Layout() {
    return (
        <div className="container">
            <Header />
            <main className="content">
                <Home></Home>
            </main>
            <Footer />
        </div>
    );
}

export default Layout

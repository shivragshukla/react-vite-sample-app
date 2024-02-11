import Footer from './Footer';
import Header from './Header';
import './styles.css'

function Layout() {
    return (
        <div className="container">
            <Header />
            <main className="content">
                <div>
                    <h1 className='title'>Home page</h1>
                    <p>This is a basic page</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout

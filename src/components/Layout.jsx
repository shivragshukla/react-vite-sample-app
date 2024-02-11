import './styles.css'

function Layout() {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <h3>Company Logo</h3>
                </div>
                <nav className="menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                </nav>
            </header>
            <main className="content">
                <div>
                    <h1 className='title'>Home page</h1>
                    <p>This is a basic page</p>
                </div>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Basic react site </p>
            </footer>
        </div>
    );
}

export default Layout

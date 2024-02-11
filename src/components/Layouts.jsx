
function Layout() {
    return (
        <div>
            <header>
                <div>
                    <h3>Logo</h3>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Products</a>
                </nav>
            </header>
            <main>
                <div>
                    <p>This is a basic page</p>
                </div>
            </main>
            <footer>
                &copy; {new Date().getFullYear()} Basic react site
            </footer>
        </div>
    );
}

export default Layout

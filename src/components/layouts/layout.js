const Layout = ({ children }) => {
    return (
        <>
            <header>
                <p>Petite image qui va bien</p>
            </header>

            <main>
                { children }
            </main>

            <footer>Merci du temps que vous avez pris à lire</footer>
        </>
    );
}

export default Layout;
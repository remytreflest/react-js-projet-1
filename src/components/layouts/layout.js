import file  from '../../assets/datas/datas.json'

const Layout = ({ children, img }) => {
    return (
        <>
            <header>
                <img
                    src={img}
                    alt='la petite image qui va bien'
                    style={{ width: '100%', maxWidth: '1080px', height: 'auto' }}
                />
            </header>

            <main>{children}</main>

            <footer>{ file.footerText }</footer>
        </>
    )
}

export default Layout

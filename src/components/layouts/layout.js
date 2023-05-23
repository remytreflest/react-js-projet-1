import file  from '../../assets/datas/datas.json'
import Navigation from '../Navigation'

const Layout = ({ children, img }) => {
    return (
        <>
            <Navigation />

            <main>{children}</main>

            <footer>{ file.footerText }</footer>
        </>
    )
}

export default Layout

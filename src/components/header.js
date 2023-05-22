const Header = ({ src }) => {

    return (
        <section className="header-contener">
            <img className="header-img" src={ src } />
            <p className="header-text"><span className="header-black-color">Port</span>folio de Rémy</p>
        </section>
    )
}

export default Header
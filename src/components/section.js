const Section = ({ children, title }) => {

    return (
        <section>
            <div className="card m-3">
                <div className="card-header card-header-section">{ title }</div>
                <div className="card-body">{ children }</div>
            </div>
        </section>
    )
}

export default Section
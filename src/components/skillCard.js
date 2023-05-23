import { Link, useParams } from 'react-router-dom'
import file from '../assets/datas/datas.json'

const SkillCard = () => {
    const { id } = useParams()
    const data = file.competences.find((item) => item.id == id)

    return (
        <div className='card text-center m-3'>
            <div className='card-header card-header-subsection'>{data.name}</div>
            <div className='card-body'>
                <p className='card-text'>{data.description}</p>
            </div>
            <div className='card-footer text-muted'>
                <Link to='/'>{`Retour à l'accueil`}</Link>
            </div>
        </div>
    )
}

export default SkillCard

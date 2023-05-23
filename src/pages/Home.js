import image from '../assets/img/background.jpg'
import Layout from '../components/layouts/layout'
import Card from '../components/card'
import Section from '../components/section'
import file  from '../assets/datas/datas.json'
import { Link } from 'react-router-dom'

const Home = () => {

    const compdata = file.competences.map((competence) => 
    {
        return <li key={competence.id}><Link to={`/competences/${competence.id}`}>{competence.name}</Link></li>
    })

    const diplomesdata = file.diplomes.map((diplome) => 
    {
        return <li key={diplome.id}>{diplome.name}</li>
    })

    const interetsdata = file.interets.map((interet) => 
    {
        return <li key={interet.id}>{interet.name}</li>
    })

    const expData = file.experiences.map((experience) => 
    {      
        return <Card key={experience.id} title={experience.title} experience={experience.description} data={experience.date} />
    });

    const formData = file.formations.map((formation) => 
    {      
        return <Card key={formation.id} title={formation.title} experience={formation.description} data={formation.date} />
    });

    return (
        <>
                <img
                    src={image}
                    alt='la petite image qui va bien'
                    style={{ width: '100%', maxWidth: '1080px', height: 'auto' }}
                />

                <Section>
                    <div>{ file.presentation }</div>
                </Section>

                <Section title="Competences">
                    <ul>{ compdata }</ul>
                </Section>

                <Section title="Expériences">
                    { expData }
                </Section>

                <Section title="Formations">
                    { formData }
                </Section>

                <Section title="Diplômes">
                    <ul>{ diplomesdata }</ul>
                </Section>

                <Section title="Centre d'intérêt">
                    <ul>{ interetsdata }</ul>
                </Section>

                <Section title="Url de votre site ou git">
                    <a href={ file.urlGit } target="_blank" rel="noreferrer">Dépôt Git</a>
                </Section>

            </>
    )
}

export default Home

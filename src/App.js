import './App.css'
import image from './assets/img/background.jpg'
import Layout from './components/layouts/layout'
import Card from './components/card'
import Section from './components/section'
import file  from './assets/datas/experiences.json'

function App() {

    const compdata = file.competences.map((competence) => 
    {
        return <li key={competence.id}>{competence.name}</li>
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
        <div className='App'>
            <Layout img={ image }>

                <Section>
                    <div>{`Bonjour je m'appelle Rémy Treflest et je vais vous conter mon histoire`}</div>
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

            </Layout>
        </div>
    )
}

export default App

import './App.css'
import img from './logo.svg'
import Header from './components/header'
import Layout from './components/layouts/layout'
import Card from './components/card'
import Section from './components/section'

function App() {
    return (
        <div className='App'>
            <Layout>

                <Section>
                    <div>{`Bonjour je m'appelle Rémy Treflest et je vais vous conter mon histoire`}</div>
                </Section>

                <Section title="Competences">

                    <ul>
                        <li>C#</li>
                        <li>Blazor</li>
                        <li>WPF</li>
                        <li>API Rest</li>
                    </ul>
                </Section>

                <Section title="Expériences">
                    <Card title="Développeur C#Développeur C#" experience="EBP Informatique · Contrat en alternance. Blazor, MVC, .NET , Azure (AD, CI / CD), SQL Serveur, Docker, Kubernetes, API, TU, Méthodologie Agile, WPF, MVVM" date="sept. 2021 - aujourd’hui · 1 an 9 mois"></Card>
                    <Card title="Développeur Web" experience="Création / optimisation / ajout de fonctionnalités concernant un site internet de petites annonces (wordpress, dokan, woocommerce) avec back-up client régulier (git lab, board issues, whereby)." date="mai 2021 - juil. 2021 · 3 mois"></Card>
                    <Card title="Infirmier" experience="Ramsay Général de Santé | Hôpital public de Rambouillet - Chirurgie" date="oct. 2013 - sept. 2020 · 7 ans"></Card>
                </Section>

                <Section title="Formations">
                    <Card title="Bachelor Développement" experience="On y fait beaucoup de choses" date="octobre 2022 - aujourd’hui · 8 mois"></Card>
                    <Card title="BTS SIO option SLAM" experience="Les bases du développement on été vu ici" date="octobre 2020 - juil. 2022 · 2 ans"></Card>
                    <Card title="Infirmier" experience="Cours pour apprendre à soigner des gens" date="oct. 2010 - sept. 2013 · 3 ans"></Card>
                </Section>

                <Section title="Diplômes">
                    <ul>
                        <li>BTS SIO option SLAM</li>
                        <li>Licence Infirmier</li>
                    </ul>
                </Section>

                <Section title="Centre d'intérêt">
                    <ul>
                        <li>Apprendre</li>
                        <li>Lecture</li>
                        <li>Jeux</li>
                        <li>Permaculture</li>
                    </ul>
                </Section>

                <Section title="Url de votre site ou git">
                    <a href="https://github.com/remytreflest/react-js-projet-1">Dépôt Git</a>
                </Section>

            </Layout>


        </div>
    )
}

export default App

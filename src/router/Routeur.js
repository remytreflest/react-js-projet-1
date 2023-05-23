import { BrowserRouter  as Router ,Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from './Error';
import Layout from '../components/layouts/layout';
import SkillCard from '../components/skillCard';

const Routeur = ({ text }) => {
    return (
        <Router>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/competences/:id" element={<SkillCard/>} />
                        <Route path="*" element={<Error text="404" />} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    )
}

export default Routeur

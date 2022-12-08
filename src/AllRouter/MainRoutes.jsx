

import {Routes,Route} from 'react-router-dom'
import AboutMe from '../components/About'
import ContactMe from '../components/Contact'
import HomePage from '../components/Home'
import Project from '../components/Projects'
import Skill from '../components/Skills'

function MainRoutes(){

return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutMe/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/contact' element={<ContactMe/>} />
    </Routes>
)

}

export default MainRoutes
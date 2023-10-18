import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import './App.css'
import Navbar from '../../Components/Navbar'
import NotFound from '../NotFound'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/contacto', element: <Contact /> },
        { path: '/*', element: <NotFound /> }
        
    ])
    return routes
}
const App = () => {
    return (
        <BrowserRouter>
            <Navbar /><br />
            <AppRoutes />
           
            </BrowserRouter>

    )
}
export default App
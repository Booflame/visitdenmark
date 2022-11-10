import '../css/navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    
    return(
        <nav className='primary-nav'>
            <ul>
                <li><NavLink to="/">Hej</NavLink></li>
                <li><NavLink to="/">Heej</NavLink></li>
                <li><NavLink to="/">Heeej</NavLink></li>
                <li><NavLink to="/">Heeeej</NavLink></li>
            </ul>
        </nav>
    )
}
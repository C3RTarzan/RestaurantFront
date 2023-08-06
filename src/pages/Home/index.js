import './styles.scss';
import './stylesMedia.scss';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom'

function Home(){
    return(
        <>
        <div className="Logo">
            <div>
                <span>LOGO</span>
            </div>
        </div>
        <div className="Button">
            <NavLink to="Administracao" className="iten-button">
                <div>
                    <Icon icon="ph:gear" />
                    <span>Administração</span>
                </div>
            </NavLink>
            <NavLink to="Restaurante" className="iten-button">
                <div>
                    <Icon icon="mi:shopping-cart-add" />
                    <span>Restaurante</span>
                </div>
            </NavLink>
        </div>
        </>
    )
}

export default Home
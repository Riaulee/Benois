import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title ='Benoît Poupin'
    return <div className={'benoit-poupin-banner'}>
        <img src={logo} alt='Benoît Poupin' className='benoit-poupin-logo'/>
        <h1>{title}</h1>
    </div>
}

export default Banner
import logo from '../assets/logo.png';
import arbol from '../assets/arbol.jpg';
import familia from '../assets/familia.jpg';
import mapa from '../assets/mapa.png';
import Boton from '../components/Boton';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate()
    const goRegistro = () => {
        navigate('registrar')
    }
    const goUsuario = () => {
        navigate('usuario')
    }

  return (
    <div className="w-full h-screen bg-[#FFF8E7] flex justify-center">
        <div className='flex flex-col items-center text-center gap-4 mt-8'>
            <div className='w-48'>
                <img className='w-full ' src={logo} />
            </div>
            <div className='w-full '>
                <p className='text-2xl font-bold text-[#4A7729]'> Descubrimiento <br/>  Familiar</p>
            </div>
            <div className='flex flex-col items-center gap-2 w-48 mt-8 mb-4'>
                <Boton onClick={goRegistro} texto='Registrar Usuario' />
                <Boton onClick={goUsuario} texto='Datos de usuarios' />
            </div>
            <div className='flex gap-4 items-center'>
                <div className='w-20'>
                    <img className='w-full object-cover rounded-lg mix-blend-multiply' src={arbol} />
                </div>
                <div className='w-20'>
                    <img className='w-full object-cover rounded-lg mix-blend-multiply mt-4' src={familia} />
                </div>
                <div className='w-20'>
                    <img className='w-full object-cover rounded-lg mix-blend-multiply' src={mapa} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;

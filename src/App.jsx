import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import NavbarVeterinaria from './components/NavbarVeterinaria'
import Footer from './components/Footer';

function App() {

  return (
    <section className='mainPage'>
      <NavbarVeterinaria></NavbarVeterinaria>
      <div>
          <h1 className='text-center py-1 bg-white mt-4'>Administrador de pacientes de veterinaria</h1>
          <Formulario></Formulario>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default App

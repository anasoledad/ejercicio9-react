import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';

function App() {

  return (
    <section className='mainPage'>
      <div>
          <h1 className='text-center py-4 bg-white mt-3'>Administrador de pacientes de veterinaria</h1>
          <Formulario></Formulario>
      </div>
      <footer className='bg-dark text-light text-center py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
      

    </section>
  )
}

export default App

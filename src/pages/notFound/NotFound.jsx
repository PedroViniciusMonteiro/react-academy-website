import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Pagina não encontrada</h2>
        <Link to="/" className='btn'>Voltar para Home</Link>
      </div>
    </section>
  )
}

export default NotFound
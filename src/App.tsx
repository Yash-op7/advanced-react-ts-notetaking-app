import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Navigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NewNote } from './NewNote';

function App() {
  return (
   <Container className='my-4'>
     <Routes>
      <Route path='/' element={<div>Home page</div>} />
      <Route path='/new' element={<NewNote />} />
      <Route path='/:id'>
        <Route index element={<h1>Yokoso</h1>} />
        <Route path='edit' element={<h1>edit</h1>} />
      </Route>
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
   </Container>
  )
}

export default App

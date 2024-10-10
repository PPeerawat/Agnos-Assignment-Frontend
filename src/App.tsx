import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'

import FingerPain from './pages/fingerPain'
import AbdominalPain from './pages/abdPain'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/finger-pain' element={<FingerPain />}/>
        <Route path='/abdominal-pain' element={<AbdominalPain />}/>
      </Routes>
    </Router>
  )
}

export default App

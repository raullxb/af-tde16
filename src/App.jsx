import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TaskDetails from './pages/TaskDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
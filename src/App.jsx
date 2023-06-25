import Calendar from './components/Calendar';
import './App.css'

const now = new Date(2017, 2, 8);

function App() {
  return (
    <Calendar now={now}/>
  )
}

export default App

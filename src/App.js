import './App.css';
import { StudentProvider } from './context/StudentProvider';
import Home from './Home';
function App() {
  return (
    <StudentProvider>
      <div>
        <Home />
      </div>
    </StudentProvider>
  );
}

export default App;

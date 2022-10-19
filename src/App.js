import { Routes, Route } from "react-router-dom";
import { PageOne } from './components/PageOne';
import { Solo } from './components/Solo';

function App() {
  return (
    <div className="container">
      <Routes basename="/">
        <Route path='/' element={<PageOne />} />
        <Route path='/solo' element={<Solo />} />
      </Routes>
    </div>
  );
}

export default App;

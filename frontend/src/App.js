// App.js
import CatalogPage from './pages/katalog';
import DetailBarangPage from './pages/detail';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <DetailBarangPage />
      </div>
    </Router>
  );
}

export default App;

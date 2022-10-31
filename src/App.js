import Layout from './layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';


function App() {
  return (
    <div>
      <div className='w-full'>
        <Header />
      </div>
      <Router>
        <Routes >
          <Route path='' element={<Layout />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

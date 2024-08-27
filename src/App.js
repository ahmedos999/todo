import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav';
import Home from './home';
import Create from './Create';
import TaskDetails from './taskDetails';
import NotFound from './NotFound';
// import Navbar from './nav';
// import Home from './home';
// import Create from './Create';
// import BlogDetails from './blogDetails';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/create" element={<Create></Create>} />
            <Route path="/Tasks/:id" element={<TaskDetails></TaskDetails>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
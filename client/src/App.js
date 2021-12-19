import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { Waiting } from './components/chat/Waiting';
import { Chat } from './components/chat/Chat';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} >
          <Route index element={<Waiting />} />
          <Route path=':chatId' element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

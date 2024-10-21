import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import UsersList from './shared/components/screens/users/usersList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />}>         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import UsersList from './shared/components/screens/users/usersList'
import Table1 from "./shared/components/reusable_components/tables/table1";
import Card1 from "./shared/components/reusable_components/cards/card1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />         
        <Route path="/table1" element={<Table1 headers={[]} data={[]} />} />         
        <Route path="/card1" element={<Card1 cardData={[]} loadMore={()=>{}} />} />         
      </Routes>
    </BrowserRouter>
  );
}

export default App;

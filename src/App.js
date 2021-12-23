import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { NewPlan } from "./components/NewPlan";
import { ListOfPlans } from "./components/ListOfPlans";
import { NavBar } from './components/NavBar';
import { EditPlan } from './components/EditPlan';

function App() {
  const [plans, setPlans] = useState(
    JSON.parse(localStorage.getItem('plans')) || []
  )

  const [editPlan, setEditPlan] = useState('');

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-plan" element={<NewPlan plans={plans} setPlans={setPlans} />} />
          <Route path="/list-of-plans" element={<ListOfPlans plans={plans} setPlans={setPlans} setEditPlan={setEditPlan} />} />
          <Route path="/edit-plan" element={<EditPlan editPlan={editPlan}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Pacient from "./pages/Pacient";
import EditPacient from "./pages/EditPacient";
import NewPacient from "./pages/NewPacient";

import ListAnamnese from "./pages/ListAnamneses";
import NewAnamnese from "./pages/NewAnamneses";
import Anamnese from "./pages/Anamnese";
import EditAnamnese from "./pages/EditAnamnese";

import Therapie from "./pages/Therapies";
import NewTherapie from "./pages/NewTherapie";
import EditTherapie from "./pages/EditTherapie";
import Confirm from "./pages/Confirm";

import Service from "./pages/Service";
import EditService from "./pages/EditService";
import Payment from "./pages/Payment";
import EditPayment from "./pages/EditPayment";
import Report from "./pages/Report";


export default function Router(){
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/client/edit/:id" element={<EditPacient />} />
        <Route path="/pacient/:id" element={<Pacient />} />
        <Route path="/new" element={<NewPacient/>} />
        <Route path="/anamnesis/:id" element={<ListAnamnese/>} />
        <Route path="/anamnesis/pdf/:id" element={<Anamnese/>} />
        <Route path="/anamnesis/new/:id" element={<NewAnamnese/>} />
        <Route path="/anamnesis/edit/:id" element={<EditAnamnese/>} />
        <Route path="/anamnese" element={<NewAnamnese/>} />
        <Route path="/therapie" element={<Therapie/>} />
        <Route path="/therapies/new" element={<NewTherapie/>} />
        <Route path="/therapies/edit/:id" element={<EditTherapie/>} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/service/edit/:id" element={<EditService />} />
        <Route path="/payment/client/:id" element={<Payment />} />
        <Route path="/payment/edit/:id" element={<EditPayment />} />
        <Route path="/confirm" element={<Confirm/>} />
        <Route path="/report" element={<Report/>} />
      </Routes>
  );
}
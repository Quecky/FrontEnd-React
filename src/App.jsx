import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Nombre from "./Components/Nombre";
import Form from './Components/Form';

function App() {
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a Vite</h1>

      <Form></Form>
      <Card nombre="Germán" email={"germfra@gmail.com"} />
      <Card nombre="Joshua" email={"joshta@yahoo.com.ar"} />
      <Card nombre="Claudia" email={"claulnj@hotmail.com"} />
      <Contact />
      <section>
        <Nombre>Dali</Nombre>
        <Nombre>No se que poner</Nombre>
      </section>
    </>
  );
}

export default App;
import Navbar from "../components/Navbar";
import "../App.css";
import Card from "../components/Cards";

function Perritos() {
  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="grid-container">
        <Card
          imagen="/images/Blacky.png"
          nombre="Blacky"
          sexo="Hombre"
          edad="2 años"
          texto="Le gusta jugar con sus juguetes."
        ></Card>
        <Card
          imagen="/images/Maddy.png"
          nombre="Maddy"
          sexo="Mujer"
          edad="1 año"
          texto="Es maddypuladora."
        ></Card>
        <Card
          imagen="/images/Salchicha.png"
          nombre="Salchicha"
          sexo="Hombre"
          edad="18 años"
          texto="Es mión."
        ></Card>
        <Card
          imagen="/images/Mamba.png"
          nombre="Mamba"
          sexo="Mujer"
          edad="11 años"
          texto="Es miona también y huele feo."
        ></Card>
        <Card
          imagen="/images/Bruno.png"
          nombre="Bruno"
          sexo="Hombre"
          edad="9 años"
          texto="Tiene el poto gordo y parece león."
        ></Card>
      </div>
    </div>
  );
}
export default Perritos;

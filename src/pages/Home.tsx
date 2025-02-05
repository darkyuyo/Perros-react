import Navbar from "../components/Navbar";
import "../App.css";

function Home() {
  return (
    <div className="background">
      <Navbar></Navbar>
      <article className="container">
        <h1>Bienvenido a la pagina de mis perritos</h1>
        <p>Acá habran imágenes e informacion sobre mis perritos.</p>
      </article>
    </div>
  );
}
export default Home;

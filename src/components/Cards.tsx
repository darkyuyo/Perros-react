function Card(props: {
  imagen: string | undefined;
  nombre: string | undefined;
  sexo: string | undefined;
  edad: string | undefined;
  texto: string | undefined;
}) {
  return (
    <div className="card">
      <img src={props.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">Nombre: {props.nombre}</h2>
        <h5>Género: {props.sexo}</h5>
        <h5>Edad: {props.edad}</h5>

        <p className="card-text">
          {props.texto}
        </p>
      </div>
    </div>
  );
}
export default Card;

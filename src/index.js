import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const info = {
  name: "Tiger Woods",
  profesion: "Golfista",
  extra: {
    fecha: "25 abril 2019",
    foto: "https://placehold.it/200x120"
  },
  texto:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non fringilla turpis, gravida accumsan nunc. Sed lobortis ornare metus, non auctor ante mollis sed. Suspendisse potenti. Aenean rhoncus vehicula tortor vel vehicula. Pellentesque ornare vehicula elit. Phasellus vitae enim eros. Phasellus ullamcorper diam ac lacinia eleifend. Fusce congue sollicitudin viverra."
};

class App extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="titulo-card">
          <p>{info.name}</p>
        </div>
        <div className="foto-card">
          <img src={info.extra.foto} className="foto" />
        </div>
        <div className="fecha-card">
          <p>{info.extra.fecha}</p>
        </div>
        <div className="profesion-card">{info.profesion}</div>
        <div className="texto-card">{info.texto}</div>
        <div>
          <i class="fas fa-heart" style={{ color: "red" }} />
        </div>

        <div style={{ marginTop: "30px" }}>
          <p style={{ fontStyle: "italic", color: "gray" }}>Saber Mas ...</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

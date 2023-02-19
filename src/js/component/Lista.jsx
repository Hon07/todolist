import React, { useState } from "react";

const Lista = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const añadirTarea = (event) => {
    event.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const actualizarTarea = (index, newValue) => {
    const nuevoArrayTareas = [...listaTareas];
    nuevoArrayTareas[index] = newValue;
    setListaTareas(nuevoArrayTareas);
  };

  const eliminar = (i) => {
    const nuevoArrayTareas = listaTareas.filter((element, index) => {
      if (i !== index) {
        return element;
      }
    });
    setListaTareas(nuevoArrayTareas);
  };

  return (
    <div className="card">
      <div className="card-header">TODOS</div>
      <div className="card-body">
        <form onSubmit={añadirTarea}>
          <div className="d-flex form-row align-items-center">
            <div className="col-auto m-2">
              <label className="sr-only" htmlFor="inlineFormInput">
                LIST
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="inlineFormInput"
                placeholder="What needs to be done?"
                value={tarea}
                onChange={(event) => setTarea(event.target.value)}
              />
            </div>
            <div className="col-auto  m-2">
              <button type="submit" className="btn btn-success mb-2" style={{ backgroundColor: 'pink' }}>
            
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="lista">
          <ul className="list-group sm">
            {listaTareas.map((element, index) => {
              return (
                <li className="btn btn-outline-success mb-3" key={index}>
                  <input
                    type="text"
                    value={element}
                    onChange={(event) =>
                      actualizarTarea(index, event.target.value)
                    }
                  />
                  <button className="btn" onClick={() => eliminar(index)}>
                    <i className="fas fa-arrow-alt-circle-down fa-2x"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p>
            {listaTareas.length === 0
              ? "Cero Task"
              : `Amount of tasks ${listaTareas.length}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lista;

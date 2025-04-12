import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  var url = "https://super-barnacle-jwx7jrxj4q4fp4pr-5000.app.github.dev/productos";

  useEffect(() => {
    axios.get(url).then((res) => {
      setProductos(res.data);
    });
  }, []);

  const agregarProducto = () => {
    axios
      .post(url, { nombre, precio })
      .then((res) => {
        setProductos([...productos, res.data]);
        setNombre("");
        setPrecio("");
      });
  };

  const eliminarProducto = (id) => {
    axios.delete(url + `/${id}`).then(() => {
      setProductos(productos.filter((p) => p.id !== id));
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">CRUD Productos</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded w-full"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          className="border p-2 rounded w-full"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button className="bg-pink-700 text-white p-2 rounded" onClick={agregarProducto}>
          Agregar
        </button>
      </div>

      <ul className="mt-4">
        {productos.map((p) => (
          <li key={p.id} className="border p-2 flex justify-between">
            {p.nombre} - ${p.precio}
            <button className="bg-red-500 text-white p-1 rounded" onClick={() => eliminarProducto(p.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosPage;
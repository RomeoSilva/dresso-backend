pwd
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/shopping', (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const productos = [
    {
      name: "Camisa beige",
      type: "camisa",
      color: "beige",
      image: "https://via.placeholder.com/150?text=Camisa+beige",
      price: 25.99
    },
    {
      name: "Pantalón negro",
      type: "pantalón",
      color: "negro",
      image: "https://via.placeholder.com/150?text=Pantalón+negro",
      price: 32.50
    },
    {
      name: "Chaqueta azul",
      type: "chaqueta",
      color: "azul",
      image: "https://via.placeholder.com/150?text=Chaqueta+azul",
      price: 45.00
    }
  ];

  const resultados = productos.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query) ||
    item.color.toLowerCase().includes(query)
  );

  if (resultados.length === 0) {
    return res.status(404).json({ mensaje: "No se encontraron resultados." });
  }

  res.json(resultados);
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor backend escuchando en el puerto ${PORT}`);
});

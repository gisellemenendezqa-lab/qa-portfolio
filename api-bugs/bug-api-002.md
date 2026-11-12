**Título:** POST https://fakestoreapi.com/products devuelve 201 Created con id 21, pero GET https://fakestoreapi.com/products/21 devuelve 200 OK con el Body vacío en lugar de los datos del producto creado

**Entorno:** Postman, métodos POST y GET

**Pasos para reproducir:**

1. Abrir Postman y crear una petición nueva.
2.Seleccionar el método POST y pegar la dirección https://fakestoreapi.com/products.
3.Abrir la pestaña Body, marcar raw y elegir JSON.
4.Pegar este contenido:
json
{
  "title": "Producto de prueba",
  "price": 13.5,
  "description": "Producto creado desde Postman",
  "image": "https://i.pravatar.cc",
  "category": "electronics"
}
5.Pulsar Send y leer el Status y el Body.
6.Crear una petición nueva, seleccionar el método GET y pegar https://fakestoreapi.com/products/21.
7.Pulsar Send y leer el Status y el Body.

**Resultado actual:** POST: 201 Created con id 21. GET: 200 OK, 416 ms y Body vacío.

**Resultado esperado:** GET: 200 OK con el Body del producto 21 ("title": "Producto de prueba"), porque el POST informó que lo había creado.

**Evidencia:** capturas bug-api-002-post.png y bug-api-002-get.png.
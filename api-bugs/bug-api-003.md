# bug-api-003: DELETE /products/6 devuelve 200 OK, pero GET /products/6 después sigue devolviendo el producto

**Título:** DELETE https://fakestoreapi.com/products/6 devuelve 200 OK, pero GET https://fakestoreapi.com/products/6 después devuelve 200 OK con el producto en lugar de 404 Not Found

**Entorno:** Postman, métodos GET y DELETE

**Pasos para reproducir:**

1.Abrir Postman y crear una petición nueva.
2.Seleccionar el método GET y pegar https://fakestoreapi.com/products/6.
3.Pulsar Send y comprobar que el producto 6 existe (200 OK, Body con "id": 6).
4.Crear una petición nueva, seleccionar el método DELETE y pegar https://fakestoreapi.com/products/6.
5.Pulsar Send y leer el Status y el Body.
6.Volver a la petición GET del paso 2 y pulsar Send otra vez.
7.Leer el Status y el Body.

**Resultado actual:** GET inicial: 200 OK con el producto 6. DELETE: 200 OK con el producto 6 en el Body. GET final: 200 OK con el producto 6.

**Resultado esperado:** GET final: 404 Not Found, porque el producto 6 fue eliminado.

**Evidencia:** capturas bug-api-003-get-antes.png, bug-api-003-delete.png y bug-api-003-get-despues.png.
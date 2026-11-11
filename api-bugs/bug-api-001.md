# bug-api-001: GET /products/999 devuelve 200 OK con el Body vacío en lugar de 404 Not Found

**Título:** `GET https://fakestoreapi.com/products/999` devuelve `200 OK` con el Body vacío en lugar de `404 Not Found`

**Entorno:** Postman, método GET

**Pasos para reproducir:**
1. Abrir Postman y crear una petición nueva.
2. Seleccionar el método GET y pegar la dirección `https://fakestoreapi.com/products/999`.
3. Pulsar Send.
4. Leer el Status y la pestaña Body de la respuesta.

**Resultado actual:** Status `200 OK`, tiempo marcado por Postman 141 ms y Body vacío.

**Resultado esperado:** Status `404 Not Found`, porque el producto 999 no existe.

**Evidencia:** captura `bug-api-001.png` (Status y Body de la respuesta).
# bug-api-004: GET /products/{id} devuelve 200 OK con el Body vacío cuando el id no existe o no es válido

**Título:** `GET https://fakestoreapi.com/products/{id}` devuelve `200 OK` con el Body vacío en lugar de un error `4xx` (`400` o `404`) cuando el id no existe o no es válido

**Entorno:** Postman, método GET

**Pasos para reproducir:**
1. Abrir Postman y crear una petición nueva.
2. Seleccionar el método GET.
3. Pegar `https://fakestoreapi.com/products/abc` y pulsar Send.
4. Leer el Status y la pestaña Body de la respuesta.
5. Repetir los pasos 3 y 4 con `https://fakestoreapi.com/products/-1`, `.../products/0` y `.../products/999`, una petición por cada id.

**Resultado actual:** Status `200 OK` y Body vacío en las cuatro peticiones (ids `abc`, `-1`, `0` y `999`).

**Resultado esperado:**
- Id `abc`: `400 Bad Request`, porque no es un número y la petición está mal formada.
- Ids `-1`, `0` y `999`: `404 Not Found`, porque ese producto no existe.

**Evidencia:** tabla `casos-negativos.md` y captura `bug-api-004-abc.png`.

**Relacionado:** `bug-api-001` (el mismo comportamiento con el id 999).
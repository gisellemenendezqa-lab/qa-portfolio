# Casos negativos: GET /products/{id}

- **API:** Fake Store API (`https://fakestoreapi.com`)
- **Herramienta:** Postman, método GET
- **Fecha:** 12/11/2026

| # | Petición | Qué pide | Esperado | Actual | ¿Coincide? |
|---|---|---|---|---|---|
| 1 | `GET https://fakestoreapi.com/products/abc` | Un producto con id que no es un número | `400 Bad Request` | `200 OK`, Body vacío | No |
| 2 | `GET https://fakestoreapi.com/products/-1` | Un producto con id negativo | `404 Not Found` | `200 OK`, Body vacío | No |
| 3 | `GET https://fakestoreapi.com/products/0` | Un producto con id cero | `404 Not Found` | `200 OK`, Body vacío | No |
| 4 | `GET https://fakestoreapi.com/products/999` | Un producto con id que no existe | `404 Not Found` | `200 OK`, Body vacío | No |

**Conclusión:** en los 4 casos la API responde `200 OK` con el Body vacío en lugar de un error `4xx`. Reportado en `bug-api-004`.
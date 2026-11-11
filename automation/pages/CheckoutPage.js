class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.titulo = page.locator('[data-test="title"]');
    this.nombre = page.locator('[data-test="firstName"]');
    this.apellido = page.locator('[data-test="lastName"]');
    this.codigoPostal = page.locator('[data-test="postalCode"]');
    this.botonContinuar = page.locator('[data-test="continue"]');
    this.mensajeError = page.locator('[data-test="error"]');
    this.botonFinalizar = page.locator('[data-test="finish"]');
    this.mensajeConfirmacion = page.locator('[data-test="complete-header"]');
  }

  async continuar() {
    await this.botonContinuar.click();
  }

  async llenarFormulario(nombre, apellido, codigoPostal) {
    await this.nombre.fill(nombre);
    await this.apellido.fill(apellido);
    await this.codigoPostal.fill(codigoPostal);
  }

  async finalizar() {
    await this.botonFinalizar.click();

  }
}

module.exports = { CheckoutPage };
class CartPage {
  constructor(page) {
    this.page = page;
    this.titulo = page.locator('[data-test="title"]');
    this.nombreProducto = page.locator('[data-test="inventory-item-name"]');
    this.botonCheckout = page.locator('[data-test="checkout"]');
  }

  async irACheckout() {
    await this.botonCheckout.click();
  }
}

module.exports = { CartPage };
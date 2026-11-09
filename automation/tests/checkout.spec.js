const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('checkout con todos los campos vacíos muestra error de First Name', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.abrir();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');
  await inventoryPage.anadirProducto('sauce-labs-backpack');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(cartPage.titulo).toHaveText('Your Cart');
  await cartPage.irACheckout();
  await expect(checkoutPage.titulo).toHaveText('Checkout: Your Information');

  await checkoutPage.continuar();
  await expect(checkoutPage.mensajeError).toHaveText('Error: First Name is required');
});
test('checkout sin Last Name muestra error de Last Name', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.abrir();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');
  await inventoryPage.anadirProducto('sauce-labs-backpack');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(cartPage.titulo).toHaveText('Your Cart');
  await cartPage.irACheckout();
  await expect(checkoutPage.titulo).toHaveText('Checkout: Your Information');
  await checkoutPage.nombre.fill('Giselle');

  await checkoutPage.continuar();
  await expect(checkoutPage.mensajeError).toHaveText('Error: Last Name is required');
});
test('checkout sin Codigo Postal muestra error de Codigo Postal', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.abrir();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');
  await inventoryPage.anadirProducto('sauce-labs-backpack');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(cartPage.titulo).toHaveText('Your Cart');
  await cartPage.irACheckout();
  await expect(checkoutPage.titulo).toHaveText('Checkout: Your Information');
  await checkoutPage.nombre.fill('Giselle');
  await checkoutPage.apellido.fill('Menendez');

  await checkoutPage.continuar();
  await expect(checkoutPage.mensajeError).toHaveText('Error: Postal Code is required');
});
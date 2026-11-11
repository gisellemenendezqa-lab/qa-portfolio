const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('compra completa con datos válidos llega al resumen', async ({ page }) => {
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

    await checkoutPage.llenarFormulario('Giselle', 'Menendez', '10101');
    await checkoutPage.continuar();

    await expect(checkoutPage.titulo).toHaveText('Checkout: Overview');
    await checkoutPage.finalizar();
    await expect(checkoutPage.titulo).toHaveText('Checkout: Complete!');
    await expect(checkoutPage.mensajeConfirmacion).toHaveText('Thank you for your order!');
});
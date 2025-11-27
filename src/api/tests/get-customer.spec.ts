import { test, expect } from "@playwright/test";

test.describe("API - Customer Info", () => {
  const baseUrl = "https://parabank.parasoft.com/parabank/services/bank";

  test("fetch customer profile (valid user)", async ({ request }) => {
    const response = await request.get(`${baseUrl}/customers/12212`);
    expect(response.status()).toBe(200);

    const xml = await response.text();

    expect(xml).toContain("<firstName>");
    expect(xml).toContain("<lastName>");
    expect(xml).toContain("<address>");
  });

  test("return 404 for non-existing customer", async ({ request }) => {
    const response = await request.get(`${baseUrl}/customers/999999`);
    expect(response.status()).toBe(400);
  });
});
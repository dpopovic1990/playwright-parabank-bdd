import { test, expect } from "@playwright/test";

test.describe("API - Open New Account", () => {
  const baseUrl = "https://parabank.parasoft.com/parabank/services/bank";

  test("successfully open a new account", async ({ request }) => {
    const customerId = 12212;
    const fromAccountId = 12456; // Replace with any valid demo account ID
    const newAccountType = 1;    // 1 = Checking, 0 = Savings

    const response = await request.post(
      `${baseUrl}/createAccount`,
      {
        params: {
          customerId,
          fromAccountId,
          newAccountType
        }
      }
    );

    expect(response.status()).toBe(200);

    const text = await response.text();
    
    expect(text).toContain("<id>");
  });
});
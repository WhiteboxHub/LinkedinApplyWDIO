describe("LinkedIn", () => {
  it("should login and search for a job", async () => {
    await browser.url("https://www.linkedin.com/login/");
    await browser.maximizeWindow();

    const emailInput = await $('[name="session_key"]');
    await emailInput.waitForDisplayed({ timeout: 10000 });
    await emailInput.setValue("email");

    const passwordInput = await $('#password');
    await passwordInput.waitForDisplayed({ timeout: 10000 });
    await passwordInput.setValue("password");

    const loginButton = await $('.btn__primary--large.from__button--floating');
    await loginButton.waitForClickable({ timeout: 10000 });
    await loginButton.click();

    // Wait until the URL contains 'feed', which indicates login success and page redirection
    await browser.waitUntil(async () => {
      return (await browser.getUrl()).includes('feed');
    }, { timeout: 15000, timeoutMsg: 'Login failed or redirect took too long' });

    // Perform a search
    const searchInput = await $('.search-global-typeahead__input');
    await searchInput.waitForDisplayed({ timeout: 10000 });
    await searchInput.click();
    await searchInput.clearValue();
    await searchInput.setValue("Frontend developer");
    await browser.keys("Enter");

    // Wait for search results to load
    await browser.pause(5000); // Wait for 5 seconds to allow results to load. Adjust if needed

    // Find all elements with the class 'search-reusables__primary-filter'
    const elements = await $$('.search-reusables__primary-filter');
    
    // Debugging: Log the number of elements found
    console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

    // Iterate through the elements and click the one containing 'Jobs'
    for (const element of elements) {
      const text = await element.getText();
      if (text.includes('Jobs')) {
        await element.click();
        break;
      }
    }

    // Wait for the location input to be displayed using the provided ID
    const locationInput = await $('#jobs-search-box-location-id-ember557'); 
    await locationInput.waitForDisplayed({ timeout: 15000 });
    await locationInput.click();
    await locationInput.clearValue();
    await locationInput.setValue("CA USA");
    await browser.keys("Enter");

    // Keep the browser window open
    await browser.debug();
  });
});

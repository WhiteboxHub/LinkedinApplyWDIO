// describe("LinkedIn", () => {
//   it("should login and search for a job", async () => {
//     await browser.url("https://www.linkedin.com/login/");

//     // Maximize the browser window
//     await browser.maximizeWindow();

//     // Wait for the email input to be present and interactable
//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 10000 });
//     await emailInput.setValue("srikanthprabha62@gmail.com");

//     // Wait for the password input to be present and interactable
//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 10000 });
//     await passwordInput.setValue("Rajan@91");

//     // Wait for the login button to be present and clickable
//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 10000 });
//     await loginButton.click();


//     // Wait for the search input to be present and interactable
//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 10000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("frontend developer");

//     // Simulate pressing the Enter key
//     await browser.keys("Enter");

//     // Wait for successful login and page redirect
//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 15000, timeoutMsg: 'Login failed or redirect took too long' });

//     // Click on the first pill element
//     const firstPill = await $('.artdeco-pill.artdeco-pill--slate');
//     await firstPill.scrollIntoView(); // Ensure the element is in view
//     await firstPill.waitForClickable({ timeout: 10000 });
//     await firstPill.click();



//  // Wait for the location input to be present and interactable
// const locationInput = await $('input[aria-label="Location"]'); // Example selector
// await locationInput.waitForDisplayed({ timeout: 10000 });
// await locationInput.click();
// await locationInput.clearValue();
// await locationInput.setValue("CA USA");

// // Simulate pressing the Enter key
// await browser.keys("Enter");


//     // Optional: Add assertions or additional waits here to verify the results
//   });
// });




// describe("LinkedIn", () => {
//   it("should login and search for a job", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 10000 });
//     await emailInput.setValue("srikanthprabha62@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 10000 });
//     await passwordInput.setValue("Rajan@91");

//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 10000 });
//     await loginButton.click();

//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 15000, timeoutMsg: 'Login failed or redirect took too long' });

//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 10000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("FRontend developer");
//     await browser.keys("Enter");

//   // Find all elements with the class 'search-reusables__primary-filter'
//   const elements = await $$('.search-reusables__primary-filter'); // Note the '.' for class selectors
        
//   // Check if there is at least one element
//   if (elements.length > 0) {
//       // Click the first element
//       await elements[0].click();
//   }else {
//             throw new Error('No elements found with the class "search-reusables__primary-filter".');
//         }

//   //   // Wait for the location input to be displayed
//   //   const locationInput = await $('input[placeholder="Location"]');
//   //   await locationInput.waitForDisplayed({ timeout: 15000 });
//   //   await locationInput.click();
//   //   await locationInput.clearValue();
//   //   await locationInput.setValue("CA USA");
//   //   await browser.keys("Enter");

//     // Optional: Add assertions or additional waits here
//   });
// });




// describe("LinkedIn", () => {
//   it("should login and search for a job", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 10000 });
//     await emailInput.setValue("srikanthprabha62@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 10000 });
//     await passwordInput.setValue("Rajan@91");

//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 10000 });
//     await loginButton.click();

//     // Wait until the URL contains 'feed', which indicates login success and page redirection
//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 15000, timeoutMsg: 'Login failed or redirect took too long' });

//     // Perform a search
//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 10000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("FRontend developer");
//     await browser.keys("Enter");


//     // Wait for search results to load
//     await browser.pause(5000); // Wait for 5 seconds to allow results to load. Adjust if needed

//     // Find all elements with the class 'search-reusables__primary-filter'
//     const elements = await $$('.search-reusables__primary-filter');
    
//     // Debugging: Log the number of elements found
//     console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

//     // Check if there is at least one element
//     if (elements.length > 0) {
//       // Click the first element
//       await elements[0].click();
//     } else {
//       throw new Error('No elements found with the class "search-reusables__primary-filter".');
//     }

//     // Wait for the location input to be displayed
//     const locationInput = await $('.jobs-search-box__text-input jobs-search-box__text-input--with-clear');
//     await locationInput.waitForDisplayed({ timeout: 15000 });
//     await locationInput.click();
//     await locationInput.clearValue();
//     await locationInput.setValue("CA USA");
//     await browser.keys("Enter");


//   });
// });










// describe("LinkedIn", () => {
//   it("should login and search for a job", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 10000 });
//     await emailInput.setValue("bn234crpf@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 10000 });
//     await passwordInput.setValue("Rajan@71");

//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 10000 });
//     await loginButton.click();

//     // Wait until the URL contains 'feed', which indicates login success and page redirection
//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 15000, timeoutMsg: 'Login failed or redirect took too long' });

//     // Perform a search
//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 10000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("Frontend developer");
//     await browser.keys("Enter");

//     // Wait for search results to load
//     await browser.pause(5000); // Wait for 5 seconds to allow results to load. Adjust if needed

//     // Find all elements with the class 'search-reusables__primary-filter'
//     const elements = await $$('.search-reusables__primary-filter');
    
//     // Debugging: Log the number of elements found
//     console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

//     // Iterate through the elements and click the one containing 'jobs'
//     for (const element of elements) {
//       const text = await element.getText();
//       if (text.includes('Jobs')) {
//         await element.click();
//         break;
//       }
//     }

//      // Wait for the location input to be displayed using the provided ID
//      const locationInput = await $('#jobs-search-box-location-id-ember557'); 
//      await locationInput.waitForDisplayed({ timeout: 15000 });
//      await locationInput.click();
//      await locationInput.clearValue();
//      await locationInput.setValue("CA USA");
//      await browser.keys("Enter");
//   });
// });



describe("LinkedIn", () => {
  it("should login and search for a job", async () => {
    await browser.url("https://www.linkedin.com/login/");
    await browser.maximizeWindow();

    const emailInput = await $('[name="session_key"]');
    await emailInput.waitForDisplayed({ timeout: 10000 });
    await emailInput.setValue("bn234crpf@gmail.com");

    const passwordInput = await $('#password');
    await passwordInput.waitForDisplayed({ timeout: 10000 });
    await passwordInput.setValue("Rajan@71");

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

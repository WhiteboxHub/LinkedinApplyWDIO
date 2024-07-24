// this code give only all pages id's (all id's include Easy Apply)
const fs = require('fs');
const path = require('path');

describe("LinkedIn", function () {
  this.timeout(300000); // Set timeout to 5 minutes

  it("should login, search for a job, set location, scroll to the bottom, store job IDs excluding 'Easy Apply' jobs, and click each job with a delay", async () => {
    await browser.url("https://www.linkedin.com/login/");
    await browser.maximizeWindow();

    const emailInput = await $('[name="session_key"]');
    await emailInput.waitForDisplayed({ timeout: 30000 });
    await emailInput.setValue("email");

    const passwordInput = await $('#password');
    await passwordInput.waitForDisplayed({ timeout: 30000 });
    await passwordInput.setValue("password");

    const loginButton = await $('.btn__primary--large.from__button--floating');
    await loginButton.waitForClickable({ timeout: 30000 });
    await loginButton.click();

    await browser.waitUntil(async () => {
      return (await browser.getUrl()).includes('feed');
    }, { timeout: 30000, timeoutMsg: 'Login failed or redirect took too long' });

    const searchInput = await $('.search-global-typeahead__input');
    await searchInput.waitForDisplayed({ timeout: 30000 });
    await searchInput.click();
    await searchInput.clearValue();
    await searchInput.setValue("frontend developer");
    await browser.keys("Enter");

    await browser.pause(10000); // Increase pause time to ensure results load

    const elements = await $$('.search-reusables__primary-filter');
    console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

    for (const element of elements) {
      const text = await element.getText();
      if (text.includes('Jobs')) {
        await element.click();
        break;
      }
    }
    console.log("Clicked on job");

    const locationInput = await $('[autocomplete="address-level2"]');
    await locationInput.waitForDisplayed({ timeout: 30000 });
    await locationInput.click();
    await locationInput.clearValue();
    await locationInput.setValue("California, United States");
    await browser.keys("Enter");
    console.log("Location entered");
    await browser.pause(10000); // Wait for results to update after location change

    let jobIds = {};
    let pageIndex = 1;

    while (true) {
      try {
        const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
        let pageJobIds = [];

        for (const jobElement of jobElements) {
          // Retrieve the job ID from the job element
          const jobId = await jobElement.getAttribute('data-occludable-job-id');
          
          // Check if the job element contains the 'Easy Apply' badge (li with class 'job-card-container__apply-method')
          const easyApplyBadge = await jobElement.$('li.job-card-container__apply-method');
          const hasEasyApply = await easyApplyBadge.isExisting();
          
          // Only add job ID if it does not contain 'Easy Apply'
          if (!hasEasyApply && jobId && !pageJobIds.includes(jobId)) {
            pageJobIds.push(jobId);
          }
        }
        
        // Add page job IDs to the main object
        if (pageJobIds.length > 0) {
          jobIds[`page${pageIndex}`] = pageJobIds;
        }

        // Log the collected job IDs for verification
        console.log('Collected Job IDs for page', pageIndex, ':', pageJobIds);

        // Define the file path and name in the project directory
        const filePath = path.join(__dirname, 'jobIdsUI.json');

        // Convert the job IDs object to a JSON string
        const jsonData = JSON.stringify(jobIds, null, 2);

        // Write the job IDs to a single JSON file
        fs.writeFileSync(filePath, jsonData, 'utf8');
        console.log(`Job IDs written to JSON file successfully.`);

        // Check for the next page button and click it
        const nextPageButton = await $(`li[data-test-pagination-page-btn="${pageIndex + 1}"] button`);
        if (await nextPageButton.isExisting() && await nextPageButton.isClickable()) {
          await nextPageButton.scrollIntoView();
          await nextPageButton.click();
          await browser.pause(5000); // Wait for the new page to load
          pageIndex++;
        } else {
          // If the next page button does not exist or is not clickable, exit the loop
          console.log('No more pages to load.');
          break;
        }
      } catch (error) {
        console.error('Error while collecting job IDs:', error);
        break; // Exit the loop on error
      }
    }

    console.log('Job IDs collection completed.');

    // Keep the browser window open for debugging
    await browser.debug();
  });
});









// const fs = require('fs');
// const path = require('path');

// describe("LinkedIn", function () {
//   this.timeout(300000); // Set timeout to 5 minutes

//   it("should login, search for a job, set location, scroll to the bottom, store job IDs excluding 'Easy Apply' jobs, and click the ellipsis to load more", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 30000 });
//     await emailInput.setValue("bn234crpf@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 30000 });
//     await passwordInput.setValue("Rajan@71");

//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 30000 });
//     await loginButton.click();

//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 30000, timeoutMsg: 'Login failed or redirect took too long' });

//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 30000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("frontend developer");
//     await browser.keys("Enter");

//     await browser.pause(10000); // Ensure results load

//     const elements = await $$('.search-reusables__primary-filter');
//     for (const element of elements) {
//       const text = await element.getText();
//       if (text.includes('Jobs')) {
//         await element.click();
//         break;
//       }
//     }
//     console.log("Clicked on job");

//     const locationInput = await $('[autocomplete="address-level2"]');
//     await locationInput.waitForDisplayed({ timeout: 30000 });
//     await locationInput.click();
//     await locationInput.clearValue();
//     await locationInput.setValue("California, United States");
//     await browser.keys("Enter");
//     await browser.pause(10000); // Wait for results to update

//     let jobIds = [];
//     let pageIndex = 1;
//     let hasMorePages = true;

//     while (hasMorePages) {
//       try {
//         console.log(`Processing page ${pageIndex}`);
        
//         const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');

//         for (const jobElement of jobElements) {
//           const jobId = await jobElement.getAttribute('data-occludable-job-id');
//           const easyApplyBadge = await jobElement.$('li.job-card-container__apply-method');
//           const hasEasyApply = await easyApplyBadge.isExisting();
          
//           if (!hasEasyApply && jobId && !jobIds.includes(jobId)) {
//             jobIds.push(jobId);
//           }
//         }

//         console.log(`Collected Job IDs for page ${pageIndex}:`, jobIds);

//         // Check for the "next" page button
//         const nextPageButton = await $('button.next'); // Replace with the correct selector for your "next" button
//         if (await nextPageButton.isExisting() && await nextPageButton.isClickable()) {
//           await nextPageButton.scrollIntoView();
//           await nextPageButton.click();
//           await browser.pause(10000); // Wait for the new page to load
//           pageIndex++;
//         } else {
//           // Check for the ellipsis to load more pages
//           const morePagesButton = await $('button.more-pages'); // Replace with the correct selector for the ellipsis or "more" button
//           if (await morePagesButton.isExisting() && await morePagesButton.isClickable()) {
//             await morePagesButton.scrollIntoView();
//             await morePagesButton.click();
//             await browser.pause(10000); // Wait for additional pages to load
//             pageIndex++;
//           } else {
//             // If neither next page nor more pages buttons are found, exit the loop
//             console.log('No more pages to load.');
//             hasMorePages = false;
//           }
//         }
//       } catch (error) {
//         console.error('Error while collecting job IDs:', error);
//         break; // Exit the loop on error
//       }
//     }

//     // Write all collected job IDs to a single JSON file
//     const filePath = path.join(__dirname, 'jobIds.json');
//     const jsonData = JSON.stringify(jobIds, null, 2);
//     fs.writeFileSync(filePath, jsonData, 'utf8');
//     console.log(`Job IDs written to JSON file successfully.`);

//     console.log('Job IDs collection completed.');

//     // Keep the browser window open for debugging
//     await browser.debug();
//   });
// });

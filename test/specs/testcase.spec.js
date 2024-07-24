// const fs = require('fs');
// const path = require('path');

// describe("LinkedIn", function () {
//   this.timeout(180000); // Set timeout to 3 minutes

//   it("should login, search for a job, set location, scroll to the bottom, and store job IDs", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 20000 });
//     await emailInput.setValue("srikanth9948sri@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 20000 });
//     await passwordInput.setValue("Rajan@91");

//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 20000 });
//     await loginButton.click();

//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 30000, timeoutMsg: 'Login failed or redirect took too long' });

//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 20000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("Frontend developer");
//     await browser.keys("Enter");

//     await browser.pause(10000); // Increase pause time to ensure results load

//     const elements = await $$('.search-reusables__primary-filter');
//     console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

//     for (const element of elements) {
//       const text = await element.getText();
//       if (text.includes('Jobs')) {
//         await element.click();
//         break;
//       }
//     }
//     console.log("clicked on job");

//     const locationInput = await $('[autocomplete="address-level2"]'); 
//     await locationInput.waitForDisplayed({ timeout: 15000 });
//     await locationInput.click();
//     await locationInput.clearValue();
//     await locationInput.setValue("California, United States");
//     await browser.keys("Enter");
//     console.log("location entered ");
//     await browser.pause(10000); // Wait for results to update after location change

//     let jobIds = [];
//     let previousHeight = await browser.execute(() => document.body.scrollHeight);
//     let jobsLoaded = false;
//     console.log("job id's");

//     while (!jobsLoaded) {
//       const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//       console.log("while loop ******************");
//       for (const jobElement of jobElements) {
//         console.log("for loop ***************");
//         const jobId = await jobElement.getAttribute('data-occludable-job-id'); // Retrieve the correct attribute
//         if (jobId && !jobIds.includes(jobId)) {
//           console.log("if statement ************************");
//           jobIds.push(jobId);
//         }
//       }

//       await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
//       await browser.pause(5000); // Wait for new elements to load
//       console.log("scrolled down *********************");
//       const newHeight = await browser.execute(() => document.body.scrollHeight);
//       if (newHeight === previousHeight) {
//         jobsLoaded = true;
//       } else {
//         previousHeight = newHeight;
//       }
//     }

//     // Define the file path and name in the project directory
//     const filePath = path.join(__dirname, 'jobIds.json');

//     // Convert the job IDs array to a JSON string
//     const jsonData = JSON.stringify(jobIds, null, 2);

//     // Write the job IDs to a JSON file
//     fs.writeFileSync(filePath, jsonData, 'utf8');
//     console.log('Job IDs written to JSON file successfully.');

//     // Keep the browser window open for debugging
//     await browser.debug();
//   });
// });










// const fs = require('fs');
// const path = require('path');

// describe("LinkedIn", function () {
//   this.timeout(180000); // Set timeout to 3 minutes

//   it("should login, search for a job, set location, scroll to the bottom, store job IDs, and click the first job", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 20000 });
//     await emailInput.setValue("srikanth9948sri@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 20000 });
//     await passwordInput.setValue("Rajan@91");

//     const loginButton = await $('.btn__primary--large.from__button--floating');
//     await loginButton.waitForClickable({ timeout: 20000 });
//     await loginButton.click();

//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('feed');
//     }, { timeout: 30000, timeoutMsg: 'Login failed or redirect took too long' });

//     const searchInput = await $('.search-global-typeahead__input');
//     await searchInput.waitForDisplayed({ timeout: 20000 });
//     await searchInput.click();
//     await searchInput.clearValue();
//     await searchInput.setValue("ML Engineer");
//     await browser.keys("Enter");

//     await browser.pause(10000); // Increase pause time to ensure results load

//     const elements = await $$('.search-reusables__primary-filter');
//     console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

//     for (const element of elements) {
//       const text = await element.getText();
//       if (text.includes('Jobs')) {
//         await element.click();
//         break;
//       }
//     }

//     const locationInput = await $('[autocomplete="address-level2"]'); 
//     await locationInput.waitForDisplayed({ timeout: 15000 });
//     await locationInput.click();
//     await locationInput.clearValue();
//     await locationInput.setValue("California, United States");
//     await browser.keys("Enter");
//     await browser.pause(10000); // Wait for results to update after location change

//     let jobIds = [];
//     let previousHeight = await browser.execute(() => document.body.scrollHeight);
//     let jobsLoaded = false;
//     console.log("job id's");

//     while (!jobsLoaded) {
//       const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//       for (const jobElement of jobElements) {
//         const jobId = await jobElement.getAttribute('data-occludable-job-id'); // Retrieve the correct attribute
//         if (jobId && !jobIds.includes(jobId)) {
//           jobIds.push(jobId);
//         }
//       }

//       await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
//       await browser.pause(5000); // Wait for new elements to load
//       const newHeight = await browser.execute(() => document.body.scrollHeight);
//       if (newHeight === previousHeight) {
//         jobsLoaded = true;
//       } else {
//         previousHeight = newHeight;
//       }
//     }

//     // Define the file path and name in the project directory
//     const filePath = path.join(__dirname, 'jobIdsML.json');

//     // Convert the job IDs array to a JSON string
//     const jsonData = JSON.stringify(jobIds, null, 2);

//     // Write the job IDs to a JSON file
//     fs.writeFileSync(filePath, jsonData, 'utf8');

//     // Click the first job based on job ID
//     if (jobIds.length > 0) {
//       const firstJobId = jobIds[0];
//       console.log(`Clicking job with ID: ${firstJobId}`);
      
//       const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//       for (const jobElement of jobElements) {
//         const jobId = await jobElement.getAttribute('data-occludable-job-id');
//         if (jobId === firstJobId) {
//           await jobElement.click();
//           break;
//         }
//       }
//     } else {
//       console.log('No jobs found to click.');
//     }

//     // Keep the browser window open for debugging
//     await browser.debug();
//   });
// });










// const fs = require('fs');
// const path = require('path');

// describe("LinkedIn", function () {
//   this.timeout(180000); // Set timeout to 3 minutes

//   it("should login, search for a job, set location, scroll to the bottom, store job IDs excluding 'Easy Apply' jobs, and click the first job", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 30000 });
//     await emailInput.setValue("srikanth9948sri@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 30000 });
//     await passwordInput.setValue("Rajan@91");

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
//     await searchInput.setValue("ML Engineer");
//     await browser.keys("Enter");

//     await browser.pause(10000); // Increase pause time to ensure results load

//     const elements = await $$('.search-reusables__primary-filter');
//     console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

//     for (const element of elements) {
//       const text = await element.getText();
//       if (text.includes('Jobs')) {
//         await element.click();
//         break;
//       }
//     }
//     console.log("clicked on job");

//     const locationInput = await $('[autocomplete="address-level2"]'); 
//     await locationInput.waitForDisplayed({ timeout: 30000 });
//     await locationInput.click();
//     await locationInput.clearValue();
//     await locationInput.setValue("California, United States");
//     await browser.keys("Enter");
//     console.log("location entered ");
//     await browser.pause(10000); // Wait for results to update after location change

//     let jobIds = [];
//     let previousHeight = await browser.execute(() => document.body.scrollHeight);
//     let jobsLoaded = false;
//     console.log("job id's");

//     while (!jobsLoaded) {
//       try {
//         const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//         console.log("while loop ******************");
//         for (const jobElement of jobElements) {
//           console.log("for loop ***************");
//           const jobId = await jobElement.getAttribute('data-occludable-job-id'); // Retrieve the correct attribute
          
//           // Check if the job contains "Easy Apply"
//           const jobText = await jobElement.getText();
//           if (!jobText.includes('Easy Apply')) {
//             if (jobId && !jobIds.includes(jobId)) {
//               console.log("if statement ************************");
//               jobIds.push(jobId);
//             }
//           }
//         }
//       } catch (error) {
//         console.error('Error while collecting job IDs:', error);
//       }

//       await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
//       await browser.pause(5000); // Wait for new elements to load
//       console.log("scrolled down *********************");
//       const newHeight = await browser.execute(() => document.body.scrollHeight);
//       if (newHeight === previousHeight) {
//         jobsLoaded = true;
//       } else {
//         previousHeight = newHeight;
//       }
//     }

//     // Define the file path and name in the project directory
//     const filePath = path.join(__dirname, 'jobIdsML.json');

//     // Convert the job IDs array to a JSON string
//     const jsonData = JSON.stringify(jobIds, null, 2);

//     // Write the job IDs to a JSON file
//     fs.writeFileSync(filePath, jsonData, 'utf8');
//     console.log('Job IDs written to JSON file successfully.');

//    // Click the first job based on job ID
//    if (jobIds.length > 0) {
//     const firstJobId = jobIds[0];
//     console.log(`Clicking job with ID: ${firstJobId}`);
    
//     try {
//       const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//       for (const jobElement of jobElements) {
//         const jobId = await jobElement.getAttribute('data-occludable-job-id');
//         if (jobId === firstJobId) {
//           await jobElement.click();
//           console.log('Clicked on the first job');
//           break;
//         }
//       }
//     } catch (error) {
//       console.error('Error while clicking the first job:', error);
//     }
//   } else {
//     console.log('No jobs found to click.');
//   }
//     // Keep the browser window open for debugging
//     await browser.debug();
//   });
// });







// not clicking easy apply jobs but write easy apply id's in json file :

// const fs = require('fs');
// const path = require('path');

// describe("LinkedIn", function () {
//   this.timeout(180000); // Set timeout to 3 minutes

//   it("should login, search for a job, set location, scroll to the bottom, store job IDs excluding 'Easy Apply' jobs, and click each job with a delay", async () => {
//     await browser.url("https://www.linkedin.com/login/");
//     await browser.maximizeWindow();

//     const emailInput = await $('[name="session_key"]');
//     await emailInput.waitForDisplayed({ timeout: 30000 });
//     await emailInput.setValue("srikanth9948sri@gmail.com");

//     const passwordInput = await $('#password');
//     await passwordInput.waitForDisplayed({ timeout: 30000 });
//     await passwordInput.setValue("Rajan@91");

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
//     await searchInput.setValue("ML Engineer");
//     await browser.keys("Enter");

//     await browser.pause(10000); // Increase pause time to ensure results load

//     const elements = await $$('.search-reusables__primary-filter');
//     console.log(`Found ${elements.length} elements with the class 'search-reusables__primary-filter'`);

//     for (const element of elements) {
//       const text = await element.getText();
//       if (text.includes('Jobs')) {
//         await element.click();
//         break;
//       }
//     }
//     console.log("clicked on job");

//     const locationInput = await $('[autocomplete="address-level2"]'); 
//     await locationInput.waitForDisplayed({ timeout: 30000 });
//     await locationInput.click();
//     await locationInput.clearValue();
//     await locationInput.setValue("California, United States");
//     await browser.keys("Enter");
//     console.log("location entered ");
//     await browser.pause(10000); // Wait for results to update after location change

//     let jobIds = [];
//     let previousHeight = await browser.execute(() => document.body.scrollHeight);
//     let jobsLoaded = false;
//     console.log("job id's");

//     while (!jobsLoaded) {
//       try {
//         const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//         console.log("while loop ******************");
//         for (const jobElement of jobElements) {
//           console.log("for loop ***************");
//           const jobId = await jobElement.getAttribute('data-occludable-job-id'); // Retrieve the correct attribute
          
//           // Check if the job contains "Easy Apply"
//           const jobText = await jobElement.getText();
//           if (!jobText.includes('Easy Apply')) {
//             if (jobId && !jobIds.includes(jobId)) {
//               console.log("if statement ************************");
//               jobIds.push(jobId);
//             }
//           }
//         }
//       } catch (error) {
//         console.error('Error while collecting job IDs:', error);
//       }

//       await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
//       await browser.pause(5000); // Wait for new elements to load
//       console.log("scrolled down *********************");
//       const newHeight = await browser.execute(() => document.body.scrollHeight);
//       if (newHeight === previousHeight) {
//         jobsLoaded = true;
//       } else {
//         previousHeight = newHeight;
//       }
//     }

//     // Define the file path and name in the project directory
//     const filePath = path.join(__dirname, 'jobIdsMLEngineer.json');

//     // Convert the job IDs array to a JSON string
//     const jsonData = JSON.stringify(jobIds, null, 2);

//     // Write the job IDs to a JSON file
//     fs.writeFileSync(filePath, jsonData, 'utf8');
//     console.log('Job IDs written to JSON file successfully.');

//     // Click jobs from the JSON file with a delay
//     if (jobIds.length > 0) {
//       for (const jobId of jobIds) {
//         console.log(`Clicking job with ID: ${jobId}`);
        
//         try {
//           const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
//           for (const jobElement of jobElements) {
//             const elementJobId = await jobElement.getAttribute('data-occludable-job-id');
            
//             // Check if the job does not contain "Easy Apply" before clicking
//             const jobText = await jobElement.getText();
//             if (elementJobId === jobId && !jobText.includes('Easy Apply')) {
//               await jobElement.click();
//               console.log('Clicked on job element');
              
//               // Wait for 5 seconds before clicking the next job
//               await browser.pause(5000);
//               break;
//             }
//           }
//         } catch (error) {
//           console.error(`Error while clicking job with ID ${jobId}:`, error);
//         }
//       }
//     } else {
//       console.log('No jobs found to click.');
//     }

//     // Keep the browser window open for debugging
//     await browser.debug();
//   });
// });











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
    console.log("clicked on job");

    const locationInput = await $('[autocomplete="address-level2"]'); 
    await locationInput.waitForDisplayed({ timeout: 30000 });
    await locationInput.click();
    await locationInput.clearValue();
    await locationInput.setValue("California, United States");
    await browser.keys("Enter");
    console.log("location entered ");
    await browser.pause(10000); // Wait for results to update after location change

    let jobIds = [];
    let previousHeight = await browser.execute(() => document.body.scrollHeight);
    let jobsLoaded = false;
    console.log("job id's");

    while (!jobsLoaded) {
      try {
        const jobElements = await $$('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
        for (const jobElement of jobElements) {
          const jobId = await jobElement.getAttribute('data-occludable-job-id'); // Retrieve the correct attribute
          
          // Check if the job contains "Easy Apply"
          const jobText = await jobElement.getText();
          if (jobText.includes('Easy Apply')) {
            if (jobId && !jobIds.includes(jobId)) {
              jobIds.push(jobId);
            }
          }
        }
      } catch (error) {
        console.error('Error while collecting job IDs:', error);
      }

      await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
      await browser.pause(5000); // Wait for new elements to load

      const newHeight = await browser.execute(() => document.body.scrollHeight);
      if (newHeight === previousHeight) {
        jobsLoaded = true;
      } else {
        previousHeight = newHeight;
      }
    }

    // Define the file path and name in the project directory
    const filePath = path.join(__dirname, 'jobIdsUI.json');

    // Convert the job IDs array to a JSON string
    const jsonData = JSON.stringify(jobIds, null, 2);

    // Write the job IDs to a JSON file
    fs.writeFileSync(filePath, jsonData, 'utf8');
    console.log('Job IDs written to JSON file successfully.');

    // Keep the browser window open for debugging
    await browser.debug();
  });
});

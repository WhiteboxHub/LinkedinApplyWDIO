// describe("linkedin", ()=>{
//     it("login",async ()=>{
//         browser.url("https://www.linkedin.com/login/")
//         browser.pause(5000)
//         await $('[name="session_key"]').setValue("srikanthprabha62@gmail.com")
//         browser.pause(5000)
//         await $('[id="password"]').setValue("Rajan@91")
//         browser.pause(5000)
//         await $('[class="btn__primary--large from__button--floating"]').click()
//         browser.pause(5000)
//         await $('[class="search-global-typeahead__input"]').click().clearValue().setValue("frontend developer")
//         browser.keys('Enter')
//     })
// })




// login.spec.js
describe("LinkedIn", () => {
    it("should login and search for a job", async () => {
        // Open LinkedIn login page
        await browser.url("https://www.linkedin.com/login/");

        // Pause to ensure the page is fully loaded
        await browser.pause(5000);

        // Set email value
        await $('[name="session_key"]').setValue("Enter_email");

        // Pause to simulate user interaction delay
        await browser.pause(5000);

        // Set password value
        await $('[id="password"]').setValue("Enter_password");

        // Pause to simulate user interaction delay
        await browser.pause(5000);

        // Click on the login button
        await $('[class="btn__primary--large from__button--floating"]').click();

        // Pause to simulate wait time after login
        await browser.pause(5000);

        // Click on the search input and set the value
        const searchInput = await $('[class="search-global-typeahead__input"]');
        await searchInput.click();
        await searchInput.clearValue();
        await searchInput.setValue("frontend developer");

        // Press Enter to search
        await browser.keys('Enter');
    });
});

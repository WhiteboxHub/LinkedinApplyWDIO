
describe("LinkedIn", () => {
  it("should login and search for a job", async () => {
    await browser.url("https://www.linkedin.com/login/");

    await browser.pause(5000);

    await $('[name="session_key"]').setValue("srikanthprabha62@gmail.com");

    await browser.pause(5000);

    await $('[id="password"]').setValue("Rajan@91");

    await browser.pause(5000);

    await $('[class="btn__primary--large from__button--floating"]').click();

    await browser.pause(5000);

    const searchInput = await $('[class="search-global-typeahead__input"]');
    await searchInput.click();
    await searchInput.clearValue();
    await searchInput.setValue("frontend developer");

    await browser.keys("Enter");

    const location = await $(
      '[class="jobs-search-box__text-input jobs-search-box__text-input--with-clear"]'
    );
    await location.click();
    await location.clearValue();
    await location.setValue("USA");

    await browser.keys("Enter");
  });
});

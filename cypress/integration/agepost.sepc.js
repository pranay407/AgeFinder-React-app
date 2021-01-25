describe("Age Finder", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Click on Get Age button", () => {
    //btn-post
    cy.get("#btn-post").click();
  });

  //   it("Check input", () => {});

  it("Get Age", () => {
    //input date: #input-date
    //input name: #input-name
    cy.get("#input-date").type("1998-11-11");
  });
});

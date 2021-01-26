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
    cy.get("#input-name").type("Alex");
    cy.get("#input-date").type("1998-11-11");
  });

  it("Post Age", () => {
    cy.get("#input-name").type("Alex");
    cy.get("#input-date").type("1970-04-17");
    cy.get("#btn-post").click();
    cy.wait(1000);
    cy.get('input[name="name"]')
      .invoke("val")
      .then((text) => cy.log(text));
  });
});

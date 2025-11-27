describe("signin", () => {
  it("tests signin", () => {
    cy.viewport(1536, 729);
    cy.visit("http://localhost:5173/");
    cy.get("a:nth-of-type(8) > button").click();
    cy.get("#email").click();
    cy.get("#email").type("tpfl2002");
    cy.get("#email").type("tpfl2001@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("tpfl7777");
    cy.get("#root > div button").click();
    cy.get("div > button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHAHAHBIBJBKBLB

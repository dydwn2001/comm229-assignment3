describe("portfolio menu", () => {
  it("tests portfolio menu", () => {
    cy.viewport(1536, 729);
    cy.visit("http://localhost:5173/");
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(3) > button").click();
    cy.get("a:nth-of-type(4) > button").click();
    cy.get("a:nth-of-type(5) > button").click();
    cy.get("a:nth-of-type(6) > button").click();
    cy.get("a:nth-of-type(7) > button").click();
    cy.get("a:nth-of-type(8) > button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKB

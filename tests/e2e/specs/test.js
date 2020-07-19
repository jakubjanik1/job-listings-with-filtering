import jobsMock from "../../../src/jobs.json";

describe("Job Listings", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show all jobs", () => {
    cy.get(".job").should("have.length", jobsMock.length);
  });

  it("should filter jobs based on role", () => {
    cy.get(".job:first > .job__filters > .job__role").click();

    cy.get(".job").each(job => {
      cy.wrap(job)
        .get(".job__role")
        .should("contain", "Frontend");
    });
  });

  context("Job filters", () => {
    it("should be hidden initially", () => {
      cy.get(".job-filters").should("not.be.visible");
    });

    it('should go back to initial state when "Clear" is clicked', () => {
      cy.get(".job:first > .job__filters > :first").click();
      cy.get(".job:first > .job__filters > :nth-child(3)").click();

      cy.get(".job-filters__clear").click();

      cy.get(".job").should("have.length", jobsMock.length);
      cy.get(".job-filters").should("not.be.visible");
    });
  });
});

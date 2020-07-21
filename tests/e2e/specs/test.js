import jobsMock from "../../../src/jobs.json";

describe("Job Listings", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show all jobs", () => {
    cy.get(".job").should("have.length", jobsMock.length);
  });

  context("Filtering", () => {
    it("should filter jobs based on role", () => {
      cy.get(".job:first > .job__filters")
        .contains("Frontend")
        .click();

      cy.get(".job").each(job => {
        cy.wrap(job).should("contain", "Frontend");
      });
    });

    it("should filter jobs based on level", () => {
      cy.get(".job:first > .job__filters")
        .contains("Senior")
        .click();

      cy.get(".job").each(job => {
        cy.wrap(job).should("contain", "Senior");
      });
    });

    it("should filter jobs based on language", () => {
      cy.get(".job:first > .job__filters")
        .contains("HTML")
        .click();

      cy.get(".job").each(job => {
        cy.wrap(job).should("contain", "HTML");
      });
    });

    it("should filter jobs based on tool", () => {
      cy.get(".job")
        .eq(1)
        .get(".job__filters > .job__tools:first")
        .contains("React")
        .click();

      cy.get(".job").each(job => {
        cy.wrap(job).should("contain", "React");
      });
    });
  });

  context("Job filters", () => {
    it("should be hidden initially", () => {
      cy.get(".job-filters").should("not.be.visible");
    });

    it("should show clicked filters without duplicates", () => {
      cy.get(".job:first > .job__filters")
        .contains("Frontend")
        .click();

      cy.get(".job:first > .job__filters")
        .contains("Senior")
        .click();

      cy.get(".job:first > .job__filters")
        .contains("Senior")
        .click();

      cy.get(".job-filters").should("be.visible");
      cy.get(".job-filters").should("contain", "Frontend");
      cy.get(".job-filters")
        .contains("Senior")
        .should("have.length", 1);
    });

    it('should go back to initial state when "Clear" is clicked', () => {
      cy.get(".job:first > .job__filters > :first").click();
      cy.get(".job:first > .job__filters > :nth-child(3)").click();

      cy.get(".job-filters__clear").click();

      cy.get(".job").should("have.length", jobsMock.length);
      cy.get(".job-filters").should("not.be.visible");
    });

    it("should remove a filter when remove icon is clicked", () => {
      cy.get(".job:first > .job__filters")
        .contains("Frontend")
        .click();

      cy.get(".job-filters__filter:first > .job-filters__remove").click();

      cy.get(".job-filters").should("not.contain", "Frontend");
      cy.get(".job").should("have.length", jobsMock.length);
    });
  });
});

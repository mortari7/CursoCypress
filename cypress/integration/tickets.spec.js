const { describe } = require("mocha");

describe("Tickets", () =>{
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    it("Has 'Ticket-Box' header's heading", ()=>{

    });
});
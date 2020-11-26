describe("Tickets", () =>{
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
    it("Has 'Ticket-Box' header's heading", ()=>{
    });
    it("Fills all the text input fields", () =>{
        const firstName = "Alessandro";
        const lastName = "Mortari";
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("mortari7@hotmail.com");
        cy.get("#requests").type("teste");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    it("Select two tickets", () =>{
        cy.get("#ticket-quantity").select("2");
    });

    it("Select the vip ticket in radio button", () =>{
        cy.get("#vip").check();
    });    
});
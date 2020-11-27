describe("Tickets", () =>{
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
    
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

    it("Select 'Social Media' and check", () => {
        cy.get("#social-media").check();
    });

    it("Select 'Friends and Publication' and check. And Select 'Friends' and uncheck", () =>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it("Has 'Ticket-Box' header's heading", ()=>{
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("alerts on invalid email", ()=>{
        cy.get("#email")
            .as("email")
            .type("alessandromortari-gmail.com");

        cy.get("#email.invalid").should("exist");        

        cy.get("@email").type("mortari7@gmail.com");
        cy.get("#email.invalid").should("not.exist");
    });

    //Testando end to end
    it("fills and reset the form", ()=>{
        const firstName = "Alessandro";
        const lastName = "Mortari";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("mortari7@hotmail.com");
        cy.get("#requests").type("teste");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();

        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();

        cy.get("#signature").type(fullName);
        cy.get("#agree").click();

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");
        
    });

    //Testando comandos customizados
    it("fills Mandatory Fields using support comands", ()=>{
        const customer ={
            firstName: "Alessandro",
            lastName: "Mortari",
            email: "mortari7@hotmail.com"
        }

        cy.fieldMandatoryFields(customer);

        cy.get("#agree").uncheck();

        cy.get("button[type='submit']").should("be.disabled");
    });
});
/// <reference types ="Cypress" /> 

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')

    //cy.get('[data-qa-selector="login_field"]').type("mortari7@hotmail.com");
    //cy.get('[data-qa-selector="passowrd_field"]').type("50109311Al");

    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'));
    cy.get('[data-qa-selector="passowrd_field"]').type(Cypress.env('user_password'));
    cy.get('[data-qa-selector="sign_in_button"]').click();
});

Cypreess.Commands.add('logout', ()=>{
  cy.get('.qa-user-avatar').click();
  cy.contains('Sign Out');
});

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('project/new');
    cy.get('#project_name').type(project.name);
    cy.get('#project_description').type(project.description);
    cy.get('.qa-initialize-with-readme-checkbox').check();
    cy.contains('Create project').click();
});

Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/new`);
  cy.get('qa-issuable-form-title').type(issue.title)
  cy.get('qa-issuable-form-description').type(issue.description)
  cy.contains('Submit issue').click()

});
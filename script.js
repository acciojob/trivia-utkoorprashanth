//your code here\
it('blockquote should have the correct quotation.', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get('blockquote').contains('New Delhi is the capital of India and an administrative district of NCT Delhi');
});

it('blockquote should be used', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get('blockquote');
});

it('blockquote should have cite attribute with correct URL', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get('blockquote').should('have.attr', 'cite', 'https://en.wikipedia.org/wiki/New_Delhi');
});

it('blockquote should have correct CSS applied', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get('blockquote').should('have.css', 'border-left', '8px solid rgb(0, 128, 0)');
    cy.get('blockquote').should('have.css', 'padding', '15px');
    cy.get('blockquote').should('have.css', 'margin', '10px');
    cy.get('blockquote').should('have.css', 'max-width', '600px');
});

describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then (
        function($el) {
          expect($el).to.have.value(75);
        }
      )
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
      .then (
        function($el) {
          expect($el).to.have.value(33);
        }
      )
  });

  it('Volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
      .then (
        function($el) {
          expect($el).to.have.prop('volume', 0.33);
        }
      )
  });

  it('Image and sound sources change when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image')
      .then (
        function($el) {
          expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
        }
      )

    cy.get('#horn-sound')
      .then (
        function($el) {
          expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
        }
      )
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-slider').invoke('val', 70).trigger('input');
    cy.get('#volume-image')
      .then (
        function($el) {
          expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
        }
      )

    cy.get('#volume-slider').invoke('val', 50).trigger('input');
    cy.get('#volume-image')
      .then (
        function($el) {
          expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
        }
      )

    cy.get('#volume-slider').invoke('val', 20).trigger('input');
    cy.get('#volume-image')
      .then (
        function($el) {
          expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
        }
      )

    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image')
      .then (
        function($el) {
          expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
        }
      )
  });
  
  it('Honk button is disabled when the textbox is empty or a non-number', () => {
    cy.get('#volume-number').invoke('val', '').trigger('input');
    cy.get('#honk-btn')
      .then (
        function($el) {
          expect($el).to.have.attr('disabled');
        }
      )

    cy.get('#volume-number').invoke('val', 'yo').trigger('input');
    cy.get('#honk-btn')
      .then (
        function($el) {
          expect($el).to.have.attr('disabled');
        }
      )
  });
  
  it('An error is shown when a number outside of the range for the volume textbox input is typed', () => {
    cy.get('#volume-number').invoke('val', -10).trigger('input');
    cy.get('input:invalid').should('have.length', 1);
  });
});

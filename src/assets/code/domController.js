// import fanoPlane from '../images/Fano_plane.svg';
import{ Deck } from './classes/deck';
import { DeckPage } from './pages/deckPage';

export class DOMController {
  constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.deckPage = '';
  }

  render(gridSize) {
    this.container.innerHTML = ''; // Clear previous content
    this.createDeckPage(gridSize); 

    this.container.append(this.renderTransparentContainer(DOMController.generateReadMeContent()));
  }
  
  createDeckPage(gridSize) {
    // Create deckPage container.
    const deckPageContainer = document.createElement('div');
    deckPageContainer.id = 'deckPageContainer';
    // Append deckPage container to main container.
    this.container.append(deckPageContainer);

    // Create deckPage.
    this.deckPage = new DeckPage(new Deck(gridSize), 'deckPageContainer')
    this.deckPage.render();
  }

  renderTransparentContainer(content) {
    // Create container element
    const transContainer = document.createElement('div');
    transContainer.classList.add('transparent-container');
  
    // Set content
    transContainer.appendChild(content);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
      this.container.removeChild(transContainer); // Remove container from the DOM when close button is clicked
    });

    // Append close button to button container
    buttonContainer.appendChild(closeButton);

    // Append button container to container
    transContainer.appendChild(buttonContainer);
  
    // Return the container
    return transContainer;
  }

  static generateReadMeContent() {
    const container = document.createElement('div');
  
    // Main heading
    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Mono Match  ';
    container.appendChild(mainHeading);

    // Create Material Icon for playing card
    const cardIcon = document.createElement('i');
    cardIcon.classList.add('material-symbols-rounded');
    cardIcon.textContent = 'playing_cards'; // This is the icon name for a playing card

    // Append the icon to the main heading
    mainHeading.appendChild(cardIcon);
  
    // Description
    const description = document.createElement('p');
    description.textContent = 'Mono matching card game: each pair of cards has exactly 1 matching pair of symbols, no more no less.';
    container.appendChild(description);
  
    // Inspired by
    const inspiredBy = document.createElement('p');
    inspiredBy.textContent = 'Inspired by the card games Spot it! and Dobble.';
    container.appendChild(inspiredBy);
  
    // Objective of the game
    const objectiveHeading = document.createElement('h2');
    objectiveHeading.textContent = 'Objective of the game';
    container.appendChild(objectiveHeading);
  
    const objectiveContent = document.createElement('p');
    objectiveContent.textContent = 'Draw 2 cards and be the first to find the matching symbol.';
    container.appendChild(objectiveContent);
  
    // Maths behind the cards
    const mathsHeading = document.createElement('h2');
    mathsHeading.textContent = 'Maths behind the cards';
    container.appendChild(mathsHeading);
  
    const mathsContent = document.createElement('p');
    mathsContent.textContent = 'Creating the deck provided an interesting challenge: how to make sure each card had exactly 1 matching pair with every other card, using the least amount of symbols on each card face. One solution to this is the Fano Plane.';
    container.appendChild(mathsContent);
  
    const fanoPlaneLink = document.createElement('a');
    fanoPlaneLink.href = 'https://en.wikipedia.org/wiki/Fano_plane';
    fanoPlaneLink.textContent = 'Fano Plane';
    container.appendChild(fanoPlaneLink);
  
    // Fano plane image
    const fanoPlaneSvg = document.createElement('img');
    container.appendChild(fanoPlaneSvg);
    fanoPlaneSvg.outerHTML += `
      <?xml version="1.0" encoding="UTF-8"?>
      <svg width="600" height="550" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#fff" stroke-width="3">
          <circle cx="300" cy="354.4" r="158.8"/>
          <path d="m25 513.2h550l-275-476.3z"/>
          <path d="m25 513.2 412.5-238.2"/>
          <path d="m575 513.2-412.5-238.2"/>
          <path d="m300 36.9v476.3"/>
        </g>
        <circle stroke="white" fill="white" cx="300" cy="513.2" r="20"/>
        <circle stroke="white" fill="white" cx="575" cy="513.2" r="20"/>
        <circle stroke="white" fill="white" cx="437.5" cy="275" r="20"/>
        <circle stroke="white" fill="white" cx="300" cy="36.84" r="20"/>
        <circle stroke="white" fill="white" cx="162.5" cy="275" r="20"/>
        <circle stroke="white" fill="white" cx="25" cy="513.2" r="20"/>
        <circle stroke="white" fill="white" cx="300" cy="354.4" r="20"/>
      </svg>
      `;   
  
    const fanoPlaneCaption = document.createElement('p');
    fanoPlaneCaption.textContent = 'Fano Plane: each dot is one of the 7 cards in the 2x2 grid seen in game.';
    container.appendChild(fanoPlaneCaption);
  
    // Great video link
    const greatVideoLink = document.createElement('a');
    greatVideoLink.href = 'https://www.youtube.com/watch?v=VTDKqW_GLkw';
    greatVideoLink.textContent = 'Great video that probably explains it better than I can: How does Dobble (Spot it) work?';
    container.appendChild(greatVideoLink);
  
    return container;
  }
  
}

export default DOMController;
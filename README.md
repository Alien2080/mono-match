# Mono Match
Mono matching card game: each pair of cards has exaclty 1 matching pair of symbols, no more no less.  
[Live Demo](https://alien2080.github.io/mono-match/)  
Inspired by the card games Spot it! and Dobble.  

### Objective of the game
Draw 2 cards and be the first to find the matching symbol.  

## Maths behind the cards
Creating the deck provided an interesting challenge: how to make sure each card had exactly 1 matching pair with every other card, using the least amount of symbols on each card face.  
One solution to this is the [Fano Plane](https://en.wikipedia.org/wiki/Fano_plane): the smallest of the possible planes, constructed via linear algebra as the projective plane over the finite field with two elements. The other, larger solutions are the larger grids.  

### Fano plane
The Fano plane is represented in this game as the 2x2 grid (4 cards), with 3 extra in the infinite projective plane, for a total of 7 cards, with 3 symbols each. Comparing the 2x2 deck to the Fano plane diagram the cards are the dots and the lines represent the matching symbols.  


![Fano plane](src/assets/images/Fano_plane.svg)   
Fano Plane: each dot is one of the 7 cards in the 2x2 grid seen in game.   

Great video that probable explains it better than I can: [How does Dobble (Spot it) work?](https://www.youtube.com/watch?v=VTDKqW_GLkw)


## Planned features
### solo proof of concept  
- [x] create deck using 2D array and fano plane  
- [] symbols always same colour
- [] symbols positioned randomly on card
- [] simple text explanation on screen
- [] larger grize size, n = 11 or 13 
- [] set list of colours with good contrasts to card background colour
- [] clicking a symbol tells you if its correct, and the reaction time
- [] solo more: play 10 pairs of cards, with total and average reaction time as score

### multiplayer proof of concept
- [] FireBase Firestore integration  
- [] 2 or more players can join the same game
- [] test multiplyer player input lag
- [] seperate game lobbies with pass phrases

### full release
- [] navigation menu
- [] about page
- [] splash screen / main menu (use a generated deck as the background)
- [] solo mode
- [] multiplyer mode
- [] mobile phone friendly

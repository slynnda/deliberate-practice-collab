//Blackjack//


let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
let cards = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];


let deck = [];
for (let suitIndex = 0; suitIndex < suits.length; suitIndex++ ){
    for(let cardIndex = 0; cardIndex < cards.length; cardIndex++){
        deck.push(cards[cardIndex] + ' of ' + suits[suitIndex]);
    }
}

console.log(deck);

# Blackjack
A web adaptation of the card game 'Blackjack'

OBJECTIVE
----------------------------------------------------------------------------------------------------------------------------------------
To get as close as possible to a score of 21 without going over

HOW TO PLAY
----------------------------------------------------------------------------------------------------------------------------------------
The player is first prompted to enter their name
First 2 cards are automatically drawn
Player can then choose to hit (draw another card) or hold (keep their current score)
If the player hits and their score exceeds 21, they lose (bust)
Once the player holds, the dealer score will be generated as a number between 17 and 26*
If the player holds and their score is greater than the dealer's then the player wins
If the player holds and the dealer's score is over 21 then the player wins

CARD VALUES
----------------------------------------------------------------------------------------------------------------------------------------
All number cards are worth their value
Aces can change throughout the round and can be worth either 1 or 11 (the program will automatically choose the most beneficial value)
Face cards are worth 10

----------------------------------------------------------------------------------------------------------------------------------------

*Dealer score is 17 to 26 because in a real game, the dealer must hit if their score is under 17. If their score is 16, the max they can draw is 10 (either the number 10 or a face card) so their max score is a 26. An ace would be worth 1 not 11 in this case (dealer would always pick 1 to avoid a bust). 

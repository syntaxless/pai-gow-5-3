# Pai Gow 5-3 Poker

A single-page casino card game designed by Chefff. Open `index.html` in any browser to play; it needs no build step or server.

Play it at https://paigow.itschefff.com. Changes waiting for review can be tried at https://paigow.itschefff.com/unstable/ before they go live.

## How a round works

1. Set your bet and deal. You get 8 cards: the top row is your **5-card hand**, the bottom row is your **3-card hand**.
2. Tap two cards to swap them, and rearrange until you like both hands.
3. Press **DRAW** to lock in. Both hands are scored and paid.

## Provisional rules

These are working defaults, not final. They are waiting on a review by someone who knows the game.

- **Rearrange only.** DRAW does not replace any cards; you only choose how the 8 cards are split between the two hands.
- **Bet split 50/50.** Half of the total bet rides on the 5-card hand and half on the 3-card hand. Each half pays its own paytable multiplier.
- **Twos are wild** in both hands. Five of a kind pays as four of a kind.
- **Jacks & Twos** means a pair of Jacks or better (J, Q, K or A). A wild 2 can complete the pair.
- **5-card must beat 3-card** (the traditional Pai Gow rule) exists as a toggle in the Pays screen and is **off by default**.
- **Paytable is too generous.** With best play it currently returns about 6x the amount bet (roughly 600%), so the multipliers need tuning.
- Coins are free demo coins. Buy and Sale are placeholders.

## Open questions for review

- Should DRAW replace cards, as in video poker, instead of rearranging only?
- Is the 50/50 bet split right, or should each hand take its own bet?
- What should the paytable multipliers be?
- Should the 5-card-must-beat-3-card rule be on?

Comments and pull requests welcome.

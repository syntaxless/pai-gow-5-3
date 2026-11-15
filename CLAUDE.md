# Working on Pai Gow 5-3 Poker

These are the rules for any Claude (or person) making changes to this repo. Follow them every time.

## Before you start any change

1. Fetch and pull the latest `main`: `git checkout main && git pull origin main`.
2. Create a new branch from that fresh `main` for your change, named for what it does (for example `rules/payout-tuning`).

## Never push or merge to main

- `main` is live. Every commit on it is deployed automatically by GitHub Pages to https://paigow.itschefff.com.
- Do all work on your own branch, push the branch, and open a pull request into `main`.
- Never push directly to `main`, and never merge a pull request yourself. Chefff reviews and merges.
- Keep each pull request to one focused change, and describe in it what changed and why.

## Files to leave alone

- Keep the `CNAME` file exactly as it is. It points the site at paigow.itschefff.com; removing or editing it takes the site down.
- Do not add build tools, frameworks or dependencies. The game must keep working when `index.html` is opened directly in a browser.

## The game is one file

- The whole game is in `index.html` (HTML, CSS and JavaScript together).
- Because everyone edits the same file, keep changes small and focused, and touch only the parts your change needs. Don't reformat, reorder or restyle code you aren't changing; that causes merge conflicts.
- If `main` has moved on while your branch is open, pull it and rebase or merge before asking for review.

## Who owns what

- **Chefff owns the visuals and art**: layout, colors, fonts, card and coin artwork, animations and screens. Don't change these unless Chefff asks.
- **Rules and payouts are the collaborator's area**: hand rankings, wild cards, how the bet is split, the paytables, the 5-card-must-beat-3-card rule, and the game logic behind them.

## Keep the README in step

- Whenever a rule or payout changes, update the "Provisional rules" section of `README.md` in the same pull request, so the README always matches what the game does.
- If a change answers one of the README's "Open questions", move it into the rules and remove the question.

## Check your work

- Open `index.html` in a browser and play several hands before opening the pull request.
- For payout changes, say in the pull request roughly what return to the player the new paytable gives, and how you worked it out.

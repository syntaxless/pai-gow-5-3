# Working on Pai Gow 5-3 Poker

These are the rules for any Claude (or person) making changes to this repo. Follow them every time.

## Before you start any change

1. Fetch and pull the latest `main`: `git checkout main && git pull origin main`.
2. Create a new branch from that fresh `main` for your change, named for what it does (for example `rules/payout-tuning`).

## Never push or merge to main

- `main` is live. Every commit on it is deployed automatically by GitHub Pages to https://paigow.itschefff.com.
- Do all work on your own branch, push the branch, and open a pull request into `main`.
- Preview every change at https://paigow.itschefff.com/unstable/ before it is merged (see below).
- Never push directly to `main`, and never merge a pull request yourself. Chefff reviews and merges.
- Keep each pull request to one focused change, and describe in it what changed and why.

## Preview on /unstable before merging

The `unstable` branch is deployed to https://paigow.itschefff.com/unstable/ about a minute after every push. It is a shared test slot: whatever was pushed to it last is what the preview shows.

1. When your branch is ready and its pull request is open, publish it to the preview:
   `git push --force origin HEAD:unstable`
2. Wait for the "Deploy to GitHub Pages" run in the repo's Actions tab to finish, then open https://paigow.itschefff.com/unstable/ and play a few hands there.
3. Share the preview link with Chefff (and the pull request link), and say which change it shows.
4. The pull request is merged into `main` only after Chefff (or the friend reviewing it) has tried the preview and approved. Chefff does the merge.

Notes:
- Only one change can be on the preview at a time. Before pushing, check with Chefff that nobody else's change is being tested there right now, and after a merge it's fine to overwrite it.
- Always branch from fresh `main`, so the preview is your change on top of the live game and nothing else.
- The preview is not counted in GoatCounter, is hidden from search engines, and installs to the Home Screen as a separate app named "Pai Gow β". Its service worker and cache are separate from the live site's.
- `.github/workflows/pages.yml` builds the site. Leave it alone unless the change is about deploying.

## Files to leave alone

- Keep the `CNAME` file exactly as it is. It points the site at paigow.itschefff.com; removing or editing it takes the site down.
- Do not add build tools, frameworks or dependencies. The game must keep working when `index.html` is opened directly in a browser.

## The game is one file

- The whole game is in `index.html` (HTML, CSS and JavaScript together).
- Because everyone edits the same file, keep changes small and focused, and touch only the parts your change needs. Don't reformat, reorder or restyle code you aren't changing; that causes merge conflicts.
- If `main` has moved on while your branch is open, pull it and rebase or merge before asking for review.

## Visual and design changes

- Visual changes (layout, colors, fonts, card and coin artwork, animations, screens) are welcome, but agree on them with Chefff before making them. Chefff did the original art and design.
- Keep visual changes in their own pull request, separate from rules and payout changes.

## Keep the README in step

- Whenever a rule or payout changes, update the "Provisional rules" section of `README.md` in the same pull request, so the README always matches what the game does.
- If a change answers one of the README's "Open questions", move it into the rules and remove the question.

## Check your work

- Open `index.html` in a browser and play several hands before opening the pull request.
- For payout changes, say in the pull request roughly what return to the player the new paytable gives, and how you worked it out.

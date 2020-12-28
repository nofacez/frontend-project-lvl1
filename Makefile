install:
	npm install

brain_games:
	node bin/games/brain-games.js

brain-even:
	node bin/games/brain-even.js

publish:
	npm publish --dry-run

lint: 
	npx eslint .
install:
	npm install

brain_games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint: 
	npx eslint .
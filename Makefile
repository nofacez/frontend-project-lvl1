install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js
	
brain-cals:
	node bin/brain-cals.js
	
publish:
	npm publish --dry-run

lint: 
	npx eslint .
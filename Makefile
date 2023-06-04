install:
		npm ci
run:
		npx parcel src/index.html
publish:
		npm publish --dry-run
test:
		npm test
test-coverage:
		npm test -- --coverage --coverageProvider=v8
lint:
		npx eslint

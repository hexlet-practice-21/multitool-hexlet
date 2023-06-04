install:
		npm ci
run:
		npx parcel src/index.html
publish:
		npm publish --dry-run
test-coverage:
		npm test -- --coverage --coverageProvider=v8
lint:
		npx eslint

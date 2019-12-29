.PHONY: all
all:
	mkdir --parents build
	tsc --outFile build/index.js
	cp src/index.html build/index.html

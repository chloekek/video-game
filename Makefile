.PHONY: all
all:
	mkdir --parents build
	tsc --outFile build/index.js
	cp src/index.html build/index.html
	krita assets/thornicleBush.kra --export --export-filename build/thornicleBush.png

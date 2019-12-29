TS_SOURCES=$(shell find src -name '*.ts')

KRITA_SOURCES=$(shell find assets -name '*.kra')
KRITA_TARGETS=$(patsubst assets/%.kra,build/%.png,${KRITA_SOURCES})

all: build/index.html build/index.js ${KRITA_TARGETS}

build/index.html: src/index.html
	mkdir --parents $(dir $@)
	cp $< $@

build/index.js: ${TS_SOURCES}
	mkdir --parents $(dir $@)
	tsc --outFile $@

build/%.png: assets/%.kra
	mkdir --parents $(dir $@)
	krita $< --export --export-filename $@

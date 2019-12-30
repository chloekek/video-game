namespace VideoGame {
    export class Tile {
        public entity: Entity | null;
        public items: Item[];

        constructor() {
            this.entity = null;
            this.items = [];
        }
    }

    export class World {
        private readonly tiles: Tile[];
        private readonly width: number;
        private readonly height: number;

        constructor(width: number, height: number) {
            const tiles = Array(width * height);
            for (let x = 0; x < width; ++x)
                for (let y = 0; y < height; ++y)
                    tiles[y * width + x] = new Tile();

            this.tiles = tiles;
            this.width = width;
            this.height = height;
        }

        *positionedTiles(): Iterable<[number, number, Tile]> {
            const tiles = this.tiles;
            const width = this.width;
            const height = this.height;
            for (let x = 0; x < width; ++x)
                for (let y = 0; y < height; ++y)
                    yield [x, y, tiles[y * width + x]];
        }

        tileAt(x: number, y: number): Tile | null {
            if (x < 0 || x >= this.width || y <= 0 || y >= this.height)
                return null;
            return this.tiles[y * this.width + x];
        }

        spawnEntity(x: number, y: number, entity: Entity): boolean {
            const tile = this.tileAt(x, y);
            if (tile === null || tile.entity !== null)
                return false;
            tile.entity = entity;
            return true;
        }

        spawnItem(x: number, y: number, item: Item): boolean {
            const tile = this.tileAt(x, y);
            if (tile === null)
                return false;
            tile.items.push(item);
            return true;
        }
    }
}

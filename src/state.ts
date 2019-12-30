namespace VideoGame {
    export class State {
        public readonly world: World;

        public playerX: number;
        public playerY: number;
        public playerHealth: number;

        constructor() {
            this.world = new World(32, 32);

            this.playerX = 0;
            this.playerY = 0;
            this.playerHealth = 100;

            this.world.spawnEntity(5, 5, new ThornicleBush());
            this.world.spawnEntity(9, 6, new ThornicleBush());

            this.world.spawnItem(6, 9, new Stick());
        }

        travel(dx: number, dy: number): void {
            const newPlayerX = this.playerX + dx;
            const newPlayerY = this.playerY + dy;

            if (this.thornicleBushAt(newPlayerX, newPlayerY)) {
                this.harmPlayer(10);
                return;
            }

            this.playerX = newPlayerX;
            this.playerY = newPlayerY;
        }

        harmPlayer(hit: number): void {
            this.playerHealth -= hit;
        }

        thornicleBushAt(x: number, y: number): boolean {
            const tile = this.world.tileAt(x, y);
            if (tile === null)
                return false;
            return tile.entity instanceof ThornicleBush;
        }
    }
}

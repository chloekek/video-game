namespace VideoGame {
    export class State {
        public playerX: number;
        public playerY: number;
        public playerHealth: number;

        public thornicleBushes: ThornicleBush[];

        constructor() {
            this.playerX = 0;
            this.playerY = 0;
            this.playerHealth = 100;

            this.thornicleBushes = [
                new ThornicleBush(5, 5),
                new ThornicleBush(9, 6),
            ];
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
            for (let object of this.thornicleBushes)
                if (object.x === x && object.y === y)
                    return true;
            return false;
        }
    }
}

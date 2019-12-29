namespace VideoGame {
    export class State {
        public playerX: number;
        public playerY: number;

        constructor() {
            this.playerX = 0;
            this.playerY = 0;
        }

        travel(dx: number, dy: number): void {
            this.playerX += dx;
            this.playerY += dy;
        }
    }
}

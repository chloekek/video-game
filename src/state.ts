namespace VideoGame {
    export class State {
        public playerX: number;
        public playerY: number;

        public thornicleBushes: ThornicleBush[];

        constructor() {
            this.playerX = 0;
            this.playerY = 0;

            this.thornicleBushes = [
                new ThornicleBush(5, 5),
                new ThornicleBush(9, 6),
            ];
        }

        travel(dx: number, dy: number): void {
            this.playerX += dx;
            this.playerY += dy;
        }
    }
}

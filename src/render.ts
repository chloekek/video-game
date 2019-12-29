namespace VideoGame {
    const UNIT = 48;

    export class Render {
        private readonly canvas: HTMLCanvasElement;
        private readonly context: CanvasRenderingContext2D;

        constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
            const context = canvas.getContext("2d");
            if (context === null)
                throw Error("Cannot create canvas rendering context");
            this.context = context;
        }

        render(state: State): void {
            this.context.fillStyle = "black";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.fillStyle = "green";
            this.context.fillRect(
                /* x */ UNIT * state.playerX - UNIT / 2,
                /* y */ UNIT * state.playerY - UNIT / 2,
                /* w */ UNIT,
                /* h */ UNIT,
            );
        }
    }
}

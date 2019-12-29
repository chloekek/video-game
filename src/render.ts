namespace VideoGame {
    const UNIT = 48;

    export class Render {
        private readonly canvas: HTMLCanvasElement;
        private readonly context: CanvasRenderingContext2D;

        private readonly playerHealthContainer: HTMLSpanElement;

        constructor(container: HTMLElement) {
            const canvas = document.createElement("canvas");
            canvas.width = 640;
            canvas.height = 480;

            const context = canvas.getContext("2d");
            if (context === null)
                throw Error("Cannot create canvas rendering context");

            const playerHealthContainer = document.createElement("span");

            container.appendChild(canvas);
            container.appendChild(playerHealthContainer);

            this.canvas = canvas;
            this.context = context;
            this.playerHealthContainer = playerHealthContainer;
        }

        render(state: State): void {
            this.playerHealthContainer.textContent = "" + state.playerHealth;

            this.context.fillStyle = "black";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.fillStyle = "green";
            this.context.fillRect(
                /* x */ UNIT * state.playerX - UNIT / 2,
                /* y */ UNIT * state.playerY - UNIT / 2,
                /* w */ UNIT,
                /* h */ UNIT,
            );

            this.context.fillStyle = "red";
            for (let object of state.thornicleBushes) {
                this.context.fillRect(
                    /* x */ UNIT * object.x - UNIT / 2,
                    /* y */ UNIT * object.y - UNIT / 2,
                    /* w */ UNIT,
                    /* h */ UNIT,
                );
            }
        }
    }
}

namespace VideoGame {
    const UNIT = 48;

    export class Render {
        private readonly canvas: HTMLCanvasElement;
        private readonly context: CanvasRenderingContext2D;
        private readonly playerHealthContainer: HTMLSpanElement;

        private readonly stickImage: HTMLImageElement;
        private readonly thornicleBushImage: HTMLImageElement;

        constructor(container: HTMLElement) {
            const canvas = document.createElement("canvas");
            canvas.width = 640;
            canvas.height = 480;

            const context = canvas.getContext("2d");
            if (context === null)
                throw Error("Cannot create canvas rendering context");

            const playerHealthContainer = document.createElement("span");

            const stickImage = document.createElement("img");
            stickImage.src = "stick.png";

            const thornicleBushImage = document.createElement("img");
            thornicleBushImage.src = "thornicleBush.png";

            container.appendChild(canvas);
            container.appendChild(playerHealthContainer);

            this.canvas = canvas;
            this.context = context;
            this.playerHealthContainer = playerHealthContainer;

            this.stickImage = stickImage;
            this.thornicleBushImage = thornicleBushImage;
        }

        render(state: State): void {
            this.playerHealthContainer.textContent = "" + state.playerHealth;

            this.context.fillStyle = "silver";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.fillStyle = "green";
            this.context.fillRect(
                /* x */ UNIT * state.playerX - UNIT / 2,
                /* y */ UNIT * state.playerY - UNIT / 2,
                /* w */ UNIT,
                /* h */ UNIT,
            );

            for (let object of state.sticks) {
                this.context.drawImage(
                    /* image */ this.stickImage,
                    /* x */ UNIT * object.x - UNIT / 2,
                    /* y */ UNIT * object.y - UNIT / 2,
                );
            }

            for (let object of state.thornicleBushes) {
                this.context.drawImage(
                    /* image */ this.thornicleBushImage,
                    /* x */ UNIT * object.x - UNIT / 2,
                    /* y */ UNIT * object.y - UNIT / 2,
                );
            }
        }
    }
}

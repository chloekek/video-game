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

            for (let [x, y, tile] of state.world.positionedTiles())
                this.renderTile(x, y, tile);
        }

        private renderTile(x: number, y: number, tile: Tile): void {
            const entity = tile.entity;
            if (entity !== null)
                this.renderEntity(x, y, entity);

            for (let item of tile.items)
                this.renderItem(x, y, item);
        }

        private renderEntity(x: number, y: number, entity: Entity): void {
            if (entity instanceof ThornicleBush)
                this.context.drawImage(
                    /* image */ this.thornicleBushImage,
                    /* x */ UNIT * x - UNIT / 2,
                    /* y */ UNIT * y - UNIT / 2,
                );
        }

        private renderItem(x: number, y: number, item: Item): void {
            if (item instanceof Stick)
                this.context.drawImage(
                    /* image */ this.stickImage,
                    /* x */ UNIT * x - UNIT / 2,
                    /* y */ UNIT * y - UNIT / 2,
                );
        }
    }
}

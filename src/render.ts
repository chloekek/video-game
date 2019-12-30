namespace VideoGame {
    const UNIT = 48;

    export class Render {
        private readonly canvas: HTMLCanvasElement;
        private readonly context: CanvasRenderingContext2D;
        private readonly playerHealthContainer: HTMLSpanElement;

        private readonly stickImage: HTMLImageElement;

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

            container.appendChild(canvas);
            container.appendChild(playerHealthContainer);

            this.canvas = canvas;
            this.context = context;
            this.playerHealthContainer = playerHealthContainer;

            this.stickImage = stickImage;
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
            const sprite = entity.sprite();
            const px = UNIT * x - sprite.width / 2;
            const py = UNIT * y - sprite.height / 2;
            this.context.drawImage(sprite, px, py);
        }

        private renderItem(x: number, y: number, item: Item): void {
            if (item === Item.Stick)
                this.context.drawImage(
                    /* image */ this.stickImage,
                    /* x */ UNIT * x - UNIT / 2,
                    /* y */ UNIT * y - UNIT / 2,
                );
        }
    }
}

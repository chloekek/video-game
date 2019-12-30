namespace VideoGame {
    const sprite = document.createElement("img");
    sprite.src = "thornicleBush.png";

    export class ThornicleBush implements Entity {
        sprite(): HTMLImageElement {
            return sprite;
        }
    }
}

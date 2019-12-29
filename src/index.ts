namespace VideoGame {
    export function main(): void {
        const state = new State();

        const canvas = document.createElement("canvas");
        const render = new Render(canvas);
        canvas.width = 640;
        canvas.height = 480;
        document.body.appendChild(canvas);

        render.render(state);
        addEventListener("keydown", ev => {
            switch (ev.code) {
                case "KeyW": state.travel( 0, -1); render.render(state); break;
                case "KeyA": state.travel(-1,  0); render.render(state); break;
                case "KeyS": state.travel( 0,  1); render.render(state); break;
                case "KeyD": state.travel( 1,  0); render.render(state); break;
            }
        });
    }
}

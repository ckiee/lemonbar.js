import LemonbarJS from "./index";

async function start() {
    // NOT Minimalistic example
    const bar = await LemonbarJS.make({
        redirect_stdout: true,
        clickableAreas: 5,
        docking: {
            bottom: true,
            force: false
        },
    });
    bar.write("Hello WORLD this is lemonbar.js");
}
start();
import LemonbarJS from "./index";

// Most minimal example
const bar = new LemonbarJS({
    redirect_stdout: true,
    clickableAreas: 5
});
bar.launch();
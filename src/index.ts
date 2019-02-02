import * as opts from "./util";
import proc from "mz/child_process";

class LemonbarJS {
    private opts: opts.ILemonbarOptions;
    constructor (opts: opts.ILemonbarOptions) {
        this.opts = opts;
    }
    /**
     * Launch lemonbar
     */
    public async launch() {
        const opts = this.opts;
        const args = this.generateArgArray();
        const lemp = await proc.spawn(`lemonbar`, args, {shell: false});
        if (opts.redirect_stdout) lemp.stdout.pipe(process.stdout);
    }
    private generateArgArray(): Array<string> {
        const opts = this.opts;
        const geometry = opts.geometry ? `-g ${opts.geometry.width}x${opts.geometry.height}` : "";
        const dockBottom = opts.docking ? opts.docking.bottom ? "-b" : "" : "";
        const dockForce = opts.docking ? opts.docking.force ? "-d" : "" : "";
        const font = opts.font ? `-f ${opts.font}` : "";
        const clickableAreas = opts.clickableAreas ? `-a ${opts.clickableAreas}` : "";
        const wm_name = opts.wm_name ? `-n ${opts.wm_name}` : "";
        const underline_width = opts.underline_width ? `${opts.underline_width}` : "";
        const bgColor = opts.colors ? `-B ${opts.colors.bg}` : "";
        const fgColor = opts.colors ? `-F ${opts.colors.fg}` : "";
        const ulColor = opts.colors ? `-U ${opts.colors.underline}` : "";
        const arr = [geometry, dockBottom, dockForce, font, clickableAreas, wm_name, underline_width, bgColor, fgColor, ulColor];
        const filtered = arr.filter(a => a.length !== 0);
        return filtered;
        // return filtered.length == 0 ? "" : ` ${filtered.join(" ")}`;
    }
}

export default LemonbarJS;
// export * from "./options";
/**
 * Self-exlpantory
 */
interface ILemonbarOptions {
    geometry?: ILemonbarWindowGeometry;
    docking?: ILemonbarDockingOptions;
    font?: string;
    clickableAreas?: number;
    wm_name?: string;
    underline_width?: number; // This is in pixels
    colors?: ILemonbarColors;
    redirect_stdout: boolean;
}
/**
 * Self-exlpantory
 */
interface ILemonbarDockingOptions {
    bottom: boolean;
    force: boolean;
}
/**
 * This holds the bar size (width and height)
 *
 * TODO: Add the other part (I think it's padding)
 */
interface ILemonbarWindowGeometry {
    width: number;
    height: number;
}
/**
 * This holds all of the color options Lemonbar can display.
 */
interface ILemonbarColors {
    bg: LemonbarColor;
    fg: LemonbarColor;
    underline: LemonbarColor;
}
/**
 * This is the representation of a color in Lemonbar.js.
 * It should be made with the color string as a hex number without the starting \#
 *
 * Example:
 *
 * OK: `00000`, THIS IS BAD: `#00000`
 */
export class LemonbarColor implements IToString {
    private color: string;
    constructor(color: string) {
        this.color = color;
    }
    public getColorAsHexStr(): string {
        return this.color;
    }
    public toString(): string {
        return this.color;
    }
}

/** INTERNAL USE ONLY*/
interface IToString {
    toString(): string;
}

export function generateArgArray(opts: ILemonbarOptions): Array<string> {
    const geometry = opts.geometry
        ? `-g ${opts.geometry.width}x${opts.geometry.height}`
        : "";
    const dockBottom = opts.docking
        ? opts.docking.bottom
            ? "-b"
            : ""
        : "";
    const dockForce = opts.docking ? (opts.docking.force ? "-d" : "") : "";
    const font = opts.font ? `-f ${opts.font}` : "";
    const clickableAreas = opts.clickableAreas
        ? `-a ${opts.clickableAreas}`
        : "";
    const wm_name = opts.wm_name ? `-n ${opts.wm_name}` : "";
    const underline_width = opts.underline_width
        ? `${opts.underline_width}`
        : "";
    const bgColor = opts.colors ? `-B ${opts.colors.bg}` : "";
    const fgColor = opts.colors ? `-F ${opts.colors.fg}` : "";
    const ulColor = opts.colors ? `-U ${opts.colors.underline}` : "";
    const arr = [
        geometry,
        dockBottom,
        dockForce,
        font,
        clickableAreas,
        wm_name,
        underline_width,
        bgColor,
        fgColor,
        ulColor
    ];
    const filtered = arr.filter((a) => a.length !== 0);
    return filtered;
    // return filtered.length == 0 ? "" : ` ${filtered.join(" ")}`;
}

export { ILemonbarOptions }
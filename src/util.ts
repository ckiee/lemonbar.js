/**
 * Self-exlpantory
 */
interface ILemonbarOptions {
    geometry?: ILemonbarWindowGeometry,
    docking?: ILemonbarDockingOptions,
    font?: string,
    clickableAreas?: number,
    wm_name?: string,
    underline_width?: number, // This is in pixels
    colors?: ILemonbarColors,
    redirect_stdout: boolean
}
/**
 * Self-exlpantory
 */
interface ILemonbarDockingOptions {
    bottom: boolean,
    force: boolean
}
/**
 * This holds the bar size (width and height)
 * 
 * TODO: Add the other part (I think it's padding)
 */
interface ILemonbarWindowGeometry {
    width: number,
    height: number
}
/**
 * This holds all of the color options Lemonbar can display.
 */
interface ILemonbarColors {
    bg: LemonbarColor,
    fg: LemonbarColor,
    underline: LemonbarColor
}
/**
 * This is the representation of a color in Lemonbar.js.
 * It should be made with the color string as a hex number without the starting \#
 * 
 * Example:
 * 
 * OK: `00000`, THIS IS BAD: `#00000`
 */
class LemonbarColor implements IToString {
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
/**
 *  A ILemonbarPart is a piece of text with ILemonbarModifier's that the user writes. ex. Clock part shows the time in a desired format.
 */
interface ILemonbarPart {
    /** This function needs to return the text. ex. the time as a Promise that resolves to a string */
    execute(): Promise<string>;
    readonly modifiers: Array<ILemonbarModifier>;
}

/** INTERNAL USE ONLY*/
interface IToString {
    toString(): string
}

/**
 * A ILemonbarModifier holds the modifier data (ex. centered text, colored text, etc.) 
 * 
 * It is implemented by the library and does not need to be implemented by the user.
 */
interface ILemonbarModifier {
    generate<T extends IToString>(arg: T): string;
    /** This is not a function as lemonbar does not need the arg to remove a "modifier" */
    readonly generateRemoval: string;
    name: string;
}

export { LemonbarColor, ILemonbarColors, ILemonbarWindowGeometry, ILemonbarDockingOptions, ILemonbarOptions, ILemonbarPart, ILemonbarModifier, IToString };
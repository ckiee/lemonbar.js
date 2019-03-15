import * as util from "./util";
import proc from "mz/child_process";

class LemonbarJS {
    protected opts: util.ILemonbarOptions;
    private lemp: proc.ChildProcess;
    private constructor(opts: util.ILemonbarOptions, lemp: proc.ChildProcess) {
        this.opts = opts;
        this.lemp = lemp;
    }
    public static async make(opts: util.ILemonbarOptions) {
        const lemp = await LemonbarJS.launch(opts);
        const self = new LemonbarJS(opts, lemp);
        return self;
    }
    /**
     * Launch lemonbar
     */
    private static async launch(opts: util.ILemonbarOptions) {
        const args = util.generateArgArray(opts);
        const lemp = await proc.spawn(`lemonbar`, args, { shell: false });
        if (opts.redirect_stdout) lemp.stdout.pipe(process.stdout);
        return lemp;
    }

    public write(str: string) {
        return new Promise((resolve, reject) => {
            this.lemp.stdin.write(`${str}\n`, err => { if (err) reject(err); else resolve(); });
        });
    }
}

export default LemonbarJS;
export * from "./util";
// export * from "./options";
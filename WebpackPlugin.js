const { Compilation } = require("webpack");

// Plug-in
module.exports = class WebpackPlugin {

    constructor() {}

    apply(compiler) {

        compiler.hooks.thisCompilation.tap("WebpackPlugin", (compilation) => {
            
            // processAssets
            compilation.hooks.processAssets.tap({
                name: "DtsBundlerPlugin",
                state: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE,
            }, (assets) => {
                console.log("Notice no .d.ts files at processAssets hook:")
                console.log("--------------------------------------------")
                console.log(compilation.getAssets());
            });

            // record
            compilation.hooks.record.tap({
                name: "DtsBundlerPlugin"
            }, () => {
                console.log("\nNotice .d.ts files at record hook:")
                console.log("-----------------------------------")
                console.log(compilation.getAssets());
            });

        });

    }

}
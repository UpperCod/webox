import renameExtensions from "@betit/rollup-plugin-rename-extensions";
import builtins from "builtin-modules";
import pkg from "./package.json";

export default {
    input: ["./src/plugin-css.js"],
    output: {
        dir: "./",
        format: "cjs",
        sourcemap: false,
    },
    external: Object.keys(pkg.dependencies || {}).concat(builtins),
    plugins: [
        renameExtensions({
            include: ["**/*.js"],
            mappings: {
                ".js": ".cjs",
            },
        }),
    ],
};

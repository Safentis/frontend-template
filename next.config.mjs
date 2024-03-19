import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: process.env.NODE_ENV === "development",
    sassOptions: {
        includePaths: [path.join(__dirname, "src", "shared", "styles")],
        prependData: `@import "globals.scss";`,
    },
};

export default nextConfig;

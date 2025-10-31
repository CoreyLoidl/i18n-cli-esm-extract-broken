import { runExtractor } from "i18next-cli";
import i18nextConfig from "./i18next.config"; // esm syntax
// import i18nextConfig from "./i18next.config.ts"; // module syntax

runExtractor(i18nextConfig);

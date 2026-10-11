import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const NextConfig: NextConfig = {};
export default withVanillaExtract(NextConfig);

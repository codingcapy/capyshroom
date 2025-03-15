import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
    out: "./drizzle",
    schema: "./connect.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.CONNECTIONSTRING!,
    },
});

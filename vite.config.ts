import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import EnvironmentPlugin from "vite-plugin-environment";
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), EnvironmentPlugin(["API_URL"], { loadEnvFiles: true })],
    server: {
      port: Number(process.env.VITE_PORT) || 3001,
    },
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};

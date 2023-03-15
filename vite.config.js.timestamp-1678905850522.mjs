// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///home/tombos/Downloads/Main/Bar-U-Nasich/node_modules/vite/dist/node/index.js";
import react from "file:///home/tombos/Downloads/Main/Bar-U-Nasich/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "/home/tombos/Downloads/Main/Bar-U-Nasich";
var root = resolve(__vite_injected_original_dirname, "src");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
        contact: resolve(root, "contact", "index.html"),
        menu: resolve(root, "menu", "index.html"),
        reservation: resolve(root, "reservation", "index.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90b21ib3MvRG93bmxvYWRzL01haW4vQmFyLVUtTmFzaWNoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS90b21ib3MvRG93bmxvYWRzL01haW4vQmFyLVUtTmFzaWNoL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3RvbWJvcy9Eb3dubG9hZHMvTWFpbi9CYXItVS1OYXNpY2gvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cm9vdCxcblx0cGx1Z2luczogW3JlYWN0KCldLFxuXHRidWlsZDoge1xuXHRcdG91dERpcixcblx0XHRlbXB0eU91dERpcjogdHJ1ZSxcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRtYWluOiByZXNvbHZlKHJvb3QsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgYWJvdXQ6IHJlc29sdmUocm9vdCwgXCJhYm91dFwiLCBcImluZGV4Lmh0bWxcIiksXG4gICAgICAgIGNvbnRhY3Q6IHJlc29sdmUocm9vdCwgXCJjb250YWN0XCIsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgbWVudTogcmVzb2x2ZShyb290LCBcIm1lbnVcIiwgXCJpbmRleC5odG1sXCIpLFxuICAgICAgICByZXNlcnZhdGlvbjogcmVzb2x2ZShyb290LCBcInJlc2VydmF0aW9uXCIsIFwiaW5kZXguaHRtbFwiKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLGVBQWU7QUFDbFUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sT0FBTyxRQUFRLGtDQUFXLEtBQUs7QUFDckMsSUFBTSxTQUFTLFFBQVEsa0NBQVcsTUFBTTtBQUd4QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNOO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsTUFDZCxPQUFPO0FBQUEsUUFDTixNQUFNLFFBQVEsTUFBTSxZQUFZO0FBQUEsUUFDNUIsT0FBTyxRQUFRLE1BQU0sU0FBUyxZQUFZO0FBQUEsUUFDMUMsU0FBUyxRQUFRLE1BQU0sV0FBVyxZQUFZO0FBQUEsUUFDOUMsTUFBTSxRQUFRLE1BQU0sUUFBUSxZQUFZO0FBQUEsUUFDeEMsYUFBYSxRQUFRLE1BQU0sZUFBZSxZQUFZO0FBQUEsTUFDM0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

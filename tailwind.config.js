/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.tsx"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

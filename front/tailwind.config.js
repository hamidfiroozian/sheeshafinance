module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        consola: ["consola"],
        consolab: ["consolab"],
        consolai: ["consolai"],
        consolaz: ["consolaz"],
      },
      backgroundImage: (theme) => ({
        header: "url('/assets/ELEMENTS-PC/bkgnd-header-stroke-PC.png')",
        main: "url('/assets/ELEMENTS-PC/bkgnd-main-PC.png')",
        navSelected: "url('/assets/btn-header-mode-selected.png')",
        navDefault: "url('/assets/btn-header-mode-default.png')",
      }),
      colors: {
        night: "#0f1f3a",
        alarm: "#f46019a3",
        cardbg: { dark: "#000000b5", light: "#e4e4e4d1" },
      },
      spacing: {
        100: "27rem",
        128: "32rem",
        144: "47rem",
      },
    },
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      animation: {
        orbit: "orbit 10s linear infinite",
      },
      backgroundImage: {
        "gradient-border":
          "linear-gradient(to bottom right, #3b82f6 0%, transparent 50%, #ef4444 100%)",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateY(-10px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateY(-10px) rotate(-360deg)",
          },
        },
      },
    },
  },
};

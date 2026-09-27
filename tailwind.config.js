export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F8FA",
        surface: "#FFFFFF",
        "surface-muted": "#F8FAFC",
        border: "#D9DEE6",
        grid: "#E7EBF0",
        "text-primary": "#111827",
        "text-secondary": "#475569",
        "text-muted": "#94A3B8",
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        "primary-soft": "#EFF6FF",
        status: "#0F9D8A",
        "status-soft": "#CCFBF1",
        connection: "#CBD5E1",
        "connection-active": "#93C5FD",
      },
      boxShadow: {
        card: "0 2px 8px rgba(15, 23, 42, 0.06)",
        "card-lg": "0 4px 16px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
}

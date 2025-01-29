import { defaultConfig } from "@tamagui/config/v4";
import { createFont, createTamagui, createTokens } from "tamagui";

const BLACK = "#000";

const PROFITR_BLUE = "#405BF3";
const SILVERSTONE = "#FBFBFB";
const STEEL = "#A0A8C3";
const MIDNIGHT_BLUE = "#030543";
const GRAPHITE = "#101010";

const PULSE_YELLOW = "#D9FE35";
const BLUSH = "#FED3F1";
const AMBER = "#FFA454";
const JADE = "#1F9370";
const SKYLINE = "#89D4FC";

export const headingFont = createFont({
  family:
    'Suisse Intl, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  weight: {
    4: "700",
    10: "700",
  },
  size: {
    5: 16, // H6
    6: 18, // H5
    7: 20, // H4
    8: 26, // H3
    9: 32, // H2
    10: 40, // H1
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
  },
  lineHeight: {
    3: 20,
    4: 22,
    5: 24, // H6
    6: 26, // H5
    7: 28, // H4
    8: 34, // H3
    9: 40, // H2
    10: 48, // H1
    11: 66,
    12: 74,
    13: 86,
    14: 110,
    15: 137,
    16: 161,
  },
  letterSpacing: {
    1: 0,
    10: 0,
  },
});

export const bodyFont = createFont({
  family:
    'Suisse Intl, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  weight: {
    1: "400",
    2: "400",
    3: "400",
    true: "400",
    4: "700",
    5: "700",
    6: "700",
    7: "700",
    8: "700",
    9: "700",
    10: "800",
  },
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 24,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
    true: 14,
  },
  lineHeight: {
    1: 13,
    4: 16,
    5: 18,
    6: 20,
    7: 24,
    8: 28,
    9: 32,
    10: 38,
    11: 48,
    12: 56,
    13: 68,
    14: 92,
    15: 124,
    16: 148,
    true: 17,
  },
  letterSpacing: {
    1: 0,
    10: 0,
  },
});

export const config = createTamagui({
  ...defaultConfig,
  themes: {
    dark: {
      background: "#000",
      backgroundHover: "#111",
      backgroundPress: "#222",
      backgroundFocus: "#333",
      backgroundStrong: "#444",
      backgroundTransparent: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      colorHover: "#eee",
      colorPress: "#ddd",
      colorFocus: "#ccc",
      colorTransparent: "rgba(255, 255, 255, 0.5)",
      borderColor: "#555",
      borderColorHover: "#666",
      borderColorFocus: "#777",
      borderColorPress: "#888",
      placeholderColor: "#999",
      outlineColor: "#aaa",
      brand: PROFITR_BLUE,
      skyline: SKYLINE,
    },
    light: {
      background: "#fff",
      backgroundHover: "#f5f5f5",
      backgroundPress: "#e0e0e0",
      backgroundFocus: "#d5d5d5",
      backgroundStrong: "#ccc",
      backgroundTransparent: "rgba(255, 255, 255, 0.5)",
      color: "#000",
      colorHover: "#111",
      colorPress: "#222",
      colorFocus: "#333",
      colorTransparent: "rgba(0, 0, 0, 0.5)",
      borderColor: "#444",
      borderColorHover: "#555",
      borderColorFocus: "#666",
      borderColorPress: "#777",
      placeholderColor: "#888",
      outlineColor: "#999",
      brand: PROFITR_BLUE,
      skyline: SKYLINE,
    },
    light_accent: {
      background: "#fff",
      backgroundHover: "#f5f5f5",
      backgroundPress: "#e0e0e0",
      backgroundFocus: "#d5d5d5",
      backgroundStrong: "#ccc",
      backgroundTransparent: "rgba(255, 255, 255, 0.5)",
      color: "#919191", // <- this is the color of the text in the accent theme
      colorHover: "#111",
      colorPress: "#222",
      colorFocus: "#333",
      colorTransparent: "rgba(0, 0, 0, 0.5)",
      borderColor: "#444",
      borderColorHover: "#555",
      borderColorFocus: "#666",
      borderColorPress: "#777",
      placeholderColor: "#888",
      outlineColor: "#999",
      brand: PROFITR_BLUE,
    },
    dark_accent: {
      background: "#000",
      backgroundHover: "#111",
      backgroundPress: "#222",
      backgroundFocus: "#333",
      backgroundStrong: "#444",
      backgroundTransparent: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      colorHover: "#eee",
      colorPress: "#ddd",
      colorFocus: "#ccc",
      colorTransparent: "rgba(255, 255, 255, 0.5)",
      borderColor: "#555",
      borderColorHover: "#666",
      borderColorFocus: "#777",
      borderColorPress: "#888",
      placeholderColor: "#999",
      outlineColor: "#aaa",
      brand: PROFITR_BLUE,
    },
    light_Button: {
      background: PROFITR_BLUE,
      backgroundHover: "#5d73f3",
      backgroundPress: PROFITR_BLUE,
      color: "#fff", // text color
      outlineColor: "transparent",
    },
    dark_Button: {
      background: "#000",
      backgroundHover: "#111",
      backgroundPress: "#222",
      color: "#fff",
      outlineColor: "#aaa",
    },
    light_accent_Button: {
      color: BLACK,
      borderColor: "#B5B5B5",
      borderColorHover: STEEL,
      //  borderColor: "#444",
    },
    dark_accent_Button: {
      background: "#000",
      backgroundHover: "#111",
      backgroundPress: "#222",
      color: "#fff",
      outlineColor: "#aaa",
      borderColor: "#B5B5B5",
    },
  },
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
    defaultFont: "body",
  },
  media: {
    xxs: { maxWidth: 390 },
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1650 },

    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    gtXl: { minWidth: 1650 + 1 },
  },
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  tokens: createTokens({
    color: {
      primary: "#FF0000",
    },
    size: {
      $0: 0,
      "$0.25": 2,
      "$0.5": 4,
      "$0.75": 8,
      $1: 16,
      $2: 24,
      $3: 32,
      $4: 40,
      $true: 48,
      $5: 48,
      $6: 60,
      $7: 72,
      $8: 86,
      $9: 100,
      $10: 120,
      $card: 260,
    },
    space: {
      $0: 0,
      $1: 1,
      "$1.5": 2,
      $2: 4,
      $3: 8,
      $4: 10,
      $true: 12,
      $5: 12,
      $6: 16,
      $7: 20,
      $8: 24,
      $9: 32,
      $10: 40,
      $11: 48,
      $12: 56,
      $13: 64,
      $14: 80,
      $15: 100,
      $16: 120,
      $17: 140,
      $18: 160,
      $19: 180,
      $20: 200,
    },
    radius: {
      $0: 0,
      "1": 2,
      "2": 4,
      "3": 6,
      "4": 8,
      "5": 10,
      "6": 12,
      "7": 14,
      "8": 16,
      "9": 18,
      "10": 20,
      "11": 22,
      "12": 24,
      "13": 26,
      "14": 28,
      "15": 30,
      "16": 32,
      true: 8,
    },
    zIndex: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
    },
  }),
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

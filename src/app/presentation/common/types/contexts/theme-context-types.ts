import { ReactNode } from "react";

export type ThemeContextType = {
  toggleTheme: () => void;
  mode: string | ReactNode;
} | null;

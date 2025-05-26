import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const APP_NAME=process.env.NEXT_PUBLIC_APP_NAME || "Jl-Merchanies"
export const APP_DESCRIPTION=process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Jl-Merchanies"
export const App_SLOGAN=process.env.NEXT_PUBLIC_APP_SLOGAN || "Jl-Merchanies"
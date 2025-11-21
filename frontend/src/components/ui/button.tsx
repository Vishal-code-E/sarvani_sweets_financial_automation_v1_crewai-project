import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/30": variant === "default",
                        "border border-[#1f1f2e] bg-transparent text-gray-300 hover:bg-[#1a1a24] hover:text-white hover:border-indigo-500/50": variant === "outline",
                        "hover:bg-[#1a1a24] text-gray-300 hover:text-white": variant === "ghost",
                        "text-indigo-400 underline-offset-4 hover:underline hover:text-indigo-300": variant === "link",
                    },
                    {
                        "h-12 px-6 py-3": size === "default",
                        "h-10 px-4 text-sm": size === "sm",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

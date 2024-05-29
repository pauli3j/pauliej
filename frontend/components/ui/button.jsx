import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority"; // Importing the cva function from class-variance-authority to create variant-based class names

import { cn } from "@/lib/utils"; // Importing a utility function for merging class names

// Define the base styles and variant-based styles for the button using cva
const buttonVariants = cva(
  // Base styles for the button
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Variants for different styles of the button
    variants: {
      variant: {
        // Default button style
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Destructive button style (e.g., for delete actions)
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline button style
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // Secondary button style
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Ghost button style (transparent background)
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Link button style (styled as a hyperlink)
        link: "text-primary underline-offset-4 hover:underline",
        nav: "bg-gray-300 dark:bg-card text-black dark:text-darktextaccent rounded invisible sm:visible hover:text-darkaccent hover:bg-darktextaccent"
      },
      // Sizes for the button
      size: {
        default: "h-10 px-4 py-2", // Default size
        sm: "h-9 rounded-md px-3", // Small size
        lg: "h-11 rounded-md px-8", // Large size
        icon: "h-10 w-10", // Icon button size (square)
      },
    },
    // Default variants if none are specified
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define the Button component
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"; // Determine the component to render (Slot if asChild is true, otherwise button)
  
  return (
    // Render the button component with the computed class names and props
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Set the display name for the Button component (useful for debugging and React DevTools)
Button.displayName = "Button";

export { Button, buttonVariants };

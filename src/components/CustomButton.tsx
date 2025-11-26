import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', asChild = false, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-3 shadow-md";

    const variantClasses = {
      primary: "bg-hr-green text-white hover:bg-hr-green/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-hr-orange/50",
      secondary: "bg-hr-orange text-white hover:bg-hr-orange/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-hr-green/50",
    };

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };
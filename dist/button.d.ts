import React from 'react';
export interface ButtonProps {
    /**
     * The content of the button
     */
    children: React.ReactNode;
    /**
     * The variant of the button
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /**
     * The size of the button
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Button type
     */
    type?: 'button' | 'submit' | 'reset';
}
export declare const Button: React.FC<ButtonProps>;

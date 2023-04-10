import React from "react";

export type ButtonProps = {
    children?: React.ReactNode;
    classes?: string;
    btnSize?: string;
    href?: string;
};
export function PrimaryButton ({
    children,
    classes = "btn btn-base btn-primary",
    href
}: ButtonProps){
    return (
        <a href={href}>
            <button
            className={classes}>
                {children}
            </button>
        </a>
    )
}
export function PrimaryButtonSmall ({
    children,
    classes = "btn btn-sm btn-primary",
    href
}: ButtonProps){
    return (
        <a href={href}>
            <button
            className={classes}>
                {children}
            </button>
        </a>
    )
}
export function SecondaryButton ({
    children,
    classes = "btn btn-base btn-secondary",
    href
}: ButtonProps){
    return (
        <a href={href}>
            <button
            className={classes}>
                {children}
            </button>
        </a>
    )
}
export function SecondaryButtonSmall ({
    children,
    classes = "btn btn-small btn-secondary",
    href
}: ButtonProps){
    return (
        <a href={href}>
            <button
            className={classes}>
                {children}
            </button>
        </a>
    )
}
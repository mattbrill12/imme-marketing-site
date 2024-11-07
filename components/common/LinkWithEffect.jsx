import React from "react";
import Link from "next/link";

export default function LinkWithEffect({
    href,
    className = "btn",
    color,
    linkText }) {
    return (
        <Link
            scroll={false}
            href={href}
            className={className}
            target="_blank"
            color={color}
            rel="noopener noreferrer"
        >
            <span className="link-effect">
                <span className="effect-1">{linkText}</span>
                <span className="effect-1">{linkText}</span>
            </span>
        </Link>
    );
}

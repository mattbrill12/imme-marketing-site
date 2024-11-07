import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function LinkWithEffect({ linkText,
    href,
    className = "btn",
    color }) {
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

// Define prop types and default props
LinkWithEffect.propTypes = {
    linkText: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
};

LinkWithEffect.defaultProps = {
    className: "btn"
};

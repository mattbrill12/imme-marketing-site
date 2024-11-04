import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function LinkWithEffect({ linkText,
    href,
    className = "btn",
    imgSrc,
    imgAlt = "",
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
                {/* Conditionally render the image if imgSrc is provided */}
                {imgSrc && <img src={imgSrc} alt={imgAlt} className="link-image" />}
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
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
};

LinkWithEffect.defaultProps = {
    className: "btn",
    imgAlt: "Link image",
};

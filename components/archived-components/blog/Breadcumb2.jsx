import Link from "next/link";
import React from "react";

export default function breadcrumb2() {
  return (
    <div className="breadcrumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcrumb-content">
          <ul className="breadcrumb-menu">
            <li>
              <Link scroll={false} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/blog">
                Blog
              </Link>
            </li>
            <li>Everything You Should Know About Return</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

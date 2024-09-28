import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className="hero-wrapper hero-4 shape-mockup-wrap" id="hero">
      <div className="bg-theme">
        <div className="container text-center">
          <div className="hero-style4">
            <h1 className="hero-title">
              A Full Development Team at Your Service.
            </h1>
            <p className="hero-text">
              With over 20 years of expertise, our agile and passionate team
              crafts tailored software solutions to meet your unique needs.
              <br />
              Think of us as an extension of your company—your trusted partner
              in building innovative software.
            </p>
            <div className="hero-btn-group">
              <Link
                scroll={false}
                href="https://n8369rxllmn.typeform.com/to/QilAkYSc"
                className="btn"
                target="blank"
              >
                <span className="link-effect">
                  <span className="effect-1">LETS START BUILDING</span>
                  <span className="effect-1">LETS START BUILDING</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

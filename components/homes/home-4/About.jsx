import LinkWithEffect from '@/components/common/LinkWithEffect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div className="about-area-1 space shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
        style={{ top: '-100px', left: '0px', bottom: '100px' }}
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/teamwork-1.png"
          alt="cognify-teamwork"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap fade_right">
                <div className="title-area mb-0">
                  <h2 className="sec-title text-smoke">
                    We're a Dev Team That Works With You, Not For You.
                  </h2>
                  <p className="sec-text mt-35 mb-25 text-smoke">
                    At Cognify, we’re more than just a software development
                    agency—we’re your dedicated tech partner. Specializing in
                    solutions for startups and small businesses, we provide a
                    full team of product designers, developers, project
                    managers, QA testers, and DevOps experts to help bring your
                    vision to life.
                  </p>
                  <p className="sec-text mt-35 mb-25 text-smoke">
                    We believe in true partnership—
                    <strong>your win is our win.</strong>
                  </p>
                  <div className="btn-wrap mt-50">
                    <LinkWithEffect href="https://n8369rxllmn.typeform.com/to/QilAkYSc" linkText='SCHEDULE YOUR FREE DISCOVERY CALL' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

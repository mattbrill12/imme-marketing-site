import Link from 'next/link';
import React from 'react';

export default function Cta() {
  return (
    <div className="cta-area-1 overflow-hidden bg-theme space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="title-area text-center mb-0">
              <h2 className="sec-title">
                Let’s Build Something Great Together
              </h2>
              <p className="sec-text mt-30 mb-40">
                Ready to take your business to the next level? We specialize in
                understanding your unique needs, prioritizing efficiency and
                scalability, and delivering top-notch tech solutions that drive
                growth. Partner with us and get the development support your
                business deserves.
              </p>
              <div className="btn-group justify-content-center">
                <Link
                  scroll={false}
                  href="https://n8369rxllmn.typeform.com/to/QilAkYSc"
                  className="btn mt-0"
                  target="blank"
                >
                  <span className="link-effect">
                    <span className="effect-1">GET STARTED TODAY</span>
                    <span className="effect-1">GET STARTED TODAY</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

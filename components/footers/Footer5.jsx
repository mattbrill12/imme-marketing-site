import React from 'react';
import Socials from './component/Socials';
import FooterLinks3 from './component/FooterLinks3';
import FooterLinks4 from './component/FooterLinks4';
import Link from 'next/link';

export default function Footer5() {
  return (
    <footer className="footer-wrapper footer-layout5 overflow-hidden">
      <div className="container">
        <div className="widget-area space-top">
          <div className="row justify-content-between">
            <div className="col-md-8 col-xl-8 col-lg-8">
              {' '}
              {/* Updated to take 2/3 of the width */}
              <div className="widget widget-about footer-widget">
                <h3 className="widget_title">About Cognify</h3>
                <p className="about-text">
                  Our clients will tell you—we’re deeply invested in their
                  success. We believe that strong relationships fuel real
                  growth, and we’re passionate about building brands that
                  thrive.
                </p>
                <div className="social-btn style3">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4">
              {' '}
              {/* Updated to take 1/3 of the width */}
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Links</h3>
                <div className="menu-all-pages-container list-column2">
                  <ul className="menu">
                    <FooterLinks3 />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <p>
                2221 Iron Works Dr. 214, Raleigh <br />
                NC 27604, USA
              </p>
            </div>
            <div className="col-md-6 align-self-center text-md-end">
              <p className="copyright-text">
                <a href="tel:19783286959"> +1 978 328 6959 </a>
                <br />
                <a href="mailto:anthony.tran@cognify.dev">
                  anthony.tran@cognify.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

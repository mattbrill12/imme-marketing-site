import { plans } from '@/data/pricing';
import Link from 'next/link';
import React from 'react';

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-6 col-lg-8">
              <div className="title-area text-center">
                <h2 className="sec-title">Pricing Plans</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            {plans.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="pricing-card bg-smoke">
                  <h4 className="pricing-card_title">{elm.title}</h4>
                  <div className="price-card-wrap">
                    <h4 className="pricing-card_price">
                      <span className="currency">$</span>
                      {elm.price}
                      <span className="duration">/mo</span>
                    </h4>
                  </div>
                  <p class="description">{elm.description}</p>
                  <div className="checklist">
                    <p className="team-title">Team Composition</p>
                    <ul>
                      {elm.team.map((elm2, i2) => (
                        <li key={i2}>
                          <i className="fas fa-check"></i> {elm2}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="checklist">
                    <p className="team-title">Services Provided</p>
                    <ul>
                      {elm.services.map((elm2, i2) => (
                        <li key={i2}>
                          <i className="fas fa-check"></i> {elm2}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="button-container">
                    <Link
                      scroll={false}
                      href={elm.subscribeLink}
                      className="btn style2"
                      target="blank"
                    >
                      <span className="link-effect">
                        <span className="effect-1">CHOOSE THIS PLAN</span>
                        <span className="effect-1">CHOOSE THIS PLAN</span>
                      </span>
                    </Link>
                    <Link
                      scroll={false}
                      href={elm.discoveryLink}
                      className="btn"
                      target="blank"
                    >
                      <span className="link-effect">
                        <span className="effect-1">BOOK A DISCOVERY CALL</span>
                        <span className="effect-1">BOOK A DISCOVERY CALL</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

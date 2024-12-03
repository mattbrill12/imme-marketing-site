'use client';
import { allPortfolio, projects } from '@/data/portfolio';
import Image from 'next/image';
import LinkWithEffect from '../common/LinkWithEffect';

export default function ProjectDetails({ portfolioId }) {
  // Find the project that matches the portfolioId
  const portfolioItem =
    allPortfolio.filter((elm) => elm.id == portfolioId)[0] || allPortfolio[1];

  // Find the specific project that matches the id
  const project = projects.find(
    (project) => project.id.toString() === portfolioId
  );

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-details-page-area space">
      <div className="container">
        {/* Display Hero Image */}
        <div className="row">
          <div className="col-xl-12">
            <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={project.heroImg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Category:</span> {project.categories.join(', ')}
                </li>
                <li>
                  <span>Software:</span> {project.software}
                </li>
                <li>
                  <span>Service:</span> {project.service}
                </li>
                <li>
                  <span>Client:</span> {project.client}
                </li>
                <li>
                  <span>Date:</span> {project.date}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{portfolioItem.title}</h2>
              <p className="sec-text sec-text-project-details mt-30">
                {project.overview}
              </p>
            </div>

            <div className="title-area mb-35">
              <h3>Challenges</h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="sec-text sec-text-project-details mb-n1"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="title-area mb-35">
              <h3>Solutions Provided</h3>
              <ul>
                {project.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="sec-text sec-text-project-details mb-n1"
                  >
                    <strong>{solution.title}:</strong>
                    <ul>
                      {solution.descriptions.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="title-area mb-35">
              <h3>Results</h3>
              <ul>
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="sec-text sec-text-project-details mb-n1"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <LinkWithEffect href={project.liveSiteUrl} className="btn bg-theme text-title" linkText='VISIT LIVE SITE' />
            </div>
          </div>

          {/* <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous Post</span>
                    <span className="effect-1">Previous Post</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next Post</span>
                    <span className="effect-1">Next Post</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

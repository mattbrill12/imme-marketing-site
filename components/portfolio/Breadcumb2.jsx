import Link from 'next/link';
import React from 'react';
import { projects } from '@/data/portfolio'; // Assuming you have the projects data here

export default function Breadcumb2() {
  // Here, we assume you're working with a single project, or you can adjust this as needed.
  // In this case, we're just using the first project in the array for demo purposes.
  const project = projects[0]; // Adjust this as per your logic

  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <Link scroll={false} href="/">
                Home
              </Link>
            </li>
            <li>Portfolio</li>
            {/* Dynamically display the project title */}
            {/* <li>{project ? project.title : 'Project Not Found'}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

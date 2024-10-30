import React from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio"; // Adjust if needed

export default function Breadcrumb({ title, isProject = false, projectId = null }) {
    // Fetch the specific project based on projectId if it's a project breadcrumb
    const project = isProject && projectId !== null ? projects.find(p => p.id === projectId) : null;

    return (
        <div
            className={`breadcrumb-wrapper ${isProject ? 'style2 bg-smoke' : ''}`}
            style={{
                backgroundImage: isProject ? "none" : "url(/assets/img/bg/breadcrumb-bg1-1.jpg)",
            }}
        >
            <div className={isProject ? "container-fluid" : "container"}>
                <div className="breadcrumb-content">
                    <ul className="breadcrumb-menu">
                        <li>
                            <Link scroll={false} href="/">
                                Home
                            </Link>
                        </li>
                        {isProject && <li>Portfolio</li>}
                        <li>
                            {/* Display the title or project title */}
                            {isProject ? (project ? project.title : 'Project Not Found') : title}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

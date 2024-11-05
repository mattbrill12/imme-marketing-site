import React from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function Breadcrumb({ title, projectId = null }) {
    // Fetch the specific project based on projectId if it's provided

    const project = projects.find(p => p.id === projectId);
    const breadcrumb = project ? {
        wrapperClassName: 'style2 bg-smoke',
        backgroundImage: 'none', // No image for project
        className: 'container-fluid',
        title: project.title,
        breadcrumbOne: 'Portfolio'
    } : { //default breadcrumb
        wrapperClassName: '',
        backgroundImage: 'url(/asset/img/bg/breadcrumb-bg1-1.jpg)',
        className: 'container',
        breadcrumbOne: '',
        title: title
    };

    return (
        <div
            className={`breadcrumb-wrapper ${breadcrumb.wrapperClassName}`}
            style={{
                backgroundImage: breadcrumb.backgroundImage || undefined,
            }}
        >
            <div className={breadcrumb.className}>
                <div className="breadcrumb-content">
                    <ul className="breadcrumb-menu">
                        <li>
                            <Link scroll={false} href="/">
                                Home
                            </Link>
                        </li>
                        <li>{breadcrumb.breadcrumbOne}</li>
                        <li>{breadcrumb.title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

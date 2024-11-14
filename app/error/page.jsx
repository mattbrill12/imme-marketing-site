import LinkWithEffect from "@/components/common/LinkWithEffect";
import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Cognify - A Boutique Software Development Studio",
};

export default function NotFoundPage() {
  return (
    <>
      <Header5 />
      <div className="error-wrapper text-center">
        <div className="container" color="">
          <Image
            width={856}
            height={246}
            className="mb-50"
            src="/assets/img/normal/404.png"
            alt="error"
          />
          <h2>Look Like You’re Lost</h2>
          <p className="sec-text mb-30">
            The link you followed probably broken or the page has been removed
          </p>
          <LinkWithEffect href="/" linkText="Back to home" />
        </div>
      </div>
    </>
  );
}

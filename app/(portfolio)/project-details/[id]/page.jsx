import MarqueeComponent from '@/components/common/Marquee';
import Footer5 from '@/components/footers/Footer5';
import Header5 from '@/components/headers/Header5';
import Breadcumb2 from '@/components/portfolio/Breadcumb2';

import ProjectDetails from '@/components/portfolio/ProjectDetails';
import { allPortfolio } from '@/data/portfolio';
export const metadata = {
  title: 'Case Study Details',
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header5 />
      <Breadcumb2 />
      <ProjectDetails portfolioId={params.id} />
      <Footer5 />
    </>
  );
}

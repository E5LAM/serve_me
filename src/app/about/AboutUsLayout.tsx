import AboutIntro from "@/components/about/intro/AboutIntro";
import Loading from "@/components/ui/Loader";
import Footer from "@/components/layout/Footer";

import HappinessGuarantee from "@/components/about/happiness-guarantee/HappinessGuarantee";
import HavingFun from "@/components/about/having-fun/HavingFun";
import AboutMission from "@/components/about/mission/AboutMission";
import OurPeople from "@/components/about/our-people/OurPeople";

async function getData() {
  const res = await fetch(`https://programming-fashion.store/api/about`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AboutUsLayout() {
  const aboutPageData = await getData();

  console.log(aboutPageData?.data);

  if (!aboutPageData?.data) return <Loading isFullPage />;

  return (
    <>
      <main>
        <AboutIntro data={aboutPageData?.data?.firstSection} />

        <AboutMission
          title={aboutPageData?.data?.headerteam?.title}
          data={aboutPageData?.data?.mission}
        />

        <OurPeople
          data={aboutPageData?.data?.team}
          members={aboutPageData?.data?.members}
        />

        <HavingFun data={aboutPageData?.data?.fourthSection} />

        <HappinessGuarantee
          data={aboutPageData?.data?.fivthSection}
          featurs={aboutPageData?.data?.featurs}
        />
      </main>

      <Footer
        footerData={aboutPageData?.data?.footer}
        footebox={aboutPageData?.data?.footersquares}
      />
    </>
  );
}

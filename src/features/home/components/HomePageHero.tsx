import ShineButton from "@/components/ShineButton";
import HandWave from "@/features/home/components/HandWave";
import { socials } from "@/lib/content/socials";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { TbMapPin, TbSchool } from "react-icons/tb";
export default function HomePageHero() {
  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-16 md:pt-24">
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="flex gap-2 whitespace-nowrap text-4xl font-bold md:text-7xl">
            {`Hi, I'm Charles`}
            <HandWave />
          </h1>
          <h2 className="text-muted-foreground">{`Full Stack Software Developer`}</h2>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Calgary,+AB/@51.0271596,-114.4174685,10z/data=!3m1!4b1!4m6!3m5!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831!16zL20vMDFyMzI?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <p className="flex items-center gap-4 text-xl font-bold text-foreground">
              <TbMapPin className="text-2xl text-foreground" />
              {`Calgary, Alberta`}
            </p>
          </Link>
          <div className="flex items-center gap-4">
            <TbSchool className="text-2xl text-foreground" />
            <div className="flex flex-col">
              <p className="text-xl text-foreground">
                BSc. Applied Computer Science
              </p>
              <div className="flex gap-8 text-sm">
                <p className="italic">{`University of Winnipeg`}</p>
                <p>{`2020 - 2022`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {socials.map(({ href, website }, index) => {
              if (!website) {
                return null;
              }
              return (
                <div key={index}>
                  <Link key={index} href={href} target="_blank">
                    <ShineButton>
                      <website.icon className="md:text-lg" />
                      {website.title}
                    </ShineButton>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/charles_in_banff.jpg"
          alt="Charles Russell in Banff"
          width={2327}
          height={2326}
          className="w-52 rounded-full md:w-96"
        />
      </div>
    </section>
  );
}

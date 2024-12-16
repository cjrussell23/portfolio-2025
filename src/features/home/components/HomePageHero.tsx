import ShineButton from "@/components/ShineButton";
import HandWave from "@/features/home/components/HandWave";
import { socials } from "@/lib/content/socials";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
export default function HomePageHero() {
  return (
    <section className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16 md:pt-24">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h1 className="flex gap-2 whitespace-nowrap text-4xl font-bold md:text-7xl">
            {`Hi, I'm Charles`}
            <HandWave />
          </h1>
          <h2>{`Full Stack Software Developer`}</h2>
          <h3 className="flex items-center gap-2 font-bold text-muted-foreground">
            <FaMapPin className="text-primary" />
            <Link href="/about">{`Calgary, Alberta`}</Link>
          </h3>
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

import Image from "next/image";

export default function Education() {
  return (
    <section className="flex flex-col gap-4">
      <h2>Education</h2>

      <div className="flex items-center gap-4">
        <Image
          src="/images/universityOfWinnipegLogo.jpg"
          alt="University of Winnipeg Logo"
          width={200}
          height={200}
          className="aspect-square w-16 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-muted-foreground">{`2020 - 2022`}</p>
          <h2>BSc. Applied Computer Science</h2>
          <p className="text-muted-foreground">{`University of Winnipeg`}</p>
        </div>
      </div>
    </section>
  );
}

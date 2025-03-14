import HomePage from "@/features/home/components/HomePage";

export const revalidate = 60 * 10;

export default async function Home() {
  return <HomePage />;
}

import HomePage from "@/features/home/components/HomePage";

export const revalidate = 600;

export default async function Home() {
  return <HomePage />;
}

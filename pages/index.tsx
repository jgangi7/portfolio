import { Layout } from "../components/ui/Layout";
import { Hero } from "../components/ui/Hero";
import { Skills } from '@/components/ui/Skills';
import { LoadingProvider, withLoadingGuard } from '@/components/LoadingProvider';
import { About } from "@/components/ui/About";

// Wrap sections with loading guard and staggered delays
const GuardedSkills = withLoadingGuard(Skills, 500); // 0.5s delay after Hero
const GuardedAbout = withLoadingGuard(About, 700);   // 0.7s delay after Hero

export default function Home() {
  return (
    <LoadingProvider>
      <Layout>
        <Hero />
        <GuardedSkills />
        <GuardedAbout />
      </Layout>
    </LoadingProvider>
  );
}

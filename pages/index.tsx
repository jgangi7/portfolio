import { Layout } from "../components/ui/Layout";
import { Skills } from '@/components/ui/Skills';
import { LoadingProvider, withLoadingGuard } from '@/components/LoadingProvider';
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";

// Wrap sections with loading guard and staggered delays
const GuardedSkills = withLoadingGuard(Skills, 700); // 0.5s delay after Hero
const GuardedProjects = withLoadingGuard(Projects, 500); // 0.9s delay after Hero

export default function Home() {
  return (
    <LoadingProvider>
      <Layout>
        <Hero />
        <GuardedSkills />
        <GuardedProjects />
      </Layout>
    </LoadingProvider>
  );
}

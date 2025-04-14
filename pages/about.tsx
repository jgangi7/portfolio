import { Layout } from "../components/ui/Layout";
import About from "../components/ui/About";
import { LoadingProvider } from '../components/LoadingProvider';

export default function AboutPage() {
  return (
    <LoadingProvider>
      <Layout>
        <About />
      </Layout>
    </LoadingProvider>
  );
} 
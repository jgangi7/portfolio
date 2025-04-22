import { Layout } from "../components/ui/Layout";
import { LoadingProvider } from '../components/LoadingProvider';

export default function PodcastVisualizer() {
  return (
    <LoadingProvider>
      <Layout>
        <div>test</div>
      </Layout>
    </LoadingProvider>
  );
} 
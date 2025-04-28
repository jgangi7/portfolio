import CommandersProject from './commandersProject';
import { LoadingProvider } from '../components/LoadingProvider';

export default function CommandersPage() {
  return (
    <LoadingProvider>
      <CommandersProject />
    </LoadingProvider>
  );
} 
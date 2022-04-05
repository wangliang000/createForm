import CreateForm from '@/components/createForm';
import '@alifd/next/dist/next.css';
import { schema } from './schema';

const Home = () => {
  return <CreateForm schema={schema} />;
};

export default Home;

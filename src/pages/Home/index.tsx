import CreateForm from '@/components/createForm';
import '@alifd/next/dist/next.css';
import { schema } from './schema';

const components = { DatePicker: 'DatePicker', FormItem: 'FormItem' };
const Home = () => {
  return <CreateForm schema={schema} components={components} />;
};

export default Home;

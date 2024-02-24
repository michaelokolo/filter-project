import { Link } from 'react-router-dom';
import Automations from '../components/Automations';
import jsonData from '../data/automations.json';
import Search from '../components/Search';

export default function Home() {
  const { items } = jsonData.data.oneClickAutomations;
  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 justify-center">
      <Link className="text-purple-700 flex justify-end w-full hover:underline">
        See all
      </Link>
      <p className="text-gray-600">
        Here are some Automations that pre-defined for product availability
        monitoring
      </p>
      <Search items={items} />
      <div className="flex justify-center w-full">
        <div className=" flex flex-wrap gap-5 w-full">
          {items.map((item) => (
            <Automations item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import Automations from '../components/Automations';
import Search from '../components/Search';
import { useSelector } from 'react-redux';

export default function Home() {
  const { data } = useSelector((state) => state.data);

  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 justify-center">
      <Link className="text-purple-700 flex justify-end w-full hover:underline">
        See all
      </Link>
      <p className="text-gray-600">
        Here are some Automations that pre-defined for product availability
        monitoring
      </p>
      <Search />
      <div className="flex justify-center w-full">
        <div className=" flex flex-wrap gap-5 w-full">
          {data.map((item) => (
            <Automations item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

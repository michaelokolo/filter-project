import { Link } from 'react-router-dom';
import Automations from '../components/Automations';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import jsonData from '../data/automations.json';
import { updateData } from '../redux/dataSlice/dataSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const { monitoring, extractData } = useSelector((state) => state.filters);
  const { filters } = useSelector((state) => state.filters);
  console.log(filters);

  useEffect(() => {
    const res = jsonData.data.oneClickAutomations.items;
    let filteredRes = res;

    if (monitoring && extractData) {
      filteredRes = filteredRes.filter(
        (item) =>
          item.title.toLowerCase().includes('monitor') ||
          item.title.toLowerCase().includes('extract')
      );
    } else if (monitoring) {
      filteredRes = filteredRes.filter((item) =>
        item.title.toLowerCase().includes('monitor')
      );
    } else if (extractData) {
      filteredRes = filteredRes.filter((item) =>
        item.title.toLowerCase().includes('extract')
      );
    }
    dispatch(updateData(filteredRes));
    console.log(filteredRes);
  }, [monitoring, extractData]);

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

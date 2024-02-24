import Automations from '../components/Automations';
import jsonData from '../data/automations.json';

export default function Home() {
  const { items } = jsonData.data.oneClickAutomations;
  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 justify-center">
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

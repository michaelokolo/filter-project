export default function Automations({ item }) {
  return (
    <div className=" border rounded-lg  sm:w-[267px] w-full p-5">
      <img
        src={item.sites[0].logoSmall2x}
        className="w-12 h-12 border rounded-lg p-2 object-cover"
      />
      <p className="text-lg font-bold text-gray-700 mt-1 mb-5">{item.sites[0].title}</p>
      <p>{item.shortDescription}</p>
    </div>
  );
}

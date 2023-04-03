import spendings from "../../data.json";

const Main = () => {
  return (
    <div className="bg-white p-5 rounded-lg mt-4">
      <h1 className="font-bold text-xl text-brown-800">
        Spending - Last 7 days
      </h1>
      <div className="flex items-end flex-wrap pt-5">
        {spendings.map((spending) => (
          <Spending key={spending.day} spending={spending} />
        ))}
      </div>
      <hr className="my-4 text-cream" />
      <div className="flex justify-between">
        <div>
          <p className="text-brown-300">Total this month</p>
          <p className="text-brown-800 text-3xl font-bold">$478.33</p>
        </div>
        <div className="text-right self-end">
          <p className="text-brown-800 font-bold text-sm">+2.4%</p>
          <p className="text-brown-300 text-sm">from last month</p>
        </div>
      </div>
    </div>
  );
};

const Spending = ({ spending }) => {
  const bgColor = spending.day === "wed" ? "bg-cyan-600" : "bg-red-600";
  const hoverBgColor =
    spending.day === "wed" ? "hover:bg-cyan-200" : "hover:bg-red-200";
  return (
    <div className="flex flex-col-reverse items-center gap-1">
      <p className="text-brown-300 text-sm">{spending.day}</p>
      <div
        key={spending.day}
        className={`rounded ${bgColor} ${hoverBgColor} hover:cursor-pointer peer w-[35px]`}
        style={{ height: `${spending.amount * 2.5}px` }}
      ></div>
      <div className="invisible peer-hover:visible bg-brown-800 text-cream rounded p-1 text-sm">
        ${spending.amount}
      </div>
    </div>
  );
};

export default Main;

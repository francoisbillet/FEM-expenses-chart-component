import spendings from "../../data.json";

const Main = () => {
  return (
    <main className="bg-white p-5 rounded-lg mt-4">
      <h1 className="font-bold text-xl text-brown-800">
        Spending - Last 7 days
      </h1>
      <div className="flex gap-2.5 items-end pt-10">
        {spendings.map((spending, index) => (
          <Spending key={index} spending={spending} />
        ))}
      </div>
      <hr className="my-4 text-cream" />
      <div className="flex justify-between">
        <div>
          <p className="text-brown-300">Total this month</p>
          <p className="text-brown-800 text-3xl font-bold">$478.33</p>
        </div>
        <div className="text-right">
          <p className="text-brown-800 font-bold">+2.4%</p>
          <p className="text-brown-300">from last month</p>
        </div>
      </div>
    </main>
  );
};

const Spending = ({ spending }) => {
  const bgColor = spending.day === "wed" ? "bg-cyan-600" : "bg-red-600";
  const hoverBgColor =
    spending.day === "wed" ? "hover:bg-cyan-200" : "hover:bg-red-200";
  return (
    <div>
      <div
        key={spending.day}
        className={`w-8 rounded ${bgColor} ${hoverBgColor} hover:cursor-pointer`}
        style={{ height: `${spending.amount * 2}px` }}
      ></div>
      <p className="text-brown-300 text-sm text-center">{spending.day}</p>
    </div>
  );
};

export default Main;

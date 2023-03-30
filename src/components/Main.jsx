const Main = () => {
  return (
    <main className="bg-white p-5 rounded-lg mt-4">
      <h1 className="font-bold text-xl text-brown-800">
        Spending - Last 7 days
      </h1>

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

export default Main;

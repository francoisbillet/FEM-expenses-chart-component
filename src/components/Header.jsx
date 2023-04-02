const Header = () => {
  return (
    <header className="bg-red-600 flex justify-between px-5 py-4 text-cream rounded-xl">
      <div>
        <p className="font-normal mb-1">My balance</p>
        <p className="text-xl font-bold">$921.48</p>
      </div>
      <img
        src="/images/logo.svg"
        alt="logo representing two circles intertwined"
      />
    </header>
  );
};

export default Header;

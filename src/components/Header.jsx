const Header = () => {
  return (
    <header className="bg-red flex justify-between px-5 py-4 w-80 text-cream rounded-lg">
      <div>
        <p className="font-normal mb-1">My balance</p>
        <p className="text-xl font-bold">$921.48</p>
      </div>
      <img
        src="public/images/logo.svg"
        alt="logo representing two circles intertwined"
      />
    </header>
  );
};

export default Header;

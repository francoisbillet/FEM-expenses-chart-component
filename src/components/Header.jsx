const Header = () => {
  return (
    <header class="bg-red-400 flex justify-between p-3 w-80 text-slate-100 rounded-md">
      <div>
        <p>My balance</p>
        <p>$921.48</p>
      </div>
      <img
        src="public/images/logo.svg"
        alt="logo representing two circles intertwined"
      />
    </header>
  );
};

export default Header;

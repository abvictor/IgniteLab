import { Logo } from "./Logo";

const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-b-gray-600">
      <Logo />
    </header>
  );
};

export default Header;
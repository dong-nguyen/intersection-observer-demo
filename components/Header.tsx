import Link from 'next/link';

const Header = ({ smallHeading = false }) => {
  const baseClass =
    'flex justify-center items-center p-8 border border-b fixed top-0 w-full font-bold bg-white z-50';
  const className = smallHeading ? baseClass + ' py-4 bg-black text-white' : baseClass;

  return (
    <div className={className}>
      <Link href="/">
        <a className="p4 mr-10">Home</a>
      </Link>
      <Link href="/lazy-loading">
        <a className="p4 mr-10">Lazy-loading</a>
      </Link>
      <Link href="/infinite-scrolling">
        <a className="p4">Infinite Scrolling</a>
      </Link>
    </div>
  );
};

export default Header;

import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center items-center p-8 border border-b fixed top-0 w-full font-bold bg-white">
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

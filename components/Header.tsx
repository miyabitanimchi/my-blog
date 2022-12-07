import Link from 'next/link';

const headerLinks = [
  { name: 'A', slug: 'a' },
  { name: 'B', slug: 'b' },
  { name: 'C', slug: 'c' },
];

const Header = () => {
  return (
    <div
      className="mx-auto fixed w-screen z-10 border-b border-gray-100 py-4 bg-white shadow-lg bg-opacity-50 bg-clip-padding"
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <div className="w-full inline-block px-4 align-middle">
        <div className="md:float-left block px-2">
          <Link href="/">
            <span className="cursor-pointer text-2xl text-pink-400 ">
              Omiya Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {headerLinks.map((link) => (
            <Link key={link.slug} href={`/something/${link.slug}`}>
              <span className="md:float-right mt-2 align-middle text-gray-800 ml-4 font-semibold cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

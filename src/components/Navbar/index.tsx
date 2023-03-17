import { MdMenu } from 'react-icons/md';
// import { MdLogout, MdDashboard } from 'react-icons/md';
// import { FaScroll } from 'react-icons/fa';
import { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const LargeNavBar = () => {
  return (
    <div className="hidden items-stretch md:flex">
      <div className="flex flex-1 items-center justify-start">
        <p>Rice Software</p>
      </div>
      <div className="flex min-w-[32rem] flex-1 items-center justify-center gap-8">
        <Link className="btn btn-rounded btn-transparent" href="/">
          Home
        </Link>
        <Link className="btn btn-rounded btn-transparent" href="/">
          Scripts
        </Link>
        <Link className="btn btn-rounded btn-transparent" href="/">
          News
        </Link>
        <Link className="btn btn-rounded btn-transparent" href="/">
          Discord
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        {/*<button className="btn btn-rounded">Sign In</button>*/}

        {/*{status === 'unauthenticated' && (*/}
        {/*  <button*/}
        {/*    className="btn btn-rounded"*/}
        {/*    onClick={() => signIn('google')}*/}
        {/*  >*/}
        {/*    Sign In*/}
        {/*  </button>*/}
        {/*)}*/}

        {/*{status === 'authenticated' && (*/}
        {/*  <>*/}
        {/*    <p>{session?.user?.name}</p>*/}
        {/*    <div className="relative">*/}
        {/*      <button onClick={() => setIsProfileOpened(!isProfileOpened)}>*/}
        {/*        <Image*/}
        {/*          src={session?.user?.image ?? ''}*/}
        {/*          alt=""*/}
        {/*          className="rounded-[50%]"*/}
        {/*          width={32}*/}
        {/*          height={32}*/}
        {/*        />*/}
        {/*      </button>*/}

        {/*      <div*/}
        {/*        className={`*/}
        {/*          card absolute right-0 flex w-64 flex-col items-stretch bg-red-500 !p-0 !py-2 !shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]*/}
        {/*          ${*/}
        {/*            isProfileOpened*/}
        {/*              ? 'opacity-1 visible translate-y-0'*/}
        {/*              : 'collapse -translate-y-4 opacity-0'*/}
        {/*          }`}*/}
        {/*      >*/}
        {/*        <button className="btn btn-transparent text-left">*/}
        {/*          <MdDashboard />*/}
        {/*          Dashboard*/}
        {/*        </button>*/}

        {/*        <button className="btn btn-transparent text-left">*/}
        {/*          <FaScroll />*/}
        {/*          Scripts*/}
        {/*        </button>*/}

        {/*        <hr />*/}

        {/*        <button*/}
        {/*          onClick={() => signOut()}*/}
        {/*          className="btn btn-transparent text-left"*/}
        {/*        >*/}
        {/*          <MdLogout />*/}
        {/*          Sign Out*/}
        {/*        </button>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

const SmallNavbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col items-stretch overflow-hidden md:hidden">
      <div className="flex items-center">
        <p>Rice Software</p>

        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="ml-auto"
        >
          <MdMenu />
        </button>
      </div>

      <div
        className={`relative flex-col items-stretch gap-2 py-4 ${
          isMenuVisible ? 'flex' : 'hidden'
        }`}
      >
        <Link href="/" className="btn btn-transparent btn-rounded">
          Home
        </Link>
        <Link href="/" className="btn btn-transparent btn-rounded">
          Scripts
        </Link>
        <Link href="/" className="btn btn-transparent btn-rounded">
          News
        </Link>
        <Link href="/" className="btn btn-transparent btn-rounded">
          Discord
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  // const [isProfileOpened, setIsProfileOpened] = useState<boolean>(false);

  return (
    <div className="flex justify-center py-4">
      <div className="mx-8 w-full max-w-[72rem]">
        <LargeNavBar />
        <SmallNavbar />
      </div>
    </div>
  );
};

export default Navbar;

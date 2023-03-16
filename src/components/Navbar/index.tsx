import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { MdLogout, MdDashboard } from 'react-icons/md';
import { FaScroll } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const { status, data: session } = useSession();
  const [isProfileOpened, setIsProfileOpened] = useState<boolean>(false);

  return (
    <div className="flex justify-center p-4">
      <div className="flex w-full max-w-[72rem] items-stretch">
        <div className="flex flex-1 items-center justify-start">
          <p>Logo</p>
        </div>
        <div className="flex min-w-[36rem] flex-1 items-center justify-center gap-8">
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
          {status === 'unauthenticated' && (
            <button
              className="btn btn-rounded"
              onClick={() => signIn('google')}
            >
              Sign In
            </button>
          )}

          {status === 'authenticated' && (
            <>
              <p>{session?.user?.name}</p>
              <div className="relative">
                <button onClick={() => setIsProfileOpened(!isProfileOpened)}>
                  <Image
                    src={session?.user?.image ?? ''}
                    alt=""
                    className="rounded-[50%]"
                    width={32}
                    height={32}
                  />
                </button>

                <div
                  className={`
                    card absolute right-0 flex w-64 flex-col items-stretch bg-red-500 !p-0 !py-2 !shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]
                    ${
                      isProfileOpened
                        ? 'opacity-1 visible translate-y-0'
                        : 'collapse -translate-y-4 opacity-0'
                    }`}
                >
                  <button className="btn btn-transparent text-left">
                    <MdDashboard />
                    Dashboard
                  </button>

                  <button className="btn btn-transparent text-left">
                    <FaScroll />
                    Scripts
                  </button>

                  <hr />

                  <button
                    onClick={() => signOut()}
                    className="btn btn-transparent text-left"
                  >
                    <MdLogout />
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

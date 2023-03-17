import { ReactNode } from 'react';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="mx-8 w-full max-w-[72rem]">{children}</div>
    </div>
  );
};

export default PageLayout;

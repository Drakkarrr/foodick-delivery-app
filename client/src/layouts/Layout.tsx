type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <Header /> */}
      <h1>Header</h1>

      <div className='container flex-1 py-10 mx-auto'>{children}</div>
    </div>
  );
};

export default Layout;

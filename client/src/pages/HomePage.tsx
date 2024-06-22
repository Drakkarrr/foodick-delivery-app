import appDownload from '../assets/appDownload.png';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col gap-5 py-8 -mt-16 text-center bg-white rounded-md shadow-md'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
          Your Next Favorite Chow Awaits
        </h1>
        <span className='text-xl'>Food is just one click away!</span>
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <img src='' alt='Landing image' />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='text-3xl font-bold tracking-tighter'>
            Order your favorite food
          </span>
          <span>Download our app and order your favorite food</span>
          <img src={appDownload} alt='' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='h-14 p-2 shadow-sm bg-white rounded-lg gap-1 flex text-xs flex-col items-center justify-center'>
      <div>
        모든 데이터는{' '}
        <Link
          href='https://openapi.nexon.com/ko/'
          className='text-sm text-blue-600'
        >
          NEXON Open API
        </Link>
        에서 제공받았습니다
      </div>

      <p>Data based on NEXON Open API</p>
    </footer>
  );
};

export default Footer;

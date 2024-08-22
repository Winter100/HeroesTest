import Header from '../_components/layout/Header';
import MainSection from '../_components/layout/Main';
import Footer from '../_components/layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1800px] w-full flex gap-1 flex-col h-full p-2 m-auto'>
      <Header />
      <MainSection className='flex-1'>{children}</MainSection>
      <Footer />
    </div>
  );
};

export default Layout;

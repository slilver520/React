import useWindowDimensions from 'utils/window.util';
import DesktopLayout from './desktop.layout';
import MobileLayout from './mobile.layout';
import Footer from 'components/Footer/footer';

function ResponsiveLayout({ children }) {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width > 768 ? (
        <DesktopLayout>{children}</DesktopLayout>
      ) : (
        <MobileLayout>{children}</MobileLayout>
      )}
      <Footer />
    </div>
  );
}
export default ResponsiveLayout;
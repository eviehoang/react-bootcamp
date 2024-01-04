
import { Footer, FooterCopyright} from 'flowbite-react';

export default function Component() {
  return (
    <Footer  className="border-double border-t-4 shadow-none p-4 bg-blue rounded-none">
      <FooterCopyright href="#" by="Flowbite™" year={2024} />
    </Footer>
  );
}


import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function footer() {
  return (
    <Footer  className="border-double border-t-4 shadow-none p-4 bg-blue-300 rounded-none">
      <FooterCopyright href="#" by="Flowbite™" year={2024} />
    </Footer>
  );
}

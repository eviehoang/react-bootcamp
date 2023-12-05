import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function Nav() {
    return (
<MDBNavbar expand='lg' light bgColor='white' sticky>
<MDBContainer fluid>
  <MDBNavbarToggler
    aria-controls='navbarExample01'
    aria-expanded='false'
    aria-label='Toggle navigation'
    onClick={() => setShowBasic(!showBasic)}
  >
    <MDBIcon fas icon='bars' />
  </MDBNavbarToggler>
  <MDBCollapse show={showBasic}>
    <MDBNavbarNav right className='mb-2 mb-lg-0'>
      <MDBNavbarItem active>
        <MDBNavbarLink aria-current='page' href='#'>
          Home
        </MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink href='#'>Features</MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
      </MDBNavbarItem>
      <MDBNavbarItem>
        <MDBNavbarLink href='#'>About</MDBNavbarLink>
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBCollapse>
</MDBContainer>
</MDBNavbar>
);
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{this.props.title}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/priyankthakkar/open-movie-web">Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Place your title here'
};

export default Header;

import React, { Component } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/sprite.svg";
import Modal from "../modal/Modal";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import withState from "../hoc/withState";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    isModalOpen: false,
    breakpoint: 768,
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onHandleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onHandleResizeWindow);
  }

  onHandleResizeWindow = () => this.setState({ width: window.innerWidth });

  toggleModal = () =>
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));

  render() {
    const { width, breakpoint } = this.state;
    return (
      <HeaderContainer>
        <Link to='/' className='headerLogo'>
          ITED
        </Link>
        {width >= breakpoint ? (
          <div className='navigationWrapper'>
            <Navigation routes={mainRoutes} />
            <div className='headerSettingsBlock' onClick={this.toggleModal}>
              <svg className='headerSettings'>
                <use href={sprite + "#icon-dots-three-vertical"} />
              </svg>
            </div>

            {this.state.isModalOpen && (
              <Modal toggleModal={this.toggleModal}>
                <div className='headerModalSettingsWrapper'>
                  Change theme:
                  <button
                    type='button'
                    className='headerThemeButton'
                    onClick={this.props.changeTheme}>
                    Change theme
                  </button>
                  <LanguageSwitcher />
                </div>
              </Modal>
            )}
          </div>
        ) : (
          <>
            <svg className='headerBurgerMenu' onClick={this.toggleModal}>
              <use href={sprite + "#icon-menu"} />
            </svg>
            {this.state.isModalOpen && (
              <Modal toggleModal={this.toggleModal}>
                <div className='headerModalWrapper'>
                  <Navigation routes={mainRoutes} />
                  <div className='headerModalSettingsWrapper'>
                    <button
                      type='button'
                      className='headerThemeButton'
                      onClick={this.props.changeTheme}>
                      Change theme
                    </button>
                    <LanguageSwitcher />
                  </div>
                </div>
              </Modal>
            )}
          </>
        )}
      </HeaderContainer>
    );
  }
}

export default Header;

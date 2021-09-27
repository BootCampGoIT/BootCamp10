import React, { Component } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/sprite.svg";
import Modal from "../modal/Modal";
import CoursesForm from "../courses/coursesForm/CoursesForm";

// const Header = (props) => {
//   return (
//     <HeaderContainer>
//       <a href='/#' className='headerLogo'>
//         ITED
//       </a>
//       <div className='navigationWrapper'>
//         <Navigation routes={mainRoutes} />
//         <div className='headerSettingsBlock'>
//           <svg className='headerSettings'>
//             <use href={sprite + "#icon-dots-three-vertical"} />
//           </svg>
//         </div>
//         {/* <button
//           type='button'
//           className='headerThemeButton'
//           onClick={props.changeTheme}>
//           Change theme
//         </button> */}
//       </div>
//     </HeaderContainer>
//   );
// };

// export default Header;
class Header extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    return (
      <HeaderContainer>
        <a href='/#' className='headerLogo'>
          ITED
        </a>
        <div className='navigationWrapper'>
          <Navigation routes={mainRoutes} />
          <div className='headerSettingsBlock' onClick={this.toggleModal}>
            <svg className='headerSettings'>
              <use href={sprite + "#icon-dots-three-vertical"} />
            </svg>
          </div>
          
          {this.state.isModalOpen && (
            <Modal>
              <div className='headerModalSettingsWrapper'>
                Change theme:
                <button
                  type='button'
                  className='headerThemeButton'
                  onClick={this.props.changeTheme}>
                  Change theme
                </button>
              </div>
            </Modal>
          )}
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;

const fn2 = () => {
  return 5;
};

const fn1 = () => {
  return fn2();
};

const getData = () => {
  return fn1();
};

console.log(getData());

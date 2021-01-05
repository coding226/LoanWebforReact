import React, {useContext, useState} from 'react'
import { menus } from "../consts/menus";

const MenuContext = React.createContext();

export function useMenus() {
  return useContext(MenuContext);
}

export function MenuProvider({children}) {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [currentMenus, setCurrentMenus] = useState(menus);

  const handleClickMenu = (e) => {
    let newMenus = currentMenus.map((menu) => {
      if (menu.name === e.target.text) {
        menu.active = true;
      } else {
        menu.active = false;
      }
      return menu;
    });
    setCurrentMenus(newMenus);
    setShowDropMenu(false);
  };

  const onClickApply = () => {
    let newMenus = currentMenus.map((menu) => {
      menu.active = false;
      return menu;
    });
    setCurrentMenus(newMenus);
    setShowDropMenu(false);
  };

  const value = {
    showDropMenu,
    currentMenus,
    handleClickMenu,
    onClickApply,
    setShowDropMenu
  }
  return (
    <MenuContext.Provider value={value} >
      {children}
    </MenuContext.Provider>
  )
}

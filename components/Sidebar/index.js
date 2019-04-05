import React, { Component } from "react";
import HomeScreen from "../Home/index.js";
import LoginScreen from "./Login.js";
import BantuanScreen from "./Bantuan";
import AturakunScreen from "./Aturakun";
import TentangkamiScreen from "./Tentangkami";
import Sidebar from "./Sidebar.js";
import { DrawerNavigator } from "react-navigation";
const SidebarRouter = DrawerNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Aturakun: { screen: AturakunScreen },
    Bantuan: { screen: BantuanScreen },
    Tentangkami: { screen: TentangkamiScreen },
  },
  {
    contentComponent: props => <Sidebar {...props} />,
  }
);

export default SidebarRouter;

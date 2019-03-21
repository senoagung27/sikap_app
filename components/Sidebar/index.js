import React, { Component } from "react";
import HomeScreen from "../Home/index.js";
import TempatScreen from "../Home/Tempat.js";
import AboutScreen from "./About.js";
import Sidebar from "./Sidebar.js";
import { DrawerNavigator } from "react-navigation";
const SidebarRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Tempat: { screen: TempatScreen },
    About: { screen: AboutScreen },
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default SidebarRouter;
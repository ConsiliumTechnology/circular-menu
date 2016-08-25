import Element from "../index";
import render from "./render";
import createItems from "./createItems";
import show from "./show";
import hide from "./hide";

export default function Menu(parent, config, menus, supMenu) {
    Element.call(this);
    this.parent = parent;
    this.element = document.createElement('div');
    this.config = config;
    this.menus = menus;
    this.items = [];
    this.supMenu = supMenu;

}

Menu.prototype = Object.create(Element.prototype);

Menu.prototype.constructor = Menu;
Menu.prototype.render = render;
Menu.prototype._createItems = createItems;
Menu.prototype.show = show;
Menu.prototype.hide = hide;


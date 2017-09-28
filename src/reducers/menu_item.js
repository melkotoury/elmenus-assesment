/**
 * this menu reducer is a function which return to us a javascript object of our menu
 * */

import { SET_MENU_ITEMS, ADD_MENU_ITEM, MENU_ITEM_FETCHED, MENU_ITEM_UPDATED, MENU_ITEM_DELETED } from '../actions/menu';

export default function menuItems(state = [], action = {}) {
    switch(action.type) {
        case ADD_MENU_ITEM:
            return [
                ...state,
                action.menuItem
            ];

        case MENUI_ITEM_DELETED:
            return state.filter(item => item._id !== action.menuItemId);

        case MENUI_ITEM_UPDATED:
            return state.map(item => {
                if (item._id === action.menuItem._id) return action.menuItem;
                return item;
            });

        case MENUI_ITEM_FETCHED:
            const index = state.findIndex(item => item._id === action.menuItem._id);
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.menuItem._id) return action.menuItem;
                    return item;
                });
            } else {
                return [
                    ...state,
                    action.menuItem
                ];
            }

        case SET_MENU_ITEMS:
            return action.menuItems;
        default: return state;
    }
}

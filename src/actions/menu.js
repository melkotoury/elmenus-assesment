// export const SET_MENU_CATEGORIES = 'SET_MENU_CATEGORIES';
// export const ADD_MENU_CATEGORY = 'ADD_MENU_CATEGORY';
// export const MENU_CATEGORY_FETCHED = 'MENU_CATEGORY_FETCHED';
// export const MENU_CATEGORY_UPDATED = 'MENU_CATEGORY_UPDATED';
// export const MENU_CATEGORY_DELETED = 'MENU_CATEGORY_DELETED';
//
// export const SET_MENU_CATEGORY_ITEMS = 'SET_MENU_CATEGORY_ITEMS';
// export const ADD_MENU_CATEGORY_ITEM = 'ADD_MENU_CATEGORY_ITEM';
// export const MENU_CATEGORY_ITEM_FETCHED = 'MENU_CATEGORY_ITEM_FETCHED';
// export const MENU_CATEGORY_ITEM_UPDATED = 'MENU_CATEGORY_ITEM_UPDATED';
// export const MENU_CATEGORY_ITEM_DELETED = 'MENU_CATEGORY_ITEM_DELETED';
//
// function handleResponse(response) {
//     if (response.ok) {
//         return response.json();
//     } else {
//         let error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//     }
// }
//
// export function setMenuCategories(MENU_CATEGORIES) {
//     return {
//         type: SET_MENU_CATEGORIES,
//         MENU_CATEGORIES
//     }
// }
//
// export function setMenuCategoryItems(MENU_CATEGORY_ITEMS) {
//     return {
//         type: SET_MENU_CATEGORY_ITEMS,
//         MENU_CATEGORY_ITEMS
//     }
// }
//
// export function addMenuCategory(MENU_CATEGORY) {
//     return {
//         type: ADD_MENU_CATEGORY,
//         MENU_CATEGORY
//     }
// }
//
// export function addMenuCategoryItem(MENU_CATEGORY_ITEM) {
//     return {
//         type: ADD_MENU_CATEGORY_ITEM,
//         MENU_CATEGORY_ITEM
//     }
// }
//
// export function menuCategoryFetched(MENU_CATEGORY) {
//     return {
//         type: MENU_CATEGORY_FETCHED,
//         MENU_CATEGORY
//     }
// }
//
// export function menuCategoryItemFetched(MENU_CATEGORY_ITEM) {
//     return {
//         type: MENU_CATEGORY_ITEM_FETCHED,
//         MENU_CATEGORY_ITEM
//     }
// }
//
// export function MenuCategoryUpdated(MENU_CATEGORY) {
//     return {
//         type: MENU_CATEGORY_UPDATED,
//         MENU_CATEGORY
//     }
// }
// export function MenuCategoryItemUpdated(MENU_CATEGORY_ITEM) {
//     return {
//         type: MENU_CATEGORY_UPDATED,
//         MENU_CATEGORY_ITEM
//     }
// }
//
// export function MENU_CATEGORYDeleted(MENU_CATEGORYId) {
//     return {
//         type: MENU_CATEGORY_DELETED,
//         MENU_CATEGORYId
//     }
// }
//
// export function saveMENU_CATEGORY(data) {
//     return dispatch => {
//         return fetch('/api/MENU_CATEGORIES', {
//             method: 'post',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(handleResponse)
//             .then(data => dispatch(addMENU_CATEGORY(data.MENU_CATEGORY)));
//     }
// }
//
// export function updateMENU_CATEGORY(data) {
//     return dispatch => {
//         return fetch(`/api/MENU_CATEGORIES/${data._id}`, {
//             method: 'put',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(handleResponse)
//             .then(data => dispatch(MENU_CATEGORYUpdated(data.MENU_CATEGORY)));
//     }
// }
//
// export function deleteMenuCategory(id) {
//     return dispatch => {
//         return fetch(`/api/MENU_CATEGORIES/${id}`, {
//             method: 'delete',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(handleResponse)
//             .then(data => dispatch(MENU_CATEGORY_DELETED(id)));
//     }
// }
//
// export function fetchMenuCategories() {
//     return dispatch => {
//         fetch('/api/MENU_CATEGORIES')
//             .then(res => res.json())
//             .then(data => dispatch(setMenuCategories(data.MENU_CATEGORIES)));
//     }
// }
//
// export function fetchMenuCategoryItems() {
//     return dispatch => {
//         fetch('/api/MENU_CATEGORY_ITEMS')
//             .then(res => res.json())
//             .then(data => dispatch(setMenuCategoryItems(data.MENU_CATEGORY_ITEMS)));
//     }
// }
//
// export function fetchMenuCategory(id) {
//     return dispatch => {
//         fetch(`/api/MENU_CATEGORIES/${id}`)
//             .then(res => res.json())
//             .then(data => dispatch(MenuCategoryFetched(data.MENU_CATEGORY)));
//     }
// }
//
// export function fetchMenuCategoryItem(id) {
//     return dispatch => {
//         fetch(`/api/MENU_CATEGORY_ITEMS/${id}`)
//             .then(res => res.json())
//             .then(data => dispatch(MenuCategoryItemFetched(data.MENU_CATEGORY_ITEM)));
//     }
// }

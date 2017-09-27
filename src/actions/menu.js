export function fetchMenu() {
    return dispatch => {
        fetch('/api/menu');
    }
}
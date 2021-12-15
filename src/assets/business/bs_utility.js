import * as API from "../server/db_utilities"

export function handleAllItems(params) {
    const data = API.fetchAllItemsData(params)
    return data;
}

export function handleItem(params,id) {
    const data = API.fetchItemData(params, id);
    return data;
}
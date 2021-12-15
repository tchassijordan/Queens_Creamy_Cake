export const fetchAllItemsData = async (param) => {
    const req = await fetch(`/${param}`)
    const data = await req.json()
    return data
}

export const fetchItemData = async (param, id) => {
    const req = await fetch(`/${param}/${id}`)
    const data = await req.json()
    return data
}
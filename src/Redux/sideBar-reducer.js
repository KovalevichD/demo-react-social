const initialState = {
    friends: [
        { id: '1', name: 'Sasha', url: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png' },
        { id: '2', name: 'Misha', url: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png' },
        { id: '3', name: 'Egor', url: 'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png' }
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;
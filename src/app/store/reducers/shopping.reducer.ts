import { ShoppingItem } from "../models/shopping-item.model";
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: '3',
        name: 'Diet Coke',
    },
    {
        id: '4',
        name: 'Fanta',
    },
    {
        id: '5',
        name: 'Mirinda',
    },
]

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    } 
}
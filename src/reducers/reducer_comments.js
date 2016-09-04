import { SAVE_COMMENT } from '../actions/index';

export default function (state = [], action) {
    // console.log(action.payload);
    switch(action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload ];
    }
    return state;
}
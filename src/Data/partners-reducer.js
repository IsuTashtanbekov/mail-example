import {v1} from "uuid";

const initialState = {
    partners: [
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/pcc.jpg' },
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/rsk.jpg' },
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/universal-postal-union.jpg' },
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/world-bank-group.jpg' },
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/ab.jpg'},
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/avon.jpg'},
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/kb.jpg'},
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/optima-bank.jpg' },
        {id:v1(), url:'https://kyrgyzpost.kg/wp-content/uploads/2019/02/oriflame.jpg'},
    ]
}



export const partnersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
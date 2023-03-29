import {v1} from "uuid";

const initialState = {
    options: [
        {id:v1(), title:'Отправление внутри республики', icon:'https://i.pinimg.com/564x/60/cd/e6/60cde6d97f00dc462d910c56418498bf.jpg' , algoritms:[]},
        {id:v1(), title:'Отправления по СНГ и в дальнее зарубежье', icon:'https://i.pinimg.com/564x/99/03/19/990319824365153af3ba74a4c20608d8.jpg', algoritms:[]},
        {id:v1(), title:'Отправка международных посылок', icon:'https://i.pinimg.com/564x/05/da/fb/05dafb3c404f21703759dd32ad6151ba.jpg', algoritms:[]},
        {id:v1(), title:'Отправления международной ускоренной почты (МУП/ EMS)', icon:'https://i.pinimg.com/564x/1f/36/30/1f3630bd3055de1a9317919ed569c0f3.jpg', algoritms:[]},
        {id:v1(), title:'Отправка посылок внутри Кыргызстана', icon:'https://i.pinimg.com/564x/ba/23/f3/ba23f388f2ea13ad17a56c98196ba5ab.jpg', algoritms:[]},
    ]
}

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
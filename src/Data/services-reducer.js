import {v1} from "uuid";

const initialState = {
    options: [
        {id:v1(), title:'Отправление внутри республики', icon:'https://media.istockphoto.com/id/1453967997/photo/delivery-driver-in-van-with-parcels-on-seat.jpg?b=1&s=170667a&w=0&k=20&c=R7qKvztKJTJ98jU-E9If8HVTZTpPsBOiISNnhwROH_g=' , algoritms:[]},
        {id:v1(), title:'Отправления по СНГ и в дальнее зарубежье', icon:'https://media.istockphoto.com/id/1186576767/photo/young-happy-delivery-man-with-cardboard-boxes-looking-at-camera.jpg?s=612x612&w=0&k=20&c=1r4I1j4d0bV8T0JTdeYo2U4hmA0fsa2pJGMfI3xmkYg=', algoritms:[]},
        {id:v1(), title:'Отправка международных посылок', icon:'https://media.istockphoto.com/id/1177117407/photo/african-american-woman-holding-a-delivery-package.jpg?s=612x612&w=0&k=20&c=9iDIAMV1VdJ8urbFgl8VpYybpxoakJ1cMlIO3wdAivY=', algoritms:[]},
        {id:v1(), title:'Отправления международной ускоренной почты (МУП/ EMS)', icon:'https://media.istockphoto.com/id/1409607927/photo/muslim-woman-opening-the-door-and-receive-for-the-package.jpg?s=612x612&w=0&k=20&c=aOT92vzilMCezuXz22wmWe4lXvS60wd0k0Qsmz1TJXU=', algoritms:[]},
        {id:v1(), title:'Отправка посылок внутри Кыргызстана', icon:'https://www.advantour.com/img/kyrgyzstan/images/index.jpg', algoritms:[]},
    ]
}

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
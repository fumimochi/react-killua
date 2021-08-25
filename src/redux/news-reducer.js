import { newsAPI } from '../components/News/News';
const FIND_NEWS = 'FIND_NEWS';

let initialState = {
    page: null
}

const newsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FIND_NEWS: {
            return {
                ...state,
                page: {...state.page, news: action.news}
            }
        }
        default:
            return state
    }
}

export const setNews =  (news) => ({ type: FIND_NEWS, news}) ;

export const getNews = (topic) => async (dispatch) => {
//     let response = await newsAPI.getNews(topic);
//     dispatch(setNews(response.data));
}

export default newsReducer;
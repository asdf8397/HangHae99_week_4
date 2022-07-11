//dictionary.js
import {db} from "../../firebase";
import {
    collection,
    doc,
    getDocs,
    addDoc,

} from "firebase/firestore";

// Actions

const LOAD = "dictionary/LOAD"; 
const CREATE = "dictionary/CREATE";
const LOADED = "dictionary/LOADED";

const initialState = {
    is_loaded:false,
    list : []

};


//Action Creators
export function loadDictionary(dictionary_list) {
    return { type: LOAD, dictionary_list };
};
  
export function createDictionary(dictionary) {
    console.log("액션을 생성할거야!");
    return { type: CREATE, dictionary: dictionary };
};

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
};

//middleware

export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db,"week4"));

        let dictionary_list = [];

        dictionary_data.forEach((b) => {
            
            dictionary_list.push({id : b.id, ...b.data()});
        });


        dispatch(loadDictionary(dictionary_list));
    };
};

export const addDictionaryFB = (dictionary) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db,"week4"), dictionary);
        const dictionary_data = {id :docRef.id, ...dictionary}

        dispatch(createDictionary(dictionary_data));
    }


}




//reducer

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case "dictionary/LOAD": {
            return { list: action.dictionary_list, is_loaded: true };
        }
        case "dictionary/CREATE" : {
            const new_dictionary_list = [...state.list, action.dictionary];
            return {...state, list: new_dictionary_list, is_Loaded:true};
        }
        case "dictionary/LOADED": {
            return {...state, is_loaded :action.loaded};
        }
        default:
            return state;

    }
}
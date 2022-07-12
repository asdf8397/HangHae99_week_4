//dictionary.js
import {db} from "../../firebase";
import {
    doc,
    collection,
    getDocs,
    addDoc,
    updateDoc,
} from "firebase/firestore";

// Actions

const LOAD = "dictionary/LOAD"; 
const CREATE = "dictionary/CREATE";
const LOADED = "dictionary/LOADED";
const UPDATE = "dictionary/UPDATE";

const initialState = {
    is_loaded : false,
    list : [],

};


//Action Creators
export function createDictionary(dictionary) {
    return { type: CREATE, dictionary: dictionary };
};

export function updateDictionary(dictionary_index) {
    return { type : UPDATE, dictionary_index}
};

export function loadDictionary(dictionary_list) {
    return { type: LOAD, dictionary_list };
}; 

export function isLoaded(loaded) {
    return { type: LOADED, loaded };
};

//middleware

export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db,"dictionary"));

        let dictionary_list = [];

        dictionary_data.forEach((d) => {
            
            dictionary_list.push({id : d.id, ...d.data()});
        })


        dispatch(loadDictionary(dictionary_list));
    };
};

export const addDictionaryFB = (dictionary) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db,"dictionary"), dictionary);
        //const _dicitonary = await getDocs(docRef);
        const dictionary_data = {id: docRef, ...dictionary}

        dispatch(createDictionary(dictionary_data))
    };
};

// export const updateDictionaryFB = (dictionary_id) => {
//     return async function (dispatch, getState) {
//         const docRef = doc(db, "dictionary", dictionary_id);
//         await updateDoc(docRef, {completed : true});

//         const _dictionary_list = getState().dictionary_list;
//         const dictionary_index = _dictionary_list.findIndex((d) => {
//             return d.id === dictionary_id;
//         });
//         dispatch(updateDictionary(dictionary_index));
//     };
// };

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
        // case "dictionary/UPDATE" : {
        //     const new_dictionary_list = state.list.map((l, idx) => {
        //         if (parseInt(action.dictionary_index) === idx){
        //             return {...l, completed: true};
        //         }else{
        //             return l;
        //         }
        //     });
        //     return {...state, list: new_dictionary_list};
        // };
        case "dictionary/LOADED": {
            return {...state, is_loaded :action.loaded};
        }
        default:
            return state;

    };
};
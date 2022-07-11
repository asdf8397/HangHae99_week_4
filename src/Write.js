import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSeletor } from "react-redux";
import {db} from "./firebase";
import {addDictionaryFB} from "./redux/modules/dictionary";


const Write = (props) => {
  const history = useHistory();
  const word = React.useRef(null);
  const mean = React.useRef(null);
  const sentance = React.useRef(null);
  const dispatch = useDispatch();

  const addDictionaryList = () => {   
    dispatch(addDictionaryFB({ word: word.current.value, mean : mean.current.value, 
        sentance : sentance.current.value, completed: false }));
  };  


  return (
    <Note>
      <NoteHead>단어 추가하기</NoteHead>
      단어
      <input type="text" ref={word}/>
      뜻
      <input type="text" ref={mean}></input>
      예문
      <input type="text" ref={sentance}></input>
      <Save>
        <button onClick={() => {
            history.goBack()
            addDictionaryList()
        }
        }>저장하기</button>
      </Save>
    </Note>
  );
};

const Note = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoteHead = styled.h4``;



const Save = styled.div`
  
`;

export default Write;

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
    <Container>
    <Note>
      <NoteHead>단어 추가하기</NoteHead>
      단어
      <input type="text" ref={word} style={{width:"300px", height:"60px", marginTop:"5px"}}/>
      뜻
      <input type="text" ref={mean} style={{width:"300px", height:"60px", marginTop:"5px"}}/>
      예문
      <input type="text" ref={sentance} style={{width:"300px", height:"60px", marginTop:"5px"}}/>
      
        <button onClick={() => {
            history.goBack()
            addDictionaryList()
            
        }
        
        }style = {{width : "300px", height : "60px", marginTop : "15px"}}>저장하기</button>
     
    </Note>
    </Container>
  );
};
const Container = styled.div`
display : flex;
flex-direction : column ;
align-items : center;
justify-content : center;



`;

const Note = styled.div`
  width : 30vh;
  height : 100vh;
  display: flex;
  border : 1px solid black;
  flex-direction: column;
  align-items: center;  
  
`;

const NoteHead = styled.h4`

`;


export default Write;

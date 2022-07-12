import React from "react";
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadDictionaryFB} from "./redux/modules/dictionary";



const Dictionary = (props) => {
    const params = useParams();
    // const dictionary_index = params.index;
    const dispatch = useDispatch();
    const history = useHistory();
    const my_Dictionary_lists = useSelector((state) => state.dictionary.list);
    // const dictionary_list = useSelector((state) => state.dictionary.list);
    React.useEffect(()=> {
        dispatch(loadDictionaryFB());
    }, []);

    return (
        <> 
        <CardList>
        {my_Dictionary_lists.map((list, index)=> {
            return (
                <Cards completed = {list.completed} key = {index}>
                
                {/*{dispatch(updateDictionaryFB(dictionary_list[dictionary_index]?.id))}}/> */}
                <Word>
                <FontAwesomeIcon icon={faCheck}/> {list.word}
                </Word>
                <br/>
                <div>
                {list.mean}
                </div>
                <br/>
                <Sentance>
                {list.sentance}
                </Sentance>    
                </Cards>
            )
        })}
        </CardList>

    <Add onClick={()=> history.push("/Write")}>추가하기</Add>
    </>
    )

};

const CardList = styled.div`
display : grid;
grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr;
gap : 5px;
flex-direction : row;
justify-content : center;

`;

const Cards = styled.div`
width : 300px;
height : 150px;
border : 2px solid black;
background-color : ${(props) => props.completed? "lightgray" : "white"};
border-radius : 7%;
margin-top : 1px;
padding : 5px 5px 5px 5px;

`;

const Add = styled.button`
position : absolute;
right : 10px;
bottom : 30px;
width : 80px;
height : 80px;
border-radius : 50%;
border : transparent;
background-color : black;
color : white;
font-size : large;

`;

const Word = styled.div`
font-weight : bold;
font-size : large;

`
const Sentance = styled.div`
color : blue;

`

export default Dictionary;
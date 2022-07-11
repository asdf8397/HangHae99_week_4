import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadDictionaryFB } from "./redux/modules/dictionary";


const Dictionary = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const my_Dictionary_lists = useSelector((state) => state.dictionary.list);
    const is_loaded = useSelector((state => state.dictionary.is_loaded))

    React.useEffect(()=> {
        dispatch(loadDictionaryFB());
    }, []);


    return (
        <>
        <CardList>
        {my_Dictionary_lists.map((list, index)=> {
            return (
                <Cards completed = {list.completed} key = {index}>
                <Word>
                {list.word}
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

const Cards = styled.div`

width : 300px;
height : 120px;
border : 5px solid black;
border-radius : 7%;
margin-top : 1px;
padding : 5px 5px 5px 5px;

`;

const CardList = styled.div`

display : grid;
grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr;
gap : 3px;
flex-direction : row;
justify-content : center;




`;

const Word = styled.div`

font-weight : bold;


`
const Sentance = styled.div`

color : blue;

`

export default Dictionary;
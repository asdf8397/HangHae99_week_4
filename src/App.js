import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import { useDispatch } from "react-redux";

import Dictionary from "./Dictionary";
import Write from "./Write";
import { loadDictionaryFB } from "./redux/modules/dictionary";




function App() {
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(loadDictionaryFB());
}, []);


  return (
    <div className="App">
      <Title> 순 우리말 단어장 </Title>
      <Hr/>
      <Switch>
        <Route path = "/" exact>
        <Dictionary/>         
          </Route>
        <Route path = "/Write">
          <Write/>
        </Route>
      </Switch>
    </div>
  )
}

const Title = styled.h2`

color : black;
display : flex;
justify-content : center;
background : white;

`;

const Hr = styled.hr`

color : 1px Dotted black;

`;



export default App;
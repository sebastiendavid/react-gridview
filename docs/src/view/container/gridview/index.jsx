import React from "react";
import {GridView} from "react-gridview";

import "./index.css";

import Coder  from "../coder";

import *  as text from "./text.js";

const func1 = (prevSheet, nextSheet) => {
  if (nextSheet.getCell("A1").text){
    return prevSheet;
  }
  else{
    return nextSheet;
  }
};

const GridViewPage = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          GridView is React Component.Please refer to an official site for how to use React.
        </div>
        <a href="https://facebook.github.io/react/">React</a>

        <Coder className="js">
          {`//.jsx\nimport {GridView} from "react-gridview"\n<GridView/>`}
        </Coder>
        <div className="subhead" id="/gridview/classname">
          className
        </div>
        <div className="report">
          The className specify Gridview Class.
        </div>

        <Coder className="css">
          {text.classNameCss}
        </Coder>
        <Coder className="js">
          {text.classNameJsMini}
        </Coder>
        <GridView className="gridview-mini"/>
        <Coder className="js">
          {text.classNameJsLarge}
        </Coder>
        <GridView className="gridview-large"/>
        <div className="subhead" id="/gridview/sheet">
          sheet
        </div>

        <a href="#/sheet">Details</a>
        <Coder className="js">
          {text.sheetJs}
        </Coder>
        <div className="subhead" id="/gridview/operation">
          operation
        </div>
        <a href="#/operation">Details</a>
        <Coder className="js">
          {text.operationJs}
        </Coder>
        <div className="subhead" id="/gridview/onchangesheet">
          onChangeSheet
        </div>
        <Coder className="js">
          {text.onChangeSheetJs}
        </Coder>
        <GridView className="gridview-sample" onChangeSheet={func1}/>
      </div>
    );
  }
});

export{
  GridViewPage as default
};

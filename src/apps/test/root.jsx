import React,{Component,PropTypes} from 'react';
import ReactDOM from "react-dom";


export default class Root extends Component {
     constructor(props) {
        super(props);
        this.testEvent=this.testEvent.bind(this);
     }
     testEvent() {
        alert(1);
     }
     render() {
         const styles = require('./app.less');

         return (
           <div className={styles.ss} onClick={this.testEvent} >
               test@gmail.test100
               <img src={require("./tt.png")} />
           </div>
         );
     }
}
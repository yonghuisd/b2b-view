
import React,{Component,PropTypes} from 'react';
import ReactDOM from "react-dom";
import DatePicker from 'antd/lib/date-picker';
import Input from 'jdui/lib/Input';
import 'antd/dist/antd.less';
//import { Alert } from 'jdui';
const InputGroup = Input.Group;
export default class Root extends Component {
     constructor(props) {
        super(props);
        this.testEvent=this.testEvent.bind(this);
     }
     testEvent() {
        console.log("test")
     }
     render() {
         const styles = require('./app.less');

         return (
           <div className={styles.ss}  >
              <DatePicker />
              <Input value="test" style={{ width: '50%' }} onClick={this.testEvent} onPressEnter={this.testEvent} />
              <InputGroup size="large">
                <Input value="test2" style={{ width: '50%' }} onClick={this.testEvent} onPressEnter={this.testEvent} />
              </InputGroup>
           </div>
         );
     }
}
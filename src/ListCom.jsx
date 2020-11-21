import React , {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom = (props) =>{
    const [line , setLine] = useState(false);
     const cutItem = () =>{
        setLine(true);
     }
    return(<>
      <div className="todo_style">
            <span onClick={cutItem}>
            <DeleteIcon className=" dele"/>
            </span>
            <li style = {{textDecoration :line ? "line-through"  : 'none'}}>{props.text}</li>
         
        </div>
    </>);
}
export default ListCom;
import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';

const App = () =>{
 
     const [item, setItme] = useState('');
     const [newItem , setNewItem] = useState([]);


     const inputEvent = (event) =>{
        setItme(event.target.value);
     }

     const itemAdd = () =>{
        setNewItem((prevValue) =>{
            return [...prevValue , item];

        });
            setItme("");
     }
    return(
        <>
           <div className="main_div">
               <div className="center_div">
                   <br/>
                   <h1>TODO LIST</h1>
                   <br/>
                   <input type="text" 
                   onChange={inputEvent}
                   placeholder="Add an Item "
                   value = {item}
                    />
                   <Button onClick = {itemAdd} >
                     <AddIcon className="newButton"/>
                   
                   </Button>
                   <br/>
                   <ol>
                     
                     {newItem.map((val,index) =>{
                         return <ListCom
                          text = {val}
                          key = {index}/>

                     })}
                   </ol>
                   <br/>

               </div>
           </div>
        </>
    );
}
export default App;
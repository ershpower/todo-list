
import React, { MouseEventHandler, PropsWithChildren, useState } from 'react';
import './styles/main.css';
import myImage from './styles/1.jpg';


interface Task{
  id:number;
  text:string;
  isChecked:boolean;
}


const App: React.FC =() =>{

//сначала пыталась как-то по уродски залить картинку. так вообще делают?
    // const [image, setImage] = React.useState([
    //   {id:1, src: './styles/1.jpg'}
    // ]);
    // const handleDeleteImage = ()=>{
    //   setImage([]);
    // }

  const [image, setImage] = React.useState(true);
  //текст из инпута
  const [inputValue, setInputValue] = React.useState<string>('');
  //список задач
  const [tasks, setTask] = React.useState<{ [key:number]:Task }>({});
  //проверяю, есть ли галочка на чекбоксе
  const [isChecked, setIsChecked] = React.useState<boolean>(false)

  const handleInput: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setInputValue(e.target.value);
  }

  const addTask =(e: React.SyntheticEvent) =>{
    e.preventDefault();
    if(inputValue){
      //чтобы снегерить уникальный id (мб не надо это 🥴)
      const taskId = Date.now();
      setTask((prevTasks)=>({
        ...prevTasks,
        [taskId]: {id:taskId, text: inputValue, isChecked:false}
      }))
      // setTask([...tasks,inputValue]);
      setInputValue('');
      setImage(false);
    }
  }

    const handleCheckbox = (taskId:number) =>{
      setTask((prevTasks) => ({
        ...prevTasks,
        [taskId]: { ...prevTasks[taskId], isChecked: !prevTasks[taskId].isChecked },
      }));
    }

  return (
    <div className="App">
      <h1>
        <div className="title">Todo list</div>
    </h1>
      <form action="">
        <input type="text" value={inputValue} onChange={handleInput} name = "message" placeholder="Type the task"></input>
        <button onClick={addTask} className="add">add</button>
        </form>
        {image && <div className='img-field'>You don't have any tasks yet 😬<img src={myImage} alt="Description" />
          {/* {image.map((img)=>(
            <div key = {img.id}>
              <img src={img.src} alt={`Image ${img.id}`} />
            </div>
          ))} */}
        </div>}
        <div className="tasks">
            {Object.values(tasks).map((task)=>(
              <div key={task.id} className="task">
                {/* если чекбокс с галкой, то крашу инпут классом done */}
                <p className={task.isChecked ? "done": ''}>{task.text}</p>
                <input type="checkbox" checked={task.isChecked} onChange={()=>handleCheckbox(task.id)} className="arrow" />
                </div>
            ))}
        </div>
  </div>
    
)
}

export default App;

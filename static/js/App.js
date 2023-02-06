import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [제목,제목변경] = useState([]);
  let [내용,내용변경] = useState([]);
  let [상태,상태변경] = useState([]);
  let [제목입력값,제목입력값변경] = useState('');
  let [내용입력값,내용입력값변경] = useState('');

  return (
  <div className='body'>
  <nav className="nav_bar">
    <div>
    <h4>My Todo List</h4>
    </div>
    <div className="react">
    <h4>React</h4>
    </div>
  </nav>
  <div className='add'>
    <p>
      제목 <input type="text" onChange={(e)=>{제목입력값변경(e.target.value)}}/>
    </p>
    <p>
      내용 <input type="text" onChange={(e)=>{내용입력값변경(e.target.value)}}/>
    </p>
    <button onClick={
      ()=>{
      제목변경(제목=>[...제목,제목입력값]);
      내용변경(내용=>[...내용,내용입력값]);
      상태변경(상태=>[...상태,false])
      }}>
        추가하기</button>
  </div>
  <div className='show'>
    <div>
      <h2>Working..🔥</h2>
    </div>
    <>
      {
        
        상태.map(function(a,i){
           return 상태[i]==false
          ?(
            <div className='list' key={i}>
              <h2>{제목[i]}</h2>
              <h4>{내용[i]}</h4>
              <div>
              <button onClick={()=>{let copy = [...제목]; copy.splice(i,1); 제목변경(copy); let copy2 = [...내용]; copy2.splice(i,1); 내용변경(copy2); let copy3 = [...상태]; copy3.splice(i,1); 상태변경(copy3); }}>삭제하기</button>
                <button onClick={()=>{let copy = [...상태]; copy[i] = true; 상태변경(copy)}}>완료</button>
              </div>
          </div>
          ):null
          })
          
          
        }
        </>

    <div>
    <h2> Done..! 🎉</h2>
    </div>
    <>
      {
        
        상태.map(function(a,i){
           return 상태[i]==true
          ?(
            <div className='list' key={i}>
              <h2>{제목[i]}</h2>
              <h4>{내용[i]}</h4>
              <div>
              <button onClick={()=>{let copy = [...제목]; copy.splice(i,1); 제목변경(copy); let copy2 = [...내용]; copy2.splice(i,1); 내용변경(copy2); let copy3 = [...상태]; copy3.splice(i,1); 상태변경(copy3); }}>삭제하기</button>
                
                <button onClick={()=>{let copy = [...상태]; copy[i] = false; 상태변경(copy)}}>취소</button>
              </div>
          </div>
          ):null
          })
          
          
        }
        </>
        
        
      
      
    

  </div>
  </div>
  );
}

export default App;


// import logo from './logo.svg';
import './App.css';
import './css/style.css'

import Content from './components/Contnet';


function App() {

  const myName = '홍길동';
  const myAge = 18;

  // const myInfo = {myName: '홍길동', myAge: 18}
  // const mySchool = {}

  // let style = {
  //   fontSize: '14px',
  //   width: '500px',
  //   height: '300px',
  //   border: '1px solid #ccc',
  //   backgroundColor: '#eee',
  //   margin: '0 auto',
  // }

  
    return (
    <div className="App">

      <h1 style={{color: 'red', fontSize: '20px'}}>React (props) 적용법</h1>
        {/* <Content name='이순신' age='20' />
        <Content name={myName} age={myAge} /> */}

        {/* <Content name={myInfo} /> */}

        <Content name={myName} age={myAge}>

          <div>
            <h1 className='sub_title'>나의 취미는</h1>
            <p className='box' >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            
          </p>
          </div>

        </Content>



    </div>
  );
  
}

export default App;



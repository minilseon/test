function Content(props) {

  // props = {myName: '홍길동', myAge: 18, children:....}

//    props = {
//     name: {
//       myName: '홍길동',
//       myAge: 18
//     },
//     school: {
//       grade: '3학년',
//       class: '1반'
//     },
//    }

      //  props = {
      //    myName: '홍길동',
      //    myAge: 18,
      //    grade: '3학년',
      //    class: '1반'
      //  }

  return (
     <div className="box">
       <h2>Content 영역</h2>
       <p>
        내 이름은 {props.name}이고,
        나이는 {props.age}입니다.
       </p>
       {props.children}
     </div>
   );
}

export default Content;
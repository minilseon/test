import React from 'react'
import componentStyle from './myStyle.module.css'

export default function MyComponent() {
  return (
    <div>
      
      <h1 className={componentStyle.title_style}>React Style 적용방법 - module.css </h1>
      <p className={componentStyle.my_style}>component에 적용하는 스타일</p>

    </div>
  )
}



// function MyComponent() {
//   return (

//   );
// }

// export default MyComponent;
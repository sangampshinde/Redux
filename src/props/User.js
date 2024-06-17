

import React from 'react'
function User(props) {
 
const {data} = props;

  return (
    <div>
      <h1>User Component</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>

    </div>
  )
}

export default User






// ----------------------------------------------------------------
// import React from 'react'
// function User(props) {
//   console.log(props);
//   console.log(props.data);
//   console.log(props.data.name);


//   return (
//     <div>
//       <h1>User Component</h1>
//       

//     </div>
//   )
// }

// export default User

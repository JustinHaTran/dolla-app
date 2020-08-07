export const userLoginFetch = (user) => {
  console.log(user)
  const apiURL = "http://localhost:8080/user/14"

  fetch(apiURL,{
    'method' : "GET"
  })
  .then((response)=> {
    return response.json()
  })
  .then((json) => {
    console.log(json)
  })



  //   // "https://calcumon-user-api.herokuapp.com/auth/login"
  //   return dispatch => {
  //     return fetch(apiURL)
  //       .then(resp => resp.json())
  //       .then(resp => {
  //         if (resp.message) {
  //           console.log("INvalid log in")
  //         } else {
  //           console.log(resp)
  //           // console.log("success")
  //           // localStorage.setItem("Authorization", "key")
  //           // dispatch(loginUser(resp.user))
  //         }
  //       })
  //   }
  }



//   const loginUser = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })
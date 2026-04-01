export const initialStore=()=>{
  return{
    message: null,
    contacts:[{
      id:3,
      name: "Yuan",
      address: "Miami",
      phone: "9542975652",
      email: "kristofer@gmail.com"
    },{
      id:6,
      name: "Yuan",
      address: "Miami",
      phone: "9542975652",
      email: "kristofer@gmail.com"
    }]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    default:
      throw Error('Unknown action.');
  }    
}

export const initialState = {
  user: null,
  permissions: [],
  isAuthenticated: false,
  authError: null,
};



const reducer= (state:any, action:any)=> {
  switch(action.type) {
    case 'AUTH_BEGIN':
      return {
        ...state,
        isAuthenticated: false,
      }

    case 'AUTH_SUCCESS':
      return {
        isAuthenticated: true
        
      }

    case 'AUTH_FAIL':
      return {
        isAuthenticated: false
      }
      default:
      throw new Error('Unexpected action');
  
    
  }
}

export default reducer;




// const store = createContext(initialState);
// const { Provider } = store;

// const StateProvider = ( { children } ) => {
//   console.log('1')
//   const [state, dispatch] = useReducer((state, action) => {
//     switch(action.type) {
//       case 'action description':
//         const newState = {data:'mydata'};
//         return newState;
//       default:
//         throw new Error();
//     };
//   }, initialState);

//   return <Provider value={{ state, dispatch }}>{children}</Provider>;
// };

// export { store, StateProvider }
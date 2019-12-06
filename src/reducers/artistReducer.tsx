type TAction = {
  type: string
}

const artistReducer = (state:any, action:TAction) => {
  switch(action.type) {
    case 'next':
      return state;
    case 'prev':
      return state;
    default:
      throw new Error();
  }
}

export default artistReducer;
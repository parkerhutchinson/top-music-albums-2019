import artists from '../store/artists';

type TAction = {
  type: string
}

const artistReducer = (state:any, action:TAction) => {
  switch(action.type) {
    case 'next':
      return {index: (state.index + 1 > artists.length - 1 ? 0 : state.index + 1 )}
    case 'prev':
      return {index: (state.index - 1 < 0 ? artists.length - 1 : state.index - 1 )};
    default:
      throw new Error();
  }
}

export default artistReducer;
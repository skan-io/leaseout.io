import reducer from '../utils/reducer';

export const DefaultState = {
  isOpen: false
};

export default reducer(DefaultState, {
  'navbar/set-collapsed-open': (state)=> ({
    ...state,
    isOpen: !state.isOpen
  })
});

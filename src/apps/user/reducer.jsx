
// 3 in 1 (actionTypes, actions, reducer)

// Actions
const LOAD   = 'b2b-view/user/LOAD';
const CREATE = 'b2b-view/user/CREATE';
const UPDATE = 'mb2b-view/user/UPDATE';
const REMOVE = 'b2b-view/user/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default: return state;
  }
}
// Action Creators
export function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

//DUCKS：
//https://github.com/erikras/ducks-modular-redux
// 1、MUST export default a function called reducer()
// 2、MUST export its action creators as functions
// 3、MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
// 4、MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
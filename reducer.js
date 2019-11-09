const initialState = {
    activeTab: 'VIDEOS_TAB'
  }
  
  function deepCopy (x) {
    return JSON.parse(JSON.stringify(x))
  }
  
  const reducer = (currentState, action) => {
    if (!currentState) return deepCopy(initialState)
  
    let newState = deepCopy(currentState)
  
    const {type} = action
    if (type === 'CHANGE_TAB') {
      newState.activeTab = action.newTab
    } else {
      console.warn('Hey man - unrecognized action type:', type)
    }
  
    return newState
  }
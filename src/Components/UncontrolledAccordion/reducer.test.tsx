import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should change value to the opposite value', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error', () => {
    const state: StateType = {
        collapsed: true
    }

    expect( () => {
        reducer(state, {type: 'FAKE_TYPE'})
    } ).toThrowError()
})

type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'TOGGLE_CONSTANT'

type stateType = {
    collaps: boolean
}

export const AccordionReducer = (state: stateType, action: ActionType): stateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collaps: !state.collaps}
        default:
            throw new Error('NONE')
    }
}
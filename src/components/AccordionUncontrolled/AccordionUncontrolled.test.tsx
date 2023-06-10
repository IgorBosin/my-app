import {AccordionReducer, TOGGLE_CONSTANT} from "./reducer";

test('reducer should be change value to opposite value', () => {
    const reduc = AccordionReducer({collaps: false}, {type: TOGGLE_CONSTANT})
    expect(reduc.collaps).toBe(true)
    expect(reduc).toEqual({collaps: true})
    expect(AccordionReducer({collaps: false}, {type: 'Error'})).toThrowError()
})
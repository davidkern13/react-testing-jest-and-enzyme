import checkPropTypes from 'check-prop-types';
/*
* Return ShallowWrapper containing node(s) with given data test attr val.
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
* @param {string} val - Value of data-test attr for search
* @return {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};


export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined();
}

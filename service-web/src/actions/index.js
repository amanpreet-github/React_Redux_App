export const information = (name) => {
    console.log('In actions.');
    return  {
        type:'SET_MY_NAME',
        payload: name
    };
}
import {useState, useCallback} from 'react';
// import { useReducer } from 'react';

function reducer(state, action){
    switch (action.type){
        case 'CHANGE':
            return {
              ...state,
              [action.name]: action.value
            };
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}
function useInputs(initialForm){
//useReducer ver

//    const [form, dispatch] = useReducer(reducer, initialForm);
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({ type: 'CHANGE', name, value });
//   }, []);
//   const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
//   return [form, onChange, reset



    const [form, setForm] = useState(initialForm);
    //useState를 사용해 form이라는 새로운 상태를 선언하게 되는데 그 상태의 초기값은 파라미터로 가져온 initialForm이다.

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
};

export default useInputs;
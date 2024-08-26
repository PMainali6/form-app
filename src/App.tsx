import { useEffect } from 'react';
import './app.scss';
import { setMessage } from './redux/app/appSlice';
import { useAppDispatch, useAppSelector } from './redux/reduxHooks';

function App() {
    const dispatch = useAppDispatch();
    const message = useAppSelector((state) => state.app.message);

    useEffect(() => {
        if (message === '') {
            dispatch(setMessage('Hello React App'));
        }
    }, [dispatch, message]);

    return (
        <main>
            <h1>{message}</h1>
        </main>
    );
}

export default App;

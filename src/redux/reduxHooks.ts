import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

// use this hook throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

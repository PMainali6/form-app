import { createAction } from '@reduxjs/toolkit';
import * as types from '../../common/constants/actionTypes';

// createAction<payload_type>(action.types)
export const greetingMessage = createAction<string>(types.GREETING_MESSSGE);

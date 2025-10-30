import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './slices/casesSlice';
import agentsReducer from './slices/agentsSlice';
import activitiesReducer from './slices/activitiesSlice';

export const store = configureStore({
  reducer: {
    cases: casesReducer,
    agents: agentsReducer,
    activities: activitiesReducer,
  },
});

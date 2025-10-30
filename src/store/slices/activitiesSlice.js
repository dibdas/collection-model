import { createSlice } from '@reduxjs/toolkit';
import { mockActivities } from '@/services/mockData';

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: mockActivities,
  },
  reducers: {
    addActivity: (state, action) => {
      state.activities.unshift({
        id: state.activities.length + 1,
        timestamp: new Date(),
        ...action.payload,
      });
    },
  },
});

export const { addActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;

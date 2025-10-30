import { createSlice } from '@reduxjs/toolkit';
import { mockAgents } from '@/services/mockData';

const agentsSlice = createSlice({
  name: 'agents',
  initialState: {
    agents: mockAgents,
  },
  reducers: {
    addAgent: (state, action) => {
      state.agents.push({
        ...action.payload,
        id: `AG${String(state.agents.length + 1).padStart(3, '0')}`,
        assignedCases: 0,
        resolvedCases: 0,
        recoveryRate: 0,
        status: 'Active'
      });
    },
    updateAgent: (state, action) => {
      const index = state.agents.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.agents[index] = { ...state.agents[index], ...action.payload };
      }
    },
    deleteAgent: (state, action) => {
      state.agents = state.agents.filter(a => a.id !== action.payload);
    },
  },
});

export const { addAgent, updateAgent, deleteAgent } = agentsSlice.actions;
export default agentsSlice.reducer;

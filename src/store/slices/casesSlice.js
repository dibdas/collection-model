import { createSlice } from '@reduxjs/toolkit';
import { mockCases } from '@/services/mockData';

const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    cases: mockCases,
    selectedCase: null,
    filters: {
      search: '',
      status: 'all',
    },
  },
  reducers: {
    updateCaseStatus: (state, action) => {
      const { id, status } = action.payload;
      const caseItem = state.cases.find(c => c.id === id);
      if (caseItem) {
        caseItem.status = status;
      }
    },
    addNote: (state, action) => {
      const { id, note } = action.payload;
      const caseItem = state.cases.find(c => c.id === id);
      if (caseItem) {
        caseItem.timeline.unshift({
          date: new Date().toISOString(),
          action: note,
          agent: 'Current User'
        });
      }
    },
    setSelectedCase: (state, action) => {
      state.selectedCase = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { updateCaseStatus, addNote, setSelectedCase, setFilters } = casesSlice.actions;
export default casesSlice.reducer;

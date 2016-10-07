import { createSelector } from 'reselect';

const getIssues = (state) => state.issues.issues;
const getFilter = (state) => state.filter;

export const getFilteredIssues = createSelector(
  [ getIssues, getFilter ], (issues, filter) => {
    if (filter.length < 3)
      return issues;

    return issues.filter(issue => {
      return issue.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0
    });
  }
);

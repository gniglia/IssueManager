import React from 'react';
import IssueItem from './IssueItem';
import SearchBox from '../common/SearchBox';

const IssueList = ({issues, fetching, deleteIssue, updateFilter}) => {
  if (fetching) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div>
      <SearchBox
        onFilterUpdate={updateFilter}
        placeholder='Search your stuff'
        className='form-control' />
      <hr />
      {getIssues(issues, deleteIssue)}
    </div>
  );
};

export default IssueList;

const getIssues = (issues, deleteIssue) => {
  if (issues.length === 0) {
    return (
      <div>No data to show</div>
    );
  }

  return (
    <div className="row-fluid">
      {
        issues.map(issue => {
          return (
            <IssueItem
              key={issue._id}
              issue={issue}
              deleteIssue={deleteIssue}
            />
          )
      })}
    </div>
  );
};

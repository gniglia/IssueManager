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
    </div>
  );
};

export default IssueList;

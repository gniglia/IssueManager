import React from 'react';
import IssueItem from './IssueItem';
import SearchBox from '../common/SearchBox';

const IssueList = ({issues, deleteIssueAction, updateFilterAction}) => {
  return (
    <div>
      <SearchBox updateFilterAction={updateFilterAction} />
      <hr />
      <div className="row-fluid">
        {
          issues.map(issue => {
            return (
              <IssueItem
                key={issue._id}
                issue={issue}
                deleteIssueAction={deleteIssueAction}
              />
            )
        })}
      </div>
    </div>
  );
};

export default IssueList;

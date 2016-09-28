import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({issues, deleteIssueAction}) => {
  return (
    <div class="row-fluid">
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
  );
};

export default IssueList;

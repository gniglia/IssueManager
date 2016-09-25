import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';

const IssueList = ({issues, onDelete}) => {
  return (
    <div>
      <ul style={ulStyle}>
        {issues.map(issue => {
          return (
            <li key={issue._id}>
              <Button text='remove' onClickHandler={() => onDelete(issue._id)} />
              <h5>
                <Link to={'/issues/'+ issue._id}>{issue.title}</Link>
              </h5>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ulStyle = {
  listStyleType: 'none'
};

export default IssueList;

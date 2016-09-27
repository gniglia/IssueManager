import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import CommentList from '../comment/CommentList';

const IssueList = ({issues, onDeleteIssue}) => {
  return (
    <div>
      <ul style={ulStyle}>
        {issues.map(issue => {
          return (
            <li key={issue._id}>
              <hr />
              <h4>
                <Link to={`/issues/${issue._id}`}>{issue.title}</Link>
              </h4>
              <h6>{issue.description}</h6>

              <Button
                text='remove'
                onClickHandler={() => onDeleteIssue(issue._id)}
                className='btn btn-danger btn-sm'
              />
              {' '}
              <Button
                text='edit'
                //onClickHandler={() => onEdit(issue._id)}
                className='btn btn-success btn-sm'
              />
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

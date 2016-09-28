import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import CommentList from '../comment/CommentList';

const IssueList = ({issues, onDeleteIssue}) => {
  return (
    <div>
      <ul style={ulStyle}>
        <Link to={'/issues-edit'}>
          <Button
            text='add issue'
            className='btn btn-primary btn-sm'
          />
        </Link>
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
                className='btn btn-danger btn-xs'
              />
              {' '}
              <Link to={`/issues-edit/${issue._id}`}>
                <Button
                  text='edit'
                  className='btn btn-success btn-xs'
                />
              </Link>
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

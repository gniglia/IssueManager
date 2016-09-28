import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import CommentList from '../comment/CommentList';
import toastr from 'toastr';

const IssueList = ({issues, onDeleteIssue}) => {
  return (
    <div>
      <div class="row-fluid">
        {
          issues.map(issue => {
          return (
            <div key={issue._id} class="col-sm-6 col-md-3">
              <div class="thumbnail">
                <div class="caption">
                  <h3><Link to={`/issues/${issue._id}`}>{issue.title}</Link></h3>
                  <p>{issue.description} ({issue.comments.length})</p>
                  <p>
                    <Button
                      text='remove'
                      onClickHandler={() => {
                        onDeleteIssue(issue._id)
                          .then(() => toastr.success('Issue removed successfully'))
                      }}
                      className='btn btn-danger btn-xs'
                    />
                    {' '}
                    <Link to={`/issues-edit/${issue._id}`}>
                      <Button
                        text='edit'
                        className='btn btn-success btn-xs'
                      />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const ulStyle = {
  listStyleType: 'none'
};

export default IssueList;

import React from 'react';
import Button from '../common/Button';

const IssueEdit = ({saving, onCreateIssue}) => {
  let title, description;

  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Title</label>
          <input ref={node => {title = node;}} className='form-control' placeholder='Issue title' />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input ref={node => {description = node;}} className='form-control' placeholder='Issue description' />
        </div>

        <Button
          text={saving ? 'Saving...' : 'Save'}
          disabled={saving}
          onClickHandler={(e) => {
            e.preventDefault();
            onCreateIssue({
              title: title.value,
              description: description.value
            }).then(() => {
              document.forms[0].reset();
            });
          }}
          className='btn btn-primary btn-sm'
         />
      </form>
    </div>
  );
};

export default IssueEdit;

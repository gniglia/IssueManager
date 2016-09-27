import React from 'react';
import Button from '../common/Button';

const CommentEdit = ({issue, saving, onCreateComment}) => {
  let text;

  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Text</label>
          <textarea ref={node => {text = node;}} className='form-control' rows='3' />
        </div>

        <Button
          text={saving ? 'Saving...' : 'Save'}
          disabled={saving}
          onClickHandler={(e) => {
            e.preventDefault();
            onCreateComment({
              issueId: issue._id,
              text: text.value
            }).then(() => {
              document.forms[0].reset();
            });
          }}
          className='btn btn-primary btn-xs'
         />
      </form>
    </div>
  );
};

export default CommentEdit;

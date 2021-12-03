import React, { useState } from 'react';
import PropTypes from 'prop-types';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

const CreatePost = function ({ setNewPostPublished }) {
  const [author, setAuthor] = useState(null);
  const [body, setBody] = useState(null);

  function updateAuthor(val) {
    setAuthor(val.target.value);
  }
  function updateBody(val) {
    setBody(val.target.value);
  }

  function publishPost() {
    setNewPostPublished(true);
    base('Posts').create([
      {
        fields: {
          Body: body,
          Author: author,
        },
      },
    ]);
  }

  return (
    <>
      <p>
        Author:
        {' '}
        <input type="text" onChange={updateAuthor} />
      </p>
      <p>
        Body:
        {' '}
        <textarea onChange={updateBody} />
      </p>
      <button type="submit" onClick={publishPost}>Submit Post</button>
    </>
  );
};

export default CreatePost;

CreatePost.propTypes = {
  setNewPostPublished: PropTypes.func.isRequired,
};

import React from 'react';
import Post from './Post';
import './App.css';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};
const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

const App = function () {
  return (
    <Post author="Printer User 1" body="This is a Printer post" />
  );
};

export default App;

import axios from 'axios';

const loadIssues = () => {
  return axios.get('http://localhost:3500/api/issues');
};

export default { loadIssues };

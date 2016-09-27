import axios from 'axios';

const loadIssues = () => {
  return axios.get('http://localhost:3500/api/issues');
};

const deleteIssue = (id) => {
  return axios.delete(`http://localhost:3500/api/issues/${id}`);
};

const createIssue = (issue) => {
  return axios.post('http://localhost:3500/api/issues/', {
    title: issue.title,
    description: issue.description,
    state: 'open'
  });
};

export default { loadIssues, deleteIssue, createIssue };

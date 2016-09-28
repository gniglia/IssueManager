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

const updateIssue = (issue) => {
  return axios.patch(`http://localhost:3500/api/issues/${issue.id}`, {
    title: issue.title,
    description: issue.description
  });
};

export default { loadIssues, deleteIssue, createIssue, updateIssue };

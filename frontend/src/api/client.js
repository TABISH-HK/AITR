import axios from 'axios';

// Get or initialize persistent session ID in localStorage
let sessionId = localStorage.getItem('itr_session_id');
if (!sessionId) {
  sessionId = 'sess_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
  localStorage.setItem('itr_session_id', sessionId);
}

export const getSessionId = () => sessionId;

export const resetSessionId = () => {
  sessionId = 'sess_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
  localStorage.setItem('itr_session_id', sessionId);
  localStorage.removeItem('itr_session_user');
  return sessionId;
};

export const createNamedSession = (name, pan) => {
  const prefix = pan ? pan.toLowerCase() : 'user';
  sessionId = `sess_${prefix}_` + Math.random().toString(36).substring(2, 8);
  localStorage.setItem('itr_session_id', sessionId);
  return sessionId;
};

export const getSessionUser = () => {
  try {
    const raw = localStorage.getItem('itr_session_user');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
};

export const setSessionUser = (user) => {
  localStorage.setItem('itr_session_user', JSON.stringify(user));
};

const api = axios.create({
  baseURL: '/api',
});

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('session_id', getSessionId());
  const res = await api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const extractDocument = async (documentId) => {
  const res = await api.post(`/extract/${documentId}`);
  return res.data;
};

export const getExtraction = async (extractionId) => {
  const res = await api.get(`/review/${extractionId}`);
  return res.data;
};

export const updateReviewedData = async (extractionId, reviewedJson) => {
  const res = await api.put(`/review/${extractionId}`, { reviewed_json: reviewedJson });
  return res.data;
};

export const computeTax = async (extractionId) => {
  const res = await api.post(`/compute/${extractionId}`);
  return res.data;
};

export const getComputation = async (computationId) => {
  const res = await api.get(`/compute/${computationId}`);
  return res.data;
};

export const generateReport = async (computationId, format) => {
  const res = await api.post(`/reports/generate/${computationId}/${format}`);
  return res.data;
};

export const getSessionHistory = async () => {
  const res = await api.get(`/history/${getSessionId()}`);
  return res.data;
};

export default api;

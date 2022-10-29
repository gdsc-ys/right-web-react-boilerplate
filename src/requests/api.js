import server from '../config/server';

// Auth
export const login = (id, password) => server.post('/auth/login', { id: id, password: password });
export const logout = () => server.post('/auth/logout');
export const passwordCheck = (password) => server.post('/auth/check', { password: password });

// User
export const register = (id, email, password, part) =>
  server.post('/user', {
    id: id,
    email: email,
    password: password,
    part: part,
  });
export const getUserInfo = () => server.get('/user');
export const updateUserEmail = (email) => server.patch('/user', { email: email });
export const updateUserPassword = (password) => server.patch('/user', { password: password });
export const updateUserPart = (part) => server.patch('/user', { part: part });
export const checkDuplicateId = (id) => server.get(`/user?id=${id}`);
export const checkDuplicateEmail = (email) => server.get(`/user?email=${email}`);
export const withdraw = () => server.delete('/user');

// Board
export const getProjectsList = () => server.get('/board');
export const getProject = () => server.get(`/board/:id`);
export const getProjectByUser = (id) => server.get(`/board/user/${id}`);
export const getProjectByPart = (part) => server.get(`/board/part/${part}`);
export const createProject = (title, body) =>
  server.post(`/board/:id`, { title: title, body: body });
export const updateProjectTitle = (title, body) =>
  server.patch(`/board/:id`, { title: title, body: body });
export const deleteProject = () => server.delete(`/board/:id`);

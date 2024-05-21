import axios from 'axios';

const url = 'http://localhost:5005/list'
export async function fetchResources() {
  const response = await axios.get(url);
  return response.data;
}

export async function handleEditResource(id, resource) {
  const response = await axios.put(`${url}/${id}`, resource);
  return response.data;
}

export async function deleteResource(id) {
  await axios.delete(`${url}/${id}`);
}

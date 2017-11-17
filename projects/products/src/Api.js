import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    loadCategories: () => api.get('categories'),
    deleteCategory: (id) => api.delete(`categories/${id}`),
    createCategory: (category) => api.post('categories', category)
}

export default apis

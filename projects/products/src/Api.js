import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    readCategory: (id) => api.get(`categories/${id}`),
    loadCategories: () => api.get('categories'),
    deleteCategory: (id) => api.delete(`categories/${id}`),
    createCategory: (category) => api.post('categories', category),
    editCategory: (category) => api.put(`categories/${category.id}`, category),
    
    createProduct: (product) => api.post('products', product),
    loadProducts: (catId) => api.get(`products?category=${catId}`),
}

export default apis

import axios from 'axios';

class CategoryService{

    sendData(data) {
        axios.post('http://localhost:4200/categories/add/post', {
            category_name: data.category_name,
            category_description: data.category_description
        })
            .then(res => this.setState({ categories: res.data }))
            .catch(err => console.log(err))
    }

    updateData(data, id){
        axios.post('http://localhost:4200/categories/update/'+id, {
            item: data
        })
            .then(res => this.setState({ categories: res.data }))
            .catch(err => console.log(err))
    }

    deleteData(id){
        axios.get('http://localhost:4200/categories/delete/'+id)
            .then().catch(err => console.log(err))
    }
}

export default CategoryService;

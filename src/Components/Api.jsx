import axios from 'axios';
import UrlApi from '../globals'
import Swal from 'sweetalert2'

const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
};

export const peticionGet = async (metodo) => {
    let res = null
    await axios.get(UrlApi + metodo, config)
        .then(response => {
            res = response.data
        }).catch(err => {
            res = err
            console.log(err)
            throw new Error(res)
        })
    return res
}

export const peticionPost = async (metodo, data) => {
    let res = null
    await axios.post(UrlApi + metodo, data, config)
        .then(response => {
            res = response.data
        }).catch(err => {
            res = err
            console.log(err)
            throw new Error(res)
        })
    return res
}
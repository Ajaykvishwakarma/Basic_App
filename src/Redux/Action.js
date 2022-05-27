import { FETCH_DATA, AUTH, LOADING, PERTICULAR_DATA } from "./ActionType";
import axios from 'axios';

export const setData = (payload) => ({type: FETCH_DATA, payload})
export const setPerticularData = (payload) => ({type : PERTICULAR_DATA, payload})
export const setAuth = (payload) => ({type: AUTH, payload})
export const setLoading = (payload) => ({type : LOADING, payload})


export const fetchData = (url) => async(dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(false))

    axios.get()
}
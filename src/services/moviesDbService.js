import axios from "axios";
import {BASE_URL_MOVIES_DB} from './Constants/constants.js'

const movies_db_service = axios.create({
    baseURL: BASE_URL_MOVIES_DB
});

export default movies_db_service;
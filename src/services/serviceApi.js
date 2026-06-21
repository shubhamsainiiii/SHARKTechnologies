import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getServiceBySlug = async (slug) => {
    const res = await axios.get(
        `${API}/services/slug/${slug}`
    );

    return res.data;
};

export const getAllServices = async () => {
    const res = await axios.get(
        `${API}/services`
    );

    return res.data;
};
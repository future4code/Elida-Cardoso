import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";


export const useRequestData = (url) => {
    const [data, setData] = useState();
    // const [error, setError] = useState();

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data);
            // console.log("deu certo", response.data)
        })
        .catch((error) => {
            // setError(error.response.data);
            console.log("deu erro", error.response.data)
        })
    }, [url]);

    return [data];
}

export const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token === null) {
            alert("Área Restrita. Necessário Login!")
            history.push('/login')
        } else {
            history.push('/admin/trips/list')
        }
    }, [])
}
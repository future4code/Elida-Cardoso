import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";


export const useGetTrips = (initialState) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setData(response.data.trips);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.response.data);
            setIsLoading(false)
        })
    }, []);

    return [data, isLoading, error];
}
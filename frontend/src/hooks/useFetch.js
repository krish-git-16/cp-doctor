import { useEffect, useState } from "react";

function useFetch(fetchFunction) {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        async function getData() {

            try {

                const response = await fetchFunction();

                setData(response.data);

            }

            catch (err) {

                setError(err);

            }

            finally {

                setLoading(false);

            }

        }

        getData();

    }, []);

    return {

        data,

        loading,

        error

    };

}

export default useFetch;
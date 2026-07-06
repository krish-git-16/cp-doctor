import { useState } from "react";

import api from "../backend/services/api";

function useProfile() {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function fetchProfile(handle) {

        try {

            setLoading(true);

            setError("");

            const response =
                await api.get(`/codeforces/${handle}`);

            setProfile(response.data);

        }

        catch {

            setError("Invalid Handle");

        }

        finally {

            setLoading(false);

        }

    }

    return {

        profile,

        loading,

        error,

        fetchProfile

    };

}

export default useProfile;
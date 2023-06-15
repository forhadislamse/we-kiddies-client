import { useEffect, useState } from "react";

const useToys = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false);
            });
    }, [])
    return [toys, loading]
}

export default useToys;
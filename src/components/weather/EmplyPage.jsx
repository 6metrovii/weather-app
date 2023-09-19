import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmplyPage = ({ city, day, month }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`../${city}/${day}.${month}`, { relative: 'path' });
    }, []);
    return <></>;
};

export default EmplyPage;

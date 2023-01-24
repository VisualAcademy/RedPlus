import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VisualAcademyRouter = WrappedComponent => props => {
    const params = useParams(); // 라우트 파라미터 받기
    const navigate = useNavigate(); // 이동

    return (
        <WrappedComponent
            {...props}
            params={params}
            navigate={navigate}
        />
    );
};

export default VisualAcademyRouter;

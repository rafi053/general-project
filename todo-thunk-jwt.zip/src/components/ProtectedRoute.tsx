import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCurrentUser } from '../store/features/user/userSlice';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useDispatchType';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { token, status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token && (status === 'idle' || status === 'loading')) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token, status]);
  

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!token || status === 'failed') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

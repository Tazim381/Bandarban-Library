import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const isAuthenticated = () => {
    const isUser = localStorage.getItem('set-token-for-user');
    return !!isUser;
  };

  return {
    isAuthenticated,
  };
};

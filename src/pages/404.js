import { useEffect } from 'react';
import { navigate } from 'gatsby';

const Redirect = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default Redirect;

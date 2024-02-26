import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = '/api/data/users?timeout=10000';

interface User {
  id: number;
  name: string;
}

interface ApiResponse {
  users: User[];
}

function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [timeoutError, setTimeoutError] = useState(false);

  function fetchUsers() {
    axios
      .get<ApiResponse>(API_URL, { timeout: 5000 })
      .then((response) => {
        const { users } = response.data;
        setUsers(users);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setTimeoutError(true);
        }
      });
  }

  function retryRequest() {
    setTimeoutError(false);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, timeoutError, retryRequest };
}

export default useFetchUsers;

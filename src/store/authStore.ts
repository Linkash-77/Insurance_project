import { create } from 'zustand';
import axios from 'axios';

interface AuthState {
  token: string | null;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      set({ token, user: response.data.user });
    } catch (error) {
      throw error;
    }
  },
  register: async (email: string, password: string, name: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
        name,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      set({ token, user: response.data.user });
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));
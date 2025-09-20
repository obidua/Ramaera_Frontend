import { create } from 'zustand';
import api from '../utils/axios';

export interface Shareholder {
  _id: string;
  fullName: string;
  email: string;
  mobile: string;
  location: string;
  referralCode?: string;
  panNumber: string;
  nomineeName: string;
  nomineeRelation: string;
  idProofUrl: string;
  sharePurchase: number;
  termsAgreed: boolean;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

interface ShareholderState {
  shareholders: Shareholder[];
  selectedShareholder: Shareholder | null;
  loading: boolean;
  error: string | null;
  message:string | null;
 

  // Actions
  fetchAllShareholders: (token?: string) => Promise<void>;
  fetchShareholderById: (id: string, token?: string) => Promise<void>;
  createApplication: (formData: FormData) => Promise<void>;
  updateApprovalStatus: (id: string, status: 'pending' | 'approved' | 'rejected', token: string) => Promise<void>;
  deleteApplication: (id: string, token: string) => Promise<void>;
}

export const useShareholderStore = create<ShareholderState>((set) => ({
  shareholders: [],
  selectedShareholder: null,
  loading: false,
  error: null,
  message: null,

  fetchAllShareholders: async (token) => {
    try {
      set({ loading: true, error: null });
      const res = await api.get('/api/shareholder', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      set({ shareholders: res.data });
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Failed to fetch shareholders' });
    } finally {
      set({ loading: false });
    }
  },

  fetchShareholderById: async (id, token) => {
    try {
      set({ loading: true, error: null });
      const res = await api.get(`/api/shareholder/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      set({ selectedShareholder: res.data });
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Failed to fetch shareholder' });
    } finally {
      set({ loading: false });
    }
  },

  createApplication: async (formData) => {
    try {
      set({ loading: true, error: null, message: null });
      const res = await api.post('/api/shareholder/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      set({ message: res.data?.message || 'Application submitted successfully' });
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || 'Failed to submit application';
      set({ error: errorMsg });
      throw new Error(errorMsg); // Throw error so component can catch
    } finally {
      set({ loading: false });
    }
  },
  
  updateApprovalStatus: async (id, status, token) => {
    try {
      set({ loading: true, error: null });
      const res = await api.put(
        `/api/shareholder/approval/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update local list
      set((state) => ({
        shareholders: state.shareholders.map((s) =>
          s._id === id ? res.data.data : s
        ),
      }));
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Failed to update status' });
    } finally {
      set({ loading: false });
    }
  },

  deleteApplication: async (id, token) => {
    try {
      set({ loading: true, error: null });
      await api.delete(`/api/shareholder/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove locally
      set((state) => ({
        shareholders: state.shareholders.filter((s) => s._id !== id),
      }));
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Failed to delete application' });
    } finally {
      set({ loading: false });
    }
  },
}));

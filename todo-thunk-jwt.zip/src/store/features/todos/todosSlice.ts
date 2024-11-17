import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../../store';

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

interface TodosState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  status: 'idle',
  error: null,
};

const API_URL = 'https://todo-backend-eh0x.onrender.com/api/v1';

// Fetch all todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    try {
      const response = await axios.get(`${API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      return response.data; // Returns an array of todos
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch todos'
      );
    }
  }
);

// Create a new todo
export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (
    todoData: { title: string; description?: string },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    try {
      const response = await axios.post(`${API_URL}/todos`, todoData, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      return response.data; // Returns the created todo
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to create todo'
      );
    }
  }
);

// Update a todo
export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (
    todoData: { _id: string; title?: string; description?: string; completed?: boolean },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    try {
      const response = await axios.put(
        `${API_URL}/todos/${todoData._id}`,
        todoData,
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
      return response.data; // Returns the updated todo
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to update todo'
      );
    }
  }
);

// Delete a todo
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (_id: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    try {
      await axios.delete(`${API_URL}/todos/${_id}`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      return _id; // Return the ID of the deleted todo
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to delete todo'
      );
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    resetTodos(state) {
      state.todos = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch todos
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Create todo
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Update todo
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Delete todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { resetTodos } = todosSlice.actions;
export default todosSlice.reducer;

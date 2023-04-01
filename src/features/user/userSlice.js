import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.registerUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.loginUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Get user wishlist
export const getUserProductWishlist = createAsyncThunk(
  "auth/wishlist",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.getUserWishlist(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdUser = action.payload;
      if (state.isSuccess && state.createdUser) {
        toast.success("User created successfully", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Login user
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;

      if (state.isSuccess && state.user) {
        localStorage.setItem("token", state.user.token);
        toast.success("User is logged in!", {
          icon: "🚀",
        });
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });

    // Get user wishlist
    builder.addCase(getUserProductWishlist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserProductWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.wishlist = action.payload;
    });
    builder.addCase(getUserProductWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      if (state.isError) {
        toast.error(state.message);
      }
    });
  },
});

export default authSlice.reducer;

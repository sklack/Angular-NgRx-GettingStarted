import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
  maskUserName: boolean,
  currentUser: User
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
}

const getUserSFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserSFeatureState,
  state => state.maskUserName
)

export const getCurrentUser = createSelector(
  getUserSFeatureState,
  state => state.currentUser
)

export const userReducer = createReducer(
  { maskUserName: true },
  on(createAction('[User] Mask User Name'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  })
)

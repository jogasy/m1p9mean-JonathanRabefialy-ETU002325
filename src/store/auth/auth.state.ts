import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { Profile } from 'src/app/login/types/profile';
import { Auth } from './auth.action';
import { AuthModel } from './auth.model';

const defaultValue: AuthModel = {
  type: undefined,
  isConnected: undefined
};

@State<AuthModel>({
  name: 'auth',
  defaults: defaultValue
})

@Injectable()
export class AuthState {

  @Selector()
  static isConnected(state: AuthModel): boolean | undefined {
    return state.isConnected;
  }

  @Selector()
  static auth(state: AuthModel): AuthModel | undefined {
    return state;
  }

  @Action(Auth.UpdateAuth)
  updateOrderItem(ctx: StateContext<AuthModel>, payload: Auth.UpdateAuth): void {
    ctx.patchState({
      isConnected: payload.isConnected
    });
  }
}


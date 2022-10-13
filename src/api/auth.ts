import api from './instance';

interface UserInterface {
  id: number;
  username: string;
  password: string;
  token: string;
}

export type UserResponse = Pick<UserInterface, 'id' | 'username' | 'token'>;
export type User = Pick<UserInterface, 'id' | 'username'>;
export type UserSigninFormType = Pick<UserInterface, 'username' | 'password'>;

export async function signup(username: string, password: string) {
  try {
    const response = await api.post<UserResponse>('/auth/signup', {
      username,
      password,
    });
    return response.data;
  } catch {
    // TODO: status code를 서버로부터 전달 받은 뒤, 그것으로 error 타입을 전달하기
    throw new Error('error occurred at signup.');
  }
}

export async function signin(username: string, password: string) {
  try {
    const response = await api.post<UserResponse>('/auth/signin', {
      username,
      password,
    });
    return response.data;
  } catch {
    // TODO: status code를 서버로부터 전달 받은 뒤, 그것으로 error 타입을 전달하기
    throw new Error('error occurred at signin.');
  }
}

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  username?: string;
  email: string;
  password: string;
};

export type ConfirmEmailPayload = {
  token: string;
  email: string;
};

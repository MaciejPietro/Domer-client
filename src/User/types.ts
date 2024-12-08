export type UpdateUserPayload = {
  id: string;
  email?: string;
  currentPassword?: string;
  password?: string;
};

export type DeleteAccountPayload = {
  id: string;
  password: string;
};

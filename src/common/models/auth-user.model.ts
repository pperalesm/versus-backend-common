export class AuthUser {
  constructor(
    public username: string,
    public role: string,
    public active: boolean,
  ) {}
}

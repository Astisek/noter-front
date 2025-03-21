class RouterLinks {
  login = () => '/login';
  registerFinal = () => '/register-final';
  register = () => '/register';
  app = () => '/app';
  main = () => `${this.app()}/category`;
  category = () => `${this.app()}/category`;
  categoryView = (categoryId: string) => `${this.app()}/category/${categoryId}/note/`;
  noteView = (categoryId: string, noteId: string) => `${this.app()}/category/${categoryId}/note/${noteId}/`;
}

export const routerLinks = new RouterLinks();

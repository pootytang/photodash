let isLogin = $state(true)

export const loginstate = {
  get isLogin() {
    return isLogin
  },

  set isLogin(v: boolean) {
    isLogin = v
  }
}
// global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// api

const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";
const REMOVE_COMMENT = "/:id/remove-comment";

const routes = {
  // global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  // users
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `${USERS}/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  // videos
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `${VIDEOS}/${id}`;
    }
    return VIDEO_DETAIL;
  },
  editVideo: (id) => {
    if (id) {
      return `${VIDEOS}/${id}/edit`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: (id) => {
    if (id) {
      return `${VIDEOS}/${id}/delete`;
    }
    return DELETE_VIDEO;
  },

  // github
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,

  // facebook
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,

  me: ME,

  api: API,
  registerView: REGISTER_VIEW,

  addComment: ADD_COMMENT,
  removeComment: REMOVE_COMMENT,
};

export default routes;

export default class UserInfo {
    constructor({name, about, avatar}) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
        this._avatar = document.querySelector(avatar)
    }

    getUserInfo() {
        return {name: this._name.textContent, about: this._about.textContent};
    }

    getUserId() {
        return this._id
    }

    editAvatar(avatar) {
        this._avatar.src = avatar
    }

    setUserInfo({name,about, id})  {
        this._name.textContent = name;
        this._about.textContent = about;
        this._id = id;
    }
}
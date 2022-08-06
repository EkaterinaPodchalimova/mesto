export default class UserInfo {
    constructor({name,about}) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
    }

    getUserInfo() {
        return {name: this._name.textContent, about: this._about.textContent};
    }

    getUserId() {
        return this._id
    }

    setUserInfo({name,about, id})  {
        this._name.textContent = name;
        this._about.textContent = about;
        this._id = id;
    }
}
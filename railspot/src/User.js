class User {
    constructor (id, password, name, email){
        this.id = id; 
        this.password = password;
        this.name = name;
        this.email = email;
        User.instance = this; 
    }

    static getInstance (){
        return User.instance;
    }
}

export default User;
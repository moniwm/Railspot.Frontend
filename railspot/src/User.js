class User {
    constructor (id, password, name, email, admin){
        this.id = id; 
        this.password = password;
        this.name = name;
        this.email = email;
        this.admin = admin;
        User.instance = this; 
    }

    static getInstance (){
        return User.instance;
    }
}

export default User;
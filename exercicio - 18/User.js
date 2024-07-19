<<<<<<< HEAD
class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if (this.email === email && this.password === password){
            console.log("Login Realizado com Sucesso!")
        }else{
            console.log("Falha ao fazer Login! Email ou senha incorretos.")
        }    
    }
}

const john = new User("John Doe", "john@email.com", "1234")
console.log(john)
=======
class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if (this.email === email && this.password === password){
            console.log("Login Realizado com Sucesso!")
        }else{
            console.log("Falha ao fazer Login! Email ou senha incorretos.")
        }    
    }
}

const john = new User("John Doe", "john@email.com", "1234")
console.log(john)
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
john.login("john@email.com", "1234")
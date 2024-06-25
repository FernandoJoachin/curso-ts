type User = {
    name : string,
    startDate : Date,
}

type Admin = {
    name : string,
    permission : string[],
}

type UserAdmin = User & Admin;
/**Usando interfaces */
// interface UserAdmin extend User, Admin{} cuando User y Admin son interfaces

const doctor : UserAdmin = {
    name: 'Fernando',
    startDate: new Date(),
    permission: ['Ver chat de paciente']
}

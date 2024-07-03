var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Cirujano"] = 1] = "Cirujano";
    Role[Role["Enfermero"] = 2] = "Enfermero";
    Role[Role["Admnistrativo"] = 3] = "Admnistrativo";
})(Role || (Role = {}));
var cirujano = {
    nombre: 'Fernando',
    email: 'fer@gmail.com',
    role: Role.Cirujano
};
var imprimirStaff = function (staff) {
    console.log(staff);
};
imprimirStaff(cirujano);
console.log('hola');

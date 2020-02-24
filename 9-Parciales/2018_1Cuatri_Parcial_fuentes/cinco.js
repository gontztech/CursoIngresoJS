function mostrar()
{
    var planetas;

    planetas = (prompt ("ingrese planetas")).toLowerCase();

    switch (planetas) {
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert ("aca hace frio la puta que te re pario");
            break;
        case "tierra":
            alert ("aca vivimos hijo de re mil");
            break;
        case "venus":
        case "mercurio":
            alert ("aca hace calor la reconcha de tu madre");
            break;
        default:
            alert ("error. ingrese un planeta valido");
    }

}

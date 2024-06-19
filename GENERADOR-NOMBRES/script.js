
document.getElementById('generar-nombre').addEventListener('click', generarNombre);

function generarNombre() {
    const nombres = ['Juan Ernesto', 'Ana Gloria', 'Luis Angel', 'Marta Guadalupe', 'San Pedro', 'Maria Lucía ','Diego Alexander', 'Josue Geovany','Darla Danyali','Kairos Isai','Eduardo','Amado De Jesus','Wendy','Daniel Abisai','Delmi Edith', 'Yussif Aldahir','Heyder Manuel'];
    const apellidos = ['Pérez Ek', 'Gómez Lopez', 'Rodríguez Euan', 'Fernández Uc', 'López Hernandez', 'Martínez Ucan','Chan Pech' ,'Ciau Dzul', 'Ucan Pech', 'Flores Herrera','Lizarraga Diaz', 'Cab Pech','Chan Valle', 'Sanchez Ek', 'Graniel Parados', 'Novelo Herrera', 'Solis Solis'];

    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];

    const nombreCompleto = `${nombreAleatorio} ${apellidoAleatorio}`;

    document.getElementById('nombre-generado').textContent = nombreCompleto;
}

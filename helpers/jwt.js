// JSON Web Token

const jwt = require('jsonwebtoken');

const generarJWT = ( uid ) => {

    return new Promise( (resolve, reject)=>{

        const payload = {
            uid,
        };

        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: '16h'
        }, ( err, token ) => {
    
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el JWT')
            } else {
                resolve(token);
            }
    
        });

    });

}
module.exports = {
    generarJWT,
}
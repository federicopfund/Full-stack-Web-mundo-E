import React from 'react';

const About = () => {
    return(
        <section id="about" className="flex about__section">
            <div className="about__decoration">&nbsp;</div>
            <div className="about__container">
                <div>
                    <span className="about__title1">Animate a ser vos!!...
                    <p className="about__title2">Agencia de turismo y viajes</p>
                    </span>
                </div>
                <div className="about__text">
                    {/* Ajustar el contenedor sin br */}
                    <p>Somos una agencia de viajes con años de experiencia en la industria turística. 
                    En 25Watts podés elegir entre cientos de vuelos a destinos de todo el mundo,
                    encontrar tu hotel ideal, seleccionar paquetes turísticos a medida,
                    disfrutar de la mejor oferta de cruceros por el mundo y mucho más. 
                    Experimentá la facilidad de pagar en cuotas con todos los bancos y al precio más bajo con 
                    la mejor agencia de turismo de Argentina!
                    Viví una experiencia de compra rápida, segura, fácil y empezá a disfrutar tus vacaciones con 25Watts.com
                    Ante cualquier duda o inconveniente podés llamar a nuestro centro de atención al cliente y 
                    recibir una respuesta rápida y satisfactoria <br/>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
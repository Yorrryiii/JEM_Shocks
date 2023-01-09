import React from 'react';
import './styles/Carousel.css';

export class OpinionCarousel extends React.Component {
    componentDidMount() {
        // Primero, definimos la opinión actual y el número total de opiniones
        let currentOpinion = 0;
        const totalOpinions = 3;
    
        // Luego, creamos una función que cambie la opinión actual
        function changeOpinion(amount) {
            currentOpinion += amount;
            // Aseguramos que la opinión actual siempre esté entre 0 y el número total de opiniones
            currentOpinion = (currentOpinion + totalOpinions) % totalOpinions;
            // Ocultamos todas las opiniones
            for (let i = 0; i < totalOpinions; i++) {
                if (i !== currentOpinion) {
                    document.getElementById('opinion-' + i).style.display = 'none';
                } else {
                    document.getElementById('opinion-' + i).style.display = 'block';
                }
            }
            // Mostramos la opinión actual
            const opinionElement = document.getElementById('opinion-' + currentOpinion);
            opinionElement.style.top = '0';
        }
    
        // Ocultamos todas las opiniones al inicio
        changeOpinion(0);
    
        // Luego, podemos utilizar setInterval para cambiar la opinión cada 7 segundos
        setInterval(() => {
          changeOpinion(1);
        }, 7000);
    }

    render() {
        return (
            <div id='bordeCarousel'>
                <div id="carousel">
                    <div id='opinion-0'>
                        <img src="/images/opinion1.jpeg" alt="Opinion 1" />
                        <h3>Cathy Murphy<span>Client from Australia</span></h3>
                        <p>" I loved these socks. They are comfortable and have a very original design. I also appreciate that they are made from sustainable materials. I will definitely be purchasing more in the future. "</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                    </div>

                    <div id='opinion-1'>
                        <img src="/images/opinion2.jpeg" alt="Opinion 2" />
                        <h3>Christina Lucas<span>Client from USA</span></h3>
                        <p>" I bought them as a gift and it was a success. The delivery was also fast. I highly recommend these socks. They are great quality and the birthday boy was thrilled with them. The unique design really sets them apart from other socks. Overall, a great purchase. "</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                    </div>

                    <div id='opinion-2'>
                        <img src="/images/opinion3.jpeg" alt="Opinion 3" />
                        <h3>William Brown<span>Client from Germany</span></h3>
                        <p>" I've tried many brands of socks and these are, without a doubt, the best I've ever had - I'll buy again for sure! "</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default OpinionCarousel;
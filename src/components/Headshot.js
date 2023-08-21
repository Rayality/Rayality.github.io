import { useEffect } from 'react';
import { useRef } from 'react';

export default function Headshot(props) {
    let animID = useRef();
    useEffect(() => {
        const picture = props.picture
        const canv = document.getElementById('head');
        const ctx = canv.getContext('2d');
        canv.width = 490;
        canv.height = 564;
        let particles = [];
        const numberOfParticles = 3000;
        ctx.drawImage(picture, 0, 0, canv.width, canv.height)
        const pixels = ctx.getImageData(0, 0, canv.width, canv.height);
        ctx.clearRect(0, 0, canv.width, canv.height)

        let imageMap = [];

        for (let y = 0; y < canv.height; y++) {
            let row = [];
            for (let x = 0; x < canv.width; x++) {
                const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
                const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
                const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
                const brightness = howBright(red, green, blue)
                row.push([brightness]);
            }
            imageMap.push(row);
        }

        function howBright(red, green, blue) {
            return Math.sqrt(
                (red * red) * 0.3 +
                (green * green) * .587 +
                (blue * blue) * .114
            )/100;
        }


        class Particle {
            constructor() {
                this.x = (Math.random() * canv.width);
                this.y = 0;
                this.speed = 0;
                this.velocity = Math.random() * 0.5;
                this.size = Math.random() * 1.5 + 1;
                this.position1 = Math.floor(this.y);
                this.position2 = Math.floor(this.x);
            }
            update() {
                this.position1 = Math.floor(this.y);
                this.position2 = Math.floor(this.x);
                this.speed = imageMap[this.position1][this.position2][0];
                let movement = (2.5 - this.speed) + this.velocity;
                this.y += movement;

                if (this.y >= canv.height) {
                    this.y = 0;
                    this.x = Math.random() * canv.width;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.fillStyle = 'rgb(10, 201, 0)';
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }
        init();

        function animate() {
            ctx.globalAlpha = .02;
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, canv.width, canv.height);
            ctx.globalAlpha = .2;
            particles.forEach((particle) => {
                particle.update();
                ctx.globalAlpha = particle.speed * 0.04;
                particle.draw();
            })
            cancelAnimationFrame(animID.current)
            animID.current=requestAnimationFrame(animate);
        }
        animID.current=requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(animID.current)
    }, [])
}

function random(low, high) {
    return Math.random() * (high - low) + low;
}

class Visual {
    constructor() {
        this.canvas = document.querySelector('#canvas');
        if (this.canvas == undefined || this.canvas == null) return;
        this.context = this.canvas.getContext('2d');
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.particleLength = 150;
        this.particles = [];
        this.particleMaxRadius = 8;

        this.initialize();
        this.render();
    }

    initialize() {
        this.resizeCanvas();
        for (let i = 0; i < this.particleLength; i++) {
            this.particles.push(this.createParticle(i));
        }
        this.bind();
    }

    bind() {
        window.addEventListener('resize', this.resizeCanvas, false);
    }

    unbind() {
        window.removeEventListener('resize', this.resizeCanvas, false);
    }

    resizeCanvas() {
        this.canvasWidth = document.body.offsetWidth;
        this.canvasHeight = document.body.offsetHeight;
        this.canvas.width = this.canvasWidth * window.devicePixelRatio;
        this.canvas.height = this.canvasHeight * window.devicePixelRatio;
        this.context = this.canvas.getContext('2d');
        this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    createParticle(id) {
        const radius = random(1, this.particleMaxRadius);
        const x = random(0, -this.canvasWidth);
        let y = random(this.canvasHeight / 2 - 350, this.canvasHeight / 2 + 350);
        y += random(-100, 100);
        const alpha = random(0.05, 0.5);

        const redPink = { r: 255, g: 137, b: 255 }
        const red = { r: 255, g: 137, b: 196 }
        const pink = { r: 156, g: 77, b: 64 }

        let colorObject = {};
        let colorChoice = Math.floor((Math.random() * 3) + 1);;
        switch (colorChoice) {
            case 1: colorObject = redPink;
                break;
            case 2: colorObject = red;
                break;
            case 3: colorObject = pink;
                break;
        }

        return {
            id: id,
            x: x,
            y: y,
            startY: y,
            radius: radius,
            startAngle: 0,
            endAngle: Math.PI * 2,
            alpha: alpha,
            color: colorObject,
            speed: alpha + 1,
            amplitude: random(50, 200)
        };
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.moveParticle(particle);

            this.context.beginPath();
            this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
            this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
            this.context.fill();
        });
    }

    moveParticle(particle) {
        particle.x += particle.speed;
        particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
    }

    render() {
        this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

        this.drawParticles();

        this.particles.forEach(particle => {
            if (particle.x - particle.radius >= this.canvasWidth) {
                this.particles[particle.id] = this.createParticle(particle.id, true);
            }
        });

        requestAnimationFrame(this.render.bind(this));
    }
}

new Visual();
import { useEffect } from 'react';
import { useRef } from 'react';

const ScaleTemp = (props) => {
    const {
        hourlyInfo,
        formatHours,
        minutesNow,
        hourNow,
        appClasses,
        myCity,
        sign,
    } = props;
    const canvasRef = useRef(null);

    const tempArray = [...hourlyInfo];
    let tempsort = [...hourlyInfo];

    const maxTemp = Math.max(...tempArray);
    const minTemp = Math.min(...tempArray);

    tempsort.sort((a, b) => a - b);
    tempsort = tempsort.map((el) => Math.round(el * 10) / 10);
    tempsort = tempsort.filter((item, index) => !((index + 1) % 4));
    tempsort.unshift(Math.round(minTemp * 10) / 10);

    useEffect(() => {
        const canvas = canvasRef.current,
            context = canvas.getContext('2d'),
            canvasWrapper = document.querySelector('.weatherPage-body-scale'),
            canvasWrapperWidth = canvasWrapper.offsetWidth,
            canvasWrapperHeight = canvasWrapper.offsetHeight;

        canvas.width = canvasWrapperWidth;
        canvas.height = canvasWrapperHeight;

        const centerX = canvas.width / 2;
        //const centerY = canvas.height / 2;

        draw(canvas, context);

        function draw(canvas, context) {
            const colors = {
                colorDot: appClasses === 'App light' ? '#654926' : '#FFE3D8',
                colorScale: appClasses === 'App light' ? '#fff' : '#BBBBBB',
                colorMarking:
                    appClasses === 'App light' ? '#F6FFDE' : '#BBBBBB',
                colorMinMax: appClasses === 'App light' ? '#000' : 'red',
                colorGradientStart:
                    appClasses === 'App light' ? '#6d4c23' : '#04293A',
                colorGradientStop:
                    appClasses === 'App light' ? '#a27238' : '#063b53',
            };
            const colorGradient = context.createLinearGradient(
                centerX,
                canvas.height,
                centerX,
                0
            );
            colorGradient.addColorStop(0, colors.colorGradientStart);
            colorGradient.addColorStop(1, colors.colorGradientStop);

            function convertTempToHeight(value) {
                const min = minTemp;
                const max = maxTemp;
                const height = canvas.height - 40;
                if (value < min) {
                    value = min;
                } else if (value > max) {
                    value = max;
                }
                const rangeValue = ((value - min) / (max - min)) * height;
                return height - rangeValue;
            }

            context.fillStyle = colorGradient;
            context.beginPath();
            context.fillRect(0, 0, canvas.width, canvas.height);

            // draw maxtemp min temp scale
            context.font = '13px roboto';
            context.fillStyle = colors.colorMarking;
            for (let i = 0; i < tempsort.length; i++) {
                if (i === 0 || i === tempsort.length - 1) continue;

                context.fillText(
                    `${tempsort[i]} ${sign}`,
                    4.5,
                    canvas.height - 16 - i * 30 - 0.5
                );
            }
            context.fillStyle = colors.colorMinMax;
            context.font = '14px roboto';
            context.fillText(
                `${tempsort[0]} ${sign}`,
                4.5,
                canvas.height - 16.5
            );
            context.fillText(
                `${tempsort[tempsort.length - 1]} ${sign}`,
                4.5,
                22.5
            );
            // draw hours
            context.fillStyle = colors.colorMarking;
            if (canvas.width < 735) {
            } else if (canvas.width < 945) {
                context.font = '10px roboto';
                for (let i = 1; i < tempArray.length - 2; i++) {
                    if (!((i + 1) % 2)) continue;
                    context.fillText(
                        `${formatHours(hourNow + i)}:${minutesNow}`,
                        30 + (i * canvas.width) / tempArray.length + 0.5,
                        canvas.height - 3 - 0.5
                    );
                    context.fillText(
                        `${formatHours(hourNow + i)}:${minutesNow}`,
                        30 + (i * canvas.width) / 48 + 0.5,
                        10.5
                    );
                }
            } else {
                context.font = '11px roboto';
                for (let i = 1; i < tempArray.length - 2; i++) {
                    if (!((i + 1) % 2)) continue;
                    context.fillText(
                        `${formatHours(hourNow + i)}:${minutesNow}`,
                        30 + (i * canvas.width) / tempArray.length + 0.5,
                        canvas.height - 3 - 0.5
                    );
                    context.fillText(
                        `${formatHours(hourNow + i)}:${minutesNow}`,
                        30 + (i * canvas.width) / 48 + 0.5,
                        10.5
                    );
                }
            }
            // draw marking
            context.lineWidth = 1.5;
            context.strokeStyle = '#8b8b8b79';
            context.setLineDash([5, 5]);
            for (let x = 0; x < tempsort.length - 1; x++) {
                context.beginPath();
                context.moveTo(
                    50.5,
                    18 + (x * canvas.height) / tempsort.length - 1
                );
                context.lineTo(
                    canvas.width - 30,
                    18 + (x * canvas.height) / tempsort.length - 1
                );
                context.stroke();
            }
            for (let y = 0; y < tempArray.length - 3; y++) {
                if (y % 2 === 0) continue;
                context.beginPath();
                context.moveTo(70 + (y * canvas.width) / 48, 21);
                context.lineTo(
                    70 + (y * canvas.width) / 48,
                    canvas.height - 21
                );
                context.stroke();
            }
            // draw rect
            context.setLineDash([0, 0]);
            context.lineWidth = 2;
            context.strokeStyle = '#fff';
            context.beginPath();
            context.strokeRect(52, 16, canvas.width - 80, canvas.height - 32);

            // draw scale temp
            context.setLineDash([0, 0]);
            context.lineJoin = 'round';
            context.lineWidth = 4;
            context.strokeStyle = colors.colorScale;
            context.beginPath();
            context.moveTo(53, convertTempToHeight(tempArray[0]) + 20);
            for (let i = 0; i < tempArray.length; i++) {
                const numb = tempArray[i];
                context.lineTo(
                    53 + ((canvas.width - 80) / 47) * i,
                    convertTempToHeight(numb) + 20
                );
            }
            context.stroke();
            context.fillStyle = colors.colorDot;
            for (let i = 1; i < tempArray.length - 1; i++) {
                const numb = tempArray[i];
                context.beginPath();
                context.arc(
                    53 + ((canvas.width - 80) / 47) * i,
                    convertTempToHeight(numb) + 20,
                    3.5,
                    0,
                    Math.PI * 2
                );
                context.fill();
            }
        }
    }, [appClasses, myCity]);

    return <canvas ref={canvasRef}></canvas>;
};

export default ScaleTemp;

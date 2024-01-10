import { useEffect, useState } from 'react';

const SaleTimer = () => {
    const targetDate = new Date('2024-01-31T23:59:59');
    const calculateTimeLeft = () => {
        const difference = targetDate.getTime() - new Date().getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, calculateTimeLeft]);



    return (
        <div role="alert" className="alert alert-warning shadow-lg">
            <h3 className="font-bold">Sale Is Live!</h3>
            <div className="flex gap-5 mx-auto">
                <div className="flex gap-5 mx-auto">
                    <div>
                        <span className="countdown font-mono text-4xl" >{timeLeft.days}</span>
                        days
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl" >{timeLeft.hours}</span>
                        hours
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl" >{timeLeft.minutes}</span>
                        min
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl" >{timeLeft.seconds}</span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleTimer;

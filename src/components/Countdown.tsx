import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';

interface CountdownTimerProps {
	targetDate: string;
}

interface TimeLeft {
	days: number | string;
	hours: number | string;
	minutes: number | string;
	seconds: number | string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const targetDateObject = useMemo(() => new Date(targetDate), [targetDate]);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			const now = new Date();
			const timeDifference = targetDateObject.getTime() - now.getTime();
			const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000).toString().padStart(2, '0');
			const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');

			if (timeDifference <= 0) {
				clearInterval(countdownInterval);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				return;
			}

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, [targetDateObject]);

	if (isNaN(targetDateObject.getTime())) {
		return <div>Invalid target date.</div>;
	}

	return (
		<div>
			<p>{`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</p>
		</div>
	);
};

export default CountdownTimer;

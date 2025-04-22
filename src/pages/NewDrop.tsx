import CountdownTimer from "../components/Countdown";

const NewDrop = () => {
	const targetDate = '2025-05-01T01:01:01';

	return (
		<CountdownTimer targetDate={targetDate} />
	);
}

export default NewDrop;

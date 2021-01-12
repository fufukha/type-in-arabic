type StatsProps = {
	errors: number;
	cpm: number;
};
const Stats: React.FC<StatsProps> = ({ errors, cpm }) => {
	return (
		<div>
			<span>{`Typos ${errors}  CPM ${cpm}`}</span>
		</div>
	);
};

export default Stats;

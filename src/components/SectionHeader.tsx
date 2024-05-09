import Line from '../assets/horizontalLine.svg?react';

interface SectionHeaderProps {
	number: string,
	title: string,
}

function SectionHeader({number, title} : SectionHeaderProps) {
	return (
		<div className="content-header-container">
			<h2 className="code-font content-header">
				<span className="text-purple-gradient">{number}</span>{title}
			</h2>
			<div className="content-seperator">
				<Line />
			</div>
		</div>
	)
}

export default SectionHeader;
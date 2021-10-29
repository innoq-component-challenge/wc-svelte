
<!-- 
import { useContext } from 'preact/hooks';
import { createContext } from 'preact';

const HeadingLevel = createContext(0);

export let Section = ({ children }) => {
	let headingLevel = useContext(HeadingLevel);

	return <HeadingLevel.Provider value={headingLevel + 1}>{children}</HeadingLevel.Provider>;
}

export let Heading = ({ children }) => {
	let headingLevel = useContext(HeadingLevel);
	let HeaderTag = `h${headingLevel}`;
	return <HeaderTag>{children}</HeaderTag>;
}

export default {
	Section, Heading
}
-->
interface IHeadingProps {
	children: React.ReactNode
}

const Heading: React.FC<IHeadingProps> = ({ children }) => {
	return <h1 className='font-mono text-3xl pb-3'>{children}</h1>
}

export default Heading

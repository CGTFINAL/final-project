interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({children}:WrapperProps) => {
    return (
        <div className='section'>
            <div className='container'>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;

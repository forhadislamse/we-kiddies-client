const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-auto text-center text-white font-bold bg-cyan-200 
        w-full md:w-4/12 my-8">
            <h3 className="text-xl uppercase p-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
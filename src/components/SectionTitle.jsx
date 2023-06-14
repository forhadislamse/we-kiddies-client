const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-auto text-center text-white font-bold bg-cyan-200 w-4/12 sm:w-4/12 my-8">
            <h3 className="text-3xl uppercase py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
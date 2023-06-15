

const ToyCard = ({ item }) => {
    const { image, Price, Rating, toy_name } = item;
    return (
        <div className="mx-auto">
            <div className="card w-96 bg-cyan-100">
                <figure><img className="mt-2" src={image} alt="Shoes" /></figure>

                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Rating:{Rating}</p>
                    <p>Price:${Price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100  mt-4">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;
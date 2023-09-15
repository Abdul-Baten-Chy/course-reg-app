

const Card = ({handleAddCourseName, card}) => {
    const  {image, course_title, course_details, course_credit_hour, course_price}=card
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
             <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{course_title}</h2>
                <p>{course_details}</p>
                <div className="flex gap-6 justify-between">
                <p>Price : {course_price}</p>
                <p>Credits : {course_credit_hour}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary w-56" onClick={()=>handleAddCourseName(card)}>Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;
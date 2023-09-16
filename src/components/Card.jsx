
import { FaDollarSign, FaBook } from 'react-icons/fa';
const Card = ({handleAddCourseName, card}) => {
    const  {id, image, course_title, course_details, course_credit_hour, course_price}=card
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-auto">
             <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{course_title}</h2>
                <p className="text-left">{course_details}</p>
                <div className="flex gap-6 justify-start items-center">
                <p><FaDollarSign /></p>
                <p className='-ml-4'> Price : {course_price}</p>
                <p className='-mr-4'><FaBook></FaBook></p>
                <p>Credits : {course_credit_hour}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary w-56" onClick={()=>handleAddCourseName(card, id)}>Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;


const Aside = ({coUrseName: courseName,totalCredits,credit}) => {
    return (
        <div className="bg-gray-100 rounded-xl w-56 p-4">
           <h1 className="text-base text-blue-500">Credit Hour Remaining {credit} hr</h1>
           <hr />
           
           {
            courseName.map((card, idx)=><li key={idx} type="1">{card.course_title}</li>)
           }
           <hr />
           <p>Total credit {totalCredits}</p>
        </div>
    );
};

export default Aside;
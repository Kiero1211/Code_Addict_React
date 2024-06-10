import { FaAngleDoubleRight } from 'react-icons/fa';


function Tabs({jobs, props, onClick, index}) {
    const {title, dates, duties, company} = props;
    return (
        <>
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((item, itemIndex) => {
                        return (
                            <button 
                                key={itemIndex}
                                onClick={() => onClick(itemIndex)}
                                className={`job-btn ${index === itemIndex && "active-btn"}`}
                            >
                                {item.company}
                            </button>
                        );
                    })}
                </div>
                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-dates">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>

            </div>
        </>
    );
}

export default Tabs
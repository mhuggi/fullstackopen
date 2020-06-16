import React from 'react';

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const Course = ({ course }) => {
    return (
        <div>
            {course.map((x, i) => {
                let allExer = []
                return (
                    <div>
                        <Header key={x.id} course={x.name} />
                        {x.parts.map((y, i) => {
                            allExer.push(y.exercises)
                            return (
                                <Content key={y.id} part={y.name} exercises={y.exercises} />
                            )
                        }
                        )
                        }
                        <Total exercises={allExer.reduce(reducer)} />
                    </div>)
            }

            )}
        </div>

    )
}

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p><b>
                total of {props.exercises} exercises
                </b></p>
        </div>
    )
}


export default Course


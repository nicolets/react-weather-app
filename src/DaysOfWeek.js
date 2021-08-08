function DaysOfWeek(props) {
    const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return <h1>{allDays[props.numberToDay]}</h1>
}

export default DaysOfWeek;
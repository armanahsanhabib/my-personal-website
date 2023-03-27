import "../../css/home/stats-section.css";

const stats = [
    {
        StatTitle: "Projects done",
        iconName: "rocket-launch",
        StatCount: 0
    },
    {
        StatTitle: "Happy Clients",
        iconName: "user-group",
        StatCount: 0
    },
    {
        StatTitle: "Cups of Coffe",
        iconName: "mug-hot",
        StatCount: 864
    },
    {
        StatTitle: "Sleepless night",
        iconName: "moon",
        StatCount: 432
    },
];

const StatsItem = (props) => {
    return (
        <div className="stats-item">
            <div className="icon">
                <i className={`fa-light fa-${props.iconName}`}></i>
            </div>
            <div className="counts">
                {props.StatCount}
            </div>
            <p className="title">
                {props.StatTitle}
            </p>
        </div>
    );
}

const StatsSection = () => {
    return (
        <div className="stats-section">
            <div className="container">
                {/*                 <StatsItem
                    iconName="user-group"
                    StatCount="256"
                    StatTitle="Cups of tea"
                /> */}
                {
                    stats.map((i) => (
                        <StatsItem
                            iconName={i.iconName}
                            StatCount={i.StatCount}
                            StatTitle={i.StatTitle}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default StatsSection;
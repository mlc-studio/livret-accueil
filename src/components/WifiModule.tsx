import Module from "./Module";

const WifiModule = ({ data }) => {
    return (
        <>
            <Module title={data.title} icon={data.icon} />
        </>
    );
}

export default WifiModule;
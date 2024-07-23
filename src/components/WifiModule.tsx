import Module from "./Module";

const WifiModule = ({ data }: any) => {
    return (
        <>
            <Module title={data.title} icon={data.icon} />
        </>
    );
}

export default WifiModule;
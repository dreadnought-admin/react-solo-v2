import WaifuContainer from "./WaifuContainer"

const WaifuHome = ({ waifuData }) => {
    return (
        <div className="temporary">
            <WaifuContainer waifuData={waifuData}/>
        </div>
    );
};

export default WaifuHome;
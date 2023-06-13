import {Puff} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
        <Puff
        height="80"
        width="80"
        radius={1}
        color="#00BFFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} 
        />
    </div>
  )
}

export default Loading
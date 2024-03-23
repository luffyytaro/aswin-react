import { memo } from "react";

function Counter2 ({count2}) {
    console.log("counter2");
    return(
        <h2>{count2}</h2>
    );
}
export default memo(Counter2);


//memo and useMemo are different but have similar functions
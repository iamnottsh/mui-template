import {Badge, Button} from "@mui/material";
import {useState} from "react";

function Unit({start}: { start: number }) {
    const [count, setCount] = useState(start)

    return (
        <Badge badgeContent={count} color="secondary">
            <Button
                variant="contained"
                size="large"
                onClick={() => setCount(count + 1)}
            >
                点我
            </Button>
        </Badge>
    )
}

export default Unit
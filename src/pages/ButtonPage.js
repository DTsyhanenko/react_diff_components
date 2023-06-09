import { GoBell, GoCloudDownload, GoBriefcase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button secondary outline rounded onClick={handleClick}>
                    <GoBell />
                    Click 1
                </Button>
            </div>
            <div>
                <Button danger outline onClick={handleClick}>
                    <GoCloudDownload />
                    Click 2
                </Button>
            </div>
            <div>
                <Button warning onClick={handleClick}>
                    <GoBriefcase />
                    Click 3
                </Button>
            </div>
            <div>
                <Button success outline onClick={handleClick}>Click 4</Button>
            </div>
            <div>
                <Button primary rounded onClick={handleClick}>Click 5</Button>
            </div>
        </div>
    );
}

export default ButtonPage;
import { GoBell, GoCloudDownload, GoBriefcase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {

    return (
        <div>
            <div>
                <Button secondary outline rounded className="mb-5">
                    <GoBell />
                    Click 1
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Click 2
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoBriefcase />
                    Click 3
                </Button>
            </div>
            <div>
                <Button success outline>Click 4</Button>
            </div>
            <div>
                <Button primary rounded>Click 5</Button>
            </div>
        </div>
    );
}

export default ButtonPage;
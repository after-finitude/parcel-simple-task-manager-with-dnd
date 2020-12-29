import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "mutationobserver-shim";

Enzyme.configure({ adapter: new Adapter() });

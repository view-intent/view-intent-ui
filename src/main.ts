export { IconAbstract, Icon } from "./components/util/icon";
export { Pop } from "./components/util/pop";
export { Teleport, TeleportTarget } from "./components/util/teleport";
export { Modal } from "./components/util/modal";
export { CssEntry } from "./components/util/css-entry";
// form ------------------
export { Textbox } from "./components/form/textbox";
export { Button } from "./components/form/button";
export { Checkbox } from "./components/form/checkbox";
export { Selectbox } from "./components/form/selectbox";
export { Group } from "./components/form/group";
// export { Stacker } from "./components/util/stacker";
// export { StackerTarget } from "./components/util/stackerTarget";
// ---
export { IConfigOptions } from "./components/config/options";
import { Options, IConfigOptions } from "./components/config/options";

export namespace ViewIntentUI {
	export function config(options: IConfigOptions): void {
		Options.set(options);
	}
}
export default ViewIntentUI;
